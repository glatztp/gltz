import React, { createContext, useContext, useEffect, useState } from "react";

type Theme =
  | "light"
  | "dark"
  | "system"
  | "neon"
  | "sunset"
  | "ocean"
  | "coffee"
  | "galaxy";
type ColorScheme = "blue" | "emerald" | "violet" | "rose" | "orange" | "cyan";

interface ThemeContextType {
  theme: Theme;
  colorScheme: ColorScheme;
  setTheme: (theme: Theme) => void;
  setColorScheme: (scheme: ColorScheme) => void;
  actualTheme:
    | "light"
    | "dark"
    | "neon"
    | "sunset"
    | "ocean"
    | "coffee"
    | "galaxy";
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

  const [actualTheme, setActualTheme] = useState<
    "light" | "dark" | "neon" | "sunset" | "ocean" | "coffee" | "galaxy"
  >("light");

  const getThemeColors = (
    themeType:
      | "light"
      | "dark"
      | "neon"
      | "sunset"
      | "ocean"
      | "coffee"
      | "galaxy"
  ) => {
    const themes = {
      light: {
        background: "0 0% 99%",
        foreground: "240 15% 9%",
        primary: "217 91% 60%",
        "primary-foreground": "0 0% 100%",
        secondary: "220 14% 96%",
        "secondary-foreground": "240 15% 9%",
        muted: "220 14% 96%",
        "muted-foreground": "240 10% 45%",
        accent: "217 91% 95%",
        "accent-foreground": "240 15% 9%",
        border: "220 13% 91%",
        input: "220 13% 91%",
        ring: "217 91% 60%",
        card: "0 0% 100%",
        "card-foreground": "240 15% 9%",
        popover: "0 0% 100%",
        "popover-foreground": "240 15% 9%",
        destructive: "0 84% 60%",
        "destructive-foreground": "210 40% 98%",
      },
      dark: {
        background: "240 15% 6%",
        foreground: "0 0% 95%",
        primary: "217 91% 65%",
        "primary-foreground": "0 0% 100%",
        secondary: "240 15% 12%",
        "secondary-foreground": "0 0% 95%",
        muted: "240 15% 12%",
        "muted-foreground": "240 10% 60%",
        accent: "240 15% 12%",
        "accent-foreground": "0 0% 95%",
        border: "240 15% 18%",
        input: "240 15% 18%",
        ring: "217 91% 65%",
        card: "240 15% 8%",
        "card-foreground": "0 0% 95%",
        popover: "240 15% 8%",
        "popover-foreground": "0 0% 95%",
        destructive: "0 84% 60%",
        "destructive-foreground": "210 40% 98%",
      },
      neon: {
        background: "240 15% 3%",
        foreground: "0 100% 100%",
        primary: "280 100% 70%",
        "primary-foreground": "0 0% 0%",
        secondary: "240 15% 8%",
        "secondary-foreground": "0 100% 100%",
        muted: "240 15% 8%",
        "muted-foreground": "280 50% 80%",
        accent: "320 100% 60%",
        "accent-foreground": "0 0% 0%",
        border: "280 100% 30%",
        input: "280 100% 30%",
        ring: "280 100% 70%",
        card: "240 15% 5%",
        "card-foreground": "0 100% 100%",
        popover: "240 15% 5%",
        "popover-foreground": "0 100% 100%",
        destructive: "0 100% 50%",
        "destructive-foreground": "0 0% 0%",
      },
      sunset: {
        background: "20 100% 98%",
        foreground: "20 20% 10%",
        primary: "15 100% 55%",
        "primary-foreground": "0 0% 100%",
        secondary: "20 100% 95%",
        "secondary-foreground": "20 20% 10%",
        muted: "20 100% 95%",
        "muted-foreground": "20 30% 40%",
        accent: "340 100% 85%",
        "accent-foreground": "20 20% 10%",
        border: "20 100% 85%",
        input: "20 100% 85%",
        ring: "15 100% 55%",
        card: "20 100% 99%",
        "card-foreground": "20 20% 10%",
        popover: "20 100% 99%",
        "popover-foreground": "20 20% 10%",
        destructive: "0 84% 60%",
        "destructive-foreground": "210 40% 98%",
      },
      ocean: {
        background: "200 100% 97%",
        foreground: "200 20% 10%",
        primary: "200 100% 45%",
        "primary-foreground": "0 0% 100%",
        secondary: "200 100% 95%",
        "secondary-foreground": "200 20% 10%",
        muted: "200 100% 95%",
        "muted-foreground": "200 30% 40%",
        accent: "180 100% 85%",
        "accent-foreground": "200 20% 10%",
        border: "200 100% 80%",
        input: "200 100% 80%",
        ring: "200 100% 45%",
        card: "200 100% 99%",
        "card-foreground": "200 20% 10%",
        popover: "200 100% 99%",
        "popover-foreground": "200 20% 10%",
        destructive: "0 84% 60%",
        "destructive-foreground": "210 40% 98%",
      },
      coffee: {
        background: "30 40% 98%",
        foreground: "30 20% 15%",
        primary: "25 75% 50%",
        "primary-foreground": "0 0% 100%",
        secondary: "30 40% 95%",
        "secondary-foreground": "30 20% 15%",
        muted: "30 40% 95%",
        "muted-foreground": "30 30% 35%",
        accent: "45 90% 85%",
        "accent-foreground": "30 20% 15%",
        border: "30 50% 85%",
        input: "30 50% 85%",
        ring: "25 75% 50%",
        card: "30 40% 99%",
        "card-foreground": "30 20% 15%",
        popover: "30 40% 99%",
        "popover-foreground": "30 20% 15%",
        destructive: "0 84% 60%",
        "destructive-foreground": "210 40% 98%",
      },
      galaxy: {
        background: "240 15% 4%",
        foreground: "0 0% 98%",
        primary: "260 100% 65%",
        "primary-foreground": "0 0% 100%",
        secondary: "240 15% 10%",
        "secondary-foreground": "0 0% 98%",
        muted: "240 15% 10%",
        "muted-foreground": "260 50% 70%",
        accent: "300 100% 75%",
        "accent-foreground": "0 0% 0%",
        border: "260 80% 25%",
        input: "260 80% 25%",
        ring: "260 100% 65%",
        card: "240 15% 6%",
        "card-foreground": "0 0% 98%",
        popover: "240 15% 6%",
        "popover-foreground": "0 0% 98%",
        destructive: "0 84% 60%",
        "destructive-foreground": "210 40% 98%",
      },
    };
    return themes[themeType];
  };

