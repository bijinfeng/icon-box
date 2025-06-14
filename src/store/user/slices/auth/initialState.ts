import type { ActiveSessionResource, SignInProps, SignOut, UserResource, UserProfileProps } from "@clerk/types";
import type { IconUser, UserAuthProvider } from "@/types/user";

export interface UserAuthState {
  clerkOpenUserProfile?: (props?: UserProfileProps) => void;

  clerkSession?: ActiveSessionResource;
  clerkSignIn?: (props?: SignInProps) => void;
  clerkSignOut?: SignOut;
  clerkUser?: UserResource;
  isLoaded?: boolean;

  isSignedIn?: boolean;
  oAuthSSOProviders?: UserAuthProvider[];
  user?: IconUser;
}

export const initialAuthState: UserAuthState = {
  oAuthSSOProviders: ["github", "google", "wechat"],
};
