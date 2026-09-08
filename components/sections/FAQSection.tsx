"use client";

import React, { useState } from "react";
import { Plus, HelpCircle, Eye, EyeOff } from "lucide-react";
import { FAQS } from "@/lib/constants";
import { useBookingModal } from "../ModalProvider";

export function FAQSection() {
  // Support independent open state: when expanded it shows, and doesn't auto-hide when opening others
  const [openIndices, setOpenIndices] = useState<number[]>([]);
  const { openBookingModal } = useBookingModal();

  const toggle = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const isAllOpen = openIndices.length === FAQS.length;

  const toggleAll = () => {
    if (isAllOpen) {
      setOpenIndices([]);
    } else {
      setOpenIndices(FAQS.map((_, i) => i));
    }
  };

  return (
    <section id="faq" className="py-28 lg:py-36 bg-slate-50 dark:bg-[#090D16] border-t border-slate-200 dark:border-[#1F2937] relative overflow-hidden scroll-mt-24 transition-colors duration-200">
      {/* Soft brand blue ambient glow */}
      <div className="absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-blue-600/[0.07] rounded-full blur-[110px] pointer-events-none animate-aura-pulse" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <span className="section-label">Engineering Engagement FAQ</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-[-0.03em] leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl">
              Direct answers on team onboarding, IP assignment, sprint cadences, and custom hardware/ERP integrations.
            </p>
          </div>

          {/* Quick Toggle: Expand All / Collapse All */}
          <button
            onClick={toggleAll}
            className="self-start sm:self-end flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-[#1F2937] bg-white dark:bg-[#111827] hover:bg-slate-100 dark:hover:bg-[#162238] hover:border-blue-500/40 text-xs font-semibold text-slate-700 dark:text-slate-300 shadow-2xs transition-all cursor-pointer"
          >
            {isAllOpen ? <EyeOff className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" /> : <Eye className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />}
            <span>{isAllOpen ? "Collapse All" : "Expand All"}</span>
          </button>
        </div>

        {/* Accordion List: Shows explanation ONLY when expanded, and stays open without auto-hiding */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndices.includes(index);
            return (
              <div
                key={faq.question}
                className={`rounded-xl bg-white dark:bg-[#111827] border transition-all duration-200 p-5 sm:p-6 shadow-sm ${
                  isOpen
                    ? "border-blue-500/60 shadow-[0_4px_24px_rgba(59,130,246,0.1)] ring-1 ring-blue-500/15"
                    : "border-slate-200 dark:border-[#1F2937] dark:shadow-[0_4px_20px_rgba(0,0,0,0.25)] hover:border-blue-400 dark:hover:border-white/[0.16]"
                }`}
              >
                {/* Question Trigger Row */}
                <button
                  onClick={() => toggle(index)}
                  className="w-full text-left flex items-center justify-between gap-4 cursor-pointer group"
                >
                  <div className="flex items-center gap-3.5">
                    <span className="text-[11px] font-mono font-bold text-blue-600 dark:text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded-md shrink-0">
                      0{index + 1}
                    </span>
                    <span className="font-bold text-sm sm:text-base text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {faq.question}
                    </span>
                  </div>

                  {/* Circular + Expand Symbol */}
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "border-blue-500 bg-blue-600 text-white shadow-xs"
                        : "border-slate-300 dark:border-white/[0.12] text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-[#090D16] group-hover:border-blue-500 group-hover:text-blue-600 dark:group-hover:text-blue-400"
                    }`}
                  >
                    <Plus
                      className={`w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2] transition-transform duration-300 ${
                        isOpen ? "rotate-45 text-white" : "rotate-0 text-slate-500 dark:text-slate-400"
                      }`}
                    />
                  </div>
                </button>

                {/* Explanation Card (Shows ONLY when expanded, stays open so it doesn't get hidden) */}
                {isOpen && (
                  <div className="mt-4 p-5 sm:p-6 rounded-xl bg-slate-50 dark:bg-[#090D16] border border-slate-200 dark:border-white/[0.08] shadow-inner text-slate-700 dark:text-slate-200 animate-in fade-in duration-200">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
                      <span>SprintStack Engagement Protocol</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Architect Callout (Executive Card) */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0E1626] border border-slate-200 dark:border-white/[0.08] shadow-md dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] flex flex-col sm:flex-row items-center justify-between gap-6 text-slate-900 dark:text-white">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">Have a custom compliance or architecture requirement?</div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5">Speak directly with senior engineers who design and ship production systems.</p>
            </div>
          </div>

          <button
            onClick={openBookingModal}
            className="btn-primary px-5 py-2.5 text-xs sm:text-sm font-semibold shrink-0 cursor-pointer active:scale-95 transition-transform"
          >
            Ask a Principal Systems Architect
          </button>
        </div>

      </div>
    </section>
  );
}
