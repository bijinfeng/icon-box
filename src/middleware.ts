import debug from 'debug';

import { NextRequest, NextResponse } from 'next/server';

const logDefault = debug('lobe-middleware:default');

export const config = {
  matcher: [
    // include any files in the api or trpc folders that might have an extension
    '/(api|trpc|webapi)(.*)',
    // include the /
    '/',
    '/docs',
    '/docs(.*)',
    '/admin',
    '/admin(.*)',
    '/dashboard',
    '/dashboard(.*)',

    '/login(.*)',
    '/signup(.*)',
    '/callback(.*)',
  ],
};

const backendApiEndpoints = ['/api', '/trpc', '/webapi', '/oidc'];

const defaultMiddleware = (request: NextRequest) => {
  const url = new URL(request.url);
  logDefault('Processing request: %s %s', request.method, request.url);

  // skip all api requests
  if (backendApiEndpoints.some((path) => url.pathname.startsWith(path))) {
    logDefault('Skipping API request: %s', url.pathname);
    return NextResponse.next();
  }

  const route = "zh-CN";
  const nextPathname = `/${route}` + (url.pathname === '/' ? '' : url.pathname);

  url.pathname = nextPathname;

  return NextResponse.rewrite(url, { status: 200 });
}

export default defaultMiddleware;
