/**
 * Product Detail Page - Shows a single bike by slug
 */

import { notFound } from "next/navigation";
import { isValidLocale } from "@/lib/utils/locale";
import { hygraphRequest } from "@/lib/hygraph/client";
import { recordPageRequest } from "@/lib/otel-custom-metrics";
import {
  GetProductBySlugDocument,
  GetProductsDocument,
  type GetProductBySlugQuery,
  type GetProductBySlugQueryVariables,
  type GetProductsQuery,
  type GetProductsQueryVariables,
} from "@/types/hygraph-generated";
import ProductView from "@/components/pages/ProductView";
import type { Metadata } from "next";

interface ProductPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { locale, slug } = await params;

  try {
    const data = await hygraphRequest<GetProductBySlugQuery>(
      GetProductBySlugDocument,
      { slug, locale } as GetProductBySlugQueryVariables
    );
    const product = data.product;
    if (!product) return { title: "Product Not Found" };

    return {
      title: `${product.name} | HyBikes`,
      description: product.tagline ?? undefined,
    };
  } catch {
    return { title: "Product | HyBikes" };
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { locale, slug } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const t0 = performance.now();

  const [productData, allProductsData] = await Promise.all([
    hygraphRequest<GetProductBySlugQuery>(GetProductBySlugDocument, {
      slug,
      locale,
    } as GetProductBySlugQueryVariables),
    hygraphRequest<GetProductsQuery>(GetProductsDocument, {
      locale,
    } as GetProductsQueryVariables),
  ]);

  recordPageRequest(`/[locale]/product/[slug]`, Math.round(performance.now() - t0), 200);

  const bike = productData.product;
  if (!bike) {
    notFound();
  }

  const relatedBikes = (allProductsData.products ?? []).filter(
    (p) => p.slug !== slug && p.category?.value === bike.category?.value
  );

  return <ProductView bike={bike} relatedBikes={relatedBikes} />;
}

export const revalidate = 300;
