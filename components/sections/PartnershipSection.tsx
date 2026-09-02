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
    <section id="partnerships" className="py-20 md:py-24 bg-[#070A12] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400">
            <span className="font-semibold uppercase tracking-wider">
              WHITE-LABEL &amp; PARTNERS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            White-Label &amp; Partners
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            SprintStack provides 100% white-label software engineering capacity for <strong className="text-white">Digital consultancies</strong>, <strong className="text-white">Marketing agencies</strong>, and <strong className="text-white">IT service providers</strong>.
          </p>

          {/* Clean 3-Step Model Visual */}
          <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto text-xs font-mono text-left">
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
              <span className="text-[10px] text-cyan-400 font-bold">STEP 01</span>
              <div className="text-white font-semibold">Agency Lands Client</div>
              <p className="text-[11px] text-slate-400">You scope and price under your agency brand.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-700 space-y-1">
              <span className="text-[10px] text-blue-400 font-bold">STEP 02</span>
              <div className="text-white font-semibold">SprintStack Builds</div>
              <p className="text-[11px] text-slate-400">We engineer behind the scenes under strict NDA.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
              <span className="text-[10px] text-emerald-400 font-bold">STEP 03</span>
              <div className="text-white font-semibold">Agency Delivers</div>
              <p className="text-[11px] text-slate-400">You deliver production code with 100% IP ownership.</p>
            </div>
          </div>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {partnershipPillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl p-6 sm:p-8 bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300">
                    {pillar.icon}
                  </div>
                  <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700 font-semibold">
                    {pillar.badge}
                  </span>
                </div>

                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-semibold">
                    {pillar.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-white tracking-tight mt-1">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>
              </div>

              <div className="pt-5 border-t border-slate-800">
                <Button
                  onClick={openBookingModal}
                  variant="outline"
                  size="md"
                  className="w-full justify-center text-xs font-semibold border-slate-700 hover:border-slate-600 text-slate-200"
                >
                  <span>Discuss White-Label Terms</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
