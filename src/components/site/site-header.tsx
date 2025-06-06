import { buttonVariants } from "@iconbox/ui/components/button";
import Link from "next/link";

import { UserNav } from "@/components/layout/user-nav";

import { MainNav } from "./main-nav";
import { CommandMenu } from "./command-menu";

export async function SiteHeader() {
  const isAuthenticated = false;

  return (
    <header className="border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-wrapper">
        <div className="container flex h-14 items-center gap-2 md:gap-4">
          <MainNav />
          <div className="ml-auto flex items-center gap-2 md:flex-1 md:justify-end">
            <div className="hidden w-full flex-1 md:flex md:w-auto md:flex-none">
              <CommandMenu />
            </div>
            <nav className="flex items-center gap-0.5">
              {isAuthenticated ? (
                <UserNav />
              ) : (
                <Link href="/login" className={buttonVariants({ variant: "ghost", size: "sm" })}>
                  登录
                </Link>
              )}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
