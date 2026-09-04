"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Activity,
  Layers,
  BarChart3,
  ArrowRight,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { ENTERPRISE_SOLUTIONS } from "@/lib/constants";
import { useBookingModal } from "../ModalProvider";

const PRODUCT_IMAGES = [
  {
    src: "/images/products/attendance-erp.jpg",
    alt: "SprintStack Attendance ERP OS Interface",
    caption: "Biometric Edge Sync & Geofenced Mobile Punch Terminal",
  },
  {
    src: "/images/products/project-governance.jpg",
    alt: "SprintStack Project Governance & Resource OS",
    caption: "Fixed-Price Sprint Burn Velocity & Milestone Health Monitor",
  },
  {
    src: "/images/products/custom-crm.jpg",
    alt: "SprintStack Custom CRM & Deal Routing Engine",
    caption: "Omnichannel Lead Ingestion & Sub-200ms Routing Topology",
  },
  {
    src: "/images/products/process-automation.jpg",
    alt: "SprintStack Process Telemetry & Compliance Node",
    caption: "Cryptographic Audit Trail & Real-time Webhook Mesh",
  },
];

const MODULE_ICONS = [
  ShieldCheck,
  BarChart3,
  Layers,
  Activity,
];

export function ProductShowcase() {
  const { openBookingModal } = useBookingModal();
  const [selectedModule, setSelectedModule] = useState(0);

  const flagship = ENTERPRISE_SOLUTIONS[0];
  const flagshipImage = PRODUCT_IMAGES[0];

  return (
    <section
      id="enterprise-solutions"
      className="py-28 lg:py-36 bg-[#090D16] border-t border-[#1F2937] relative overflow-hidden scroll-mt-24"
    >
      {/* Subtle radial spotlight glow */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-indigo-600/[0.06] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* ── Section Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2">
              <span className="section-label">Enterprise Software Systems</span>
              <span className="badge-emerald-proof">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                Production Ready
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-[-0.035em]">
              Enterprise Solutions &amp; Proprietary OS
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Battle-tested enterprise architectures deployed on-premise or cloud with complete intellectual property ownership.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={openBookingModal}
              className="btn-primary px-5 py-2.5 text-xs sm:text-sm font-semibold flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <span>Schedule Architecture Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ── Asymmetric Bento Grid: Flagship (8-col) + Satellite Solutions ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* ── CARD 1: FLAGSHIP ATTENDANCE ERP (8 Columns on Large) ── */}
          <div className="lg:col-span-8 bg-[#111827] border border-[#1F2937] rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-blue-500/50 hover:-translate-y-1 transition-all duration-300">
            {/* Top highlight */}
            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent pointer-events-none" />

            <div className="space-y-6">
              {/* Header row */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="badge-emerald-proof">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    {flagship.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{flagship.moduleNumber}</span>
                </div>
                <span className="text-xs font-mono text-blue-400">Deployed for 5,000+ Staff</span>
              </div>

              {/* Title & Summary */}
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-blue-300 transition-colors">
                  {flagship.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-300/85 leading-relaxed max-w-2xl">
                  {flagship.summary}
                </p>
              </div>

              {/* Browser Chrome Preview */}
              <div className="chrome-window bg-[#090D16] border border-[#1F2937] rounded-xl overflow-hidden shadow-2xl">
                <div className="px-3 py-2 bg-[#070B12] border-b border-[#1F2937] flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-slate-700" />
                    <div className="w-2 h-2 rounded-full bg-slate-700" />
                    <div className="w-2 h-2 rounded-full bg-slate-700" />
                  </div>
                  <div className="text-[10px] font-mono text-slate-400 truncate max-w-[260px]">
                    sprintstack://enterprise/attendance-erp
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Connected
                  </span>
                </div>

                <div className="relative aspect-[16/9] w-full bg-[#070B12] overflow-hidden">
                  <Image
                    src={flagshipImage.src}
                    alt={flagshipImage.alt}
                    fill
                    priority
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 65vw"
                  />
                </div>

                <div className="px-3 py-2 bg-[#070B12] border-t border-[#1F2937] flex items-center justify-between text-xs">
                  <span className="text-slate-400 text-[11px] truncate">{flagshipImage.caption}</span>
                  <span className="text-blue-400 font-mono text-[10px]">Active Production Build</span>
                </div>
              </div>

              {/* Features Checklist */}
              <div className="space-y-2.5">
                <span className="text-[11px] font-mono font-semibold uppercase tracking-widest text-slate-400 block">
                  Flagship Architecture Includes:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {flagship.keyFeatures.map((feat) => (
                    <div key={feat} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5 text-emerald-400" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Metrics Strip with Emerald proof values */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {Object.entries(flagship.technicalMetrics).map(([key, val]) => (
                  <div
                    key={key}
                    className="p-3 rounded-xl bg-[#090D16] border border-[#1F2937] space-y-1"
                  >
                    <div className="text-[10px] text-slate-400 uppercase font-mono tracking-wider truncate">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </div>
                    <div className="text-xs sm:text-sm font-bold font-mono text-emerald-400">
                      {val}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-6 mt-6 border-t border-[#1F2937] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <button
                onClick={openBookingModal}
                className="btn-primary px-5 py-2.5 text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Scope Attendance ERP System</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <Link
                href={flagship.link}
                className="btn-secondary px-4 py-2.5 text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Deep Technical Breakdown</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </Link>
            </div>
          </div>

          {/* ── CARD 2: PROJECT GOVERNANCE & RESOURCE OS (4 Columns on Large) ── */}
          {(() => {
            const sol = ENTERPRISE_SOLUTIONS[1];
            const img = PRODUCT_IMAGES[1];
            const Icon = MODULE_ICONS[1];
            return (
              <div className="lg:col-span-4 bg-[#111827] border border-[#1F2937] rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-xl relative overflow-hidden group hover:border-blue-500/50 hover:-translate-y-1 transition-all duration-300">
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-mono text-slate-400">{sol.moduleNumber}</span>
                    </div>
                    <span className="studio-pill font-mono text-[10px] text-blue-300">{sol.badge}</span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-blue-300 transition-colors">
                      {sol.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed">
                      {sol.summary}
                    </p>
                  </div>

                  {/* Image preview */}
                  <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-[#1F2937] bg-[#070B12]">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 35vw"
                    />
                  </div>

                  {/* Checklist */}
                  <div className="space-y-2">
                    {sol.keyFeatures.slice(0, 3).map((feat) => (
                      <div key={feat} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5 text-emerald-400" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(sol.technicalMetrics).slice(0, 2).map(([key, val]) => (
                      <div key={key} className="p-2.5 rounded-lg bg-[#090D16] border border-[#1F2937]">
                        <div className="text-[9px] text-slate-400 uppercase font-mono tracking-wider truncate">
                          {key.replace(/([A-Z])/g, " $1").trim()}
                        </div>
                        <div className="text-xs font-bold font-mono text-emerald-400 truncate">
                          {val}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-[#1F2937]">
                  <button
                    onClick={openBookingModal}
                    className="btn-secondary w-full py-2.5 text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
                  >
                    <span>Scope Governance OS</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })()}

          {/* ── CARD 3: CUSTOM CRM & DEAL ROUTING (5 Columns on Large) ── */}
          {(() => {
            const sol = ENTERPRISE_SOLUTIONS[2];
            const img = PRODUCT_IMAGES[2];
            const Icon = MODULE_ICONS[2];
            return (
              <div className="lg:col-span-5 bg-[#111827] border border-[#1F2937] rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-xl relative overflow-hidden group hover:border-blue-500/50 hover:-translate-y-1 transition-all duration-300">
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-mono text-slate-400">{sol.moduleNumber}</span>
                    </div>
                    <span className="studio-pill font-mono text-[10px] text-blue-300">{sol.badge}</span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-blue-300 transition-colors">
                      {sol.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed">
                      {sol.summary}
                    </p>
                  </div>

                  {/* Image preview */}
                  <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-[#1F2937] bg-[#070B12]">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>

                  {/* Key Features */}
                  <div className="space-y-2">
                    {sol.keyFeatures.slice(0, 3).map((feat) => (
                      <div key={feat} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5 text-emerald-400" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(sol.technicalMetrics).slice(0, 2).map(([key, val]) => (
                      <div key={key} className="p-2.5 rounded-lg bg-[#090D16] border border-[#1F2937]">
                        <div className="text-[9px] text-slate-400 uppercase font-mono tracking-wider truncate">
                          {key.replace(/([A-Z])/g, " $1").trim()}
                        </div>
                        <div className="text-xs font-bold font-mono text-emerald-400 truncate">
                          {val}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-[#1F2937]">
                  <button
                    onClick={openBookingModal}
                    className="btn-secondary w-full py-2.5 text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
                  >
                    <span>Scope Custom CRM</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })()}

          {/* ── CARD 4: PROCESS TELEMETRY & AUTOMATION (7 Columns on Large) ── */}
          {(() => {
            const sol = ENTERPRISE_SOLUTIONS[3];
            const img = PRODUCT_IMAGES[3];
            const Icon = MODULE_ICONS[3];
            return (
              <div className="lg:col-span-7 bg-[#111827] border border-[#1F2937] rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-xl relative overflow-hidden group hover:border-blue-500/50 hover:-translate-y-1 transition-all duration-300">
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-mono text-slate-400">{sol.moduleNumber}</span>
                    </div>
                    <span className="badge-emerald-proof text-[10px]">Cryptographic Audit SHA-256</span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-blue-300 transition-colors">
                      {sol.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed">
                      {sol.summary}
                    </p>
                  </div>

                  {/* Image preview */}
                  <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-[#1F2937] bg-[#070B12]">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 55vw"
                    />
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {sol.keyFeatures.map((feat) => (
                      <div key={feat} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5 text-emerald-400" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {Object.entries(sol.technicalMetrics).map(([key, val]) => (
                      <div key={key} className="p-2.5 rounded-lg bg-[#090D16] border border-[#1F2937]">
                        <div className="text-[9px] text-slate-400 uppercase font-mono tracking-wider truncate">
                          {key.replace(/([A-Z])/g, " $1").trim()}
                        </div>
                        <div className="text-xs font-bold font-mono text-emerald-400 truncate">
                          {val}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-[#1F2937] flex items-center justify-between gap-3">
                  <button
                    onClick={openBookingModal}
                    className="btn-primary px-4 sm:px-5 py-2.5 text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
                  >
                    <span>Scope Telemetry Platform</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-xs font-mono text-slate-400 hidden sm:inline">
                    RBAC &amp; SOC2 Compliant
                  </span>
                </div>
              </div>
            );
          })()}

        </div>

      </div>
    </section>
  );
}
