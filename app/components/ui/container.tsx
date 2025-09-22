import * as React from "react";

import { cn } from "@/utils/cn";

const Container = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-[10px]", className)}
    {...props}
  />
));
Container.displayName = "Container";

export { Container };
