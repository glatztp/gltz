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
} from "lucide-react";

interface ComponentsSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectComponent: (componentId: string) => void;
  selectedComponent: string;
  expandCategory?: string;
}

export function ComponentsSidebar({
  isOpen,
  onClose,
  onSelectComponent,
  selectedComponent,
  expandCategory,
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

  const componentCategories = [
    {
      id: "forms",
      name: "Formulários",
      icon: <Type className="h-4 w-4" />,
      description: "Inputs, validação e controles",
      components: [
        { id: "button", name: "Button", new: false },
        { id: "input", name: "Input", new: false },
        { id: "textarea", name: "Textarea", new: false },
        { id: "checkbox", name: "Checkbox", new: false },
        { id: "radio-group", name: "Radio Group", new: false },
        { id: "switch", name: "Switch", new: false },
        { id: "label", name: "Label", new: false },
        { id: "slider", name: "Slider", new: false },
        { id: "date-picker", name: "Date Picker", new: true },
        { id: "calendar", name: "Calendar", new: false },
        { id: "input-otp", name: "Input OTP", new: true },
      ],
    },
    {
      id: "selects",
      name: "Seleção",
      icon: <Mouse className="h-4 w-4" />,
      description: "Dropdowns e seletores",
      components: [
        { id: "select", name: "Select", new: false },
        { id: "combobox", name: "Combobox", new: false },
        { id: "multicombo", name: "MultiCombo", new: true },
        { id: "command", name: "Command", new: false },
      ],
    },
    {
      id: "navigation",
      name: "Navegação",
      icon: <Grid className="h-4 w-4" />,
      description: "Menus e navegação",
      components: [
        { id: "navigation-menu", name: "Navigation Menu", new: false },
        { id: "menubar", name: "Menubar", new: false },
        { id: "tabs", name: "Tabs", new: false },
        { id: "pagination", name: "Pagination", new: false },
      ],
    },
    {
      id: "overlays",
      name: "Overlays",
      icon: <Layers className="h-4 w-4" />,
      description: "Modais e popovers",
      components: [
        { id: "dialog", name: "Dialog", new: false },
        { id: "alert-dialog", name: "Alert Dialog", new: false },
        { id: "popover", name: "Popover", new: false },
        { id: "sheet", name: "Sheet", new: false },
        { id: "drawer", name: "Drawer", new: true },
        { id: "tooltip", name: "Tooltip", new: false },
        { id: "hover-card", name: "Hover Card", new: false },
        { id: "context-menu", name: "Context Menu", new: false },
        { id: "dropdown-menu", name: "Dropdown Menu", new: false },
      ],
    },
    {
      id: "feedback",
      name: "Feedback",
      icon: <Bell className="h-4 w-4" />,
      description: "Notificações e alertas",
      components: [
        { id: "alert", name: "Alert", new: false },
        { id: "sonner", name: "Sonner", new: true },
        { id: "progress", name: "Progress", new: false },
        { id: "skeleton", name: "Skeleton", new: false },
      ],
    },
    {
      id: "layout",
      name: "Layout",
      icon: <Layout className="h-4 w-4" />,
      description: "Estrutura e organização",
      components: [
        { id: "card", name: "Card", new: false },
        { id: "separator", name: "Separator", new: false },
        { id: "scroll-area", name: "Scroll Area", new: false },
        { id: "resizable", name: "Resizable", new: false },
        { id: "aspect-ratio", name: "Aspect Ratio", new: false },
        { id: "collapsible", name: "Collapsible", new: false },
        { id: "accordion", name: "Accordion", new: false },
      ],
    },
    {
      id: "data",
      name: "Dados",
      icon: <BarChart3 className="h-4 w-4" />,
      description: "Exibição de dados",
      components: [
        { id: "data-table", name: "Data Table", new: false },
        { id: "avatar", name: "Avatar", new: false },
        { id: "badge", name: "Badge", new: false },
      ],
    },
    {
      id: "misc",
      name: "Diversos",
      icon: <Settings className="h-4 w-4" />,
      description: "Utilitários e outros",
      components: [
        { id: "toggle", name: "Toggle", new: false },
        { id: "toggle-group", name: "Toggle Group", new: false },
        { id: "theme-toggle", name: "Theme Toggle", new: false },
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
            <div className="p-4 border-b bg-muted/30">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-lg font-semibold flex items-center gap-2">
                    <Palette className="h-5 w-5 text-primary" />
                    Componentes
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {totalComponents} componentes • {newComponents} novos
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={onClose}
                    className="opacity-70 hover:opacity-100 transition-opacity"
                    title="Fechar sidebar"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar componentes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
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
                      className="w-full justify-start gap-2 p-3 h-auto group"
                    >
                      <div className="flex items-center gap-2 flex-1">
                        <div className="text-primary group-hover:scale-110 transition-transform">
                          {category.icon}
                        </div>
                        <div className="text-left flex-1">
                          <div className="font-medium">{category.name}</div>
                          <div className="text-xs text-muted-foreground">
                            {category.description}
                          </div>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {category.components.length}
                        </Badge>
                        {expandedCategories.includes(category.id) ? (
                          <ChevronDown className="h-4 w-4 text-muted-foreground" />
                        ) : (
                          <ChevronRight className="h-4 w-4 text-muted-foreground" />
                        )}
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
                                  transition={{ delay: componentIndex * 0.03 }}
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
                                      "w-full justify-start gap-2 relative group",
                                      selectedComponent === component.id
                                        ? "bg-primary text-primary-foreground"
                                        : "hover:bg-accent"
                                    )}
                                  >
                                    <span className="flex-1 text-left">
                                      {component.name}
                                    </span>
                                    {component.new && (
                                      <Badge
                                        variant="default"
                                        className="text-xs bg-green-500 hover:bg-green-600"
                                      >
                                        <Zap className="h-3 w-3 mr-1" />
                                        Novo
                                      </Badge>
                                    )}
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
  );
}
