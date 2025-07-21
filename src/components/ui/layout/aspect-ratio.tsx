import React from "react";
import { cn } from "../../../lib/utils";

const AspectRatio = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    ratio?: number;
  }
>(({ className, ratio = 1, ...props }, ref) => (
  <div
    ref={ref}
    style={{
      aspectRatio: ratio,
    }}
    className={cn("", className)}
    {...props}
  />
));
AspectRatio.displayName = "AspectRatio";

export { AspectRatio };


