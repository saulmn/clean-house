import * as React from "react";

import { Label } from "./label";

import { cn } from "~/utils/cn";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  // id: string;
  label?: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ id, className, error, label, type, ...props }, ref) => {
    return (
      <div className="w-full space-y-[3px]">
        {label && (
          <Label htmlFor={id} className={cn(error ? "text-destructive" : "")}>
            {label}
          </Label>
        )}

        <input
          id={id}
          type={type}
          className={cn(
            "flex h-14 w-full rounded-[15px] border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
            error
              ? "border-destructive placeholder:text-destructive"
              : "border-input",
            className
          )}
          ref={ref}
          {...props}
        />
        {error ? (
          <span className="text-xs text-destructive" id={`${id}-error`}>
            {error}
          </span>
        ) : null}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
