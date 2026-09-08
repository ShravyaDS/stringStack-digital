"use client";

import React from "react";
import Image from "next/image";
import { Search, Layers, Code2, Rocket, ArrowRight } from "lucide-react";
import { useBookingModal } from "../ModalProvider";

export function DeliveryFramework() {
  const { openBookingModal } = useBookingModal();

  const steps = [
    {
      num: "01",
      name: "Discovery & Planning",
      desc: "Understand your goals, users and technical needs.",
      icon: <Search className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
    },
    {
      num: "02",
      name: "Design & Architecture",
      desc: "Create scalable, secure and future-ready solutions.",
      icon: <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
    },
    {
      num: "03",
      name: "Development & Testing",
      desc: "Build, test and iterate in sprint cycles.",
      icon: <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
    },
    {
      num: "04",
      name: "Launch & Support",
      desc: "Deploy with monitoring and ongoing support.",
      icon: <Rocket className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
    },
  ];

  return (
    <section id="process" className="py-24 lg:py-32 bg-white dark:bg-[#050811] text-slate-900 dark:text-white border-t border-slate-200 dark:border-white/[0.08] relative overflow-hidden scroll-mt-20 transition-colors duration-200">
      {/* Animated Delivery Architectural Blueprint Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="relative w-full h-full animate-slow-drift">
          <Image
            src="/images/delivery-blueprint-bg.jpg"
            alt="Delivery Workflow Architectural Blueprint"
            fill
            className="object-cover object-center opacity-[0.07] dark:opacity-[0.12] mix-blend-luminosity"
          />
        </div>
        {/* Soft atmospheric gradient wash */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white dark:from-[#050811] dark:via-[#050811]/80 dark:to-[#050811]" />
        {/* Architectural laser scanline traversing blueprint */}
        <div className="absolute inset-x-0 h-44 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent pointer-events-none animate-scanline" />
      </div>

      {/* Background ambient lighting with pulse */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none animate-aura-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading & CTA (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 tracking-widest uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              03 — HOW SPRINTS WORK
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-[-0.03em] leading-tight text-slate-900 dark:text-white">
              From Discovery to Deployment —<br />
              In Just a Few Sprints
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Our streamlined process ensures transparency, speed, and predictable delivery — without compromising on quality.
            </p>
            <div className="pt-2">
              <button
                onClick={openBookingModal}
                className="px-6 py-3 rounded-full text-xs sm:text-sm font-semibold border border-slate-300 dark:border-white/20 bg-slate-100 dark:bg-white/[0.05] hover:bg-slate-200 dark:hover:bg-white/[0.1] text-slate-900 dark:text-white transition-all cursor-pointer shadow-xs active:scale-95"
              >
                <span>Learn About Our Process</span>
              </button>
            </div>
          </div>

          {/* Right Column: 4 Connected Step Nodes (8 cols) */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative">
              {steps.map((step, idx) => (
                <div key={step.num} className="relative flex flex-col items-start space-y-3 p-4 rounded-xl">
                  {/* Step Circular Node */}
                  <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-[#0F172A] border border-blue-200 dark:border-blue-500/30 flex items-center justify-center shadow-md shadow-blue-500/10">
                    {step.icon}
                  </div>

                  {/* Step Number & Title */}
                  <div>
                    <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 block mb-1">
                      {step.num}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5 leading-snug">
                      {step.name}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                      {step.desc}
                    </p>
                  </div>

                  {/* Horizontal Arrow between steps (desktop only) */}
                  {idx < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-6 text-slate-300 dark:text-slate-600">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
