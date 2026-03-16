"use client";

import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import ProductFilters from "@/components/ProductFilters";
import Button from "@/components/ui/Button";
import type { Locale } from "@/lib/utils/locale";
import type { BikeListItem } from "@/types/hybike";

interface ProductShowcaseSection {
  id: string;
  layout?: string | null;
  displayFilters?: boolean | null;
  showPrices?: boolean | null;
  showStock?: boolean | null;
  productsToShow?: number | null;
}

interface ProductShowcaseProps {
  section: ProductShowcaseSection;
  locale: Locale;
}

export default function ProductShowcase({
  section,
  locale,
}: ProductShowcaseProps) {
  const params = useParams();
  const searchParams = useSearchParams();
  const [products, setProducts] = useState<BikeListItem[]>([]);
  const [loading, setLoading] = useState(true);

  const resolvedLocale = (params?.locale as string) || locale || "en";

  const categoryParam = searchParams.get("category");

  useEffect(() => {
    fetch(`/api/products?locale=${resolvedLocale}`)
      .then((res) =>
        res.ok ? res.json() : Promise.reject(new Error("Failed to fetch"))
      )
      .then(setProducts)
      .catch((err) => {
        console.error("ProductShowcase fetch error:", err);
        setProducts([]);
      })
      .finally(() => setLoading(false));
  }, [resolvedLocale]);

  if (loading) {
    return (
      <section className="border-b border-primary">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="aspect-square border-b border-primary bg-muted/10 animate-pulse"
            />
          ))}
        </div>
      </section>
    );
  }

  if (products.length === 0) {
    return null;
  }

  const categoryValues = [
    ...new Set(
      products.map((b) => b.category?.value).filter(Boolean) as string[]
    ),
  ];
  const categories = ["All", ...categoryValues];
  const activeCategory = categories.includes(categoryParam ?? "All")
    ? categoryParam ?? "All"
    : "All";

  const displayed =
    section.displayFilters && activeCategory !== "All"
      ? products.filter((b) => b.category?.value === activeCategory)
      : products;

  return (
    <section className="border-b border-primary">
      {section.displayFilters && (
        <ProductFilters categories={categories} products={products} />
      )}

      <ProductShowcaseGrid
        key={categoryParam ?? "all"}
        displayed={displayed}
        section={section}
        resolvedLocale={resolvedLocale}
      />

      {section.displayFilters && displayed.length === 0 && (
        <div className="p-16 text-center">
          <p className="text-muted">No bikes found in this category.</p>
        </div>
      )}
    </section>
  );
}

function ProductShowcaseGrid({
  displayed,
  section,
  resolvedLocale,
}: {
  displayed: BikeListItem[];
  section: ProductShowcaseSection;
  resolvedLocale: string;
}) {
  const [visibleCount, setVisibleCount] = useState(section.productsToShow ?? 4);
  const productsToShow = section.productsToShow ?? 4;
  const visibleProducts = displayed.slice(0, visibleCount);
  const hasMore = displayed.length > visibleCount;

  const colsMap: Record<string, string> = {
    GRID_2COL: "grid-cols-2",
    GRID_3COL: "grid-cols-2 lg:grid-cols-3",
    GRID_4COL: "grid-cols-2 lg:grid-cols-4",
  };
  const cols = colsMap[section.layout ?? ""] ?? "grid-cols-2";

  return (
    <>
      <div className={`grid ${cols}`}>
        {visibleProducts.map((product) => (
          <div
            key={product.id}
            className={section.displayFilters ? "border-b border-primary" : ""}
          >
            <ProductCard
              bike={product}
              locale={resolvedLocale}
              showPrices={section.showPrices ?? true}
              showStock={section.showStock ?? false}
            />
          </div>
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center p-8 border-b border-primary">
          <Button
            cta={{
              label: "Show more",
              variant: "OUTLINE",
              onClick: () => setVisibleCount((prev) => prev + productsToShow),
            }}
          />
        </div>
      )}
    </>
  );
}
