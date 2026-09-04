"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Code2,
  Smartphone,
  ShoppingBag,
  Workflow,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { CORE_CAPABILITIES } from "@/lib/constants";
import { useBookingModal } from "../ModalProvider";

const CARD_CONFIG = [
  {
    Icon: Code2,
    ctaLink: "/services/web-development",
    ctaLabel: "Architecture & Sprints",
    scopeLabel: "Scope Web Build",
    imgSrc: "/images/services/web-apps.jpg",
    metricHighlight: "< 0.4s Sub-Second Paint",
    bentoSpan: "lg:col-span-7",
  },
  {
    Icon: Smartphone,
    ctaLink: "/services/mobile-apps",
    ctaLabel: "Explore Mobile Systems",
    scopeLabel: "Scope Mobile Build",
    imgSrc: "/images/services/mobile-apps.jpg",
    metricHighlight: "60 FPS Native Performance",
    bentoSpan: "lg:col-span-5",
  },
  {
    Icon: ShoppingBag,
    ctaLink: "/services/web-development",
    ctaLabel: "Commerce Architecture",
    scopeLabel: "Scope Commerce Engine",
    imgSrc: "/images/services/ecommerce.jpg",
    metricHighlight: "99.99% Checkout Resilience",
    bentoSpan: "lg:col-span-5",
  },
  {
    Icon: Workflow,
    ctaLink: "/services/web-development",
    ctaLabel: "Middleware Pipeline",
    scopeLabel: "Scope Integration Build",
    imgSrc: "/images/services/integrations.jpg",
    metricHighlight: "< 25ms Webhook Ingestion",
    bentoSpan: "lg:col-span-7",
  },
];

export function ServiceBento() {
  const { openBookingModal } = useBookingModal();
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const capabilities = [
    CORE_CAPABILITIES[0],
    CORE_CAPABILITIES[1],
    CORE_CAPABILITIES[2],
    CORE_CAPABILITIES[3],
  ];

  return (
    <section
      id="solutions"
      className="py-28 lg:py-36 bg-[#090D16] border-t border-[#1F2937] relative overflow-hidden scroll-mt-24"
    >
      {/* Subtle radial spotlight glow behind bento section */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] bg-blue-600/[0.06] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* ── Section Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2">
              <span className="section-label">What We Build</span>
              <span className="badge-emerald-proof">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                Senior Squads
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-[-0.035em]">
              Core Engineering Capabilities
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              From high-concurrency web platforms to native mobile apps and enterprise middleware — engineered by senior squads on fixed weekly sprints.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={openBookingModal}
              className="btn-primary px-5 py-2.5 text-xs sm:text-sm font-semibold flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <span>Scope Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ── Bento Grid Structure (7-col & 5-col Asymmetry) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {capabilities.map((cap, idx) => {
            const config = CARD_CONFIG[idx];
            const Icon = config.Icon;

            return (
              <div
                key={cap.headline}
                onMouseEnter={() => setActiveCard(idx)}
                onMouseLeave={() => setActiveCard(null)}
                className={`${config.bentoSpan} bg-[#111827] border border-[#1F2937] rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden group hover:border-blue-500/50 hover:-translate-y-1 transition-all duration-300`}
              >
                {/* Subtle top edge highlight */}
                <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.12] to-transparent pointer-events-none" />

                <div className="space-y-6">
                  {/* Top Row: Category, Icon & Emerald Metric Tag */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-200">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400">
                          {cap.category}
                        </div>
                      </div>
                    </div>

                    <span className="badge-emerald-proof text-[11px]">
                      {config.metricHighlight}
                    </span>
                  </div>

                  {/* Headline & Description */}
                  <div className="space-y-2.5">
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-blue-300 transition-colors">
                      {cap.headline}
                    </h3>
                    <p className="text-sm text-slate-300/80 leading-relaxed">
                      {cap.description}
                    </p>
                  </div>

                  {/* Image Graphic Preview */}
                  <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-[#1F2937] bg-[#070B12] shadow-inner">
                    <Image
                      src={config.imgSrc}
                      alt={cap.headline}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    {/* Dark gradient overlay for text protection */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090D16]/80 via-transparent to-transparent pointer-events-none" />
                    
                    <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between">
                      <span className="studio-pill font-mono text-[10px] text-blue-300 bg-[#090D16]/80 backdrop-blur-sm border-[#1F2937]">
                        {cap.badge}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">
                        Module #{idx + 1}
                      </span>
                    </div>
                  </div>

                  {/* Architecture & Tech Stack Pill Strip */}
                  <div className="space-y-2">
                    <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400">
                      Architecture &amp; Frameworks
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {cap.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="studio-pill font-mono text-xs cursor-default hover:border-blue-500/40"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Row */}
                <div className="pt-6 mt-6 border-t border-[#1F2937] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <button
                    onClick={openBookingModal}
                    className="btn-primary px-4 py-2.5 text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
                  >
                    <span>{config.scopeLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <Link
                    href={config.ctaLink}
                    className="btn-secondary px-3.5 py-2.5 text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
                  >
                    <span>{config.ctaLabel}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </Link>
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
