"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useBookingModal } from "../ModalProvider";

export function SocialProofBanner() {
  const { openBookingModal } = useBookingModal();

  return (
    <section className="bg-slate-50 dark:bg-[#050811] text-slate-900 dark:text-white border-t border-slate-200 dark:border-white/[0.08] relative transition-colors duration-200 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── PRE-FOOTER CTA BANNER with Blueprint Ticks & Landscape ── */}
        <div className="ticks relative p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-slate-900 via-[#0E1626] to-[#0A101D] border border-slate-800 dark:border-white/10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 text-white overflow-hidden">
          <span className="tk-bl"></span>
          <span className="tk-br"></span>
          
          {/* Animated contact-landscape background image */}
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            <div className="relative w-full h-full animate-slow-drift">
              <Image
                src="/images/contact-landscape.jpg"
                alt="Global Enterprise Skyline"
                fill
                className="object-cover object-center opacity-25 mix-blend-luminosity scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-[#0E1626]/90 to-[#0A101D]/95" />
          </div>

          {/* Animated radiant top border shimmer beam */}
          <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-blue-400/80 to-transparent pointer-events-none animate-border-shimmer" />

          <div className="relative z-10 space-y-3 text-center md:text-left">
            <span className="text-xs font-mono font-bold text-blue-400 tracking-widest uppercase flex items-center justify-center md:justify-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              05 — GET STARTED & DISCOVERY
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Ready to Scope Your Software Build?
            </h3>
            <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
              Connect directly with a Senior Technical Lead. Receive a tailored architecture recommendation, tech stack blueprint, and fixed sprint milestone plan within 24 hours.
            </p>
            <div className="text-[11px] font-mono text-slate-400 flex items-center justify-center md:justify-start gap-3 pt-1">
              <span>✓ NDA on Day 1</span>
              <span>•</span>
              <span>✓ Direct Senior Engineers</span>
              <span>•</span>
              <span>✓ 100% IP Ownership</span>
            </div>
          </div>

          <button
            onClick={openBookingModal}
            className="relative z-10 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/35 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 shrink-0 whitespace-nowrap"
          >
            <span>Schedule a Technical Discovery</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}

