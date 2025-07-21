import React from "react";
import { cn } from "../../lib/utils";

const MenubarContext = React.createContext<{
  value?: string;
  onValueChange?: (value: string) => void;
}>({});

interface MenubarProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string;
  onValueChange?: (value: string) => void;
}

const Menubar = React.forwardRef<HTMLDivElement, MenubarProps>(
  ({ className, value, onValueChange, ...props }, ref) => (
    <MenubarContext.Provider value={{ value, onValueChange }}>
      <div
        ref={ref}
        className={cn(
          "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",
          className
        )}
        {...props}
      />
    </MenubarContext.Provider>
  )
);
Menubar.displayName = "Menubar";

interface MenubarMenuProps {
  value: string;
  children: React.ReactNode;
}

const MenubarMenu: React.FC<MenubarMenuProps> = ({ value, children }) => {
  const { value: selectedValue, onValueChange } =
    React.useContext(MenubarContext);
  const [isOpen, setIsOpen] = React.useState(false);

  const isSelected = selectedValue === value;

  React.useEffect(() => {
    setIsOpen(isSelected);
  }, [isSelected]);

  return (
    <div className="relative">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            isOpen,
            onToggle: () => {
              const newValue = isOpen ? "" : value;
              onValueChange?.(newValue);
            },
          } as any);
        }
        return child;
      })}
    </div>
  );
};

interface MenubarTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isOpen?: boolean;
  onToggle?: () => void;
}

const MenubarTrigger = React.forwardRef<HTMLButtonElement, MenubarTriggerProps>(
  ({ className, isOpen, onToggle, children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
        isOpen && "bg-accent text-accent-foreground",
        className
      )}
      onClick={onToggle}
      {...props}
    >
      {children}
    </button>
  )
);
MenubarTrigger.displayName = "MenubarTrigger";

const MenubarPortal: React.FC<{
  children: React.ReactNode;
  isOpen?: boolean;
}> = ({ children, isOpen }) => {
  if (!isOpen) return null;

  return <div className="fixed inset-0 z-50">{children}</div>;
};

interface MenubarContentProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen?: boolean;
  align?: "start" | "center" | "end";
  side?: "top" | "bottom" | "left" | "right";
}

const MenubarContent = React.forwardRef<HTMLDivElement, MenubarContentProps>(
  (
    { className, align = "start", side = "bottom", isOpen, children, ...props },
    ref
  ) => {
    const contentRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          contentRef.current &&
          !contentRef.current.contains(event.target as Node)
        ) {
          // Close menu logic would go here
        }
      };

      if (isOpen) {
        document.addEventListener("mousedown", handleClickOutside);
      }

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
      <div
        ref={contentRef}
        className={cn(
          "absolute z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
          "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
          side === "bottom" && "top-full mt-1",
          side === "top" && "bottom-full mb-1",
          side === "left" && "right-full mr-1",
          side === "right" && "left-full ml-1",
          align === "start" && "left-0",
          align === "center" && "left-1/2 -translate-x-1/2",
          align === "end" && "right-0",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
MenubarContent.displayName = "MenubarContent";

const MenubarItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    )}
    {...props}
  />
));
MenubarItem.displayName = "MenubarItem";

const MenubarCheckboxItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    checked?: boolean;
  }
>(({ className, children, checked, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      {checked && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
        >
          <polyline points="20,6 9,17 4,12" />
        </svg>
      )}
    </span>
    {children}
  </div>
));
MenubarCheckboxItem.displayName = "MenubarCheckboxItem";

const MenubarRadioItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-2 w-2 fill-current"
      >
        <circle cx="12" cy="12" r="2" />
      </svg>
    </span>
    {children}
  </div>
));
MenubarRadioItem.displayName = "MenubarRadioItem";

const MenubarLabel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    )}
    {...props}
  />
));
MenubarLabel.displayName = "MenubarLabel";

const MenubarSeparator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
));
MenubarSeparator.displayName = "MenubarSeparator";

const MenubarShortcut = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      className
    )}
    {...props}
  />
));
MenubarShortcut.displayName = "MenubarShortcut";

const MenubarSub = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => <div ref={ref} {...props} />);
MenubarSub.displayName = "MenubarSub";

const MenubarSubContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
));
MenubarSubContent.displayName = "MenubarSubContent";

const MenubarSubTrigger = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="ml-auto h-4 w-4"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  </div>
));
MenubarSubTrigger.displayName = "MenubarSubTrigger";

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioItem,
  MenubarPortal,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
};
