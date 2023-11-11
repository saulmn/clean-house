import { Link } from "@remix-run/react";
//
import { buttonVariants } from "./ui";
// utils
import { cn } from "~/utils/cn";
import { BUY_URL } from "~/utils/setting";

export default function BuyThisTemplate() {
  return (
    <div className="fixed bottom-10 right-10 z-50 hidden shadow-[0px_4px_12px_0px_rgba(0,0,0,0.03)] md:block">
      <Link
        to={BUY_URL}
        className={cn(buttonVariants({}), "w-full capitalize")}
        target="_blank"
      >
        Buy this template
      </Link>
    </div>
  );
}
