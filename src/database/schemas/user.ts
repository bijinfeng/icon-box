import { jsonb, pgTable, text } from 'drizzle-orm/pg-core';

export const userSettings = pgTable('user_settings', {
  id: text('id')
    // .references(() => users.id, { onDelete: 'cascade' })
    .primaryKey(),
    languageModel: jsonb('language_model'),
});
export type UserSettingsItem = typeof userSettings.$inferSelect;
