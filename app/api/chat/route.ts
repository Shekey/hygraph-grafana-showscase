/**
 * Chat API — Vertex AI Gemini bike advisor
 * Stateless, streaming (ReadableStream / SSE-compatible).
 * Auth: Application Default Credentials (ADC).
 *   - Local:      gcloud auth application-default login
 *   - Cloud Run:  attached service account (roles/aiplatform.user)
 */

import { NextRequest, NextResponse } from "next/server";
import { VertexAI } from "@google-cloud/vertexai";
import { withMetrics } from "@/lib/withMetrics";

export const runtime = "nodejs"; // required — Edge runtime has no ADC support
export const dynamic = "force-dynamic"; // never cache chat responses

const SYSTEM_PROMPT = `You are the HyBike AI Advisor, a helpful and knowledgeable assistant for the HyBike electric bicycle brand.

You help customers:
- Choose the right HyBike e-bike model for their needs (commuting, trail riding, cargo, etc.)
- Understand technical specifications: motor wattage, battery range, weight, frame geometry
- Learn about HyBike accessories, maintenance, and warranty
- Compare HyBike models against each other
- Understand charging, range estimation, and battery care

Keep answers concise and practical. When you don't know a specific HyBike product detail, say so honestly and suggest the customer contact HyBike support directly.

Do not discuss competitor brands, pricing outside of HyBike, or unrelated topics. Always stay on-brand: HyBike stands for quality, sustainability, and the joy of riding.`;

interface ChatMessage {
  role: "user" | "model";
  content: string;
}

interface ChatRequest {
  messages: ChatMessage[];
}

async function handler(request: NextRequest): Promise<Response> {
  // --- Input validation ---
  let body: ChatRequest;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { messages } = body;

  if (!Array.isArray(messages) || messages.length === 0) {
    return NextResponse.json(
      { error: "messages array is required and must not be empty" },
      { status: 400 }
    );
  }

  // Guard: last message must be from the user
  const lastMessage = messages[messages.length - 1];
  if (lastMessage.role !== "user") {
    return NextResponse.json(
      { error: "Last message must have role 'user'" },
      { status: 400 }
    );
  }

  // --- Vertex AI setup ---
  const projectId = process.env.GCP_PROJECT_ID;
  const location = process.env.VERTEX_AI_LOCATION ?? "europe-west3";

  if (!projectId) {
    console.error("[chat] GCP_PROJECT_ID is not set");
    return NextResponse.json(
      { error: "Server misconfiguration: missing GCP_PROJECT_ID" },
      { status: 500 }
    );
  }

  const vertexAI = new VertexAI({ project: projectId, location });
  const model = vertexAI.getGenerativeModel({
    model: "gemini-2.5-flash",
    systemInstruction: {
      role: "system",
      parts: [{ text: SYSTEM_PROMPT }],
    },
    generationConfig: {
      maxOutputTokens: 1024,
      temperature: 0.7,
    },
  });

  // Map our message format to Vertex AI Content[]
  const history = messages.slice(0, -1).map((m) => ({
    role: m.role, // "user" | "model" — matches Vertex AI's expected values
    parts: [{ text: m.content }],
  }));

  const chat = model.startChat({ history });

  // --- Streaming response ---
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      try {
        const streamResult = await chat.sendMessageStream(
          lastMessage.content
        );

        for await (const chunk of streamResult.stream) {
          const text = chunk.candidates?.[0]?.content?.parts?.[0]?.text;
          if (text) {
            // SSE format: "data: <text>\n\n"
            controller.enqueue(
              encoder.encode(`data: ${JSON.stringify({ text })}\n\n`)
            );
          }
        }

        // Signal end of stream
        controller.enqueue(encoder.encode("data: [DONE]\n\n"));
        controller.close();
      } catch (err) {
        console.error("[chat] Vertex AI stream error:", err);
        // Emit an error event in the SSE stream so the client can handle it
        controller.enqueue(
          encoder.encode(
            `data: ${JSON.stringify({ error: "Stream error — please try again" })}\n\n`
          )
        );
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
      // Prevent Sentry / middleware from buffering the stream
      "X-Accel-Buffering": "no",
    },
  });
}

// withMetrics wraps the entire handler.
// Note: for a streaming response, response.status is 200 by the time the timer
// stops, which is correct — measures time-to-first-byte.
export const POST = withMetrics("/api/chat", handler);
