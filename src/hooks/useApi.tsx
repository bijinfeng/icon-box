'use client';

import { createContext, ReactNode, useContext } from "react";
import type { Api } from "bknd/client";

export type ApiContext = {
  api: Api;
};

const ApiContext = createContext<ApiContext>(undefined!);

export type ApiProviderProps = {
  api: Api;
  children: ReactNode;
};

export const ApiProvider = ({ api, children }: ApiProviderProps) => {
  return <ApiContext.Provider value={{ api }}>{children}</ApiContext.Provider>;
};

export const useApi = () => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error("useApi must be used within an ApiProvider");
  }
  return context.api;
};
