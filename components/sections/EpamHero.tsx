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
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlideIndex(idx);
      setProgress(0);
      setIsTransitioning(false);
    }, 200);
  };

  const handleNext = () => goToSlide((currentSlideIndex + 1) % HERO_SLIDES.length);
  const handlePrev = () => goToSlide((currentSlideIndex - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  const activeSlide = HERO_SLIDES[currentSlideIndex];

  return (
    <section
      className="relative min-h-[90vh] md:min-h-[92vh] pt-28 pb-0 overflow-hidden flex flex-col"
      style={{ background: "linear-gradient(180deg, #090D16 0%, #0B1120 100%)" }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ── Background layers ── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Background images */}
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={slide.id}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: idx === currentSlideIndex ? 0.28 : 0 }}
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

        {/* Gradient overlays */}
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(105deg, #090D16 45%, rgba(9,13,22,0.75) 70%, rgba(9,13,22,0.3) 100%)" }}
        />
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(to top, #0B1120 0%, transparent 50%)" }}
        />

        {/* Ambient glow orb — blue/indigo per spec */}
        <div
          className="absolute top-0 left-1/4 w-[700px] h-[500px] rounded-full blur-[120px] pointer-events-none transition-all duration-1000"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.18) 0%, rgba(99,102,241,0.09) 50%, transparent 80%)" }}
        />

        {/* Subtle grid */}
        <div className="absolute inset-0 bg-hero-grid opacity-40" />
      </div>

      {/* ── Main Content ── */}
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex-1 flex flex-col justify-center py-12">
        <div className="max-w-[52rem] space-y-7">

          {/* Eyebrow badge */}
          <div
            className={`inline-flex items-center gap-2.5 transition-all duration-300 ${isTransitioning ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"}`}
          >
            <span className="section-label">
              <Sparkles className="w-3 h-3" />
              {activeSlide.eyebrow}
            </span>
            <span className="hidden sm:flex items-center gap-1.5 text-xs text-[#6B6A78]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-dot" />
              US · UK · UAE · Singapore · Global
            </span>
          </div>

          {/* Headline */}
          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight transition-all duration-300 ${isTransitioning ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"}`}
          >
            <span className="text-white block">{activeSlide.title}</span>
            <span className="text-gradient-hero block">{activeSlide.titleHighlight}</span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-base sm:text-lg text-[#A3A2B0] max-w-xl leading-relaxed transition-all duration-300 delay-75 ${isTransitioning ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"}`}
          >
            {activeSlide.subtitle}
          </p>

          {/* What we build — small tag list */}
          <div className={`flex flex-wrap items-center gap-x-3 gap-y-1.5 transition-all duration-300 delay-100 ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#6B6A78]">We Build:</span>
            {WHAT_WE_BUILD.map((item, index) => (
              <span key={item} className="inline-flex items-center gap-1.5 text-sm text-[#A3A2B0]">
                <span>{item}</span>
                {index < WHAT_WE_BUILD.length - 1 && (
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                )}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1 transition-all duration-300 delay-150 ${isTransitioning ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"}`}>
            <button
              onClick={activeSlide.primaryCtaAction === "booking" ? openBookingModal : openDemoModal}
              className="btn-primary inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-semibold text-white group cursor-pointer"
            >
              <span>{activeSlide.primaryCtaText}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <Link href={activeSlide.secondaryCtaLink}>
              <button className="btn-secondary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium cursor-pointer">
                {activeSlide.secondaryCtaText}
              </button>
            </Link>
          </div>

          {/* Trust stats strip */}
          <div className={`flex items-center gap-6 pt-2 transition-all duration-300 delay-200 ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
            {TRUST_STATS.map((stat, idx) => (
              <React.Fragment key={stat.label}>
                {idx > 0 && <div className="w-px h-8 bg-white/8" />}
                <div className="flex items-center gap-2.5">
                  <span className="text-blue-400">{stat.icon}</span>
                  <div>
                    <div className="text-sm font-bold text-white leading-none">{stat.value}</div>
                    <div className="text-[11px] text-[#6B6A78] mt-0.5">{stat.label}</div>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* ── Slide Controls (bottom bar) ── */}
      <div className="relative z-10 border-t mt-auto" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between gap-4">

            {/* Slide indicators with progress */}
            <div className="flex items-center gap-3">
              {HERO_SLIDES.map((slide, idx) => {
                const isActive = idx === currentSlideIndex;
                return (
                  <button
                    key={slide.id}
                    onClick={() => goToSlide(idx)}
                    className="relative group cursor-pointer"
                    aria-label={`Go to slide ${idx + 1}`}
                  >
                    {/* Dot / Bar container */}
                    <div className={`relative overflow-hidden rounded-full transition-all duration-300 ${isActive ? "w-12 h-1.5" : "w-2 h-1.5"}`}
                      style={{ background: "rgba(255,255,255,0.15)" }}>
                      {/* Progress fill */}
                      {isActive && (
                        <div
                          className="absolute inset-y-0 left-0 rounded-full transition-none"
                          style={{
                            width: `${progress}%`,
                            background: "linear-gradient(90deg, #3B82F6, #6366F1)",
                          }}
                        />
                      )}
                      {/* Dot fill for inactive */}
                      {!isActive && (
                        <div className="absolute inset-0 rounded-full group-hover:opacity-60 opacity-0 transition-opacity"
                          style={{ background: "rgba(255,255,255,0.5)" }} />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Slide info + nav buttons */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-[#6B6A78] tabular-nums hidden sm:block">
                {String(currentSlideIndex + 1).padStart(2, "0")} / {String(HERO_SLIDES.length).padStart(2, "0")}
              </span>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={handlePrev}
                  className="w-8 h-8 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-white/8"
                  style={{ border: "1px solid rgba(255,255,255,0.1)", color: "#A3A2B0" }}
                  aria-label="Previous slide"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-8 h-8 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-white/8"
                  style={{ border: "1px solid rgba(255,255,255,0.1)", color: "#A3A2B0" }}
                  aria-label="Next slide"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
