"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Layers,
  Cpu,
  CheckCircle2,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Play,
  GitBranch,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { useBookingModal } from "../ModalProvider";

interface CaseStudy {
  id: string;
  eyebrow: string;
  tagline: string;
  gradientVerb: string;
  titleSuffix: string;
  imageSrc: string;
  clientIndustry: string;
  clientRegion: string;
  summary: string;
  challenge: string;
  solution: string;
  metrics: { value: string; label: string }[];
  techStack: string[];
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "ai-pdlc",
    eyebrow: "CASE STUDY • AI-NATIVE SYSTEMS",
    tagline: "Global Enterprise PDLC Modernization",
    gradientVerb: "Proving",
    titleSuffix: " the Value of AI-Native Engineering for Enterprise Product Lifecycles.",
    imageSrc: "/images/case-studies/ai-native-transformation.jpg",
    clientIndustry: "Enterprise SaaS & Cloud Infrastructure",
    clientRegion: "United States (US-East)",
    summary:
      "Modernized software delivery pipelines by embedding autonomous AI testing agents, automated PR code review pipelines, and intelligent API contract synthesizers.",
    challenge:
      "Legacy regression testing bottlenecks and multi-week release cycles were slowing down global engineering teams across 4 time zones.",
    solution:
      "Architected a Next.js 15 & Python multi-agent orchestration layer that automatically validates PRs, generates mock test fixtures, and simulates user concurrency before production deployment.",
    metrics: [
      { value: "3.8x", label: "Developer Throughput" },
      { value: "-72%", label: "QA Bottleneck Reduction" },
      { value: "100%", label: "Automated Test Coverage" },
    ],
    techStack: ["Next.js 15", "Python AI Mesh", "FastAPI", "PostgreSQL", "Docker", "GitHub Actions"],
  },
  {
    id: "erp-workforce",
    eyebrow: "CASE STUDY • ENTERPRISE OPERATIONS",
    tagline: "Multi-Location Biometric Workforce OS",
    gradientVerb: "Architecting",
    titleSuffix: " High-Precision Attendance ERP for 25,000+ Shift Employees.",
    imageSrc: "/images/case-studies/enterprise-erp-operations.jpg",
    clientIndustry: "Logistics & Manufacturing Group",
    clientRegion: "UAE (Dubai) & Singapore",
    summary:
      "Engineered an enterprise-grade Attendance ERP with real-time biometric hardware integration, geofenced mobile verification, and multi-tier payroll calculation engines.",
    challenge:
      "Manual time-sheet logging, proxy attendance, and uncoordinated shift handoffs caused $450k+ in payroll leakage annually across 18 regional facilities.",
    solution:
      "Deployed SprintStack's proprietary Attendance ERP with ARM TrustZone GPS spoof defense, sub-second biometric MQTT synchronization, and automated SAP/Oracle payroll exports.",
    metrics: [
      { value: "< 0.4s", label: "Check-in Sync Speed" },
      { value: "99.98%", label: "Payroll Accuracy" },
      { value: "$480k", label: "Annual Cost Savings" },
    ],
    techStack: ["React 19", "Node.js", "Flutter", "MQTT", "PostgreSQL", "Redis", "SAP Connectors"],
  },
  {
    id: "fintech-cloud",
    eyebrow: "CASE STUDY • CLOUD PLATFORMS",
    tagline: "High-Concurrency Mobile & Cross-Border Rails",
    gradientVerb: "Scaling",
    titleSuffix: " Cross-Border Commerce & Payment Rails with Sub-28ms Latency.",
    imageSrc: "/images/case-studies/cloud-mobile-mesh.jpg",
    clientIndustry: "FinTech & Cross-Border B2B Marketplaces",
    clientRegion: "UK & European Union",
    summary:
      "Built a unified cross-platform mobile wallet and web platform supporting multi-currency settlements across USD, GBP, AED, SGD, and EUR with zero downtime.",
    challenge:
      "Cross-border transaction latency of 3.2 seconds was causing high checkout drop-offs and failing peak-hour compliance audits.",
    solution:
      "Re-architected edge microservices with distributed Next.js edge functions, Redis multi-region replicas, and direct bank API webhook reconciliation.",
    metrics: [
      { value: "24ms", label: "Global Edge Latency" },
      { value: "99.99%", label: "Platform Uptime SLA" },
      { value: "4.5M", label: "Monthly API Calls" },
    ],
    techStack: ["Next.js App Router", "Flutter", "Stripe & Adyen", "Redis Cluster", "AWS Fargate", "GraphQL"],
  },
];

