import type { GetPageQuery } from "@/types/hygraph-generated";

type SectionHeaderSection = Extract<
  GetPageQuery["pages"][0]["sections"][0],
  { __typename?: "SectionHeader" }
>;

interface SectionHeaderProps {
  section: SectionHeaderSection;
}

export default function SectionHeader({ section }: SectionHeaderProps) {
  const { label, sectionHeadingHeadline } = section;

  return (
    <section className="border-b border-primary">
      <div className="p-8 md:p-12 lg:px-16 lg:py-12">
        {label && (
          <p
            className="uppercase tracking-[0.2em] text-muted mb-3"
            style={{ fontSize: "0.65rem", fontWeight: 700 }}
          >
            {label}
          </p>
        )}
        <h2>
          {sectionHeadingHeadline?.replace(/\.$/, "")}
          <span className="text-accent">.</span>
        </h2>
      </div>
    </section>
  );
}
