"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import { FAQS } from "@/lib/constants";
import { Badge } from "../ui/Badge";
import { useBookingModal } from "../ModalProvider";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { openBookingModal } = useBookingModal();

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-surface/30 border-t border-border relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="blue">Engineering Engagement FAQ</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed max-w-xl mx-auto font-normal">
            Direct answers on team onboarding, IP assignment, communication protocols, and custom ERP integration.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="rounded-2xl bg-surface/90 border border-border overflow-hidden transition-all duration-300 glow-card"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-800/40 transition-colors"
                >
                  <span className="font-bold text-base text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`p-2 rounded-xl bg-obsidian border border-slate-800 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-accent-blue border-blue-500/40" : "text-slate-400"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-slate-300 leading-relaxed border-t border-border/40 font-normal animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-14 text-center p-6 sm:p-7 rounded-3xl bg-obsidian border border-slate-800 text-xs font-mono text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <span className="text-slate-300">Have a custom compliance or architecture requirement?</span>
          <button
            onClick={openBookingModal}
            className="text-accent-blue hover:text-blue-300 font-bold flex items-center gap-2"
          >
            <span>Ask a Principal Systems Architect</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
