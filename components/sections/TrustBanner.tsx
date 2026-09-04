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
    <section className="relative py-10 sm:py-12 bg-[#090D16] border-y border-[#1F2937] text-white overflow-hidden">
      {/* Soft ambient background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_50%_50%,rgba(59,130,246,0.06),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TRUST_METRICS.map((metric) => {
            const Icon = metric.Icon;
            const isProof = metric.title.includes("100% IP") || metric.title.includes("Zero Technical Debt");

            return (
              <div
                key={metric.title}
                className={`bg-[#111827] border rounded-xl p-5 flex items-start gap-3.5 group cursor-default transition-all duration-300 hover:-translate-y-1 ${
                  isProof
                    ? "border-[#1F2937] hover:border-emerald-500/40"
                    : "border-[#1F2937] hover:border-blue-500/40"
                }`}
              >
                {/* Icon container */}
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border transition-all duration-200 ${
                    isProof
                      ? "bg-emerald-500/10 border-emerald-500/25 text-emerald-400 group-hover:bg-emerald-500/20"
                      : "bg-blue-500/10 border-blue-500/20 text-blue-400 group-hover:bg-blue-500/20"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>

                <div>
                  {/* Title */}
                  <h3
                    className={`text-sm font-semibold tracking-tight mb-1 transition-colors ${
                      isProof
                        ? "text-white group-hover:text-emerald-300"
                        : "text-white group-hover:text-blue-300"
                    }`}
                  >
                    {metric.title}
                  </h3>

                  {/* Description: 65% opacity */}
                  <p className="text-xs text-slate-400/80 leading-relaxed font-normal">
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
