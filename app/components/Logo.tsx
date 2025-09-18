import { Link } from "@remix-run/react";
// components
import { Badge } from "./ui";

export default function Logo({ primary = true }: { primary?: boolean }) {
  return (
    <div>
      {primary ? (
        <Link to="/" className="flex items-center gap-1">
          <img src="/images/logo.svg" alt="Finlab Logo" />
          <Badge size="sm" className="h-min">
            v1.0.0
          </Badge>
        </Link>
      ) : (
        <Link to="/" className="flex items-center gap-1">
          <img src="/images/logo-secondary.svg" alt="Finlab Logo" />
          <Badge size="sm" className="h-min">
            v1.0.0
          </Badge>
        </Link>
      )}
    </div>
  );
}
