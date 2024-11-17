// middleware.js

import { NextResponse,NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req:NextRequest) {
  // Get the JSON Web Token (JWT) from the request
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  
  // Define the paths you want to protect and the required roles
  const adminPaths = ['/admin-67-h456/dashboard']; // Only admins can access this route
  const userPaths = ['/Chat']; // Only users can access this route

  const { pathname } = req.nextUrl;

  // If there is no token, redirect to the login page
  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // Protect admin routes
  if (adminPaths.some((path) => pathname.startsWith(path))) {
    if (token.role !== 'admin') {
      // Redirect users without 'admin' role trying to access admin paths
      return NextResponse.redirect(new URL('/', req.url));
    }
  }

  // Protect user routes
  if (userPaths.some((path) => pathname.startsWith(path))) {
    if (token.role !== 'user') {
      // Redirect users without 'user' role trying to access user paths
      return NextResponse.redirect(new URL('/', req.url));
    }
  }

  // Allow the request if role matches the required access
  return NextResponse.next();
}
