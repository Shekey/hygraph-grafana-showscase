/**
 * Products API - Fetches all products for ProductShowcase
 * Only called when ProductShowcase is rendered
 */

import { NextRequest, NextResponse } from "next/server";
import { hygraphRequest } from "@/lib/hygraph/client";

const GET_PRODUCT_SHOWCASE_PRODUCTS = `
  query GetProductShowcaseProducts($locale: Locale!) {
    products(locales: [$locale, en], stage: DRAFT, first: 100) {
      id
      slug
      name
      tagline
      category {
        value
      }
      image {
        url
        width
        height
      }
      externalProduct {
        data {
          calculated_price
          sale_price
          inventory_level
          availability
        }
      }
    }
  }
`;

interface ProductShowcaseResponse {
  products: Array<{
    id: string;
    slug: string;
    name: string;
    tagline?: string | null;
    category: { value: string };
    image?: { url: string; width?: number | null; height?: number | null } | null;
    externalProduct?: {
      data?: {
        calculated_price: number;
        sale_price?: number | null;
        inventory_level: number;
        availability: string;
      } | null;
    } | null;
  }>;
}

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const locale = (searchParams.get("locale") || "en") as "en" | "de";

  if (locale !== "en" && locale !== "de") {
    return NextResponse.json({ error: "Invalid locale" }, { status: 400 });
  }

  try {
    const data = await hygraphRequest<ProductShowcaseResponse>(
      GET_PRODUCT_SHOWCASE_PRODUCTS,
      { locale }
    );

    return NextResponse.json(data.products ?? []);
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
