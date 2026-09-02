import { NextResponse } from "next/server";
import { processLeadSubmission } from "@/lib/lead-pipeline";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, fullName, email, workEmail, phone, countryCode, projectFocus, timeline, estimatedTimeline, projectOverview } = body;

    const fullPhoneNumber = phone ? `${countryCode || ""} ${phone}`.trim() : "";

    const result = await processLeadSubmission({
      fullName: fullName || name || "",
      workEmail: workEmail || email || "",
      phone: fullPhoneNumber,
      projectFocus: projectFocus || "Custom Web / SaaS Development",
      estimatedTimeline: estimatedTimeline || timeline || "Immediate (<30 Days)",
      projectOverview: projectOverview || "",
      source: "discovery_form",
    });

    if (!result.success) {
      return NextResponse.json(result, { status: 400 });
    }

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error("Discovery form API error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error processing discovery brief." },
      { status: 500 }
    );
  }
}
