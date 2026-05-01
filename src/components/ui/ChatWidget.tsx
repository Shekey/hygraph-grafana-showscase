/**
 * ChatWidget — Floating AI bike advisor chat panel
 * - 'use client' component (manages local state + streaming fetch)
 * - Dark-mode aware via next-themes (useTheme pattern matches DarkModeToggle)
 * - Mounted guard to avoid hydration mismatch (same pattern as DarkModeToggle)
 * - SSE streaming via fetch + ReadableStream reader
 * - Stateless: full conversation history is sent with every request
 */

"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useTheme } from "next-themes";
import { MessageCircle, X, Send, Bot } from "lucide-react";

interface Message {
  role: "user" | "model";
  content: string;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [mounted, setMounted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const { resolvedTheme } = useTheme();

  // Avoid hydration mismatch — same pattern as DarkModeToggle
  useEffect(() => {
    setMounted(true);
  }, []);

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when panel opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const sendMessage = useCallback(async () => {
    const trimmed = input.trim();
    if (!trimmed || isStreaming) return;

    const userMessage: Message = { role: "user", content: trimmed };
    const nextMessages = [...messages, userMessage];

    setMessages(nextMessages);
    setInput("");
    setIsStreaming(true);

    // Optimistically add empty model message to stream into
    setMessages((prev) => [...prev, { role: "model", content: "" }]);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });

      if (!response.ok || !response.body) {
        throw new Error(`HTTP ${response.status}`);
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });

        // SSE lines are separated by \n\n
        const lines = buffer.split("\n\n");
        buffer = lines.pop() ?? ""; // keep incomplete last chunk

        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          const payload = line.slice(6); // strip "data: "

          if (payload === "[DONE]") break;

          try {
            const parsed = JSON.parse(payload);
            if (parsed.error) {
              setMessages((prev) => {
                const updated = [...prev];
                updated[updated.length - 1] = {
                  role: "model",
                  content: "Sorry, something went wrong. Please try again.",
                };
                return updated;
              });
              break;
            }
            if (parsed.text) {
              setMessages((prev) => {
                const updated = [...prev];
                updated[updated.length - 1] = {
                  role: "model",
                  content: updated[updated.length - 1].content + parsed.text,
                };
                return updated;
              });
            }
          } catch {
            // Malformed chunk — skip
          }
        }
      }
    } catch (err) {
      console.error("[ChatWidget] fetch error:", err);
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: "model",
          content: "Connection error. Please check your network and try again.",
        };
        return updated;
      });
    } finally {
      setIsStreaming(false);
    }
  }, [input, messages, isStreaming]);

  // Submit on Enter (Shift+Enter inserts newline)
  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  // Don't render until mounted — prevents theme flicker on SSR
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <>
      {/* Floating action button */}
      <button
        onClick={() => setIsOpen((o) => !o)}
        aria-label={isOpen ? "Close bike advisor chat" : "Open bike advisor chat"}
        className={`
          fixed bottom-6 right-6 z-50
          flex items-center justify-center
          w-14 h-14
          bg-brand text-white
          shadow-glow
          hover:bg-brand-hover
          transition-all duration-200
          focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2
        `}
        style={{ borderRadius: 0 }}
      >
        {isOpen ? <X size={22} strokeWidth={2} /> : <MessageCircle size={22} strokeWidth={1.5} />}
      </button>

      {/* Chat panel */}
      {isOpen && (
        <div
          className={`
            fixed bottom-24 right-6 z-50
            w-[min(380px,calc(100vw-3rem))]
            flex flex-col
            border border-primary
            shadow-soft-xl
            ${isDark ? "bg-primary text-secondary" : "bg-secondary text-primary"}
          `}
          style={{ height: "min(520px, calc(100dvh - 120px))" }}
          role="dialog"
          aria-label="HyBike AI Advisor"
        >
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-primary/20 bg-brand text-white flex-shrink-0">
            <Bot size={18} strokeWidth={1.5} />
            <div>
              <p className="uppercase tracking-[0.1em]" style={{ fontSize: "0.7rem", fontWeight: 700 }}>
                HyBike Advisor
              </p>
              <p style={{ fontSize: "0.6rem", opacity: 0.8 }}>Powered by Gemini</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.length === 0 && (
              <p
                className="text-muted text-center pt-8"
                style={{ fontSize: "0.8rem", lineHeight: 1.6 }}
              >
                Hi! I'm your HyBike AI Advisor. Ask me anything about our e-bikes — range, models, specs, or help choosing the right ride.
              </p>
            )}

            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`
                    max-w-[85%] px-3 py-2
                    ${msg.role === "user"
                      ? "bg-brand text-white"
                      : isDark
                        ? "bg-gray-800 text-secondary border border-primary/30"
                        : "bg-gray-100 text-primary border border-primary/10"
                    }
                  `}
                  style={{ fontSize: "0.82rem", lineHeight: 1.55 }}
                >
                  {msg.content || (
                    // Streaming cursor
                    <span className="inline-block w-2 h-3 bg-current animate-pulse" />
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className={`flex items-end gap-0 border-t ${isDark ? "border-primary/30" : "border-primary/20"} flex-shrink-0`}>
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about HyBike e-bikes..."
              rows={1}
              disabled={isStreaming}
              className={`
                flex-1 px-4 py-3 resize-none bg-transparent
                placeholder-muted/50
                focus:outline-none
                disabled:opacity-50
              `}
              style={{ fontSize: "0.82rem", maxHeight: "96px" }}
            />
            <button
              onClick={sendMessage}
              disabled={isStreaming || !input.trim()}
              aria-label="Send message"
              className="px-4 py-3 text-brand hover:text-brand-hover disabled:opacity-30 disabled:cursor-not-allowed transition-colors flex-shrink-0"
            >
              <Send size={16} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
