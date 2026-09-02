import { NextResponse } from "next/server";
import { SERVICES } from "@/lib/constants";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  if (slug) {
    const service = SERVICES.find((s) => s.slug === slug);
    if (!service) {
      return NextResponse.json({ error: "Service not found" }, { status: 404 });
    }
    return NextResponse.json({ service });
  }

  return NextResponse.json({ services: SERVICES });
}
