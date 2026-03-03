"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { useAudience } from "@/lib/context/AudienceContext";
import type { GetSegmentsQuery } from "@/types/hygraph-generated";

type Segment = GetSegmentsQuery["segments"][0];

interface SegmentSwitcherProps {
  segments: Segment[];
}

export default function SegmentSwitcher({ segments }: SegmentSwitcherProps) {
  const { audience, setAudience } = useAudience();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const activeSegment =
    segments.find((s) => s.name === audience) ??
    segments.find((s) => s.name === "Default");

  return (
    <div className="fixed bottom-4 right-4 z-50" ref={ref}>
      <div
        className="bg-primary text-secondary border border-primary"
        style={{ width: "320px" }}
      >
        {/* Header label */}
        <div className="px-4 py-2 border-b border-secondary/20 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
          <span
            style={{
              fontSize: "0.6rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontWeight: 700,
              color: "rgba(249,249,247,0.4)",
            }}
          >
            Active Segment
          </span>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full px-4 py-3 hover:bg-secondary/10 transition-colors"
          style={{
            fontSize: "0.7rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            fontWeight: 700,
          }}
        >
          <span className="text-accent">{activeSegment?.name ?? audience}</span>
          <ChevronDown
            size={11}
            strokeWidth={2}
            className={`transition-transform opacity-50 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {isOpen && (
          <div className="border-t border-secondary/20">
            {segments
              .filter((s) => s.name !== audience)
              .map((segment) => (
                <button
                  key={segment.id}
                  onClick={() => {
                    setAudience(segment.name);
                    setIsOpen(false);
                  }}
                  className="w-full text-left px-4 py-3 border-b border-secondary/10 last:border-b-0 transition-colors hover:bg-secondary/10 text-secondary/60"
                  style={{
                    fontSize: "0.65rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    fontWeight: 500,
                  }}
                >
                  {segment.name}
                </button>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
