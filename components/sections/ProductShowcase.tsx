"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck, CheckCircle2, Activity, Layers, BarChart3,
  ArrowRight, ExternalLink, Terminal, Cpu, Database, Play, Sparkles,
  Server, Lock, Globe, Zap, Radio, Check
} from "lucide-react";
import { ENTERPRISE_SOLUTIONS } from "@/lib/constants";
import { useBookingModal } from "../ModalProvider";
import { LiveDemoModal } from "../LiveDemoModal";

/* Product Screenshots, endpoints, and floating feature tags */
const PRODUCT_SYSTEMS = [
  {
    id: "attendance-erp",
    defaultTab: "attendance" as const,
    title: "Enterprise Attendance & Workforce ERP",
    shortTitle: "Attendance ERP",
    subtitle: "Biometric Hardware Sync · Geofenced Mobile Punch · Statutory Payroll Sync",
    badge: "Flagship Suite",
    moduleNo: "MOD-01",
    accent: "59,130,246", // Blue
    accentName: "blue",
    imgSrc: "/images/products/attendance-erp.jpg",
    endpoint: "os.sprintstack.digital/erp/attendance-v4.2",
    kpi: "< 0.4s Edge Punch",
    floatingBadges: [
      { text: "ARM TrustZone Liveness AI", icon: ShieldCheck },
      { text: "ZKTeco & Suprema TCP/IP Sync", icon: Server },
      { text: "Multi-Location GPS Polygon", icon: Globe },
    ],
    features: [
      "Sub-second multi-branch biometric device hardware sync (TCP/IP & MQTT).",
      "GPS polygon geofencing with anti-spoof IP restriction & mock-location defense.",
      "Multi-tier shift scheduling, overtime matrices, and leave approval workflows.",
      "Direct payroll export integration for SAP, Oracle, QuickBooks, and ADP.",
    ],
    metrics: [
      { label: "Punch Latency", val: "< 0.4s", sub: "P99 sub-second" },
      { label: "Hardware Sync", val: "TCP/IP & MQTT", sub: "Real-time edge" },
      { label: "Spoof Defense", val: "TrustZone AI", sub: "100% Anti-Proxy" },
      { label: "Payroll Sync", val: "SAP & Oracle", sub: "Instant ledger" },
    ],
  },
  {
    id: "project-governance",
    defaultTab: "governance" as const,
    title: "Project Management & Resource Governance OS",
    shortTitle: "Governance OS",
    subtitle: "Milestone Sprint Velocity · Capacity Heatmaps · Real-time Profit Margins",
    badge: "Operations OS",
    moduleNo: "MOD-02",
    accent: "99,102,241", // Indigo
    accentName: "indigo",
    imgSrc: "/images/products/project-governance.jpg",
    endpoint: "os.sprintstack.digital/governance/pipeline-matrix",
    kpi: "120 FPS Gantt",
    floatingBadges: [
      { text: "Sub-Second Ledger Sync", icon: Zap },
      { text: "Interactive 120 FPS Canvas", icon: Activity },
      { text: "99.98% Margin Precision", icon: BarChart3 },
    ],
    features: [
      "Interactive 120 FPS canvas Gantt engine with automatic dependency resolution.",
      "Resource allocation matrices and real-time team capacity heatmaps.",
      "Automated milestone sign-off workflows with client deliverable approval gates.",
      "Real-time budget burn tracking with integrated milestone invoicing.",
    ],
    metrics: [
      { label: "Ledger Sync", val: "< 180ms", sub: "Sub-second ledger" },
      { label: "Gantt Canvas", val: "120 FPS", sub: "GPU Accelerated" },
      { label: "Margin Precision", val: "99.98%", sub: "Forecast accuracy" },
      { label: "Sign-Off Gates", val: "Automated", sub: "Zero bottleneck" },
    ],
  },
  {
    id: "custom-crm",
    defaultTab: "crm" as const,
    title: "Custom CRM & Lead Operations Engine",
    shortTitle: "Custom CRM",
    subtitle: "Omnichannel Lead Ingestion · Sub-200ms Routing · Instant PDF Quotations",
    badge: "High-Conversion",
    moduleNo: "MOD-03",
    accent: "139,92,246", // Purple
    accentName: "purple",
    imgSrc: "/images/products/custom-crm.jpg",
    endpoint: "os.sprintstack.digital/crm/conversion-pipeline",
    kpi: "< 150ms Ingest",
    floatingBadges: [
      { text: "Omnichannel Lead Ingestion", icon: Radio },
      { text: "Territory & Skill Routing", icon: Layers },
      { text: "0.8s High-Res PDF Rendering", icon: Cpu },
    ],
    features: [
      "Multi-channel lead ingestion from Web, WhatsApp Business, Email, and Ads.",
      "Automated skill & territory weighted routing with deal aging escalation triggers.",
      "Built-in PDF contract, estimate, and commercial quotation generation.",
      "Complete client interaction timeline telemetry and engagement scoring.",
    ],
    metrics: [
      { label: "Ingestion Speed", val: "< 150ms", sub: "Instant sync" },
      { label: "Routing Matrix", val: "Skill Weighted", sub: "Dynamic dispatch" },
      { label: "PDF Engine", val: "< 0.8s", sub: "High-res renderer" },
      { label: "Deal SLA", val: "Automated", sub: "Zero lost leads" },
    ],
  },
  {
    id: "process-automation",
    defaultTab: "telemetry" as const,
    title: "Business Process Automation & Telemetry",
    shortTitle: "Automation Node",
    subtitle: "Cryptographic Audit Trails · Real-Time Webhook Mesh · Multi-Branch ETL",
    badge: "Telemetry Engine",
    moduleNo: "MOD-04",
    accent: "6,182,212", // Cyan
    accentName: "cyan",
    imgSrc: "/images/products/process-automation.jpg",
    endpoint: "os.sprintstack.digital/telemetry/event-stream",
    kpi: "< 25ms Streams",
    floatingBadges: [
      { text: "SHA-256 Chained Logs", icon: Lock },
      { text: "WebSocket Stream Mesh", icon: Zap },
      { text: "Field-Level RBAC Scoping", icon: ShieldCheck },
    ],
    features: [
      "Real-time WebSocket telemetry dashboards streaming multi-branch operations.",
      "Automated trigger-based WhatsApp, SMS, and transactional email dispatch.",
      "Cryptographic SHA-256 chained audit logs guaranteeing tamper-proof compliance.",
      "Automated multi-system ETL flows synchronizing accounting, ERP, and inventory.",
    ],
    metrics: [
      { label: "Stream Latency", val: "< 25ms", sub: "WebSocket mesh" },
      { label: "Audit Security", val: "SHA-256", sub: "Chained & signed" },
      { label: "Alert Dispatch", val: "Multi-Channel", sub: "Instant fallback" },
      { label: "RBAC Scoping", val: "Field-Level", sub: "Strict compliance" },
    ],
  },
];

