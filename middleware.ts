import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
  // Define paths that need protection
  const protectedPaths = ['/admin-67-h456/dashboard'];

  // Get token (if available)
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // Check if the path is a protected route
  if (protectedPaths.some((path) => req.nextUrl.pathname.startsWith(path))) {
    // If no token, redirect to login page
    if (!token) {
      return NextResponse.redirect(new URL('/admin-67-h456', req.url));
    }
  }

  // Allow the request to continue if authenticated
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin-67-h456/dashboard'], // Define which routes should apply middleware
};
