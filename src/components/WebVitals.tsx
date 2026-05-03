"use client";

import { useReportWebVitals } from "next/web-vitals";

export function WebVitals() {
  useReportWebVitals((metric) => {
    console.debug(
      "[WebVitals]",
      metric.name,
      Math.round(metric.value),
      metric.rating || "N/A",
    );

    // Forward to OTel via API
    const body = JSON.stringify({
      name: metric.name,
      value: metric.value,
      rating: metric.rating,
      id: metric.id,
      navigationType: metric.navigationType,
      route: typeof window !== "undefined" ? window.location.pathname : "unknown",
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
