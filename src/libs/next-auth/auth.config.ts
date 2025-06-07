import { type NextAuthConfig } from "next-auth";

import { authEnv } from "@/config/auth";

import { ssoProviders } from "./sso-providers";

export const initSSOProviders = () => {
  return authEnv.NEXT_PUBLIC_ENABLE_NEXT_AUTH
    ? authEnv.NEXT_AUTH_SSO_PROVIDERS.split(/[,，]/).map((provider) => {
        const validProvider = ssoProviders.find((item) => item.id === provider.trim());

        if (validProvider) return validProvider.provider;

        throw new Error(`[NextAuth] provider ${provider} is not supported`);
      })
    : [];
};

export const config = {
  debug: authEnv.NEXT_AUTH_DEBUG,
  pages: {
    error: "/next-auth/error",
    signIn: "/next-auth/signin",
  },
  // Configure one or more authentication providers
  providers: initSSOProviders(),
  secret: authEnv.NEXT_AUTH_SECRET,
} satisfies NextAuthConfig;