export function CaseStudiesShowcase() {
  const { openBookingModal, openDemoModal } = useBookingModal();
  const [activeStudyIndex, setActiveStudyIndex] = useState(0);

  const activeStudy = CASE_STUDIES[activeStudyIndex];

  return (
    <section id="case-studies" className="py-24 bg-[#070B14] relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-10 w-[600px] h-[450px] bg-gradient-radial from-blue-600/10 via-purple-600/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[550px] h-[400px] bg-gradient-radial from-cyan-600/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* SECTION HEADER (EPAM CASE STUDY STYLE - Screenshot 4) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-8 border-b border-white/[0.08]">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
                FEATURED CASE STUDIES
              </span>
              <Badge variant="blue" size="sm">Enterprise Engineering</Badge>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight">
              Engineering <span className="font-extrabold text-white">Excellence in Action</span>
            </h2>
          </div>

          {/* Navigation Pill Buttons */}
          <div className="flex items-center gap-2">
            <div className="flex items-center bg-surface/90 p-1.5 rounded-2xl border border-white/10 text-xs font-mono">
              {CASE_STUDIES.map((study, idx) => (
                <button
                  key={study.id}
                  onClick={() => setActiveStudyIndex(idx)}
                  className={`px-3.5 py-1.5 rounded-xl transition-all ${
                    idx === activeStudyIndex
                      ? "bg-blue-600 text-white font-bold shadow-md shadow-blue-500/30"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Story 0{idx + 1}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* EPAM-STYLE FEATURED CASE STUDY HERO CARD (Screenshot 4) */}
        <div className="rounded-3xl bg-surface/80 border border-white/[0.08] overflow-hidden shadow-2xl shadow-black/80 glow-card transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* LEFT COLUMN: CASE STUDY STORY & METRICS (7 cols) */}
            <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                {/* Eyebrow and Client Metadata */}
                <div className="flex items-center justify-between flex-wrap gap-2 text-xs font-mono">
                  <span className="text-cyan-400 font-bold tracking-wider">
                    {activeStudy.eyebrow}
                  </span>
                  <span className="text-slate-400">
                    {activeStudy.clientRegion} • {activeStudy.clientIndustry}
                  </span>
                </div>

                {/* Big Editorial Headline with signature gradient verb (EPAM Screenshot 4) */}
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight leading-[1.12]">
                  <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                    {activeStudy.gradientVerb}
                  </span>
                  {activeStudy.titleSuffix}
                </h3>

                {/* Narrative Summary */}
                <p className="text-slate-300 text-base leading-relaxed font-normal">
                  {activeStudy.summary}
                </p>

                {/* Challenge vs Solution Breakdown */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 font-mono text-xs">
                  <div className="p-4 rounded-2xl bg-[#090D16]/90 border border-slate-800 space-y-1.5">
                    <span className="text-[11px] text-amber-400 font-bold uppercase tracking-wider block">
                      The Challenge
                    </span>
                    <p className="text-slate-300 text-[11px] leading-relaxed font-sans">
                      {activeStudy.challenge}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#090D16]/90 border border-slate-800 space-y-1.5">
                    <span className="text-[11px] text-accent-emerald font-bold uppercase tracking-wider block">
                      The Architecture
                    </span>
                    <p className="text-slate-300 text-[11px] leading-relaxed font-sans">
                      {activeStudy.solution}
                    </p>
                  </div>
                </div>

                {/* Key Measurable Impact Stats */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/[0.08]">
                  {activeStudy.metrics.map((metric, idx) => (
                    <div key={idx} className="space-y-0.5">
                      <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                        {metric.value}
                      </div>
                      <div className="text-[11px] font-mono text-slate-400 leading-tight">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons & Tech Tags */}
              <div className="space-y-6 pt-4 border-t border-white/[0.08]">
                {/* Tech Stack Badges */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-mono uppercase text-slate-400 mr-2">
                    Stack:
                  </span>
                  {activeStudy.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-[#090D16] border border-slate-800 text-[11px] font-mono text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA Links */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <Button
                    onClick={openBookingModal}
                    variant="shimmer"
                    className="gap-2 text-sm font-semibold justify-center shadow-lg shadow-blue-500/20"
                  >
                    <span>Read Architecture Blueprint</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>

                  <button
                    onClick={openDemoModal}
                    className="inline-flex items-center justify-center gap-2 text-xs font-mono text-emerald-400 hover:text-emerald-300 px-4 py-2.5 rounded-xl border border-emerald-500/30 hover:border-emerald-500/60 bg-emerald-500/10 transition-colors"
                  >
                    <Play className="w-3.5 h-3.5 fill-emerald-400" />
                    <span>Launch Live Interactive Sandbox</span>
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: HIGH-RESOLUTION EDITORIAL PHOTOGRAPHY (5 cols) */}
            <div className="lg:col-span-5 relative min-h-[350px] lg:min-h-[auto] bg-slate-900 border-t lg:border-t-0 lg:border-l border-white/[0.08]">
              <Image
                src={activeStudy.imageSrc}
                alt={activeStudy.tagline}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 45vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#070B14]/70 lg:via-transparent lg:to-transparent" />

              {/* Floating Verified Stamp */}
              <div className="absolute bottom-6 right-6 p-4 rounded-2xl bg-surface/90 border border-white/10 backdrop-blur-xl shadow-2xl flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-accent-emerald shrink-0" />
                <div>
                  <span className="text-white text-xs font-bold block">Production Deployed</span>
                  <span className="text-slate-400 text-[10px] font-mono">100% IP Transferred</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
