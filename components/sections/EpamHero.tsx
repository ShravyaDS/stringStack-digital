"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Sparkles, Globe, Zap, Shield, Gauge, CheckCircle2 } from "lucide-react";
import { useBookingModal } from "../ModalProvider";

interface HeroSlide {
  id: string;
  eyebrow: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  primaryCtaText: string;
  primaryCtaAction: "booking" | "demo";
  secondaryCtaText: string;
  secondaryCtaLink: string;
  bgImage: string;
  accentColor: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: "software-engineering",
    eyebrow: "High-Velocity Product Engineering",
    title: "Enterprise-Grade Software.",
    titleHighlight: "Delivered on Fixed Sprints.",
    subtitle:
      "We architect, build, and deploy mission-critical software solutions for businesses globally — US, UK, UAE, Singapore, and worldwide. Zero agency fluff. 100% IP ownership.",
    primaryCtaText: "Book a Technical Discovery",
    primaryCtaAction: "booking",
    secondaryCtaText: "Explore Enterprise Software",
    secondaryCtaLink: "/#enterprise-solutions",
    bgImage: "/images/hero/hero-slide-1.jpg",
    accentColor: "blue",
  },
  {
    id: "core-capabilities",
    eyebrow: "Core Engineering Capabilities",
    title: "Reimagine Your Business",
    titleHighlight: "Through High-Velocity Technology.",
    subtitle:
      "Enterprise web applications, native & cross-platform mobile apps (Flutter, iOS, Android), omnichannel commerce, and automated enterprise API pipelines — all on fixed sprint cadence.",
    primaryCtaText: "Book a Technical Discovery",
    primaryCtaAction: "booking",
    secondaryCtaText: "View Engineering Services",
    secondaryCtaLink: "/#solutions",
    bgImage: "/images/hero/hero-slide-2.jpg",
    accentColor: "blue",
  },
  {
    id: "attendance-erp",
    eyebrow: "Flagship Enterprise Product",
    title: "Attendance & Workforce ERP.",
    titleHighlight: "Engineered for 5,000+ Concurrent Staff.",
    subtitle:
      "Biometric hardware sync, automated shift scheduling, geofenced mobile check-in, and instant multi-country payroll export. Production-ready.",
    primaryCtaText: "Schedule Technical Discovery",
    primaryCtaAction: "booking",
    secondaryCtaText: "Explore Attendance ERP",
    secondaryCtaLink: "/products/attendance-erp",
    bgImage: "/images/hero/hero-slide-3.jpg",
    accentColor: "emerald",
  },
];

const WHAT_WE_BUILD = [
  "Web Applications",
  "Mobile Apps",
  "ERP Systems",
  "CRM Platforms",
  "Workflow Automation",
  "Digital Products",
];

const TRUST_STATS = [
  { id: "markets", icon: <Globe className="w-4 h-4" />, value: "6+", label: "Global Markets" },
  { id: "cadence", icon: <Zap className="w-4 h-4" />, value: "1–2 Wk", label: "Sprint Cadence" },
  { id: "ip", icon: <Shield className="w-4 h-4" />, value: "100%", label: "IP Ownership" },
  { id: "speed", icon: <Gauge className="w-4 h-4" />, value: "<0.4s", label: "Core Web Vitals" },
  { id: "sla", icon: <CheckCircle2 className="w-4 h-4" />, value: "99.99%", label: "SLA Guarantee" },
];

