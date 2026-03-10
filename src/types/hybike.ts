/**
 * Shared utility functions for hybikes view components.
 * Types are derived from GraphQL codegen in hygraph-generated.ts.
 */

import type {
  GetProductBySlugQuery,
  GetProductsQuery,
  GetJobQuery,
  GetJobsQuery,
} from "./hygraph-generated";

/** Product type derived from GetProductBySlugQuery */
export type Bike = NonNullable<GetProductBySlugQuery["product"]>;

/** Product list item type derived from GetProductsQuery */
export type BikeListItem = GetProductsQuery["products"][number];

/** Job type derived from GetJobQuery */
export type Job = NonNullable<GetJobQuery["job"]>;

/** Job list item type derived from GetJobsQuery */
export type JobListItem = GetJobsQuery["jobs"][number];

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
