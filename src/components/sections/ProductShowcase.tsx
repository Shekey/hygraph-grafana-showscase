"use client";

import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import ProductFilters from "@/components/ProductFilters";
import type { Locale } from "@/lib/utils/locale";
import type { Bike } from "@/types/hybike";

interface ProductShowcaseSection {
  id: string;
  layout?: string | null;
  displayFilters?: boolean | null;
  showPrices?: boolean | null;
  showStock?: boolean | null;
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
  const [products, setProducts] = useState<Bike[]>([]);
  const [loading, setLoading] = useState(true);

  const resolvedLocale = (params?.locale as string) || locale || "en";

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
  const param = searchParams.get("category") ?? "All";
  const activeCategory = categories.includes(param) ? param : "All";

  const displayed =
    section.displayFilters && activeCategory !== "All"
      ? products.filter((b) => b.category?.value === activeCategory)
      : products;

  const colsMap: Record<string, string> = {
    GRID_2COL: "grid-cols-2",
    GRID_3COL: "grid-cols-2 lg:grid-cols-3",
    GRID_4COL: "grid-cols-2 lg:grid-cols-4",
  };

  const cols = colsMap[section.layout ?? ""] ?? "grid-cols-2";

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
              locale={resolvedLocale}
              showPrices={section.showPrices ?? true}
              showStock={section.showStock ?? false}
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
