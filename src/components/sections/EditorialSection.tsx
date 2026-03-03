/**
 * Editorial Section Component - hybikes design
 * Handles two layouts:
 *   imageRight=false → 7-col image LEFT + 5-col text RIGHT ("Built by hand")
 *   imageRight=true  → 5-col text LEFT + 7-col image RIGHT ("Carbon fiber" with optional spec grid)
 */

import Link from "next/link";
import { ArrowRight, ArrowDownRight } from "lucide-react";
import type { GetPageQuery } from "@/types/hygraph-generated";

type EditorialSectionType = Extract<
  GetPageQuery["pages"][0]["sections"][0],
  { __typename?: "EditorialSection" }
>;

interface EditorialSectionProps {
  section: EditorialSectionType;
}

export default function EditorialSection({ section }: EditorialSectionProps) {
  const imageUrl = section.image?.url || "";
  const headline = section.editorialHeadline || "";
  const hasStats = section.stats && section.stats.length > 0;

  if (section.imageRight) {
    // Materials layout: text LEFT (5 cols), image RIGHT (7 cols)
    return (
      <section className="border-b border-primary">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Text left */}
          <div className="lg:col-span-5 p-8 md:p-12 lg:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-primary">
            {section.eyebrow && (
              <p
                className="uppercase tracking-[0.2em] text-muted mb-4"
                style={{ fontSize: "0.65rem", fontWeight: 700 }}
              >
                {section.eyebrow}
              </p>
            )}
            <h2 className="mb-6">
              {headline.replace(/\.$/, "")}
              <span className="text-accent">.</span>
            </h2>
            {section.body?.html && (
              <div
                className="text-muted mb-6 prose prose-sm max-w-none"
                style={{ lineHeight: 1.7 }}
                dangerouslySetInnerHTML={{ __html: section.body.html }}
              />
            )}
            {hasStats && (
              <div className="grid grid-cols-2 gap-4 mt-4">
                {section.stats.map((stat) => (
                  <div key={stat.id} className="border border-primary p-4">
                    <p
                      className="uppercase tracking-[0.15em] text-muted mb-1"
                      style={{ fontSize: "0.6rem", fontWeight: 700 }}
                    >
                      {stat.label}
                    </p>
                    <p style={{ fontWeight: 700 }}>{stat.value}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Image right */}
          <div className="lg:col-span-7">
            <img
              src={imageUrl}
              alt={headline}
              className="w-full h-full object-cover min-h-[400px]"
            />
          </div>
        </div>
      </section>
    );
  }

  // Craftsmanship layout: image LEFT (7 cols), text RIGHT (5 cols)
  return (
    <section className="border-b border-primary">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Image left */}
        <div className="lg:col-span-7 border-b lg:border-b-0 lg:border-r border-primary">
          <img
            src={imageUrl}
            alt={headline}
            className="w-full h-full object-cover min-h-[400px]"
          />
        </div>

        {/* Text right */}
        <div className="lg:col-span-5 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <ArrowDownRight size={32} className="text-accent mb-6" />
          {section.eyebrow && (
            <p
              className="uppercase tracking-[0.2em] text-muted mb-4"
              style={{ fontSize: "0.65rem", fontWeight: 700 }}
            >
              {section.eyebrow}
            </p>
          )}
          <h2 className="mb-6">
            {headline.replace(/\.$/, "")}
            <span className="text-accent">.</span>
          </h2>
          {section.body?.html && (
            <div
              className="text-muted mb-8 prose prose-sm max-w-none"
              style={{ lineHeight: 1.7 }}
              dangerouslySetInnerHTML={{ __html: section.body.html }}
            />
          )}
          {section.ctaLabel && section.ctaHref && (
            <Link
              href={section.ctaHref}
              className="inline-flex items-center gap-3 text-accent uppercase tracking-[0.1em] hover:gap-4 transition-all self-start"
              style={{ fontSize: "0.75rem", fontWeight: 700 }}
            >
              {section.ctaLabel}
              <ArrowRight size={14} />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
