"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Lock, Clock, Zap } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { useBookingModal } from "../ModalProvider";

interface MetricItem {
  id: string;
  metric: string;
  metricColor: string;
  headline: string;
  detail: string;
  badge: string;
}

const CUSTOMER_RESULTS_DATA: MetricItem[] = [
  {
    id: "ip-ownership",
    metric: "100%",
    metricColor: "from-cyan-400 via-blue-400 to-indigo-400",
    headline: "Intellectual Property Ownership",
    detail: "Full source code, complete database migrations, and unencumbered IP transfer from Day 1.",
    badge: "Immediate Transfer",
  },
  {
    id: "sprint-ship",
    metric: "7 Days",
    metricColor: "from-emerald-400 via-teal-300 to-cyan-400",
    headline: "Sprint 1 Production Code Shipped",
    detail: "First working sprint deployed live on private preview environments for client review within 7 days.",
    badge: "Guaranteed Velocity",
  },
  {
    id: "scope-lock",
    metric: "48h",
    metricColor: "from-blue-400 via-indigo-400 to-purple-400",
    headline: "Architecture & Scope Lock",
    detail: "Detailed technical architecture, database schema, and fixed milestone breakdown locked in 48 hours.",
    badge: "Fixed Milestones",
  },
  {
    id: "uptime-sla",
    metric: "99.99%",
    metricColor: "from-cyan-400 via-sky-400 to-blue-400",
    headline: "Enterprise Uptime & Reliability SLA",
    detail: "Multi-region edge deployment across US, UK, UAE, Singapore, EU, and Australia with zero single points of failure.",
    badge: "Global Standards",
  },
];

export function CustomerResults() {
  const { openBookingModal } = useBookingModal();

  const datacenterCodes: Record<string, { code: string; ping: string }> = {
    US: { code: "iad1", ping: "14ms" },
    UK: { code: "lhr1", ping: "18ms" },
    UAE: { code: "dxb1", ping: "24ms" },
    SG: { code: "sin1", ping: "27ms" },
    EU: { code: "fra1", ping: "21ms" },
    AU: { code: "syd1", ping: "35ms" },
  };

  return (
    <section id="customer-results" className="py-28 bg-[#090D16] border-y border-border relative overflow-hidden">
      {/* Ambient lighting */}
      <div className="absolute top-0 right-1/3 w-[600px] h-[300px] bg-gradient-radial from-blue-600/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* EPAM-STYLE 2-COLUMN SPLIT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Title & Narrative (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
                DELIVERY GUARANTEES
              </span>
              <span className="w-8 h-px bg-cyan-400/40" />
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight leading-tight">
              Engineering <br />
              <span className="font-extrabold text-white">Guarantees</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              SprintStack operates on strict, verified engineering standards with guaranteed sprint cadences, 100% intellectual property transfer, and zero technical debt.
            </p>

            <div className="pt-2">
              <button
                onClick={openBookingModal}
                className="inline-flex items-center gap-2 text-sm font-semibold text-white group hover:text-cyan-400 transition-colors py-2"
              >
                <span className="underline underline-offset-8 decoration-cyan-400/50 group-hover:decoration-cyan-400">
                  Schedule a Technical Discovery
                </span>
                <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: 2x2 Clean Verified Metrics (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
            {CUSTOMER_RESULTS_DATA.map((item) => (
              <div
                key={item.id}
                className="space-y-3 pb-8 border-b border-white/[0.08] group"
              >
                {/* Metric Number */}
                <div
                  className={`text-6xl sm:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br ${item.metricColor} drop-shadow-sm`}
                >
                  {item.metric}
                </div>

                {/* Metric Headline */}
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                  {item.headline}
                </h3>

                {/* Detail */}
                <p className="text-xs text-slate-300 leading-relaxed font-normal max-w-xs">
                  {item.detail}
                </p>

                {/* Badge */}
                <div className="pt-2">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-cyan-400 font-semibold px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08]">
                    <CheckCircle2 className="w-3 h-3 text-accent-emerald" />
                    {item.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Multi-Region Global Edge Coverage Strip */}
        <div className="mt-16 pt-8 border-t border-white/[0.08] flex flex-col lg:flex-row items-center justify-between gap-6 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-emerald opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-emerald" />
            </span>
            <span className="text-white font-bold uppercase tracking-wider text-[11px]">
              Multi-Region Edge Infrastructure:
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {SITE_CONFIG.markets.map((market) => {
              const dc = datacenterCodes[market.code];
              return (
                <div
                  key={market.code}
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-surface/80 border border-white/[0.08] text-slate-300"
                >
                  <span className="text-sm">{market.flag}</span>
                  <span className="font-bold text-white">{market.name}</span>
                  {dc && (
                    <span className="text-[10px] font-mono text-accent-emerald font-bold">
                      {dc.ping}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
