import type { OAuthProviderId } from "next-auth/providers";

export interface IconUser {
  avatar?: string;
  email?: string | null;
  firstName?: string | null;
  fullName?: string | null;
  id: string;
  latestName?: string | null;
  username?: string | null;
}

export type UserAuthProvider = Extract<OAuthProviderId, "github" | "google" | "wechat">;
