/**
 * SprintStack.digital - Unified Lead Capture & CRM Pipeline
 * Handles: Validation -> Supabase (PostgreSQL) -> Resend Email -> Slack Webhook
 */

export interface LeadSubmission {
  fullName: string;
  workEmail: string;
  phone?: string;
  projectFocus?: string;
  estimatedTimeline?: string;
  projectOverview?: string;
  source?: string;
}

export interface LeadResult {
  success: boolean;
  leadId?: string;
  message: string;
}

// In-memory duplicate submission prevention cache (rate limiting)
const recentSubmissions = new Map<string, number>();

export async function processLeadSubmission(data: LeadSubmission): Promise<LeadResult> {
  const { fullName, workEmail, phone, projectFocus, estimatedTimeline, projectOverview, source = "website" } = data;

  // 1. Strict Server-Side Validation
  if (!fullName || typeof fullName !== "string" || fullName.trim().length < 2) {
    return { success: false, message: "Full name is required (minimum 2 characters)." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!workEmail || typeof workEmail !== "string" || !emailRegex.test(workEmail.trim())) {
    return { success: false, message: "A valid corporate or work email is required." };
  }

  // 2. Duplicate submission protection (60 second cooldown per email)
  const normalizedEmail = workEmail.trim().toLowerCase();
  const lastSubmitted = recentSubmissions.get(normalizedEmail);
  const now = Date.now();

  if (lastSubmitted && now - lastSubmitted < 60000) {
    return {
      success: true,
      message: "We have already received your brief. A Principal Architect will be in touch shortly.",
    };
  }
  recentSubmissions.set(normalizedEmail, now);

  // Clean old entries periodically
  if (recentSubmissions.size > 500) {
    for (const [key, timestamp] of recentSubmissions.entries()) {
      if (now - timestamp > 3600000) {
        recentSubmissions.delete(key);
      }
    }
  }

  const leadId = `lead_${Date.now().toString(36)}_${Math.random().toString(36).substring(2, 6)}`;
  const submissionTimestamp = new Date().toISOString();

  // 3. Optional Supabase PostgreSQL Lead Storage
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_ANON_KEY;

  if (supabaseUrl && supabaseKey && !supabaseUrl.includes("your-project")) {
    try {
      await fetch(`${supabaseUrl}/rest/v1/leads`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
          Prefer: "return=minimal",
        },
        body: JSON.stringify({
          id: leadId,
          full_name: fullName.trim(),
          work_email: normalizedEmail,
          phone: phone ? phone.trim() : null,
          project_focus: projectFocus || "General Software Engineering",
          estimated_timeline: estimatedTimeline || "Exploring",
          project_overview: projectOverview ? projectOverview.trim() : null,
          source,
          created_at: submissionTimestamp,
          status: "NEW",
        }),
      });
    } catch (dbError) {
      console.warn("[SUPABASE_STORAGE_SKIPPED]", dbError);
    }
  }

  // 4. Optional Resend Email Dispatch
  const resendApiKey = process.env.RESEND_API_KEY;
  const notificationEmail = process.env.NOTIFICATION_EMAIL || process.env.CONTACT_EMAIL || "engineering@sprintstack.digital";

  if (resendApiKey && !resendApiKey.startsWith("re_your")) {
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: "SprintStack Leads <notifications@sprintstack.digital>",
          to: [notificationEmail],
          subject: `[New Sprint Lead] ${projectFocus || "Software Build"} - ${fullName}`,
          html: `
            <h2>New Technical Discovery Lead</h2>
            <p><strong>Reference ID:</strong> ${leadId}</p>
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${workEmail}</p>
            <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
            <p><strong>Project Focus:</strong> ${projectFocus || "Not selected"}</p>
            <p><strong>Timeline:</strong> ${estimatedTimeline || "Not selected"}</p>
            <p><strong>Overview:</strong><br/>${projectOverview || "No additional details provided."}</p>
            <p><em>Submitted at ${submissionTimestamp}</em></p>
          `,
        }),
      });
    } catch (emailError) {
      console.warn("[RESEND_DISPATCH_SKIPPED]", emailError);
    }
  }

  // 5. Optional Slack / CRM Webhook Forwarding
  const slackWebhook = process.env.SLACK_WEBHOOK_URL;
  if (slackWebhook && slackWebhook.startsWith("https://")) {
    try {
      await fetch(slackWebhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: `🚀 *New SprintStack Lead: ${fullName}* (${workEmail})\n*Focus:* ${projectFocus}\n*Timeline:* ${estimatedTimeline}\n*Overview:* ${projectOverview?.substring(0, 150)}...`,
        }),
      });
    } catch (webhookError) {
      console.warn("[SLACK_WEBHOOK_SKIPPED]", webhookError);
    }
  }

  return {
    success: true,
    leadId,
    message: "Thank you! Your discovery brief has been received. A Principal Solutions Architect will respond within 24 hours.",
  };
}
