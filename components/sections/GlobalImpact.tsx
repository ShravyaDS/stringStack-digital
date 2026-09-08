"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { useBookingModal } from "../ModalProvider";

export function GlobalImpact() {
  const { openBookingModal } = useBookingModal();

  const stats = [
    { value: "100+", label: "Projects Delivered" },
    { value: "50+", label: "Global Clients" },
    { value: "99.9%", label: "Uptime Guarantee" },
    { value: "5+", label: "Countries Served" },
  ];

  return (
    <section className="relative pt-24 pb-36 lg:pt-32 lg:pb-48 bg-slate-50 dark:bg-[#040711] text-slate-900 dark:text-white overflow-hidden border-t border-slate-200 dark:border-white/[0.08] transition-colors duration-200">
      {/* Curved glowing blue Earth horizon line matching Figma */}
      <div className="absolute bottom-0 inset-x-0 h-64 pointer-events-none flex justify-center items-end overflow-hidden">
        {/* Deep blue atmospheric curvature with breathing orbital pulse */}
        <div className="w-[140%] sm:w-[120%] h-[320px] rounded-[100%] bg-gradient-to-t from-blue-200/60 via-blue-100/40 to-transparent dark:from-blue-600/40 dark:via-blue-500/15 dark:to-transparent border-t border-blue-400/50 dark:border-cyan-400/50 shadow-[0_-20px_60px_rgba(59,130,246,0.15)] dark:shadow-[0_-20px_80px_rgba(59,130,246,0.4)] translate-y-36 animate-aura-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading & CTA (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.035em] leading-tight text-slate-900 dark:text-white">
              Global Impact<br />
              <span className="text-blue-600 dark:text-blue-500">Built for What&apos;s Next</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-md">
              We partner with ambitious companies across the globe to build software that drives real business outcomes.
            </p>
            <div className="pt-2">
              <button
                onClick={openBookingModal}
                className="px-6 py-3 rounded-full text-xs sm:text-sm font-semibold border border-slate-300 dark:border-white/20 bg-white dark:bg-white/[0.06] hover:bg-slate-100 dark:hover:bg-white/[0.12] text-slate-900 dark:text-white transition-all cursor-pointer shadow-xs active:scale-95"
              >
                <span>Schedule a Technical Discovery</span>
              </button>
            </div>
          </div>

          {/* Right Column: 4 Big Numerical Stats matching Figma (7 cols) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="space-y-1 text-left">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black font-mono tracking-tight text-slate-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
