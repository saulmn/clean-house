import { Outlet } from "@remix-run/react";

import { ClientLayout } from "./components";

export default function _layout() {
  return (
    <ClientLayout>
      <Outlet />
    </ClientLayout>
  );
}
