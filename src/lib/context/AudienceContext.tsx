'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export type Audience = string;

interface AudienceContextType {
  audience: Audience;
  setAudience: (audience: Audience) => void;
}

const AudienceContext = createContext<AudienceContextType | undefined>(undefined);

/**
 * Set a cookie value
 */
function setCookie(name: string, value: string, days: number = 365) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

/**
 * Get a cookie value
 */
function getCookie(name: string): string | null {
  const nameEQ = `${name}=`;
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

export function AudienceProvider({ children }: { children: React.ReactNode }) {
  const [audience, setAudienceState] = useState<Audience>('Default');
  const router = useRouter();

  // Load from cookie (or fallback to localStorage) on mount
  useEffect(() => {
    const stored = getCookie('hybike-audience') || localStorage.getItem('hybike-audience');
    if (stored) {
      setAudienceState(stored);
    }
  }, []);

  const setAudience = (newAudience: Audience) => {
    setAudienceState(newAudience);
    localStorage.setItem('hybike-audience', newAudience);
    setCookie('hybike-audience', newAudience);
    // Soft-refresh server components with the new cookie, no full page reload
    router.refresh();
  };

  return (
    <AudienceContext.Provider value={{ audience, setAudience }}>
      {children}
    </AudienceContext.Provider>
  );
}

export function useAudience() {
  const context = useContext(AudienceContext);
  if (!context) {
    throw new Error('useAudience must be used within AudienceProvider');
  }
  return context;
}
