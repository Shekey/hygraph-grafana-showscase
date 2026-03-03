/**
 * Product Detail Page - Shows a single bike by slug
 */

import { notFound } from "next/navigation";
import { isValidLocale } from "@/lib/utils/locale";
import { hygraphRequest } from "@/lib/hygraph/client";
import {
  GetProductBySlugDocument,
  GetProductsDocument,
  type GetProductBySlugQuery,
  type GetProductBySlugQueryVariables,
  type GetProductsQuery,
  type GetProductsQueryVariables,
} from "@/types/hygraph-generated";
import ProductView from "@/components/pages/ProductView";
import type { Bike } from "@/types/hybike";
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

  let bike: Bike | null = null;
  let relatedBikes: Bike[] = [];

  try {
    const [productData, allProductsData] = await Promise.all([
      hygraphRequest<GetProductBySlugQuery>(GetProductBySlugDocument, {
        slug,
        locale,
      } as GetProductBySlugQueryVariables),
      hygraphRequest<GetProductsQuery>(GetProductsDocument, {
        locale,
      } as GetProductsQueryVariables),
    ]);

    bike = productData.product as unknown as Bike;
    relatedBikes = (allProductsData.products ?? []).filter(
      (p) => p.slug !== slug
    ) as unknown as Bike[];
  } catch (error) {
    console.error("Failed to fetch product:", error);
  }

  if (!bike) {
    notFound();
  }

  return <ProductView bike={bike} relatedBikes={relatedBikes} />;
}

export const revalidate = 300;
