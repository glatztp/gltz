import React from "react";
import { cn } from "../../../lib/utils";

interface HoverCardProps {
  children: React.ReactNode;
  content: React.ReactNode;
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
  openDelay?: number;
  closeDelay?: number;
}

const HoverCard: React.FC<HoverCardProps> = ({
  children,
  content,
  side = "bottom",
  align = "center",
  openDelay = 700,
  closeDelay = 300,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const timeoutRef = React.useRef<NodeJS.Timeout>();
  const triggerRef = React.useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      if (triggerRef.current) {
        const rect = triggerRef.current.getBoundingClientRect();
        let x = rect.left;
        let y = rect.bottom + 8;

        // Adjust position based on side
        switch (side) {
          case "top":
            y = rect.top - 8;
            break;
          case "right":
            x = rect.right + 8;
            y = rect.top;
            break;
          case "left":
            x = rect.left - 8;
            y = rect.top;
            break;
          case "bottom":
          default:
            y = rect.bottom + 8;
            break;
        }

        // Adjust position based on align
        if (side === "top" || side === "bottom") {
          switch (align) {
            case "start":
              x = rect.left;
              break;
            case "end":
              x = rect.right;
              break;
            case "center":
            default:
              x = rect.left + rect.width / 2;
              break;
          }
        } else {
          switch (align) {
            case "start":
              y = rect.top;
              break;
            case "end":
              y = rect.bottom;
              break;
            case "center":
            default:
              y = rect.top + rect.height / 2;
              break;
          }
        }

        setPosition({ x, y });
        setIsOpen(true);
      }
    }, openDelay);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, closeDelay);
  };

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const getSideClasses = () => {
    switch (side) {
      case "top":
        return "mb-2";
      case "right":
        return "ml-2";
      case "left":
        return "mr-2";
      case "bottom":
      default:
        return "mt-2";
    }
  };

  const getTransformClasses = () => {
    if (side === "top" || side === "bottom") {
      switch (align) {
        case "start":
          return "translate-x-0";
        case "end":
          return "-translate-x-full";
        case "center":
        default:
          return "-translate-x-1/2";
      }
    } else {
      switch (align) {
        case "start":
          return "translate-y-0";
        case "end":
          return "-translate-y-full";
        case "center":
        default:
          return "-translate-y-1/2";
      }
    }
  };

  return (
    <>
      <div
        ref={triggerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="inline-block"
      >
        {children}
      </div>
      {isOpen && (
        <div
          className={cn(
            "fixed z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none animate-in fade-in-0 zoom-in-95",
            getSideClasses(),
            getTransformClasses()
          )}
          style={{
            left: position.x,
            top: position.y,
          }}
          onMouseEnter={() => {
            if (timeoutRef.current) {
              clearTimeout(timeoutRef.current);
            }
          }}
          onMouseLeave={handleMouseLeave}
        >
          {content}
        </div>
      )}
    </>
  );
};

const HoverCardTrigger = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("inline-block", className)} {...props} />
));
HoverCardTrigger.displayName = "HoverCardTrigger";

const HoverCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none",
      className
    )}
    {...props}
  />
));
HoverCardContent.displayName = "HoverCardContent";

export { HoverCard, HoverCardTrigger, HoverCardContent };


