import { useState } from "react";
import { NavLink } from "@remix-run/react";
// components
import { Button, Sheet, SheetContent, SheetTrigger } from "@/components/ui";
import Logo from "@/components/Logo";

export function MobileNavMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="link" size="icon" className="lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M3 7H21"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M3 12H21"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M3 17H21"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>{" "}
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="bg-white pt-8">
        <div className="pb-14">
          <Logo />
        </div>

        <div className="flex h-96 flex-col justify-between">
          <div className="flex flex-col space-y-3">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "mx-1 whitespace-nowrap rounded-full bg-[#ECF8F0CC] px-8 py-3.5 text-xl font-semibold text-primary-600"
                    : "mx-1 whitespace-nowrap rounded-full px-8 py-3.5 text-xl text-[#A2A6AA] duration-200 hover:bg-[#FFFFFF]/10 hover:text-white"
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

const NAV_ITEMS = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Personal",
    href: "/solutions/personal",
  },
  {
    name: "Startup",
    href: "/solutions/startup",
  },
  {
    name: "Product",
    href: "/product",
  },
  {
    name: "Accounting",
    href: "/resources/accountants",
  },
  {
    name: "Partner",
    href: "/resources/partner",
  },
  {
    name: "Support",
    href: "/support",
  },
];
