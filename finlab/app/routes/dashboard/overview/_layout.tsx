import { NavLink, Outlet } from "@remix-run/react";
// components
import { Breadcrumb, Container, ScrollArea, ScrollBar } from "~/components/ui";
// utils
import { useUser } from "~/utils";

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
        <ScrollArea className="h-full w-full">
          <div className="flex pb-6 lg:w-min">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  isActive
                    ? "whitespace-nowrap border-b-2 border-primary px-5 py-3 text-base font-medium text-white"
                    : "whitespace-nowrap border-b border-[#A2A6AA] px-5 py-3 text-base font-medium text-[#A2A6AA] duration-200 hover:text-white"
                }
                end
              >
                {item.name}
              </NavLink>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        <div>
          <Outlet />
        </div>
      </Container>
    </>
  );
}

const NAV_ITEMS = [
  { name: "Overview", href: "/dashboard/overview" },
  { name: "Transactions", href: "/dashboard/overview/transactions" },
  { name: "Statistics", href: "/dashboard/overview/statistics" },
];
