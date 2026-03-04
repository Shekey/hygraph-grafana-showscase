/**
 * Next.js Middleware for locale routing
 * Handles:
 * - Redirects root path to default locale
 * - Validates locale parameter
 * - Skips API routes, static files, and Next.js internals
 */

import { NextRequest, NextResponse } from 'next/server';
import { DEFAULT_LOCALE, SUPPORTED_LOCALES, isValidLocale } from '@/lib/utils/locale';
import {
  HYGRAPH_ENDPOINT_COOKIE_NAME,
  HYGRAPH_ENDPOINT_HEADER_NAME,
  parseAndValidateHygraphEndpoint,
} from '@/lib/hygraph/endpoint';

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  // Skip middleware for:
  // - API routes
  // - Static files (_next/static, images, favicon, etc.)
  // - Next.js internals (_next/*)
  const shouldSkip =
    pathname.startsWith('/api') ||
    pathname.startsWith('/catalog') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/favicon.ico') ||
    pathname.match(/\.(png|jpg|jpeg|gif|svg|ico|webp|avif)$/);

  if (shouldSkip) {
    return NextResponse.next();
  }

  // Optional Hygraph endpoint override for Studio Live Preview.
  // Read query param first, fall back to a previously stored cookie.
  const endpointParam = searchParams.get('endpoint');
  const endpointCookie = request.cookies.get(HYGRAPH_ENDPOINT_COOKIE_NAME)?.value ?? null;
  const validatedEndpointParam = parseAndValidateHygraphEndpoint(endpointParam);
  const validatedEndpointCookie = parseAndValidateHygraphEndpoint(endpointCookie);
  const endpointOverride = validatedEndpointParam ?? validatedEndpointCookie;
  const shouldPersistEndpointCookie = Boolean(validatedEndpointParam);

  const maybePersistEndpointCookie = (response: NextResponse) => {
    if (!endpointOverride || !shouldPersistEndpointCookie) return response;

    response.cookies.set(HYGRAPH_ENDPOINT_COOKIE_NAME, endpointOverride, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'none',
      maxAge: 60 * 60, // 1 hour
      path: '/',
    });

    return response;
  };

  // Check if pathname starts with a locale
  const pathnameHasLocale = SUPPORTED_LOCALES.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // If pathname is root or doesn't have a valid locale, redirect to default locale
  if (pathname === '/') {
    const url = request.nextUrl.clone();
    url.pathname = `/${DEFAULT_LOCALE}/home`;
    return maybePersistEndpointCookie(NextResponse.redirect(url));
  }

  // If pathname is just /{locale} without a slug, redirect to /{locale}/home
  if (SUPPORTED_LOCALES.some((locale) => pathname === `/${locale}`)) {
    const url = request.nextUrl.clone();
    url.pathname = `${pathname}/home`;
    return maybePersistEndpointCookie(NextResponse.redirect(url));
  }

  // If pathname has invalid locale, redirect to default locale with same path
  if (!pathnameHasLocale) {
    const segments = pathname.split('/').filter(Boolean);
    if (segments.length > 0 && !isValidLocale(segments[0])) {
      const url = request.nextUrl.clone();
      url.pathname = `/${DEFAULT_LOCALE}${pathname}`;
      return maybePersistEndpointCookie(NextResponse.redirect(url));
    }
  }

  if (endpointOverride) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set(HYGRAPH_ENDPOINT_HEADER_NAME, endpointOverride);
    return maybePersistEndpointCookie(
      NextResponse.next({ request: { headers: requestHeaders } })
    );
  }

  return maybePersistEndpointCookie(NextResponse.next());
}

export const config = {
  // Match all paths except those starting with _next, api, or static files
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
