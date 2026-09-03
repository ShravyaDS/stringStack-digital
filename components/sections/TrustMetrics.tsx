"use client";

import React, { useState } from "react";
import { SITE_CONFIG } from "@/lib/constants";
import { ShieldCheck, Zap, Globe, Code2, CheckCircle2 } from "lucide-react";

export function TrustMetrics() {
  const trustItems = SITE_CONFIG.trustMetrics;
  const [activeRegion, setActiveRegion] = useState<string | null>(null);

  const icons = [
    <ShieldCheck key="ip" className="w-5 h-5" />,
    <Zap key="sprint" className="w-5 h-5" />,
    <Globe key="standards" className="w-5 h-5" />,
    <Code2 key="debt" className="w-5 h-5" />,
  ];

  const cardThemes = [
    { iconClass: "icon-box-emerald", accentColor: "#34D399", borderAccent: "rgba(16,185,129,0.3)" },
    { iconClass: "icon-box-blue", accentColor: "#60A5FA", borderAccent: "rgba(59,130,246,0.3)" },
    { iconClass: "icon-box-violet", accentColor: "#818CF8", borderAccent: "rgba(99,102,241,0.28)" },
    { iconClass: "icon-box-cyan", accentColor: "#22D3EE", borderAccent: "rgba(6,182,212,0.3)" },
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
    <section
      className="py-20 md:py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #090D16 0%, #0E1623 100%)" }}
    >
      {/* Top gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.28), transparent)" }} />

      {/* Ambient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-64 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 50% 40% at 50% 0%, rgba(99,102,241,0.06), transparent)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* ── 4-Column Trust Strip ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {trustItems.map((item, idx) => {
            const theme = cardThemes[idx];
            return (
              <div
                key={item.title}
                className="card-raised rounded-2xl p-6 flex flex-col justify-between group cursor-default"
                style={{ "--accent-border": theme.borderAccent } as React.CSSProperties}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`icon-box ${theme.iconClass}`}>
                      {icons[idx]}
                    </div>
                    <span
                      className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full"
                      style={{
                        background: `${theme.accentColor}18`,
                        border: `1px solid ${theme.accentColor}30`,
                        color: theme.accentColor,
                      }}
                    >
                      {item.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white tracking-tight mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#A3A2B0] leading-relaxed">{item.detail}</p>
                  </div>
                </div>

                <div className="pt-4 mt-4 flex items-center justify-between text-xs"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                  <span className="flex items-center gap-1.5 text-[#A3A2B0]">
                    <CheckCircle2 className="w-3.5 h-3.5" style={{ color: theme.accentColor }} />
                    Verified Standard
                  </span>
                  <span className="font-semibold" style={{ color: theme.accentColor }}>✓ SLA</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Global Market Coverage Bar ── */}
        <div className="mt-14 pt-8 flex flex-col lg:flex-row items-center justify-between gap-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
            </span>
            <span className="text-sm font-semibold text-white">Multi-Region Edge Active:</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {SITE_CONFIG.markets.map((market) => {
              const isHovered = activeRegion === market.code;
              const dc = datacenterCodes[market.code];
              return (
                <div
                  key={market.code}
                  onMouseEnter={() => setActiveRegion(market.code)}
                  onMouseLeave={() => setActiveRegion(null)}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl cursor-default transition-all duration-200"
                  style={{
                    background: isHovered ? "rgba(59,130,246,0.10)" : "rgba(255,255,255,0.04)",
                    border: `1px solid ${isHovered ? "rgba(99,102,241,0.32)" : "rgba(255,255,255,0.08)"}`,
                    transform: isHovered ? "translateY(-1px)" : "none",
                    boxShadow: isHovered ? "0 4px 20px rgba(59,130,246,0.12)" : "none",
                  }}
                >
                  <span className="text-sm">{market.flag}</span>
                  <span className="text-sm font-semibold text-white">{market.name}</span>
                  <span className="text-[10px] font-mono" style={{ color: "#22D3EE" }}>
                    [{dc ? dc.code : market.region}]
                  </span>
                  {dc && (
                    <span className="text-[10px] font-bold text-emerald-400">{dc.ping}</span>
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
