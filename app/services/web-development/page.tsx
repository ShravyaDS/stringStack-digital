"use client";

import React from "react";
import Link from "next/link";
import {
  Code,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  Zap,
  ShieldCheck,
  Server,
  Globe,
  Database,
  Terminal,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { BackButton } from "@/components/ui/BackButton";
import { useBookingModal } from "@/components/ModalProvider";

export default function WebDevelopmentPage() {
  const { openBookingModal } = useBookingModal();

  const sprints = [
    {
      sprint: "Sprint 01",
      duration: "Days 1 - 7",
      title: "Core Architecture & Data Modeling",
      description:
        "PostgreSQL schema design, Next.js 15 App Router scaffolding, strict TypeScript interfaces, RBAC access policies, and CI/CD automated pipeline.",
      deliverables: ["DB Migrations & Prisma Models", "Auth & Session Architecture", "Design Token System"],
    },
    {
      sprint: "Sprint 02",
      duration: "Days 8 - 14",
      title: "Feature Matrix & Real-Time Engines",
      description:
        "Implementation of core business logic, reactive UI components, WebSocket streaming, and high-concurrency REST/GraphQL endpoints.",
      deliverables: ["Interactive Dashboard", "Server Actions & API Handlers", "Real-Time Event Bus"],
    },
    {
      sprint: "Sprint 03",
      duration: "Days 15 - 21",
      title: "Edge Optimization, Caching & Security",
      description:
        "Sub-millisecond Redis caching, multi-region CDN routing, automated penetration testing, OWASP Top 10 hardening, and WCAG AA compliance.",
      deliverables: ["Redis Query Cache Layer", "Security Audit Report", "Lighthouse 98+ Tuning"],
    },
    {
      sprint: "Sprint 04",
      duration: "Days 22 - 28",
      title: "Production Edge Deployment & SLA Handover",
      description:
        "Multi-region deployment, zero-downtime DNS cutover, automated backup routines, and full IP/codebase ownership handover.",
      deliverables: ["Production Edge Cluster", "Complete Tech Documentation", "24/7 Monitoring Dashboard"],
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-obsidian bg-grid-pattern">
      {/* Hero Header */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[750px] h-[400px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <BackButton fallbackHref="/#solutions" />
          </div>

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2">
              <Badge variant="blue">Full-Stack Web Engineering</Badge>
              <Badge variant="slate">Next.js 15 • React 19</Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Mission-Critical Web Platforms <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
                Built for Edge Scale &amp; Speed.
              </span>
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed font-normal">
              We architect and engineer resilient, sub-second web platforms using Next.js App Router, React 19 Server Components, and multi-region distributed databases. Zero agency fluff, 100% production velocity.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button onClick={openBookingModal} variant="primary" size="lg" className="gap-2 font-bold shadow-xl shadow-blue-500/25">
                <span>Book 15-Min Technical Discovery</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Link href="#sprints">
                <Button variant="secondary" size="lg" className="font-semibold">
                  View Sprint Roadmap
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Architectural Pillars */}
      <section className="py-16 bg-surface/40 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <Badge variant="blue">Engineering Principles</Badge>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Why Our Web Architectures Outperform
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-surface/90 border border-border space-y-4 glow-card">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-accent-blue">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Sub-Second Edge SSR</h3>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                Leveraging Next.js App Router streaming and Edge functions to deliver Time to First Byte (TTFB) under 100ms worldwide.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-surface/90 border border-border space-y-4 glow-card">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-accent-emerald">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Resilient Data Pipelines</h3>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                PostgreSQL with connection pooling, Prisma ORM, Redis distributed caching, and zero-downtime database migrations.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-surface/90 border border-border space-y-4 glow-card">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Enterprise Security &amp; RBAC</h3>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                Multi-tenant data isolation, role-based access control, cryptographic session handling, and ISO 27001 / SOC 2 readiness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Week Sprint Roadmap */}
      <section id="sprints" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <Badge variant="blue">Predictable Execution</Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              4-Week High-Velocity Web Sprint
            </h2>
          </div>
          <p className="text-slate-300 max-w-md text-sm leading-relaxed font-normal">
            From zero to production-grade enterprise web application in 28 days with transparent weekly sprint demos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sprints.map((s) => (
            <div
              key={s.sprint}
              className="p-8 rounded-3xl bg-surface/90 border border-border space-y-6 glow-card flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-blue-500/10 text-accent-blue border border-blue-500/20">
                    {s.sprint}
                  </span>
                  <span className="text-xs font-mono text-slate-400 font-semibold">{s.duration}</span>
                </div>

                <h3 className="text-xl font-bold text-white">{s.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">{s.description}</p>
              </div>

              <div className="pt-4 border-t border-border/60 space-y-2">
                <span className="text-[11px] font-mono uppercase text-slate-400 font-bold block">
                  Key Sprint Deliverables:
                </span>
                {s.deliverables.map((del) => (
                  <div key={del} className="flex items-center gap-2 text-xs font-mono text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent-emerald shrink-0" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Discovery CTA Box */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-surface border border-blue-500/40 shadow-2xl shadow-blue-500/15 text-center space-y-6 glow-card">
          <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/30 text-accent-blue flex items-center justify-center mx-auto">
            <Terminal className="w-7 h-7" />
          </div>
          <div className="max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Ready to architect your web platform?
            </h3>
            <p className="text-sm text-slate-300">
              Schedule a 15-minute scoping session. We will evaluate your technical specifications and deliver a fixed sprint proposal.
            </p>
          </div>
          <Button onClick={openBookingModal} variant="primary" size="lg" className="gap-2 font-bold shadow-xl shadow-blue-500/30">
            <span>Book 15-Min Technical Discovery</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}
