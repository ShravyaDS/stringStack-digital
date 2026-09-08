"use client";

import React from "react";
import { ShieldCheck, Zap, Globe, Code2 } from "lucide-react";

export function TrustBanner() {
  const items = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "100% IP Ownership",
      desc: "Full code ownership, documentation, and clean repository transfer from Day 1.",
    },
    {
      icon: <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "Agile Sprint Cadence",
      desc: "Weekly production demos with direct Slack/GitHub team access.",
    },
    {
      icon: <Globe className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "Global Standards",
      desc: "Built for ISO, GDPR, and HIPAA compliance across cross-border infrastructure.",
    },
    {
      icon: <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "Zero Technical Debt",
      desc: "Clean architectures built across Python, Node.js, React, Flutter, and Laravel.",
    },
  ];

  return (
    <section className="bg-white dark:bg-[#0A101D] border-b border-slate-200 dark:border-white/[0.08] py-8 lg:py-10 text-slate-900 dark:text-white relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 dark:divide-white/[0.08]">
          {items.map((item, idx) => (
            <div
              key={item.title}
              className={`flex items-start gap-4 ${idx !== 0 ? "pt-6 sm:pt-0 sm:pl-6 lg:pl-8" : ""}`}
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white tracking-tight">{item.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
