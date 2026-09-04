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
      className="py-28 lg:py-36 bg-[#090D16] border-t border-white/[0.08] relative overflow-hidden scroll-mt-24"
    >
      {/* Soft ambient background glow */}
      <div className="absolute inset-0 section-radial-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ── Section Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-5">
          <div className="space-y-3 max-w-2xl">
            <span className="section-label">What We Build</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-[-0.03em]">
              Core Engineering Capabilities
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              From high-concurrency web platforms to native mobile apps and enterprise middleware — engineered by senior squads on fixed weekly sprints.
            </p>
          </div>

          {/* Master Expand / Collapse All Control */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={toggleAll}
              className="btn-secondary px-3.5 py-2 text-xs font-semibold cursor-pointer"
            >
              {isAllOpen ? (
                <>
                  <EyeOff className="w-4 h-4 text-slate-400 mr-1.5" />
                  <span>Collapse All</span>
                </>
              ) : (
                <>
                  <Eye className="w-4 h-4 text-blue-400 mr-1.5" />
                  <span>Expand All</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* ── Expandable Capability Cards ── */}
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
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-[#0E1626] border-blue-500/40 shadow-[0_8px_32px_rgba(0,0,0,0.5),0_0_24px_rgba(37,99,235,0.12)] ring-1 ring-blue-500/20"
                    : "bg-[#0E1626]/70 border-white/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.35)] hover:border-white/[0.18]"
                }`}
              >
                {/* ── Card Header Row ── */}
                <div
                  onClick={() => handleToggle(idx)}
                  className={`w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer select-none transition-colors border-l-4 ${
                    isOpen
                      ? "border-l-blue-500 bg-white/[0.02]"
                      : "border-l-transparent hover:bg-white/[0.02]"
                  }`}
                >
                  {/* Left: Icon + Title info */}
                  <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border transition-all duration-200 ${
                        isOpen
                          ? "bg-blue-600 text-white border-blue-500 shadow-[0_0_16px_rgba(37,99,235,0.4)]"
                          : "bg-blue-500/10 text-blue-400 border-blue-500/20"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="min-w-0">
                      <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-0.5">
                        {cap.category}
                      </div>
                      <h3 className="text-base sm:text-xl font-bold tracking-tight text-white truncate sm:whitespace-normal">
                        {cap.headline}
                      </h3>
                    </div>
                  </div>

                  {/* Right: Badge + Expand Button */}
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="hidden sm:inline-flex studio-pill font-mono text-[11px] text-blue-300 border-blue-500/20 bg-blue-500/10">
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
                          ? "bg-blue-500/20 text-blue-400 border-blue-500/30"
                          : "bg-white/[0.05] text-slate-400 border-white/[0.08] hover:text-white hover:border-white/[0.16]"
                      }`}
                      aria-expanded={isOpen}
                      aria-label={isOpen ? "Collapse details" : "Expand details"}
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-blue-400" : "rotate-0 text-slate-400"
                        }`}
                      />
                    </button>
                  </div>
                </div>

                {/* ── Expanded Content ── */}
                {isOpen && (
                  <div className="p-5 sm:p-6 pt-3 sm:pt-4 border-t border-white/[0.08] animate-in fade-in duration-200">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
                      
                      {/* Left: Description + Tech Stack + CTAs */}
                      <div className="space-y-5">
                        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                          {cap.description}
                        </p>

                        {/* Tech Stack */}
                        <div>
                          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-2">
                            Architecture &amp; Frameworks
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {cap.techStack.map((tech) => (
                              <span
                                key={tech}
                                className="studio-pill font-mono text-xs cursor-default"
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
                            className="btn-secondary inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-semibold cursor-pointer active:scale-95 transition-transform"
                          >
                            <span>{config.ctaLabel}</span>
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>

                      {/* Right: Graphic Preview */}
                      <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-white/[0.10] bg-[#070B12] shadow-2xl">
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
