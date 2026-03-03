/**
 * Feature Grid Component - hybikes design
 * Clean bordered cards, uppercase labels, minimal aesthetic
 */

import type { GetPageQuery } from "@/types/hygraph-generated";

type FeatureGridType = Extract<
  GetPageQuery["pages"][0]["sections"][0],
  { __typename?: "FeatureGrid" }
>;

interface FeatureGridProps {
  section: FeatureGridType;
}

export default function FeatureGrid({ section }: FeatureGridProps) {
  const features = section.features;

  const colsMap: Record<string, string> = {
    GRID_2COL: "grid-cols-1 md:grid-cols-2",
    GRID_3COL: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    GRID_4COL: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };
  const cols = colsMap[section.layout] ?? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

  const numCols = section.layout === "GRID_4COL" ? 4 : section.layout === "GRID_3COL" ? 3 : 2;
  const numRows = Math.ceil(features.length / numCols);

  function getBorderClasses(i: number): string {
    const col = i % numCols;
    const row = Math.floor(i / numCols);
    const hasRight = col < numCols - 1;
    const hasBottom = row < numRows - 1;
    return [
      i < features.length - 1 ? "border-b border-primary" : "",
      hasRight ? "md:border-r md:border-primary" : "md:border-r-0",
      hasBottom ? "md:border-b md:border-primary" : "md:border-b-0",
    ].join(" ");
  }

  return (
    <section className="border-b border-primary">
      <div className={`grid ${cols}`}>
        {features.map((feature, i) => (
          <div
            key={feature.id}
            className={`p-8 md:p-10 ${getBorderClasses(i)}`}
          >
            <p
              className="text-accent mb-4 uppercase tracking-[0.2em]"
              style={{ fontSize: "0.65rem", fontWeight: 700 }}
            >
              0{i + 1}
            </p>
            <h3 className="mb-4">{feature.title}</h3>
            <p className="text-muted" style={{ lineHeight: 1.7 }}>
              {feature.description.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
