import { getApi } from "@/bknd";
import "bknd/dist/styles.css";

import { AdminComponent } from "./Admin";

export default async function AdminPage() {
  // make sure to verify auth using headers
  const api = await getApi({ verify: true });

  return (
    <AdminComponent
      withProvider={{ user: api.getUser()! }}
      config={{
        basepath: "/admin",
        logo_return_path: "/../",
      }}
    />
  );
}
