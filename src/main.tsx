import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./lib/theme-provider";
import "./styles/globals.css";
import { Dashboard } from "./components/Dashboard";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Dashboard />
    </ThemeProvider>
  </React.StrictMode>
);
