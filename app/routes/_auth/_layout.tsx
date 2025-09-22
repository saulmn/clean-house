import { Link, Outlet } from "@remix-run/react";
// components
import { Heading, Paragraph } from "@/components/ui";

export default function _layout() {
  return (
    <div className="flex h-auto w-full flex-col font-manrope lg:h-screen lg:flex-row">
      <div className="flex basis-full flex-col bg-primary-500 lg:basis-1/2">
        <div className="min-h-[50vh] overflow-hidden lg:h-full">
          <img src="/images/auth.png" alt="dashboard" className="w-full" />
        </div>

        <div className=" bg-secondary-500 p-6 lg:p-12">
          <div className="mb-6 h-10">
            <Link to="/">
              <img src="/images/logo-secondary.svg" alt="Finlab Logo" />
            </Link>
          </div>

          <Heading
            variant="h4"
            className="mb-6 font-bold text-white lg:leading-tight lg:tracking-[-2.16px]"
          >
            Let’s empower your financial task today with Findash.
          </Heading>

          <Paragraph variant="subtitle2" className="text-secondary-200">
            The one-stop platform for all financial management of small and
            medium-sized business.
          </Paragraph>
        </div>
      </div>

      <div className="basis-full lg:basis-1/2">
        <Outlet />
      </div>
    </div>
  );
}
