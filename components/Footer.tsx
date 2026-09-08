"use client";

import React from "react";
import Link from "next/link";
import { Code2 } from "lucide-react";

export function Footer() {
  const navLinks = [
    { href: "/#solutions", label: "Solutions" },
    { href: "/#enterprise-solutions", label: "Enterprise Software" },
    { href: "/#tech-stack", label: "Tech Stack" },
    { href: "/partners/white-label", label: "White-Label & Partners" },
    { href: "/#process", label: "Process" },
  ];

  return (
    <footer className="bg-slate-100 dark:bg-[#050811] text-slate-900 dark:text-white border-t border-slate-200 dark:border-white/[0.08] py-12 lg:py-16 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Top Row: Brand & Navigation matching Figma */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-white/[0.08]">
          <div className="space-y-1">
            <Link href="/" className="flex items-center gap-2.5 select-none">
              <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-lg text-slate-900 dark:text-white tracking-tight">
                SprintStack<span className="text-blue-500">.digital</span>
              </span>
            </Link>
            <p className="text-xs font-mono text-slate-500">
              Build • Scale • Grow
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5 sm:gap-7 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Row: Copyright & Tagline matching Figma */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            © 2026 SprintStack.digital. All rights reserved.
          </div>
          <div>
            High-Performance Engineering for a Global Tomorrow.
          </div>
        </div>

      </div>
    </footer>
  );
}
