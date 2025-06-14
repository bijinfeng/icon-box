import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const getAppConfig = () => {
  return createEnv({
    client: {},
    server: {
      ENABLE_AUTH_PROTECTION: z.boolean().optional(),
    },
    runtimeEnv: {
      ENABLE_AUTH_PROTECTION: process.env.ENABLE_AUTH_PROTECTION === '1',
    }
  })
}

export const appEnv = getAppConfig();
