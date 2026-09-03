"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Sparkles, Globe, Zap, Shield } from "lucide-react";
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
    primaryCtaText: "Launch Live Product Demos",
    primaryCtaAction: "demo",
    secondaryCtaText: "View Engineering Services",
    secondaryCtaLink: "/#solutions",
    bgImage: "/images/hero/hero-slide-2.jpg",
    accentColor: "blue",
  },
  {
    id: "enterprise-erp",
    eyebrow: "Enterprise Operations OS",
    title: "Next-Generation Attendance ERP &",
    titleHighlight: "Autonomous Workforce Governance.",
    subtitle:
      "Eliminate manual logs and shift-planning friction with sub-second biometric sync (ZKTeco, Suprema), geofenced mobile check-ins, and automated multi-country payroll compliance.",
    primaryCtaText: "Book a Technical Discovery",
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
  { icon: <Globe className="w-4 h-4" />, value: "6+", label: "Global Markets" },
  { icon: <Zap className="w-4 h-4" />, value: "1–2 Wk", label: "Sprint Cadence" },
  { icon: <Shield className="w-4 h-4" />, value: "100%", label: "IP Ownership" },
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

  useEffect(() => {
    setIsMounted(true);
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStatMarkets(6);
      setStatIp(100);
      return;
    }
    const duration = 800;
    const startTime = performance.now();
    let animId: number;

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setStatMarkets(Math.round(6 * ease));
      setStatIp(Math.round(100 * ease));
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
      className="relative min-h-[90vh] md:min-h-[92vh] pt-28 pb-0 overflow-hidden flex flex-col bg-[#090D16] text-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ── Background layers (Enhanced Visibility & Balanced Contrast) ── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Background images with Ken Burns subtle zoom and increased visibility */}
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlideIndex ? "animate-ken-burns" : ""
            }`}
            style={{ opacity: idx === currentSlideIndex ? 0.52 : 0 }}
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

        {/* Soft left-weighted gradient: protects text contrast while leaving image bright on right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(95deg, rgba(9,13,22,0.92) 0%, rgba(9,13,22,0.76) 42%, rgba(9,13,22,0.32) 75%, rgba(9,13,22,0.1) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(9,13,22,0.95) 0%, transparent 25%)" }}
        />

        {/* Soft "Color Bleed" Glow Effect (One Side Only — Bottom-Left Sapphire Bleed) */}
        <div
          className="absolute -bottom-24 -left-20 w-[640px] h-[640px] rounded-full blur-[110px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(37,99,235,0.24) 0%, rgba(59,130,246,0.12) 38%, rgba(99,102,241,0.05) 58%, transparent 75%)" }}
        />

        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:28px_28px] opacity-35" />
      </div>

      {/* ── Main Content ── */}
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex-1 flex flex-col justify-center py-12">
        <div className="max-w-[54rem] space-y-7">

          {/* Eyebrow badge */}
          <div
            className={`inline-flex items-center gap-2.5 transition-all duration-300 ${
              isTransitioning ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
            }`}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              {activeSlide.eyebrow}
            </span>
            <span className="hidden sm:flex items-center gap-2 text-xs text-slate-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              US · UK · UAE · Singapore · Global
            </span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span>{activeSlide.eyebrow}</span>
          </div>

          {/* Dynamic Headline with fade transition */}
          <div
            className={`transition-all duration-300 ${
              isTransitioning ? "opacity-0 -translate-y-2" : "opacity-100 translate-y-0"
            }`}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-white">
              {activeSlide.title}{" "}
              <span className="text-blue-400 block sm:inline">
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
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              {activeSlide.subtitle}
            </p>
          </div>

          {/* What We Build — Clean Category Pills */}
          <div
            className={`transition-all duration-300 delay-100 ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              <span className="text-xs text-slate-400 mr-1 hidden sm:inline">Scope:</span>
              {WHAT_WE_BUILD.map((item) => (
                <span
                  key={item}
                  className="text-xs px-2.5 py-1 rounded-md bg-white/10 text-slate-200 border border-white/15 hover:border-white/30 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div
            className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 transition-all duration-300 delay-150 ${
              isTransitioning ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
            }`}
          >
            {/* Primary CTA button */}
            <button
              onClick={() => {
                if (activeSlide.primaryCtaAction === "demo") openDemoModal();
                else openBookingModal();
              }}
              className="btn-primary w-full sm:w-auto px-7 py-3.5 text-sm font-semibold cursor-pointer active:scale-95 transition-transform flex items-center justify-center gap-2"
            >
              <span>{activeSlide.primaryCtaText}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Secondary CTA button */}
            <Link href={activeSlide.secondaryCtaLink} className="w-full sm:w-auto">
              <button
                type="button"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white text-sm font-medium transition-colors cursor-pointer"
              >
                {activeSlide.secondaryCtaText}
              </button>
            </Link>
          </div>

          {/* Trust stats strip with Count-Up */}
          <div
            className={`flex items-center gap-6 pt-2 transition-all duration-300 delay-200 ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          >
            {TRUST_STATS.map((stat, idx) => {
              const displayVal =
                stat.label === "Global Markets"
                  ? `${statMarkets}+`
                  : stat.label === "IP Ownership"
                  ? `${statIp}%`
                  : stat.value;

              return (
                <React.Fragment key={stat.label}>
                  {idx > 0 && <div className="w-px h-8 bg-white/10" />}
                  <div className="flex items-center gap-2.5">
                    <span className="text-[#3B82F6]">{stat.icon}</span>
                    <div>
                      <div className="text-sm font-bold text-white leading-none font-mono">
                        {displayVal}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5">{stat.label}</div>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Slide Controls (Bottom Bar with High-Responsiveness Buttons) ── */}
      <div className="relative z-30 border-t border-white/10 mt-auto bg-[#070B14]/85 backdrop-blur-md">
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
                      } bg-white/20 group-hover:bg-white/40`}
                    >
                      {isActive && (
                        <div
                          className="absolute inset-y-0 left-0 rounded-full bg-[#3B82F6] transition-none"
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
              <span className="text-xs font-mono text-slate-400 tabular-nums hidden sm:block">
                0{currentSlideIndex + 1} / 0{HERO_SLIDES.length}
              </span>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="w-9 h-9 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-150 border border-white/15 bg-white/10 hover:bg-white/20 text-white active:scale-95"
                  aria-label="Previous slide"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="w-9 h-9 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-150 border border-white/15 bg-white/10 hover:bg-white/20 text-white active:scale-95"
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
