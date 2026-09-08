"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Code2,
  X,
  Menu,
  ArrowRight,
  Search,
  Layers,
  ChevronDown,
} from "lucide-react";
import { useBookingModal } from "./ModalProvider";
import { CommandPalette } from "./CommandPalette";
import { ThemeToggle } from "./ThemeToggle";

export function Navigation() {
  const pathname = usePathname();
  const { openBookingModal, openDemoModal } = useBookingModal();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDrawerOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [drawerOpen]);

  const triggerSearch = () => {
    window.dispatchEvent(
      new KeyboardEvent("keydown", { key: "k", ctrlKey: true, metaKey: true, bubbles: true })
    );
  };

  return (
    <>
      {/* ── TOP NAVIGATION BAR (Linear / Vercel Glass Header) ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ease-out bg-white/90 dark:bg-[#090D16]/85 backdrop-blur-md border-b border-slate-200 dark:border-white/[0.08] ${
          scrolled || drawerOpen
            ? "py-3 shadow-md dark:shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
            : "py-4.5 shadow-xs dark:shadow-[0_4px_16px_rgba(0,0,0,0.3)]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 sm:gap-4 lg:gap-6">

            {/* ── Logo ── */}
            <Link href="/" className="flex items-center gap-2.5 select-none shrink-0 group">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center transition-all duration-200 group-hover:bg-blue-500 shadow-[0_0_16px_rgba(37,99,235,0.45)]">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <div className="font-bold text-base sm:text-lg text-slate-900 dark:text-white tracking-tight whitespace-nowrap">
                SprintStack<span className="text-blue-500">.digital</span>
              </div>
            </Link>

            {/* ── Desktop Navigation ── */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 shrink-0">
              {[
                { href: "/#solutions", label: "Solutions" },
                { href: "/#enterprise-solutions", label: "Enterprise Software" },
                { href: "/#process", label: "Process" },
                { href: "/#tech-stack", label: "Tech Stack" },
                { href: "/partners/white-label", label: "White-Label & Partners" },
              ].map((item) => {
                const isActive = item.href.startsWith("/") && !item.href.startsWith("/#") && pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative px-3 py-1.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap group ${
                      isActive
                        ? "text-blue-600 dark:text-white bg-blue-50 dark:bg-white/[0.08]"
                        : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.05]"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-blue-500" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* ── Right Actions ── */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">

              {/* Theme Selector Toggle */}
              <ThemeToggle />

              {/* Primary Discovery CTA */}
              <button
                onClick={openBookingModal}
                className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/30 transition-all cursor-pointer whitespace-nowrap active:scale-95"
              >
                <span className="hidden sm:inline">Schedule a Technical Discovery</span>
                <span className="sm:hidden">Discovery</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {/* Mobile Hamburger */}
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setDrawerOpen((prev) => !prev);
                }}
                className="flex items-center justify-center w-10 h-10 rounded-lg border border-slate-200 dark:border-white/[0.12] text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.06] active:bg-slate-200 dark:active:bg-white/[0.10] cursor-pointer shrink-0 lg:hidden transition-all duration-150"
                aria-label={drawerOpen ? "Close menu" : "Open menu"}
                aria-expanded={drawerOpen}
              >
                {drawerOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── MOBILE DRAWER ── */}
      <div
        className={`fixed inset-0 z-50 ${drawerOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!drawerOpen}
      >
        {/* Backdrop */}
        <div
          onClick={() => setDrawerOpen(false)}
          className={`fixed inset-0 bg-black/60 dark:bg-black/75 backdrop-blur-sm transition-opacity duration-300 ${
            drawerOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Drawer Panel */}
        <div
          className={`fixed top-0 right-0 bottom-0 w-full sm:w-[380px] max-w-[92vw] flex flex-col overflow-y-auto transition-transform duration-300 ease-out z-10 bg-white dark:bg-[#090D16] border-l border-slate-200 dark:border-white/[0.10] shadow-2xl ${
            drawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Drawer Header */}
          <div className="p-4 sm:p-5 flex items-center justify-between border-b border-slate-200 dark:border-white/[0.08] sticky top-0 z-20 bg-white dark:bg-[#090D16]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-[0_0_12px_rgba(37,99,235,0.4)]">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-base text-slate-900 dark:text-white tracking-tight">
                SprintStack<span className="text-blue-500">.digital</span>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setDrawerOpen(false)}
                className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-white/[0.06] hover:bg-slate-200 dark:hover:bg-white/[0.12] active:bg-slate-300 dark:active:bg-white/[0.16] text-slate-700 dark:text-slate-300 flex items-center justify-center transition-all cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Drawer Links */}
          <div className="p-4 sm:p-5 space-y-5 flex-1 text-slate-900 dark:text-white">
            {/* Solutions */}
            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 px-2 block mb-1">Solutions</span>
              {[
                { href: "/services/web-development", label: "Web Applications & Platforms" },
                { href: "/services/mobile-apps", label: "Native & Cross-Platform Mobile" },
                { href: "/#solutions", label: "E-commerce & Omnichannel" },
                { href: "/#solutions", label: "System Integrations & Middleware" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setDrawerOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.06] active:bg-slate-200 dark:active:bg-white/[0.10] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="h-px bg-slate-200 dark:bg-white/[0.08]" />

            {/* Enterprise */}
            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 px-2 block mb-1">Enterprise Software</span>
              {[
                { href: "/products/attendance-erp", label: "Attendance & Workforce ERP" },
                { href: "/#enterprise-solutions", label: "Project & Resource Governance" },
                { href: "/#enterprise-solutions", label: "Custom CRM & Lead Engine" },
                { href: "/#enterprise-solutions", label: "Business Process Automation" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setDrawerOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.06] active:bg-slate-200 dark:active:bg-white/[0.10] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="h-px bg-slate-200 dark:bg-white/[0.08]" />

            {/* Company */}
            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 px-2 block mb-1">Company & Process</span>
              {[
                { href: "/#tech-stack", label: "Technology Stack" },
                { href: "/partners/white-label", label: "White-Label & Partners" },
                { href: "/#process", label: "Delivery Process" },
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/terms", label: "Terms of Service" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setDrawerOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.06] active:bg-slate-200 dark:active:bg-white/[0.10] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Drawer Footer with Safe Area */}
          <div className="p-4 sm:p-5 space-y-3 border-t border-slate-200 dark:border-white/[0.08] bg-slate-50 dark:bg-[#0B1120] pb-safe">
            <button
              onClick={() => { setDrawerOpen(false); openBookingModal(); }}
              className="btn-primary w-full inline-flex items-center justify-center gap-2 py-3 text-sm font-semibold cursor-pointer active:scale-95 transition-transform text-white"
            >
              <span>Schedule Technical Discovery</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => { setDrawerOpen(false); openDemoModal(); }}
              className="btn-secondary w-full inline-flex items-center justify-center gap-2 py-2.5 text-xs font-semibold cursor-pointer active:scale-95 transition-transform"
            >
              <span>Launch Live Product Demos</span>
            </button>
          </div>
        </div>
      </div>

      {/* Global Cmd+K */}
      <CommandPalette />
    </>
  );
}
