"use client";

import React, { useState } from "react";
import { SITE_CONFIG } from "@/lib/constants";
import { ShieldCheck, Zap, Globe, Gauge, Code2, Lock, GitBranch, Server, CheckCircle2, Radio } from "lucide-react";

export function TrustMetrics() {
  const trustItems = SITE_CONFIG.trustMetrics;
  const [activeRegion, setActiveRegion] = useState<string | null>(null);

  const icons = [
    <ShieldCheck key="ip" className="w-5 h-5 text-accent-emerald" />,
    <GitBranch key="sprint" className="w-5 h-5 text-accent-blue" />,
    <Globe key="standards" className="w-5 h-5 text-indigo-400" />,
    <Code2 key="debt" className="w-5 h-5 text-cyan-400" />,
  ];

  const datacenterCodes: Record<string, { code: string; ping: string; location: string }> = {
    US: { code: "iad1", ping: "14ms", location: "N. Virginia, US" },
    UK: { code: "lhr1", ping: "18ms", location: "London, UK" },
    UAE: { code: "dxb1", ping: "24ms", location: "Dubai, UAE" },
    SG: { code: "sin1", ping: "27ms", location: "Singapore, SG" },
    EU: { code: "fra1", ping: "21ms", location: "Frankfurt, DE" },
    AU: { code: "syd1", ping: "35ms", location: "Sydney, AU" },
  };

  return (
    <section className="py-20 bg-obsidian border-y border-border/80 relative overflow-hidden">
      {/* Subtle radial beam */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-blue-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* 4-Column Trust Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, idx) => (
            <div
              key={item.title}
              className="p-7 rounded-3xl bg-surface/80 border border-border/90 hover:border-slate-600 transition-all duration-300 group glow-card flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-obsidian border border-slate-800 group-hover:border-slate-700 transition-colors shadow-inner">
                    {icons[idx]}
                  </div>
                  <span className="text-[10px] font-mono uppercase text-slate-300 font-bold px-2.5 py-1 rounded-full bg-obsidian border border-slate-800">
                    {item.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-accent-blue transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed font-normal">
                    {item.detail}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent-emerald" />
                  Verified Standard
                </span>
                <span className="text-accent-emerald font-semibold">✓ SLA Guaranteed</span>
              </div>
            </div>
          ))}
        </div>

        {/* Global Market Coverage Bar */}
        <div className="mt-14 pt-8 border-t border-border/60 flex flex-col lg:flex-row items-center justify-between gap-6 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-emerald opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-emerald" />
            </span>
            <span className="text-white font-bold uppercase tracking-wider text-[11px]">
              Multi-Region Edge Caching Active:
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {SITE_CONFIG.markets.map((market) => {
              const isHovered = activeRegion === market.code;
              const dc = datacenterCodes[market.code];
              return (
                <div
                  key={market.code}
                  onMouseEnter={() => setActiveRegion(market.code)}
                  onMouseLeave={() => setActiveRegion(null)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl bg-surface/90 border transition-all cursor-default relative group ${
                    isHovered
                      ? "border-accent-blue shadow-lg shadow-blue-500/20 text-white scale-[1.03]"
                      : "border-border/90 text-slate-300 hover:border-slate-700"
                  }`}
                >
                  <span className="text-sm">{market.flag}</span>
                  <span className="font-bold text-white">{market.name}</span>
                  <span className="text-[10px] font-mono text-accent-cyan font-semibold">
                    [{dc ? dc.code : market.region}]
                  </span>
                  {dc && (
                    <span className="text-[10px] text-accent-emerald font-bold">
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
