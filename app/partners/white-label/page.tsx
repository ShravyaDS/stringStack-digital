"use client";

import React from "react";
import {
  ShieldCheck,
  Lock,
  Users,
  CheckCircle2,
  Cpu,
  Layers,
  Zap,
  Building,
  Briefcase,
  FileCheck2,
  ArrowRight,
} from "lucide-react";
import { BackButton } from "@/components/ui/BackButton";
import { useBookingModal } from "@/components/ModalProvider";

export default function WhiteLabelPage() {
  const { openBookingModal } = useBookingModal();

  const squads = [
    {
      role: "Principal Systems Architect",
      focus: "System design, database modeling, security protocols & code reviews",
    },
    {
      role: "Senior Full-Stack Engineer (Next.js / React 19)",
      focus: "App Router, Server Actions, responsive UI, microservices & APIs",
    },
    {
      role: "Senior Mobile Engineer (Flutter)",
      focus: "Cross-platform iOS/Android, offline SQLite sync & telemetry",
    },
    {
      role: "DevOps & QA Automation Specialist",
      focus: "CI/CD pipelines, Edge caching, Playwright E2E & security hardening",
    },
  ];

  const guarantees = [
    {
      Icon: Lock,
      title: "100% Mutual Bilateral NDA",
      desc: "We sign strict confidentiality agreements before discussing any project details. Your clients will never know SprintStack exists.",
    },
    {
      Icon: FileCheck2,
      title: "Immediate IP Assignment",
      desc: "All source code, schemas, documentation, and cloud infrastructure are transferred to your ownership with zero encumbrance.",
    },
    {
      Icon: Users,
      title: "White-Label Client Comms",
      desc: "We can operate under your agency domain and Slack workspaces, or remain 100% behind the curtain as your silent engineering engine.",
    },
    {
      Icon: Zap,
      title: "Predictable Sprint Rate Cards",
      desc: "Fixed weekly sprint rates with guaranteed capacity so you can price client contracts with high, reliable profit margins.",
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-[#090D16] text-white min-h-screen">
      
      {/* ── Hero Section ── */}
      <section className="py-12 md:py-20 relative overflow-hidden border-b border-[#1F2937]">
        {/* Ambient Subtle Studio Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none -z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-6">
            <BackButton fallbackHref="/#partnerships" label="Back to Partnerships" />
          </div>

          <div className="max-w-3xl space-y-5">
            <div className="flex items-center gap-2">
              <span className="section-label">Agency &amp; Venture Partnerships</span>
              <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/25">
                100% Stealth &amp; NDA
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              White-Label Engineering &amp; <br />
              <span className="text-blue-500">
                Dedicated Software Squads.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Scale your agency capacity or venture roadmap overnight. We deliver battle-tested web apps, mobile systems, and enterprise ERPs under your brand with zero hiring lag and zero agency fluff.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                onClick={openBookingModal}
                className="btn-primary px-6 py-3 text-sm font-semibold cursor-pointer active:scale-95 transition-transform flex items-center gap-2"
              >
                <span>Book Partner Discovery Session</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4 Partner Guarantees ── */}
      <section className="py-16 sm:py-20 bg-[#070B14] border-b border-[#1F2937]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2.5">
            <span className="section-label">Partnership Standards</span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              The Agency Partner Guarantee
            </h2>
            <p className="text-sm text-slate-400">
              Strict institutional protocols protecting your agency reputation and client relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {guarantees.map((g) => {
              const Icon = g.Icon;
              return (
                <div
                  key={g.title}
                  className="p-5 sm:p-6 rounded-2xl bg-[#0E1528] border border-[#1F2937] space-y-3 hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1 shadow-lg"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/30 text-blue-400 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white">{g.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-normal">{g.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Dedicated Squad Composition ── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2.5">
            <span className="section-label">Turnkey Delivery</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Anatomy of a Dedicated Squad
            </h2>
          </div>
          <p className="text-slate-400 max-w-md text-sm leading-relaxed font-normal">
            Every squad is fully integrated and managed with automated daily async reports, weekly sprint demos, and direct code commits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {squads.map((s, idx) => (
            <div
              key={s.role}
              className="p-5 sm:p-6 rounded-2xl bg-[#0E1528] border border-[#1F2937] flex items-start gap-4 shadow-lg hover:border-blue-500/40 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-[#070B14] border border-[#1F2937] flex items-center justify-center font-mono font-bold text-xs text-blue-400 shrink-0">
                0{idx + 1}
              </div>
              <div className="space-y-1">
                <h3 className="text-sm sm:text-base font-bold text-white">{s.role}</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-normal">{s.focus}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Partner Discovery Callout ── */}
        <div className="mt-14 p-8 sm:p-12 rounded-3xl bg-[#0E1528] border border-[#1F2937] shadow-2xl text-center space-y-6 relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
          
          <div className="max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Ready to expand your agency capacity?
            </h3>
            <p className="text-sm text-slate-400">
              Schedule a 15-minute partner call to discuss white-label rate cards, squad availability, and mutual NDA execution.
            </p>
          </div>

          <div>
            <button
              onClick={openBookingModal}
              className="btn-primary px-7 py-3.5 text-sm font-semibold cursor-pointer active:scale-95 transition-transform flex items-center gap-2 mx-auto"
            >
              <span>Book 15-Min Partner Discovery</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
