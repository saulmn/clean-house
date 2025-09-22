import { Link } from "@remix-run/react";
// components
import { Badge } from "./ui";

export default function Logo({ primary = true }: { primary?: boolean }) {
  return (
    <div>
      <Link to="/" className="flex items-center gap-2">
        <img
          src="/images/logo.png"
          alt="Clean House logo"
          className="h-8 w-8 rounded-sm object-contain md:h-9 md:w-9"
        />
        <span className="text-base font-semibold tracking-tight text-foreground md:text-lg">
          Clean House
        </span>
        <Badge size="sm" className="h-min">
          v1.0.0
        </Badge>
      </Link>
    </div>
  );
}