const AUTO_ROTATE_MS = 7000;

export function ProductShowcase() {
  const { openBookingModal } = useBookingModal();
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused]   = useState(false);
  const [demoOpen, setDemoOpen]   = useState(false);

  /* Auto rotation */
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % PRODUCT_SYSTEMS.length);
    }, AUTO_ROTATE_MS);
    return () => clearInterval(timer);
  }, [isPaused]);

  const currentSystem = PRODUCT_SYSTEMS[activeIdx];

  return (
    <section
      id="enterprise-solutions"
      className="py-24 lg:py-32 bg-[#050811] border-t border-[#1F2937] scroll-mt-24 relative overflow-hidden text-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[550px] rounded-full blur-[180px] pointer-events-none transition-all duration-1000"
        style={{ background: `rgba(${currentSystem.accent}, 0.08)` }}
      />
      <div className="absolute top-10 right-10 w-[400px] h-[300px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section Header ── */}
        <div className="mb-10 lg:mb-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3.5 max-w-2xl">
              <div className="inline-flex items-center gap-2 flex-wrap">
                <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  PROPRIETARY SYSTEMS ARCHITECTURE
                </span>
                <span className="badge-emerald-proof">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />Full IP Ownership Included
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-[-0.035em]">
                Enterprise Solutions &amp; Proprietary OS
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Pre-engineered, production-ready enterprise operating systems. Deployed on your private cloud or on-premise infrastructure with 100% source code ownership.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => setDemoOpen(true)}
                className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-white/5 hover:bg-white/10 text-white border border-white/10 flex items-center gap-2 cursor-pointer transition-all active:scale-95 shadow-md shadow-black/40"
              >
                <Play className="w-3.5 h-3.5 text-blue-400 fill-blue-400" />
                <span>Launch Interactive Sandbox</span>
              </button>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            TIER 1: INTERACTIVE SYSTEM SELECTION DOCK (4 MODULES)
            ═══════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {PRODUCT_SYSTEMS.map((sys, idx) => {
            const isActive = idx === activeIdx;

            return (
              <button
                key={sys.id}
                onClick={() => setActiveIdx(idx)}
                className={`text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden group cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? "bg-[#0D1424] border-blue-500/50 shadow-xl shadow-black/60 scale-[1.02]"
                    : "bg-[#090E1A]/80 border-[#1F2937] hover:bg-[#0D1424]/60 hover:border-slate-700"
                }`}
              >
                {/* Active bottom glow line */}
                {isActive && (
                  <div
                    className="absolute bottom-0 inset-x-0 h-1"
                    style={{ background: `linear-gradient(90deg, transparent, rgb(${sys.accent}), transparent)` }}
                  />
                )}

                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-mono font-bold text-slate-400 tracking-wider">
                      {sys.moduleNo}
                    </span>
                    <span
                      className="text-[10px] font-mono px-2 py-0.5 rounded-full border font-semibold"
                      style={{
                        background: isActive ? `rgba(${sys.accent}, 0.15)` : "rgba(255,255,255,0.03)",
                        borderColor: isActive ? `rgba(${sys.accent}, 0.35)` : "rgba(255,255,255,0.08)",
                        color: isActive ? `rgb(${sys.accent})` : "#94a3b8",
                      }}
                    >
                      {sys.kpi}
                    </span>
                  </div>

                  <h3
                    className={`text-sm sm:text-base font-bold tracking-tight transition-colors line-clamp-1 ${
                      isActive ? "text-white" : "text-slate-300 group-hover:text-white"
                    }`}
                  >
                    {sys.shortTitle}
                  </h3>
                </div>

                <div className="mt-3 pt-2.5 border-t border-[#1F2937]/60 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-slate-500 group-hover:text-slate-400 transition-colors">
                    {sys.badge}
                  </span>
                  <span
                    className={`transition-transform duration-300 font-bold ${
                      isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-1"
                    }`}
                    style={{ color: `rgb(${sys.accent})` }}
                  >
                    →
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            TIER 2: IMMERSIVE LIVE OS CONSOLE WORKSTATION
            ═══════════════════════════════════════════════════════════════ */}
        <div className="bg-[#0C1220] border border-[#1F2937] rounded-3xl shadow-2xl shadow-black/80 overflow-hidden relative">

          {/* Console Top Chrome Bar */}
          <div className="bg-[#070B14] px-4 sm:px-6 py-3.5 border-b border-[#1F2937] flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-3">
              {/* Window traffic light buttons */}
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>

              {/* Endpoint URL */}
              <div className="bg-[#0D1424] px-3 py-1 rounded-lg border border-[#1F2937] font-mono text-[11px] text-slate-300 flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span className="truncate">{currentSystem.endpoint}</span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono">
              <div className="hidden sm:flex items-center gap-2 text-slate-400">
                <Server className="w-3.5 h-3.5 text-emerald-400" />
                <span>Multi-Region High Availability</span>
              </div>

              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 font-bold text-[10px]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>READY FOR DEPLOYMENT</span>
              </div>
            </div>
          </div>

          {/* Workstation Body: Split Image Stage Left / Specs Deck Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">

            {/* ── LEFT: High-Res Interactive Image Stage (7 cols) ── */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#1F2937] relative">
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div>
                    <span
                      className="text-xs font-mono font-bold uppercase tracking-wider block mb-1"
                      style={{ color: `rgb(${currentSystem.accent})` }}
                    >
                      {currentSystem.moduleNo} · {currentSystem.badge}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                      {currentSystem.title}
                    </h3>
                  </div>
                </div>

                {/* Main Product Screen Mockup with Floating Badges */}
                <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden border border-[#1F2937] group shadow-2xl bg-[#070A12]">
                  <Image
                    src={currentSystem.imgSrc}
                    alt={currentSystem.title}
                    fill
                    priority
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 750px"
                  />

                  {/* Gradient vignettes */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C1220]/95 via-transparent to-black/20 pointer-events-none" />

                  {/* Floating Architectural Feature Badges */}
                  <div className="absolute top-3 left-3 right-3 flex flex-wrap gap-2 pointer-events-none">
                    {currentSystem.floatingBadges.map((b, i) => {
                      const Icon = b.icon;
                      return (
                        <div
                          key={i}
                          className="bg-[#090D18]/90 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded-lg text-[10px] font-mono text-slate-200 flex items-center gap-1.5 shadow-lg"
                        >
                          <Icon className="w-3 h-3 text-blue-400" />
                          <span>{b.text}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Bottom Subtitle / Tagline */}
                  <div className="absolute bottom-3 left-3 right-3 bg-[#090D18]/90 backdrop-blur-md border border-white/10 rounded-xl p-3 flex items-center justify-between gap-3 shadow-xl">
                    <span className="text-xs font-mono text-slate-300 truncate">
                      {currentSystem.subtitle}
                    </span>
                    <button
                      onClick={() => setDemoOpen(true)}
                      className="px-3 py-1 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs flex items-center gap-1.5 shrink-0 transition-all cursor-pointer shadow-md shadow-blue-600/30"
                    >
                      <Play className="w-3 h-3 fill-white" />
                      <span>Live Demo</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Deployment Architecture Callout */}
              <div className="mt-6 pt-4 border-t border-[#1F2937] flex items-center justify-between flex-wrap gap-3 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-emerald-400" />
                  <span>On-Premise (Bare-Metal / Docker) or Cloud (AWS / GCP / Azure)</span>
                </span>
                <span className="text-emerald-400 font-bold">100% IP Transfer</span>
              </div>
            </div>

            {/* ── RIGHT: Live Specifications & Feature Deck (5 cols) ── */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-[#0B101D]/70 space-y-6">

              {/* 4 Technical Metrics Matrix */}
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5 text-blue-400" />
                  <span>Production Technical Specifications</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {currentSystem.metrics.map((m, i) => (
                    <div
                      key={i}
                      className="bg-[#070B14] border border-[#1F2937] rounded-xl p-3.5 flex flex-col justify-between hover:border-slate-600 transition-colors shadow-sm"
                    >
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-tight line-clamp-1 mb-1">
                        {m.label}
                      </span>
                      <div>
                        <span className="text-sm sm:text-base font-extrabold text-white tracking-tight font-mono block">
                          {m.val}
                        </span>
                        <span className="text-[10px] font-mono text-emerald-400 font-medium mt-0.5 block">
                          {m.sub}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Architectural Features */}
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Core Architectural Capabilities</span>
                </div>

                <div className="space-y-2.5">
                  {currentSystem.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-emerald-400" />
                      </div>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Compliance & Security Guarantee */}
              <div className="pt-4 border-t border-[#1F2937] space-y-4">
                <div className="flex flex-wrap gap-2 text-[10px] font-mono">
                  {["SOC2 Type II Ready", "GDPR / HIPAA Ready", "Clean Architecture", "Zero Lock-In"].map((badge) => (
                    <span
                      key={badge}
                      className="px-2 py-0.5 rounded bg-white/[0.04] text-slate-400 border border-white/[0.08]"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    onClick={() => setDemoOpen(true)}
                    className="btn-primary flex-1 py-2.5 text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer active:scale-95 shadow-lg shadow-blue-500/20"
                  >
                    <Play className="w-3 h-3 fill-white" />
                    <span>Launch Sandbox Demo</span>
                  </button>

                  <button
                    onClick={openBookingModal}
                    className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-white border border-white/10 flex items-center justify-center gap-1.5 cursor-pointer transition-all active:scale-95"
                  >
                    <span>Deploy Solution</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Live Demo Sandbox Modal */}
      <LiveDemoModal
        isOpen={demoOpen}
        onClose={() => setDemoOpen(false)}
        defaultTab={currentSystem.defaultTab}
      />
    </section>
  );
}
