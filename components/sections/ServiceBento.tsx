"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Code2,
  Smartphone,
  ShoppingBag,
  Workflow,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Eye,
  EyeOff,
} from "lucide-react";
import { CORE_CAPABILITIES } from "@/lib/constants";
import { useBookingModal } from "../ModalProvider";

const CARD_CONFIG = [
  {
    Icon: Code2,
    ctaLink: "/services/web-development",
    ctaLabel: "Architecture & Sprints",
    scopeLabel: "Scope Web Build",
    imgSrc: "/images/services/web-apps.jpg",
  },
  {
    Icon: Smartphone,
    ctaLink: "/services/mobile-apps",
    ctaLabel: "Explore Mobile Systems",
    scopeLabel: "Scope Mobile Build",
    imgSrc: "/images/services/mobile-apps.jpg",
  },
  {
    Icon: ShoppingBag,
    ctaLink: "/services/web-development",
    ctaLabel: "Commerce Architecture",
    scopeLabel: "Scope Commerce Engine",
    imgSrc: "/images/services/ecommerce.jpg",
  },
  {
    Icon: Workflow,
    ctaLink: "/services/web-development",
    ctaLabel: "Middleware Pipeline",
    scopeLabel: "Scope Integration Build",
    imgSrc: "/images/services/integrations.jpg",
  },
];

