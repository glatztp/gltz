import React from "react";
import { cn } from "../../../lib/utils";

// Form Context
interface FormContextValue {
  errors: Record<string, string>;
  setError: (field: string, message: string) => void;
  clearError: (field: string) => void;
  isSubmitting: boolean;
}

const FormContext = React.createContext<FormContextValue>({
  errors: {},
  setError: () => {},
  clearError: () => {},
  isSubmitting: false,
});

// Form Hook
export const useForm = () => {
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const setError = (field: string, message: string) => {
    setErrors((prev) => ({ ...prev, [field]: message }));
  };

  const clearError = (field: string) => {
    setErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors[field];
      return newErrors;
    });
  };

  const clearAllErrors = () => {
    setErrors({});
  };

  return {
    errors,
    setError,
    clearError,
    clearAllErrors,
    isSubmitting,
    setIsSubmitting,
  };
};

// Form Provider
interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  errors: Record<string, string>;
  setError: (field: string, message: string) => void;
  clearError: (field: string) => void;
  isSubmitting: boolean;
}

const Form = React.forwardRef<HTMLFormElement, FormProps>(
  (
    { className, errors, setError, clearError, isSubmitting, ...props },
    ref
  ) => {
    return (
      <FormContext.Provider
        value={{ errors, setError, clearError, isSubmitting }}
      >
        <form ref={ref} className={cn("space-y-6", className)} {...props} />
      </FormContext.Provider>
    );
  }
);
Form.displayName = "Form";

// Form Field
interface FormFieldProps {
  name: string;
  children: React.ReactNode;
}

const FormField: React.FC<FormFieldProps> = ({ name, children }) => {
  const { errors } = React.useContext(FormContext);
  const error = errors[name];

  return (
    <div className="space-y-2">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            name,
            error: error || undefined,
          } as any);
        }
        return child;
      })}
    </div>
  );
};

// Form Item
const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("space-y-2", className)} {...props} />
));
FormItem.displayName = "FormItem";

// Form Label
const FormLabel = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={cn(
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      className
    )}
    {...props}
  />
));
FormLabel.displayName = "FormLabel";

// Form Control
const FormControl = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => <div ref={ref} {...props} />);
FormControl.displayName = "FormControl";

// Form Description
const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
FormDescription.displayName = "FormDescription";

// Form Message
const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement> & {
    error?: string;
  }
>(({ className, children, error, ...props }, ref) => {
  const message = error || children;

  if (!message) {
    return null;
  }

  return (
    <p
      ref={ref}
      className={cn("text-sm font-medium text-destructive", className)}
      {...props}
    >
      {message}
    </p>
  );
});
FormMessage.displayName = "FormMessage";

export {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
};


