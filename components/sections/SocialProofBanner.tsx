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
  { name: "AWS Partner Network",   sub: "Cloud & DevOps Tier",      Icon: Cloud,       accent: "245,158,11"   },
  { name: "Stripe Verified",        sub: "Enterprise Payments",       Icon: CreditCard,  accent: "99,102,241"   },
  { name: "Vercel Enterprise",      sub: "Edge Architecture",         Icon: Zap,         accent: "255,255,255"  },
  { name: "Google Cloud",           sub: "Data & ML Pipelines",       Icon: Globe,       accent: "59,130,246"   },
  { name: "PostgreSQL",             sub: "Enterprise Databases",      Icon: Database,    accent: "59,130,246"   },
  { name: "Supabase",               sub: "Auth & Realtime Mesh",      Icon: Layers,      accent: "16,185,129"   },
  { name: "Docker",                 sub: "Containerized Sprints",     Icon: Box,         accent: "6,182,212"    },
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
  const { ref: headRef, v: headV }   = useReveal();
  const { ref: leftRef, v: leftV }   = useReveal();
  const { ref: rightRef, v: rightV } = useReveal();

  return (
    <section className="bg-[#090D16] border-b border-[#1F2937]" style={{ position: "relative" }}>

      {/* ═══════════════════════════════════════════
          PARTNER LOGOS — Premium Marquee Strip
          ═══════════════════════════════════════════ */}
      <div className="py-14 lg:py-16 border-b border-[#1F2937] relative overflow-hidden">
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
          <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto mt-2">
            Production architectures certified across global cloud, security, and payment compliance standards.
          </p>
        </div>

        {/* Left + right edge fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #090D16, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #090D16, transparent)" }} />

        {/* Marquee track — doubled items for seamless loop */}
        <div className="overflow-hidden">
          <div className="marquee-track gap-3 px-3">
            {MARQUEE_ITEMS.map((p, i) => {
              const Icon = p.Icon;
              return (
                <div
                  key={i}
                  className="flex-none flex items-center gap-3 bg-[#111827] border border-[#1F2937] rounded-xl px-4 py-3 group hover:border-[rgba(var(--a),0.4)] transition-all duration-300 cursor-default"
                  style={{ "--a": p.accent } as React.CSSProperties}
                >
                  {/* Icon chip */}
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300"
                    style={{
                      background: `rgba(${p.accent},0.12)`,
                      border: `1px solid rgba(${p.accent},0.2)`,
                      color: `rgb(${p.accent})`,
                    }}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>

                  {/* Text */}
                  <div>
                    <div
                      className="text-xs font-semibold text-slate-200 whitespace-nowrap transition-colors duration-300"
                      style={{ color: `rgb(${p.accent})` }}
                    >
                      {p.name}
                    </div>
                    <div className="text-[10px] font-mono text-slate-500 whitespace-nowrap">{p.sub}</div>
                  </div>

                  {/* Verified dot */}
                  <div
                    className="w-1.5 h-1.5 rounded-full shrink-0 ml-1 opacity-60"
                    style={{ background: `rgb(${p.accent})` }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════
          FULL-BLEED SPLIT — Image left / Guarantees right
          ═══════════════════════════════════════════ */}
      <div className="flex flex-col lg:flex-row" style={{ minHeight: "540px" }}>

        {/* ── LEFT: Engineers image — bleeds from viewport left edge ── */}
        <div
          ref={leftRef}
          className="relative w-full lg:w-1/2 overflow-hidden"
          style={{
            minHeight: "360px",
            opacity: leftV ? 1 : 0,
            transition: "opacity 0.8s ease 80ms",
          }}
        >
          <Image
            src="/images/team/engineering-studio.jpg"
            alt="SprintStack Senior Engineering Team Collaborating in Studio"
            fill
            priority
            className="object-cover object-center"
            style={{
              transform: leftV ? "scale(1)" : "scale(1.05)",
              transition: "transform 1.2s cubic-bezier(0.22,1,0.36,1) 80ms",
            }}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />

          {/*
            MULTI-LAYER gradient for strong text readability:
            1. Full overlay darkener (15% opacity black over entire image)
            2. Strong bottom gradient for text area
            3. Desktop right-edge fade into dark panel
          */}
          <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.35)" }} />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to top, rgba(9,13,22,0.98) 0%, rgba(9,13,22,0.85) 25%, rgba(9,13,22,0.4) 55%, rgba(9,13,22,0) 100%)",
            }}
          />
          <div
            className="absolute inset-0 hidden lg:block"
            style={{ background: "linear-gradient(to right, transparent 60%, #090D16 100%)" }}
          />

          {/* Content overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10 z-10">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="badge-emerald-proof">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />Senior Engineering Guild
              </span>
              <span className="studio-pill font-mono text-[11px] text-blue-300">
                Zero Outsourcing · Dedicated Squads
              </span>
            </div>

            {/* Headline — strong text shadow for readability */}
            <h3
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug"
              style={{ textShadow: "0 2px 20px rgba(0,0,0,0.9), 0 1px 4px rgba(0,0,0,1)" }}
            >
              Built by Seasoned Architects.<br className="hidden sm:inline" />
              No Junior Relay. No Agency Fluff.
            </h3>

            {/* Description */}
            <p
              className="mt-3 text-sm text-white/80 leading-relaxed max-w-lg"
              style={{ textShadow: "0 1px 10px rgba(0,0,0,0.95)" }}
            >
              Every project is owned end-to-end by principal engineers with decades of combined experience shipping high-throughput systems across fintech, logistics, healthcare, and enterprise commerce.
            </p>
          </div>
        </div>

        {/* ── RIGHT: Guarantees panel ── */}
        <div
          ref={rightRef}
          className="w-full lg:w-1/2 flex items-center bg-[#090D16]"
          style={{
            opacity: rightV ? 1 : 0,
            transform: rightV ? "none" : "translateX(24px)",
            transition: "opacity 0.65s ease 200ms, transform 0.65s cubic-bezier(0.22,1,0.36,1) 200ms",
          }}
        >
          <div className="w-full p-6 sm:p-10 lg:p-12 xl:pl-14 xl:pr-20">
            <div className="bg-[#111827] border border-[#1F2937] rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              {/* Emerald glow top-right */}
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
              {/* Top accent line */}
              <div className="absolute top-0 inset-x-0 h-px"
                style={{ background: "linear-gradient(90deg, transparent, rgba(16,185,129,0.5), transparent)" }} />

              <div className="space-y-5 relative z-10">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="section-label-emerald flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5" />Engineering Guarantees
                  </span>
                  <span className="text-xs font-mono text-emerald-400 font-bold">100% Verified</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
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
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">{item.title}</div>
                        <div className="text-xs text-slate-400/80 leading-relaxed mt-0.5">{item.desc}</div>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-[#1F2937] flex items-center justify-between gap-4">
                  <div>
                    <div className="text-xs font-mono text-slate-400">Ready to scope?</div>
                    <div className="text-sm font-bold text-white">Direct Engineer Call</div>
                  </div>
                  <button
                    onClick={openBookingModal}
                    className="btn-primary px-4 sm:px-5 py-2.5 text-xs font-semibold flex items-center gap-2 cursor-pointer active:scale-95 shrink-0"
                  >
                    <span>Schedule Call</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
