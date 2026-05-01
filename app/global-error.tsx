"use client";

import "@/styles/globals.css";
import ErrorCard from "@/components/ErrorCard";
import { useEffect } from "react";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col bg-secondary text-primary">
          <div className="flex-1 flex items-center justify-center p-8">
            <ErrorCard error={error} reset={reset} />
          </div>
        </div>
      </body>
    </html>
  );
}
