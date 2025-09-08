"use client";

import { Button } from "@iconbox/ui/components/button";

interface OAuthButtonClientProps {
  provider: string;
  icon: React.ReactNode;
  name: string;
}

export function OAuthButtonClient({ provider, icon, name }: OAuthButtonClientProps) {
  const handleSignIn = async (provider: string) => {
    console.log("handleSignIn", provider);
    // 实现登录逻辑
  };

  return (
    <Button
      variant="outline"
      type="button"
      className="w-full cursor-pointer"
      onClick={() => handleSignIn(provider)}
    >
      {icon}
      <span className="sr-only">Login with {name}</span>
    </Button>
  );
}