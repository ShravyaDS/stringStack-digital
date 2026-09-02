"use client";

import React, { useState } from "react";
import {
  CreditCard,
  Truck,
  ShoppingBag,
  HeartPulse,
  Cpu,
  Briefcase,
  ArrowRight,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Building,
  Sparkles,
} from "lucide-react";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { INDUSTRIES } from "@/lib/constants";
import { useBookingModal } from "../ModalProvider";

export function IndustriesSection() {
  const { openBookingModal } = useBookingModal();
  const [selectedIndustry, setSelectedIndustry] = useState(0);

  const icons: Record<string, React.ReactNode> = {
    CreditCard: <CreditCard className="w-6 h-6 text-accent-blue" />,
    Truck: <Truck className="w-6 h-6 text-accent-cyan" />,
    ShoppingBag: <ShoppingBag className="w-6 h-6 text-accent-emerald" />,
    HeartPulse: <HeartPulse className="w-6 h-6 text-red-400" />,
    Cpu: <Cpu className="w-6 h-6 text-indigo-400" />,
    Briefcase: <Briefcase className="w-6 h-6 text-amber-400" />,
  };

  const activeInd = INDUSTRIES[selectedIndustry];

  return (
    <section id="industries" className="py-24 bg-surface/40 border-t border-border relative overflow-hidden">
      {/* Radiant ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-bold">
                Industry Expertise
              </span>
              <Badge variant="indigo" size="sm">Domain Mastery</Badge>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Sectors &amp; Global Industries <br className="hidden sm:inline" />
              <span className="text-slate-400 font-normal">Engineered for High-Stakes Operations.</span>
            </h2>
          </div>
          <p className="text-slate-300 max-w-md text-sm leading-relaxed font-normal">
            Whether navigating strict financial ledgers, HIPAA data residency, or multi-location workforce biometrics, we build to highest industry specifications.
          </p>
        </div>

        {/* 6-Card Industry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((ind, idx) => {
            const isSelected = selectedIndustry === idx;
            return (
              <div
                key={ind.id}
                onClick={() => setSelectedIndustry(idx)}
                className={`p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between glow-card cursor-pointer group ${
                  isSelected
                    ? "bg-surface border-indigo-500/80 shadow-2xl shadow-indigo-500/15 scale-[1.02]"
                    : "bg-surface/80 border-border/90 hover:border-slate-600 hover:bg-surface"
                }`}
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="p-3.5 rounded-2xl bg-obsidian border border-slate-800 group-hover:scale-105 transition-transform">
                      {icons[ind.iconName]}
                    </div>
                    <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-md bg-obsidian border border-slate-800 text-slate-300 font-bold">
                      {ind.badge}
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block font-semibold">
                      {ind.subtitle}
                    </span>
                    <h3 className="text-xl font-bold text-white tracking-tight mt-1 group-hover:text-indigo-300 transition-colors">
                      {ind.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed font-normal">
                      {ind.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                  <span className="text-accent-emerald font-semibold">{ind.metrics}</span>
                  <span className="text-accent-blue font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    Scope Sector <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enterprise Industry Callout Banner */}
        <div className="mt-14 p-7 sm:p-9 rounded-3xl bg-surface border border-slate-700/90 shadow-2xl glow-card flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center lg:text-left">
            <h4 className="text-xl font-bold text-white tracking-tight flex items-center justify-center lg:justify-start gap-2">
              <ShieldCheck className="w-5 h-5 text-accent-emerald" />
              <span>Need custom compliance or dedicated industry architecture?</span>
            </h4>
            <p className="text-xs text-slate-300 max-w-xl leading-relaxed">
              We provide tailored data residency topologies, bilateral NDAs, SOC 2 / HIPAA compliance audits, and custom hardware protocol integrations for enterprise deployments.
            </p>
          </div>

          <Button
            onClick={openBookingModal}
            variant="primary"
            size="md"
            className="w-full lg:w-auto shrink-0 gap-2 font-bold shadow-xl shadow-blue-500/25"
          >
            <span>Schedule Industry Architecture Call</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
