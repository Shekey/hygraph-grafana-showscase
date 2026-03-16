/**
 * CTA Block Component - hybikes design
 * Dark background (#121212), orange button, centered text
 */

import type { GetPageQuery } from "@/types/hygraph-generated";
import type { Locale } from "@/lib/utils/locale";
import {
  createPreviewAttributes,
  createComponentChainLink,
} from "@hygraph/preview-sdk/core";
import Button from "@/components/ui/Button";

type CTABlockType = Extract<
  GetPageQuery["pages"][0]["sections"][0],
  { __typename?: "CTABlock" }
>;

interface CTABlockProps {
  section: CTABlockType;
  locale: Locale;
  pageId: string;
}

export default function CTABlock({ section, pageId }: CTABlockProps) {
  const isDark =
    section.backgroundColor === "DARK" || section.backgroundColor === "PRIMARY";
  const chain = [createComponentChainLink("sections", section.id)];

  return (
    <section
      className="border-b border-primary"
      style={{ backgroundColor: isDark ? "#121212" : "#F9F9F7" }}
    >
      <div
        className="p-8 md:p-12 lg:p-20 text-center flex flex-col items-center"
        style={{ color: isDark ? "#F9F9F7" : "#121212" }}
      >
        <p
          className="uppercase tracking-[0.2em] mb-6"
          style={{
            fontSize: "0.65rem",
            fontWeight: 700,
            color: isDark ? "rgba(249,249,247,0.4)" : "#6B6B6B",
          }}
        >
          Ready to ride?
        </p>

        <h2
          {...createPreviewAttributes({
            entryId: pageId,
            fieldApiId: "headline",
            componentChain: chain,
          })}
          className="mb-8 max-w-3xl"
          style={{ color: isDark ? "#F9F9F7" : "#121212" }}
        >
          {section.headline.replace(/\.$/, "")}
          <span className="text-brand">.</span>
        </h2>

        {section.description && (
          <p
            {...createPreviewAttributes({
              entryId: pageId,
              fieldApiId: "description",
              componentChain: chain,
            })}
            className="max-w-lg mb-10"
            style={{
              lineHeight: 1.7,
              color: isDark ? "rgba(249,249,247,0.6)" : "#6B6B6B",
            }}
          >
            {section.description.text}
          </p>
        )}

        <div className="flex flex-wrap justify-center gap-3">
          <Button
            cta={section.primaryButton}
            entryId={pageId}
            componentChain={[...chain, createComponentChainLink("primaryButton", section.primaryButton.id)]}
          />
          {section.secondaryButton && (
            <Button
              cta={section.secondaryButton}
              entryId={pageId}
              componentChain={[...chain, createComponentChainLink("secondaryButton", section.secondaryButton.id)]}
            />
          )}
        </div>
      </div>
    </section>
  );
}
