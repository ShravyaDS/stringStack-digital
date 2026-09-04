"use client";

import React from "react";
import { ShieldCheck, Zap, Globe, FileCode2 } from "lucide-react";

const TRUST_METRICS = [
  {
    Icon: ShieldCheck,
    title: "100% IP Ownership",
    desc: "Complete source code, architecture, and repository rights transferred on Day 1.",
  },
  {
    Icon: Zap,
    title: "Agile Sprint Cadence",
    desc: "Guaranteed 1–2 week release cycles with live staging previews and sprint demos.",
  },
  {
    Icon: Globe,
    title: "Global Standards",
    desc: "Built to US, UK, UAE, Singapore & EU enterprise security and compliance standards.",
  },
  {
    Icon: FileCode2,
    title: "Zero Technical Debt",
    desc: "Modular, typed, and fully documented production architectures with zero lock-in.",
  },
];

export function TrustBanner() {
  return (
    <section className="relative py-8 sm:py-10 bg-[#090D16] border-y border-white/[0.08] text-white overflow-hidden">
      {/* Soft ambient background glow */}
      <div className="absolute inset-0 section-radial-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TRUST_METRICS.map((metric) => {
            const Icon = metric.Icon;
            return (
              <div
                key={metric.title}
                className="studio-card p-5 flex items-start gap-3.5 group cursor-default"
              >
                {/* Electric blue icon container */}
                <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 group-hover:bg-blue-500/15 group-hover:border-blue-500/35 transition-all duration-200">
                  <Icon className="w-4 h-4" />
                </div>

                <div>
                  {/* Title */}
                  <h3 className="text-sm font-semibold text-white tracking-tight mb-1 group-hover:text-blue-400 transition-colors">
                    {metric.title}
                  </h3>

                  {/* Description: 65% opacity */}
                  <p className="text-xs text-slate-400/80 leading-relaxed">
                    {metric.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
