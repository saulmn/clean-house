import { NavLink, Outlet } from "@remix-run/react";
// components
import { Breadcrumb, Container, ScrollArea, ScrollBar } from "@/components/ui";
// utils
import { useUser } from "@/utils";

export default function _route() {
  const user = useUser();
  return (
    <>
      <div className="w-screen bg-[#1C2634]">
        <Container className="pb-40 pt-28 xl:px-0">
          <Breadcrumb
            heading={`Welcome back, ${user.fullName} 👏🏻`}
            links={[
              { name: "Dashboard", href: "/dashboard/overview" },
              { name: "Overview", href: "" },
            ]}
          />
        </Container>
      </div>

      <Container className="relative -top-32 h-auto w-full xl:px-0">
        <div>
          <Outlet />
        </div>
      </Container>
    </>
  );
}
