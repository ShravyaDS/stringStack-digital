"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Zap,
  FileCode,
  ArrowUpRight,
} from "lucide-react";
import { DELIVERY_FRAMEWORK } from "@/lib/constants";
import { useBookingModal } from "../ModalProvider";

const PHASE_THEMES = [
  { iconClass: "icon-box-blue", accentColor: "#60A5FA", Icon: FileCode, bg: "rgba(59,130,246,0.1)", border: "rgba(59,130,246,0.3)" },
  { iconClass: "icon-box-violet", accentColor: "#818CF8", Icon: Zap, bg: "rgba(59,130,246,0.10)", border: "rgba(99,102,241,0.28)" },
  { iconClass: "icon-box-amber", accentColor: "#FBBF24", Icon: ShieldCheck, bg: "rgba(245,158,11,0.1)", border: "rgba(245,158,11,0.3)" },
  { iconClass: "icon-box-emerald", accentColor: "#34D399", Icon: CheckCircle2, bg: "rgba(16,185,129,0.1)", border: "rgba(16,185,129,0.3)" },
];

export function DeliveryFramework() {
  const { openBookingModal } = useBookingModal();
  const [selectedPhaseIndex, setSelectedPhaseIndex] = useState(0);
  const activePhase = DELIVERY_FRAMEWORK[selectedPhaseIndex];
  const theme = PHASE_THEMES[selectedPhaseIndex];

  return (
    <section
      id="process"
      className="py-20 md:py-28 relative"
      style={{ background: "linear-gradient(180deg, #0E1623 0%, #090D16 100%)" }}
    >
      {/* Top gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.28), transparent)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="flex items-center justify-center">
            <span className="section-label">Delivery Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1]">
            How We{" "}
            <span className="text-gradient-hero">Deliver Excellence</span>
          </h2>
          <p className="text-[#A3A2B0] text-base leading-relaxed">
            A structured 4-stage engineering methodology: 48-hour scope lock, 1–2 week sprint deployments, rigorous QA audits, and complete IP & code handover.
          </p>
        </div>

        {/* ── Phase Cards Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {DELIVERY_FRAMEWORK.map((item, idx) => {
            const isSelected = selectedPhaseIndex === idx;
            const t = PHASE_THEMES[idx];
            return (
              <button
                key={item.phase}
                onClick={() => setSelectedPhaseIndex(idx)}
                className="text-left p-5 rounded-2xl flex flex-col justify-between cursor-pointer transition-all duration-250"
                style={{
                  background: isSelected ? t.bg : "rgba(255,255,255,0.03)",
                  border: `1px solid ${isSelected ? t.border : "rgba(255,255,255,0.07)"}`,
                  boxShadow: isSelected ? `0 4px 24px ${t.accentColor}20` : "none",
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`icon-box ${isSelected ? t.iconClass : "icon-box-blue"} transition-colors`}
                      style={!isSelected ? { background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#6B6A78" } : {}}>
                      <t.Icon className="w-4 h-4" />
                    </div>
                    <span
                      className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded"
                      style={{
                        background: isSelected ? t.bg : "rgba(255,255,255,0.05)",
                        color: isSelected ? t.accentColor : "#6B6A78",
                        border: `1px solid ${isSelected ? t.border : "rgba(255,255,255,0.08)"}`,
                      }}
                    >
                      {item.phase}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold mb-1" style={{ color: isSelected ? "#F4F3F8" : "#A3A2B0" }}>
                    {item.name}
                  </h3>
                  <span className="text-[11px]" style={{ color: "#6B6A78" }}>{item.duration}</span>
                </div>

                <div className="pt-3 mt-3 flex items-center justify-between"
                  style={{ borderTop: `1px solid ${isSelected ? t.border : "rgba(255,255,255,0.07)"}` }}>
                  <span className="text-[11px] font-medium" style={{ color: isSelected ? t.accentColor : "#6B6A78" }}>
                    {isSelected ? "● Active Step" : "View Deliverables"}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5" style={{ color: isSelected ? t.accentColor : "#6B6A78" }} />
                </div>
              </button>
            );
          })}
        </div>

        {/* ── Active Phase Detail Panel ── */}
        <div
          className="p-6 sm:p-8 lg:p-10 rounded-2xl"
          style={{
            background: "linear-gradient(135deg, rgba(22,32,50,0.6) 0%, rgba(14,20,36,0.8) 100%)",
            border: "1px solid rgba(255,255,255,0.09)",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left: Highlights (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className={`icon-box ${theme.iconClass}`}>
                  <theme.Icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-widest block" style={{ color: theme.accentColor }}>
                    {activePhase.phase} · {activePhase.duration}
                  </span>
                  <h3 className="text-xl font-bold text-white">{activePhase.name}</h3>
                </div>
              </div>

              <div className="space-y-3">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-[#6B6A78] block">
                  Sprint Milestones:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activePhase.items.map((it) => (
                    <div key={it} className="flex items-start gap-2.5 text-sm text-[#D4D3E0]">
                      <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: theme.accentColor }} />
                      <span>{it}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverable callout */}
              <div
                className="p-4 rounded-xl text-sm"
                style={{ background: `${theme.accentColor}0D`, border: `1px solid ${theme.accentColor}25` }}
              >
                <span className="text-[#6B6A78] text-xs uppercase tracking-wider font-semibold">Formal Handover: </span>
                <strong className="text-white"> {activePhase.deliverable}</strong>
              </div>
            </div>

            {/* Right: CTA box (5 cols) */}
            <div
              className="lg:col-span-5 p-6 rounded-xl space-y-4"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div className="space-y-1.5">
                <h4 className="text-sm font-bold text-white">Sprint Transparency Guarantee</h4>
                <p className="text-xs text-[#A3A2B0] leading-relaxed">
                  Every line of code is committed directly to your repository with automated CI/CD staging links. Zero black boxes.
                </p>
              </div>

              <div className="space-y-2">
                {["Daily async standups", "Live staging URLs", "Sprint review calls", "Full repo access"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs text-[#A3A2B0]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              <button
                onClick={openBookingModal}
                className="btn-primary w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white cursor-pointer"
              >
                <span>Request Sprint Plan</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
