/**
 * Shared UI types for hybikes view components.
 * These are hand-written types that mirror the Hygraph schema fields
 * queried in src/graphql/queries/. After running codegen (Phase 3),
 * these can be replaced with generated types from hygraph-generated.ts.
 */

export interface Bike {
  id: string;
  slug: string;
  name: string;
  tagline?: string | null;
  category?: { value: string } | null; // TaxonomyNode: RoadBikes | UrbanEbikes | MountainEbikes | GravelBikes
  image?: { url: string; width?: number | null; height?: number | null } | null;
  productFeatures?: string[] | null;
  description?: { text: string } | null;
  specifications?: {
    frame?: string | null;
    motor?: string | null;
    battery?: string | null;
    range?: string | null;
    weight?: number | null;
    groupset?: string | null;
    gears?: string | null;
    brakes?: string | null;
    suspension?: string | null;
    wheelSize?: string | null;
    wheels?: string | null;
  } | null;
  externalProduct?: {
    data?: {
      calculated_price?: number | null;
      sale_price?: number | null;
      inventory_level?: number | null;
      availability?: string | null;
      variants?: {
        calculated_price?: number | null;
        option_values?: {
          id: number;
          label: string;
          option_id: number;
          option_display_name: string;
        }[] | null;
      }[] | null;
    } | null;
  } | null;
  featured?: boolean | null;
}

export interface Post {
  id: string;
  slug: string;
  title: string;
  category: string;
  publishedDate: string;
  readTime?: string | null;
  summary: string;
  image?: { url: string; width?: number | null; height?: number | null } | null;
  body?: { html: string } | null;
}

export interface Job {
  id: string;
  slug: string;
  title: string;
  department: string;
  location: string;
  jobType: string;
  summary: string;
  description?: { html: string } | null;
  responsibilities?: string[] | null;
  requirements?: string[] | null;
  niceToHave?: string[] | null;
}

/** Converts a Hygraph TaxonomyNode category value to a readable display label.
 *  e.g. "RoadBikes" → "Road Bikes", "UrbanEbikes" → "Urban Ebikes"
 */
export function formatCategoryValue(value: string | null | undefined): string {
  if (!value) return "";
  return value.replace(/([a-z])([A-Z])/g, "$1 $2");
}

/** Formats a price number as a Euro string. Returns '—' if price is null/undefined. */
export function formatPrice(price: number | null | undefined): string {
  if (price == null) return "—";
  return `€${Number(price).toLocaleString("en-EU")}`;
}
