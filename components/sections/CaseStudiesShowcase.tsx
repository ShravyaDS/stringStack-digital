"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Play,
  ShieldCheck,
} from "lucide-react";
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
    eyebrow: "AI-Native Systems",
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
      { value: "3.8×", label: "Developer Throughput" },
      { value: "−72%", label: "QA Bottleneck Reduction" },
      { value: "100%", label: "Automated Test Coverage" },
    ],
    techStack: ["Next.js 15", "Python AI Mesh", "FastAPI", "PostgreSQL", "Docker", "GitHub Actions"],
  },
  {
    id: "erp-workforce",
    eyebrow: "Enterprise Operations",
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
      { value: "0.4s", label: "Check-in Sync Speed" },
      { value: "99.98%", label: "Payroll Accuracy" },
      { value: "$480k", label: "Annual Cost Savings" },
    ],
    techStack: ["React 19", "Node.js", "Flutter", "MQTT", "PostgreSQL", "Redis", "SAP Connectors"],
  },
  {
    id: "fintech-cloud",
    eyebrow: "Cloud Platforms",
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
    <section
      id="case-studies"
      className="dark-section py-20 md:py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0E1623 0%, #090D16 100%)" }}
    >
      {/* Ambient glows */}
      <div className="absolute top-1/3 left-0 w-[600px] h-[500px] pointer-events-none blur-[140px]"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.10) 0%, transparent 70%)" }} />
      <div className="absolute bottom-10 right-0 w-[500px] h-[400px] pointer-events-none blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-8"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
          <div className="space-y-4">
            <div>
              <span className="section-label">Featured Case Studies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1]">
              Engineering{" "}
              <span className="text-gradient-hero">Excellence in Action</span>
            </h2>
          </div>

          {/* Story selector tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-2xl" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
            {CASE_STUDIES.map((study, idx) => (
              <button
                key={study.id}
                onClick={() => setActiveStudyIndex(idx)}
                className="px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer transition-all duration-200"
                style={{
                  background: idx === activeStudyIndex
                    ? "linear-gradient(135deg, #6366F1, #5B21B6)"
                    : "transparent",
                  color: idx === activeStudyIndex ? "#fff" : "#6B6A78",
                  boxShadow: idx === activeStudyIndex ? "0 4px 16px rgba(99,102,241,0.28)" : "none",
                }}
              >
                Story {String(idx + 1).padStart(2, "0")}
              </button>
            ))}
          </div>
        </div>

        {/* ── Main Case Study Card ── */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(22,32,50,0.7) 0%, rgba(14,20,36,0.9) 100%)",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0 16px 64px rgba(0,0,0,0.5)",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">

            {/* Left: Story Content (7 cols) */}
            <div className="lg:col-span-7 p-7 sm:p-10 flex flex-col justify-between gap-8">
              <div className="space-y-6">
                {/* Eyebrow */}
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: "#818CF8" }}>
                    Case Study • {activeStudy.eyebrow}
                  </span>
                  <span className="text-xs text-[#6B6A78]">
                    {activeStudy.clientRegion} · {activeStudy.clientIndustry}
                  </span>
                </div>

                {/* Headline */}
                <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-[1.15]">
                  <span className="text-gradient-blue-violet">{activeStudy.gradientVerb}</span>
                  {activeStudy.titleSuffix}
                </h3>

                {/* Summary */}
                <p className="text-[#A3A2B0] text-base leading-relaxed">{activeStudy.summary}</p>

                {/* Challenge vs Solution */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl space-y-2" style={{ background: "rgba(245,158,11,0.06)", border: "1px solid rgba(245,158,11,0.15)" }}>
                    <span className="text-[11px] font-semibold uppercase tracking-wider block" style={{ color: "#FBBF24" }}>The Challenge</span>
                    <p className="text-xs text-[#A3A2B0] leading-relaxed">{activeStudy.challenge}</p>
                  </div>
                  <div className="p-4 rounded-xl space-y-2" style={{ background: "rgba(16,185,129,0.06)", border: "1px solid rgba(16,185,129,0.15)" }}>
                    <span className="text-[11px] font-semibold uppercase tracking-wider block" style={{ color: "#34D399" }}>The Architecture</span>
                    <p className="text-xs text-[#A3A2B0] leading-relaxed">{activeStudy.solution}</p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                  {activeStudy.metrics.map((metric, idx) => (
                    <div key={idx}>
                      <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">{metric.value}</div>
                      <div className="text-xs text-[#6B6A78] mt-0.5">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer: Tech stack + CTAs */}
              <div className="space-y-5 pt-2" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[#6B6A78] mr-1">Stack:</span>
                  {activeStudy.techStack.map((tech) => (
                    <span key={tech} className="tech-pill">{tech}</span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    onClick={openBookingModal}
                    className="btn-primary inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white cursor-pointer"
                  >
                    <span>Read Architecture Blueprint</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={openDemoModal}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-medium cursor-pointer transition-all"
                    style={{
                      background: "rgba(16,185,129,0.08)",
                      border: "1px solid rgba(16,185,129,0.2)",
                      color: "#34D399",
                    }}
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    Launch Live Interactive Sandbox
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Image (5 cols) */}
            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-auto" style={{ borderLeft: "1px solid rgba(255,255,255,0.07)" }}>
              <Image
                src={activeStudy.imageSrc}
                alt={activeStudy.tagline}
                fill
                className="object-cover transition-transform duration-700 hover:scale-[1.04]"
                sizes="(max-width: 1024px) 100vw, 42vw"
                priority
              />
              <div className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(14,20,36,0.7) 0%, transparent 40%), linear-gradient(to right, rgba(14,20,36,0.5), transparent 50%)" }} />

              {/* Verified stamp */}
              <div
                className="absolute bottom-5 right-5 p-3.5 rounded-2xl flex items-center gap-3"
                style={{
                  background: "rgba(14,20,36,0.92)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(16px)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
                }}
              >
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <span className="text-white text-xs font-bold block">Production Deployed</span>
                  <span className="text-[10px] text-[#6B6A78]">100% IP Transferred</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
