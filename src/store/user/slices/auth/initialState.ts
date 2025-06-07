import type { Session, User } from "next-auth";

import type { IconUser, UserAuthProvider } from "@/types/user";

export interface UserAuthState {
  isLoaded?: boolean;

  isSignedIn?: boolean;
  nextSession?: Session;
  nextUser?: User;
  oAuthSSOProviders?: UserAuthProvider[];
  user?: IconUser;
}

export const initialAuthState: UserAuthState = {
  oAuthSSOProviders: ["github", "google", "wechat"],
};
