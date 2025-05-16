import { signIn } from '@logto/next/server-actions';
import { Button } from "@iconbox/ui/components/button"
import { logtoConfig } from '@/config/logto';

import { MainNav } from "./main-nav"

export function SiteHeader() {
  const onSignIn = async () => {
    'use server';

    await signIn(logtoConfig);
  };

  return (
    <header className="border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-wrapper">
        <div className="container flex h-14 items-center gap-2 md:gap-4">
          <MainNav />
          <div className="ml-auto flex items-center gap-2 md:flex-1 md:justify-end">
            <div className="hidden w-full flex-1 md:flex md:w-auto md:flex-none">
              {/* <CommandMenu /> */}
            </div>
            <nav className="flex items-center gap-0.5">
              <Button variant="ghost" size="sm" onClick={onSignIn}>
                登录
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
