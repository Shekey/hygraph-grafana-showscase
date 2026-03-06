"use client";

import { createContext, useContext } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export type SegmentId = string | null;

interface SegmentContextType {
  segmentId: SegmentId;
  setSegmentId: (id: SegmentId) => void;
}

const SegmentContext = createContext<SegmentContextType | undefined>(undefined);

export function SegmentProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const segmentId = searchParams.get("segment") ?? null;

  const setSegmentId = (id: SegmentId) => {
    const params = new URLSearchParams(searchParams.toString());
    if (id) {
      params.set("segment", id);
    } else {
      params.delete("segment");
    }
    const query = params.toString();
    router.replace(pathname + (query ? `?${query}` : ""));
    router.refresh();
  };

  return (
    <SegmentContext.Provider value={{ segmentId, setSegmentId }}>
      {children}
    </SegmentContext.Provider>
  );
}

export function useSegment() {
  const context = useContext(SegmentContext);
  if (!context) {
    throw new Error("useSegment must be used within SegmentProvider");
  }
  return context;
}
