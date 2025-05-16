'use client';

import { type PropsWithChildren } from "react";
import { createStoreUpdater } from 'zustand-utils';
import { getLogtoContext } from "@logto/next/server-actions";

import { logtoConfig } from "@/config/logto";

import { useUserStore } from '@/store/user';

const AuthProvider = async ({ children }: PropsWithChildren) => {
  const { isAuthenticated, claims } = await getLogtoContext(logtoConfig);

  const useStoreUpdater = createStoreUpdater(useUserStore);

  useStoreUpdater("isSignedIn", isAuthenticated);
  useStoreUpdater("user", claims);

  return <>{children}</>;
};

export default AuthProvider;
