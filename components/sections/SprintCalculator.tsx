"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Layers,
  Cpu,
  Smartphone,
  ShieldCheck,
  CheckCircle2,
  FileCode2,
  Check,
} from "lucide-react";
import { useBookingModal } from "../ModalProvider";

export function SprintCalculator() {
  const { openBookingModal } = useBookingModal();

  const [projectType, setProjectType] = useState<"web" | "mobile" | "erp" | "crm" | "whitelabel">("web");
  const [scale, setScale] = useState<"startup" | "growth" | "enterprise">("growth");
  const [selectedIntegrations, setSelectedIntegrations] = useState<string[]>([
    "auth-rbac",
    "db-postgres",
    "edge-cdn",
  ]);

  // Live update animation trigger
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    setIsUpdating(true);
    const timer = setTimeout(() => setIsUpdating(false), 200);
    return () => clearTimeout(timer);
  }, [projectType, scale, selectedIntegrations]);

  const toggleIntegration = (id: string) => {
    setSelectedIntegrations((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const projectTypes = [
    { id: "web", name: "High-Concurrency Web SaaS", icon: <Layers className="w-4 h-4" />, baseSprints: 3 },
    { id: "mobile", name: "Cross-Platform Mobile (Flutter)", icon: <Smartphone className="w-4 h-4" />, baseSprints: 3 },
    { id: "erp", name: "Attendance & Workforce ERP", icon: <ShieldCheck className="w-4 h-4" />, baseSprints: 4 },
    { id: "crm", name: "Custom CRM & Lead Engine", icon: <Cpu className="w-4 h-4" />, baseSprints: 3 },
    { id: "whitelabel", name: "Dedicated White-Label Squad", icon: <FileCode2 className="w-4 h-4" />, baseSprints: 2 },
  ];

  const scaleOptions = [
    { id: "startup", name: "Startup MVP", users: "< 2,500 Users", multiplier: 1, sla: "99.9% SLA" },
    { id: "growth", name: "Mid-Market", users: "2,500 – 50,000 Users", multiplier: 1.2, sla: "99.95% SLA" },
    { id: "enterprise", name: "Enterprise Scale", users: "50,000+ Users", multiplier: 1.5, sla: "99.99% SLA" },
  ];

  const integrationList = [
    { id: "auth-rbac", name: "Enterprise Auth & RBAC", desc: "Multi-tenant role permissions" },
    { id: "db-postgres", name: "PostgreSQL & Redis Cache", desc: "ACID schema + sub-ms cache" },
    { id: "edge-cdn", name: "Multi-Region Edge Routing", desc: "Global TTFB < 50ms" },
    { id: "biometrics", name: "Biometric Gateways", desc: "ZKTeco & TCP/IP sync" },
    { id: "payments", name: "Multi-Currency Stripe / Adyen", desc: "Cross-border settlement" },
    { id: "websockets", name: "Real-Time WebSocket Stream", desc: "< 25ms telemetry channel" },
  ];

  const selectedProj = projectTypes.find((p) => p.id === projectType) || projectTypes[0];
  const selectedScaleObj = scaleOptions.find((s) => s.id === scale) || scaleOptions[1];

  const extraIntegrations = Math.max(0, selectedIntegrations.length - 3);
  const estimatedSprints = Math.max(
    2,
    Math.round(selectedProj.baseSprints * (selectedScaleObj.multiplier > 1.2 ? 1.3 : 1) + extraIntegrations * 0.5)
  );
  const estimatedDays = estimatedSprints * 7;

  const sectionRef = useRef<HTMLElement>(null);
  const [hasEnteredView, setHasEnteredView] = useState(false);
  const [isSectionInView, setIsSectionInView] = useState(false);
  const [displaySprints, setDisplaySprints] = useState(0);
  const [displayDays, setDisplayDays] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setHasEnteredView(true);
      setIsSectionInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSectionInView(entry.isIntersecting);
        if (entry.isIntersecting && !hasEnteredView) {
          setHasEnteredView(true);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasEnteredView]);

  useEffect(() => {
    if (!hasEnteredView) return;
    const duration = 700;
    const startTime = performance.now();

    let animId: number;
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setDisplaySprints(Math.max(1, Math.round(estimatedSprints * ease)));
      setDisplayDays(Math.max(1, Math.round(estimatedDays * ease)));
      if (progress < 1) {
        animId = requestAnimationFrame(step);
      }
    };
    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [hasEnteredView, estimatedSprints, estimatedDays]);

  const stackRecommendations: Record<string, string[]> = {
    web: ["Next.js 15 App Router", "React 19 Server Actions", "PostgreSQL", "Tailwind CSS", "Redis"],
    mobile: ["Flutter 3.x", "Dart", "SQLite Local-First", "Apple FaceID / Biometric", "Node.js API"],
    erp: ["PostgreSQL Multi-Tenant", "ZKTeco Biometric API", "Next.js 15", "NestJS Microservices", "Redis"],
    crm: ["FastAPI Python", "PostgreSQL", "WhatsApp Cloud API", "Next.js App Router", "Kafka"],
    whitelabel: ["Dedicated Principal Architect", "2x Senior Full-Stack", "1x Flutter Engineer", "1x QA Lead"],
  };

  return (
    <section id="estimator" ref={sectionRef} className="py-28 lg:py-36 bg-[#090D16] border-t border-white/[0.08] relative overflow-hidden">
      {/* Subtle background ambient radial glow */}
      <div className="absolute inset-0 section-radial-glow pointer-events-none" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 scroll-reveal">
          <span className="section-label">Live Scope Simulator</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-[-0.03em]">
            Sprint Scope &amp; Timeline Estimator
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Configure your project parameters to compute sprint milestones, architecture recommendations, and dedicated squad composition in real time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive Step Configurator (7 cols) */}
          <div className="lg:col-span-7 space-y-7 bg-[#0E1626]/70 border border-white/[0.08] p-5 sm:p-8 rounded-2xl shadow-xl">
            
            {/* Step 1: Software Category */}
            <div className="space-y-3.5">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                    1
                  </span>
                  <span className="text-sm font-bold text-white">
                    Select target software category
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-1 ml-7">
                  Choose the primary system you&apos;re building
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {projectTypes.map((p) => {
                  const isSelected = projectType === p.id;
                  return (
                    <button
                      key={p.id}
                      onClick={() => setProjectType(p.id as any)}
                      className={`p-3 rounded-xl text-left flex items-center justify-between gap-3 transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? "bg-[#131D31] border-2 border-blue-500 text-white shadow-[0_0_16px_rgba(37,99,235,0.25)]"
                          : "bg-[#090D16] border border-white/[0.08] text-slate-300 hover:border-white/[0.18] hover:text-white"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 truncate">
                        <div className={`p-1.5 rounded-md shrink-0 ${isSelected ? "bg-blue-600 text-white" : "bg-white/[0.05] border border-white/[0.08] text-slate-400"}`}>
                          {p.icon}
                        </div>
                        <span className="text-xs sm:text-sm font-semibold truncate">{p.name}</span>
                      </div>

                      {/* Top-right unified checkmark */}
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 transition-all ${
                        isSelected ? "bg-blue-600 text-white" : "border border-white/[0.15] bg-transparent"
                      }`}>
                        {isSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Infrastructure Scale */}
            <div className="space-y-3.5">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                    2
                  </span>
                  <span className="text-sm font-bold text-white">
                    Select infrastructure scale
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-1 ml-7">
                  Pick expected scale to size the SLA
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {scaleOptions.map((s) => {
                  const isSelected = scale === s.id;
                  return (
                    <button
                      key={s.id}
                      onClick={() => setScale(s.id as any)}
                      className={`p-3.5 rounded-xl text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? "bg-[#131D31] border-2 border-blue-500 shadow-[0_0_16px_rgba(37,99,235,0.25)]"
                          : "bg-[#090D16] border border-white/[0.08] hover:border-white/[0.18]"
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-1 mb-1">
                          <div className="text-xs font-bold text-white">{s.name}</div>
                          <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 transition-all ${
                            isSelected ? "bg-blue-600 text-white" : "border border-white/[0.15] bg-transparent"
                          }`}>
                            {isSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                          </div>
                        </div>
                        <div className="text-[11px] text-slate-400">{s.users}</div>
                      </div>

                      <div className="text-[11px] text-slate-400 font-mono font-medium pt-2 mt-2 border-t border-white/[0.08]">
                        {s.sla}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Enterprise Integrations */}
            <div className="space-y-3.5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                      3
                    </span>
                    <span className="text-sm font-bold text-white">
                      Select enterprise integrations
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1 ml-7">
                    Select the integrations this build needs
                  </p>
                </div>
                <span className="studio-pill font-mono text-[11px] text-blue-300 border-blue-500/20 bg-blue-500/10">
                  {selectedIntegrations.length} Selected
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {integrationList.map((item) => {
                  const isSelected = selectedIntegrations.includes(item.id);
                  return (
                    <button
                      key={item.id}
                      onClick={() => toggleIntegration(item.id)}
                      className={`p-3 rounded-xl text-left flex items-start justify-between gap-2.5 transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? "bg-[#131D31] border-2 border-blue-500 shadow-[0_0_16px_rgba(37,99,235,0.25)]"
                          : "bg-[#090D16] border border-white/[0.08] hover:border-white/[0.18]"
                      }`}
                    >
                      <div>
                        <div className="text-xs font-semibold text-white">{item.name}</div>
                        <div className="text-[11px] text-slate-400 mt-0.5">{item.desc}</div>
                      </div>

                      {/* Top-right unified checkmark */}
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                        isSelected ? "bg-blue-600 text-white" : "border border-white/[0.15] bg-transparent"
                      }`}>
                        {isSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right: Calculated Output Card (5 cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0E1626] border border-white/[0.10] text-white space-y-5 shadow-2xl">
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                  Computed Scope Output
                </span>
                <span className="studio-pill font-mono text-[11px] text-blue-300 border-blue-500/20 bg-blue-500/10">
                  Guaranteed SLA
                </span>
              </div>

              {/* Major Metric Numbers with Live Reactive Transition */}
              <div
                className={`grid grid-cols-2 gap-3 transition-all duration-200 ${
                  isUpdating ? "opacity-60 scale-[0.99]" : "opacity-100 scale-100"
                }`}
              >
                <div className="p-4 rounded-xl bg-[#090D16] border border-white/[0.08] space-y-1">
                  <span className="text-xs text-slate-400">Estimated Cadence</span>
                  <div className="text-2xl sm:text-3xl font-bold text-blue-400 flex items-baseline gap-1 font-mono">
                    {hasEnteredView ? displaySprints : estimatedSprints} <span className="text-xs font-normal text-slate-400 font-sans">Sprints</span>
                  </div>
                  <div className="text-[11px] text-slate-400 font-medium">1–2 week cycles</div>
                </div>

                <div className="p-4 rounded-xl bg-[#090D16] border border-white/[0.08] space-y-1">
                  <span className="text-xs text-slate-400">Target Delivery</span>
                  <div className="text-2xl sm:text-3xl font-bold text-white flex items-baseline gap-1 font-mono">
                    ~{hasEnteredView ? displayDays : estimatedDays} <span className="text-xs font-normal text-slate-400 font-sans">Days</span>
                  </div>
                  <div className="text-[11px] text-blue-400 font-medium font-mono">Production Ready</div>
                </div>
              </div>

              {/* Recommended Stack with Live Reactive Transition */}
              <div
                className={`space-y-2 transition-all duration-200 ${
                  isUpdating ? "opacity-60" : "opacity-100"
                }`}
              >
                <span className="text-xs font-mono font-semibold uppercase text-slate-400 block">
                  Recommended Architecture:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {stackRecommendations[projectType]?.map((tech) => (
                    <span
                      key={tech}
                      className="studio-pill font-mono text-xs cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Guarantees */}
              <div className="p-3.5 rounded-xl bg-[#090D16] border border-white/[0.08] space-y-2 text-xs">
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>100% Unencumbered IP Transfer on Day 1</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>Direct senior engineer access (Slack &amp; GitHub)</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>Weekly live milestone preview builds</span>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={openBookingModal}
                className="btn-primary w-full py-3.5 text-sm font-semibold cursor-pointer active:scale-95 transition-transform"
              >
                Lock In This Sprint Plan &amp; Scope
              </button>

              <div className="text-center text-[11px] text-slate-400 font-mono">
                Formal SOW &amp; Architectural Blueprint provided within 24h.
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* ── Mobile Sticky Summary Bar ── */}
      <div
        className={`lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#090D16]/95 backdrop-blur-md border-t border-white/[0.08] px-4 py-3 shadow-2xl flex items-center justify-between gap-3 pb-safe transition-all duration-300 ${
          isSectionInView
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div>
          <div className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-400">
            Estimated Scope
          </div>
          <div className="text-sm font-bold text-white flex items-baseline gap-1.5 font-mono">
            <span>{estimatedSprints} Sprints</span>
            <span className="text-xs font-semibold text-blue-400">(~{estimatedDays} Days)</span>
          </div>
        </div>

        <button
          onClick={openBookingModal}
          className="btn-primary px-4 py-2 text-xs font-semibold cursor-pointer active:scale-95"
        >
          Lock In Scope
        </button>
      </div>
    </section>
  );
}
