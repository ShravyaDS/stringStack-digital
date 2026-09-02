"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "../ui/Button";
import { useBookingModal } from "../ModalProvider";

interface HeroSlide {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  primaryCtaText: string;
  primaryCtaAction: "booking" | "demo";
  secondaryCtaText: string;
  secondaryCtaLink: string;
  bgImage: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: "software-engineering",
    tag: "High-Velocity Product Engineering",
    title: "High-Performance Software Engineering. Enterprise ERP Systems. Delivered on Fixed Sprints.",
    subtitle:
      "SprintStack.digital is a software engineering and enterprise technology company. We architect, build, and deploy mission-critical software solutions for businesses globally across the US, UK, UAE, Singapore, and worldwide.",
    primaryCtaText: "Book a 15-Minute Technical Discovery",
    primaryCtaAction: "booking",
    secondaryCtaText: "Explore Enterprise Software",
    secondaryCtaLink: "/#enterprise-solutions",
    bgImage: "/images/hero/hero-slide-1.jpg",
  },
  {
    id: "core-capabilities",
    tag: "Core Engineering Capabilities",
    title: "We can help you reimagine your business through a high-velocity digital lens.",
    subtitle:
      "Enterprise web applications, native & cross-platform mobile apps (Flutter, iOS, Android), omnichannel commerce, and automated enterprise API pipelines.",
    primaryCtaText: "Launch Live Product Demos",
    primaryCtaAction: "demo",
    secondaryCtaText: "View Engineering Services",
    secondaryCtaLink: "/#solutions",
    bgImage: "/images/hero/hero-slide-2.jpg",
  },
  {
    id: "enterprise-erp",
    tag: "Enterprise Operations OS",
    title: "Architecting next-generation Attendance ERP & Autonomous Workforce Governance.",
    subtitle:
      "Eliminate manual logs and shift-planning friction with sub-second biometric sync (ZKTeco, Suprema), geofenced mobile check-ins, and automated multi-country payroll compliance.",
    primaryCtaText: "Book a 15-Minute Technical Discovery",
    primaryCtaAction: "booking",
    secondaryCtaText: "Explore Attendance ERP",
    secondaryCtaLink: "/products/attendance-erp",
    bgImage: "/images/hero/hero-slide-3.jpg",
  },
];

const WHAT_WE_BUILD = [
  "Web Applications",
  "Mobile Applications",
  "ERP Systems",
  "CRM Systems",
  "Workflow Automation",
  "Digital Products",
];

export function EpamHero() {
  const { openBookingModal, openDemoModal } = useBookingModal();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const SLIDE_DURATION = 7500; // 7.5 seconds per slide

  useEffect(() => {
    if (isPaused) return;

    const interval = 50;
    const step = (interval / SLIDE_DURATION) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentSlideIndex((oldIndex) => (oldIndex + 1) % HERO_SLIDES.length);
          return 0;
        }
        return prev + step;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handleNextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    setProgress(0);
  };

  const handlePrevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
    setProgress(0);
  };

  const activeSlide = HERO_SLIDES[currentSlideIndex];

  return (
    <section
      className="relative min-h-[85vh] md:min-h-[88vh] pt-32 pb-12 md:pt-40 md:pb-16 overflow-hidden bg-[#070A12] flex flex-col justify-between"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 1. Clean Background Image Layers with Smooth Crossfade */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {HERO_SLIDES.map((slide, idx) => {
          const isCurrent = idx === currentSlideIndex;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isCurrent ? "opacity-35 scale-100" : "opacity-0 scale-102"
              }`}
            >
              <Image
                src={slide.bgImage}
                alt={slide.tag}
                fill
                priority={idx === 0}
                className="object-cover object-right md:object-center filter brightness-95 contrast-110"
              />
            </div>
          );
        })}

        {/* Clean Minimalist Scrim */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070A12] via-[#070A12]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070A12] via-transparent to-transparent" />
      </div>

      {/* 2. Main Content Container */}
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 my-auto">
        <div className="max-w-4xl space-y-6 text-left">
          {/* Tag */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span className="font-semibold text-white tracking-wide">
              {activeSlide.tag}
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-cyan-400 font-medium">
              US | UK | UAE | Singapore | Global
            </span>
          </div>

          {/* Main Heading — Clean, Solid & Readable Typography */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.15] transition-all duration-300">
            {activeSlide.title}
          </h1>

          {/* Editorial Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed">
            {activeSlide.subtitle}
          </p>

          {/* What We Build Scope Line */}
          <div className="flex flex-wrap items-center gap-y-1 gap-x-2 text-xs font-mono pt-1 text-slate-400">
            <span className="text-slate-200 font-semibold uppercase tracking-wider">
              We Build:
            </span>
            {WHAT_WE_BUILD.map((item, index) => (
              <span key={item} className="inline-flex items-center gap-2 text-slate-300">
                <span>{item}</span>
                {index < WHAT_WE_BUILD.length - 1 && (
                  <span className="text-slate-600">•</span>
                )}
              </span>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
            <Button
              onClick={
                activeSlide.primaryCtaAction === "booking"
                  ? openBookingModal
                  : openDemoModal
              }
              variant="primary"
              size="lg"
              className="gap-2.5 group text-sm font-semibold justify-center bg-blue-600 hover:bg-blue-500 text-white px-7 py-3.5 rounded-xl transition-colors"
            >
              <span>{activeSlide.primaryCtaText}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Link href={activeSlide.secondaryCtaLink}>
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto text-sm font-semibold border border-slate-700 hover:border-slate-600 bg-slate-900 hover:bg-slate-800 text-slate-200 justify-center px-6 py-3.5 rounded-xl transition-colors"
              >
                <span>{activeSlide.secondaryCtaText}</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* 3. Bottom Slide Controller & Progress Bar */}
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-slate-800/80">
          {/* Slide Indicators */}
          <div className="flex items-center gap-2">
            {HERO_SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => {
                  setCurrentSlideIndex(idx);
                  setProgress(0);
                }}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  idx === currentSlideIndex
                    ? "w-8 bg-cyan-400"
                    : "w-2 bg-slate-700 hover:bg-slate-600"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Slide Navigation Controls */}
          <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
            <span>
              0{currentSlideIndex + 1} / 0{HERO_SLIDES.length}
            </span>
            <div className="flex items-center gap-1">
              <button
                onClick={handlePrevSlide}
                className="p-1.5 rounded-lg border border-slate-800 bg-slate-900 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="Previous slide"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={handleNextSlide}
                className="p-1.5 rounded-lg border border-slate-800 bg-slate-900 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="Next slide"
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
