import { hygraphLivePreviewSessions } from "@/lib/metrics";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  const body = await request.json();
  if (body?.action === "inc") {
    hygraphLivePreviewSessions.add(1);
  } else if (body?.action === "dec") {
    hygraphLivePreviewSessions.add(-1);
  } else {
    return NextResponse.json({ error: "Invalid action" }, { status: 400 });
  }
  return NextResponse.json({ ok: true });
}
