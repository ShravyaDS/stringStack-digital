"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Zap,
  FileCode,
} from "lucide-react";
import { Button } from "../ui/Button";
import { DELIVERY_FRAMEWORK } from "@/lib/constants";
import { useBookingModal } from "../ModalProvider";

export function DeliveryFramework() {
  const { openBookingModal } = useBookingModal();
  const [selectedPhaseIndex, setSelectedPhaseIndex] = useState(0);

  const activePhase = DELIVERY_FRAMEWORK[selectedPhaseIndex];

  const phaseIcons = [
    <FileCode key="arch" className="w-5 h-5 text-blue-400" />,
    <Zap key="sprint" className="w-5 h-5 text-cyan-400" />,
    <ShieldCheck key="qa" className="w-5 h-5 text-amber-400" />,
    <CheckCircle2 key="launch" className="w-5 h-5 text-emerald-400" />,
  ];

  return (
    <section id="process" className="py-20 md:py-24 bg-[#080C14] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400">
            <span className="font-semibold uppercase tracking-wider">DELIVERY PROCESS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Delivery Process
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            A structured 4-stage engineering methodology: 48-hour scope lock, 1–2 week sprint deployments, rigorous QA audits, and complete IP &amp; code handover.
          </p>
        </div>

        {/* 4-Phase Pipeline Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {DELIVERY_FRAMEWORK.map((item, idx) => {
            const isSelected = selectedPhaseIndex === idx;
            return (
              <button
                key={item.phase}
                onClick={() => setSelectedPhaseIndex(idx)}
                className={`text-left p-5 rounded-2xl border transition-colors flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? "bg-slate-900 border-slate-600 text-white"
                    : "bg-slate-900/40 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-cyan-400 px-2.5 py-0.5 rounded bg-slate-800 border border-slate-700">
                      {item.phase}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">{item.duration}</span>
                  </div>

                  <h3 className="text-base font-bold text-white tracking-tight">
                    {item.name}
                  </h3>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono">
                  <span className={isSelected ? "text-cyan-400 font-semibold" : "text-slate-400"}>
                    {isSelected ? "● Active Step" : "Inspect Deliverables"}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Phase Detailed Breakdown Panel */}
        <div className="p-6 sm:p-10 rounded-2xl bg-slate-900/40 border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Phase Highlights (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white">
                  {phaseIcons[selectedPhaseIndex]}
                </div>
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase font-semibold">
                    {activePhase.phase} • {activePhase.duration}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {activePhase.name}
                  </h3>
                </div>
              </div>

              {/* Concrete deliverables checklist */}
              <div className="space-y-3 pt-1">
                <span className="text-xs font-mono uppercase text-slate-400 tracking-wider block font-semibold">
                  Standard Sprint Milestones:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activePhase.items.map((it) => (
                    <div key={it} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{it}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverable Callout */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 flex items-center gap-2">
                <span className="text-slate-400 font-mono">Formal Handover:</span>
                <strong className="text-white">{activePhase.deliverable}</strong>
              </div>
            </div>

            {/* Right: Quick Action (5 cols) */}
            <div className="lg:col-span-5 p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-4 text-left">
              <div className="text-xs font-mono text-slate-400 uppercase">
                Sprint Transparency Guarantee
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Every line of code is committed directly to your repository with automated CI/CD staging links. Zero black boxes.
              </p>
              <Button
                onClick={openBookingModal}
                variant="primary"
                size="md"
                className="w-full justify-center text-xs font-semibold bg-blue-600 hover:bg-blue-500 py-2.5 rounded-xl"
              >
                <span>Request Architecture &amp; Sprint Plan</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
