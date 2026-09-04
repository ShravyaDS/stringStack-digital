"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Code2, Smartphone, ShoppingBag, Workflow,
  ArrowRight, CheckCircle2, Sparkles, Terminal, Cpu,
  Layers, Shield, Zap, RefreshCw, Server, Database, Globe
} from "lucide-react";
import { useBookingModal } from "../ModalProvider";

/* ─── IntersectionObserver hook ─────────────────────── */
function useReveal(threshold = 0.06) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 1.1) { setVisible(true); return; }
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); io.disconnect(); } },
      { threshold, rootMargin: "0px 0px -30px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, visible };
}

export function ServiceBento() {
  const { openBookingModal } = useBookingModal();
  const { ref: headerRef, visible: headerV } = useReveal();
  const { ref: gridRef,   visible: gridV   } = useReveal();

  const [activeFilter, setActiveFilter] = useState<"all" | "web" | "mobile" | "commerce" | "cloud">("all");

  return (
    <section
      id="solutions"
      className="py-24 lg:py-32 bg-[#070B14] border-t border-[#1F2937] scroll-mt-24 relative overflow-hidden text-white"
    >
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-10 w-[650px] h-[450px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-[600px] h-[450px] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-2/3 left-1/3 w-[500px] h-[350px] bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Subtle grid pattern background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section Header ── */}
        <div
          ref={headerRef}
          className="mb-12 lg:mb-16"
          style={{
            opacity: headerV ? 1 : 0,
            transform: headerV ? "none" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3.5 max-w-2xl">
              <div className="inline-flex items-center gap-2 flex-wrap">
                <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                  ENGINEERING DISCIPLINES
                </span>
                <span className="badge-emerald-proof">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />Fixed Sprints · Zero Tech Debt
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-[-0.035em]">
                Core Engineering Capabilities
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Production architectures built with typed codebases, automated CI/CD pipelines, and enterprise security standards.
              </p>
            </div>

            {/* Quick Filter Pill Controls */}
            <div className="flex items-center flex-wrap gap-1.5 bg-[#0D1424]/90 p-1.5 rounded-2xl border border-[#1F2937] backdrop-blur-md">
              {[
                { id: "all", label: "All Disciplines" },
                { id: "web", label: "Web & SaaS" },
                { id: "mobile", label: "Mobile Apps" },
                { id: "commerce", label: "Commerce" },
                { id: "cloud", label: "Cloud & APIs" },
              ].map((f) => (
                <button
                  key={f.id}
                  onClick={() => setActiveFilter(f.id as any)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    activeFilter === f.id
                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                      : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── BENTO GRID ── */}
        <div
          ref={gridRef}
          className="grid grid-cols-12 gap-6"
          style={{
            opacity: gridV ? 1 : 0,
            transform: gridV ? "none" : "translateY(24px)",
            transition: "opacity 0.65s ease 100ms, transform 0.65s cubic-bezier(0.22,1,0.36,1) 100ms",
          }}
        >

          {/* ═══════════════════════════════════════════════════════════════
              CARD 1: Web Applications & Enterprise SaaS (Wide - 7 cols)
              ═══════════════════════════════════════════════════════════════ */}
          <div
            className={`col-span-12 lg:col-span-7 group relative bg-[#0D1424] border border-[#1F2937] hover:border-blue-500/50 rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col justify-between overflow-hidden ${
              activeFilter !== "all" && activeFilter !== "web" ? "opacity-35 scale-[0.98]" : "opacity-100"
            }`}
          >
            {/* Top glowing ambient line */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between flex-wrap gap-2 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-blue-500/15 border border-blue-500/30 text-blue-400 flex items-center justify-center shrink-0 shadow-inner">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-blue-400 font-semibold tracking-wider uppercase">
                      Architecture &amp; Web Systems
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                      High-Concurrency Web Platforms
                    </h3>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-500/10 text-blue-300 border border-blue-500/25 flex items-center gap-1.5 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                  &lt; 0.4s Sub-Second Paint
                </span>
              </div>

              {/* Main Content: Left details + Right interactive preview */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center mb-6">
                <div className="md:col-span-6 space-y-3.5">
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Scalable, fault-tolerant business platforms and multi-tenant SaaS built across Next.js 15, TypeScript, Node.js, and PostgreSQL. Strict zero-lock-in architectures with automated testing.
                  </p>

                  <div className="space-y-2 pt-1 text-xs text-slate-400 font-medium">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>Next.js App Router &amp; Server Actions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>Multi-tenant RBAC &amp; SSO Auth Mesh</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>100/100 Lighthouse Core Web Vitals</span>
                    </div>
                  </div>
                </div>

                {/* Interactive Code / Architecture Preview Box */}
                <div className="md:col-span-6 bg-[#070B14] border border-[#1F2937] group-hover:border-blue-500/40 rounded-2xl p-3.5 shadow-xl transition-all duration-300 relative overflow-hidden">
                  <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-[#1F2937] text-[11px] font-mono text-slate-500">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-500/70" />
                      <span className="w-2 h-2 rounded-full bg-yellow-500/70" />
                      <span className="w-2 h-2 rounded-full bg-green-500/70" />
                      <span className="ml-1 text-slate-400">page.tsx</span>
                    </div>
                    <span className="text-blue-400 font-semibold">SSR + Edge</span>
                  </div>

                  <div className="font-mono text-[11px] leading-relaxed text-slate-300 space-y-1">
                    <div><span className="text-purple-400">export async function</span> <span className="text-blue-400">getEnterpriseCluster</span>() &#123;</div>
                    <div className="pl-3 text-slate-400"><span className="text-purple-400">const</span> node = <span className="text-purple-400">await</span> mesh.<span className="text-blue-300">syncEdge</span>(&#123;</div>
                    <div className="pl-6 text-emerald-400">throughput: <span className="text-amber-300">&quot;100k_req/sec&quot;</span>,</div>
                    <div className="pl-6 text-emerald-400">latencyP99: <span className="text-blue-300">&quot;&lt;18ms&quot;</span>,</div>
                    <div className="pl-3 text-slate-400">&#125;);</div>
                    <div className="pl-3"><span className="text-purple-400">return</span> node.<span className="text-blue-300">renderStream</span>();</div>
                    <div>&#125;</div>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-[#1F2937] flex items-center justify-between text-[10px] font-mono text-slate-400">
                    <span className="text-emerald-400 flex items-center gap-1">
                      <Zap className="w-3 h-3" /> 0ms Cold Start
                    </span>
                    <span className="text-slate-500">Node v20 · Edge Worker</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-4 border-t border-[#1F2937] flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {["Next.js 15", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Redis"].map((t) => (
                  <span key={t} className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/[0.04] text-slate-300 border border-white/[0.08]">
                    {t}
                  </span>
                ))}
              </div>
              <button
                onClick={openBookingModal}
                className="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1.5 group-hover:translate-x-0.5 transition-transform cursor-pointer"
              >
                <span>Scope Web Build</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════════════
              CARD 2: Mobile Apps (Native & Flutter) (Compact - 5 cols)
              ═══════════════════════════════════════════════════════════════ */}
          <div
            className={`col-span-12 lg:col-span-5 group relative bg-[#0D1424] border border-[#1F2937] hover:border-indigo-500/50 rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col justify-between overflow-hidden ${
              activeFilter !== "all" && activeFilter !== "mobile" ? "opacity-35 scale-[0.98]" : "opacity-100"
            }`}
          >
            {/* Top glowing ambient line */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between flex-wrap gap-2 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-indigo-500/15 border border-indigo-500/30 text-indigo-400 flex items-center justify-center shrink-0 shadow-inner">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-indigo-400 font-semibold tracking-wider uppercase">
                      Mobile Ecosystems
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                      Native &amp; Cross-Platform
                    </h3>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-indigo-500/10 text-indigo-300 border border-indigo-500/25 flex items-center gap-1.5 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                  60 FPS Native
                </span>
              </div>

              {/* Mobile Anatomy Visual Preview */}
              <div className="bg-[#070B14] border border-[#1F2937] group-hover:border-indigo-500/40 rounded-2xl p-4 shadow-xl mb-4 transition-all duration-300">
                <div className="flex items-center justify-between mb-3 text-xs font-mono">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-indigo-400" /> Biometric Enclave
                  </span>
                  <span className="text-emerald-400 font-bold">100% Offline Sync</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                  <div className="bg-[#0D1424] p-2.5 rounded-xl border border-white/5 flex flex-col justify-between">
                    <span className="text-slate-400">iOS Native Engine</span>
                    <span className="text-white font-bold mt-1">SwiftUI &amp; Metal</span>
                  </div>
                  <div className="bg-[#0D1424] p-2.5 rounded-xl border border-white/5 flex flex-col justify-between">
                    <span className="text-slate-400">Android Engine</span>
                    <span className="text-white font-bold mt-1">Jetpack Compose</span>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                Production-grade mobile apps engineered with offline-first SQLite synchronization, hardware biometric security, and fluid 60 FPS gesture rendering.
              </p>
            </div>

            {/* Footer */}
            <div className="pt-4 border-t border-[#1F2937] flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {["Flutter", "React Native", "Swift", "Kotlin", "SQLite"].map((t) => (
                  <span key={t} className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/[0.04] text-slate-300 border border-white/[0.08]">
                    {t}
                  </span>
                ))}
              </div>
              <button
                onClick={openBookingModal}
                className="text-xs font-bold text-indigo-400 hover:text-indigo-300 flex items-center gap-1.5 group-hover:translate-x-0.5 transition-transform cursor-pointer"
              >
                <span>Scope Mobile</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════════════
              CARD 3: Commerce & Headless Checkout (Compact - 5 cols)
              ═══════════════════════════════════════════════════════════════ */}
          <div
            className={`col-span-12 lg:col-span-5 group relative bg-[#0D1424] border border-[#1F2937] hover:border-purple-500/50 rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 flex flex-col justify-between overflow-hidden ${
              activeFilter !== "all" && activeFilter !== "commerce" ? "opacity-35 scale-[0.98]" : "opacity-100"
            }`}
          >
            {/* Top glowing ambient line */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between flex-wrap gap-2 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-purple-500/15 border border-purple-500/30 text-purple-400 flex items-center justify-center shrink-0 shadow-inner">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-purple-400 font-semibold tracking-wider uppercase">
                      Commerce Engines
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                      Omnichannel &amp; Headless
                    </h3>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-500/10 text-purple-300 border border-purple-500/25 flex items-center gap-1.5 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                  99.99% Resilience
                </span>
              </div>

              {/* Checkout Pipeline Visual */}
              <div className="bg-[#070B14] border border-[#1F2937] group-hover:border-purple-500/40 rounded-2xl p-4 shadow-xl mb-4 transition-all duration-300">
                <div className="text-[11px] font-mono text-slate-400 mb-2.5 flex items-center justify-between">
                  <span>Checkout Mesh Latency</span>
                  <span className="text-purple-400 font-bold">&lt; 120ms P99</span>
                </div>

                <div className="flex items-center justify-between gap-1 text-[10px] font-mono">
                  <div className="bg-[#0D1424] px-2 py-1.5 rounded-lg border border-white/5 text-center flex-1">
                    <span className="text-slate-400 block">Catalog</span>
                    <span className="text-white font-bold">Redis L1</span>
                  </div>
                  <span className="text-slate-600">→</span>
                  <div className="bg-[#0D1424] px-2 py-1.5 rounded-lg border border-purple-500/30 text-center flex-1 text-purple-300">
                    <span className="text-slate-400 block">Payment</span>
                    <span className="font-bold">Stripe 3DS</span>
                  </div>
                  <span className="text-slate-600">→</span>
                  <div className="bg-[#0D1424] px-2 py-1.5 rounded-lg border border-white/5 text-center flex-1">
                    <span className="text-slate-400 block">Sync</span>
                    <span className="text-emerald-400 font-bold">Global SLA</span>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                Ultra-fast headless digital storefronts, multi-region catalog synchronization, and resilient global payment gateways engineered for zero drop-off.
              </p>
            </div>

            {/* Footer */}
            <div className="pt-4 border-t border-[#1F2937] flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {["Headless Shopify", "Medusa", "Stripe", "Adyen", "Redis"].map((t) => (
                  <span key={t} className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/[0.04] text-slate-300 border border-white/[0.08]">
                    {t}
                  </span>
                ))}
              </div>
              <button
                onClick={openBookingModal}
                className="text-xs font-bold text-purple-400 hover:text-purple-300 flex items-center gap-1.5 group-hover:translate-x-0.5 transition-transform cursor-pointer"
              >
                <span>Scope Commerce</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════════════
              CARD 4: Enterprise Middleware & Cloud APIs (Wide - 7 cols)
              ═══════════════════════════════════════════════════════════════ */}
          <div
            className={`col-span-12 lg:col-span-7 group relative bg-[#0D1424] border border-[#1F2937] hover:border-cyan-500/50 rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col justify-between overflow-hidden ${
              activeFilter !== "all" && activeFilter !== "cloud" ? "opacity-35 scale-[0.98]" : "opacity-100"
            }`}
          >
            {/* Top glowing ambient line */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between flex-wrap gap-2 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 flex items-center justify-center shrink-0 shadow-inner">
                    <Workflow className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-cyan-400 font-semibold tracking-wider uppercase">
                      Distributed Middleware
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                      API Pipelines &amp; Automation Mesh
                    </h3>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 text-cyan-300 border border-cyan-500/25 flex items-center gap-1.5 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  &lt; 25ms Webhooks
                </span>
              </div>

              {/* Main Content: Left details + Right pipeline diagram */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center mb-6">
                <div className="md:col-span-6 space-y-3.5">
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Connect fragmented enterprise ERPs, CRMs, and third-party systems into unified event-driven pipelines. High-throughput webhooks, Kafka streaming, and robust automated ETL flows.
                  </p>

                  <div className="space-y-2 pt-1 text-xs text-slate-400 font-medium">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>Event-driven Kafka queues &amp; retry mesh</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>Tamper-proof SHA-256 audit trails</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>FastAPI, Python &amp; Go microservices</span>
                    </div>
                  </div>
                </div>

                {/* Event Topology Node Flow Mockup */}
                <div className="md:col-span-6 bg-[#070B14] border border-[#1F2937] group-hover:border-cyan-500/40 rounded-2xl p-4 shadow-xl transition-all duration-300 space-y-2.5 font-mono text-[11px]">
                  <div className="flex items-center justify-between pb-2 border-b border-[#1F2937] text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Server className="w-3.5 h-3.5 text-cyan-400" /> Pipeline Topology
                    </span>
                    <span className="text-emerald-400 font-bold">100% Delivery SLA</span>
                  </div>

                  <div className="space-y-2">
                    <div className="bg-[#0D1424] p-2 rounded-xl border border-white/5 flex items-center justify-between">
                      <span className="text-slate-400">Ingress: Webhooks</span>
                      <span className="text-cyan-400 font-bold">&lt; 15ms</span>
                    </div>
                    <div className="bg-[#0D1424] p-2 rounded-xl border border-cyan-500/25 flex items-center justify-between text-cyan-300">
                      <span className="text-slate-300">Stream: Kafka Cluster</span>
                      <span className="font-bold">50k msg/sec</span>
                    </div>
                    <div className="bg-[#0D1424] p-2 rounded-xl border border-white/5 flex items-center justify-between">
                      <span className="text-slate-400">Sink: PostgreSQL / Lake</span>
                      <span className="text-emerald-400 font-bold">ACID Synced</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-4 border-t border-[#1F2937] flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {["REST APIs", "GraphQL", "FastAPI", "Python", "Go", "Docker", "AWS"].map((t) => (
                  <span key={t} className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/[0.04] text-slate-300 border border-white/[0.08]">
                    {t}
                  </span>
                ))}
              </div>
              <button
                onClick={openBookingModal}
                className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 group-hover:translate-x-0.5 transition-transform cursor-pointer"
              >
                <span>Scope Integration</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
