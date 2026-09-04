"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  Cpu,
  Activity,
  Layers,
  BarChart3,
} from "lucide-react";
import { ENTERPRISE_SOLUTIONS } from "@/lib/constants";
import { useBookingModal } from "../ModalProvider";

const PRODUCT_IMAGES = [
  {
    src: "/images/products/attendance-erp.jpg",
    alt: "SprintStack Attendance ERP OS Interface",
    caption: "Biometric Edge Sync & Geofenced Mobile Punch Terminal",
  },
  {
    src: "/images/products/project-governance.jpg",
    alt: "SprintStack Project Governance & Resource OS",
    caption: "Fixed-Price Sprint Burn Velocity & Milestone Health Monitor",
  },
  {
    src: "/images/products/custom-crm.jpg",
    alt: "SprintStack Custom CRM & Deal Routing Engine",
    caption: "Omnichannel Lead Ingestion & Sub-200ms Routing Topology",
  },
  {
    src: "/images/products/process-automation.jpg",
    alt: "SprintStack Process Telemetry & Compliance Node",
    caption: "Cryptographic Audit Trail & Real-time Webhook Mesh",
  },
];

const MODULE_THEMES = [
  { Icon: ShieldCheck, colorClass: "text-[#2563EB]" },
  { Icon: BarChart3, colorClass: "text-[#2563EB]" },
  { Icon: Layers, colorClass: "text-[#2563EB]" },
  { Icon: Activity, colorClass: "text-[#2563EB]" },
];

