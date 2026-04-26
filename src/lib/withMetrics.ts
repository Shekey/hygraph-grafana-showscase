import { type NextRequest, NextResponse } from "next/server";
import { httpRequestDuration } from "@/lib/metrics";

type RouteHandler = (req: NextRequest, ctx?: unknown) => Promise<Response | NextResponse>;

export function withMetrics(route: string, handler: RouteHandler): RouteHandler {
  return async (req, ctx) => {
    const endTimer = httpRequestDuration.startTimer({ method: req.method, route });
    try {
      const response = await handler(req, ctx);
      endTimer({ status_code: String(response.status) });
      return response;
    } catch (err) {
      endTimer({ status_code: "500" });
      throw err;
    }
  };
}
