import type { GetPageQuery } from "@/types/hygraph-generated";

type PageHeaderType = Extract<
  GetPageQuery["pages"][0]["sections"][0],
  { __typename?: "PageHeader" }
>;

interface PageHeaderProps {
  section: PageHeaderType;
}

export default function PageHeader({ section }: PageHeaderProps) {
  return (
    <section className="border-b border-primary">
      <div className="p-8 md:p-12 lg:px-16 lg:py-20">
        {section.eyebrow && (
          <p
            className="uppercase tracking-[0.2em] text-muted mb-4"
            style={{ fontSize: "0.65rem", fontWeight: 700 }}
          >
            {section.eyebrow}
          </p>
        )}
        <h1 className="md:max-w-[60vw]">
          {section.pageHeaderTitle}
          <span className="text-accent">.</span>
        </h1>
        {section.subtitle && (
          <p
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