export function ProductShowcase() {
  const { openBookingModal } = useBookingModal();
  const [activeModuleIndex, setActiveModuleIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [isAnimating, setIsAnimating] = useState(false);

  const totalModules = ENTERPRISE_SOLUTIONS.length;

  const goToSlide = (targetIndex: number) => {
    if (isAnimating || targetIndex === activeModuleIndex) return;
    setDirection(targetIndex > activeModuleIndex ? "next" : "prev");
    setIsAnimating(true);
    setActiveModuleIndex(targetIndex);
    setTimeout(() => setIsAnimating(false), 450);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setDirection("next");
    setIsAnimating(true);
    setActiveModuleIndex((prev) => (prev + 1) % totalModules);
    setTimeout(() => setIsAnimating(false), 450);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setDirection("prev");
    setIsAnimating(true);
    setActiveModuleIndex((prev) => (prev - 1 + totalModules) % totalModules);
    setTimeout(() => setIsAnimating(false), 450);
  };

  // Touch Swipe navigation
  const touchStartXRef = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const diff = touchStartXRef.current - e.changedTouches[0].clientX;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    touchStartXRef.current = null;
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isAnimating]);

  const activeModule = ENTERPRISE_SOLUTIONS[activeModuleIndex];
  const activeImage = PRODUCT_IMAGES[activeModuleIndex];

  return (
    <section
      id="enterprise-solutions"
      className="py-20 lg:py-28 bg-[#FFFFFF] border-t border-[#E2E8F0] relative overflow-hidden text-[#0F172A]"
      aria-label="Enterprise Solutions"
    >
      {/* ── Aesthetic Architectural Blueprint Background ── */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
        <Image
          src="/images/tech-stack/tech-stack-bg.jpg"
          alt="Enterprise Solutions Architecture"
          fill
          priority={false}
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-white/95" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(228,230,234,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(228,230,234,0.5)_1px,transparent_1px)] [background-size:36px_36px] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_45%,black_20%,transparent_80%)] opacity-60" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[radial-gradient(circle,rgba(37,99,235,0.06)_0%,transparent_70%)] blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-6 space-y-3">
          <span className="section-label">
            Enterprise Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Enterprise Solutions
          </h2>
          <p className="text-[#475569] text-sm sm:text-base leading-relaxed">
            Mission-critical software systems tailored to your exact operational workflows — deployed on modern cloud infrastructure with zero recurring license lock-in.
          </p>
        </div>

        {/* ── Live Architecture Status Pill ── */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-mono text-slate-500 mb-8 flex-wrap">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 shadow-2xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Enterprise Cloud Node Active</span>
          </span>
          <span className="hidden sm:inline text-slate-300">•</span>
          <span className="text-slate-500 hidden sm:inline">Edge Latency: &lt; 28ms</span>
          <span className="hidden sm:inline text-slate-300">•</span>
          <span className="text-slate-500 hidden sm:inline">99.99% Guaranteed SLA</span>
        </div>

        {/* ── Segmented Module Tabs (Swipeable Scrollbar-free on Mobile, Centered on Desktop) ── */}
        <div className="flex justify-start sm:justify-center mb-6 sm:mb-8 overflow-x-auto no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="inline-flex items-center p-1 sm:p-1.5 rounded-xl bg-[#F1F5F9] border border-[#E2E8F0] shadow-xs gap-1 shrink-0">
            {ENTERPRISE_SOLUTIONS.map((mod, index) => {
              const isSelected = activeModuleIndex === index;
              const t = MODULE_THEMES[index];
              return (
                <button
                  key={mod.id}
                  onClick={() => goToSlide(index)}
                  className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                    isSelected
                      ? "bg-[#2563EB] text-white shadow-xs"
                      : "text-[#475569] hover:text-[#0F172A] hover:bg-white"
                  }`}
                >
                  <span className={`text-[10px] font-mono ${isSelected ? "text-blue-100" : "text-slate-400"}`}>
                    0{index + 1}
                  </span>
                  <t.Icon className={`w-3.5 h-3.5 ${isSelected ? "text-white" : "text-[#2563EB]"}`} />
                  <span>{mod.title.split("&")[0].trim()}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── 3D Cylinder Stage with Pure White Card Surface ── */}
        <div
          className="relative w-full max-w-6xl mx-auto"
          style={{ perspective: "1400px" }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            key={activeModuleIndex}
            style={{
              animation: direction === "next"
                ? "cylinderRollNext 450ms cubic-bezier(0.16, 1, 0.3, 1) forwards"
                : "cylinderRollPrev 450ms cubic-bezier(0.16, 1, 0.3, 1) forwards",
              transformStyle: "preserve-3d",
            }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center rounded-2xl p-4 sm:p-8 lg:p-10 bg-white border border-[#E2E8F0] shadow-2xl relative z-10"
          >
            {/* Left Column: Details (5 cols, dark ink text on crisp white card) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Badge & Module Counter */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#EEF2FF] text-[#2554EB] border border-blue-100">
                      {activeModule.badge}
                    </span>
                    <span className="text-xs font-mono font-semibold text-[#64748B]">{activeModule.moduleNumber}</span>
                  </div>
                  <span className="text-xs font-mono text-[#94A3B8]">
                    0{activeModuleIndex + 1} / 0{totalModules}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight">
                  {activeModule.title}
                </h3>
                <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                  {activeModule.summary}
                </p>
              </div>

              {/* Features Checklist */}
              <div className="space-y-2.5">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-[#64748B] block">
                  Platform Architecture Includes:
                </span>
                <div className="space-y-2">
                  {activeModule.keyFeatures.map((feat) => (
                    <div key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#334155]">
                      <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Metrics Grid */}
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(activeModule.technicalMetrics).map(([key, val]) => (
                  <div
                    key={key}
                    className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1 hover:-translate-y-0.5 transition-transform duration-200"
                  >
                    <div className="text-[10px] text-[#64748B] uppercase tracking-wider truncate">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </div>
                    <div className="text-sm font-bold font-mono text-[#0F172A]">
                      {val}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  onClick={openBookingModal}
                  className="btn-primary px-5 py-2.5 text-sm font-semibold cursor-pointer active:scale-95 transition-transform"
                >
                  Scope {activeModule.title.split(" ")[0]} System
                </button>
                <Link
                  href={activeModule.link}
                  className="btn-secondary px-5 py-2.5 text-sm font-semibold text-center text-[#0F172A] bg-white border border-[#E2E8F0] hover:bg-slate-50 active:scale-95 transition-all"
                >
                  Technical Breakdown
                </Link>
              </div>
            </div>

            {/* Right Column: Screenshot with Light UI Chrome (7 cols) */}
            <div className="lg:col-span-7">
              <div className="chrome-window bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden shadow-sm group">
                
                {/* Browser Chrome Header Dots */}
                <div className="px-4 py-2 bg-[#F8FAFC] border-b border-[#E2E8F0] flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  </div>
                  <div className="text-[11px] font-mono text-[#94A3B8] tracking-wider truncate max-w-[220px]">
                    sprintstack://enterprise/{activeModule.id}
                  </div>
                  <div className="w-8" />
                </div>

                {/* Screenshot Preview */}
                <div className="relative aspect-[16/9] w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={activeImage.src}
                    alt={activeImage.alt}
                    fill
                    priority
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>

                {/* Light Caption Bar */}
                <div className="px-3 sm:px-4 py-2 sm:py-2.5 bg-[#F8FAFC] border-t border-[#E2E8F0] flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                  <span className="text-[#475569] font-medium truncate text-[11px] sm:text-xs">{activeImage.caption}</span>
                  <span className="flex items-center gap-1.5 shrink-0 text-emerald-700 font-semibold text-[11px] sm:text-xs">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    Live Platform Preview
                  </span>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* ── Single, Unified Cylinder Navigation Controller ── */}
        <div className="flex items-center justify-between pt-6 sm:pt-8 mt-4 max-w-xl mx-auto px-1">
          {/* Previous Solution */}
          <button
            onClick={handlePrev}
            aria-label="Previous Enterprise Solution"
            className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl border border-[#E2E8F0] bg-white hover:bg-slate-50 text-[#0F172A] text-xs font-semibold transition-all cursor-pointer active:scale-95 shadow-xs"
          >
            <ChevronLeft className="w-4 h-4 text-[#64748B]" />
            <span className="hidden xs:inline sm:inline">Previous</span>
          </button>

          {/* Step Progress & Indicator Dots */}
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="font-mono text-xs font-bold text-[#0F172A]">
              0{activeModuleIndex + 1} <span className="text-slate-400">/ 0{totalModules}</span>
            </span>

            <div className="hidden sm:flex items-center gap-1.5">
              {ENTERPRISE_SOLUTIONS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  aria-label={`Go to solution ${i + 1}`}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    activeModuleIndex === i
                      ? "w-7 bg-[#2563EB]"
                      : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Next Solution */}
          <button
            onClick={handleNext}
            aria-label="Next Enterprise Solution"
            className="flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl border border-transparent bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold transition-all cursor-pointer active:scale-95 shadow-xs"
          >
            <span>Next<span className="hidden xs:inline sm:inline"> Solution</span></span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* ── CSS 3D Cylinder Keyframe Animations ── */}
      <style jsx global>{`
        @keyframes cylinderRollNext {
          0% {
            opacity: 0.3;
            transform: rotateX(24deg) translateY(32px) translateZ(-60px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: rotateX(0deg) translateY(0) translateZ(0) scale(1);
          }
        }

        @keyframes cylinderRollPrev {
          0% {
            opacity: 0.3;
            transform: rotateX(-24deg) translateY(-32px) translateZ(-60px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: rotateX(0deg) translateY(0) translateZ(0) scale(1);
          }
        }
      `}</style>
    </section>
  );
}
