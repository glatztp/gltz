import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui";
import { Badge } from "../ui";
import { Input } from "../ui";
import { cn } from "../../lib/utils";
import {
  Search,
  X,
  ChevronRight,
  ChevronDown,
  Layers,
  Mouse,
  Type,
  Grid,
  Bell,
  Layout,
  BarChart3,
  Palette,
  FileText,
  Settings,
  Zap,
  Star,
} from "lucide-react";
import {
  Sidebar,
  SidebarSimple,
  Lightning,
  Star as StarPhosphor,
  Pencil,
  Selection,
  Compass,
  ChatCircle,
  Warning,
  Layout as LayoutPhosphor,
  ChartBar,
  ToggleLeft,
} from "phosphor-react";

interface ComponentsSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectComponent: (componentId: string) => void;
  selectedComponent: string;
  expandCategory?: string;
  onToggle?: () => void;
}

export function ComponentsSidebar({
  isOpen,
  onClose,
  onSelectComponent,
  selectedComponent,
  expandCategory,
  onToggle,
}: ComponentsSidebarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCategories, setExpandedCategories] = useState<string[]>([
    "forms",
    "layout",
    "feedback",
  ]);

  // Expandir categoria automaticamente quando expandCategory mudar
  React.useEffect(() => {
    if (expandCategory && !expandedCategories.includes(expandCategory)) {
      setExpandedCategories((prev) => [...prev, expandCategory]);
    }
  }, [expandCategory]);

  type ComponentItem = {
    id: string;
    name: string;
    new: boolean;
    status: string;
    popularity?: number;
  };

  const componentCategories: {
    id: string;
    name: string;
    icon: React.ReactNode;
    description: string;
    gradient?: string;
    components: ComponentItem[];
  }[] = [
    {
      id: "popular",
      name: "Mais Populares",
      icon: <Star className="h-4 w-4" />,
      description: "Os mais usados",
      gradient: "from-yellow-500 to-orange-500",
      components: [
        {
          id: "button",
          name: "Button",
          new: false,
          popularity: 95,
          status: "stable",
        },
        {
          id: "input",
          name: "Input",
          new: false,
          popularity: 92,
          status: "stable",
        },
        {
          id: "card",
          name: "Card",
          new: false,
          popularity: 89,
          status: "stable",
        },
        {
          id: "dialog",
          name: "Dialog",
          new: false,
          popularity: 87,
          status: "stable",
        },
        {
          id: "alert",
          name: "Alert",
          new: false,
          popularity: 85,
          status: "stable",
        },
      ],
    },
    {
      id: "forms",
      name: " Formulários",
      icon: <Type className="h-4 w-4" />,
      description: "Inputs e controles",
      gradient: "from-blue-500 to-cyan-500",
      components: [
        { id: "button", name: "Button", new: false, status: "stable" },
        { id: "input", name: "Input", new: false, status: "stable" },
        { id: "textarea", name: "Textarea", new: false, status: "stable" },
        { id: "checkbox", name: "Checkbox", new: false, status: "stable" },
        {
          id: "radio-group",
          name: "Radio Group",
          new: false,
          status: "stable",
        },
        { id: "switch", name: "Switch", new: false, status: "stable" },
        { id: "label", name: "Label", new: false, status: "stable" },
        { id: "slider", name: "Slider", new: false, status: "stable" },
        { id: "date-picker", name: "Date Picker", new: true, status: "stable" },
        { id: "calendar", name: "Calendar", new: false, status: "stable" },
        { id: "input-otp", name: "Input OTP", new: true, status: "beta" },
      ],
    },
    {
      id: "selects",
      name: " Seleção",
      icon: <Mouse className="h-4 w-4" />,
      description: "Dropdowns e seletores",
      gradient: "from-purple-500 to-pink-500",
      components: [
        { id: "select", name: "Select", new: false, status: "stable" },
        { id: "combobox", name: "Combobox", new: false, status: "stable" },
        { id: "multicombo", name: "MultiCombo", new: true, status: "beta" },
        { id: "command", name: "Command", new: false, status: "stable" },
      ],
    },
    {
      id: "navigation",
      name: " Navegação",
      icon: <Grid className="h-4 w-4" />,
      description: "Menus e navegação",
      gradient: "from-green-500 to-emerald-500",
      components: [
        {
          id: "navigation-menu",
          name: "Navigation Menu",
          new: false,
          status: "stable",
        },
        { id: "menubar", name: "Menubar", new: false, status: "stable" },
        { id: "tabs", name: "Tabs", new: false, status: "stable" },
        { id: "pagination", name: "Pagination", new: false, status: "stable" },
      ],
    },
    {
      id: "overlays",
      name: " Overlays",
      icon: <Layers className="h-4 w-4" />,
      description: "Modais e popovers",
      gradient: "from-red-500 to-rose-500",
      components: [
        { id: "dialog", name: "Dialog", new: false, status: "stable" },
        {
          id: "alert-dialog",
          name: "Alert Dialog",
          new: false,
          status: "stable",
        },
        { id: "popover", name: "Popover", new: false, status: "stable" },
        { id: "sheet", name: "Sheet", new: false, status: "stable" },
        { id: "drawer", name: "Drawer", new: true, status: "beta" },
        { id: "tooltip", name: "Tooltip", new: false, status: "stable" },
        { id: "hover-card", name: "Hover Card", new: false, status: "stable" },
        {
          id: "context-menu",
          name: "Context Menu",
          new: false,
          status: "stable",
        },
        {
          id: "dropdown-menu",
          name: "Dropdown Menu",
          new: false,
          status: "stable",
        },
      ],
    },
    {
      id: "feedback",
      name: " Feedback",
      icon: <Bell className="h-4 w-4" />,
      description: "Notificações e alertas",
      gradient: "from-amber-500 to-yellow-500",
      components: [
        { id: "alert", name: "Alert", new: false, status: "stable" },
        { id: "sonner", name: "Sonner", new: true, status: "stable" },
        { id: "progress", name: "Progress", new: false, status: "stable" },
        { id: "skeleton", name: "Skeleton", new: false, status: "stable" },
        { id: "toast", name: "Toast", new: false, status: "stable" },
      ],
    },
    {
      id: "layout",
      name: " Layout",
      icon: <Layout className="h-4 w-4" />,
      description: "Estrutura e organização",
      gradient: "from-indigo-500 to-purple-500",
      components: [
        { id: "card", name: "Card", new: false, status: "stable" },
        { id: "separator", name: "Separator", new: false, status: "stable" },
        {
          id: "scroll-area",
          name: "Scroll Area",
          new: false,
          status: "stable",
        },
        { id: "resizable", name: "Resizable", new: false, status: "stable" },
        {
          id: "aspect-ratio",
          name: "Aspect Ratio",
          new: false,
          status: "stable",
        },
        {
          id: "collapsible",
          name: "Collapsible",
          new: false,
          status: "stable",
        },
        { id: "accordion", name: "Accordion", new: false, status: "stable" },
        { id: "avatar", name: "Avatar", new: false, status: "stable" },
        { id: "badge", name: "Badge", new: false, status: "stable" },
      ],
    },
    {
      id: "data",
      name: " Dados",
      icon: <BarChart3 className="h-4 w-4" />,
      description: "Exibição de dados",
      gradient: "from-teal-500 to-cyan-500",
      components: [
        { id: "data-table", name: "Data Table", new: false, status: "stable" },
        { id: "avatar", name: "Avatar", new: false, status: "stable" },
        { id: "badge", name: "Badge", new: false, status: "stable" },
      ],
    },
    {
      id: "misc",
      name: "Diversos",
      icon: <Settings className="h-4 w-4" />,
      description: "Utilitários e outros",
      components: [
        { id: "toggle", name: "Toggle", new: false, status: "stable" },
        { id: "toggle-group", name: "Toggle Group", new: false, status: "stable" },
        { id: "theme-toggle", name: "Theme Toggle", new: false, status: "stable" },
      ],
    },
  ];

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const filteredCategories = componentCategories
    .map((category) => ({
      ...category,
      components: category.components.filter((component) =>
        component.name.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((category) => category.components.length > 0);

  const totalComponents = componentCategories.reduce(
    (total, category) => total + category.components.length,
    0
  );

  const newComponents = componentCategories.reduce(
    (total, category) =>
      total + category.components.filter((c) => c.new).length,
    0
  );

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 lg:hidden"
              onClick={onClose}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: -320, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -320, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-72 bg-background border-r z-40 flex flex-col"
            >
              <div className="p-4 border-b bg-gradient-to-r from-primary/5 to-secondary/5">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-lg font-semibold flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                        <Palette className="h-3 w-3 text-white" />
                      </div>
                      Componentes
                     
                    </h2>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-muted-foreground">
                          {totalComponents} total
                        </span>
                      </div>
                      {newComponents > 0 && (
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                          <span className="text-sm text-muted-foreground">
                            {newComponents} novos
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={onClose}
                      className="opacity-70 hover:opacity-100 transition-all hover:bg-destructive/10 hover:text-destructive"
                      title="Fechar sidebar (Esc)"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Buscar componentes... (⌘K)"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-background/50 backdrop-blur-sm"
                  />
                  {searchQuery && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSearchQuery("")}
                      className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  )}
                </div>
              </div>

              {/* Categories */}
              <div className="flex-1 overflow-y-auto">
                <div className="p-2">
                  {filteredCategories.map((category, categoryIndex) => (
                    <motion.div
                      key={category.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: categoryIndex * 0.05 }}
                      className="mb-2"
                    >
                      <Button
                        variant="ghost"
                        onClick={() => toggleCategory(category.id)}
                        className="w-full justify-start gap-2 p-3 h-auto group hover:bg-gradient-to-r hover:from-primary/5 hover:to-secondary/5 transition-all duration-200"
                      >
                        <div className="flex items-center gap-3 flex-1">
                          {/* Gradient indicator */}
                          <div
                            className={cn(
                              "w-1 h-8 rounded-full bg-gradient-to-b",
                              category.gradient || "from-gray-400 to-gray-600"
                            )}
                          ></div>

                          <div className="text-primary group-hover:scale-110 transition-transform duration-200">
                            {category.icon}
                          </div>

                          <div className="text-left flex-1">
                            <div className="font-medium flex items-center gap-2">
                              {category.name}
                              {category.id === "popular" && (
                                <span className="text-xs">🔥</span>
                              )}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {category.description}
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <Badge
                              variant="secondary"
                              className={cn(
                                "text-xs",
                                category.id === "popular" &&
                                  "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                              )}
                            >
                              {category.components.length}
                            </Badge>
                            {expandedCategories.includes(category.id) ? (
                              <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform duration-200" />
                            ) : (
                              <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform duration-200" />
                            )}
                          </div>
                        </div>
                      </Button>

                      <AnimatePresence>
                        {expandedCategories.includes(category.id) && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="ml-6 mt-1 space-y-1">
                              {category.components.map(
                                (component, componentIndex) => (
                                  <motion.div
                                    key={component.id}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                      delay: componentIndex * 0.03,
                                    }}
                                  >
                                    <Button
                                      variant={
                                        selectedComponent === component.id
                                          ? "default"
                                          : "ghost"
                                      }
                                      size="sm"
                                      onClick={() => {
                                        onSelectComponent(component.id);
                                        // NÃO fechar a sidebar automaticamente
                                      }}
                                      className={cn(
                                        "w-full justify-start gap-2 relative group transition-all duration-200 h-auto p-3",
                                        selectedComponent === component.id
                                          ? "bg-primary text-primary-foreground shadow-md"
                                          : "hover:bg-accent hover:shadow-sm"
                                      )}
                                    >
                                      <div className="flex items-center gap-2 flex-1">
                                        {/* Status indicator */}
                                        <div
                                          className={cn(
                                            "w-2 h-2 rounded-full",
                                            component.status === "stable" &&
                                              "bg-green-500",
                                            component.status === "beta" &&
                                              "bg-yellow-500",
                                            component.status ===
                                              "coming-soon" && "bg-purple-500"
                                          )}
                                        ></div>

                                        <div className="flex-1 text-left">
                                          <div className="flex items-center gap-2">
                                            <span className="font-medium text-sm">
                                              {component.name}
                                            </span>
                                            {component.new && (
                                              <Badge
                                                variant="default"
                                                className="text-xs bg-green-500 hover:bg-green-600 animate-pulse"
                                              >
                                                Novo
                                              </Badge>
                                            )}
                                          </div>

                                          {/* Popularity bar for popular category */}
                                          {category.id === "popular" &&
                                            component.popularity && (
                                              <div className="mt-1">
                                                <div className="flex items-center gap-2">
                                                  <div className="flex-1 bg-muted rounded-full h-1.5">
                                                    <div
                                                      className="bg-gradient-to-r from-yellow-400 to-orange-500 h-full rounded-full transition-all duration-500"
                                                      style={{
                                                        width: `${component.popularity}%`,
                                                      }}
                                                    ></div>
                                                  </div>
                                                  <span className="text-xs text-muted-foreground">
                                                    {component.popularity}%
                                                  </span>
                                                </div>
                                              </div>
                                            )}
                                        </div>

                                        {/* Status badge */}
                                        {component.status !== "stable" && (
                                          <Badge
                                            variant="outline"
                                            className={cn(
                                              "text-xs",
                                              component.status === "beta" &&
                                                "border-yellow-500 text-yellow-600",
                                              component.status ===
                                                "coming-soon" &&
                                                "border-purple-500 text-purple-600"
                                            )}
                                          >
                                            {component.status === "beta" &&
                                              "Beta"}
                                            {component.status ===
                                              "coming-soon" && "Em breve"}
                                          </Badge>
                                        )}
                                      </div>
                                    </Button>
                                  </motion.div>
                                )
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="p-4 border-t bg-muted/30">
                <div className="text-center">
                  <Button variant="outline" size="sm" className="w-full">
                    <FileText className="h-4 w-4 mr-2" />
                    Ver Documentação
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      {onToggle && (
        <button
          onClick={onToggle}
          className={`fixed top-20 z-50 bg-background border border-border rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 ${
            isOpen ? "left-56" : "left-6"
          }`}
          title={isOpen ? "Fechar Sidebar" : "Abrir Sidebar"}
        >
          {isOpen ? (
            <SidebarSimple className="h-5 w-5" weight="bold" />
          ) : (
            <Sidebar className="h-5 w-5" weight="bold" />
          )}
        </button>
      )}
    </>
  );
}
