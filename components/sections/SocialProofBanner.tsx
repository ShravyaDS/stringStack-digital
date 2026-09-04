"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import {
  CheckCircle2, Award, ArrowRight,
  Cloud, CreditCard, Zap, Database, Globe, Layers, Box,
} from "lucide-react";
import { useBookingModal } from "../ModalProvider";

/* ─── Partner data with icon + accent ─────────────── */
const PARTNERS = [
  { name: "AWS Partner Network", sub: "Cloud & DevOps Tier", Icon: Cloud, accentColor: "text-amber-600 dark:text-amber-400", bgAccent: "bg-amber-500/10 border-amber-500/25 text-amber-600 dark:text-amber-400", dotColor: "bg-amber-500" },
  { name: "Stripe Verified", sub: "Enterprise Payments", Icon: CreditCard, accentColor: "text-indigo-600 dark:text-indigo-400", bgAccent: "bg-indigo-500/10 border-indigo-500/25 text-indigo-600 dark:text-indigo-400", dotColor: "bg-indigo-500" },
  { name: "Vercel Enterprise", sub: "Edge Architecture", Icon: Zap, accentColor: "text-slate-900 dark:text-white", bgAccent: "bg-slate-900/10 dark:bg-white/10 border-slate-300 dark:border-white/20 text-slate-900 dark:text-white", dotColor: "bg-slate-900 dark:bg-white" },
  { name: "Google Cloud", sub: "Data & ML Pipelines", Icon: Globe, accentColor: "text-blue-600 dark:text-blue-400", bgAccent: "bg-blue-500/10 border-blue-500/25 text-blue-600 dark:text-blue-400", dotColor: "bg-blue-500" },
  { name: "PostgreSQL", sub: "Enterprise Databases", Icon: Database, accentColor: "text-sky-600 dark:text-sky-400", bgAccent: "bg-sky-500/10 border-sky-500/25 text-sky-600 dark:text-sky-400", dotColor: "bg-sky-500" },
  { name: "Supabase", sub: "Auth & Realtime Mesh", Icon: Layers, accentColor: "text-emerald-600 dark:text-emerald-400", bgAccent: "bg-emerald-500/10 border-emerald-500/25 text-emerald-600 dark:text-emerald-400", dotColor: "bg-emerald-500" },
  { name: "Docker", sub: "Containerized Sprints", Icon: Box, accentColor: "text-cyan-600 dark:text-cyan-400", bgAccent: "bg-cyan-500/10 border-cyan-500/25 text-cyan-600 dark:text-cyan-400", dotColor: "bg-cyan-500" },
];

/* Double the list for seamless loop */
const MARQUEE_ITEMS = [...PARTNERS, ...PARTNERS];

