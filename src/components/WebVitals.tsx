"use client";

import { useReportWebVitals } from "next/web-vitals";
import { usePathname, useParams } from "next/navigation";

function toRouteTemplate(pathname: string, params: Record<string, string | string[]>): string {
  let template = pathname;
  for (const [key, value] of Object.entries(params)) {
    const val = Array.isArray(value) ? value.join('/') : value;
    template = template.replace(val, `[${key}]`);
  }
  return template;
}

export function WebVitals() {
  const pathname = usePathname();
  const params = useParams();

  useReportWebVitals((metric) => {
    console.debug(
      "[WebVitals]",
      metric.name,
      Math.round(metric.value),
      metric.rating || "N/A",
    );

    // Forward to OTel via API
    const route = toRouteTemplate(pathname, params as Record<string, string | string[]>);
    const body = JSON.stringify({
      name: metric.name,
      value: metric.value,
      rating: metric.rating,
      id: metric.id,
      navigationType: metric.navigationType,
      route,
    });

    if (navigator.sendBeacon) {
      navigator.sendBeacon("/api/vitals", new Blob([body], { type: "application/json" }));
    } else {
      fetch("/api/vitals", {
        method: "POST",
        body,
        headers: { "Content-Type": "application/json" },
        keepalive: true,
      }).catch((err) => console.error("[WebVitals] Failed to send metrics:", err));
    }
  });

  return null;
}
