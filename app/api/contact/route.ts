import { NextResponse } from "next/server";
import { processLeadSubmission } from "@/lib/lead-pipeline";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, fullName, email, workEmail, phone, projectFocus, estimatedTimeline, message, projectOverview } = body;

    const result = await processLeadSubmission({
      fullName: fullName || name || "",
      workEmail: workEmail || email || "",
      phone: phone || "",
      projectFocus: projectFocus || "General Software Engineering",
      estimatedTimeline: estimatedTimeline || "Exploring",
      projectOverview: projectOverview || message || "",
      source: "contact_form",
    });

    if (!result.success) {
      return NextResponse.json(result, { status: 400 });
    }

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred while processing your request." },
      { status: 500 }
    );
  }
}
