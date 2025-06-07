"use client";

import { SiGithub, SiGoogle, SiWechat } from "@icons-pack/react-simple-icons";
import { Button } from "@iconbox/ui/components/button";
import { signIn } from "next-auth/react";
import { AuthError } from "next-auth";
import { useRouter, useSearchParams } from "next/navigation";

import type { UserAuthProvider } from "@/types/user";
import { useUserStore } from "@/store/user";

const authProviderMap: Record<UserAuthProvider, { icon: React.ReactNode; name: string }> = {
  github: { icon: <SiGithub size={24} />, name: "GitHub" },
  google: { icon: <SiGoogle size={24} />, name: "Google" },
  wechat: { icon: <SiWechat size={24} />, name: "WeChat" },
};

export const OAuthButtons = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const oAuthSSOProviders = useUserStore((s) => s.oAuthSSOProviders);

  // Redirect back to the page url
  const callbackUrl = searchParams.get("callbackUrl") ?? "";

  const handleSignIn = async (provider: UserAuthProvider) => {
    try {
      await signIn(provider, { redirectTo: callbackUrl });
    } catch (error) {
      // Signin can fail for a number of reasons, such as the user
      // not existing, or the user not having the correct role.
      // In some cases, you may want to redirect to a custom error
      if (error instanceof AuthError) {
        return router.push(`/next-auth/?error=${error.type}`);
      }

      // Otherwise if a redirects happens Next.js can handle it
      // so you can just re-thrown the error and let Next.js handle it.
      // Docs: https://nextjs.org/docs/app/api-reference/functions/redirect#server-component
      throw error;
    }
  };

  if (!oAuthSSOProviders || oAuthSSOProviders.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {oAuthSSOProviders.map((provider) => (
        <Button
          key={provider}
          variant="outline"
          type="button"
          className="w-full cursor-pointer"
          onClick={() => handleSignIn(provider)}
        >
          {authProviderMap[provider].icon}
          <span className="sr-only">Login with {authProviderMap[provider].name}</span>
        </Button>
      ))}
    </div>
  );
};
