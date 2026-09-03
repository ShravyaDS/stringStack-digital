"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Code2,
  X,
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
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
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
      {/* ── TOP NAVIGATION BAR ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled || drawerOpen
            ? "glass-nav-scrolled py-2.5 sm:py-3"
            : "glass-nav py-3 sm:py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 sm:gap-4 lg:gap-6">

            {/* ── Logo ── */}
            <Link href="/" className="flex items-center gap-2.5 select-none shrink-0 group">
              <div className="relative w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all duration-300">
                <Code2 className="w-4 h-4 text-white" />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent" />
              </div>
              <div className="font-bold text-base sm:text-lg text-white tracking-tight whitespace-nowrap">
                SprintStack
                <span className="text-gradient-brand" style={{ fontStyle: "normal" }}>.digital</span>
              </div>
            </Link>

            {/* ── Desktop Navigation ── */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 shrink-0">
              {[
                { href: "/#solutions", label: "Solutions" },
                { href: "/#enterprise-solutions", label: "Enterprise", fullLabel: "Enterprise Software" },
                { href: "/#tech-stack", label: "Tech Stack" },
                { href: "/partners/white-label", label: "Partners", fullLabel: "White-Label & Partners" },
                { href: "/#process", label: "Process" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="nav-link px-3 py-2 rounded-lg hover:bg-white/5 whitespace-nowrap transition-colors"
                >
                  <span className="hidden xl:inline">{item.fullLabel || item.label}</span>
                  <span className="xl:hidden">{item.label}</span>
                </Link>
              ))}
            </nav>

            {/* ── Right Actions ── */}
            <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
              {/* Search */}
              <button
                onClick={triggerSearch}
                className="hidden 2xl:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/8 hover:bg-white/8 hover:border-white/12 text-sm text-[#A3A2B0] hover:text-white transition-all duration-200 cursor-pointer"
                title="Search (⌘K)"
              >
                <Search className="w-3.5 h-3.5" />
                <span className="text-xs">Search</span>
                <kbd className="px-1.5 py-0.5 rounded-md bg-white/8 text-[10px] font-mono text-[#6B6A78]">⌘K</kbd>
              </button>

              {/* Live Demos */}
              <button
                onClick={openDemoModal}
                className="hidden md:inline-flex items-center gap-1.5 text-sm font-medium text-[#A3A2B0] hover:text-white px-3 py-1.5 rounded-lg hover:bg-white/5 transition-all duration-200 cursor-pointer whitespace-nowrap"
              >
                <span className="hidden xl:inline">Live Product Demos</span>
                <span className="xl:hidden">Live Demos</span>
              </button>

              {/* Primary CTA */}
              <button
                onClick={openBookingModal}
                className="btn-primary inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white cursor-pointer whitespace-nowrap"
              >
                <span className="hidden xl:inline">Schedule Discovery</span>
                <span className="hidden sm:inline xl:hidden">Schedule</span>
                <span className="sm:hidden">Call</span>
              </button>

              {/* Mobile Hamburger */}
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setDrawerOpen((prev) => !prev);
                }}
                className={`flex items-center justify-center w-9 h-9 rounded-xl border cursor-pointer shrink-0 lg:hidden transition-all duration-200 ${
                  drawerOpen
                    ? "bg-blue-600/20 border-blue-500/50 text-blue-300"
                    : "bg-white/5 border-white/10 hover:border-white/18 text-[#94A3B8] hover:text-white"
                }`}
                aria-label={drawerOpen ? "Close menu" : "Open menu"}
                aria-expanded={drawerOpen}
              >
                <div className="w-4 h-3 relative flex flex-col justify-between pointer-events-none">
                  <span className={`block h-[1.5px] rounded bg-current transition-all duration-200 ${drawerOpen ? "rotate-45 translate-y-[5.5px] w-4" : "w-4"}`} />
                  <span className={`block h-[1.5px] rounded bg-current transition-all duration-200 ${drawerOpen ? "opacity-0 w-4" : "w-3"}`} />
                  <span className={`block h-[1.5px] rounded bg-current transition-all duration-200 ${drawerOpen ? "-rotate-45 -translate-y-[5.5px] w-4" : "w-4"}`} />
                </div>
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
          className={`fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity duration-300 ${
            drawerOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Drawer Panel */}
        <div
          className={`fixed top-0 left-0 bottom-0 w-full sm:w-[380px] max-w-[92vw] flex flex-col overflow-y-auto transition-transform duration-300 ease-out z-10 ${
            drawerOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          style={{
            background: "linear-gradient(180deg, #0C1220 0%, #090D16 100%)",
            borderRight: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "16px 0 64px rgba(0,0,0,0.7)",
          }}
        >
          {/* Drawer Header */}
          <div className="p-5 flex items-center justify-between sticky top-0 z-20"
            style={{ background: "rgba(9, 13, 22, 0.97)", borderBottom: "1px solid rgba(255,255,255,0.07)", backdropFilter: "blur(16px)" }}>
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <Code2 className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="font-bold text-base text-white tracking-tight">
                SprintStack<span className="text-gradient-brand">.digital</span>
              </span>
            </div>
            <button
              onClick={() => setDrawerOpen(false)}
              className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-[#A3A2B0] hover:text-white flex items-center justify-center transition-all cursor-pointer"
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
                  className="block px-3 py-2.5 rounded-xl text-sm text-[#A3A2B0] hover:text-white hover:bg-white/5 transition-all duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="h-px bg-white/6" />

            {/* Enterprise */}
            <div className="space-y-1.5">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-indigo-400/80 px-1 block">Enterprise Software</span>
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
                  className="block px-3 py-2.5 rounded-xl text-sm text-[#A3A2B0] hover:text-white hover:bg-white/5 transition-all duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="h-px bg-white/6" />

            {/* Company */}
            <div className="space-y-1.5">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#6B6A78] px-1 block">Company</span>
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
                  className="block px-3 py-2.5 rounded-xl text-sm text-[#A3A2B0] hover:text-white hover:bg-white/5 transition-all duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Drawer Footer */}
          <div className="p-5 space-y-3" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
            <button
              onClick={() => { setDrawerOpen(false); openBookingModal(); }}
              className="btn-primary w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white cursor-pointer"
            >
              <span>Schedule a Technical Discovery</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => { setDrawerOpen(false); openDemoModal(); }}
              className="btn-secondary w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium cursor-pointer"
            >
              Live Product Demos
            </button>
          </div>
        </div>
      </div>

      {/* Global Cmd+K */}
      <CommandPalette />
    </>
  );
}
