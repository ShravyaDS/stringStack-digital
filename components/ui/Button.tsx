import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "emerald" | "indigo" | "shimmer";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const sizeClasses = {
      sm: "px-4 py-2 text-xs font-semibold rounded-xl",
      md: "px-5 py-2.5 text-sm font-semibold rounded-xl",
      lg: "px-7 py-3.5 text-sm font-semibold rounded-xl",
    };

    const variantClasses = {
      primary:
        "btn-primary text-white",
      secondary:
        "btn-secondary",
      outline:
        "bg-transparent text-[#D4D3E0] border border-white/10 hover:border-white/20 hover:bg-white/5 hover:text-white active:scale-[0.98] transition-all duration-200",
      ghost:
        "bg-transparent text-[#A3A2B0] hover:text-white hover:bg-white/5 active:scale-[0.98] transition-all duration-200",
      emerald:
        "btn-emerald text-white",
      indigo:
        "bg-gradient-to-r from-indigo-600 to-purple-700 text-white border border-indigo-400/25 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:from-indigo-500 hover:to-purple-600 active:scale-[0.98] transition-all duration-250",
      shimmer:
        "bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 text-white border border-white/15 shadow-lg shadow-violet-500/30 active:scale-[0.98] transition-all duration-250 overflow-hidden relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:via-white/15 before:to-white/0 before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 cursor-pointer select-none transition-all disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed",
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
