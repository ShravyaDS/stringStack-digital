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
  { Icon: ShieldCheck, colorClass: "text-[#3B82F6]" },
  { Icon: BarChart3, colorClass: "text-indigo-400" },
  { Icon: Layers, colorClass: "text-emerald-400" },
  { Icon: Activity, colorClass: "text-cyan-400" },
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
      className="py-20 lg:py-28 bg-[#090D16] border-y border-[#1E293B] text-white relative overflow-hidden"
      aria-label="Enterprise Solutions"
    >
      {/* ── Cybernetic Circuit & Glowing Horizon Floor (Electric Cyan & Sapphire Horizon) ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        
        {/* Top-Right Cybernetic HUD Radar & Circuit Board Traces */}
        <svg
          className="absolute -top-12 -right-12 w-[620px] h-[620px] opacity-45 md:opacity-65"
          viewBox="0 0 600 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="cyberCircuitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.15" />
            </linearGradient>
          </defs>

          {/* Concentric Telemetry HUD Rings */}
          <circle cx="500" cy="100" r="180" stroke="url(#cyberCircuitGrad)" strokeWidth="1.5" strokeDasharray="6 8" className="animate-[spin_60s_linear_infinite] origin-[500px_100px]" />
          <circle cx="500" cy="100" r="140" stroke="#38BDF8" strokeWidth="1" strokeDasharray="3 5" opacity="0.6" />
          <circle cx="500" cy="100" r="100" stroke="#06B6D4" strokeWidth="1.5" strokeDasharray="16 10" className="animate-[spin_40s_linear_infinite_reverse] origin-[500px_100px]" />
          <circle cx="500" cy="100" r="60" stroke="#60A5FA" strokeWidth="1" strokeDasharray="2 4" />
          <circle cx="500" cy="100" r="24" fill="#0EA5E9" fillOpacity="0.15" stroke="#38BDF8" strokeWidth="1" />

          {/* Radar Sweep Reticles */}
          <line x1="320" y1="100" x2="500" y2="100" stroke="#38BDF8" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
          <line x1="500" y1="100" x2="500" y2="280" stroke="#38BDF8" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />

          {/* Cybernetic PCB Circuit Board Traces (45° and 90° Routing) */}
          <g stroke="url(#cyberCircuitGrad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
            <path d="M 400 100 L 320 100 L 260 160 L 180 160 L 120 220 L 40 220" />
            <path d="M 430 170 L 370 230 L 300 230 L 240 290 L 140 290" />
            <path d="M 500 240 L 500 300 L 440 360 L 360 360 L 310 410 L 200 410" />
            <path d="M 360 100 L 290 100 L 230 160 L 230 240 L 170 300 L 80 300" />
            <path d="M 470 200 L 410 260 L 410 330 L 350 390 L 280 390" />
          </g>

          {/* Circuit Connection Solder Nodes with Glow */}
          <circle cx="40" cy="220" r="3.5" fill="#22D3EE" />
          <circle cx="140" cy="290" r="3.5" fill="#22D3EE" />
          <circle cx="200" cy="410" r="3.5" fill="#38BDF8" />
          <circle cx="80" cy="300" r="3.5" fill="#38BDF8" />
          <circle cx="280" cy="390" r="3.5" fill="#60A5FA" />
          <circle cx="260" cy="160" r="2.5" fill="#38BDF8" opacity="0.8" />
          <circle cx="300" cy="230" r="2.5" fill="#38BDF8" opacity="0.8" />
          <circle cx="440" cy="360" r="2.5" fill="#38BDF8" opacity="0.8" />
        </svg>

        {/* Ambient Top-Right Glow Aura */}
        <div className="absolute -top-16 -right-16 w-[650px] h-[650px] rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.18)_0%,rgba(37,99,235,0.12)_45%,transparent_70%)] blur-[95px]" />

        {/* ── The Glowing Laser Horizon Beam (Light Floor) ── */}
        <div className="absolute bottom-0 left-0 right-0 h-44 flex flex-col justify-end">
          {/* Atmospheric Upward Light Haze Bleed */}
          <div className="w-full h-36 bg-gradient-to-t from-cyan-500/22 via-blue-600/10 to-transparent blur-2xl" />
          
          {/* Intense Mid-Core Luminous Beam Glow */}
          <div className="w-full h-7 bg-gradient-to-r from-transparent via-cyan-400/50 via-blue-500/60 to-transparent blur-md" />
          
          {/* Razor-Sharp 2px Illuminated Horizon Laser Rail */}
          <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-300 via-blue-400 to-transparent shadow-[0_0_24px_#22d3ee,0_0_48px_#3b82f6]" />
        </div>

        {/* Subtle Tech Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#1E293B_1px,transparent_1px)] [background-size:32px_32px] opacity-35 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3 scroll-reveal">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span>Enterprise Software Systems</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Enterprise Solutions
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Mission-critical software systems tailored to your exact operational workflows — deployed on modern cloud infrastructure with zero recurring license lock-in.
          </p>
        </div>

        {/* ── Segmented Module Tabs (Direct Switcher) ── */}
        <div className="flex justify-center mb-8 scroll-reveal">
          <div className="inline-flex flex-wrap items-center justify-center p-1.5 rounded-xl bg-[#111827] border border-[#1E293B] shadow-xl gap-1 max-w-full">
            {ENTERPRISE_SOLUTIONS.map((mod, index) => {
              const isSelected = activeModuleIndex === index;
              const t = MODULE_THEMES[index];
              return (
                <button
                  key={mod.id}
                  onClick={() => goToSlide(index)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                    isSelected
                      ? "bg-[#2563EB] text-white shadow-md shadow-blue-500/20"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span className={`text-[10px] font-mono ${isSelected ? "text-blue-100" : "text-slate-500"}`}>
                    0{index + 1}
                  </span>
                  <t.Icon className={`w-3.5 h-3.5 ${isSelected ? "text-white" : t.colorClass}`} />
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
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center rounded-2xl p-6 sm:p-8 lg:p-10 bg-white border border-[#E2E8F0] shadow-2xl relative z-10"
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
                <div className="px-4 py-2.5 bg-[#F8FAFC] border-t border-[#E2E8F0] flex items-center justify-between text-xs">
                  <span className="text-[#475569] font-medium truncate pr-2">{activeImage.caption}</span>
                  <span className="flex items-center gap-2 shrink-0 text-emerald-700 font-semibold">
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
        <div className="flex items-center justify-between pt-8 mt-4 max-w-xl mx-auto">
          {/* Previous Solution */}
          <button
            onClick={handlePrev}
            aria-label="Previous Enterprise Solution"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#1E293B] bg-[#111827] hover:bg-[#1F2937] text-white text-xs font-semibold transition-all cursor-pointer active:scale-95 shadow-xs"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          {/* Step Progress & Indicator Dots */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-white">
              0{activeModuleIndex + 1} <span className="text-slate-500">/ 0{totalModules}</span>
            </span>

            <div className="flex items-center gap-1.5">
              {ENTERPRISE_SOLUTIONS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  aria-label={`Go to solution ${i + 1}`}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    activeModuleIndex === i
                      ? "w-7 bg-[#2563EB]"
                      : "w-2 bg-slate-700 hover:bg-slate-500"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Next Solution */}
          <button
            onClick={handleNext}
            aria-label="Next Enterprise Solution"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-transparent bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold transition-all cursor-pointer active:scale-95 shadow-md shadow-blue-500/25"
          >
            <span>Next Solution</span>
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
