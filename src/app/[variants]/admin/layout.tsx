import type { FC, PropsWithChildren } from "react";

const AdminLayout: FC<PropsWithChildren> = ({ children }) => {
  return <div>{children}</div>;
};

export default AdminLayout;
