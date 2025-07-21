import React from "react";
import { cn } from "../../lib/utils";

interface ResizableProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "horizontal" | "vertical";
  defaultSize?: number;
  minSize?: number;
  maxSize?: number;
}

const ResizableContext = React.createContext<{
  direction: "horizontal" | "vertical";
}>({
  direction: "horizontal",
});

const Resizable = React.forwardRef<HTMLDivElement, ResizableProps>(
  ({ className, direction = "horizontal", children, ...props }, ref) => {
    return (
      <ResizableContext.Provider value={{ direction }}>
        <div
          ref={ref}
          className={cn(
            "flex",
            direction === "horizontal" ? "h-full" : "w-full flex-col",
            className
          )}
          {...props}
        >
          {children}
        </div>
      </ResizableContext.Provider>
    );
  }
);
Resizable.displayName = "Resizable";

interface ResizablePanelProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultSize?: number;
  minSize?: number;
  maxSize?: number;
  size?: number;
  onResize?: (size: number) => void;
}

const ResizablePanel = React.forwardRef<HTMLDivElement, ResizablePanelProps>(
  (
    {
      className,
      defaultSize = 50,
      minSize = 10,
      maxSize = 90,
      size,
      onResize,
      children,
      ...props
    },
    ref
  ) => {
    const { direction } = React.useContext(ResizableContext);
    const [currentSize, setCurrentSize] = React.useState(size || defaultSize);

    const actualSize = size !== undefined ? size : currentSize;

    const handleResize = (newSize: number) => {
      const clampedSize = Math.max(minSize, Math.min(maxSize, newSize));
      if (size === undefined) {
        setCurrentSize(clampedSize);
      }
      onResize?.(clampedSize);
    };

    return (
      <div
        ref={ref}
        className={cn("overflow-auto", className)}
        style={{
          [direction === "horizontal" ? "width" : "height"]: `${actualSize}%`,
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);
ResizablePanel.displayName = "ResizablePanel";

interface ResizableHandleProps extends React.HTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
}

const ResizableHandle = React.forwardRef<HTMLDivElement, ResizableHandleProps>(
  ({ className, disabled, ...props }, ref) => {
    const { direction } = React.useContext(ResizableContext);
    const [isDragging, setIsDragging] = React.useState(false);
    const [startPos, setStartPos] = React.useState(0);
    const [startSizes, setStartSizes] = React.useState<number[]>([]);

    const handleMouseDown = (e: React.MouseEvent) => {
      if (disabled) return;

      setIsDragging(true);
      setStartPos(direction === "horizontal" ? e.clientX : e.clientY);

      // Get parent container and find sibling panels
      const container = (e.currentTarget as HTMLElement).parentElement;
      if (container) {
        const panels = Array.from(container.children).filter(
          (child) => child !== e.currentTarget
        ) as HTMLElement[];

        const sizes = panels.map((panel) => {
          const size =
            direction === "horizontal"
              ? (panel.offsetWidth / container.offsetWidth) * 100
              : (panel.offsetHeight / container.offsetHeight) * 100;
          return size;
        });
        setStartSizes(sizes);
      }
    };

    const handleMouseMove = React.useCallback(
      (e: MouseEvent) => {
        if (!isDragging) return;

        const currentPos = direction === "horizontal" ? e.clientX : e.clientY;
        const delta = currentPos - startPos;

        // Calculate new sizes based on delta
        // This is a simplified version - real implementation would be more complex
        console.log("Resizing:", delta);
      },
      [isDragging, startPos, direction]
    );

    const handleMouseUp = React.useCallback(() => {
      setIsDragging(false);
    }, []);

    React.useEffect(() => {
      if (isDragging) {
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
        document.body.style.cursor =
          direction === "horizontal" ? "col-resize" : "row-resize";
        document.body.style.userSelect = "none";

        return () => {
          document.removeEventListener("mousemove", handleMouseMove);
          document.removeEventListener("mouseup", handleMouseUp);
          document.body.style.cursor = "";
          document.body.style.userSelect = "";
        };
      }
    }, [isDragging, handleMouseMove, handleMouseUp, direction]);

    return (
      <div
        ref={ref}
        className={cn(
          "relative flex items-center justify-center bg-border transition-colors",
          direction === "horizontal"
            ? "w-1 cursor-col-resize hover:bg-accent"
            : "h-1 cursor-row-resize hover:bg-accent",
          disabled && "cursor-not-allowed opacity-50",
          isDragging && "bg-accent",
          className
        )}
        onMouseDown={handleMouseDown}
        {...props}
      >
        <div
          className={cn(
            "rounded-sm bg-border",
            direction === "horizontal" ? "h-4 w-[3px]" : "h-[3px] w-4"
          )}
        />
      </div>
    );
  }
);
ResizableHandle.displayName = "ResizableHandle";

export { Resizable, ResizablePanel, ResizableHandle };
