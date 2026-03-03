import { NextRequest, NextResponse } from "next/server";
import mockProducts from "../products.json";

const COLOR_OPTION_ID = 1;
const SIZE_OPTION_ID = 2;

interface ProductDef {
  name: string;
  sku: string;
  price: number;
  sale_price: number | null;
  weight: number;
  description: string;
  colors: { id: number; label: string; code: string }[];
  sizes: { id: number; label: string }[];
  inventory: Record<string, number>;
}

const PRODUCTS = mockProducts as Record<string, ProductDef>;

function buildVariants(productId: number, def: ProductDef) {
  const variants = [];
  let variantId = productId * 100;

  for (const color of def.colors) {
    for (const size of def.sizes) {
      variantId++;
      const inventoryLevel = def.inventory[`${color.code}-${size.label}`] ?? 0;

      variants.push({
        id: variantId,
        product_id: productId,
        sku: `${def.sku}-${color.code}-${size.label}`,
        price: null,
        calculated_price: def.sale_price ?? def.price,
        calculated_weight: def.weight,
        inventory_level: inventoryLevel,
        option_values: [
          {
            id: color.id,
            label: color.label,
            option_id: COLOR_OPTION_ID,
            option_display_name: "Color",
          },
          {
            id: size.id,
            label: size.label,
            option_id: SIZE_OPTION_ID,
            option_display_name: "Size",
          },
        ],
      });
    }
  }

  return variants;
}

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ productId: string }> }
) {
  const { productId: productIdStr } = await params;
  const def = PRODUCTS[productIdStr];

  if (!def) {
    return NextResponse.json(
      { errors: [{ status: 404, title: "Product not found" }] },
      { status: 404 }
    );
  }

  const productId = parseInt(productIdStr, 10);
  const variants = buildVariants(productId, def);
  const totalInventory = variants.reduce(
    (sum, v) => sum + v.inventory_level,
    0
  );

  return NextResponse.json({
    data: {
      id: productId,
      name: def.name,
      sku: def.sku,
      type: "physical",
      price: def.price,
      calculated_price: def.sale_price ?? def.price,
      sale_price: def.sale_price,
      weight: def.weight,
      description: def.description,
      categories: [10],
      brand_id: 1,
      inventory_level: totalInventory,
      inventory_tracking: "variant",
      availability: totalInventory > 0 ? "available" : "preorder",
      variants,
    },
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