export function EpamHero() {
  const { openBookingModal, openDemoModal } = useBookingModal();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [statMarkets, setStatMarkets] = useState(0);
  const [statIp, setStatIp] = useState(0);
  const [statSla, setStatSla] = useState(90);
  const touchStartXRef = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const diff = touchStartXRef.current - e.changedTouches[0].clientX;
    if (diff > 40) {
      handleNext();
    } else if (diff < -40) {
      handlePrev();
    }
    touchStartXRef.current = null;
  };

  useEffect(() => {
    setIsMounted(true);
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStatMarkets(6);
      setStatIp(100);
      setStatSla(99.99);
      return;
    }
    const duration = 1000;
    const startTime = performance.now();
    let animId: number;

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setStatMarkets(Math.round(6 * ease));
      setStatIp(Math.round(100 * ease));
      setStatSla(Number((90 + 9.99 * ease).toFixed(2)));
      if (progress < 1) {
        animId = requestAnimationFrame(step);
      }
    };
    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, []);

  const SLIDE_DURATION = 7500;

  useEffect(() => {
    if (isPaused) return;
    const interval = 50;
    const step = (interval / SLIDE_DURATION) * 100;
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentSlideIndex((old) => (old + 1) % HERO_SLIDES.length);
          return 0;
        }
        return prev + step;
      });
    }, interval);
    return () => clearInterval(timer);
  }, [isPaused]);

  const goToSlide = (idx: number) => {
    setProgress(0);
    setIsTransitioning(true);
    setCurrentSlideIndex(idx);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 250);
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    const nextIdx = (currentSlideIndex + 1) % HERO_SLIDES.length;
    goToSlide(nextIdx);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    const prevIdx = (currentSlideIndex - 1 + HERO_SLIDES.length) % HERO_SLIDES.length;
    goToSlide(prevIdx);
  };

  const activeSlide = HERO_SLIDES[currentSlideIndex];

  return (
    <section
      className="relative min-h-[85vh] sm:min-h-[90vh] md:min-h-[92vh] pt-24 sm:pt-28 pb-0 overflow-hidden flex flex-col bg-slate-50 dark:bg-[#090D16] text-slate-900 dark:text-white select-none sm:select-auto transition-colors duration-200"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* ── Background layers (Enhanced Visibility & Balanced Contrast) ── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Background images with Ken Burns subtle zoom and balanced visibility */}
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlideIndex ? "animate-ken-burns opacity-[0.25] dark:opacity-[0.52]" : "opacity-0"
            }`}
          >
            <Image
              src={slide.bgImage}
              alt={slide.eyebrow}
              fill
              priority={idx === 0}
              className="object-cover object-right md:object-center"
            />
          </div>
        ))}

        {/* Dual-theme left-weighted protective gradient for crystal clear text readability */}
        <div
          className="absolute inset-0 hidden dark:block"
          style={{
            background:
              "linear-gradient(95deg, rgba(9,13,22,0.92) 0%, rgba(9,13,22,0.76) 42%, rgba(9,13,22,0.32) 75%, rgba(9,13,22,0.1) 100%)",
          }}
        />
        <div
          className="absolute inset-0 block dark:hidden"
          style={{
            background:
              "linear-gradient(95deg, rgba(248,250,252,0.96) 0%, rgba(248,250,252,0.85) 45%, rgba(248,250,252,0.45) 75%, rgba(248,250,252,0.15) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(9,13,22,0.2) 0%, transparent 25%)" }}
        />

        {/* Soft "Color Bleed" Glow Effect */}
        <div
          className="absolute -bottom-24 -left-20 w-[640px] h-[640px] rounded-full blur-[110px] pointer-events-none opacity-70"
          style={{
            background:
              "radial-gradient(circle, rgba(37,99,235,0.24) 0%, rgba(59,130,246,0.12) 38%, rgba(99,102,241,0.05) 58%, transparent 75%)",
          }}
        />

        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.04)_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:28px_28px] opacity-35" />
      </div>

      {/* ── Main Content ── */}
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex-1 flex flex-col justify-center py-8 sm:py-12">
        <div className="max-w-[54rem] space-y-5 sm:space-y-7">
          {/* Eyebrow badge (Single, Clean) */}
          <div
            className={`inline-flex items-center gap-2.5 transition-all duration-300 ${
              isTransitioning ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
            }`}
          >
            <span className="section-label">
              <Sparkles className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400" />
              {activeSlide.eyebrow}
            </span>
            <span className="hidden sm:flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              US · UK · UAE · Singapore · Global
            </span>
          </div>

          {/* Dynamic Headline with Linear/Vercel tight scale (56-72px) */}
          <div
            className={`transition-all duration-300 ${
              isTransitioning ? "opacity-0 -translate-y-2" : "opacity-100 translate-y-0"
            }`}
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-extrabold tracking-[-0.035em] leading-[1.06] text-slate-900 dark:text-white">
              {activeSlide.title}{" "}
              <span className="text-blue-600 dark:text-blue-500 block sm:inline">
                {activeSlide.titleHighlight}
              </span>
            </h1>
          </div>

          {/* Subtitle / positioning copy */}
          <div
            className={`transition-all duration-300 delay-75 ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          >
            <p className="text-slate-600 dark:text-slate-300/85 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl font-normal">
              {activeSlide.subtitle}
            </p>
          </div>

          {/* What We Build — Swipeable Category Pills on Mobile */}
          <div
            className={`transition-all duration-300 delay-100 ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="flex items-center gap-1.5 pt-1 overflow-x-auto no-scrollbar max-w-full pb-1 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
              <span className="text-xs text-slate-500 dark:text-slate-400 mr-1 hidden sm:inline shrink-0 font-mono">
                Scope:
              </span>
              {WHAT_WE_BUILD.map((item) => (
                <span
                  key={item}
                  className="studio-pill whitespace-nowrap shrink-0 cursor-default bg-white/80 dark:bg-white/[0.04] border-slate-200 dark:border-[#1F2937] text-slate-700 dark:text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div
            className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2 transition-all duration-300 delay-150 ${
              isTransitioning ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
            }`}
          >
            {/* Primary CTA button */}
            <button
              onClick={() => {
                if (activeSlide.primaryCtaAction === "demo") openDemoModal();
                else openBookingModal();
              }}
              className="btn-primary w-full sm:w-auto px-6 sm:px-8 py-3.5 text-sm font-semibold cursor-pointer active:scale-95 transition-transform flex items-center justify-center gap-2"
            >
              <span>{activeSlide.primaryCtaText}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Secondary CTA button */}
            <Link href={activeSlide.secondaryCtaLink} className="w-full sm:w-auto">
              <button
                type="button"
                className="btn-secondary w-full sm:w-auto px-6 py-3.5 text-sm font-semibold cursor-pointer active:scale-95 transition-transform flex items-center justify-center gap-2 bg-white/90 dark:bg-white/5 border-slate-300 dark:border-[#1F2937] text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10"
              >
                {activeSlide.secondaryCtaText}
              </button>
            </Link>
          </div>

          {/* Trust stats strip with Count-Up (5 metrics: 6+, 1-2 Wk, 100%, <0.4s, 99.99%) */}
          <div
            className={`grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4 pt-3 max-w-3xl transition-all duration-300 delay-200 ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          >
            {TRUST_STATS.map((stat) => {
              const displayVal =
                stat.id === "markets"
                  ? `${statMarkets}+`
                  : stat.id === "ip"
                  ? `${statIp}%`
                  : stat.id === "sla"
                  ? `${statSla}%`
                  : stat.value;

              const isProof = stat.id === "ip" || stat.id === "sla";

              return (
                <div
                  key={stat.id}
                  className={`flex items-center gap-2.5 p-2.5 rounded-xl border transition-all duration-200 ${
                    isProof
                      ? "bg-emerald-500/[0.08] dark:bg-emerald-500/[0.06] border-emerald-500/30 dark:border-emerald-500/25"
                      : "bg-white dark:bg-[#111827] border-slate-200 dark:border-[#1F2937] shadow-xs dark:shadow-none"
                  }`}
                >
                  <span className={isProof ? "text-emerald-600 dark:text-emerald-400 shrink-0" : "text-blue-600 dark:text-blue-400 shrink-0"}>
                    {stat.icon}
                  </span>
                  <div className="min-w-0">
                    <div
                      className={`text-sm sm:text-base font-bold leading-none font-mono ${
                        isProof ? "text-emerald-600 dark:text-emerald-400" : "text-slate-900 dark:text-white"
                      }`}
                    >
                      {displayVal}
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 truncate font-normal">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Slide Controls (Bottom Bar with High-Responsiveness Buttons) ── */}
      <div className="relative z-30 border-t border-slate-200 dark:border-white/10 mt-auto bg-white/85 dark:bg-[#070B14]/85 backdrop-blur-md">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <div className="flex items-center justify-between gap-4">
            {/* Slide indicators with progress (Enlarged hit target for easy clicking) */}
            <div className="flex items-center gap-1.5">
              {HERO_SLIDES.map((slide, idx) => {
                const isActive = idx === currentSlideIndex;
                return (
                  <button
                    type="button"
                    key={slide.id}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      goToSlide(idx);
                    }}
                    className="py-2.5 px-1.5 flex items-center justify-center cursor-pointer group"
                    aria-label={`Go to slide ${idx + 1}`}
                  >
                    <div
                      className={`relative overflow-hidden rounded-full transition-all duration-300 ${
                        isActive ? "w-12 h-1.5" : "w-3 h-1.5"
                      } bg-slate-300 dark:bg-white/20 group-hover:bg-slate-400 dark:group-hover:bg-white/40`}
                    >
                      {isActive && (
                        <div
                          className="absolute inset-y-0 left-0 rounded-full bg-blue-600 dark:bg-[#3B82F6] transition-none"
                          style={{ width: `${progress}%` }}
                        />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Slide info + working nav buttons */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 tabular-nums hidden sm:block">
                0{currentSlideIndex + 1} / 0{HERO_SLIDES.length}
              </span>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="w-9 h-9 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-150 border border-slate-200 dark:border-white/15 bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 text-slate-800 dark:text-white active:scale-95"
                  aria-label="Previous slide"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="w-9 h-9 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-150 border border-slate-200 dark:border-white/15 bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 text-slate-800 dark:text-white active:scale-95"
                  aria-label="Next slide"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
