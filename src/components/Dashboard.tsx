import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";
import { ThemeToggle } from "./ui/theme-toggle";

// Importar as páginas dos componentes
import HomePage from "./pages/home-page";
import { AlertPage } from "./pages/alert-page";
import { AlertDialogPage } from "./pages/alert-dialog-page";
import { AspectRatioPage } from "./pages/aspect-ratio-page";
import { AvatarPage } from "./pages/avatar-page";
import { BadgePage } from "./pages/badge-page";
import { ButtonPage } from "./pages/button-page";
import { CalendarPage } from "./pages/calendar-page";
import { CardPage } from "./pages/card-page";
import { CheckboxPage } from "./pages/checkbox-page";
import { CollapsiblePage } from "./pages/collapsible-page";
import { ComboboxPage } from "./pages/combobox-page";
import { CommandPage } from "./pages/command-page";
import { ContextMenuPage } from "./pages/context-menu-page";
import { DataTablePage } from "./pages/data-table-page";
import { DatePickerPage } from "./pages/date-picker-page";
import { DialogPage } from "./pages/dialog-page";
import { DrawerPage } from "./pages/drawer-page";
import { DropdownMenuPage } from "./pages/dropdown-menu-page";
import { FormPage } from "./pages/form-page";
import { HoverCardPage } from "./pages/hover-card-page";
import { InputPage } from "./pages/input-page";
import { InputOTPPage } from "./pages/input-otp-page";
import { LabelPage } from "./pages/label-page";
import { MenubarPage } from "./pages/menubar-page";
import { NavigationMenuPage } from "./pages/navigation-menu-page";
import { PaginationPage } from "./pages/pagination-page";
import { PopoverPage } from "./pages/popover-page";
import { ProgressPage } from "./pages/progress-page";
import { RadioGroupPage } from "./pages/radio-group-page";
import { ResizablePage } from "./pages/resizable-page";
import { ScrollAreaPage } from "./pages/scroll-area-page";
import { SelectPage } from "./pages/select-page";
import { SeparatorPage } from "./pages/separator-page";
import { SheetPage } from "./pages/sheet-page";
import { SkeletonPage } from "./pages/skeleton-page";
import { SliderPage } from "./pages/slider-page";
import { SonnerPage } from "./pages/sonner-page";
import { SwitchPage } from "./pages/switch-page";
import { TabsPage } from "./pages/tabs-page";
import { TextareaPage } from "./pages/textarea-page";
import { ToastPage } from "./pages/toast-page";
import { TogglePage } from "./pages/toggle-page";
import { ToggleGroupPage } from "./pages/toggle-group-page";
import { TooltipPage } from "./pages/tooltip-page";

const components = [
  { name: "🏠 Home", id: "home", page: HomePage },
  { name: "Alert", id: "alert", page: AlertPage },
  { name: "Alert Dialog", id: "alert-dialog", page: AlertDialogPage },
  { name: "Aspect Ratio", id: "aspect-ratio", page: AspectRatioPage },
  { name: "Avatar", id: "avatar", page: AvatarPage },
  { name: "Badge", id: "badge", page: BadgePage },
  { name: "Button", id: "button", page: ButtonPage },
  { name: "Calendar", id: "calendar", page: CalendarPage },
  { name: "Card", id: "card", page: CardPage },
  { name: "Checkbox", id: "checkbox", page: CheckboxPage },
  { name: "Collapsible", id: "collapsible", page: CollapsiblePage },
  { name: "Combobox", id: "combobox", page: ComboboxPage },
  { name: "Command", id: "command", page: CommandPage },
  { name: "Context Menu", id: "context-menu", page: ContextMenuPage },
  { name: "Data Table", id: "data-table", page: DataTablePage },
  { name: "Date Picker", id: "date-picker", page: DatePickerPage },
  { name: "Dialog", id: "dialog", page: DialogPage },
  { name: "Drawer", id: "drawer", page: DrawerPage },
  { name: "Dropdown Menu", id: "dropdown-menu", page: DropdownMenuPage },
  { name: "Form", id: "form", page: FormPage },
  { name: "Hover Card", id: "hover-card", page: HoverCardPage },
  { name: "Input", id: "input", page: InputPage },
  { name: "Input OTP", id: "input-otp", page: InputOTPPage },
  { name: "Label", id: "label", page: LabelPage },
  { name: "Menubar", id: "menubar", page: MenubarPage },
  { name: "Navigation Menu", id: "navigation-menu", page: NavigationMenuPage },
  { name: "Pagination", id: "pagination", page: PaginationPage },
  { name: "Popover", id: "popover", page: PopoverPage },
  { name: "Progress", id: "progress", page: ProgressPage },
  { name: "Radio Group", id: "radio-group", page: RadioGroupPage },
  { name: "Resizable", id: "resizable", page: ResizablePage },
  { name: "Scroll Area", id: "scroll-area", page: ScrollAreaPage },
  { name: "Select", id: "select", page: SelectPage },
  { name: "Separator", id: "separator", page: SeparatorPage },
  { name: "Sheet", id: "sheet", page: SheetPage },
  { name: "Skeleton", id: "skeleton", page: SkeletonPage },
  { name: "Slider", id: "slider", page: SliderPage },
  { name: "Sonner", id: "sonner", page: SonnerPage },
  { name: "Switch", id: "switch", page: SwitchPage },
  { name: "Tabs", id: "tabs", page: TabsPage },
  { name: "Textarea", id: "textarea", page: TextareaPage },
  { name: "Toast", id: "toast", page: ToastPage },
  { name: "Toggle", id: "toggle", page: TogglePage },
  { name: "Toggle Group", id: "toggle-group", page: ToggleGroupPage },
  { name: "Tooltip", id: "tooltip", page: TooltipPage },
];

