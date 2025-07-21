import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import { toggleVariants } from "./toggle";

const ToggleGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof toggleVariants> & {
      type?: "single" | "multiple";
      value?: string | string[];
      onValueChange?: (value: string | string[]) => void;
    }
>(({ className, variant, size, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center justify-center gap-1", className)}
    {...props}
  >
    {children}
  </div>
));

ToggleGroup.displayName = "ToggleGroup";

const ToggleGroupItem = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> &
    VariantProps<typeof toggleVariants> & {
      value: string;
      pressed?: boolean;
    }
>(({ className, children, variant, size, pressed, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      toggleVariants({ variant, size }),
      pressed && "bg-accent text-accent-foreground",
      className
    )}
    {...props}
  >
    {children}
  </button>
));

ToggleGroupItem.displayName = "ToggleGroupItem";

export { ToggleGroup, ToggleGroupItem };

