"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

interface ContactFormProps {
  topics: string[];
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  topicLabel: string;
  topicPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  submitLabel: string;
  successHeadline: string;
  successBody: string;
}

export default function ContactForm({
  topics,
  nameLabel,
  namePlaceholder,
  emailLabel,
  emailPlaceholder,
  topicLabel,
  topicPlaceholder,
  messageLabel,
  messagePlaceholder,
  submitLabel,
  successHeadline,
  successBody,
}: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-6 py-8">
        <span
          className="text-accent"
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 900,
            fontFamily: "'Space Grotesk', sans-serif",
            lineHeight: 1,
          }}
        >
          ✓
        </span>
        <h2>
          {successHeadline.replace(/\.$/, "")}
          <span className="text-accent">.</span>
        </h2>
        <p className="text-muted" style={{ lineHeight: 1.7 }}>
          {successBody}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            className="block uppercase tracking-[0.15em] text-muted mb-2"
            style={{ fontSize: "0.6rem", fontWeight: 700 }}
          >
            {nameLabel}
          </label>
          <input
            type="text"
            required
            placeholder={namePlaceholder}
            className="w-full border border-primary px-4 py-3 bg-transparent placeholder-muted/50 focus:outline-none focus:border-accent transition-colors"
          />
        </div>
        <div>
          <label
            className="block uppercase tracking-[0.15em] text-muted mb-2"
            style={{ fontSize: "0.6rem", fontWeight: 700 }}
          >
            {emailLabel}
          </label>
          <input
            type="email"
            required
            placeholder={emailPlaceholder}
            className="w-full border border-primary px-4 py-3 bg-transparent placeholder-muted/50 focus:outline-none focus:border-accent transition-colors"
          />
        </div>
      </div>

      {topics.length > 0 && (
        <div>
          <label
            className="block uppercase tracking-[0.15em] text-muted mb-2"
            style={{ fontSize: "0.6rem", fontWeight: 700 }}
          >
            {topicLabel}
          </label>
          <select
            required
            defaultValue=""
            className="w-full border border-primary px-4 py-3 bg-secondary focus:outline-none focus:border-accent transition-colors appearance-none"
          >
            <option value="" disabled>
              {topicPlaceholder}
            </option>
            {topics.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      )}

      <div>
        <label
          className="block uppercase tracking-[0.15em] text-muted mb-2"
          style={{ fontSize: "0.6rem", fontWeight: 700 }}
        >
          {messageLabel}
        </label>
        <textarea
          required
          rows={6}
          placeholder={messagePlaceholder}
          className="w-full border border-primary px-4 py-3 bg-transparent placeholder-muted/50 focus:outline-none focus:border-accent transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center gap-3 bg-primary text-secondary px-10 py-5 uppercase tracking-[0.1em] hover:bg-accent transition-colors"
        style={{ fontSize: "0.75rem", fontWeight: 700 }}
      >
        {submitLabel}
        <ArrowRight size={14} />
      </button>
    </form>
  );
}
