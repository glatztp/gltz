// Core Components
export * from "./button";
export * from "./badge";
export * from "./avatar";
export * from "./toggle";
export * from "./toggle-group";
export * from "./card";
export * from "./tabs";
export * from "./separator";
export { Label } from "./label";
export {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
  QuickCollapsible,
  FAQItem,
  collapsibleVariants,
  collapsibleTriggerVariants,
  collapsibleContentVariants,
} from "./collapsible";
export * from "./theme-toggle";

// Forms
export * from "./forms";

// Selects
export * from "./selects";

// Navigation - explicit exports to avoid conflicts
export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuViewport,
} from "./navigation/navigation-menu";
export * from "./navigation/pagination";
export * from "./navigation/menubar";

// Overlays
export * from "./overlays";

// Feedback
export * from "./feedback";

// Layout - explicit exports to avoid conflicts
export { AspectRatio } from "./layout/aspect-ratio";
export { ResizablePanel, ResizableHandle } from "./layout/resizable";
export { ScrollArea, ScrollBar } from "./layout/scroll-area";
export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from "./layout/sidebar";

// Data
export * from "./data";
