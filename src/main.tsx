import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/globals.css";
import { SonnerProvider } from "./components/ui/feedback/sonner";
import ProfessionalDashboard from "./components/ProfessionalDashboard";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SonnerProvider position="top-center" maxToasts={5}>
      <ProfessionalDashboard />
    </SonnerProvider>
  </React.StrictMode>
);
