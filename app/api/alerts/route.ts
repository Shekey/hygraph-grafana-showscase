import { NextRequest, NextResponse } from "next/server";
import { diagnoseProblem } from "@/lib/alert-diagnosis";
import { getAlertNameFromPayload } from "@/lib/alert-utils";

interface AlertPayload {
  title: string;
  state: "firing" | "ok";
  alerts: Array<{
    labels: Record<string, string>;
    values: Record<string, number>;
    startsAt: string;
  }>;
}

async function sendTelegramMessage(message: string): Promise<boolean> {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.error("Telegram config missing:", { botToken: !!botToken, chatId: !!chatId });
    return false;
  }

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: "Markdown",
        }),
      }
    );

    if (!response.ok) {
      const error = await response.text();
      console.error("Telegram API error:", error);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Failed to send Telegram message:", error);
    return false;
  }
}

function formatAlertMessage(
  summary: string,
  causes: string[],
  steps: string[],
  severity: "critical" | "high" | "medium"
): string {
  const icons: Record<string, string> = {
    critical: "🔴",
    high: "🟠",
    medium: "🟡",
  };

  const icon = icons[severity];
  let message = `${icon} *${summary}*\n\n`;

  if (causes.length > 0) {
    message += "*Likely causes:*\n";
    causes.forEach((cause, i) => {
      message += `${i + 1}. ${cause}\n`;
    });
    message += "\n";
  }

  if (steps.length > 0) {
    message += "*Immediate steps:*\n";
    steps.forEach((step, i) => {
      message += `${i + 1}. ${step}\n`;
    });
  }

  return message;
}

async function triggerInvestigation(
  alertname: string,
  metricValue: number,
  firedAt: string
): Promise<void> {
  const token = process.env.GITHUB_ACTIONS_TOKEN;
  if (!token) {
    console.log("[investigation] GITHUB_ACTIONS_TOKEN not set, skipping workflow trigger");
    return;
  }

  try {
    const response = await fetch(
      "https://api.github.com/repos/Shekey/hygraph-grafana-showscase/actions/workflows/investigate.yml/dispatches",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ref: "main",
          inputs: {
            alertname,
            metric_value: String(metricValue),
            fired_at: firedAt,
          },
        }),
      }
    );

    if (!response.ok) {
      const error = await response.text();
      console.error("[investigation] workflow_dispatch failed:", response.status, error);
      return;
    }

    console.log(`[investigation] workflow triggered for ${alertname}`);
  } catch (error) {
    console.error("[investigation] failed to trigger workflow:", error);
  }
}

export async function POST(request: NextRequest) {
  // Validate Bearer token
  const authHeader = request.headers.get("authorization");
  const webhookSecret = process.env.ALERT_WEBHOOK_SECRET;

  if (!webhookSecret) {
    console.error("ALERT_WEBHOOK_SECRET not configured");
    return NextResponse.json(
      { error: "Webhook not configured" },
      { status: 500 }
    );
  }

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const token = authHeader.slice(7);
  if (token !== webhookSecret) {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }

  let payload: AlertPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Handle resolved alerts
  if (payload.state === "ok") {
    const message = `✅ *Alert Resolved*\n\n${payload.title}`;
    await sendTelegramMessage(message);
    return NextResponse.json({ status: "resolved" });
  }

  // Send immediate acknowledgment
  const alertname = getAlertNameFromPayload(payload);
  const metricValue = Object.values(payload.alerts[0]?.values || {})[0] || 0;
  const ackMessage = `⚠️ *${alertname} firing — investigating...*`;
  await sendTelegramMessage(ackMessage);

  // Trigger investigation workflow (fire-and-forget)
  triggerInvestigation(alertname, metricValue, payload.alerts[0]?.startsAt || new Date().toISOString()).catch(
    (error) => console.error("[investigation] trigger failed:", error)
  );

  // Diagnose firing alert (fallback if workflow not available)
  try {
    const diagnosis = await diagnoseProblem(payload);

    const message = formatAlertMessage(
      diagnosis.summary,
      diagnosis.causes,
      diagnosis.steps,
      diagnosis.severity
    );

    const sent = await sendTelegramMessage(message);

    if (!sent) {
      return NextResponse.json(
        { error: "Failed to send Telegram message" },
        { status: 502 }
      );
    }

    return NextResponse.json({
      status: "sent",
      diagnosis,
    });
  } catch (error) {
    console.error("Alert diagnosis failed:", error);

    // Still try to send a basic alert even if diagnosis fails
    const fallbackMessage = `⚠️ *Alert: ${payload.title}*\n\n_Diagnosis failed, check Grafana directly._`;
    await sendTelegramMessage(fallbackMessage);

    return NextResponse.json(
      {
        error: "Diagnosis failed",
        alert: payload.title,
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 200 }
    );
  }
}
