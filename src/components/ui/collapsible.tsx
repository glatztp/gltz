import React from "react";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { cn } from "../../lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { ChevronDown, Plus } from "lucide-react";

const collapsibleVariants = cva(
  "border rounded-lg transition-all duration-200 focus-within:ring-1 focus-within:ring-primary/30 focus-within:ring-offset-1",
  {
    variants: {
      variant: {
        default: "border-border bg-background",
        outline: "border-2 border-border bg-transparent",
        ghost: "border-transparent bg-transparent",
        filled: "border-transparent bg-muted",
        gradient:
          "border-transparent bg-gradient-to-r from-primary/10 to-secondary/10",
        card: "border-border bg-card shadow-sm",
      },
      size: {
        sm: "text-sm",
        default: "text-base",
        lg: "text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const collapsibleTriggerVariants = cva(
  "flex w-full items-center justify-between p-4 text-left transition-all hover:bg-accent/50 focus:outline-none focus-visible:ring-1 focus-visible:ring-primary/50 focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50 rounded-md",
  {
    variants: {
      variant: {
        default: "hover:bg-accent/50 focus-visible:bg-accent/30",
        minimal: "p-2 hover:bg-transparent focus-visible:bg-accent/20",
        button:
          "rounded-md bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-primary-foreground/50",
        ghost: "hover:bg-accent/30 focus-visible:bg-accent/20",
        underline:
          "border-b border-border hover:border-primary focus-visible:border-primary rounded-none",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const collapsibleContentVariants = cva(
  "overflow-hidden transition-all data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down",
  {
    variants: {
      variant: {
        default: "px-4 pb-4",
        minimal: "px-2 pb-2",
        padded: "px-6 pb-6",
        flush: "px-0 pb-0",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface CollapsibleProps
  extends React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Root>,
    VariantProps<typeof collapsibleVariants> {
  className?: string;
}

interface CollapsibleTriggerProps
  extends React.ComponentPropsWithoutRef<
      typeof CollapsiblePrimitive.CollapsibleTrigger
    >,
    VariantProps<typeof collapsibleTriggerVariants> {
  className?: string;
  showIcon?: boolean;
  icon?: "chevron" | "plus" | "none";
  iconPosition?: "left" | "right";
}

interface CollapsibleContentProps
  extends React.ComponentPropsWithoutRef<
      typeof CollapsiblePrimitive.CollapsibleContent
    >,
    VariantProps<typeof collapsibleContentVariants> {
  className?: string;
}

const Collapsible = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.Root>,
  CollapsibleProps
>(({ className, variant, size, ...props }, ref) => (
  <CollapsiblePrimitive.Root
    ref={ref}
    className={cn(collapsibleVariants({ variant, size }), className)}
    {...props}
  />
));
Collapsible.displayName = "Collapsible";

const CollapsibleTrigger = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.CollapsibleTrigger>,
  CollapsibleTriggerProps
>(
  (
    {
      className,
      variant,
      showIcon = true,
      icon = "chevron",
      iconPosition = "right",
      children,
      ...props
    },
    ref
  ) => {
    const IconComponent =
      icon === "chevron" ? ChevronDown : icon === "plus" ? Plus : null;

    return (
      <CollapsiblePrimitive.CollapsibleTrigger
        ref={ref}
        className={cn(collapsibleTriggerVariants({ variant }), className)}
        {...props}
      >
        {iconPosition === "left" && showIcon && IconComponent && (
          <IconComponent className="h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180" />
        )}
        <span className="flex-1">{children}</span>
        {iconPosition === "right" && showIcon && IconComponent && (
          <IconComponent className="h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180" />
        )}
      </CollapsiblePrimitive.CollapsibleTrigger>
    );
  }
);
CollapsibleTrigger.displayName = "CollapsibleTrigger";

const CollapsibleContent = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.CollapsibleContent>,
  CollapsibleContentProps
>(({ className, variant, ...props }, ref) => (
  <CollapsiblePrimitive.CollapsibleContent
    ref={ref}
    className={cn(collapsibleContentVariants({ variant }), className)}
    {...props}
  />
));
CollapsibleContent.displayName = "CollapsibleContent";

// Componente composto para uso rápido
interface QuickCollapsibleProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  variant?: VariantProps<typeof collapsibleVariants>["variant"];
  triggerVariant?: VariantProps<typeof collapsibleTriggerVariants>["variant"];
  contentVariant?: VariantProps<typeof collapsibleContentVariants>["variant"];
  icon?: "chevron" | "plus" | "none";
  className?: string;
}

const QuickCollapsible = ({
  title,
  children,
  defaultOpen = false,
  variant = "default",
  triggerVariant = "default",
  contentVariant = "default",
  icon = "chevron",
  className,
}: QuickCollapsibleProps) => {
  return (
    <Collapsible
      defaultOpen={defaultOpen}
      variant={variant}
      className={cn("group/collapsible", className)}
    >
      <CollapsibleTrigger variant={triggerVariant} icon={icon}>
        {title}
      </CollapsibleTrigger>
      <CollapsibleContent variant={contentVariant}>
        {children}
      </CollapsibleContent>
    </Collapsible>
  );
};

// Componente de FAQ especializado
interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
  defaultOpen?: boolean;
}

const FAQItem = ({ question, answer, defaultOpen = false }: FAQItemProps) => {
  return (
    <QuickCollapsible
      title={question}
      defaultOpen={defaultOpen}
      variant="card"
      triggerVariant="default"
      contentVariant="default"
      icon="plus"
      className="mb-2"
    >
      <div className="text-muted-foreground">{answer}</div>
    </QuickCollapsible>
  );
};

// Componente de Accordion (múltiplos collapsibles)
interface AccordionProps {
  items: Array<{
    id: string;
    title: string;
    content: React.ReactNode;
    defaultOpen?: boolean;
  }>;
  variant?: VariantProps<typeof collapsibleVariants>["variant"];
  allowMultiple?: boolean;
  className?: string;
}

const Accordion = ({
  items,
  variant = "default",
  allowMultiple = false,
  className,
}: AccordionProps) => {
  const [openItems, setOpenItems] = React.useState<string[]>(
    items.filter((item) => item.defaultOpen).map((item) => item.id)
  );

  const handleToggle = (itemId: string) => {
    if (allowMultiple) {
      setOpenItems((prev) =>
        prev.includes(itemId)
          ? prev.filter((id) => id !== itemId)
          : [...prev, itemId]
      );
    } else {
      setOpenItems((prev) => (prev.includes(itemId) ? [] : [itemId]));
    }
  };

  return (
    <div className={cn("space-y-2", className)}>
      {items.map((item) => (
        <Collapsible
          key={item.id}
          open={openItems.includes(item.id)}
          onOpenChange={() => handleToggle(item.id)}
          variant={variant}
          className="group/collapsible"
        >
          <CollapsibleTrigger>{item.title}</CollapsibleTrigger>
          <CollapsibleContent>{item.content}</CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  );
};

export {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
  QuickCollapsible,
  FAQItem,
  Accordion,
  collapsibleVariants,
  collapsibleTriggerVariants,
  collapsibleContentVariants,
};
