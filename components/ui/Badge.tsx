import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "blue" | "emerald" | "indigo" | "cyan" | "amber" | "purple" | "outline" | "slate";
  size?: "sm" | "md";
  children: React.ReactNode;
}

export function Badge({
  className,
  variant = "blue",
  size = "sm",
  children,
  ...props
}: BadgeProps) {
  const variantClasses = {
    blue: "bg-blue-500/10 text-blue-400 border-blue-500/30 shadow-sm shadow-blue-500/10",
    emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30 shadow-sm shadow-emerald-500/10",
    indigo: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30 shadow-sm shadow-indigo-500/10",
    cyan: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30 shadow-sm shadow-cyan-500/10",
    amber: "bg-amber-500/10 text-amber-400 border-amber-500/30 shadow-sm shadow-amber-500/10",
    purple: "bg-purple-500/10 text-purple-400 border-purple-500/30 shadow-sm shadow-purple-500/10",
    slate: "bg-slate-800/80 text-slate-300 border-slate-700/80 backdrop-blur-md",
    outline: "bg-transparent text-slate-300 border-slate-700/80 hover:border-slate-500",
  };

  const sizeClasses = {
    sm: "text-[11px] px-2.5 py-1 font-mono uppercase tracking-wider rounded-lg border backdrop-blur-md",
    md: "text-xs px-3 py-1.5 font-mono uppercase tracking-wider rounded-xl border backdrop-blur-md",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 font-medium leading-none whitespace-nowrap transition-colors",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
