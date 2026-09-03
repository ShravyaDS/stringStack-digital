"use client";

import React from "react";
import { Lock, ArrowRight, Layers, Zap } from "lucide-react";
import { Button } from "../ui/Button";
import { useBookingModal } from "../ModalProvider";

export function PartnershipSection() {
  const { openBookingModal } = useBookingModal();

  const partnershipPillars = [
    {
      title: "100% White-Label Delivery",
      subtitle: "Silent Execution Backbone",
      description:
        "We build under your brand, commit directly to your private repositories, and adhere strictly to your agency communication guidelines. Zero external attribution.",
      badge: "Stealth NDA",
      icon: <Lock className="w-5 h-5 text-blue-400" />,
    },
    {
      title: "Re-sellable Enterprise Solutions",
      subtitle: "Immediate Revenue Catalog",
      description:
        "Deploy our proven Attendance, CRM, and ERP modules directly to your enterprise clients under your own proprietary brand and customized licensing models.",
      badge: "Instant IP Resell",
      icon: <Layers className="w-5 h-5 text-emerald-400" />,
    },
    {
      title: "On-Demand Sprint Capacity",
      subtitle: "Zero Permanent Payroll Overhead",
      description:
        "Scale cross-functional engineering pods up or down based on your active client pipeline. Principal Architect, Full-Stack, Mobile, and QA ready in 7 days.",
      badge: "Elastic Squads",
      icon: <Zap className="w-5 h-5 text-indigo-400" />,
    },
  ];

  return (
    <section id="partnerships" className="py-20 md:py-24 relative" style={{ background: "linear-gradient(180deg, #0E1623 0%, #090D16 100%)", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 md:mb-16">
          <div className="flex items-center justify-center">
            <span className="section-label">White-Label &amp; Partners</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1]">
            White-Label &amp;{" "}
            <span className="text-gradient-hero">Partners</span>
          </h2>
          <p className="text-[#A3A2B0] text-base leading-relaxed">
            SprintStack provides 100% white-label software engineering capacity for <strong className="text-white">Digital consultancies</strong>, <strong className="text-white">Marketing agencies</strong>, and <strong className="text-white">IT service providers</strong>.
          </p>

          {/* 3-Step Model */}
          <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto text-xs text-left">
            <div className="p-4 rounded-xl space-y-1.5" style={{ background: "rgba(99,102,241,0.08)", border: "1px solid rgba(59,130,246,0.18)" }}>
              <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: "#818CF8" }}>Step 01</span>
              <div className="text-white font-semibold text-sm">Agency Lands Client</div>
              <p className="text-xs text-[#A3A2B0]">You scope and price under your agency brand.</p>
            </div>
            <div className="p-4 rounded-xl space-y-1.5" style={{ background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.2)" }}>
              <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: "#60A5FA" }}>Step 02</span>
              <div className="text-white font-semibold text-sm">SprintStack Builds</div>
              <p className="text-xs text-[#A3A2B0]">We engineer behind the scenes under strict NDA.</p>
            </div>
            <div className="p-4 rounded-xl space-y-1.5" style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.2)" }}>
              <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: "#34D399" }}>Step 03</span>
              <div className="text-white font-semibold text-sm">Agency Delivers</div>
              <p className="text-xs text-[#A3A2B0]">You deliver production code with 100% IP ownership.</p>
            </div>
          </div>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {partnershipPillars.map((pillar) => (
            <div
              key={pillar.title}
              className="card-raised rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-5 hover-glow-violet"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="icon-box icon-box-violet">
                    {pillar.icon}
                  </div>
                  <span
                    className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full"
                    style={{ background: "rgba(59,130,246,0.10)", border: "1px solid rgba(59,130,246,0.18)", color: "#A5B4FC" }}
                  >
                    {pillar.badge}
                  </span>
                </div>

                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-[#6B6A78] block mb-1">
                    {pillar.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#A3A2B0] mt-2.5 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>

              <div className="pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                <button
                  onClick={openBookingModal}
                  className="btn-primary w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-white cursor-pointer"
                >
                  <span>Discuss White-Label Terms</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
