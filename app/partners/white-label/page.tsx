"use client";

import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  Users,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  Zap,
  Building,
  Briefcase,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
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
      title: "100% Mutual Bilateral NDA",
      desc: "We sign strict confidentiality agreements before discussing any project details. Your clients will never know SprintStack exists.",
    },
    {
      title: "Immediate IP Assignment",
      desc: "All source code, schemas, documentation, and cloud infrastructure are transferred to your ownership with zero encumbrance.",
    },
    {
      title: "White-Label Client Comms",
      desc: "We can operate under your agency domain and Slack workspaces, or remain 100% behind the curtain as your silent engineering engine.",
    },
    {
      title: "Predictable Sprint Rate Cards",
      desc: "Fixed weekly sprint rates with guaranteed capacity so you can price client contracts with high, reliable profit margins.",
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-obsidian bg-grid-pattern">
      {/* Hero */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-indigo-600/15 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <BackButton fallbackHref="/#partnerships" />
          </div>

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2">
              <Badge variant="indigo">Agency &amp; Venture Partnerships</Badge>
              <Badge variant="slate">100% Stealth &amp; NDA</Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              White-Label Engineering &amp; <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-blue-400">
                Dedicated Software Squads.
              </span>
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed font-normal">
              Scale your agency capacity or venture roadmap overnight. We deliver battle-tested web apps, mobile systems, and enterprise ERPs under your brand with zero hiring lag and zero agency fluff.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button onClick={openBookingModal} variant="primary" size="lg" className="gap-2 font-bold shadow-xl shadow-indigo-500/25">
                <span>Book Partner Discovery Session</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Guarantees */}
      <section className="py-16 bg-surface/40 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <Badge variant="indigo">Partnership Standards</Badge>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              The Agency Partner Guarantee
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((g) => (
              <div
                key={g.title}
                className="p-6 rounded-3xl bg-surface/90 border border-border space-y-3 glow-card"
              >
                <div className="p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 inline-block">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">{g.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Squad Composition */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <Badge variant="indigo">Turnkey Delivery</Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Anatomy of a Dedicated Squad
            </h2>
          </div>
          <p className="text-slate-300 max-w-md text-sm leading-relaxed font-normal">
            Every squad is fully integrated and managed with automated daily async reports, weekly sprint demos, and direct code commits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {squads.map((s, idx) => (
            <div
              key={s.role}
              className="p-6 rounded-2xl bg-surface/90 border border-border flex items-start gap-4 glow-card"
            >
              <div className="w-10 h-10 rounded-xl bg-obsidian border border-slate-800 flex items-center justify-center font-mono font-bold text-accent-blue shrink-0 shadow-inner">
                0{idx + 1}
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-white">{s.role}</h3>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">{s.focus}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Discovery Callout */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-surface border border-indigo-500/40 shadow-2xl shadow-indigo-500/15 text-center space-y-6 glow-card">
          <div className="max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Ready to expand your agency capacity?
            </h3>
            <p className="text-sm text-slate-300">
              Schedule a 15-minute partner call to discuss white-label rate cards, squad availability, and mutual NDA execution.
            </p>
          </div>
          <Button onClick={openBookingModal} variant="primary" size="lg" className="gap-2 font-bold shadow-xl shadow-indigo-500/30">
            <span>Book 15-Min Partner Discovery</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}
