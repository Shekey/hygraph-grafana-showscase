/**
 * Hero Section Component - Split layout (text left, image right)
 * hybikes design: big uppercase typography, orange accent, local image panel
 */

import Link from "next/link";
import type { GetPageQuery } from "@/types/hygraph-generated";
import type { Locale } from "@/lib/utils/locale";

type HeroSectionType = Extract<
  GetPageQuery["pages"][0]["sections"][0],
  { __typename?: "HeroSection" }
>;

interface HeroSectionProps {
  section: HeroSectionType;
  locale: Locale;
}

export default function HeroSection({ section, locale }: HeroSectionProps) {
  const mediaUrl = section.backgroundMedia?.url ?? null;

  if (mediaUrl) {
    return (
      <section className="border-b border-primary">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Left: Typography */}
          <div className="lg:col-span-7 p-8 md:p-12 lg:p-16 flex flex-col border-b lg:border-b-0 lg:border-r border-primary">
            <div>
              {section.label && (
                <p
                  className="uppercase tracking-[0.2em] text-muted mb-8"
                  style={{ fontSize: "0.65rem", fontWeight: 700 }}
                >
                  {section.label}
                </p>
              )}
              <h1 className="relative z-10">
                {section.headline.replace(/\.$/, "")}
                <span className="text-accent">.</span>
              </h1>
            </div>
            <div className="mt-12">
              {section.subheadline && (
                <p
                  className="text-muted max-w-[320px] mb-8"
                  style={{ lineHeight: 1.6 }}
                >
                  {section.subheadline}
                </p>
              )}
              <div className="flex flex-wrap gap-3">
                {section.primaryCTA && (
                  <Link
                    href={section.primaryCTA.href}
                    className="inline-flex items-center gap-3 bg-primary text-secondary px-8 py-4 uppercase tracking-[0.1em] hover:bg-accent transition-colors"
                    style={{ fontSize: "0.75rem", fontWeight: 700 }}
                  >
                    {section.primaryCTA.label}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                )}
                {section.secondaryCTA && (
                  <Link
                    href={section.secondaryCTA.href}
                    className="inline-flex items-center gap-3 border border-primary px-8 py-4 uppercase tracking-[0.1em] hover:bg-primary hover:text-secondary transition-colors"
                    style={{ fontSize: "0.75rem", fontWeight: 700 }}
                  >
                    {section.secondaryCTA.label}
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="lg:col-span-5 relative w-full h-full lg:max-h-[calc(100vh-120px)]">
            <img
              src={mediaUrl}
              alt={section.headline}
              className="object-cover w-full h-full"
            />
            {section.mediaText && (
              <div className="absolute bottom-0 left-0 bg-accent text-white px-6 py-3">
                <p
                  className="uppercase tracking-[0.15em]"
                  style={{ fontSize: "0.65rem", fontWeight: 700 }}
                >
                  {section.mediaText}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }

  // No image: full-width dark hero
  return (
    <section className="border-b border-primary bg-primary min-h-[60vh] flex items-center">
      <div className="p-8 md:p-16 lg:p-24 w-full">
        {section.label && (
          <p
            className="uppercase tracking-[0.2em] text-secondary/50 mb-6"
            style={{ fontSize: "0.65rem", fontWeight: 700 }}
          >
            {section.label}
          </p>
        )}
        <h1 className="text-secondary mb-8 max-w-3xl">
          {section.headline.replace(/\.$/, "")}
          <span className="text-accent">.</span>
        </h1>
        {section.subheadline && (
          <p
            className="text-secondary/70 max-w-lg mb-10"
            style={{ lineHeight: 1.6 }}
          >
            {section.subheadline}
          </p>
        )}
        <div className="flex flex-wrap gap-3">
          {section.primaryCTA && (
            <Link
              href={section.primaryCTA.href}
              className="inline-flex items-center gap-3 bg-accent text-white px-8 py-4 uppercase tracking-[0.1em] hover:bg-accent/90 transition-colors"
              style={{ fontSize: "0.75rem", fontWeight: 700 }}
            >
              {section.primaryCTA.label}
            </Link>
          )}
          {section.secondaryCTA && (
            <Link
              href={section.secondaryCTA.href}
              className="inline-flex items-center gap-3 border border-secondary/40 text-secondary px-8 py-4 uppercase tracking-[0.1em] hover:border-secondary transition-colors"
              style={{ fontSize: "0.75rem", fontWeight: 700 }}
            >
              {section.secondaryCTA.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
