"use client";

import React from "react";
import { ShieldCheck, Zap, Globe, FileCode2 } from "lucide-react";

const TRUST_METRICS = [
  {
    icon: <ShieldCheck className="w-5 h-5 text-cyan-400" />,
    title: "100% IP Ownership",
    desc: "Complete source code, architecture IP, and repository rights transferred on Day 1.",
  },
  {
    icon: <Zap className="w-5 h-5 text-blue-400" />,
    title: "Agile Sprint Cadence",
    desc: "Guaranteed 1–2 week release cycles with live staging previews and sprint demos.",
  },
  {
    icon: <Globe className="w-5 h-5 text-indigo-400" />,
    title: "Global Standards",
    desc: "Built to stringent US, UK, UAE, Singapore & EU enterprise security and compliance.",
  },
  {
    icon: <FileCode2 className="w-5 h-5 text-emerald-400" />,
    title: "Zero Technical Debt",
    desc: "Modular, typed, and fully documented production architectures with zero lock-in.",
  },
];

export function TrustBanner() {
  return (
    <section className="relative z-20 bg-[#070A12] border-y border-slate-800/80 py-8 md:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {TRUST_METRICS.map((metric) => (
            <div
              key={metric.title}
              className="flex items-start gap-3.5 p-3 sm:p-0 group"
            >
              <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 shrink-0 text-slate-300 group-hover:border-slate-700 transition-colors">
                {metric.icon}
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-white tracking-tight">
                  {metric.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {metric.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
