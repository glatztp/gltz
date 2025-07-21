import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "../ui";
import { Badge } from "../ui";
import { ThemeToggle } from "../ui";
import { cn } from "../../lib/utils";
import {
  Menu,
  X,
  BookOpen,
  Code,
  Palette,
  Settings,
  Github,
  ExternalLink,
  ChevronDown,
  Component,
} from "lucide-react";

interface NavigationHeaderProps {
  onNavigate: (section: string) => void;
  currentSection: string;
  onToggleSidebar: () => void;
  sidebarOpen: boolean;
}

export function NavigationHeader({
  onNavigate,
  currentSection,
  onToggleSidebar,
  sidebarOpen,
}: NavigationHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationItems = [
    {
      id: "home",
      label: "Home",
      icon: <Component className="h-4 w-4" />,
      description: "Página inicial",
    },
    {
      id: "docs",
      label: "Documentação",
      icon: <BookOpen className="h-4 w-4" />,
      description: "Guias e API",
    },
    {
      id: "components",
      label: "Componentes",
      icon: <Code className="h-4 w-4" />,
      description: "Biblioteca de componentes",
    },
    {
      id: "themes",
      label: "Temas",
      icon: <Palette className="h-4 w-4" />,
      description: "Personalização visual",
    },
    {
      id: "playground",
      label: "Playground",
      icon: <Settings className="h-4 w-4" />,
      description: "Teste os componentes",
    },
  ];

  const handleItemClick = (item: any) => {
    if (item.id === "components") {
      // Sempre navega para a página de componentes
      onNavigate(item.id);
      // Se já estiver na seção, toggle a sidebar
      if (currentSection === "components") {
        onToggleSidebar();
      }
    } else if (item.action) {
      item.action();
    } else {
      onNavigate(item.id);
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Main Header */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-xl"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => onNavigate("home")}
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-white font-bold text-sm">G</span>
              </div>
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  gltzUI
                </span>
                <Badge variant="secondary" className="ml-2 text-xs">
                  v2.0
                </Badge>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <Button
                    variant={currentSection === item.id ? "default" : "ghost"}
                    size="sm"
                    onClick={() => handleItemClick(item)}
                    className={cn(
                      "relative group transition-all duration-200",
                      currentSection === item.id
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-accent"
                    )}
                  >
                    {item.icon}
                    <span className="ml-2">{item.label}</span>
                    {item.id === "components" &&
                      currentSection === "components" &&
                      sidebarOpen && (
                        <ChevronDown className="h-3 w-3 ml-1 rotate-180 transition-transform" />
                      )}
                    {item.id === "components" &&
                      currentSection === "components" &&
                      !sidebarOpen && (
                        <ChevronDown className="h-3 w-3 ml-1 transition-transform" />
                      )}
                  </Button>
                </motion.div>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                className="hidden md:flex"
                onClick={() =>
                  window.open("https://github.com/glatztp/gltz", "_blank")
                }
              >
                <Github className="h-4 w-4 mr-2" />
                GitHub
                <ExternalLink className="h-3 w-3 ml-1" />
              </Button>

              <ThemeToggle />

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-b bg-background/95 backdrop-blur-xl sticky top-16 z-40"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="space-y-2">
                {navigationItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Button
                      variant={currentSection === item.id ? "default" : "ghost"}
                      size="sm"
                      onClick={() => handleItemClick(item)}
                      className="w-full justify-start gap-3"
                    >
                      {item.icon}
                      <div className="text-left">
                        <div className="font-medium">{item.label}</div>
                        <div className="text-xs text-muted-foreground">
                          {item.description}
                        </div>
                      </div>
                    </Button>
                  </motion.div>
                ))}

                <div className="pt-2 border-t">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start gap-3"
                    onClick={() =>
                      window.open("https://github.com/glatztp/gltz", "_blank")
                    }
                  >
                    <Github className="h-4 w-4" />
                    <div className="text-left">
                      <div className="font-medium">GitHub</div>
                      <div className="text-xs text-muted-foreground">
                        Código fonte e issues
                      </div>
                    </div>
                    <ExternalLink className="h-3 w-3 ml-auto" />
                  </Button>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
