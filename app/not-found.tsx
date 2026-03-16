/**
 * 404 Not Found Page
 */

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-secondary text-primary">
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="max-w-lg w-full border border-primary">
          {/* Headline */}
          <div className="p-8 md:p-12 border-b border-primary">
            <p
              className="uppercase tracking-[0.2em] text-muted mb-3"
              style={{ fontSize: "0.65rem", fontWeight: 700 }}
            >
              Error 404
            </p>
            <h2 className="mb-0">
              Page not found<span className="text-brand">.</span>
            </h2>
          </div>

          {/* Message */}
          <div className="p-8 md:p-12 border-b border-primary">
            <p className="text-muted" style={{ lineHeight: 1.7 }}>
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
          </div>

          {/* CTA */}
          <div className="p-8 md:p-12">
            <Link
              href="/en"
              className="w-full bg-brand text-white py-4 px-6 uppercase tracking-[0.15em] hover:bg-brand/90 transition-colors flex items-center justify-center gap-3"
              style={{ fontSize: "0.8rem", fontWeight: 700 }}
            >
              Go Home
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
