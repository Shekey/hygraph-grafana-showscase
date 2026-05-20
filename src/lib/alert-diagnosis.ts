import { VertexAI } from "@google-cloud/vertexai";

interface DiagnosisResult {
  summary: string;
  causes: string[];
  steps: string[];
  severity: "critical" | "high" | "medium";
}

interface AlertPayload {
  title: string;
  state: "firing" | "ok";
  alerts: Array<{
    labels: Record<string, string>;
    values: Record<string, number>;
    startsAt: string;
  }>;
}

const PROJECT_ID = process.env.GCP_PROJECT_ID;
const VERTEX_AI_LOCATION = process.env.VERTEX_AI_LOCATION || "europe-west3";

// Minimal context to stay under token budget. Gemini 2.5-flash uses extended thinking,
// so maxOutputTokens: 4096 allows ~1000 for thinking + rest for actual response.
const INFRA_CONTEXT = `Cloud Run app. Cold start → high latency/5xx. OOM → crash. Hygraph slow → timeouts. Bad deploy → errors. Return JSON only.`;

export async function diagnoseProblem(
  payload: AlertPayload
): Promise<DiagnosisResult> {
  if (!PROJECT_ID) {
    throw new Error("GCP_PROJECT_ID not set");
  }

  const vertexAI = new VertexAI({
    project: PROJECT_ID,
    location: VERTEX_AI_LOCATION,
  });

  const model = vertexAI.getGenerativeModel({
    model: "gemini-2.5-flash",
  });

  const alertDetails = payload.alerts[0];
  const alertname = alertDetails.labels.alertname || payload.title;
  const metricValues = Object.entries(alertDetails.values)
    .map(([k, v]) => `${k}=${v}`)
    .join(", ");

  // Minimal prompt to avoid thinking token overhead
  const userPrompt = `${INFRA_CONTEXT} Alert: ${alertname} (${metricValues}). JSON: {"summary":"","causes":[],"steps":[],"severity":"high"}`;

  const response = await model.generateContent({
    contents: [
      {
        role: "user",
        parts: [
          {
            text: userPrompt,
          },
        ],
      },
    ],
    generationConfig: {
      maxOutputTokens: 4096,
      temperature: 0.1,
    },
  });

  const responseText =
    response.response.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!responseText) {
    throw new Error("No response from Gemini");
  }

  // Extract JSON from response
  const jsonMatch = responseText.match(/\{[\s\S]*\}/);
  if (!jsonMatch) {
    throw new Error("No JSON found in Gemini response");
  }

  const result = JSON.parse(jsonMatch[0]);

  // Validate and normalize
  return {
    summary: String(result.summary || "Alert fired").substring(0, 200),
    causes: Array.isArray(result.causes) ? result.causes.slice(0, 5) : [],
    steps: Array.isArray(result.steps) ? result.steps.slice(0, 3) : [],
    severity: ["critical", "high", "medium"].includes(result.severity)
      ? result.severity
      : "high",
  };
}
