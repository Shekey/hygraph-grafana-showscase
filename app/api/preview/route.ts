/**
 * Preview API Route - Enables Hygraph Live Preview
 * Sets preview cookie and redirects to the page being previewed
 */

import { NextRequest, NextResponse } from 'next/server';
import { PREVIEW_COOKIE_NAME } from '@/lib/utils/preview';
import { withMetrics } from '@/lib/withMetrics';
import {
  HYGRAPH_ENDPOINT_COOKIE_NAME,
  parseAndValidateHygraphEndpoint,
} from '@/lib/hygraph/endpoint';

async function handler(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  // Validate secret to prevent unauthorized preview access
  const secret = searchParams.get('secret');
  const expectedSecret = process.env.HYGRAPH_PREVIEW_SECRET;

  if (!secret || secret !== expectedSecret) {
    return NextResponse.json(
      { error: 'Invalid preview secret' },
      { status: 401 }
    );
  }

  // Get preview parameters
  const slug = searchParams.get('slug') || 'home';
  const locale = searchParams.get('locale') || 'en';
  const endpointParam = searchParams.get('endpoint');
  const endpointOverride = parseAndValidateHygraphEndpoint(endpointParam);

  // Construct preview URL
  const previewUrl = `/${locale}/${slug === 'home' ? '' : slug}`;

  // Create response with redirect
  const redirectUrl = new URL(previewUrl, request.url);
  if (endpointOverride) {
    redirectUrl.searchParams.set('endpoint', endpointOverride);
  }
  const response = NextResponse.redirect(redirectUrl);

  // Set preview cookie with preview data
  const previewData = JSON.stringify({ locale, slug });
  response.cookies.set(PREVIEW_COOKIE_NAME, previewData, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'none', // Required for Hygraph iframe
    maxAge: 60 * 60, // 1 hour
    path: '/',
  });

  if (endpointOverride) {
    response.cookies.set(HYGRAPH_ENDPOINT_COOKIE_NAME, endpointOverride, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'none', // Required for Hygraph iframe
      maxAge: 60 * 60, // 1 hour
      path: '/',
    });
  }

  return response;
}

export const GET = withMetrics("/api/preview", handler);
