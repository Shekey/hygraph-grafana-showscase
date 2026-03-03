import type { GetPageQuery } from "@/types/hygraph-generated";

type TimelineSection = Extract<
  GetPageQuery["pages"][0]["sections"][0],
  { __typename?: "Timeline" }
>;

interface TimelineProps {
  section: TimelineSection;
}

export default function Timeline({ section }: TimelineProps) {
  const { entries } = section;

  if (!entries.length) return null;

  return (
    <section className="border-b border-primary">
      {entries.map((entry, i) => (
        <div
          key={entry.id}
          className={`grid grid-cols-12 items-center hover:bg-primary hover:text-secondary transition-colors group ${
            i < entries.length - 1 ? "border-b border-primary" : ""
          }`}
        >
          <div className="col-span-3 md:col-span-2 p-6 md:p-8 border-r border-primary group-hover:border-secondary/20">
            <span
              className="text-accent"
              style={{
                fontSize: "clamp(1rem, 2vw, 1.5rem)",
                fontWeight: 900,
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              {entry.year}
            </span>
          </div>
          <div className="col-span-9 md:col-span-10 p-6 md:p-8">
            <p style={{ lineHeight: 1.6 }}>{entry.event}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
