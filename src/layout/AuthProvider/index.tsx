import { PropsWithChildren } from "react";

const AuthProvider = async ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};

export default AuthProvider;