function ComponentNotImplemented({ componentName }: { componentName: string }) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center h-64 space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          ease: "easeOut",
        },
      }}
    >
      <motion.div
        className="text-6xl"
        initial={{ scale: 0 }}
        animate={{
          scale: 1,
          transition: {
            delay: 0.2,
            duration: 0.4,
            type: "spring",
            stiffness: 200,
          },
        }}
      >
        🚧
      </motion.div>
      <motion.h2
        className="text-2xl font-bold"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 0.3,
            duration: 0.3,
          },
        }}
      >
        Componente {componentName}
      </motion.h2>
      <motion.p
        className="text-muted-foreground text-center max-w-md"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 0.4,
            duration: 0.3,
          },
        }}
      >
        A página específica para este componente ainda não foi implementada. Em
        breve teremos exemplos detalhados e casos de uso.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.5,
            duration: 0.3,
          },
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button variant="outline">Contribuir com Exemplos</Button>
      </motion.div>
    </motion.div>
  );
}

export function Dashboard() {
  const [selectedComponent, setSelectedComponent] = useState<string>("home");

  React.useEffect(() => {
    document.body.classList.add("smooth-scroll");
    return () => document.body.classList.remove("smooth-scroll");
  }, []);

  const currentComponent = components.find(
    (comp) => comp.id === selectedComponent
  );
  const CurrentPage = currentComponent?.page;

  return (
    <motion.div
      className="min-h-screen flex w-full"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.5,
        },
      }}
    >
      <motion.div
        initial={{ x: -280, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          transition: {
            duration: 0.6,
            ease: "easeOut",
          },
        }}
        className="fixed left-0 top-0 h-screen w-64 border-r bg-background z-20 flex flex-col"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.3,
              duration: 0.4,
            },
          }}
        >
          <div className="border-b p-4">
            <div className="flex items-center justify-between">
              <motion.h2
                className="text-lg font-semibold"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    delay: 0.5,
                    duration: 0.3,
                  },
                }}
              >
                gltzUI Components
              </motion.h2>
              <motion.div
                whileHover={{ scale: 1.1, rotate: 45 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <ThemeToggle />
              </motion.div>
            </div>
            <motion.p
              className="text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  delay: 0.6,
                  duration: 0.3,
                },
              }}
            >
              {components.length} componentes shadcn/ui
            </motion.p>
          </div>
        </motion.div>

        <div className="flex-1 overflow-y-auto p-4 sidebar-scroll smooth-scroll scroll-area-hover">
          <div>
            {components.map((component, index) => (
              <div key={component.id}>
                <motion.button
                  initial={{ scale: 1 }}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedComponent(component.id)}
                  className={cn(
                    "w-full text-left px-3 py-2 rounded-md text-sm transition-colors",
                    "hover:bg-accent hover:text-accent-foreground",
                    selectedComponent === component.id
                      ? "bg-accent text-accent-foreground font-medium"
                      : "text-muted-foreground"
                  )}
                >
                  <motion.div
                    className="flex items-center justify-between"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      transition: {
                        delay: index * 0.03,
                        duration: 0.3,
                      },
                    }}
                  >
                    <span>{component.name}</span>
                    <motion.div
                      className={cn(
                        "w-2 h-2 rounded-full",
                        selectedComponent === component.id
                          ? "bg-green-400"
                          : "bg-green-500"
                      )}
                      initial={{ scale: 0 }}
                      animate={{
                        scale: 1,
                        transition: {
                          delay: index * 0.03 + 0.1,
                          duration: 0.2,
                          type: "spring",
                          stiffness: 300,
                        },
                      }}
                      whileHover={{
                        scale: 1.3,
                        transition: { duration: 0.1 },
                      }}
                      style={{
                        boxShadow:
                          selectedComponent === component.id
                            ? "0 0 8px rgba(34, 197, 94, 0.6)"
                            : "none",
                      }}
                    />
                  </motion.div>
                </motion.button>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <main className="flex-1 flex flex-col ml-64">
        <motion.header
          className="border-b p-4 flex items-center gap-4 sticky top-0 bg-background z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
            },
          }}
          key={selectedComponent}
        >
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.2,
                duration: 0.4,
              },
            }}
          >
            <motion.h1
              className="text-2xl font-bold"
              key={currentComponent?.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.3,
                },
              }}
            >
              {currentComponent?.name || "Componente"}
            </motion.h1>
            <motion.p
              className="text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  delay: 0.3,
                  duration: 0.3,
                },
              }}
            >
              Explore exemplos e implementações dos componentes shadcn/ui
            </motion.p>
          </motion.div>
        </motion.header>

        <motion.div
          className="flex-1 p-6 overflow-auto main-content-scroll smooth-scroll fade-scrollbar"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.3 },
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedComponent}
              initial={{
                opacity: 0,
                x: 50,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
                transition: {
                  duration: 0.4,
                  ease: "easeOut",
                },
              }}
              exit={{
                opacity: 0,
                x: -50,
                scale: 0.95,
                transition: {
                  duration: 0.3,
                  ease: "easeIn",
                },
              }}
              className="w-full h-full"
            >
              {CurrentPage ? (
                <CurrentPage />
              ) : (
                <ComponentNotImplemented
                  componentName={currentComponent?.name || ""}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </main>
    </motion.div>
  );
}
