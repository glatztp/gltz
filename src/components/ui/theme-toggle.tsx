import * as React from "react";
import {
  Moon,
  Sun,
  Monitor,
  Lightning,
  Fire,
  Snowflake,
  Coffee,
  Planet,
} from "phosphor-react";
import { Button } from "./button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "./overlays/dropdown-menu";
import { useTheme } from "../providers/theme-provider";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Alternar tema</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>Temas Básicos</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Sun className="mr-2 h-4 w-4" />
          <span>Claro</span>
          {theme === "light" && <span className="ml-auto text-xs">✓</span>}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Moon className="mr-2 h-4 w-4" />
          <span>Escuro</span>
          {theme === "dark" && <span className="ml-auto text-xs">✓</span>}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <Monitor className="mr-2 h-4 w-4" />
          <span>Sistema</span>
          {theme === "system" && <span className="ml-auto text-xs">✓</span>}
        </DropdownMenuItem>

        <DropdownMenuSeparator />
        <DropdownMenuLabel>Temas Especiais</DropdownMenuLabel>

        <DropdownMenuItem onClick={() => setTheme("neon")}>
          <Lightning className="mr-2 h-4 w-4" />
          <span>Neon Cyber</span>
          {theme === "neon" && <span className="ml-auto text-xs">✓</span>}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("sunset")}>
          <Fire className="mr-2 h-4 w-4" />
          <span>Sunset Paradise</span>
          {theme === "sunset" && <span className="ml-auto text-xs">✓</span>}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("ocean")}>
          <Snowflake className="mr-2 h-4 w-4" />
          <span>Ocean Deep</span>
          {theme === "ocean" && <span className="ml-auto text-xs">✓</span>}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("coffee")}>
          <Coffee className="mr-2 h-4 w-4" />
          <span>Coffee House</span>
          {theme === "coffee" && <span className="ml-auto text-xs">✓</span>}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("galaxy")}>
          <Planet className="mr-2 h-4 w-4" />
          <span>Galaxy Explorer</span>
          {theme === "galaxy" && <span className="ml-auto text-xs">✓</span>}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
