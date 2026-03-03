"use client";

import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import ProductFilters from "@/components/ProductFilters";
import type { GetPageQuery } from "@/types/hygraph-generated";
import type { Locale } from "@/lib/utils/locale";
import type { Bike } from "@/types/hybike";

type ProductShowcaseType = Extract<
  GetPageQuery["pages"][0]["sections"][0],
  { __typename?: "ProductShowcase" }
>;

interface ProductShowcaseProps {
  section: ProductShowcaseType;
  locale: Locale;
}

export default function ProductShowcase({
  section,
  locale,
}: ProductShowcaseProps) {
  const searchParams = useSearchParams();
  const products = section.products;

  if (products.length === 0) {
    return null;
  }

  const categoryValues = [
    ...new Set(
      products.map((b) => b.category?.value).filter(Boolean) as string[]
    ),
  ];
  const categories = ["All", ...categoryValues];
  const param = searchParams.get("category") ?? "All";
  const activeCategory = categories.includes(param) ? param : "All";

  const displayed =
    section.displayFilters && activeCategory !== "All"
      ? products.filter((b) => b.category?.value === activeCategory)
      : products;

  const colsMap: Record<string, string> = {
    GRID_2COL: "grid-cols-1 md:grid-cols-2",
    GRID_3COL: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    GRID_4COL: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  const cols = colsMap[section.layout] ?? "grid-cols-1 md:grid-cols-2";

  return (
    <section className="border-b border-primary">
      {section.displayFilters && (
        <ProductFilters categories={categories} products={products} />
      )}

      <div className={`grid ${cols}`}>
        {displayed.map((product) => (
          <div
            key={product.id}
            className={section.displayFilters ? "border-b border-primary" : ""}
          >
            <ProductCard
              bike={product as Bike}
              locale={locale}
              showPrices={section.showPrices}
              showStock={section.showStock}
            />
          </div>
        ))}
      </div>

      {section.displayFilters && displayed.length === 0 && (
        <div className="p-16 text-center">
          <p className="text-muted">No bikes found in this category.</p>
        </div>
      )}
    </section>
  );
}
