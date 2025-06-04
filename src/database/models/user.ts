import { eq } from 'drizzle-orm';

import { Database } from "../type";
import { type NewUser, users, type UserItem } from '../schemas';

export class UserModel {
  private userId: string;
  private db: Database;

  constructor(db: Database, userId: string) {
    this.userId = userId;
    this.db = db;
  }

  updateUser = async (value: Partial<UserItem>) => {
    return this.db
      .update(users)
      .set({ ...value, updatedAt: new Date() })
      .where(eq(users.id, this.userId));
  };

  static makeSureUserExist = async (db: Database, userId: string) => {
    await db.insert(users).values({ id: userId }).onConflictDoNothing();
  };

  static createUser = async (db: Database, params: NewUser) => {
    // if user already exists, skip creation
    if (params.id) {
      const user = await db.query.users.findFirst({ where: eq(users.id, params.id) });
      if (!!user) return { duplicate: true };
    }

    const [user] = await db
      .insert(users)
      .values({ ...params })
      .returning();

    return { duplicate: false, user };
  };

  static deleteUser = async (db: Database, id: string) => {
    return db.delete(users).where(eq(users.id, id));
  };

  static findById = async (db: Database, id: string) => {
    return db.query.users.findFirst({ where: eq(users.id, id) });
  };

  static findByEmail = async (db: Database, email: string) => {
    return db.query.users.findFirst({ where: eq(users.email, email) });
  };
}
