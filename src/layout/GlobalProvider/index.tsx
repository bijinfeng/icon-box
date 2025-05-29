import { ReactNode } from 'react';

import { ThemeProvider } from "@/components/theme/theme-provider"
import StoreInitialization from './StoreInitialization';
import QueryProvider from './Query';

interface GlobalLayoutProps {
  children: ReactNode;
}

const GlobalLayout = async ({ children }: GlobalLayoutProps) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <QueryProvider>{children}</QueryProvider>
      <StoreInitialization />
    </ThemeProvider>
  )
}

export default GlobalLayout;
