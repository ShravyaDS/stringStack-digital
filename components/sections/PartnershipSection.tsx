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
  ChevronUp,
  Eye,
  EyeOff,
} from "lucide-react";
import { useBookingModal } from "../ModalProvider";

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
      className="py-16 lg:py-24 bg-[#F8FAFC] border-t border-[#E2E8F0] relative overflow-hidden scroll-mt-24"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(228,230,234,0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(228,230,234,0.35)_1px,transparent_1px)] [background-size:36px_36px] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_50%,black_20%,transparent_80%)] opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section Header ── */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
          <span className="section-label">White-Label &amp; Partners</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Your Silent Engineering Backbone
          </h2>
          <p className="text-[#475569] text-sm sm:text-base leading-relaxed">
            SprintStack provides 100% white-label software engineering capacity for{" "}
            <strong className="text-[#0F172A]">Digital consultancies</strong>,{" "}
            <strong className="text-[#0F172A]">Marketing agencies</strong>, and{" "}
            <strong className="text-[#0F172A]">IT service providers</strong>.
          </p>
        </div>

        {/* ── 3-Step Visual Delivery Model ── */}
        <div className="flex flex-col sm:flex-row items-stretch gap-3 mb-12 max-w-2xl mx-auto">
          {[
            { step: "01", title: "Agency Lands Client", desc: "You scope and price under your agency brand." },
            { step: "02", title: "SprintStack Builds", desc: "We engineer behind the scenes under strict NDA." },
            { step: "03", title: "Agency Delivers", desc: "You deliver production code with 100% IP ownership." },
          ].map((s, i) => (
            <React.Fragment key={s.step}>
              <div className="flex-1 p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-[0_1px_4px_rgba(15,23,42,0.04)] text-center space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider block text-[#2563EB]">
                  Step {s.step}
                </span>
                <div className="text-[#0F172A] font-semibold text-sm">{s.title}</div>
                <p className="text-xs text-[#64748B]">{s.desc}</p>
              </div>
              {i < 2 && (
                <div className="hidden sm:flex items-center justify-center shrink-0">
                  <ArrowRight className="w-4 h-4 text-[#94A3B8]" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* ── Section Controls ── */}
        <div className="flex items-center justify-between max-w-4xl mx-auto mb-4 px-1">
          <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wider">
            Partnership Models
          </span>
          <button
            type="button"
            onClick={toggleAll}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E2E8F0] bg-white hover:bg-slate-50 text-xs font-semibold text-[#334155] shadow-2xs transition-colors cursor-pointer"
          >
            {isAllOpen ? (
              <>
                <EyeOff className="w-3.5 h-3.5 text-[#64748B]" />
                <span>Collapse All</span>
              </>
            ) : (
              <>
                <Eye className="w-3.5 h-3.5 text-[#2563EB]" />
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
                className={`rounded-2xl border bg-white transition-all duration-300 scroll-mt-28 overflow-hidden ${
                  isOpen
                    ? "border-blue-400 shadow-[0_12px_36px_rgba(37,99,235,0.12)] ring-1 ring-blue-500/15"
                    : "border-[#E2E8F0] shadow-[0_2px_8px_rgba(15,23,42,0.04)] hover:border-blue-200"
                }`}
              >
                {/* ── Card Header Row (Clickable) ── */}
                <div
                  onClick={() => handleToggle(idx)}
                  className={`w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer select-none transition-colors border-l-4 ${
                    isOpen
                      ? "border-l-[#2563EB] bg-blue-50/25"
                      : "border-l-transparent hover:bg-slate-50/70"
                  }`}
                >
                  {/* Left: Icon + Title info */}
                  <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border transition-transform duration-200 ${
                        isOpen
                          ? "bg-blue-600 text-white border-blue-600 shadow-sm scale-105"
                          : "bg-blue-50 text-blue-600 border-blue-100"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="min-w-0">
                      <div className="text-xs font-semibold uppercase tracking-wider text-[#64748B] mb-0.5">
                        {pillar.subtitle}
                      </div>
                      <h3
                        className={`text-base sm:text-xl font-bold tracking-tight transition-colors truncate sm:whitespace-normal ${
                          isOpen ? "text-blue-600" : "text-[#0F172A]"
                        }`}
                      >
                        {pillar.title}
                      </h3>
                    </div>
                  </div>

                  {/* Right: Badge + Explicit Expand/Collapse Button */}
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="hidden sm:inline-flex text-[11px] font-semibold px-2.5 py-0.5 rounded-full border bg-blue-50 text-blue-700 border-blue-200/70">
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
                          ? "bg-blue-50 text-[#2563EB] border-blue-200 shadow-2xs scale-105"
                          : "bg-[#F8FAFC] text-[#64748B] border-[#E2E8F0] hover:bg-blue-50 hover:text-[#2563EB] hover:border-blue-200"
                      }`}
                      aria-expanded={isOpen}
                      aria-label={isOpen ? "Collapse details" : "Expand details"}
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-[#2563EB]" : "rotate-0 text-[#64748B]"
                        }`}
                      />
                    </button>
                  </div>
                </div>

                {/* ── Expanded Content ── */}
                {isOpen && (
                  <div className="p-5 sm:p-6 pt-3 sm:pt-4 border-t border-slate-100 animate-in fade-in duration-200">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
                      
                      {/* Left: Description + Guarantees */}
                      <div className="space-y-4">
                        <p className="text-[#475569] text-sm sm:text-base leading-relaxed">
                          {pillar.description}
                        </p>
                        
                        <div className="space-y-2 pt-1">
                          <div className="text-xs font-semibold uppercase tracking-wider text-[#64748B] mb-2">
                            Pillar Guarantees
                          </div>
                          {pillar.guarantees.map((g) => (
                            <div key={g} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#334155]">
                              <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600" />
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
                          className="btn-secondary w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold active:scale-95 transition-transform text-[#334155] hover:text-[#2563EB]"
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
