interface AlertPayload {
  title: string;
  state: "firing" | "ok";
  alerts: Array<{
    labels: Record<string, string>;
    values: Record<string, number>;
    startsAt: string;
  }>;
}

export function getAlertNameFromPayload(payload: AlertPayload): string {
  const alertDetails = payload.alerts[0];
  return alertDetails?.labels?.alertname || payload.title || "UnknownAlert";
}
