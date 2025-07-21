import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./lib/theme-provider";
import "./styles/globals.css";
import { SonnerProvider } from "./components/ui/feedback/sonner";
import ProfessionalDashboard from "./components/pages/professional-home-page";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SonnerProvider position="top-center" maxToasts={5}>
        <ProfessionalDashboard />
      </SonnerProvider>
    </ThemeProvider>
  </React.StrictMode>
);
