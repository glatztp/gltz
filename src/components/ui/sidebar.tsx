import React from "react";
import { cn } from "../../lib/utils";

const SidebarContext = React.createContext<{
  state: "expanded" | "collapsed";
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isMobile: boolean;
  openMobile: boolean;
  setOpenMobile: React.Dispatch<React.SetStateAction<boolean>>;
  toggleSidebar: () => void;
}>({
  state: "expanded",
  open: true,
  setOpen: () => {},
  isMobile: false,
  openMobile: false,
  setOpenMobile: () => {},
  toggleSidebar: () => {},
});

export const useSidebar = () => {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

interface SidebarProviderProps {
  defaultOpen?: boolean;
  children: React.ReactNode;
  className?: string;
}

const SidebarProvider = React.forwardRef<HTMLDivElement, SidebarProviderProps>(
  ({ defaultOpen = true, children, className, ...props }, ref) => {
    const [open, setOpen] = React.useState(defaultOpen);
    const [openMobile, setOpenMobile] = React.useState(false);
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };
      
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const state = open ? "expanded" : "collapsed";

    return (
      <SidebarContext.Provider
        value={{
          state,
          open,
          setOpen,
          isMobile,
          openMobile,
          setOpenMobile,
          toggleSidebar: () => {
            if (isMobile) {
              setOpenMobile((prev) => !prev);
            } else {
              setOpen((prev) => !prev);
            }
          },
        }}
      >
        <div
          ref={ref}
          className={cn("group/sidebar-wrapper flex min-h-screen w-full", className)}
          {...props}
        >
          {children}
        </div>
      </SidebarContext.Provider>
    );
  }
);
SidebarProvider.displayName = "SidebarProvider";

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    side?: "left" | "right";
    variant?: "sidebar" | "floating" | "inset";
    collapsible?: "offcanvas" | "icon" | "none";
  }
>(
  (
    {
      side = "left",
      variant = "sidebar",
      collapsible = "offcanvas",
      className,
      children,
      ...props
    },
    ref
  ) => {
    const { isMobile, state, openMobile, setOpenMobile } = useSidebar();

    if (collapsible === "none") {
      return (
        <div
          className={cn(
            "flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground",
            className
          )}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      );
    }

    if (isMobile) {
      return (
        <>
          {openMobile && (
            <div
              className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
              onClick={() => setOpenMobile(false)}
            />
          )}
          <div
            ref={ref}
            className={cn(
              "fixed inset-y-0 z-50 flex h-auto w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground transition-transform duration-200 ease-in-out",
              side === "left" ? "left-0" : "right-0",
              openMobile ? "translate-x-0" : side === "left" ? "-translate-x-full" : "translate-x-full",
              className
            )}
            {...props}
          >
            {children}
          </div>
        </>
      );
    }

    return (
      <div
        ref={ref}
        className={cn(
          "relative flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground transition-all duration-200 ease-in-out",
          state === "collapsed" && collapsible === "icon" && "w-[--sidebar-width-icon]",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Sidebar.displayName = "Sidebar";

const SidebarTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, onClick, ...props }, ref) => {
  const { toggleSidebar } = useSidebar();

  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-7 w-7",
        className
      )}
      onClick={(event) => {
        onClick?.(event);
        toggleSidebar();
      }}
      {...props}
    >
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
      >
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
        <path d="M9 3v18" />
        <path d="m14 9 3 3-3 3" />
      </svg>
      <span className="sr-only">Toggle Sidebar</span>
    </button>
  );
});
SidebarTrigger.displayName = "SidebarTrigger";

const SidebarHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col gap-2 p-2", className)}
    {...props}
  />
));
SidebarHeader.displayName = "SidebarHeader";

const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col gap-2 p-2", className)}
    {...props}
  />
));
SidebarFooter.displayName = "SidebarFooter";

const SidebarContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex min-h-0 flex-1 flex-col gap-2 overflow-auto p-2", className)}
    {...props}
  />
));
SidebarContent.displayName = "SidebarContent";

const SidebarGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("relative flex w-full min-w-0 flex-col p-2", className)}
    {...props}
  />
));
SidebarGroup.displayName = "SidebarGroup";

const SidebarGroupLabel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "duration-200 flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
      className
    )}
    {...props}
  />
));
SidebarGroupLabel.displayName = "SidebarGroupLabel";

const SidebarGroupContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("w-full text-sm", className)} {...props} />
));
SidebarGroupContent.displayName = "SidebarGroupContent";

const SidebarMenu = React.forwardRef<
  HTMLUListElement,
  React.HTMLAttributes<HTMLUListElement>
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex w-full min-w-0 flex-col gap-1", className)}
    {...props}
  />
));
SidebarMenu.displayName = "SidebarMenu";

const SidebarMenuItem = React.forwardRef<
  HTMLLIElement,
  React.HTMLAttributes<HTMLLIElement>
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("group/menu-item relative", className)} {...props} />
));
SidebarMenuItem.displayName = "SidebarMenuItem";

type SidebarMenuButtonProps = {
  asChild?: boolean;
  isActive?: boolean;
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
} & React.ButtonHTMLAttributes<HTMLButtonElement> & React.HTMLAttributes<HTMLDivElement>;

const SidebarMenuButton = React.forwardRef<
  HTMLButtonElement | HTMLDivElement,
  SidebarMenuButtonProps
>(
  (
    {
      asChild = false,
      isActive = false,
      variant = "default",
      size = "default",
      className,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? "div" : "button";
    // Type assertion for ref and props
    return React.createElement(
      Comp,
      {
        ref: ref as any,
        className: cn(
          "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
          isActive && "bg-sidebar-accent font-medium text-sidebar-accent-foreground",
          className
        ),
        "data-active": isActive,
        ...props,
      }
    );
  }
);
SidebarMenuButton.displayName = "SidebarMenuButton";

const SidebarInset = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <main
    ref={ref}
    className={cn(
      "relative flex min-h-svh flex-1 flex-col bg-background",
      "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
      className
    )}
    {...props}
  />
));
SidebarInset.displayName = "SidebarInset";

// Helper hook for toggling
const toggleSidebar = () => {
  const { setOpen, setOpenMobile, isMobile } = useSidebar();
  
  return React.useCallback(() => {
    if (isMobile) {
      setOpenMobile((prev) => !prev);
    } else {
      setOpen((prev) => !prev);
    }
  }, [isMobile, setOpen, setOpenMobile]);
};

// Add the missing toggleSidebar to the context
const SidebarProviderWithToggle = React.forwardRef<HTMLDivElement, SidebarProviderProps>(
  ({ defaultOpen = true, children, className, ...props }, ref) => {
    const [open, setOpen] = React.useState(defaultOpen);
    const [openMobile, setOpenMobile] = React.useState(false);
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };
      
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const state = open ? "expanded" : "collapsed";

    const toggleSidebar = React.useCallback(() => {
      if (isMobile) {
        setOpenMobile((prev) => !prev);
      } else {
        setOpen((prev) => !prev);
      }
    }, [isMobile]);

    return (
      <SidebarContext.Provider
        value={{
          state,
          open,
          setOpen,
          isMobile,
          openMobile,
          setOpenMobile,
          toggleSidebar,
        } as any}
      >
        <div
          ref={ref}
          className={cn("group/sidebar-wrapper flex min-h-screen w-full has-[[data-variant=inset]]:bg-sidebar", className)}
          style={{
            "--sidebar-width": "16rem",
            "--sidebar-width-icon": "3rem",
          } as React.CSSProperties}
          {...props}
        >
          {children}
        </div>
      </SidebarContext.Provider>
    );
  }
);

export {
  SidebarProviderWithToggle as SidebarProvider,
  Sidebar,
  SidebarTrigger,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
};
