import type { GetPageQuery } from "@/types/hygraph-generated";
import { createPreviewAttributes, createComponentChainLink } from "@hygraph/preview-sdk/core";

type SectionHeaderSection = Extract<
  GetPageQuery["pages"][0]["sections"][0],
  { __typename?: "SectionHeader" }
>;

interface SectionHeaderProps {
  section: SectionHeaderSection;
  pageId: string;
}

export default function SectionHeader({ section, pageId }: SectionHeaderProps) {
  const { label, sectionHeadingHeadline } = section;
  const chain = [createComponentChainLink("sections", section.id)];

  return (
    <section className="border-b border-primary">
      <div className="p-8 md:p-12 lg:px-16 lg:py-12">
        {label && (
          <p
            {...createPreviewAttributes({ entryId: pageId, fieldApiId: "label", componentChain: chain })}
            className="uppercase tracking-[0.2em] text-muted mb-3"
            style={{ fontSize: "0.65rem", fontWeight: 700 }}
          >
            {label}
          </p>
        )}
        <h2 {...createPreviewAttributes({ entryId: pageId, fieldApiId: "headline", componentChain: chain })}>
          {sectionHeadingHeadline?.replace(/\.$/, "")}
          <span className="text-brand">.</span>
        </h2>
      </div>
    </section>
  );
}
