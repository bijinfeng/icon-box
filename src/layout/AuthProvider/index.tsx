import { type PropsWithChildren } from "react";
import { getLogtoContext } from "@logto/next/server-actions";
import { logtoConfig } from "@/config/logto";
import Provider from './Provider'

const AuthProvider = async ({ children }: PropsWithChildren) => {
  const context = await getLogtoContext(logtoConfig);

  return <Provider { ...context }>{children}</Provider>;
};

export default AuthProvider;
