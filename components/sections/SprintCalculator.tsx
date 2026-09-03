"use client";

import React, { useState } from "react";
import {
  Layers,
  Cpu,
  Smartphone,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sliders,
  FileCode2,
} from "lucide-react";
import { Button } from "../ui/Button";
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
    { id: "startup", name: "Startup MVP", users: "< 2,500 Monthly Users", multiplier: 1, sla: "99.9% SLA" },
    { id: "growth", name: "Mid-Market Growth", users: "2,500 – 50,000 Users", multiplier: 1.2, sla: "99.95% SLA" },
    { id: "enterprise", name: "Enterprise Multi-Region", users: "50,000 – 500,000+ Users", multiplier: 1.5, sla: "99.99% SLA" },
  ];

  const integrationList = [
    { id: "auth-rbac", name: "Enterprise Auth & RBAC", desc: "Multi-tenant role permissions" },
    { id: "db-postgres", name: "PostgreSQL & Redis Cache", desc: "ACID schema + sub-ms cache" },
    { id: "edge-cdn", name: "Multi-Region Edge Routing", desc: "Global TTFB < 50ms" },
    { id: "biometrics", name: "Biometric Hardware Gateways", desc: "ZKTeco & TCP/IP sync" },
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

  const stackRecommendations: Record<string, string[]> = {
    web: ["Next.js 15 App Router", "React 19 Server Actions", "PostgreSQL", "Tailwind CSS", "Redis"],
    mobile: ["Flutter 3.x", "Dart", "SQLite Local-First", "Apple FaceID / Biometric", "Node.js API"],
    erp: ["PostgreSQL Multi-Tenant", "ZKTeco Biometric API", "Next.js 15", "NestJS Microservices", "Redis"],
    crm: ["FastAPI Python", "PostgreSQL", "WhatsApp Cloud API", "Next.js App Router", "Kafka"],
    whitelabel: ["Dedicated Principal Architect", "2x Senior Full-Stack", "1x Flutter Engineer", "1x QA Lead"],
  };

  return (
    <section id="estimator" className="py-20 md:py-24 relative" style={{ background: "linear-gradient(180deg, #090D16 0%, #0E1623 100%)", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-2">
            <span className="section-label">
              <Sliders className="w-3 h-3" />
              Live Scope Simulator
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1]">
            Sprint Scope &amp;{" "}
            <span className="text-gradient-blue-violet">Timeline Estimator</span>
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Configure your project parameters to compute sprint milestones, architecture recommendations, and dedicated squad composition in real time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Interactive Controls (7 cols) */}
          <div className="lg:col-span-7 space-y-6 bg-slate-900/30 border border-slate-800 p-6 sm:p-8 rounded-2xl">
            {/* 1. Project Type Selector */}
            <div className="space-y-3">
              <label className="text-xs font-mono uppercase text-slate-400 font-semibold block">
                1. Select Target Software Category
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {projectTypes.map((p) => {
                  const isSelected = projectType === p.id;
                  return (
                    <button
                      key={p.id}
                      onClick={() => setProjectType(p.id as any)}
                      className={`p-3 rounded-xl border text-left flex items-center gap-3 transition-colors cursor-pointer ${
                        isSelected
                          ? "bg-slate-800 border-slate-600 text-white"
                          : "bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"
                      }`}
                    >
                      <div className={`p-2 rounded-lg ${isSelected ? "bg-slate-700 text-white" : "bg-slate-800 text-slate-400"}`}>
                        {p.icon}
                      </div>
                      <span className="text-xs sm:text-sm font-semibold truncate">{p.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Scale Selector */}
            <div className="space-y-3">
              <label className="text-xs font-mono uppercase text-slate-400 font-semibold block">
                2. Select Infrastructure Concurrency &amp; Scale
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {scaleOptions.map((s) => {
                  const isSelected = scale === s.id;
                  return (
                    <button
                      key={s.id}
                      onClick={() => setScale(s.id as any)}
                      className={`p-3 rounded-xl border text-left transition-colors cursor-pointer ${
                        isSelected
                          ? "bg-slate-800 border-slate-600 text-white"
                          : "bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"
                      }`}
                    >
                      <div className="text-xs font-bold text-white">{s.name}</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">{s.users}</div>
                      <div className="text-[10px] font-mono text-emerald-400 font-semibold mt-1">{s.sla}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Architectural Integrations */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono uppercase text-slate-400 font-semibold block">
                  3. Select Enterprise Integrations
                </label>
                <span className="text-xs font-mono text-cyan-400">{selectedIntegrations.length} Selected</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {integrationList.map((item) => {
                  const isSelected = selectedIntegrations.includes(item.id);
                  return (
                    <button
                      key={item.id}
                      onClick={() => toggleIntegration(item.id)}
                      className={`p-3 rounded-xl border text-left flex items-start justify-between gap-2 transition-colors cursor-pointer ${
                        isSelected
                          ? "bg-slate-800 border-slate-600 text-white"
                          : "bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700"
                      }`}
                    >
                      <div>
                        <div className="text-xs font-semibold text-white">{item.name}</div>
                        <div className="text-[11px] text-slate-400 mt-0.5">{item.desc}</div>
                      </div>
                      <div className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 mt-0.5 ${isSelected ? "bg-cyan-400 border-cyan-400 text-black" : "border-slate-700"}`}>
                        {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Calculated Output Card (5 cols) */}
          <div className="lg:col-span-5 sticky top-24 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
                  Computed Scope Output
                </span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-emerald-400 border border-slate-700 font-semibold">
                  Guaranteed SLA
                </span>
              </div>

              {/* Major Metric Numbers */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-surface border border-slate-800 space-y-1">
                  <span className="text-xs text-slate-400 font-mono">Estimated Cadence</span>
                  <div className="text-2xl sm:text-3xl font-bold text-white font-mono flex items-baseline gap-1">
                    {estimatedSprints} <span className="text-xs font-normal text-slate-400 font-sans">Sprints</span>
                  </div>
                  <div className="text-[11px] text-cyan-400 font-mono">Fixed 1-2 week cycles</div>
                </div>

                <div className="p-4 rounded-xl bg-surface border border-slate-800 space-y-1">
                  <span className="text-xs text-slate-400 font-mono">Target Delivery</span>
                  <div className="text-2xl sm:text-3xl font-bold text-emerald-400 font-mono flex items-baseline gap-1">
                    ~{estimatedDays} <span className="text-xs font-normal text-slate-400 font-sans">Days</span>
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono">Production Ready</div>
                </div>
              </div>

              {/* Recommended Stack */}
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase text-slate-400 font-semibold block">
                  Recommended Technology Stack:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {stackRecommendations[projectType]?.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-surface border border-slate-800 text-xs font-mono text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Sprint Guarantees */}
              <div className="p-3.5 rounded-xl bg-surface border border-slate-800 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>100% Unencumbered IP Transfer on Day 1</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Direct senior engineer access (Slack &amp; GitHub)</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>Weekly live milestone preview builds</span>
                </div>
              </div>

              {/* Action Button */}
              <Button
                onClick={openBookingModal}
                variant="primary"
                size="lg"
                className="w-full justify-center gap-2 text-sm font-bold bg-blue-600 hover:bg-blue-500 py-3.5 rounded-xl transition-colors"
              >
                <span>Lock In This Sprint Plan &amp; Scope</span>
                <ArrowRight className="w-4 h-4" />
              </Button>

              <div className="text-center text-[11px] font-mono text-slate-400">
                Formal SOW &amp; Architectural Blueprint provided within 24h.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
