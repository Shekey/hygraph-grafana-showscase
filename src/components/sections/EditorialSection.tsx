/**
 * Editorial Section Component - hybikes design
 * Handles two layouts (same content, different image position):
 *   imageRight=false → 7-col image LEFT + 5-col text RIGHT
 *   imageRight=true  → 5-col text LEFT + 7-col image RIGHT
 */

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowDownRight } from "lucide-react";
import type { GetPageQuery } from "@/types/hygraph-generated";
import {
  createPreviewAttributes,
  createComponentChainLink,
} from "@hygraph/preview-sdk/core";

type EditorialSectionType = Extract<
  GetPageQuery["pages"][0]["sections"][0],
  { __typename?: "EditorialSection" }
>;

interface EditorialSectionProps {
  section: EditorialSectionType;
  pageId: string;
}

function EditorialContent({
  section,
  pageId,
  chain,
  imageRight,
}: {
  section: EditorialSectionType;
  pageId: string;
  chain: ReturnType<typeof createComponentChainLink>[];
  imageRight: boolean;
}) {
  const headline = section.editorialHeadline || "";
  const hasStats = section.stats && section.stats.length > 0;
  const contentBorderClass = imageRight
    ? "border-b lg:border-b-0 lg:border-r border-primary"
    : "border-b lg:border-b-0 border-primary";

  return (
    <div
      className={`lg:col-span-5 p-8 md:p-12 lg:p-16 flex flex-col justify-center ${contentBorderClass}`}
    >
      <ArrowDownRight size={32} className="text-brand mb-6" />
      {section.eyebrow && (
        <p
          {...createPreviewAttributes({
            entryId: pageId,
            fieldApiId: "eyebrow",
            componentChain: chain,
          })}
          className="uppercase tracking-[0.2em] text-muted mb-4"
          style={{ fontSize: "0.65rem", fontWeight: 700 }}
        >
          {section.eyebrow}
        </p>
      )}
      <h2
        {...createPreviewAttributes({
          entryId: pageId,
          fieldApiId: "headline",
          componentChain: chain,
        })}
        className="mb-6"
      >
        {headline.replace(/\.$/, "")}
        <span className="text-brand">.</span>
      </h2>
      {section.body?.html && (
        <div
          {...createPreviewAttributes({
            entryId: pageId,
            fieldApiId: "body",
            componentChain: chain,
          })}
          data-hygraph-rich-text-format="html"
          className="text-muted mb-6 prose prose-sm max-w-none"
          style={{ lineHeight: 1.7 }}
          dangerouslySetInnerHTML={{ __html: section.body.html }}
        />
      )}
      {hasStats && (
        <div className="grid grid-cols-2 gap-4 mt-4">
          {section.stats.map((stat) => {
            const statChain = [
              ...chain,
              createComponentChainLink("stats", stat.id),
            ];
            return (
              <div key={stat.id} className="border border-primary p-4">
                <p
                  {...createPreviewAttributes({
                    entryId: pageId,
                    fieldApiId: "label",
                    componentChain: statChain,
                  })}
                  className="uppercase tracking-[0.15em] text-muted mb-1"
                  style={{ fontSize: "0.6rem", fontWeight: 700 }}
                >
                  {stat.label}
                </p>
                <p
                  {...createPreviewAttributes({
                    entryId: pageId,
                    fieldApiId: "value",
                    componentChain: statChain,
                  })}
                  style={{ fontWeight: 700 }}
                >
                  {stat.value}
                </p>
              </div>
            );
          })}
        </div>
      )}
      {section.ctaLabel && section.ctaHref && (
        <Link
          href={section.ctaHref}
          className="inline-flex items-center gap-3 text-brand uppercase tracking-widest hover:gap-4 transition-all self-start mt-6"
          style={{ fontSize: "0.75rem", fontWeight: 700 }}
        >
          <span
            {...createPreviewAttributes({
              entryId: pageId,
              fieldApiId: "ctaLabel",
              componentChain: chain,
            })}
          >
            {section.ctaLabel}
          </span>
          <ArrowRight size={14} />
        </Link>
      )}
    </div>
  );
}

function EditorialImage({
  imageUrl,
  imageWidth,
  imageHeight,
  headline,
  pageId,
  chain,
  className,
}: {
  imageUrl: string;
  imageWidth?: number | null;
  imageHeight?: number | null;
  headline: string;
  pageId: string;
  chain: ReturnType<typeof createComponentChainLink>[];
  className?: string;
}) {
  return (
    <div
      {...createPreviewAttributes({
        entryId: pageId,
        fieldApiId: "image",
        componentChain: chain,
      })}
      className={className}
    >
      <Image
        src={imageUrl}
        alt={headline}
        width={imageWidth || 1600}
        height={imageHeight || 1000}
        className="w-full h-full object-cover min-h-[400px]"
      />
    </div>
  );
}

export default function EditorialSection({
  section,
  pageId,
}: EditorialSectionProps) {
  const imageUrl = section.image?.url || "";
  const imageWidth = section.image?.width;
  const imageHeight = section.image?.height;
  const headline = section.editorialHeadline || "";
  const chain = [createComponentChainLink("sections", section.id)];

  const contentBlock = (
    <EditorialContent
      section={section}
      pageId={pageId}
      chain={chain}
      imageRight={!!section.imageRight}
    />
  );

  return (
    <section className="border-b border-primary">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {section.imageRight ? (
          <>
            {contentBlock}
            <EditorialImage
              imageUrl={imageUrl}
              imageWidth={imageWidth}
              imageHeight={imageHeight}
              headline={headline}
              pageId={pageId}
              chain={chain}
              className="lg:col-span-7"
            />
          </>
        ) : (
          <>
            <EditorialImage
              imageUrl={imageUrl}
              imageWidth={imageWidth}
              imageHeight={imageHeight}
              headline={headline}
              pageId={pageId}
              chain={chain}
              className="lg:col-span-7 border-b lg:border-b-0 lg:border-r border-primary"
            />
            {contentBlock}
          </>
        )}
      </div>
    </section>
  );
}
