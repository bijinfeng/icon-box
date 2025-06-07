"use client";

import { SiGithub, SiGoogle, SiWechat } from "@icons-pack/react-simple-icons";
import Link from "next/link";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { AuthError } from "next-auth";

import { cn } from "@iconbox/ui/lib/utils";
import { Button } from "@iconbox/ui/components/button";
import { Card, CardContent } from "@iconbox/ui/components/card";
import { Input } from "@iconbox/ui/components/input";
import { Label } from "@iconbox/ui/components/label";

import { useUserStore } from "@/store/user";
import type { UserAuthProvider } from "@/types/user";

const authProviderMap: Record<UserAuthProvider, { icon: React.ReactNode; name: string }> = {
  github: { icon: <SiGithub size={24} />, name: "GitHub" },
  google: { icon: <SiGoogle size={24} />, name: "Google" },
  wechat: { icon: <SiWechat size={24} />, name: "WeChat" },
};

export function LoginForm({ className, ...props }: React.ComponentProps<"div">) {
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

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Welcome back</h1>
                <p className="text-muted-foreground text-balance">Login to your Acme Inc account</p>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email">邮箱</Label>
                <Input id="email" type="email" placeholder="m@example.com" required />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">密码</Label>
                  <Link href="/forgot-password" className="ml-auto text-sm underline-offset-2 hover:underline">
                    忘记密码?
                  </Link>
                </div>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                登录
              </Button>
              <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                <span className="bg-card text-muted-foreground relative z-10 px-2">第三方账号</span>
              </div>

              {oAuthSSOProviders && oAuthSSOProviders.length > 0 && (
                <div className="grid grid-cols-3 gap-4">
                  {oAuthSSOProviders.map((provider) => (
                    <Button
                      key={provider}
                      variant="outline"
                      type="button"
                      className="w-full"
                      onClick={() => handleSignIn(provider)}
                    >
                      {authProviderMap[provider].icon}
                      <span className="sr-only">Login with {authProviderMap[provider].name}</span>
                    </Button>
                  ))}
                </div>
              )}
              <div className="text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link href="/sign-up" className="underline underline-offset-4">
                  Sign up
                </Link>
              </div>
            </div>
          </form>
          <div className="bg-muted relative hidden md:block">
            <Image
              src="/placeholder.svg"
              width={1200}
              height={1200}
              alt="Image"
              priority
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
}
