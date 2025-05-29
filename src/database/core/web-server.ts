import { Pool as NeonPool } from '@neondatabase/serverless';
import { drizzle as neonDrizzle } from 'drizzle-orm/neon-serverless';
import { drizzle as nodeDrizzle } from 'drizzle-orm/node-postgres';
import { Pool as NodePool } from 'pg';

import { serverDBEnv } from '@/config/db';
import * as schema from '@/database/schemas';

import { Database } from '../type';

export const getDBInstance = (): Database => {
  const connectionString = serverDBEnv.DATABASE_URL;

  if (!connectionString) {
    throw new Error(`You are try to use database, but "DATABASE_URL" is not set correctly`);
  }

  if (serverDBEnv.DATABASE_DRIVER === 'node') {
    const client = new NodePool({ connectionString });
    return nodeDrizzle(client, { schema }) as unknown as Database;
  }

  const client = new NeonPool({ connectionString });
  return neonDrizzle(client, { schema });
};
