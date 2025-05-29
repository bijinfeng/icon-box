import type { NeonDatabase } from 'drizzle-orm/neon-serverless';

import * as schema from './schemas';

export type DatabaseSchema = typeof schema;

export type Database = NeonDatabase<DatabaseSchema>;