  const applyTheme = (
    resolvedTheme:
      | "light"
      | "dark"
      | "neon"
      | "sunset"
      | "ocean"
      | "coffee"
      | "galaxy"
  ) => {
    const root = document.documentElement;
    root.classList.remove(
      "light",
      "dark",
      "neon",
      "sunset",
      "ocean",
      "coffee",
      "galaxy"
    );
    root.classList.add(resolvedTheme);

    const themeColors = getThemeColors(resolvedTheme);
    Object.entries(themeColors).forEach(([property, value]) => {
      root.style.setProperty(`--${property}`, value);
    });
  };

  const resolveTheme = (
    themeValue: Theme
  ): "light" | "dark" | "neon" | "sunset" | "ocean" | "coffee" | "galaxy" => {
    if (themeValue === "system") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return themeValue;
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    const resolved = resolveTheme(theme);
    setActualTheme(resolved);
    applyTheme(resolved);
    localStorage.setItem("gltzui-theme", theme);
  }, [theme]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem("gltzui-color-scheme", colorScheme);
  }, [colorScheme]);

  const value = {
    theme,
    colorScheme,
    setTheme,
    setColorScheme,
    actualTheme,
  };

  return React.createElement(ThemeContext.Provider, { value }, children);
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

export function useCurrentTheme() {
  const { actualTheme } = useTheme();
  return actualTheme;
}

export function useIsDarkMode() {
  const { actualTheme } = useTheme();
  return actualTheme === "dark";
}
