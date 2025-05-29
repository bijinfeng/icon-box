import { integer, pgTable, varchar } from 'drizzle-orm/pg-core';

export const userSettings = pgTable('user_settings', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
});
export type UserSettingsItem = typeof userSettings.$inferSelect;
