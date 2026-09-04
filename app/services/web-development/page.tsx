"use client";

import React from "react";
import Link from "next/link";
import {
  Code2,
  Cpu,
  Layers,
  Zap,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  Database,
  Globe,
  ArrowRight,
} from "lucide-react";
import { BackButton } from "@/components/ui/BackButton";
import { useBookingModal } from "@/components/ModalProvider";

export default function WebDevelopmentPage() {
  const { openBookingModal } = useBookingModal();

  const sprints = [
    {
      sprint: "Sprint 01",
      duration: "Days 1–7",
      title: "System Architecture & Schema Design",
      description:
        "Technical blueprinting, database modeling in PostgreSQL, authentication workflows, edge routing topology, and CI/CD staging environments.",
      deliverables: ["Entity Relationship Diagram", "Next.js App Skeleton", "Staging Environment Live"],
    },
    {
      sprint: "Sprint 02",
      duration: "Days 8–14",
      title: "Core Business Logic & API Layer",
      description:
        "Building Server Actions, REST/GraphQL endpoints, database indexing, caching strategies with Redis, and state synchronization.",
      deliverables: ["CRUD Operations Complete", "Role-Based Access Control", "Redis Cache Integration"],
    },
    {
      sprint: "Sprint 03",
      duration: "Days 15–21",
      title: "Responsive Frontend & UX Polish",
      description:
        "Pixel-perfect interface development, fluid animations, form validations, error boundaries, and cross-browser responsiveness.",
      deliverables: ["Interactive Dashboard", "Payment/Billing Flows", "Mobile-Optimized Layouts"],
    },
    {
      sprint: "Sprint 04",
      duration: "Days 22–28",
      title: "Hardening, Security Audit & Cutover",
      description:
        "Multi-region deployment, zero-downtime DNS cutover, automated backup routines, and full IP/codebase ownership handover.",
      deliverables: ["Production Edge Cluster", "Complete Tech Documentation", "24/7 Monitoring Dashboard"],
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-[#090D16] text-white min-h-screen">
      
      {/* ── Hero Header ── */}
      <section className="py-12 md:py-20 relative overflow-hidden border-b border-[#1F2937]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none -z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-6">
            <BackButton fallbackHref="/#solutions" label="Back to Capabilities" />
          </div>

          <div className="max-w-3xl space-y-5">
            <div className="flex items-center gap-2">
              <span className="section-label">Full-Stack Web Engineering</span>
              <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/25">
                Next.js 15 • React 19
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Mission-Critical Web Platforms <br />
              <span className="text-blue-500">
                Built for Edge Scale &amp; Speed.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              We architect and engineer resilient, sub-second web platforms using Next.js App Router, React 19 Server Components, and multi-region distributed databases. Zero agency fluff, 100% production velocity.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                onClick={openBookingModal}
                className="btn-primary px-6 py-3 text-sm font-semibold cursor-pointer active:scale-95 transition-transform flex items-center gap-2"
              >
                <span>Book 15-Min Technical Discovery</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                href="#sprints"
                className="btn-secondary px-5 py-3 text-sm font-semibold text-center active:scale-95 transition-transform"
              >
                View Sprint Roadmap
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Architectural Pillars ── */}
      <section className="py-16 sm:py-20 bg-[#070B14] border-b border-[#1F2937]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2.5">
            <span className="section-label">Engineering Principles</span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Why Our Web Architectures Outperform
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0E1528] border border-[#1F2937] space-y-3 hover:border-blue-500/40 transition-all duration-300 shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Sub-Second Edge SSR</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                Leveraging Next.js App Router streaming and Edge functions to deliver Time to First Byte (TTFB) under 100ms worldwide.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-[#0E1528] border border-[#1F2937] space-y-3 hover:border-emerald-500/40 transition-all duration-300 shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Resilient Data Pipelines</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                PostgreSQL with connection pooling, Prisma ORM, Redis distributed caching, and zero-downtime database migrations.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-[#0E1528] border border-[#1F2937] space-y-3 hover:border-blue-500/40 transition-all duration-300 shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Enterprise Security &amp; RBAC</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                Multi-tenant data isolation, role-based access control, cryptographic session handling, and ISO 27001 readiness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4-Week Sprint Roadmap ── */}
      <section id="sprints" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2.5">
            <span className="section-label">Predictable Execution</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              4-Week High-Velocity Web Sprint
            </h2>
          </div>
          <p className="text-slate-400 max-w-md text-sm leading-relaxed font-normal">
            From zero to production-grade enterprise web application in 28 days with transparent weekly sprint demos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sprints.map((s) => (
            <div
              key={s.sprint}
              className="p-6 sm:p-8 rounded-2xl bg-[#0E1528] border border-[#1F2937] space-y-5 shadow-lg hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/25">
                    {s.sprint}
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-semibold">{s.duration}</span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white">{s.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">{s.description}</p>
              </div>

              <div className="pt-4 border-t border-[#1F2937] space-y-2">
                <span className="text-[11px] font-mono font-semibold uppercase text-slate-500 tracking-wider block">
                  Key Sprint Deliverables:
                </span>
                {s.deliverables.map((del) => (
                  <div key={del} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── Discovery CTA Box ── */}
        <div className="mt-14 p-8 sm:p-12 rounded-3xl bg-[#0E1528] border border-[#1F2937] shadow-2xl text-center space-y-6 relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
          
          <div className="w-12 h-12 rounded-2xl bg-blue-500/15 border border-blue-500/30 text-blue-400 flex items-center justify-center mx-auto shadow-inner">
            <Terminal className="w-6 h-6" />
          </div>
          <div className="max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Ready to architect your web platform?
            </h3>
            <p className="text-sm text-slate-400">
              Schedule a 15-minute scoping session. We will evaluate your technical specifications and deliver a fixed sprint proposal.
            </p>
          </div>
          <div>
            <button
              onClick={openBookingModal}
              className="btn-primary px-7 py-3.5 text-sm font-semibold cursor-pointer active:scale-95 transition-transform flex items-center gap-2 mx-auto"
            >
              <span>Book 15-Min Technical Discovery</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
