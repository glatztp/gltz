import React from "react";
import { cn } from "../../../lib/utils";

interface ToastData {
  id: string;
  title?: string;
  description?: string;
  variant?: "default" | "destructive" | "success" | "warning";
  duration?: number;
  action?: React.ReactNode;
}

interface SonnerContextType {
  toasts: ToastData[];
  addToast: (toast: Omit<ToastData, "id">) => void;
  removeToast: (id: string) => void;
  clearToasts: () => void;
}

const SonnerContext = React.createContext<SonnerContextType | null>(null);

// Hook para usar toasts
export const useSonner = () => {
  const context = React.useContext(SonnerContext);
  if (!context) {
    throw new Error("useSonner must be used within a SonnerProvider");
  }
  return context;
};

// Provider
interface SonnerProviderProps {
  children: React.ReactNode;
  position?:
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"
    | "top-center"
    | "bottom-center";
  maxToasts?: number;
}

export const SonnerProvider: React.FC<SonnerProviderProps> = ({
  children,
  position = "bottom-right",
  maxToasts = 5,
}) => {
  const [toasts, setToasts] = React.useState<ToastData[]>([]);

  const addToast = React.useCallback(
    (toast: Omit<ToastData, "id">) => {
      const id = Math.random().toString(36).substring(2, 9);
      const newToast: ToastData = {
        ...toast,
        id,
        duration: toast.duration || 5000,
      };

      setToasts((prev) => {
        const updated = [newToast, ...prev];
        return updated.slice(0, maxToasts);
      });

      // Auto remove toast
      if (newToast.duration && newToast.duration > 0) {
        setTimeout(() => {
          removeToast(id);
        }, newToast.duration);
      }
    },
    [maxToasts]
  );

  const removeToast = React.useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const clearToasts = React.useCallback(() => {
    setToasts([]);
  }, []);

  const getPositionClasses = () => {
    switch (position) {
      case "top-left":
        return "top-4 left-4";
      case "top-right":
        return "top-4 right-4";
      case "top-center":
        return "top-4 left-1/2 transform -translate-x-1/2";
      case "bottom-left":
        return "bottom-4 left-4";
      case "bottom-center":
        return "bottom-4 left-1/2 transform -translate-x-1/2";
      case "bottom-right":
      default:
        return "bottom-4 right-4";
    }
  };

  return (
    <SonnerContext.Provider
      value={{ toasts, addToast, removeToast, clearToasts }}
    >
      {children}
      <div
        className={cn(
          "fixed z-[100] pointer-events-none",
          getPositionClasses()
        )}
      >
        <div className="flex flex-col space-y-2">
          {toasts.map((toast) => (
            <ToastItem
              key={toast.id}
              toast={toast}
              onRemove={() => removeToast(toast.id)}
            />
          ))}
        </div>
      </div>
    </SonnerContext.Provider>
  );
};

// Toast Item Component
interface ToastItemProps {
  toast: ToastData;
  onRemove: () => void;
}

const ToastItem: React.FC<ToastItemProps> = ({ toast, onRemove }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isRemoving, setIsRemoving] = React.useState(false);

  React.useEffect(() => {
    // Trigger enter animation
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const handleRemove = () => {
    setIsRemoving(true);
    setTimeout(onRemove, 300); // Wait for exit animation
  };

  const getVariantClasses = () => {
    switch (toast.variant) {
      case "destructive":
        return "border-destructive bg-destructive text-destructive-foreground";
      case "success":
        return "border-green-500 bg-green-50 text-green-900 dark:bg-green-900 dark:text-green-50";
      case "warning":
        return "border-yellow-500 bg-yellow-50 text-yellow-900 dark:bg-yellow-900 dark:text-yellow-50";
      default:
        return "border bg-background text-foreground";
    }
  };

  return (
    <div
      className={cn(
        "pointer-events-auto relative flex w-full max-w-sm items-center space-x-4 overflow-hidden rounded-md p-6 pr-8 shadow-lg transition-all duration-300",
        getVariantClasses(),
        isVisible && !isRemoving
          ? "animate-in slide-in-from-bottom-5 fade-in"
          : "animate-out slide-out-to-bottom-5 fade-out"
      )}
    >
      <div className="flex-1">
        {toast.title && (
          <div className="text-sm font-semibold">{toast.title}</div>
        )}
        {toast.description && (
          <div className="text-sm opacity-90">{toast.description}</div>
        )}
      </div>

      {toast.action && <div className="flex-shrink-0">{toast.action}</div>}

      <button
        onClick={handleRemove}
        className="absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
        >
          <path d="m18 6-12 12" />
          <path d="m6 6 12 12" />
        </svg>
      </button>
    </div>
  );
};

// Helper functions for creating toasts
export const toast = {
  success: (
    title: string,
    description?: string,
    options?: Partial<ToastData>
  ) => ({
    title,
    description,
    variant: "success" as const,
    ...options,
  }),
  error: (
    title: string,
    description?: string,
    options?: Partial<ToastData>
  ) => ({
    title,
    description,
    variant: "destructive" as const,
    ...options,
  }),
  warning: (
    title: string,
    description?: string,
    options?: Partial<ToastData>
  ) => ({
    title,
    description,
    variant: "warning" as const,
    ...options,
  }),
  info: (
    title: string,
    description?: string,
    options?: Partial<ToastData>
  ) => ({
    title,
    description,
    variant: "default" as const,
    ...options,
  }),
};

export { SonnerContext };


