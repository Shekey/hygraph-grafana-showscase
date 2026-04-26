/**
 * Products API - Fetches all products for ProductShowcase
 * Only called when ProductShowcase is rendered
 */

import { NextRequest, NextResponse } from "next/server";
import { hygraphRequest } from "@/lib/hygraph/client";
import { withMetrics } from "@/lib/withMetrics";
import {
  GetProductsDocument,
  type GetProductsQuery,
  type GetProductsQueryVariables,
} from "@/types/hygraph-generated";

async function handler(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const locale = (searchParams.get("locale") || "en") as "en" | "de";

  if (locale !== "en" && locale !== "de") {
    return NextResponse.json({ error: "Invalid locale" }, { status: 400 });
  }

  try {
    const data = await hygraphRequest<GetProductsQuery>(GetProductsDocument, {
      locale,
      first: 100,
    } as GetProductsQueryVariables);

    return NextResponse.json(data.products ?? []);
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}

export const GET = withMetrics("/api/products", handler);
