import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Spinner } from "phosphor-react";
import { motion, type HTMLMotionProps, type Variants } from "framer-motion";

import { cn } from "../../lib/utils";

// Animações predefinidas
const buttonAnimations: Record<string, Variants> = {
  default: {
    initial: { scale: 1 },
    hover: { scale: 1.02 },
    tap: { scale: 0.98 },
  },
  bounce: {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
    tap: { scale: 0.95 },
  },
  pulse: {
    initial: { scale: 1 },
    hover: {
      scale: [1, 1.05, 1],
      transition: { duration: 0.6, repeat: Infinity, repeatType: "reverse" },
    },
    tap: { scale: 0.95 },
  },
  smooth: {
    initial: { scale: 1, opacity: 1 },
    hover: { scale: 1.03, opacity: 0.9, transition: { duration: 0.2 } },
    tap: { scale: 0.97 },
  },
  slide: {
    initial: { x: 0 },
    hover: { x: 2, transition: { duration: 0.2 } },
    tap: { x: -1 },
  },
};

// Efeitos de carregamento animados
const loadingEffects = {
  dots: "animate-pulse",
  spinner: "animate-spin",
  bounce: "animate-bounce",
};

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;

  // Props de animação
  animation?: keyof typeof buttonAnimations | "none";
  customAnimation?: Variants;
  animationDuration?: number;

  // Props de funcionalidade
  loadingText?: string;
  loadingEffect?: keyof typeof loadingEffects;
  autoFocus?: boolean;
  debounceMs?: number;

  // Props de estilo avançado
  gradient?: boolean;
  shadow?: "none" | "sm" | "md" | "lg" | "xl";
  glow?: boolean;
  rounded?: "none" | "sm" | "md" | "lg" | "full";

  // Props de interação
  hapticFeedback?: boolean;
  soundEffect?: boolean;
  confirmAction?: boolean;
  confirmMessage?: string;

  // Callbacks de animação (separados das props HTML)
  onMotionHoverStart?: () => void;
  onMotionHoverEnd?: () => void;
  onMotionTapStart?: () => void;
  onMotionTapEnd?: () => void;
  onMotionAnimationComplete?: () => void;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      loading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,

      // Props de animação
      animation = "default",
      customAnimation,
      animationDuration = 0.2,

      // Props de funcionalidade
      loadingText = "Carregando...",
      loadingEffect = "spinner",
      autoFocus = false,
      debounceMs = 0,

      // Props de estilo avançado
      gradient = false,
      shadow = "none",
      glow = false,
      rounded,

      // Props de interação
      hapticFeedback = false,
      soundEffect = false,
      confirmAction = false,
      confirmMessage = "Tem certeza?",

      // Callbacks de animação
      onMotionHoverStart,
      onMotionHoverEnd,
      onMotionTapStart,
      onMotionTapEnd,
      onMotionAnimationComplete,
      onClick,
      ...props
    },
    ref
  ) => {
    const [isConfirming, setIsConfirming] = React.useState(false);
    const debounceTimer = React.useRef<NodeJS.Timeout>();

    // Auto focus effect
    React.useEffect(() => {
      if (autoFocus && ref && "current" in ref && ref.current) {
        ref.current.focus();
      }
    }, [autoFocus, ref]);

    // Debounced click handler
    const handleClick = React.useCallback(
      (event: React.MouseEvent<HTMLButtonElement>) => {
        if (confirmAction && !isConfirming) {
          if (window.confirm(confirmMessage)) {
            setIsConfirming(true);
          } else {
            return;
          }
        }

        // Haptic feedback (if supported)
        if (hapticFeedback && "vibrate" in navigator) {
          navigator.vibrate(50);
        }

        // Sound effect (placeholder - você pode implementar com Web Audio API)
        if (soundEffect) {
          // Placeholder for sound implementation
          console.log("🔊 Button sound effect");
        }

        if (debounceMs > 0) {
          if (debounceTimer.current) {
            clearTimeout(debounceTimer.current);
          }

          debounceTimer.current = setTimeout(() => {
            onClick?.(event);
            setIsConfirming(false);
          }, debounceMs);
        } else {
          onClick?.(event);
          setIsConfirming(false);
        }
      },
      [
        onClick,
        debounceMs,
        confirmAction,
        confirmMessage,
        isConfirming,
        hapticFeedback,
        soundEffect,
      ]
    );

    // Cleanup debounce timer
    React.useEffect(() => {
      return () => {
        if (debounceTimer.current) {
          clearTimeout(debounceTimer.current);
        }
      };
    }, []);

    // Dynamic class generation
    const dynamicClasses = React.useMemo(() => {
      const classes = [];

      if (gradient) {
        classes.push("bg-gradient-to-r from-primary to-primary/80");
      }

      if (glow) {
        classes.push("shadow-lg shadow-primary/25 hover:shadow-primary/40");
      }

      switch (shadow) {
        case "sm":
          classes.push("shadow-sm");
          break;
        case "md":
          classes.push("shadow-md");
          break;
        case "lg":
          classes.push("shadow-lg");
          break;
        case "xl":
          classes.push("shadow-xl");
          break;
      }

      switch (rounded) {
        case "none":
          classes.push("rounded-none");
          break;
        case "sm":
          classes.push("rounded-sm");
          break;
        case "md":
          classes.push("rounded-md");
          break;
        case "lg":
          classes.push("rounded-lg");
          break;
        case "full":
          classes.push("rounded-full");
          break;
      }

      return classes.join(" ");
    }, [gradient, glow, shadow, rounded]);

    // Animation variants
    const animationVariants =
      customAnimation ||
      (animation !== "none" ? buttonAnimations[animation] : undefined);

    // Loading component based on effect
    const LoadingComponent = React.useMemo(() => {
      switch (loadingEffect) {
        case "spinner":
          return <Spinner className="mr-2 h-4 w-4 animate-spin" />;
        case "dots":
          return (
            <div className="mr-2 flex space-x-1">
              <div className="h-1 w-1 bg-current rounded-full animate-pulse"></div>
              <div
                className="h-1 w-1 bg-current rounded-full animate-pulse"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="h-1 w-1 bg-current rounded-full animate-pulse"
                style={{ animationDelay: "0.4s" }}
              ></div>
            </div>
          );
        case "bounce":
          return (
            <div className="mr-2 h-4 w-4 bg-current rounded-full animate-bounce"></div>
          );
        default:
          return <Spinner className="mr-2 h-4 w-4 animate-spin" />;
      }
    }, [loadingEffect]);

    if (asChild) {
      return (
        <Slot
          className={cn(
            buttonVariants({ variant, size }),
            dynamicClasses,
            className
          )}
          ref={ref}
          {...props}
        >
          {children}
        </Slot>
      );
    }

    // Filtrar props que conflitam entre HTML e Motion
    const {
      onDrag,
      onDragStart,
      onDragEnd,
      onAnimationStart,
      onAnimationEnd,
      onAnimationIteration,
      ...filteredProps
    } = props;

    return (
      <motion.button
        className={cn(
          buttonVariants({ variant, size }),
          dynamicClasses,
          className
        )}
        ref={ref}
        disabled={disabled || loading}
        onClick={handleClick}
        variants={animationVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        transition={{ duration: animationDuration }}
        onHoverStart={onMotionHoverStart}
        onHoverEnd={onMotionHoverEnd}
        onTapStart={onMotionTapStart}
        onTap={onMotionTapEnd}
        onAnimationComplete={onMotionAnimationComplete}
        {...filteredProps}
      >
        {loading ? (
          <>
            {LoadingComponent}
            {loadingText}
          </>
        ) : (
          <>
            {leftIcon && <span className="mr-2">{leftIcon}</span>}
            {isConfirming ? confirmMessage : children}
            {rightIcon && <span className="ml-2">{rightIcon}</span>}
          </>
        )}
      </motion.button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