export function ServiceBento() {
  const { openBookingModal } = useBookingModal();
  // Multi-open state: any number of cards can be open simultaneously
  const [openIndices, setOpenIndices] = useState<number[]>([0]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const capabilities = [
    CORE_CAPABILITIES[0],
    CORE_CAPABILITIES[1],
    CORE_CAPABILITIES[2],
    CORE_CAPABILITIES[3],
  ];

  const isAllOpen = openIndices.length === capabilities.length;

  const toggleAll = () => {
    if (isAllOpen) {
      setOpenIndices([]);
    } else {
      setOpenIndices(capabilities.map((_, i) => i));
    }
  };

  const handleToggle = (idx: number) => {
    const isCurrentlyOpen = openIndices.includes(idx);
    if (!isCurrentlyOpen) {
      setOpenIndices((prev) => [...prev, idx]);
      // When opening, smoothly bring this card into comfortable view below navbar
      setTimeout(() => {
        const el = cardRefs.current[idx];
        if (el) {
          const rect = el.getBoundingClientRect();
          const navHeight = 90;
          const targetY = window.scrollY + rect.top - navHeight - 12;
          window.scrollTo({ top: Math.max(0, targetY), behavior: "smooth" });
        }
      }, 50);
    } else {
      setOpenIndices((prev) => prev.filter((i) => i !== idx));
    }
  };

  return (
    <section
      id="solutions"
      className="py-16 lg:py-24 bg-[#F8FAFC] border-t border-[#E2E8F0] relative overflow-hidden scroll-mt-24"
    >
      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(228,230,234,0.45)_1px,transparent_1px),linear-gradient(to_bottom,rgba(228,230,234,0.45)_1px,transparent_1px)] [background-size:36px_36px] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_50%,black_20%,transparent_80%)] opacity-60 pointer-events-none" />
      {/* Soft brand ambient glow */}
      <div className="absolute -top-24 -left-20 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(37,99,235,0.08)_0%,transparent_70%)] blur-[80px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ── Section Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-5">
          <div className="space-y-2.5 max-w-2xl">
            <span className="section-label">What We Build</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
              Core Engineering Capabilities
            </h2>
            <p className="text-[#475569] text-sm sm:text-base leading-relaxed">
              From high-concurrency web platforms to native mobile apps and enterprise middleware — engineered by senior squads on fixed weekly sprints.
            </p>
          </div>

          {/* Master Expand / Collapse All Control */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={toggleAll}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-[#E2E8F0] bg-white hover:bg-slate-50 text-xs font-semibold text-[#334155] shadow-2xs transition-colors cursor-pointer"
            >
              {isAllOpen ? (
                <>
                  <EyeOff className="w-4 h-4 text-[#64748B]" />
                  <span>Collapse All</span>
                </>
              ) : (
                <>
                  <Eye className="w-4 h-4 text-[#2563EB]" />
                  <span>Expand All</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* ── Expandable Capability Cards (Guaranteed 100% visible, smoothly scrolls into view) ── */}
        <div className="space-y-4">
          {capabilities.map((cap, idx) => {
            const config = CARD_CONFIG[idx];
            const Icon = config.Icon;
            const isOpen = openIndices.includes(idx);

            return (
              <div
                key={cap.headline}
                ref={(el) => {
                  cardRefs.current[idx] = el;
                }}
                className={`rounded-2xl border bg-white transition-all duration-300 scroll-mt-28 overflow-hidden ${
                  isOpen
                    ? "border-blue-400 shadow-[0_12px_36px_rgba(37,99,235,0.12)] ring-1 ring-blue-500/15"
                    : "border-[#E2E8F0] shadow-[0_2px_8px_rgba(15,23,42,0.04)] hover:border-blue-200"
                }`}
              >
                {/* ── Card Header (Always visible, triggers expansion) ── */}
                <div
                  onClick={() => handleToggle(idx)}
                  className={`w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer select-none transition-colors border-l-4 ${
                    isOpen
                      ? "border-l-[#2563EB] bg-blue-50/25"
                      : "border-l-transparent hover:bg-slate-50/70"
                  }`}
                >
                  {/* Left: Icon + Title info */}
                  <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border transition-transform duration-200 ${
                        isOpen
                          ? "bg-blue-600 text-white border-blue-600 shadow-sm scale-105"
                          : "bg-blue-50 text-blue-600 border-blue-100"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="min-w-0">
                      <div className="text-xs font-semibold uppercase tracking-wider text-[#64748B] mb-0.5">
                        {cap.category}
                      </div>
                      <h3
                        className={`text-base sm:text-xl font-bold tracking-tight transition-colors truncate sm:whitespace-normal ${
                          isOpen ? "text-blue-600" : "text-[#0F172A]"
                        }`}
                      >
                        {cap.headline}
                      </h3>
                    </div>
                  </div>

                  {/* Right: Badge + Explicit Expand/Collapse Button */}
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="hidden sm:inline-flex text-[11px] font-semibold px-2.5 py-0.5 rounded-full border bg-blue-50 text-blue-700 border-blue-200/70">
                      {cap.badge}
                    </span>

                    {/* Expand / Collapse Icon Button */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleToggle(idx);
                      }}
                      className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center border transition-all duration-200 cursor-pointer ${
                        isOpen
                          ? "bg-blue-50 text-[#2563EB] border-blue-200 shadow-2xs scale-105"
                          : "bg-[#F8FAFC] text-[#64748B] border-[#E2E8F0] hover:bg-blue-50 hover:text-[#2563EB] hover:border-blue-200"
                      }`}
                      aria-expanded={isOpen}
                      aria-label={isOpen ? "Collapse details" : "Expand details"}
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-[#2563EB]" : "rotate-0 text-[#64748B]"
                        }`}
                      />
                    </button>
                  </div>
                </div>

                {/* ── Expanded Content (Rendered directly, always fully visible) ── */}
                {isOpen && (
                  <div className="p-5 sm:p-6 pt-3 sm:pt-4 border-t border-slate-100 animate-in fade-in duration-200">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
                      
                      {/* Left: Description + Tech Stack + CTAs */}
                      <div className="space-y-5">
                        <p className="text-[#475569] text-sm sm:text-base leading-relaxed">
                          {cap.description}
                        </p>

                        {/* Tech Stack */}
                        <div>
                          <div className="text-xs font-semibold uppercase tracking-wider text-[#64748B] mb-2">
                            Architecture &amp; Frameworks
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {cap.techStack.map((tech) => (
                              <span
                                key={tech}
                                className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-[#F1F5F9] text-[#334155] border border-[#E2E8F0] hover:bg-blue-50 hover:text-[#2563EB] hover:border-blue-200 transition-colors cursor-default"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* CTAs */}
                        <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3">
                          <button
                            onClick={openBookingModal}
                            className="btn-primary inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold cursor-pointer active:scale-95 transition-transform"
                          >
                            <span>{config.scopeLabel}</span>
                            <ArrowRight className="w-4 h-4" />
                          </button>
                          <Link
                            href={config.ctaLink}
                            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg border border-[#E2E8F0] bg-white hover:bg-blue-50 hover:border-blue-200 text-sm font-semibold text-[#334155] hover:text-[#2563EB] transition-all hover:translate-x-0.5"
                          >
                            <span>{config.ctaLabel}</span>
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>

                      {/* Right: Graphic Preview */}
                      <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-[#E2E8F0] bg-slate-100 shadow-sm">
                        <Image
                          src={config.imgSrc}
                          alt={cap.headline}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      </div>

                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
