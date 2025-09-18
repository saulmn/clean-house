import { useState } from "react";
import { X } from "lucide-react";
import { Form, NavLink } from "@remix-run/react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
// components
import {
  Button,
  Container,
  Input,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  Sheet,
  SheetContent,
  SheetTrigger,
} from "~/components/ui";
import UserNav from "./UserNav";
import Notification from "./Notification";
import Logo from "~/components/Logo";

export default function Header() {
  return (
    <header className="fixed z-50 w-full bg-[#1C2634] py-5 font-manrope">
      <Container className="flex items-center justify-between xl:px-0">
        <div className="flex items-center gap-[72px]">
          <div className="hidden lg:block">
            <Logo primary={false} />
          </div>

          <MobileNav />

          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList>
              {NAV_ITEMS.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      isActive
                        ? "mx-1 whitespace-nowrap rounded-[14px] bg-[#FFFFFF]/10 px-5 py-3 text-sm font-medium text-white"
                        : "mx-1 whitespace-nowrap  rounded-[14px] px-5 py-3  text-sm font-medium text-[#A2A6AA] duration-200 hover:bg-[#FFFFFF]/10 hover:text-white"
                    }
                  >
                    {item.name}
                  </NavLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex gap-4">
          <div className="relative hidden lg:block">
            <Input
              placeholder="Search anything here"
              className="placeholder:text-[rgba(255, 255, 255, 0.50)] h-12 w-64 rounded-full border-none bg-[#FFFFFF]/10 py-2 pl-12 text-white"
            />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              className="absolute left-3 top-[50%] -translate-y-1/2 transform"
            >
              <path
                d="M11.5 21.5C16.7467 21.5 21 17.2467 21 12C21 6.75329 16.7467 2.5 11.5 2.5C6.25329 2.5 2 6.75329 2 12C2 17.2467 6.25329 21.5 11.5 21.5Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 22.5L20 20.5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <Notification />
          <UserNav />
        </div>
      </Container>
    </header>
  );
}

const NAV_ITEMS = [
  {
    name: "Dashboard",
    href: "/dashboard/overview",
  },
  {
    name: "Wallets",
    href: "/dashboard/wallets",
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
  },
  {
    name: "Help Center",
    href: "/dashboard/help-center",
  },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="h-12 w-12 rounded-full border-none bg-[#FFFFFF]/10 hover:bg-[#FFFFFF]/10 lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            <path
              d="M2.75 6.41699H19.25"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M2.75 11H19.25"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M2.75 15.583H19.25"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>{" "}
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="bg-[#1C2634] pt-8">
        <div className="pb-14">
          <Logo primary={false} />
        </div>

        <SheetPrimitive.Close className="absolute -right-14 top-20 flex h-11 w-11 items-center justify-center rounded-full bg-[#FFFFFF]/10 opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
          <X className="h-7 w-7 text-white" />
          <span className="sr-only">Close</span>
        </SheetPrimitive.Close>

        <div className="flex h-96 flex-col justify-between">
          <div className="flex flex-col space-y-3">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "mx-1 whitespace-nowrap rounded-full bg-[#FFFFFF]/10 px-8 py-3.5 text-xl text-white"
                    : "mx-1 whitespace-nowrap rounded-full px-8 py-3.5 text-xl text-[#A2A6AA] duration-200 hover:bg-[#FFFFFF]/10 hover:text-white"
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          <Form
            action="/logout"
            method="POST"
            className="absolute bottom-5 translate-x-1/2"
          >
            <Button
              variant="link"
              className="w-full text-xl font-normal text-error-300"
            >
              Log Out
            </Button>
          </Form>
        </div>
      </SheetContent>
    </Sheet>
  );
}
