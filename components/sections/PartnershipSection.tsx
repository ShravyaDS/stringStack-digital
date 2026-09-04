"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import {
  Lock,
  Layers,
  Zap,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Eye,
  EyeOff,
} from "lucide-react";
import { useBookingModal } from "../ModalProvider";

const PARTNERSHIP_STEPS = [
  { step: "01", title: "Agency Lands Client", desc: "You scope and price under your agency brand." },
  { step: "02", title: "SprintStack Builds", desc: "We engineer behind the scenes under strict NDA." },
  { step: "03", title: "Agency Delivers", desc: "You deliver production code with 100% IP ownership." },
];

export function PartnershipSection() {
  const { openBookingModal } = useBookingModal();
  // Multi-open state: any number of pillars can be open simultaneously
  const [openIndices, setOpenIndices] = useState<number[]>([0]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const partnershipPillars = [
    {
      title: "100% White-Label Delivery",
      subtitle: "Silent Execution Backbone",
      description:
        "We act as your dedicated engineering arm. All code, PRs, communications, and commits belong to you under strict mutual NDA. Zero attribution, 100% your brand.",
      badge: "Silent Partner",
      Icon: Lock,
      guarantees: [
        "Strict mutual NDA on all deliverables",
        "No SprintStack attribution on code or commits",
        "Full GitHub repository access under your org",
        "All communication under your agency brand",
      ],
    },
    {
      title: "Fixed-Price Sprint Retainers",
      subtitle: "Deterministic Delivery Timelines",
      description:
        "Guaranteed 1-to-2 week sprint cadences with predefined deliverables. Protect your project margins with transparent, fixed pricing and zero surprise invoices.",
      badge: "Margin Protection",
      Icon: Layers,
      guarantees: [
        "Fixed sprint price agreed upfront",
        "Zero surprise invoices or scope creep",
        "Predefined milestone delivery checklist",
        "Weekly staging preview for client reviews",
      ],
    },
    {
      title: "Rapid Pod Deployment",
      subtitle: "Zero Permanent Payroll Overhead",
      description:
        "Scale cross-functional engineering pods up or down based on your active client pipeline. Principal Architect, Full-Stack, Mobile, and QA ready in 7 days.",
      badge: "Elastic Squads",
      Icon: Zap,
      guarantees: [
        "Full pod ready in 7 days — no hiring lag",
        "Principal Architect included in every pod",
        "Scale up/down per your active pipeline",
        "No permanent payroll or benefits overhead",
      ],
    },
  ];

  const isAllOpen = openIndices.length === partnershipPillars.length;

  const toggleAll = () => {
    if (isAllOpen) {
      setOpenIndices([]);
    } else {
      setOpenIndices(partnershipPillars.map((_, i) => i));
    }
  };

  const handleToggle = (idx: number) => {
    const isCurrentlyOpen = openIndices.includes(idx);
    if (!isCurrentlyOpen) {
      setOpenIndices((prev) => [...prev, idx]);
      // When opening, smoothly bring this pillar into comfortable view below navbar
      setTimeout(() => {
        const el = cardRefs.current[idx];
        if (el) {
          const rect = el.getBoundingClientRect();
          const navHeight = 90;
          const targetY = window.scrollY + rect.top - navHeight - 12;
          window.scrollTo({ top: Math.max(0, targetY), behavior: "smooth" });
        }
      }, 50);
    } else {
      setOpenIndices((prev) => prev.filter((i) => i !== idx));
    }
  };

  return (
    <section
      id="partnerships"
      className="py-28 lg:py-36 bg-[#090D16] border-t border-white/[0.08] relative overflow-hidden scroll-mt-24"
    >
      {/* Background radial glow & grid */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_50%,black_20%,transparent_80%)] opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section Header ── */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <span className="section-label">White-Label &amp; Partners</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-[-0.03em] leading-tight">
            Your Silent Engineering Backbone
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            SprintStack provides 100% white-label software engineering capacity for{" "}
            <strong className="text-white font-semibold">Digital consultancies</strong>,{" "}
            <strong className="text-white font-semibold">Marketing agencies</strong>, and{" "}
            <strong className="text-white font-semibold">IT service providers</strong>.
          </p>
        </div>

        {/* ── 3-Step Agency Revenue Model Cards ── */}
        <div className="flex flex-col sm:flex-row items-stretch gap-3 mb-10 max-w-4xl mx-auto">
          {PARTNERSHIP_STEPS.map((s, i) => (
            <React.Fragment key={s.step}>
              <div className="flex-1 p-5 rounded-xl bg-[#111827] border border-[#1F2937] shadow-[0_4px_20px_rgba(0,0,0,0.25)] text-center space-y-1.5 transition-all duration-300 hover:border-blue-500/40 hover:-translate-y-0.5">
                <span className="text-[10px] font-bold uppercase tracking-wider block text-blue-400">
                  Step {s.step}
                </span>
                <div className="text-white font-semibold text-sm">{s.title}</div>
                <p className="text-xs text-slate-400 leading-normal">{s.desc}</p>
              </div>
              {i < 2 && (
                <div className="hidden sm:flex items-center justify-center shrink-0">
                  <ArrowRight className="w-4 h-4 text-slate-600" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* ── Section Controls ── */}
        <div className="flex items-center justify-between max-w-4xl mx-auto mb-5 px-1">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Partnership Models
          </span>
          <button
            type="button"
            onClick={toggleAll}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#1F2937] bg-[#111827] hover:bg-[#162238] hover:border-blue-500/40 text-xs font-semibold text-slate-300 shadow-2xs transition-all cursor-pointer"
          >
            {isAllOpen ? (
              <>
                <EyeOff className="w-3.5 h-3.5 text-slate-400" />
                <span>Collapse All</span>
              </>
            ) : (
              <>
                <Eye className="w-3.5 h-3.5 text-blue-400" />
                <span>Expand All</span>
              </>
            )}
          </button>
        </div>

        {/* ── Expandable Partnership Pillars (Guaranteed visible, smooth view positioning) ── */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {partnershipPillars.map((pillar, idx) => {
            const Icon = pillar.Icon;
            const isOpen = openIndices.includes(idx);

            return (
              <div
                key={pillar.title}
                ref={(el) => {
                  cardRefs.current[idx] = el;
                }}
                className={`rounded-2xl border bg-[#111827] transition-all duration-300 scroll-mt-28 overflow-hidden ${
                  isOpen
                    ? "border-blue-500/50 shadow-[0_12px_36px_rgba(59,130,246,0.12)] ring-1 ring-blue-500/20"
                    : "border-[#1F2937] shadow-[0_4px_20px_rgba(0,0,0,0.25)] hover:border-white/[0.16]"
                }`}
              >
                {/* ── Card Header Row (Clickable) ── */}
                <div
                  onClick={() => handleToggle(idx)}
                  className={`w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer select-none transition-colors border-l-4 ${
                    isOpen
                      ? "border-l-blue-500 bg-blue-500/[0.04]"
                      : "border-l-transparent hover:bg-white/[0.02]"
                  }`}
                >
                  {/* Left: Icon + Title info */}
                  <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border transition-transform duration-200 ${
                        isOpen
                          ? "bg-blue-600 text-white border-blue-500 shadow-sm scale-105"
                          : "bg-blue-500/10 text-blue-400 border-blue-500/20"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="min-w-0">
                      <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-0.5">
                        {pillar.subtitle}
                      </div>
                      <h3
                        className={`text-base sm:text-xl font-bold tracking-tight transition-colors truncate sm:whitespace-normal ${
                          isOpen ? "text-blue-400" : "text-white"
                        }`}
                      >
                        {pillar.title}
                      </h3>
                    </div>
                  </div>

                  {/* Right: Badge + Explicit Expand/Collapse Button */}
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="hidden sm:inline-flex text-[11px] font-semibold px-2.5 py-0.5 rounded-full border bg-blue-500/10 text-blue-400 border-blue-500/30">
                      {pillar.badge}
                    </span>

                    {/* Expand / Collapse Icon Button */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleToggle(idx);
                      }}
                      className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center border transition-all duration-200 cursor-pointer ${
                        isOpen
                          ? "bg-blue-500/20 text-blue-400 border-blue-500/40 shadow-2xs scale-105"
                          : "bg-[#090D16] text-slate-400 border-white/[0.08] hover:bg-blue-500/10 hover:text-blue-400 hover:border-blue-500/30"
                      }`}
                      aria-expanded={isOpen}
                      aria-label={isOpen ? "Collapse details" : "Expand details"}
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-blue-400" : "rotate-0 text-slate-400"
                        }`}
                      />
                    </button>
                  </div>
                </div>

                {/* ── Expanded Content ── */}
                {isOpen && (
                  <div className="p-5 sm:p-6 pt-3 sm:pt-4 border-t border-white/[0.08] animate-in fade-in duration-200">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
                      
                      {/* Left: Description + Guarantees */}
                      <div className="space-y-4">
                        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                          {pillar.description}
                        </p>
                        
                        <div className="space-y-2 pt-1">
                          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                            Pillar Guarantees
                          </div>
                          {pillar.guarantees.map((g) => (
                            <div key={g} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                              <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-400" />
                              <span>{g}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right: Actions */}
                      <div className="flex flex-col justify-end gap-3 pt-4 sm:pt-0">
                        <button
                          onClick={openBookingModal}
                          className="btn-primary w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold cursor-pointer active:scale-95 transition-transform"
                        >
                          <span>Discuss Partnership Terms</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                        <Link
                          href="/partners/white-label"
                          className="btn-secondary w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold active:scale-95 transition-transform text-slate-300 hover:text-white"
                        >
                          View Full Partner Program
                        </Link>
                      </div>

                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
