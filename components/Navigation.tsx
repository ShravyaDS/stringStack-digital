"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Code2,
  X,
  ArrowRight,
  Search,
} from "lucide-react";
import { Button } from "./ui/Button";
import { useBookingModal } from "./ModalProvider";
import { CommandPalette } from "./CommandPalette";

export function Navigation() {
  const pathname = usePathname();
  const { openBookingModal, openDemoModal } = useBookingModal();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
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
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [drawerOpen]);

  const triggerSearch = () => {
    window.dispatchEvent(
      new KeyboardEvent("keydown", { key: "k", ctrlKey: true, metaKey: true, bubbles: true })
    );
  };

  return (
    <>
      {/* TOP NAVIGATION BAR — RESPONSIVE, UNCLIPPED & SINGLE-LINE */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          scrolled || drawerOpen
            ? "bg-[#070A12]/95 backdrop-blur-md border-b border-slate-800 shadow-lg shadow-black/40 py-2.5 sm:py-3"
            : "bg-[#070A12]/85 backdrop-blur-sm border-b border-slate-800/80 py-3 sm:py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 sm:gap-4 lg:gap-6 whitespace-nowrap">
            {/* Left: Brand Logo */}
            <Link href="/" className="flex items-center gap-2.5 select-none shrink-0 group whitespace-nowrap">
              <div className="w-8 h-8 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-cyan-400 group-hover:border-cyan-500/40 transition-colors shrink-0">
                <Code2 className="w-4 h-4" />
              </div>
              <div className="font-mono text-base sm:text-lg font-bold text-white tracking-tight whitespace-nowrap">
                SprintStack<span className="text-cyan-400">.digital</span>
              </div>
            </Link>

            {/* Center: Clean Text Navigation (Responsive Labels, Never Clips) */}
            <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-xs xl:text-sm font-medium text-slate-300 whitespace-nowrap shrink-0">
              <Link
                href="/#solutions"
                className="hover:text-white transition-colors whitespace-nowrap py-1"
              >
                Solutions
              </Link>
              <Link
                href="/#enterprise-solutions"
                className="hover:text-white transition-colors whitespace-nowrap py-1"
              >
                <span className="hidden xl:inline">Enterprise Software</span>
                <span className="xl:hidden">Enterprise</span>
              </Link>
              <Link
                href="/#tech-stack"
                className="hover:text-white transition-colors whitespace-nowrap py-1"
              >
                Tech Stack
              </Link>
              <Link
                href="/partners/white-label"
                className="hover:text-white transition-colors whitespace-nowrap py-1"
              >
                <span className="hidden xl:inline">White-Label &amp; Partners</span>
                <span className="xl:hidden">Partners</span>
              </Link>
              <Link
                href="/#process"
                className="hover:text-white transition-colors whitespace-nowrap py-1"
              >
                Process
              </Link>
            </nav>

            {/* Right: Clean Action Buttons (Guaranteed Never to Clip) */}
            <div className="flex items-center gap-2 sm:gap-2.5 shrink-0 whitespace-nowrap">
              {/* Minimal Search Button */}
              <button
                onClick={triggerSearch}
                className="hidden 2xl:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-slate-800 hover:border-slate-700 bg-slate-900/60 text-slate-400 hover:text-white transition-colors text-xs font-mono cursor-pointer whitespace-nowrap shrink-0"
                title="Search systems and services (⌘K)"
              >
                <Search className="w-3.5 h-3.5" />
                <span>Search</span>
                <kbd className="px-1 py-0.5 rounded bg-slate-800 text-[10px] text-slate-400">⌘K</kbd>
              </button>

              {/* Live Product Demos Button */}
              <button
                onClick={openDemoModal}
                className="hidden md:inline-flex text-xs font-medium text-slate-300 hover:text-white px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                <span className="hidden xl:inline">Live Product Demos</span>
                <span className="xl:hidden">Live Demos</span>
              </button>

              {/* Schedule Discovery CTA (Responsive Text to Prevent Collapsing) */}
              <Button
                onClick={openBookingModal}
                variant="primary"
                size="sm"
                className="text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white px-3.5 sm:px-4 py-2 rounded-lg transition-colors shadow-none whitespace-nowrap shrink-0"
              >
                <span className="hidden xl:inline">Schedule a Technical Discovery</span>
                <span className="hidden sm:inline xl:hidden">Schedule Discovery</span>
                <span className="sm:hidden">Discovery</span>
              </Button>

              {/* Clean Hamburger Menu Button for Mobile & Tablets */}
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setDrawerOpen((prev) => !prev);
                }}
                className={`flex items-center gap-2 p-2 rounded-lg border text-xs font-medium transition-colors cursor-pointer shrink-0 lg:hidden ${
                  drawerOpen
                    ? "bg-slate-800 border-cyan-500 text-cyan-400"
                    : "bg-slate-900 border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white"
                }`}
                aria-label={drawerOpen ? "Close menu" : "Open menu"}
                aria-expanded={drawerOpen}
              >
                <div className="w-4 h-3 relative flex flex-col justify-between items-start pointer-events-none">
                  <span
                    className={`h-[1.5px] rounded bg-current transition-all duration-200 origin-left ${
                      drawerOpen ? "w-[15px] rotate-45 translate-y-[1px]" : "w-4"
                    }`}
                  />
                  <span
                    className={`h-[1.5px] rounded bg-current transition-all duration-200 origin-left ${
                      drawerOpen ? "w-[15px] -rotate-45 -translate-y-[1px]" : "w-3"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* SLIDE-OUT NAVIGATION DRAWER */}
      <div
        className={`fixed inset-0 z-50 ${
          drawerOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!drawerOpen}
      >
        {/* Dark Backdrop Scrim */}
        <div
          onClick={() => setDrawerOpen(false)}
          className={`fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-200 ease-in-out ${
            drawerOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Drawer Panel */}
        <div
          className={`fixed top-0 left-0 bottom-0 w-full sm:w-[400px] max-w-[90vw] bg-[#070A12] border-r border-slate-800 shadow-2xl flex flex-col justify-between overflow-y-auto transition-transform duration-200 ease-out z-10 ${
            drawerOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Drawer Header */}
          <div className="p-5 border-b border-slate-800 flex items-center justify-between sticky top-0 bg-[#070A12] z-20">
            <div className="flex items-center gap-2.5 font-mono">
              <span className="font-bold text-base text-white">
                SprintStack<span className="text-cyan-400">.digital</span>
              </span>
            </div>

            <button
              onClick={() => setDrawerOpen(false)}
              className="p-1.5 rounded-lg border border-slate-800 hover:border-slate-700 bg-slate-900 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Drawer Links */}
          <div className="p-6 space-y-6 flex-1 overflow-y-auto">
            {/* Solutions */}
            <div className="space-y-2">
              <Link
                href="/#solutions"
                onClick={() => setDrawerOpen(false)}
                className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block hover:text-cyan-300"
              >
                Solutions
              </Link>
              <div className="space-y-1 pl-2 border-l border-slate-800">
                <Link
                  href="/services/web-development"
                  onClick={() => setDrawerOpen(false)}
                  className="block py-1.5 text-sm text-slate-300 hover:text-white transition-colors"
                >
                  Web Applications &amp; Platforms
                </Link>
                <Link
                  href="/services/mobile-apps"
                  onClick={() => setDrawerOpen(false)}
                  className="block py-1.5 text-sm text-slate-300 hover:text-white transition-colors"
                >
                  Native &amp; Cross-Platform Mobile Apps
                </Link>
                <Link
                  href="/#solutions"
                  onClick={() => setDrawerOpen(false)}
                  className="block py-1.5 text-sm text-slate-300 hover:text-white transition-colors"
                >
                  E-commerce &amp; Omnichannel Commerce
                </Link>
                <Link
                  href="/#solutions"
                  onClick={() => setDrawerOpen(false)}
                  className="block py-1.5 text-sm text-slate-300 hover:text-white transition-colors"
                >
                  System Integrations &amp; Middleware
                </Link>
              </div>
            </div>

            {/* Enterprise Software */}
            <div className="space-y-2">
              <Link
                href="/#enterprise-solutions"
                onClick={() => setDrawerOpen(false)}
                className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block hover:text-emerald-300"
              >
                Enterprise Software
              </Link>
              <div className="space-y-1 pl-2 border-l border-slate-800">
                <Link
                  href="/products/attendance-erp"
                  onClick={() => setDrawerOpen(false)}
                  className="block py-1.5 text-sm text-slate-300 hover:text-white transition-colors"
                >
                  Attendance &amp; Workforce ERP
                </Link>
                <Link
                  href="/#enterprise-solutions"
                  onClick={() => setDrawerOpen(false)}
                  className="block py-1.5 text-sm text-slate-300 hover:text-white transition-colors"
                >
                  Project &amp; Resource Governance
                </Link>
                <Link
                  href="/#enterprise-solutions"
                  onClick={() => setDrawerOpen(false)}
                  className="block py-1.5 text-sm text-slate-300 hover:text-white transition-colors"
                >
                  Custom CRM &amp; Lead Engine
                </Link>
                <Link
                  href="/#enterprise-solutions"
                  onClick={() => setDrawerOpen(false)}
                  className="block py-1.5 text-sm text-slate-300 hover:text-white transition-colors"
                >
                  Business Process Automation
                </Link>
              </div>
            </div>

            {/* Company & Process */}
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block">
                Company &amp; Process
              </span>
              <div className="space-y-1 pl-2 border-l border-slate-800">
                <Link
                  href="/#tech-stack"
                  onClick={() => setDrawerOpen(false)}
                  className="block py-1.5 text-sm text-slate-300 hover:text-white transition-colors"
                >
                  Technology Stack
                </Link>
                <Link
                  href="/partners/white-label"
                  onClick={() => setDrawerOpen(false)}
                  className="block py-1.5 text-sm text-slate-300 hover:text-white transition-colors"
                >
                  White-Label &amp; Partners
                </Link>
                <Link
                  href="/#process"
                  onClick={() => setDrawerOpen(false)}
                  className="block py-1.5 text-sm text-slate-300 hover:text-white transition-colors"
                >
                  Delivery Process
                </Link>
                <Link
                  href="/privacy"
                  onClick={() => setDrawerOpen(false)}
                  className="block py-1.5 text-sm text-slate-300 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  onClick={() => setDrawerOpen(false)}
                  className="block py-1.5 text-sm text-slate-300 hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>

          {/* Drawer Footer Actions */}
          <div className="p-5 border-t border-slate-800 space-y-3 bg-[#070A12]">
            <Button
              onClick={() => {
                setDrawerOpen(false);
                openBookingModal();
              }}
              variant="primary"
              size="lg"
              className="w-full justify-center text-xs font-semibold bg-blue-600 hover:bg-blue-500 py-3 rounded-lg"
            >
              <span>Schedule a Technical Discovery</span>
              <ArrowRight className="w-4 h-4" />
            </Button>

            <Button
              onClick={() => {
                setDrawerOpen(false);
                openDemoModal();
              }}
              variant="outline"
              size="sm"
              className="w-full justify-center text-xs font-medium border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white rounded-lg py-2"
            >
              <span>Live Product Demos</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Global Cmd+K Command Palette */}
      <CommandPalette />
    </>
  );
}
