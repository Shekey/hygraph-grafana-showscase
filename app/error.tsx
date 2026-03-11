"use client";

import ErrorCard from "@/components/ErrorCard";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="min-h-screen flex flex-col bg-secondary text-primary">
      <div className="flex-1 flex items-center justify-center p-8">
        <ErrorCard error={error} reset={reset} />
      </div>
    </div>
  );
}
