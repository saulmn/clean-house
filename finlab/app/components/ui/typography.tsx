import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import React from "react";
import type { HTMLAttributes } from "react";
// utils
import { cn } from "~/utils/cn";

const headingVariants = cva("text-secondary-500", {
  variants: {
    variant: {
      h1: "text-4xl md:text-5xl lg:text-7xl font-bold",
      h2: "text-3xl md:text-[36px] lg:text-[56px]",
      h3: "text-5xl",
      h4: "text-2xl md:text-3xl lg:text-[40px]",
      h5: "text-3xl lg:text-4xl",
      h6: "text-xl lg:text-[32px]",
    },
  },
  defaultVariants: {
    variant: "h1",
  },
});

export interface HeadingProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ variant, className, ...props }, ref) => {
    const Compo = variant;
    return (
      <Compo
        ref={ref}
        className={cn(headingVariants({ variant, className }))}
        {...props}
      />
    );
  }
);

Heading.displayName = "Heading";

export { Heading };

const paragraphVariants = cva("text-secondary-500", {
  variants: {
    variant: {
      subtitle1: "text-2xl",
      subtitle2: "text-xl",
      body1: "text-sm lg:text-lg text-secondary-400",
      body2: "text-base text-secondary-400",
      body3: "text-sm",
      caption: "text-xs",
    },
  },
  defaultVariants: {
    variant: "subtitle1",
  },
});

export interface TypographyProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {}

const Paragraph = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ variant, className, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(paragraphVariants({ variant, className }))}
        {...props}
      />
    );
  }
);

Paragraph.displayName = "Paragraph";

export { Paragraph };
