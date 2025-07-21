import React from "react";
import { cn } from "../../../lib/utils";
import {
  Toast,
  ToastAction,
  ToastClose,
  ToastTitle,
  ToastDescription,
} from "./toast";

interface ToastData {
  id: string;
  title?: string;
  description?: string;
  variant?: "default" | "destructive" | "success" | "warning";
  duration?: number;
  action?: React.ReactNode;
}

interface ToastContainerProps {
  toasts: ToastData[];
  onRemove: (id: string) => void;
  position?:
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"
    | "top-center"
    | "bottom-center";
}

export function ToastContainer({
  toasts,
  onRemove,
  position = "bottom-right",
}: ToastContainerProps) {
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

  if (toasts.length === 0) return null;

  return (
    <div
      className={cn(
        "fixed z-[100] pointer-events-none w-full max-w-sm",
        getPositionClasses()
      )}
    >
      <div className="flex flex-col space-y-2">
        {toasts.map((toast) => (
          <ToastItem
            key={toast.id}
            toast={toast}
            onRemove={() => onRemove(toast.id)}
          />
        ))}
      </div>
    </div>
  );
}

interface ToastItemProps {
  toast: ToastData;
  onRemove: () => void;
}

function ToastItem({ toast, onRemove }: ToastItemProps) {
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

  return (
    <Toast
      variant={toast.variant}
      className={cn(
        "pointer-events-auto transition-all duration-300",
        isVisible && !isRemoving
          ? "animate-in slide-in-from-bottom-5 fade-in"
          : "animate-out slide-out-to-bottom-5 fade-out"
      )}
    >
      <div className="grid gap-1">
        {toast.title && <ToastTitle>{toast.title}</ToastTitle>}
        {toast.description && (
          <ToastDescription>{toast.description}</ToastDescription>
        )}
      </div>

      {toast.action && <div className="flex-shrink-0">{toast.action}</div>}

      <ToastClose onClick={handleRemove}>
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
      </ToastClose>
    </Toast>
  );
}
