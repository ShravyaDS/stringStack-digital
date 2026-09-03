"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Lock, Layers, Zap, ArrowRight } from "lucide-react";
import { useBookingModal } from "../ModalProvider";

export function PartnershipSection() {
  const { openBookingModal } = useBookingModal();

  const partnershipPillars = [
    {
      title: "100% White-Label Delivery",
      subtitle: "Silent Execution Backbone",
      description:
        "We act as your dedicated engineering arm. All code, PRs, communications, and commits belong to you under strict mutual NDA. Zero attribution, 100% your brand.",
      badge: "Silent Partner",
      Icon: Lock,
    },
    {
      title: "Fixed-Price Sprint Retainers",
      subtitle: "Deterministic Delivery Timelines",
      description:
        "Guaranteed 1-to-2 week sprint cadences with predefined deliverables. Protect your project margins with transparent, fixed pricing and zero surprise invoices.",
      badge: "Margin Protection",
      Icon: Layers,
    },
    {
      title: "Rapid Pod Deployment",
      subtitle: "Zero Permanent Payroll Overhead",
      description:
        "Scale cross-functional engineering pods up or down based on your active client pipeline. Principal Architect, Full-Stack, Mobile, and QA ready in 7 days.",
      badge: "Elastic Squads",
      Icon: Zap,
    },
  ];

  return (
    <section id="partnerships" className="py-20 lg:py-28 bg-[#F8FAFC] border-t border-[#E2E8F0] relative overflow-hidden">
      {/* ── Architectural Building Background Layer ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        <Image
          src="/images/partners-bg.jpg"
          alt="SprintStack Enterprise Architecture"
          fill
          priority={false}
          className="object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC] via-[#F8FAFC]/85 to-[#F8FAFC]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 md:mb-14 scroll-reveal">
          <span className="section-label">White-Label &amp; Partners</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            White-Label &amp; Partners
          </h2>
          <p className="text-[#475569] text-sm sm:text-base leading-relaxed">
            SprintStack provides 100% white-label software engineering capacity for <strong className="text-[#0F172A]">Digital consultancies</strong>, <strong className="text-[#0F172A]">Marketing agencies</strong>, and <strong className="text-[#0F172A]">IT service providers</strong>.
          </p>

          {/* 3-Step Model (White cards on #F8FAFC) */}
          <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto text-xs text-left">
            <div className="p-4 rounded-xl bg-white border border-[#E5E8ED] space-y-1 shadow-2xs">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#2554EB]">Step 01</span>
              <div className="text-[#0F172A] font-semibold text-sm">Agency Lands Client</div>
              <p className="text-xs text-[#64748B]">You scope and price under your agency brand.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E5E8ED] space-y-1 shadow-2xs">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#2554EB]">Step 02</span>
              <div className="text-[#0F172A] font-semibold text-sm">SprintStack Builds</div>
              <p className="text-xs text-[#64748B]">We engineer behind the scenes under strict NDA.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E5E8ED] space-y-1 shadow-2xs">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#0E9F6E]">Step 03</span>
              <div className="text-[#0F172A] font-semibold text-sm">Agency Delivers</div>
              <p className="text-xs text-[#64748B]">You deliver production code with 100% IP ownership.</p>
            </div>
          </div>
        </div>

        {/* 3 Core Pillars (Clean White Cards, Unified Monochrome Blue Icons) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 scroll-stagger">
          {partnershipPillars.map((pillar) => {
            const Icon = pillar.Icon;
            return (
              <div
                key={pillar.title}
                className="bg-white rounded-xl border border-[#E5E8ED] p-6 sm:p-7 shadow-xs card-interactive group flex flex-col justify-between space-y-5"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-[#F3F4F6] border border-[#E5E8ED] flex items-center justify-center text-[#111827] transition-all duration-200 group-hover:bg-[#111827] group-hover:text-white">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#F3F4F6] text-[#374151] border border-[#E5E8ED]">
                      {pillar.badge}
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-widest text-[#64748B] block mb-1">
                      {pillar.subtitle}
                    </span>
                    <h3 className="text-xl font-bold text-[#0F172A] tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-[#475569] mt-2 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#F1F5F9] flex flex-col sm:flex-row gap-2.5">
                  <button
                    onClick={openBookingModal}
                    className="btn-primary flex-1 py-2.5 text-xs sm:text-sm font-semibold cursor-pointer active:scale-95 transition-transform"
                  >
                    Discuss Terms
                  </button>
                  <Link
                    href="/partners/white-label"
                    className="btn-secondary py-2.5 px-3 text-xs sm:text-sm font-semibold text-center active:scale-95 transition-transform"
                  >
                    Squad Details
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
