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
      sm: "px-3.5 py-1.5 text-xs font-medium rounded-xl",
      md: "px-5 py-2.5 text-sm font-semibold rounded-xl",
      lg: "px-7 py-3.5 text-base font-semibold rounded-2xl",
    };

    const variantClasses = {
      primary:
        "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:from-blue-500 hover:to-indigo-500 active:scale-[0.98] border border-blue-400/30 transition-all duration-300",
      secondary:
        "bg-surface/90 text-slate-100 hover:bg-surface-hover hover:text-white border border-border/90 hover:border-slate-600 shadow-lg shadow-black/40 active:scale-[0.98] transition-all duration-300 backdrop-blur-md",
      outline:
        "bg-transparent text-slate-200 border border-slate-700/80 hover:border-slate-500 hover:bg-slate-800/50 hover:text-white active:scale-[0.98] transition-all duration-300",
      ghost:
        "bg-transparent text-slate-300 hover:text-white hover:bg-slate-800/60 active:scale-[0.98] transition-all duration-200",
      emerald:
        "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:from-emerald-500 hover:to-teal-500 active:scale-[0.98] border border-emerald-400/30 transition-all duration-300",
      indigo:
        "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:from-indigo-500 hover:to-purple-500 active:scale-[0.98] border border-indigo-400/30 transition-all duration-300",
      shimmer:
        "bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 text-white shadow-xl shadow-blue-500/30 btn-shimmer border border-white/20 active:scale-[0.98] transition-all duration-300",
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
