"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Fingerprint,
  BarChart3,
  Users,
  Activity,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { ENTERPRISE_SOLUTIONS } from "@/lib/constants";
import { useBookingModal } from "../ModalProvider";

const PRODUCT_IMAGES = [
  {
    src: "/images/products/attendance-erp.jpg",
    alt: "Attendance & Workforce Management ERP Dashboard",
    caption: "Enterprise Workforce OS • Live GPS Geofence & Biometric Sync",
  },
  {
    src: "/images/products/project-governance.jpg",
    alt: "Project Management & Resource Governance Dashboard",
    caption: "Portfolio Governance • Milestone Gantt & Capacity Heatmaps",
  },
  {
    src: "/images/products/custom-crm.jpg",
    alt: "Custom CRM & Lead Operations Engine",
    caption: "LeadFlow Ops • WhatsApp & Multi-Channel Deal Pipeline",
  },
  {
    src: "/images/products/process-automation.jpg",
    alt: "Business Process Automation & Telemetry Console",
    caption: "Telemetry Console • Event Triggers & Immutable Audit Trails",
  },
];

const MODULE_THEMES = [
  {
    Icon: Fingerprint,
    iconClass: "icon-box-emerald",
    badgeBg: "rgba(16, 185, 129, 0.12)",
    badgeBorder: "rgba(16, 185, 129, 0.25)",
    badgeColor: "#6EE7B7",
    activeTab: "rgba(16, 185, 129, 0.15)",
    activeTabBorder: "rgba(16, 185, 129, 0.4)",
    metricColor: "#34D399",
    btnClass: "btn-emerald",
  },
  {
    Icon: BarChart3,
    iconClass: "icon-box-blue",
    badgeBg: "rgba(59, 130, 246, 0.12)",
    badgeBorder: "rgba(59, 130, 246, 0.25)",
    badgeColor: "#93C5FD",
    activeTab: "rgba(59, 130, 246, 0.12)",
    activeTabBorder: "rgba(59, 130, 246, 0.35)",
    metricColor: "#60A5FA",
    btnClass: "btn-primary",
  },
  {
    Icon: Users,
    iconClass: "icon-box-violet",
    badgeBg: "rgba(124, 58, 237, 0.12)",
    badgeBorder: "rgba(124, 58, 237, 0.25)",
    badgeColor: "#A5B4FC",
    activeTab: "rgba(124, 58, 237, 0.12)",
    activeTabBorder: "rgba(124, 58, 237, 0.35)",
    metricColor: "#818CF8",
    btnClass: "btn-primary",
  },
  {
    Icon: Activity,
    iconClass: "icon-box-cyan",
    badgeBg: "rgba(6, 182, 212, 0.12)",
    badgeBorder: "rgba(6, 182, 212, 0.25)",
    badgeColor: "#67E8F9",
    activeTab: "rgba(6, 182, 212, 0.1)",
    activeTabBorder: "rgba(6, 182, 212, 0.3)",
    metricColor: "#22D3EE",
    btnClass: "btn-primary",
  },
];

