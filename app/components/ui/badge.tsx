import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils/cn";

const badgeVariants = cva(
  "inline-flex items-center rounded-sm text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-[#ECF8F0CC] text-primary-600",
        secondary: "bg-secondary-100 text-secondary-400",
        destructive: "bg-[#F2E7E7] text-error-600",
        warning: "bg-[#FBF4E4] text-warning-600",
        outline: "text-foreground",
      },
      size: {
        default: "px-2.5 py-0.5",
        sm: "px-1 py-[3px] font-semibold",
        lg: "px-3 py-1.5 text-sm font-bold",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
