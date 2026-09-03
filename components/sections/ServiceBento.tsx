"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Code2,
  Smartphone,
  ShoppingBag,
  Workflow,
  ArrowRight,
} from "lucide-react";
import { CORE_CAPABILITIES } from "@/lib/constants";
import { useBookingModal } from "../ModalProvider";

const CARD_THEMES = [
  {
    Icon: Code2,
    iconClass: "icon-box-blue",
    accentBorder: "card-blue",
    accentText: "text-blue-400",
    accentHover: "hover:text-blue-300",
    glowClass: "hover-glow-blue",
    badgeBg: "rgba(59, 130, 246, 0.12)",
    badgeBorder: "rgba(59, 130, 246, 0.25)",
    badgeColor: "#93C5FD",
    linkColor: "#60A5FA",
    ctaLink: "/services/web-development",
    ctaLabel: "Deep Dive Architecture & Sprints",
    scopeLabel: "Scope Web Build",
  },
  {
    Icon: Smartphone,
    iconClass: "icon-box-cyan",
    accentBorder: "card-cyan",
    accentText: "text-cyan-400",
    accentHover: "hover:text-cyan-300",
    glowClass: "hover-glow-blue",
    badgeBg: "rgba(6, 182, 212, 0.12)",
    badgeBorder: "rgba(6, 182, 212, 0.25)",
    badgeColor: "#67E8F9",
    linkColor: "#22D3EE",
    ctaLink: "/services/mobile-apps",
    ctaLabel: "Explore Mobile Systems",
    scopeLabel: "Scope Mobile Build",
  },
  {
    Icon: ShoppingBag,
    iconClass: "icon-box-emerald",
    accentBorder: "card-emerald",
    accentText: "text-emerald-400",
    accentHover: "hover:text-emerald-300",
    glowClass: "hover-glow-emerald",
    badgeBg: "rgba(16, 185, 129, 0.12)",
    badgeBorder: "rgba(16, 185, 129, 0.25)",
    badgeColor: "#6EE7B7",
    linkColor: "#34D399",
    ctaLink: "/services/web-development",
    ctaLabel: "Explore Commerce Architecture",
    scopeLabel: "Scope Commerce Engine",
  },
  {
    Icon: Workflow,
    iconClass: "icon-box-violet",
    accentBorder: "card-violet",
    accentText: "text-indigo-400",
    accentHover: "hover:text-indigo-300",
    glowClass: "hover-glow-violet",
    badgeBg: "rgba(99, 102, 241, 0.12)",
    badgeBorder: "rgba(99, 102, 241, 0.25)",
    badgeColor: "#A5B4FC",
    linkColor: "#818CF8",
    ctaLink: "/services/web-development",
    ctaLabel: "Explore Middleware Pipeline",
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
    <section
      id="solutions"
      className="py-20 md:py-28 relative"
      style={{ background: "linear-gradient(180deg, #0E1623 0%, #090D16 100%)" }}
    >
      {/* Section glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(59,130,246,0.07) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* ── Section Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-4">
            <div className="section-label-blue section-label">
              What We Build
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1]">
              Core Engineering{" "}
              <span className="text-gradient-blue-violet">Capabilities</span>
            </h2>
          </div>
          <p className="text-[#A3A2B0] max-w-md text-sm sm:text-base leading-relaxed">
            From high-concurrency web platforms to native mobile apps and enterprise middleware — built by senior engineers on fixed weekly sprints.
          </p>
        </div>

        {/* ── 4 Capability Cards (2x2 grid) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
          {capabilities.map((cap, idx) => {
            const theme = CARD_THEMES[idx];
            return (
              <div
                key={cap.headline}
                className={`card-raised rounded-2xl ${theme.accentBorder} ${theme.glowClass} flex flex-col justify-between`}
                style={{ padding: "1.75rem" }}
              >
                <div className="space-y-5">
                  {/* Card header */}
                  <div className="flex items-center justify-between">
                    <div className={`icon-box ${theme.iconClass}`}>
                      <theme.Icon className="w-5 h-5" />
                    </div>
                    <span
                      className="text-[11px] font-semibold tracking-wider px-2.5 py-1 rounded-full"
                      style={{ background: theme.badgeBg, border: `1px solid ${theme.badgeBorder}`, color: theme.badgeColor }}
                    >
                      {cap.badge}
                    </span>
                  </div>

                  {/* Card content */}
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-widest text-[#6B6A78] block mb-1.5">
                      {cap.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2.5">
                      {cap.headline}
                    </h3>
                    <p className="text-[#A3A2B0] text-sm leading-relaxed">
                      {cap.description}
                    </p>
                  </div>

                  {/* Preview image */}
                  <div className="img-frame relative aspect-[16/9] w-full">
                    <Image
                      src={`/images/services/${idx === 0 ? "web-apps" : idx === 1 ? "mobile-apps" : idx === 2 ? "ecommerce" : "integrations"}.jpg`}
                      alt={cap.headline}
                      fill
                      className="object-cover"
                    />
                    {/* Subtle overlay */}
                    <div className="absolute inset-0 rounded-[inherit]"
                      style={{ background: "linear-gradient(to top, rgba(9,13,22,0.4), transparent 60%)" }} />
                  </div>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {cap.techStack.map((tech) => (
                      <span key={tech} className="tech-pill">{tech}</span>
                    ))}
                  </div>
                </div>

                {/* Card footer */}
                <div className="pt-5 mt-5 flex items-center justify-between"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                  <Link
                    href={theme.ctaLink}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold transition-colors group"
                    style={{ color: theme.linkColor }}
                  >
                    <span>{theme.ctaLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <button
                    onClick={openBookingModal}
                    className="btn-ghost text-xs px-3.5 py-1.5 rounded-lg cursor-pointer"
                    style={{ border: "1px solid rgba(255,255,255,0.08)" }}
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
