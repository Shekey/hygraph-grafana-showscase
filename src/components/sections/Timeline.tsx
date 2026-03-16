import type { GetPageQuery } from "@/types/hygraph-generated";
import { createPreviewAttributes, createComponentChainLink } from "@hygraph/preview-sdk/core";

type TimelineSection = Extract<
  GetPageQuery["pages"][0]["sections"][0],
  { __typename?: "Timeline" }
>;

interface TimelineProps {
  section: TimelineSection;
  pageId: string;
}

export default function Timeline({ section, pageId }: TimelineProps) {
  const { entries } = section;
  const sectionChain = [createComponentChainLink("sections", section.id)];

  if (!entries.length) return null;

  return (
    <dl className="border-b border-primary">
      {entries.map((entry, i) => {
        const entryChain = [
          ...sectionChain,
          createComponentChainLink("entries", entry.id),
        ];
        return (
          <div
            key={entry.id}
            className={`grid grid-cols-12 items-stretch hover:bg-primary hover:text-secondary transition-colors group ${
              i < entries.length - 1 ? "border-b border-primary" : ""
            }`}
          >
            <dt className="col-span-3 md:col-span-2 p-6 md:p-8 flex items-center">
              <time
                {...createPreviewAttributes({ entryId: pageId, fieldApiId: "year", componentChain: entryChain })}
                dateTime={String(entry.year)}
                className="text-brand"
                style={{
                  fontSize: "clamp(1rem, 2vw, 1.5rem)",
                  fontWeight: 900,
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                {entry.year}
              </time>
            </dt>
            <dd className="col-span-9 md:col-span-10 p-6 md:p-8 border-l border-primary group-hover:border-secondary/20 flex items-center">
              <p
                {...createPreviewAttributes({ entryId: pageId, fieldApiId: "event", componentChain: entryChain })}
                style={{ lineHeight: 1.6 }}
              >
                {entry.event}
              </p>
            </dd>
          </div>
        );
      })}
    </dl>
  );
}
