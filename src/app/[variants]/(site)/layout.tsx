import type { FC, PropsWithChildren } from 'react';

import { SiteHeader } from '@/components/site/site-header'
import { SiteFooter } from '@/components/site/site-footer'

const Home: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="relative flex min-h-svh flex-col bg-background">
      <div className="border-grid flex flex-1 flex-col">
        <SiteHeader />
        <main className="flex flex-1 flex-col">{children}</main>
        <SiteFooter />
      </div>
    </div>
  );
}

export default Home;
