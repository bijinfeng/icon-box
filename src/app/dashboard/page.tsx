import type { FC, PropsWithChildren } from "react";

const Page: FC<PropsWithChildren> = ({ children }) => {
  return <div className="@container/main flex flex-1">{children}</div>;
};

export default Page;
