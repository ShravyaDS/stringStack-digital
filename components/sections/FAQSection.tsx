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
    <section id="faq" className="py-20 lg:py-28 bg-[#F8FAFC] border-t border-[#E2E8F0] relative overflow-hidden">
      {/* Soft one-sided color bleed (Bottom-Right) */}
      <div className="absolute -bottom-20 -right-20 w-[550px] h-[550px] bg-[radial-gradient(circle,rgba(37,99,235,0.12)_0%,rgba(99,102,241,0.06)_40%,transparent_70%)] blur-[95px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4 scroll-reveal">
          <div className="space-y-3">
            <span className="section-label">Engineering Engagement FAQ</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-[#475569] text-sm sm:text-base leading-relaxed max-w-xl">
              Direct answers on team onboarding, IP assignment, sprint cadences, and custom hardware/ERP integrations.
            </p>
          </div>

          {/* Quick Toggle: Expand All / Collapse All */}
          <button
            onClick={toggleAll}
            className="self-start sm:self-end flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E2E8F0] bg-white hover:bg-slate-50 text-xs font-semibold text-[#334155] shadow-2xs transition-colors cursor-pointer"
          >
            {isAllOpen ? <EyeOff className="w-3.5 h-3.5 text-[#64748B]" /> : <Eye className="w-3.5 h-3.5 text-[#2563EB]" />}
            <span>{isAllOpen ? "Collapse All" : "Expand All"}</span>
          </button>
        </div>

        {/* Accordion List: Shows explanation ONLY when expanded, and stays open without auto-hiding */}
        <div className="space-y-3.5 scroll-stagger">
          {FAQS.map((faq, index) => {
            const isOpen = openIndices.includes(index);
            return (
              <div
                key={faq.question}
                className="rounded-xl bg-white border border-[#E2E8F0] hover:border-[#CBD5E1] shadow-xs p-5 sm:p-6 transition-all duration-200"
              >
                {/* Question Trigger Row */}
                <button
                  onClick={() => toggle(index)}
                  className="w-full text-left flex items-center justify-between gap-4 cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-mono font-bold text-[#2563EB] bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-md shrink-0">
                      0{index + 1}
                    </span>
                    <span className="font-bold text-sm sm:text-base text-[#0F172A] group-hover:text-[#2563EB] transition-colors">
                      {faq.question}
                    </span>
                  </div>

                  {/* Circular + Expand Symbol (Styled like saigontechnology.com) */}
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "border-[#2563EB] bg-[#2563EB] text-white shadow-xs"
                        : "border-slate-300 text-slate-400 bg-white group-hover:border-[#2563EB] group-hover:text-[#2563EB]"
                    }`}
                  >
                    <Plus
                      className={`w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2] transition-transform duration-300 ${
                        isOpen ? "rotate-45" : "rotate-0"
                      }`}
                    />
                  </div>
                </button>

                {/* Dark Explanation Card (Shows ONLY when expanded, stays open so it doesn't get hidden) */}
                {isOpen && (
                  <div className="mt-4 p-5 sm:p-6 rounded-xl bg-[#0B1120] border border-[#1E293B] shadow-xl text-slate-200 animate-in fade-in duration-200">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      <span>SprintStack Engagement Protocol</span>
                    </div>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Architect Callout (Executive Dark Card) */}
        <div className="mt-12 p-5 sm:p-6 rounded-2xl bg-[#0B1120] border border-[#1E293B] shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-white">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Have a custom compliance or architecture requirement?</div>
              <p className="text-xs text-slate-400 mt-0.5">Speak directly with senior engineers who design and ship production systems.</p>
            </div>
          </div>

          <button
            onClick={openBookingModal}
            className="btn-primary px-5 py-2.5 text-xs font-semibold shrink-0 cursor-pointer"
          >
            Ask a Principal Systems Architect
          </button>
        </div>

      </div>
    </section>
  );
}
