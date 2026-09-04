"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export function ThemeToggle({ className = "", showLabel = false }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={`w-9 h-9 rounded-xl border border-white/10 bg-white/5 ${className}`} />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      className={`relative inline-flex items-center justify-center gap-2 p-2 rounded-xl border transition-all duration-300 cursor-pointer active:scale-90 select-none ${
        isDark
          ? "bg-[#111827] border-[#1F2937] text-amber-400 hover:border-amber-400/40 hover:bg-[#162032] shadow-sm"
          : "bg-slate-100 border-slate-300 text-blue-600 hover:border-blue-400 hover:bg-slate-200 shadow-sm"
      } ${className}`}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-4 h-4 transition-transform duration-300 rotate-0 scale-100" />
        ) : (
          <Moon className="w-4 h-4 transition-transform duration-300 rotate-0 scale-100" />
        )}
      </div>

      {showLabel && (
        <span className="text-xs font-semibold font-mono">
          {isDark ? "Light Mode" : "Dark Mode"}
        </span>
      )}
    </button>
  );
}
