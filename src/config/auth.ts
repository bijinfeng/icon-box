import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface ProcessEnv {
      // ===== Next Auth ===== //
      NEXT_AUTH_SECRET?: string;

      NEXT_AUTH_SSO_PROVIDERS?: string;

      NEXT_AUTH_DEBUG?: string;

      AUTH0_CLIENT_ID?: string;
      AUTH0_CLIENT_SECRET?: string;
      AUTH0_ISSUER?: string;

      // Github
      AUTH_GITHUB_ID?: string;
      AUTH_GITHUB_SECRET?: string;
    }
  }
}

export const getAuthConfig = () => {
  return createEnv({
    client: {
      NEXT_PUBLIC_ENABLE_NEXT_AUTH: z.boolean().optional(),
    },
    server: {
      NEXT_AUTH_SECRET: z.string().optional(),
      NEXT_AUTH_SSO_PROVIDERS: z.string().optional().default('auth0'),
      NEXT_AUTH_DEBUG: z.boolean().optional().default(false),

      // Github
      AUTH_GITHUB_ID: z.string().optional(),
      AUTH_GITHUB_SECRET: z.string().optional(),
    },
    runtimeEnv: {
       // Next Auth
       NEXT_PUBLIC_ENABLE_NEXT_AUTH: process.env.NEXT_PUBLIC_ENABLE_NEXT_AUTH === '1',
       NEXT_AUTH_SSO_PROVIDERS: process.env.NEXT_AUTH_SSO_PROVIDERS,
       NEXT_AUTH_SECRET: process.env.NEXT_AUTH_SECRET,
       NEXT_AUTH_DEBUG: !!process.env.NEXT_AUTH_DEBUG,

      // Github
      AUTH_GITHUB_ID: process.env.AUTH_GITHUB_ID,
      AUTH_GITHUB_SECRET: process.env.AUTH_GITHUB_SECRET,
    }
  })
}

export const authEnv = getAuthConfig();
