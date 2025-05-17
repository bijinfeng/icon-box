"use client"

import { type PropsWithChildren } from "react"
import { createStoreUpdater} from 'zustand-utils'
import { useUserStore } from '@/store/user';
import { type LogtoContext } from "@logto/next/server-actions";

function Provider(props: PropsWithChildren<LogtoContext>) {
  const { children, isAuthenticated, claims } = props;
  const setUser = createStoreUpdater(useUserStore);

  setUser('isSignedIn', isAuthenticated)
  setUser('user', claims)

  return children;
}

export default Provider;
