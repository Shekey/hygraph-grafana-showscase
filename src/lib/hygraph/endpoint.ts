/**
 * Hygraph endpoint override helpers.
 *
 * Used to safely allow Hygraph Studio to pass an `?endpoint=` query param
 * pointing to a public Hygraph Content API endpoint for preview.
 */

export const HYGRAPH_ENDPOINT_COOKIE_NAME = "hygraph-endpoint";
export const HYGRAPH_ENDPOINT_HEADER_NAME = "x-hygraph-endpoint";

function isAllowedHygraphHostname(hostname: string): boolean {
  return (
    hostname === "hygraph.com" ||
    hostname.endsWith(".hygraph.com") ||
    hostname === "hygraph.dev" ||
    hostname.endsWith(".hygraph.dev") ||
    hostname === "graphcms.com" ||
    hostname.endsWith(".graphcms.com")
  );
}

function isAllowedProtocol(url: URL): boolean {
  if (url.protocol === "https:") return true;

  // Optional dev convenience. Only allow localhost over http.
  const isDev = process.env.NODE_ENV !== "production";
  if (isDev && url.protocol === "http:" && url.hostname === "localhost")
    return true;

  return false;
}

/**
 * Parses and validates an endpoint override.
 *
 * Rules:
 * - Must be a full URL.
 * - Must be https:// (except http://localhost in non-production).
 * - Hostname must be Hygraph/GraphCMS-owned.
 * - No username/password allowed.
 *
 * Returns a normalized URL string or null if invalid.
 */
export function parseAndValidateHygraphEndpoint(
  raw: string | null
): string | null {
  if (!raw) return null;

  let url: URL;
  try {
    url = new URL(raw);
  } catch {
    return null;
  }

  if (!isAllowedProtocol(url)) return null;
  if (!isAllowedHygraphHostname(url.hostname)) return null;
  if (url.username || url.password) return null;

  return url.toString();
}
