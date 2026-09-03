"use client";

import React from "react";
import { ShieldCheck, Zap, Globe, FileCode2 } from "lucide-react";

const TRUST_METRICS = [
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    iconClass: "icon-box-emerald",
    accent: "text-emerald-400",
    title: "100% IP Ownership",
    desc: "Complete source code, architecture, and repository rights transferred on Day 1.",
    badge: "Guaranteed",
    badgeBg: "rgba(16, 185, 129, 0.1)",
    badgeBorder: "rgba(16, 185, 129, 0.2)",
    badgeColor: "#34D399",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    iconClass: "icon-box-blue",
    accent: "text-blue-400",
    title: "Agile Sprint Cadence",
    desc: "Guaranteed 1–2 week release cycles with live staging previews and sprint demos.",
    badge: "1–2 Weeks",
    badgeBg: "rgba(59, 130, 246, 0.1)",
    badgeBorder: "rgba(59, 130, 246, 0.2)",
    badgeColor: "#60A5FA",
  },
  {
    icon: <Globe className="w-5 h-5" />,
    iconClass: "icon-box-violet",
    accent: "text-indigo-400",
    title: "Global Standards",
    desc: "Built to US, UK, UAE, Singapore & EU enterprise security and compliance standards.",
    badge: "6 Markets",
    badgeBg: "rgba(99, 102, 241, 0.1)",
    badgeBorder: "rgba(99, 102, 241, 0.2)",
    badgeColor: "#818CF8",
  },
  {
    icon: <FileCode2 className="w-5 h-5" />,
    iconClass: "icon-box-cyan",
    accent: "text-cyan-400",
    title: "Zero Technical Debt",
    desc: "Modular, typed, and fully documented production architectures with zero lock-in.",
    badge: "Clean Code",
    badgeBg: "rgba(6, 182, 212, 0.1)",
    badgeBorder: "rgba(6, 182, 212, 0.2)",
    badgeColor: "#22D3EE",
  },
];

export function TrustBanner() {
  return (
    <section
      className="relative z-20 py-10 md:py-12"
      style={{
        background: "linear-gradient(180deg, #090D16 0%, #0E1623 100%)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* Subtle top gradient accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.35), rgba(99,102,241,0.4), transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {TRUST_METRICS.map((metric) => (
            <div
              key={metric.title}
              className="card-flat rounded-2xl p-5 group hover-glow-violet"
              style={{
                background: "rgba(14, 20, 36, 0.6)",
                border: "1px solid rgba(255,255,255,0.07)",
                transition: "all 0.25s ease",
              }}
            >
              <div className="flex items-start justify-between mb-3.5">
                {/* Icon box */}
                <div className={`icon-box ${metric.iconClass} group-hover:scale-105 transition-transform duration-300`}>
                  {metric.icon}
                </div>
                {/* Badge */}
                <span
                  className="text-[10px] font-semibold tracking-wider px-2 py-0.5 rounded-full"
                  style={{ background: metric.badgeBg, border: `1px solid ${metric.badgeBorder}`, color: metric.badgeColor }}
                >
                  {metric.badge}
                </span>
              </div>

              <h3 className="text-sm font-bold text-white mb-1.5 tracking-tight group-hover:text-white transition-colors">
                {metric.title}
              </h3>
              <p className="text-xs text-[#A3A2B0] leading-relaxed">{metric.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
