import { Link } from "@remix-run/react";
// components
import Logo from "@/components/Logo";
import { MobileNavMenu } from "./MobileNavMenu";
import { Container, buttonVariants } from "@/components/ui";
// utils
import { cn } from "@/utils/cn";
import { BUY_URL } from "@/utils/setting";

export default function Header() {
  return (
    <header className="bg-red-500 fixed z-50 w-full bg-white py-3.5">
      <Container className="flex items-center justify-between">
        <div className="flex items-center gap-[72px]">
          <Logo />
        </div>
        <div className="hidden items-center gap-6 lg:flex">
          <Link
            to="/login"
            className={cn(
              buttonVariants({ variant: "link" }),
              "capitalize text-secondary-500"
            )}
          >
            Login
          </Link>
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <MobileNavMenu />
        </div>
      </Container>
    </header>
  );
}
