import React from "react";
import { cn } from "../../../lib/utils";

const NavigationMenuContext = React.createContext<{
  value?: string;
  onValueChange?: (value: string) => void;
  openDropdown?: string | null;
  setOpenDropdown?: (value: string | null) => void;
}>({});

interface NavigationMenuProps extends React.HTMLAttributes<HTMLElement> {
  value?: string;
  onValueChange?: (value: string) => void;
}

const NavigationMenu = React.forwardRef<HTMLElement, NavigationMenuProps>(
  ({ className, children, value, onValueChange, ...props }, ref) => {
    const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);

    return (
      <NavigationMenuContext.Provider
        value={{
          value,
          onValueChange,
          openDropdown,
          setOpenDropdown,
        }}
      >
        <nav
          ref={ref}
          className={cn(
            "relative z-10 flex max-w-max flex-1 items-center justify-center overflow-visible navigation-menu-container",
            className
          )}
          {...props}
        >
          {children}
        </nav>
      </NavigationMenuContext.Provider>
    );
  }
);
NavigationMenu.displayName = "NavigationMenu";

const NavigationMenuList = React.forwardRef<
  HTMLUListElement,
  React.HTMLAttributes<HTMLUListElement>
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn(
      "group flex flex-1 list-none items-center justify-center space-x-1 overflow-visible",
      className
    )}
    {...props}
  />
));
NavigationMenuList.displayName = "NavigationMenuList";

interface NavigationMenuItemProps extends React.HTMLAttributes<HTMLLIElement> {
  value?: string;
}

const NavigationMenuItem = React.forwardRef<
  HTMLLIElement,
  NavigationMenuItemProps
>(({ className, value, ...props }, ref) => {
  const {
    value: selectedValue,
    onValueChange,
    openDropdown,
    setOpenDropdown,
  } = React.useContext(NavigationMenuContext);

  const [isOpen, setIsOpen] = React.useState(false);

  const isSelected = selectedValue === value;

  React.useEffect(() => {
    setIsOpen(isSelected);
  }, [isSelected]);

  React.useEffect(() => {
    setIsOpen(openDropdown === value);
  }, [openDropdown, value]);

  return (
    <li
      ref={ref}
      className={cn("relative navigation-menu-item", className)}
      {...props}
      data-state={isOpen ? "open" : "closed"}
      onMouseLeave={() => {
        if (openDropdown === value) {
          setOpenDropdown?.(null);
        }
      }}
    />
  );
});
NavigationMenuItem.displayName = "NavigationMenuItem";

const NavigationMenuTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { value?: string }
>(({ className, children, value, ...props }, ref) => {
  const { openDropdown, setOpenDropdown } = React.useContext(
    NavigationMenuContext
  );
  const isOpen = openDropdown === value;

  const handleClick = () => {
    if (isOpen) {
      setOpenDropdown?.(null);
    } else {
      setOpenDropdown?.(value || null);
    }
  };

  const handleMouseEnter = () => {
    setOpenDropdown?.(value || null);
  };

  return (
    <button
      ref={ref}
      className={cn(
        "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
        isOpen && "bg-accent/50",
        className
      )}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      data-state={isOpen ? "open" : "closed"}
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
        className={cn(
          "relative top-[1px] ml-1 h-3 w-3 transition duration-200",
          isOpen && "rotate-180"
        )}
        aria-hidden="true"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </button>
  );
});
NavigationMenuTrigger.displayName = "NavigationMenuTrigger";

const NavigationMenuContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { value?: string }
>(({ className, value, ...props }, ref) => {
  const { openDropdown } = React.useContext(NavigationMenuContext);
  const isOpen = openDropdown === value;

  if (!isOpen) {
    return null;
  }

  return (
    <div
      ref={ref}
      className={cn(
        "navigation-menu-content absolute left-0 top-full mt-1 z-[99999999] bg-popover text-popover-foreground border border-border rounded-md shadow-lg overflow-hidden animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
        className
      )}
      data-state={isOpen ? "open" : "closed"}
      {...props}
    />
  );
});
NavigationMenuContent.displayName = "NavigationMenuContent";

const NavigationMenuLink = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, ...props }, ref) => (
  <a
    ref={ref}
    className={cn(
      "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
      className
    )}
    {...props}
  />
));
NavigationMenuLink.displayName = "NavigationMenuLink";

const NavigationMenuIndicator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "absolute top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className
    )}
    {...props}
  >
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
  </div>
));
NavigationMenuIndicator.displayName = "NavigationMenuIndicator";

const NavigationMenuViewport = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("absolute left-0 top-full flex justify-center", className)}
    {...props}
  >
    <div className="relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]" />
  </div>
));
NavigationMenuViewport.displayName = "NavigationMenuViewport";

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
};
