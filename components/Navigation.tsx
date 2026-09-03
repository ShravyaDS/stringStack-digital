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
      {/* ── TOP NAVIGATION BAR (Scroll-Shrink: 76px -> 60px) ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ease-out ${
          scrolled || drawerOpen
            ? "bg-white/95 backdrop-blur-md border-b border-[#E5E8ED] py-2.5 shadow-[0_1px_3px_rgba(0,0,0,0.06)]"
            : "bg-white/80 backdrop-blur-sm border-b border-[#F1F5F9] py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 sm:gap-4 lg:gap-6">

            {/* ── Logo ── */}
            <Link href="/" className="flex items-center gap-2.5 select-none shrink-0 group">
              <div className="w-8 h-8 rounded-lg bg-[#2563EB] flex items-center justify-center transition-all duration-200 group-hover:bg-[#1D4ED8]">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <div className="font-bold text-base sm:text-lg text-[#0F172A] tracking-tight whitespace-nowrap">
                SprintStack<span className="text-[#2563EB]">.digital</span>
              </div>
            </Link>

            {/* ── Desktop Navigation ── */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 shrink-0">
              {[
                { href: "/#solutions", label: "Solutions" },
                { href: "/#enterprise-solutions", label: "Enterprise Software" },
                { href: "/#tech-stack", label: "Tech Stack" },
                { href: "/partners/white-label", label: "White-Label & Partners" },
                { href: "/#process", label: "Process" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-1.5 rounded-md text-sm font-medium text-[#475569] hover:text-[#0F172A] hover:bg-[#F8FAFC] transition-colors whitespace-nowrap"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* ── Right Actions ── */}
            <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">

              {/* Primary CTA: 1 of 2 true primary CTAs with arrow */}
              <button
                onClick={openBookingModal}
                className="btn-primary inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold cursor-pointer whitespace-nowrap"
              >
                <span className="hidden sm:inline">Schedule Discovery</span>
                <span className="sm:hidden">Book</span>
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
                className="flex items-center justify-center w-9 h-9 rounded-lg border border-[#E2E8F0] text-[#334155] hover:bg-[#F8FAFC] cursor-pointer shrink-0 lg:hidden transition-all duration-200"
                aria-label={drawerOpen ? "Close menu" : "Open menu"}
                aria-expanded={drawerOpen}
              >
                {drawerOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
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
          className={`fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity duration-300 ${
            drawerOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Drawer Panel */}
        <div
          className={`fixed top-0 right-0 bottom-0 w-full sm:w-[380px] max-w-[92vw] flex flex-col overflow-y-auto transition-transform duration-300 ease-out z-10 bg-white border-l border-[#E5E7EB] shadow-2xl ${
            drawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Drawer Header */}
          <div className="p-5 flex items-center justify-between border-b border-[#E5E7EB] sticky top-0 z-20 bg-white">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-[#2563EB] flex items-center justify-center">
                <Code2 className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="font-bold text-base text-[#0F172A] tracking-tight">
                SprintStack<span className="text-[#2563EB]">.digital</span>
              </span>
            </div>
            <button
              onClick={() => setDrawerOpen(false)}
              className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-[#475569] flex items-center justify-center transition-all cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Drawer Links */}
          <div className="p-5 space-y-6 flex-1">
            {/* Solutions */}
            <div className="space-y-1.5">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-blue-400/80 px-1 block">Solutions</span>
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
                  className="block px-3 py-2 rounded-lg text-sm text-[#475569] hover:text-[#0F172A] hover:bg-[#F8FAFC] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="h-px bg-[#E5E7EB]" />

            {/* Enterprise */}
            <div className="space-y-1">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#2563EB] px-1 block">Enterprise Software</span>
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
                  className="block px-3 py-2 rounded-lg text-sm text-[#475569] hover:text-[#0F172A] hover:bg-[#F8FAFC] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="h-px bg-[#E5E7EB]" />

            {/* Company */}
            <div className="space-y-1">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#64748B] px-1 block">Company</span>
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
                  className="block px-3 py-2 rounded-lg text-sm text-[#475569] hover:text-[#0F172A] hover:bg-[#F8FAFC] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Drawer Footer */}
          <div className="p-5 space-y-3 border-t border-[#E5E7EB] bg-[#F8FAFC]">
            <button
              onClick={() => { setDrawerOpen(false); openBookingModal(); }}
              className="btn-primary w-full inline-flex items-center justify-center gap-2 py-3 text-sm font-semibold cursor-pointer"
            >
              <span>Schedule a Technical Discovery</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Global Cmd+K */}
      <CommandPalette />
    </>
  );
}
