"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export type SegmentId = string | null;

interface SegmentContextType {
  segmentId: SegmentId;
  setSegmentId: (id: SegmentId) => void;
}

const SegmentContext = createContext<SegmentContextType | undefined>(undefined);

function setCookie(name: string, value: string, days: number = 365) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

function deleteCookie(name: string) {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
}

function getCookie(name: string): string | null {
  const nameEQ = `${name}=`;
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

export function SegmentProvider({ children }: { children: React.ReactNode }) {
  const [segmentId, setSegmentIdState] = useState<SegmentId>(null);
  const router = useRouter();

  useEffect(() => {
    const stored =
      getCookie("hybike-segment") || localStorage.getItem("hybike-segment");

    if (stored) {
      setSegmentIdState(stored);
    }
  }, []);

  const setSegmentId = (id: SegmentId) => {
    setSegmentIdState(id);
    if (id) {
      localStorage.setItem("hybike-segment", id);
      setCookie("hybike-segment", id);
    } else {
      localStorage.removeItem("hybike-segment");
      deleteCookie("hybike-segment");
    }
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
