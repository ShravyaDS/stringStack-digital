"use client";

import React from "react";
import { ShieldCheck, Zap, Globe, FileCode2, Sparkles, CheckCircle } from "lucide-react";

const TRUST_METRICS = [
  {
    Icon: ShieldCheck,
    tag: "Day 1 Transfer",
    title: "100% IP Ownership",
    desc: "Complete source code, architecture blueprints, and repository rights transferred directly to your organization.",
    color: "emerald",
    accent: "16,185,129",
  },
  {
    Icon: Zap,
    tag: "1–2 Week Cycles",
    title: "Agile Sprint Cadence",
    desc: "Predictable milestone-driven delivery with continuous staging previews, automated test suites, and live demos.",
    color: "cyan",
    accent: "6,182,212",
  },
  {
    Icon: Globe,
    tag: "Multi-Region Ready",
    title: "Global Compliance Standards",
    desc: "Architectures engineered to US, UK, UAE, Singapore & EU enterprise security, data residency, and GDPR/HIPAA standards.",
    color: "blue",
    accent: "59,130,246",
  },
  {
    Icon: FileCode2,
    tag: "Zero Vendor Lock-In",
    title: "Zero Technical Debt",
    desc: "Clean, strongly-typed TypeScript and Go codebases with 100% documentation, automated CI/CD, and modular design.",
    color: "indigo",
    accent: "99,102,241",
  },
];

export function TrustBanner() {
  return (
    <section className="relative py-12 sm:py-16 bg-[#090D16] border-y border-[#1F2937] text-white overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {TRUST_METRICS.map((metric) => {
            const Icon = metric.Icon;

            return (
              <div
                key={metric.title}
                className="group relative bg-[#0D1322]/80 backdrop-blur-sm border border-[#1F2937] hover:border-slate-600/60 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50 flex flex-col justify-between"
                style={{
                  boxShadow: "0 4px 20px -2px rgba(0,0,0,0.4)",
                }}
              >
                {/* Subtle top card glow line on hover */}
                <div
                  className="absolute top-0 inset-x-6 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
                  style={{
                    background: `linear-gradient(90deg, transparent, rgb(${metric.accent}), transparent)`,
                  }}
                />

                <div>
                  {/* Header: Icon + Micro-tag */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 shrink-0"
                      style={{
                        background: `rgba(${metric.accent}, 0.12)`,
                        border: `1px solid rgba(${metric.accent}, 0.28)`,
                        color: `rgb(${metric.accent})`,
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <span
                      className="text-[10px] font-mono font-medium px-2.5 py-1 rounded-full border shrink-0 transition-colors"
                      style={{
                        background: `rgba(${metric.accent}, 0.08)`,
                        borderColor: `rgba(${metric.accent}, 0.2)`,
                        color: `rgb(${metric.accent})`,
                      }}
                    >
                      {metric.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-white tracking-tight group-hover:text-slate-100 transition-colors mb-2">
                    {metric.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-400 leading-relaxed font-normal">
                    {metric.desc}
                  </p>
                </div>

                {/* Bottom subtle checkmark indicator */}
                <div className="mt-4 pt-3 border-t border-[#1F2937]/70 flex items-center gap-1.5 text-[11px] font-mono text-slate-500 group-hover:text-slate-400 transition-colors">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400/80" />
                  <span>Verified Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