export function ProductShowcase() {
  const { openBookingModal } = useBookingModal();
  const [activeModuleIndex, setActiveModuleIndex] = useState(0);

  const activeModule = ENTERPRISE_SOLUTIONS[activeModuleIndex];
  const activeImage = PRODUCT_IMAGES[activeModuleIndex];
  const theme = MODULE_THEMES[activeModuleIndex];

  return (
    <section
      id="enterprise-solutions"
      className="py-20 md:py-28 relative"
      style={{ background: "linear-gradient(180deg, #090D16 0%, #0E1623 100%)" }}
    >
      {/* Section ambient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse 50% 35% at 50% 0%, rgba(16,185,129,0.06) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="flex items-center justify-center">
            <span className="section-label-emerald section-label">
              Proprietary Business Platforms
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1]">
            Enterprise{" "}
            <span className="text-gradient-emerald">Solutions</span>
          </h2>
          <p className="text-[#A3A2B0] text-base leading-relaxed">
            Mission-critical software systems tailored to your exact operational workflows — deployed on modern cloud infrastructure with zero recurring license lock-in.
          </p>
        </div>

        {/* ── Module Tab Selector ── */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-10">
          {ENTERPRISE_SOLUTIONS.map((mod, index) => {
            const isSelected = activeModuleIndex === index;
            const t = MODULE_THEMES[index];
            return (
              <button
                key={mod.id}
                onClick={() => setActiveModuleIndex(index)}
                className="flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-xl text-sm font-medium cursor-pointer transition-all duration-250"
                style={{
                  background: isSelected ? t.activeTab : "rgba(255,255,255,0.04)",
                  border: `1px solid ${isSelected ? t.activeTabBorder : "rgba(255,255,255,0.08)"}`,
                  color: isSelected ? "#F4F3F8" : "#A3A2B0",
                }}
              >
                <t.Icon className="w-4 h-4 shrink-0" style={{ color: isSelected ? t.metricColor : "#6B6A78" }} />
                <span>{mod.title}</span>
              </button>
            );
          })}
        </div>

        {/* ── Main Showcase Area ── */}
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center rounded-2xl p-6 sm:p-8 lg:p-10"
          style={{
            background: "linear-gradient(135deg, rgba(22,32,50,0.6) 0%, rgba(14,20,36,0.8) 100%)",
            border: "1px solid rgba(255,255,255,0.09)",
            boxShadow: "0 8px 40px rgba(0,0,0,0.4)",
          }}
        >
          {/* Left Column: Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              {/* Badge */}
              <div className="flex items-center gap-2.5">
                <span
                  className="text-[11px] font-semibold tracking-wider px-2.5 py-1 rounded-full"
                  style={{ background: theme.badgeBg, border: `1px solid ${theme.badgeBorder}`, color: theme.badgeColor }}
                >
                  {activeModule.badge}
                </span>
                <span className="text-xs text-[#6B6A78]">{activeModule.moduleNumber}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
                {activeModule.title}
              </h3>
              <p className="text-sm sm:text-base text-[#A3A2B0] leading-relaxed">
                {activeModule.summary}
              </p>
            </div>

            {/* Features checklist */}
            <div className="space-y-2.5">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#6B6A78] block">
                What this system includes:
              </span>
              <div className="space-y-2">
                {activeModule.keyFeatures.map((feat) => (
                  <div key={feat} className="flex items-start gap-2.5 text-sm text-[#D4D3E0]">
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: theme.metricColor }} />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical metrics */}
            <div className="grid grid-cols-2 gap-3">
              {Object.entries(activeModule.technicalMetrics).map(([key, val]) => (
                <div
                  key={key}
                  className="p-3.5 rounded-xl space-y-1"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <div className="text-[10px] text-[#6B6A78] uppercase tracking-wider">
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </div>
                  <div className="text-sm font-bold font-mono" style={{ color: theme.metricColor }}>
                    {val}
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={openBookingModal}
                className={`${theme.btnClass} inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white cursor-pointer`}
              >
                <span>Scope {activeModule.title.split(" ")[0]} System</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link href={activeModule.link}>
                <button className="btn-secondary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-medium cursor-pointer">
                  Technical Breakdown
                </button>
              </Link>
            </div>
          </div>

          {/* Right Column: Screenshot (7 cols) */}
          <div className="lg:col-span-7">
            <div className="img-frame relative group overflow-hidden">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={activeImage.src}
                  alt={activeImage.alt}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(15,14,28,0.5), transparent 50%)" }} />
              </div>

              {/* Caption bar */}
              <div
                className="px-4 py-3 flex items-center justify-between text-xs"
                style={{
                  background: "rgba(14,20,36,0.95)",
                  borderTop: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <span className="text-[#A3A2B0] font-medium truncate pr-2">{activeImage.caption}</span>
                <span className="flex items-center gap-1.5 shrink-0 text-emerald-400 font-semibold">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                  </span>
                  Live Platform Preview
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
