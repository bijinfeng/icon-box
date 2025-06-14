import debug from "debug";
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

import { NextRequest, NextResponse } from "next/server";
import { appEnv } from '@/config/app';

const logDefault = debug("lobe-middleware:default");
const logClerk = debug('lobe-middleware:clerk');

export const config = {
  matcher: [
    // include any files in the api or trpc folders that might have an extension
    "/(api|trpc|webapi)(.*)",
    // include the /
    "/",
    "/docs",
    "/docs(.*)",
    "/admin",
    "/admin(.*)",
    "/dashboard",
    "/dashboard(.*)",

    "/login(.*)",
    "/signup(.*)",
    "/callback(.*)",
  ],
};

const backendApiEndpoints = ["/api", "/trpc", "/webapi", "/oidc"];

const isPublicRoute = createRouteMatcher([
  '/api/auth(.*)',
  '/trpc(.*)',
  // next auth
  '/next-auth/(.*)',
  // clerk
  '/login',
  '/signup',
]);

const isProtectedRoute = createRouteMatcher([
  '/admin(.*)',
  '/dashboard(.*)',
  '/oauth(.*)',
  // ↓ cloud ↓
]);

const defaultMiddleware = (request: NextRequest) => {
  const url = new URL(request.url);
  logDefault("Processing request: %s %s", request.method, request.url);

  // skip all api requests
  if (backendApiEndpoints.some((path) => url.pathname.startsWith(path))) {
    logDefault("Skipping API request: %s", url.pathname);
    return NextResponse.next();
  }

  const route = "zh-CN";
  const nextPathname = `/${route}` + (url.pathname === "/" ? "" : url.pathname);

  url.pathname = nextPathname;

  return NextResponse.rewrite(url, { status: 200 });
};

const clerkAuthMiddleware = clerkMiddleware(
  async (auth, req) => {
    logClerk('Clerk middleware processing request: %s %s', req.method, req.url);

    // when enable auth protection, only public route is not protected, others are all protected
    const isProtected = appEnv.ENABLE_AUTH_PROTECTION ? !isPublicRoute(req) : isProtectedRoute(req);

    logClerk('Route protection status: %s, %s', req.url, isProtected ? 'protected' : 'public');

    if (isProtected) {
      logClerk('Protecting route: %s', req.url);
      await auth.protect();
    }

    const response = defaultMiddleware(req);

    const data = await auth();
    logClerk('Clerk auth status: %O', {
      isSignedIn: !!data.userId,
      userId: data.userId,
    });

    // If OIDC is enabled and Clerk user is logged in, add OIDC session pre-sync header
    // if (oidcEnv.ENABLE_OIDC && data.userId) {
    //   logClerk('OIDC session pre-sync: Setting %s = %s', OIDC_SESSION_HEADER, data.userId);
    //   response.headers.set(OIDC_SESSION_HEADER, data.userId);
    // } else if (oidcEnv.ENABLE_OIDC) {
    //   logClerk('No Clerk user detected, not setting OIDC session sync header');
    // }

    return response;

  },
  {
    // https://github.com/lobehub/lobe-chat/pull/3084
    clockSkewInMs: 60 * 60 * 1000,
    signInUrl: '/login',
    signUpUrl: '/signup',
  },
);

export default clerkAuthMiddleware;
