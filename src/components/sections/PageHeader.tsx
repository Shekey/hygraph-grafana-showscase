import type { GetPageQuery } from "@/types/hygraph-generated";
import { createPreviewAttributes, createComponentChainLink } from "@hygraph/preview-sdk/core";

type PageHeaderType = Extract<
  GetPageQuery["pages"][0]["sections"][0],
  { __typename?: "PageHeader" }
>;

interface PageHeaderProps {
  section: PageHeaderType;
  pageId: string;
}

export default function PageHeader({ section, pageId }: PageHeaderProps) {
  const chain = [createComponentChainLink("sections", section.id)];

  return (
    <section className="border-b border-primary">
      <div className="p-8 md:p-12 lg:px-16 lg:py-20">
        {section.eyebrow && (
          <p
            {...createPreviewAttributes({ entryId: pageId, fieldApiId: "eyebrow", componentChain: chain })}
            className="uppercase tracking-[0.2em] text-muted mb-4"
            style={{ fontSize: "0.65rem", fontWeight: 700 }}
          >
            {section.eyebrow}
          </p>
        )}
        <h1
          {...createPreviewAttributes({ entryId: pageId, fieldApiId: "title", componentChain: chain })}
          className="md:max-w-[60vw]"
        >
          {section.pageHeaderTitle}
          <span className="text-brand">.</span>
        </h1>
        {section.subtitle && (
          <p
            {...createPreviewAttributes({ entryId: pageId, fieldApiId: "subtitle", componentChain: chain })}
            className="text-muted mt-8 max-w-[480px]"
            style={{ lineHeight: 1.7 }}
          >
            {section.subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