/* ─── Reveal hook ─────────────────────────────────── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 1.1) { setV(true); return; }
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setV(true); io.disconnect(); } },
      { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
    );
    io.observe(el); return () => io.disconnect();
  }, []);
  return { ref, v };
}

export function SocialProofBanner() {
  const { openBookingModal } = useBookingModal();
  const { ref: headRef, v: headV } = useReveal();
  const { ref: contentRef, v: contentV } = useReveal();

  return (
    <section className="bg-slate-50 dark:bg-[#090D16] border-b border-slate-200 dark:border-[#1F2937] transition-colors duration-200 relative">

      {/* ═══════════════════════════════════════════
          PARTNER LOGOS — Premium Marquee Strip
          ═══════════════════════════════════════════ */}
      <div className="py-12 lg:py-14 border-b border-slate-200 dark:border-[#1F2937] relative overflow-hidden">
        {/* Section label */}
        <div
          ref={headRef}
          className="text-center mb-8 px-4"
          style={{
            opacity: headV ? 1 : 0,
            transform: headV ? "none" : "translateY(16px)",
            transition: "opacity 0.5s ease, transform 0.5s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          <span className="section-label">Enterprise Technology Standards</span>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-lg mx-auto mt-2">
            Production architectures certified across global cloud, security, and payment compliance standards.
          </p>
        </div>

        {/* Left + right edge fade masks */}
        <div className="marquee-mask-left absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" />
        <div className="marquee-mask-right absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" />

        {/* Marquee track — doubled items for seamless loop */}
        <div className="overflow-hidden">
          <div className="marquee-track gap-3 px-3">
            {MARQUEE_ITEMS.map((p, i) => {
              const Icon = p.Icon;
              return (
                <div
                  key={i}
                  className="flex-none flex items-center gap-3 bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#1F2937] rounded-xl px-4 py-3 hover:border-blue-500/40 transition-all duration-300 cursor-default shadow-xs dark:shadow-none"
                >
                  {/* Icon chip */}
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 border ${p.bgAccent}`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>

                  {/* Text */}
                  <div>
                    <div className={`text-xs font-bold whitespace-nowrap ${p.accentColor}`}>
                      {p.name}
                    </div>
                    <div className="text-[10px] font-mono text-slate-600 dark:text-slate-400 whitespace-nowrap">{p.sub}</div>
                  </div>

                  {/* Verified dot */}
                  <div className={`w-1.5 h-1.5 rounded-full shrink-0 ml-1 ${p.dotColor}`} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════
          ENGINEERING GUILD & ENTERPRISE ASSURANCE
          ═══════════════════════════════════════════ */}
      <div className="py-12 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={contentRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
          style={{
            opacity: contentV ? 1 : 0,
            transform: contentV ? "none" : "translateY(20px)",
            transition: "opacity 0.65s ease, transform 0.65s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          {/* ── LEFT: Engineers Studio Card (7 cols) ── */}
          <div className="lg:col-span-7 relative rounded-2xl overflow-hidden min-h-[420px] lg:min-h-[500px] border border-slate-200 dark:border-white/[0.1] shadow-xl flex flex-col justify-end">
            <Image
              src="/images/team/engineering-studio.jpg"
              alt="SprintStack Senior Engineering Team Collaborating in Studio"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />

            {/* Dark vignette protection layers for 100% crisp white text readability */}
            <div className="absolute inset-0 bg-slate-950/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-transparent" />

            {/* Content overlay */}
            <div className="relative z-10 p-6 sm:p-8 lg:p-10 space-y-4">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 backdrop-blur-md">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Senior Engineering Guild</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-mono text-[11px] font-semibold bg-slate-900/80 border border-white/20 text-slate-200 backdrop-blur-md">
                  Zero Outsourcing · Dedicated Squads
                </span>
              </div>

              {/* Headline */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Built by Seasoned Architects.<br className="hidden sm:inline" />
                No Junior Relay. No Agency Fluff.
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-200 leading-relaxed max-w-xl">
                Every project is owned end-to-end by principal engineers with decades of combined experience shipping high-throughput systems across fintech, logistics, healthcare, and enterprise commerce.
              </p>
            </div>
          </div>

          {/* ── RIGHT: Guarantees Card (5 cols) ── */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 lg:p-10 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#1F2937] shadow-xl relative overflow-hidden">
            {/* Emerald glow */}
            <div className="absolute -top-16 -right-16 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="section-label-emerald flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  <span>Engineering Guarantees</span>
                </span>
                <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/25 px-2.5 py-0.5 rounded-full">
                  100% Verified
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                Enterprise Assurance on Every Sprint
              </h3>

              <ul className="space-y-4">
                {[
                  {
                    title: "Full Intellectual Property Rights",
                    desc: "Complete source code, CI/CD pipelines, and credentials transferred from Day 1.",
                  },
                  {
                    title: "Fixed-Price Sprints with Staging Deploys",
                    desc: "Guaranteed delivery windows every 7–14 days. Zero billing surprises or scope creep.",
                  },
                  {
                    title: "Clean Architecture & Zero Technical Debt",
                    desc: "100% typed TypeScript/Go codebases, comprehensive tests, and automated linting.",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white">{item.title}</div>
                      <div className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mt-0.5">{item.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200 dark:border-[#1F2937] flex items-center justify-between gap-4 relative z-10">
              <div>
                <div className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400">Ready to scope?</div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">Direct Engineer Call</div>
              </div>
              <button
                onClick={openBookingModal}
                className="btn-primary px-5 py-2.5 text-xs sm:text-sm font-semibold flex items-center gap-2 cursor-pointer active:scale-95 shrink-0 text-white"
              >
                <span>Schedule Call</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
