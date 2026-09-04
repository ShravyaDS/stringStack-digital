"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { CheckCircle2, ShieldCheck, Zap, FileCode } from "lucide-react";
import { DELIVERY_FRAMEWORK } from "@/lib/constants";
import { useBookingModal } from "../ModalProvider";

const PHASE_ICONS = [FileCode, Zap, ShieldCheck, CheckCircle2];

export function DeliveryFramework() {
  const { openBookingModal } = useBookingModal();
  const [selectedPhaseIndex, setSelectedPhaseIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      setPrefersReducedMotion(mq.matches);
      const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
      mq.addEventListener("change", handler);
      return () => mq.removeEventListener("change", handler);
    }
  }, []);

  const sectionRef = useRef<HTMLElement>(null);
  const [scrollFillPercent, setScrollFillPercent] = useState<number>(0);
  const [manualOverride, setManualOverride] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress through the section
      const enterOffset = windowHeight * 0.75;
      const exitOffset = windowHeight * 0.25;
      const totalScrollDistance = rect.height + enterOffset - exitOffset;
      const currentScroll = enterOffset - rect.top;
      
      const rawProgress = Math.min(Math.max(currentScroll / totalScrollDistance, 0), 1);
      setScrollFillPercent(Math.round(rawProgress * 100));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prefersReducedMotion]);

  const activePhase = DELIVERY_FRAMEWORK[selectedPhaseIndex];
  const ActiveIcon = PHASE_ICONS[selectedPhaseIndex];

  // Combined rail fill: respects scroll progress and manual selection
  const manualPercent = (selectedPhaseIndex / (DELIVERY_FRAMEWORK.length - 1)) * 100;
  const displayRailWidth = manualOverride ? manualPercent : Math.max(scrollFillPercent, manualPercent);

  const handleSelectPhase = (idx: number) => {
    setManualOverride(true);
    setSelectedPhaseIndex(idx);
    setTimeout(() => setManualOverride(false), 2500);
  };

  return (
    <section id="process" ref={sectionRef} className="py-20 lg:py-28 bg-[#FFFFFF] border-t border-[#E2E8F0] relative overflow-hidden">
      {/* ── Aesthetic Architectural Blueprint Background ── */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
        <Image
          src="/images/delivery-blueprint-bg.jpg"
          alt="Delivery Workflow Architectural Blueprint"
          fill
          priority={false}
          className="object-cover object-center opacity-45"
        />
        {/* Architectural drafting gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-white/95" />
        {/* Precision drafting micro-grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(228,230,234,0.45)_1px,transparent_1px),linear-gradient(to_bottom,rgba(228,230,234,0.45)_1px,transparent_1px)] [background-size:36px_36px] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_50%,black_30%,transparent_85%)] opacity-65" />
        {/* Ambient soft blue lighting orb */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[radial-gradient(circle,rgba(37,99,235,0.06)_0%,transparent_70%)] blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="section-label">Delivery Process</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            How We Deliver Excellence
          </h2>
          <p className="text-[#475569] text-sm sm:text-base leading-relaxed">
            A structured 4-stage engineering methodology: 48-hour scope lock, 1–2 week sprint deployments, rigorous QA audits, and complete IP &amp; code handover.
          </p>
        </div>

        {/* ── Phase Cards Grid with Connecting Timeline Rail ── */}
        <div className="relative mb-8">
          
          {/* Horizontal Connecting Timeline Rail (Desktop) */}
          <div className="hidden lg:block absolute top-[38px] left-[12.5%] right-[12.5%] h-[2px] bg-[#E2E8F0] z-0">
            {/* Dynamic Scroll & Selection Progress Fill Track */}
            <div
              style={{
                width: `${displayRailWidth}%`,
                transition: prefersReducedMotion ? "none" : "width 250ms ease-out",
              }}
              className="h-full bg-[#2563EB]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
            {DELIVERY_FRAMEWORK.map((item, idx) => {
              const isSelected = selectedPhaseIndex === idx;
              const Icon = PHASE_ICONS[idx];

              return (
                <button
                  key={item.phase}
                  onClick={() => handleSelectPhase(idx)}
                  className={`text-left p-5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between group active:scale-[0.98] ${
                    isSelected
                      ? "bg-blue-50/70 border-[#2563EB] shadow-xs"
                      : "bg-[#F8FAFC] border-[#E2E8F0] hover:border-[#CBD5E1]"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      {/* Consistent Icon Tint: Filled blue when selected, soft blue tint when unselected */}
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                          isSelected
                            ? "bg-[#2563EB] text-white shadow-xs"
                            : "bg-blue-50 text-[#2563EB] border border-blue-100 group-hover:border-blue-200"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>

                      {/* Phase Badge: Filled blue with white text when selected, plain gray when unselected */}
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded transition-colors ${
                          isSelected
                            ? "bg-[#2563EB] text-white"
                            : "bg-slate-100 text-[#475569] border border-[#E2E8F0] group-hover:text-[#0F172A]"
                        }`}
                      >
                        {item.phase}
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-[#0F172A] mb-1">
                      {item.name}
                    </h3>
                    <span className="text-xs text-[#64748B]">{item.duration}</span>
                  </div>

                  <div className="pt-3 mt-3 border-t border-[#E2E8F0]">
                    <span
                      className={`text-xs font-semibold ${
                        isSelected ? "text-[#2563EB]" : "text-[#94A3B8] group-hover:text-[#64748B]"
                      }`}
                    >
                      {isSelected ? "● Selected Stage" : "View Deliverables"}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Active Phase Detail Panel (Animated Transition) ── */}
        <div className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] shadow-sm">
          <div
            key={selectedPhaseIndex}
            style={{
              animation: prefersReducedMotion
                ? "none"
                : "phasePanelFade 200ms ease-out forwards",
            }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            {/* Left: Highlights (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#2563EB] text-white shadow-xs">
                  <ActiveIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono font-semibold text-[#2563EB] uppercase block">
                    {activePhase.phase} · {activePhase.duration}
                  </span>
                  <h3 className="text-xl font-bold text-[#0F172A]">{activePhase.name}</h3>
                </div>
              </div>

              {/* Sprint Milestones with subtle staggered slide-in */}
              <div className="space-y-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B] block">
                  Sprint Milestones:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activePhase.items.map((it, mIdx) => (
                    <div
                      key={it}
                      style={{
                        animation: prefersReducedMotion
                          ? "none"
                          : `milestoneSlide 150ms ease-out ${mIdx * 40}ms both`,
                      }}
                      className="flex items-start gap-2.5 text-sm text-[#334155]"
                    >
                      <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600" />
                      <span>{it}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Distinct Formal Handover Callout Box */}
              <div className="p-4 rounded-xl text-sm bg-blue-50/70 border border-blue-100">
                <span className="text-[#2563EB] text-xs uppercase tracking-wider font-bold">
                  Formal Handover:{" "}
                </span>
                <strong className="text-[#0F172A]">{activePhase.deliverable}</strong>
              </div>
            </div>

            {/* Right: Guarantee & Anchored CTA (5 cols) */}
            <div className="lg:col-span-5 p-6 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-3.5 flex flex-col justify-between">
              <div className="space-y-1.5">
                <h4 className="text-sm font-bold text-[#0F172A]">Sprint Transparency Guarantee</h4>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Every line of code is committed directly to your repository with automated CI/CD staging links. Zero black boxes.
                </p>
              </div>

              {/* Guarantee checklist items with subtle stagger */}
              <div className="space-y-2 py-1">
                {[
                  "Daily async standups",
                  "Live staging URLs",
                  "Sprint review calls",
                  "Full repo access",
                ].map((item, gIdx) => (
                  <div
                    key={item}
                    style={{
                      animation: prefersReducedMotion
                        ? "none"
                        : `milestoneSlide 150ms ease-out ${(gIdx + 2) * 40}ms both`,
                    }}
                    className="flex items-center gap-2 text-xs text-[#475569]"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Anchored CTA Button */}
              <div className="pt-1">
                <button
                  onClick={openBookingModal}
                  className="btn-primary w-full py-2.5 text-sm font-semibold cursor-pointer active:scale-95 transition-transform"
                >
                  Request Sprint Plan
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* ── Keyframe Animations for Panel Fade and Milestone Stagger ── */}
      <style jsx global>{`
        @keyframes phasePanelFade {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes milestoneSlide {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
