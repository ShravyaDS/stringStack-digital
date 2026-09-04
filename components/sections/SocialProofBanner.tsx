"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, CheckCircle2, Award, Users2, Sparkles, ArrowRight } from "lucide-react";
import { useBookingModal } from "../ModalProvider";

const TRUST_LOGOS = [
  { name: "AWS Partner Network", label: "Cloud & DevOps Tier" },
  { name: "Stripe Verified", label: "Enterprise Payments" },
  { name: "Vercel Enterprise", label: "Edge Architecture" },
  { name: "Google Cloud", label: "Data & ML Pipelines" },
  { name: "PostgreSQL", label: "Enterprise Databases" },
  { name: "Supabase", label: "Auth & Realtime Mesh" },
  { name: "Docker", label: "Containerized Sprints" },
];

export function SocialProofBanner() {
  const { openBookingModal } = useBookingModal();

  return (
    <section className="py-20 lg:py-28 bg-[#090D16] border-b border-[#1F2937] relative overflow-hidden">
      {/* Radial depth glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(59,130,246,0.08),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 sm:space-y-16">
        
        {/* ── Partner & Ecosystem Ecosystem Grid ── */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <span className="section-label">Enterprise Technology Standards</span>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
              Production architectures certified to global enterprise cloud, security, and payment compliance standards.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
            {TRUST_LOGOS.map((partner) => (
              <div
                key={partner.name}
                className="bg-[#111827] border border-[#1F2937] rounded-xl p-3 sm:p-4 text-center group hover:border-blue-500/40 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-blue-400 transition-colors">
                  {partner.name}
                </div>
                <div className="text-[10px] text-slate-500 font-mono mt-1 truncate">
                  {partner.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Engineering Guild & Warm Studio Spotlight (Bento 2-Col) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Authentic Studio Photo Card */}
          <div className="lg:col-span-7 bg-[#111827] border border-[#1F2937] rounded-2xl overflow-hidden shadow-2xl relative flex flex-col justify-end min-h-[380px] sm:min-h-[440px] group">
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/team/engineering-studio.jpg"
                alt="SprintStack Senior Engineering Team Collaborating in Studio"
                fill
                priority
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              {/* Cinematic Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#090D16] via-[#090D16]/65 to-transparent" />
            </div>

            <div className="relative z-10 p-6 sm:p-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="badge-emerald-proof">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Senior Engineering Guild
                </span>
                <span className="studio-pill font-mono text-[11px] text-blue-300">
                  Zero Outsourcing · Dedicated Squads
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight leading-snug">
                Built by Seasoned Architects. <br className="hidden sm:inline" />
                No Junior Relay. No Agency Fluff.
              </h3>

              <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed max-w-xl">
                Every project is owned end-to-end by principal engineers with decades of combined experience shipping high-throughput systems across fintech, logistics, healthcare, and enterprise commerce.
              </p>
            </div>
          </div>

          {/* Proof & Guarantees Card */}
          <div className="lg:col-span-5 bg-[#111827] border border-[#1F2937] rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-xl relative overflow-hidden">
            {/* Top subtle glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="section-label-emerald">
                  <Award className="w-3.5 h-3.5" />
                  Engineering Guarantees
                </span>
                <span className="text-xs font-mono text-emerald-400 font-bold">100% Verified</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Enterprise Assurance on Every Sprint
              </h3>

              <ul className="space-y-3.5 pt-2">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">Full Intellectual Property Rights</div>
                    <div className="text-xs text-slate-400/80 leading-relaxed">
                      Complete source code, CI/CD pipelines, and credentials transferred from Day 1.
                    </div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">Fixed-Price Sprints with Staging Deploys</div>
                    <div className="text-xs text-slate-400/80 leading-relaxed">
                      Guaranteed delivery windows every 7–14 days. Zero billing surprises or scope creep.
                    </div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">Clean Architecture & Zero Technical Debt</div>
                    <div className="text-xs text-slate-400/80 leading-relaxed">
                      100% typed TypeScript/Go codebases, comprehensive tests, and automated linting.
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Quick action button */}
            <div className="pt-4 border-t border-[#1F2937] flex items-center justify-between gap-4">
              <div>
                <div className="text-xs font-mono text-slate-400">Ready to scope?</div>
                <div className="text-sm font-bold text-white">Direct Engineer Call</div>
              </div>
              <button
                onClick={openBookingModal}
                className="btn-primary px-4 sm:px-5 py-2.5 text-xs font-semibold flex items-center gap-2 cursor-pointer active:scale-95"
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
