import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('shabaky_token');
  const { pathname } = request.nextUrl;

  // Debug logging
  console.log('[Middleware]', pathname, 'Token:', token ? 'EXISTS' : 'MISSING');

  // Public routes that don't require authentication
  const publicRoutes = ['/', '/login', '/signup', '/forgot-password', '/test-login.html'];
  const isPublicRoute = publicRoutes.some(route => pathname === route || pathname.startsWith('/_next') || pathname.startsWith('/api') || pathname.startsWith('/public'));

  // Auth routes
  const isAuthRoute = pathname.startsWith('/login') || pathname.startsWith('/signup');

  // Portal routes (protected)
  const isPortalRoute = pathname.startsWith('/portal');

  // If accessing portal route without token, redirect to login
  if (isPortalRoute && !token) {
    console.log('[Middleware] Redirecting to login (no token)');
    const url = request.nextUrl.clone();
    url.pathname = '/login';
    url.searchParams.set('redirect', pathname);
    return NextResponse.redirect(url);
  }

  // If accessing auth routes with token, redirect to portal
  // Note: We don't verify the token here (Edge runtime limitation)
  // Token verification happens in API routes and server components
  if (isAuthRoute && token) {
    console.log('[Middleware] Redirecting to portal (has token)');
    const url = request.nextUrl.clone();
    url.pathname = '/portal/dashboard';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*|public).*)',
  ],
};
