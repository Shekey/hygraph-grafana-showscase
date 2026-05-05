/**
 * Exit Preview API Route - Disables Hygraph Live Preview
 * Clears preview cookie and redirects to homepage
 */

import { NextRequest, NextResponse } from 'next/server';
import { PREVIEW_COOKIE_NAME } from '@/lib/utils/preview';

export async function GET(request: NextRequest) {
  // Create response with redirect to homepage
  const response = NextResponse.redirect(new URL('/en', request.url));

  // Clear preview cookie
  response.cookies.delete(PREVIEW_COOKIE_NAME);

  return response;
}
