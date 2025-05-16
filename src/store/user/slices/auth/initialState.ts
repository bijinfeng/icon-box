import { IdTokenClaims } from "@logto/next";

export interface UserAuthState {
  isSignedIn?: boolean;
  user?: IdTokenClaims;
}

export const initialAuthState: UserAuthState = {};
