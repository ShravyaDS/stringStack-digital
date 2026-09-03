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
    <section className="py-7 sm:py-8 bg-[#0B1120] border-b border-[#1E293B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 scroll-stagger">
          {TRUST_METRICS.map((metric) => {
            const Icon = metric.Icon;
            return (
              <div
                key={metric.title}
                className="bg-[#111827]/90 rounded-xl p-4 sm:p-5 border border-[#1E293B] hover:border-blue-500/40 shadow-sm transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  {/* Vibrant blue icon chip */}
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/25 flex items-center justify-center text-[#60A5FA] mb-3 group-hover:scale-105 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>

                  {/* Title: Confident, white */}
                  <h3 className="text-[15px] font-bold text-white tracking-tight mb-1 group-hover:text-[#60A5FA] transition-colors">
                    {metric.title}
                  </h3>

                  {/* Description: Light slate */}
                  <p className="text-[13px] text-slate-400 leading-relaxed line-clamp-2">
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
