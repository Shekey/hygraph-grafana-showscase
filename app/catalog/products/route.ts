import { NextRequest, NextResponse } from "next/server";
import { withMetrics } from "@/lib/withMetrics";
import mockProducts from "./products.json";

const PRODUCTS = mockProducts as Record<string, Record<string, unknown>>;

async function handler(request: NextRequest) {
  const productIdStr = request.nextUrl.searchParams.get("id");

  if (!productIdStr) {
    return NextResponse.json({ data: null });
  }

  const data = PRODUCTS[productIdStr];

  if (!data) {
    return NextResponse.json({ data: null });
  }

  return NextResponse.json({
    data,
    meta: {
      pagination: {
        total: 1,
        count: 1,
        per_page: 1,
        current_page: 1,
        total_pages: 1,
      },
    },
  });
}

export const GET = withMetrics("/catalog/products", handler);
