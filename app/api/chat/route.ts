/**
 * Chat API — Vertex AI Gemini bike advisor
 * Stateless, streaming (ReadableStream / SSE-compatible).
 * Auth: Application Default Credentials (ADC).
 *   - Local:      gcloud auth application-default login
 *   - Cloud Run:  attached service account (roles/aiplatform.user)
 */

import { NextRequest, NextResponse } from "next/server";
import type { Part, FunctionCallPart, Content } from "@google-cloud/vertexai";
import { VertexAI } from "@google-cloud/vertexai";
import { withMetrics } from "@/lib/withMetrics";
import {
  HYGRAPH_TOOLS,
  executeHygraphTool,
} from "@/lib/hygraph/chat-tools";

export const runtime = "nodejs"; // required — Edge runtime has no ADC support
export const dynamic = "force-dynamic"; // never cache chat responses

const SYSTEM_PROMPT = `You are the HyBike AI Advisor, a helpful and knowledgeable assistant for the HyBike electric bicycle brand.

You help customers:
- Choose the right HyBike e-bike model for their needs (commuting, trail riding, cargo, etc.)
- Understand technical specifications: motor wattage, battery range, weight, frame geometry
- Learn about HyBike accessories, maintenance, and warranty
- Compare HyBike models against each other
- Understand charging, range estimation, and battery care

When mentioning products, always include a markdown link using the product slug: [Product Name](/product/{slug})

Keep answers concise and practical. When you don't know a specific HyBike product detail, say so honestly and suggest the customer contact HyBike support directly.

Do not discuss competitor brands, pricing outside of HyBike, or unrelated topics. Always stay on-brand: HyBike stands for quality, sustainability, and the joy of riding.`;

interface ChatMessage {
  role: "user" | "model";
  content: string;
}

interface ChatRequest {
  messages: ChatMessage[];
}

function isFunctionCallPart(part: Part): part is FunctionCallPart {
  return "functionCall" in part && part.functionCall !== undefined;
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
    tools: HYGRAPH_TOOLS,
  });

  // Map our message format to Vertex AI Content[]
  const history = messages.slice(0, -1).map((m) => ({
    role: m.role, // "user" | "model" — matches Vertex AI's expected values
    parts: [{ text: m.content }],
  }));

  const chat = model.startChat({ history });

  // --- Streaming response with tool support ---
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      const encode = (text: string) =>
        encoder.encode(`data: ${JSON.stringify({ text })}\n\n`);
      const done = () => encoder.encode("data: [DONE]\n\n");

      try {
        // Phase 1: Streaming with function call detection
        const streamResult = await chat.sendMessageStream(
          lastMessage.content
        );

        const accumulatedParts: Part[] = [];
        let streamHadText = false;

        for await (const chunk of streamResult.stream) {
          const parts = chunk.candidates?.[0]?.content?.parts ?? [];
          for (const part of parts) {
            if (isFunctionCallPart(part)) {
              // Function call detected — stop streaming text, collect all calls
              accumulatedParts.push(part);
            } else if ("text" in part && typeof part.text === "string" && part.text) {
              // Pure text chunk — emit in real time (no tools in this turn)
              controller.enqueue(encode(part.text));
              streamHadText = true;
            }
          }
        }

        // If the first turn was pure text, we are done.
        if (streamHadText && accumulatedParts.length === 0) {
          controller.enqueue(done());
          controller.close();
          return;
        }

        // Phase 2: Tool loop (non-streaming)
        const MAX_TOOL_ROUNDS = 5;
        let toolCallParts = accumulatedParts.filter(isFunctionCallPart);

        for (
          let round = 0;
          round < MAX_TOOL_ROUNDS && toolCallParts.length > 0;
          round++
        ) {
          // Execute all function calls in this round concurrently
          const responseContents: Content[] = [];

          await Promise.all(
            toolCallParts.map(async (callPart) => {
              const { name, args } = callPart.functionCall;
              const result = await executeHygraphTool(
                name,
                args as Record<string, unknown>
              );
              responseContents.push({
                role: "tool",
                parts: [
                  {
                    functionResponse: {
                      name,
                      response: result as object,
                    },
                  },
                ],
              });
            })
          );

          // Send all function responses back in a single non-streaming call
          const followUp = await chat.sendMessage(
            responseContents.flatMap((c) => c.parts)
          );

          const followParts =
            followUp.response.candidates?.[0]?.content?.parts ?? [];

          // Check if this follow-up contains more function calls or final text
          const nextCalls = followParts.filter(isFunctionCallPart);
          const textParts = followParts.filter(
            (p): p is Part & { text: string } =>
              "text" in p && typeof p.text === "string" && Boolean(p.text)
          );

          if (nextCalls.length > 0) {
            // Another round of tool calls — loop
            toolCallParts = nextCalls;
          } else {
            // Final text response — emit as single SSE event and exit
            const fullText = textParts.map((p) => p.text).join("");
            if (fullText) {
              controller.enqueue(encode(fullText));
            }
            controller.enqueue(done());
            controller.close();
            return;
          }
        }

        // Fallback: hit the round cap without getting text
        controller.enqueue(
          encoder.encode(
            `data: ${JSON.stringify({ error: "Tool loop did not produce a text response" })}\n\n`
          )
        );
        controller.enqueue(done());
        controller.close();
      } catch (err) {
        console.error("[chat] Vertex AI error:", err);
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
