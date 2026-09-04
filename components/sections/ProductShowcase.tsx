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
  { Icon: ShieldCheck },
  { Icon: BarChart3 },
  { Icon: Layers },
  { Icon: Activity },
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
  }, [activeModuleIndex]);

  const activeModule = ENTERPRISE_SOLUTIONS[activeModuleIndex];
  const activeImage = PRODUCT_IMAGES[activeModuleIndex] || PRODUCT_IMAGES[0];

  return (
    <section
      id="enterprise-solutions"
      className="py-28 lg:py-36 bg-[#090D16] border-t border-white/[0.08] relative overflow-hidden scroll-mt-24"
    >
      {/* Soft ambient background glow */}
      <div className="absolute inset-0 section-radial-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="section-label">Enterprise Software Systems</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-[-0.03em]">
            Enterprise Solutions &amp; Proprietary OS
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Battle-tested enterprise architectures deployed on-premise or cloud with complete intellectual property ownership.
          </p>
        </div>

        {/* ── Top Cylinder Stage Tabs ── */}
        <div className="flex justify-center mb-8 overflow-x-auto no-scrollbar py-1">
          <div className="inline-flex p-1.5 rounded-2xl bg-[#0E1626] border border-white/[0.08] gap-1.5 max-w-full">
            {ENTERPRISE_SOLUTIONS.map((mod, idx) => {
              const isSelected = activeModuleIndex === idx;
              const t = MODULE_THEMES[idx] || MODULE_THEMES[0];

              return (
                <button
                  key={mod.id}
                  onClick={() => goToSlide(idx)}
                  className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    isSelected
                      ? "bg-blue-600 text-white shadow-[0_0_16px_rgba(37,99,235,0.4)] border border-blue-500"
                      : "text-slate-300 hover:text-white hover:bg-white/[0.04] border border-transparent"
                  }`}
                >
                  <span className={`font-mono text-[10px] ${isSelected ? "text-blue-100" : "text-slate-500"}`}>
                    0{idx + 1}
                  </span>
                  <t.Icon className={`w-3.5 h-3.5 ${isSelected ? "text-white" : "text-blue-400"}`} />
                  <span>{mod.title.split("&")[0].trim()}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── 3D Cylinder Stage with Elevated Dark Surface ── */}
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
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center rounded-2xl p-6 sm:p-8 lg:p-10 bg-[#0E1626] border border-white/[0.08] shadow-[0_16px_48px_rgba(0,0,0,0.6)] relative z-10"
          >
            {/* Left Column: Details */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Badge & Module Counter */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="studio-pill font-mono text-[11px] text-blue-300 border-blue-500/20 bg-blue-500/10">
                      {activeModule.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400">{activeModule.moduleNumber}</span>
                  </div>
                  <span className="text-xs font-mono text-slate-500">
                    0{activeModuleIndex + 1} / 0{totalModules}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {activeModule.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-300/85 leading-relaxed">
                  {activeModule.summary}
                </p>
              </div>

              {/* Features Checklist */}
              <div className="space-y-2.5">
                <span className="text-[11px] font-mono font-semibold uppercase tracking-widest text-slate-400 block">
                  Platform Architecture Includes:
                </span>
                <div className="space-y-2">
                  {activeModule.keyFeatures.map((feat) => (
                    <div key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-blue-400" />
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
                    className="p-3 rounded-xl bg-[#090D16] border border-white/[0.08] space-y-1"
                  >
                    <div className="text-[10px] text-slate-400 uppercase font-mono tracking-wider truncate">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </div>
                    <div className="text-sm font-bold font-mono text-white">
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
                  className="btn-secondary px-5 py-2.5 text-sm font-semibold text-center cursor-pointer active:scale-95 transition-transform"
                >
                  Technical Breakdown
                </Link>
              </div>
            </div>

            {/* Right Column: Screenshot with Dark UI Chrome */}
            <div className="lg:col-span-7">
              <div className="chrome-window bg-[#090D16] border border-white/[0.10] rounded-2xl overflow-hidden shadow-2xl group">
                
                {/* Browser Chrome Header Dots */}
                <div className="px-4 py-2 bg-[#070B12] border-b border-white/[0.08] flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 tracking-wider truncate max-w-[240px]">
                    sprintstack://enterprise/{activeModule.id}
                  </div>
                  <div className="w-8" />
                </div>

                {/* Screenshot Preview */}
                <div className="relative aspect-[16/9] w-full bg-[#070B12] overflow-hidden">
                  <Image
                    src={activeImage.src}
                    alt={activeImage.alt}
                    fill
                    priority
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>

                {/* Dark Caption Bar */}
                <div className="px-3 sm:px-4 py-2 sm:py-2.5 bg-[#070B12] border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                  <span className="text-slate-300 font-medium truncate text-[11px] sm:text-xs">{activeImage.caption}</span>
                  <span className="flex items-center gap-1.5 shrink-0 text-blue-400 font-semibold text-[11px] sm:text-xs">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
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
            className="btn-secondary flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 text-xs font-semibold cursor-pointer active:scale-95"
          >
            <ChevronLeft className="w-4 h-4 text-slate-400" />
            <span className="hidden xs:inline sm:inline">Previous</span>
          </button>

          {/* Step Progress & Indicator Dots */}
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="font-mono text-xs font-bold text-white">
              0{activeModuleIndex + 1} <span className="text-slate-500">/ 0{totalModules}</span>
            </span>

            <div className="hidden sm:flex items-center gap-1.5">
              {ENTERPRISE_SOLUTIONS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  aria-label={`Go to solution ${i + 1}`}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    activeModuleIndex === i
                      ? "w-7 bg-blue-500"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Next Solution */}
          <button
            onClick={handleNext}
            aria-label="Next Enterprise Solution"
            className="btn-primary flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 text-xs font-semibold cursor-pointer active:scale-95"
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
