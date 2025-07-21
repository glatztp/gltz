import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

type ColorScheme = "blue" | "emerald" | "violet" | "rose" | "orange" | "cyan";

interface ThemeContextType {
  theme: Theme;
  colorScheme: ColorScheme;
  setTheme: (theme: Theme) => void;
  setColorScheme: (scheme: ColorScheme) => void;
  actualTheme: "light" | "dark"; // Tema real aplicado (resolve "system")
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("gltzui-theme") as Theme) || "system";
    }
    return "system";
  });

  const [colorScheme, setColorScheme] = useState<ColorScheme>(() => {
    if (typeof window !== "undefined") {
      return (
        (localStorage.getItem("gltzui-color-scheme") as ColorScheme) || "blue"
      );
    }
    return "blue";
  });

  const [actualTheme, setActualTheme] = useState<"light" | "dark">("light");

  // Função para aplicar as variáveis CSS
  const applyTheme = (resolvedTheme: "light" | "dark", scheme: ColorScheme) => {
    const root = document.documentElement;

    // Aplicar classe do tema
    root.classList.remove("light", "dark");
    root.classList.add(resolvedTheme);

    // Aplicar esquema de cores baseado no esquema selecionado
    const schemeColors = getSchemeColors(scheme);

    // Aplicar cores primárias do esquema selecionado
    root.style.setProperty("--primary", schemeColors.primary);
    root.style.setProperty(
      "--primary-foreground",
      schemeColors.primaryForeground
    );
    root.style.setProperty("--ring", schemeColors.primary);

    // Aplicar cores específicas do tema (light/dark) mantendo as cores do CSS original
    if (resolvedTheme === "dark") {
      // Tema escuro - usando as cores do globals.css
      root.style.setProperty("--background", "240 15% 6%");
      root.style.setProperty("--foreground", "0 0% 95%");
      root.style.setProperty("--muted", "240 15% 12%");
      root.style.setProperty("--muted-foreground", "240 10% 60%");
      root.style.setProperty("--popover", "240 15% 8%");
      root.style.setProperty("--popover-foreground", "0 0% 95%");
      root.style.setProperty("--card", "240 15% 8%");
      root.style.setProperty("--card-foreground", "0 0% 95%");
      root.style.setProperty("--border", "240 15% 18%");
      root.style.setProperty("--input", "240 15% 18%");
      root.style.setProperty("--secondary", "240 15% 12%");
      root.style.setProperty("--secondary-foreground", "0 0% 95%");
      root.style.setProperty("--accent", "240 15% 12%");
      root.style.setProperty("--accent-foreground", schemeColors.primary);
    } else {
      // Tema claro - usando as cores do globals.css
      root.style.setProperty("--background", "0 0% 99%");
      root.style.setProperty("--foreground", "240 15% 9%");
      root.style.setProperty("--muted", "220 14% 96%");
      root.style.setProperty("--muted-foreground", "240 10% 45%");
      root.style.setProperty("--popover", "0 0% 100%");
      root.style.setProperty("--popover-foreground", "240 15% 9%");
      root.style.setProperty("--card", "0 0% 100%");
      root.style.setProperty("--card-foreground", "240 15% 9%");
      root.style.setProperty("--border", "220 13% 91%");
      root.style.setProperty("--input", "220 13% 91%");
      root.style.setProperty("--secondary", "220 14% 96%");
      root.style.setProperty("--secondary-foreground", "240 15% 9%");
      root.style.setProperty("--accent", "217 91% 95%");
      root.style.setProperty("--accent-foreground", schemeColors.primary);
    }
  };

  // Função para obter cores do esquema selecionado em formato HSL
  const getSchemeColors = (scheme: ColorScheme) => {
    const schemes = {
      blue: {
        primary: "217 91% 60%",
        primaryForeground: "0 0% 100%",
      },
      emerald: {
        primary: "160 84% 39%",
        primaryForeground: "0 0% 100%",
      },
      violet: {
        primary: "262 83% 58%",
        primaryForeground: "0 0% 100%",
      },
      rose: {
        primary: "346 77% 49%",
        primaryForeground: "0 0% 100%",
      },
      orange: {
        primary: "20 91% 48%",
        primaryForeground: "0 0% 100%",
      },
      cyan: {
        primary: "189 85% 43%",
        primaryForeground: "0 0% 100%",
      },
    };

    return schemes[scheme];
  };

  // Resolver tema baseado na preferência do sistema
  const resolveTheme = (theme: Theme): "light" | "dark" => {
    if (theme === "system") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return theme;
  };

  // Efeito para aplicar tema
  useEffect(() => {
    if (typeof window === "undefined") return;

    const resolved = resolveTheme(theme);
    setActualTheme(resolved);
    applyTheme(resolved, colorScheme);

    // Salvar no localStorage
    localStorage.setItem("gltzui-theme", theme);
  }, [theme, colorScheme]);

  // Efeito para escutar mudanças na preferência do sistema
  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => {
      if (theme === "system") {
        const resolved = resolveTheme(theme);
        setActualTheme(resolved);
        applyTheme(resolved, colorScheme);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme, colorScheme]);

  // Efeito para aplicar esquema de cores
  useEffect(() => {
    if (typeof window === "undefined") return;

    localStorage.setItem("gltzui-color-scheme", colorScheme);
    applyTheme(actualTheme, colorScheme);
  }, [colorScheme, actualTheme]);

  const handleSetTheme = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  const handleSetColorScheme = (newScheme: ColorScheme) => {
    setColorScheme(newScheme);
  };

  const value: ThemeContextType = {
    theme,
    colorScheme,
    setTheme: handleSetTheme,
    setColorScheme: handleSetColorScheme,
    actualTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

// Hook para usar apenas o tema atual
export function useCurrentTheme() {
  const { actualTheme } = useTheme();
  return actualTheme;
}

// Hook para verificar se está no modo escuro
export function useIsDarkMode() {
  const { actualTheme } = useTheme();
  return actualTheme === "dark";
}
