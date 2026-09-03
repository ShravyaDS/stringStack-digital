"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Code2, Smartphone, ShoppingBag, Workflow } from "lucide-react";
import { CORE_CAPABILITIES } from "@/lib/constants";
import { useBookingModal } from "../ModalProvider";

const CARD_THEMES = [
  {
    Icon: Code2,
    accentColor: "bg-blue-600",
    iconBg: "bg-blue-50 text-blue-600 border-blue-100",
    badgeBg: "bg-blue-50 text-blue-700 border-blue-200/70",
    ctaLink: "/services/web-development",
    ctaLabel: "Architecture & Sprints",
    scopeLabel: "Scope Web Build",
  },
  {
    Icon: Smartphone,
    accentColor: "bg-indigo-600",
    iconBg: "bg-indigo-50 text-indigo-600 border-indigo-100",
    badgeBg: "bg-indigo-50 text-indigo-700 border-indigo-200/70",
    ctaLink: "/services/mobile-apps",
    ctaLabel: "Explore Mobile Systems",
    scopeLabel: "Scope Mobile Build",
  },
  {
    Icon: ShoppingBag,
    accentColor: "bg-violet-600",
    iconBg: "bg-violet-50 text-violet-600 border-violet-100",
    badgeBg: "bg-violet-50 text-violet-700 border-violet-200/70",
    ctaLink: "/services/web-development",
    ctaLabel: "Commerce Architecture",
    scopeLabel: "Scope Commerce Engine",
  },
  {
    Icon: Workflow,
    accentColor: "bg-cyan-600",
    iconBg: "bg-cyan-50 text-cyan-600 border-cyan-100",
    badgeBg: "bg-cyan-50 text-cyan-700 border-cyan-200/70",
    ctaLink: "/services/web-development",
    ctaLabel: "Middleware Pipeline",
    scopeLabel: "Scope Integration Build",
  },
];

export function ServiceBento() {
  const { openBookingModal } = useBookingModal();

  const capabilities = [
    CORE_CAPABILITIES[0],
    CORE_CAPABILITIES[1],
    CORE_CAPABILITIES[2],
    CORE_CAPABILITIES[3],
  ];

  return (
    <section id="solutions" className="py-20 lg:py-28 bg-[#FAFAF8] border-t border-[#E2E8F0] relative overflow-hidden">
      {/* ── Aesthetic Architectural Wireframe Background (like TechMatrix) ── */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
        <Image
          src="/images/tech-stack/tech-stack-bg.jpg"
          alt="Engineering Architectural Blueprint"
          fill
          priority={false}
          className="object-cover object-center opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAF8]/90 via-[#FAFAF8]/60 to-[#FAFAF8]/90" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(228,230,234,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(228,230,234,0.5)_1px,transparent_1px)] [background-size:36px_36px] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_50%,black_25%,transparent_80%)] opacity-65" />
      </div>

      {/* Soft "Color Bleed" Glow Effect (One Side Only — Top-Left Soft Bleed) */}
      <div className="absolute -top-24 -left-20 w-[550px] h-[550px] bg-[radial-gradient(circle,rgba(37,99,235,0.14)_0%,rgba(99,102,241,0.08)_40%,transparent_70%)] blur-[90px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ── Section Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 scroll-reveal">
          <div className="space-y-3">
            <span className="section-label">What We Build</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
              Core Engineering Capabilities
            </h2>
          </div>
          <p className="text-[#475569] max-w-md text-sm sm:text-base leading-relaxed">
            From high-concurrency web platforms to native mobile apps and enterprise middleware — built by senior engineers on fixed weekly sprints.
          </p>
        </div>

        {/* ── 4 Capability Cards with Rich Accent Visuals ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 scroll-stagger">
          {capabilities.map((cap, idx) => {
            const theme = CARD_THEMES[idx];
            return (
              <div
                key={cap.headline}
                className="bg-white rounded-2xl border border-[#E2E8F0] hover:border-[#CBD5E1] p-6 sm:p-7 shadow-[0_4px_16px_rgba(15,23,42,0.04)] card-interactive flex flex-col justify-between group transition-all duration-200 relative overflow-hidden"
              >
                {/* Top colored accent line */}
                <div className={`absolute top-0 left-0 right-0 h-1 ${theme.accentColor}`} />

                <div className="space-y-5 pt-1">
                  {/* Card Header: Rich Icon + Badge */}
                  <div className="flex items-center justify-between">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-transform duration-200 group-hover:scale-105 ${theme.iconBg}`}>
                      <theme.Icon className="w-5 h-5" />
                    </div>
                    <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${theme.badgeBg}`}>
                      {cap.badge}
                    </span>
                  </div>

                  {/* Headline & Description */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight mb-2 group-hover:text-blue-600 transition-colors duration-200">
                      {cap.headline}
                    </h3>
                    <p className="text-[#475569] text-sm leading-relaxed">
                      {cap.description}
                    </p>
                  </div>

                  {/* Preview Image with subtle zoom on hover */}
                  <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-[#E2E8F0] bg-slate-100">
                    <Image
                      src={`/images/services/${idx === 0 ? "web-apps" : idx === 1 ? "mobile-apps" : idx === 2 ? "ecommerce" : "integrations"}.jpg`}
                      alt={cap.headline}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cap.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-[#F1F5F9] text-[#334155] border border-[#E2E8F0]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card footer */}
                <div className="pt-5 mt-5 flex items-center justify-between border-t border-[#F1F5F9]">
                  <Link
                    href={theme.ctaLink}
                    className="text-xs font-semibold text-[#2563EB] hover:text-[#1D4ED8] transition-colors"
                  >
                    {theme.ctaLabel}
                  </Link>
                  <button
                    onClick={openBookingModal}
                    className="text-xs font-semibold px-3.5 py-1.5 rounded-lg bg-[#F8FAFC] hover:bg-[#EEF2FF] hover:text-[#2563EB] text-[#334155] border border-[#E2E8F0] hover:border-blue-200 cursor-pointer transition-colors"
                  >
                    {theme.scopeLabel}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
