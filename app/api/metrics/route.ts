import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  if (process.env.NODE_ENV === "production") {
    return new NextResponse("Not available in production", { status: 404 });
  }
  return new NextResponse("Metrics are sent to GCP Cloud Monitoring. Use Grafana to visualize.", {
    status: 200,
    headers: { "Content-Type": "text/plain" },
  });
}
