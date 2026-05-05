import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
  runtime: 'nodejs',
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname === '/api/metrics' ||
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/static/') ||
    pathname.match(/\.(ico|png|jpg|jpeg|svg|gif|webp|css|js)$/)
  ) {
    return NextResponse.next();
  }

  return NextResponse.next();
}
