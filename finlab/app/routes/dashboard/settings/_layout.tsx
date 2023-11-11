import { Outlet } from "@remix-run/react";
import { Breadcrumb, Container } from "~/components/ui";
import { SettingNav } from "./components";
import { MobileSettingNav } from "./components/SettingNav";

export default function _layout() {
  return (
    <>
      <div className="w-screen bg-[#1C2634]">
        <Container className="pb-40 pt-28 xl:px-0">
          <Breadcrumb
            heading="Settings"
            links={[
              { name: "Dashboard", href: "/dashboard/overview" },
              { name: "Settings", href: "/dashboard/settings" },
              { name: "Personal information", href: "" },
            ]}
          />
        </Container>
      </div>

      <Container className="relative -top-32 flex h-auto w-full flex-col lg:flex-row lg:gap-5 xl:px-0">
        <SettingNav />
        <MobileSettingNav />

        <div className="basis-full lg:basis-8/12">
          <Outlet />
        </div>
      </Container>
    </>
  );
}
