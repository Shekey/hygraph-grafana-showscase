import { type NextRequest, NextResponse } from "next/server";
import { httpRequestDuration } from "@/lib/metrics";

type RouteHandler = (req: NextRequest, ctx?: unknown) => Promise<Response | NextResponse>;

export function withMetrics(route: string, handler: RouteHandler): RouteHandler {
  return async (req, ctx) => {
    const t0 = performance.now();
    try {
      const response = await handler(req, ctx);
      const durationMs = (performance.now() - t0) / 1000;
      httpRequestDuration.record(durationMs, {
        method: req.method,
        route,
        status_code: String(response.status),
      });
      return response;
    } catch (err) {
      const durationMs = (performance.now() - t0) / 1000;
      httpRequestDuration.record(durationMs, {
        method: req.method,
        route,
        status_code: "500",
      });
      throw err;
    }
  };
}
