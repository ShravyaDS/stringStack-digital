"use client";

import React, { useState } from "react";
import { XCircle, CheckCircle2, ArrowRight, Zap, AlertTriangle } from "lucide-react";
import { Button } from "../ui/Button";
import { useBookingModal } from "../ModalProvider";

export function TransformationCompare() {
  const { openBookingModal } = useBookingModal();
  const [activeTab, setActiveTab] = useState<"operations" | "engineering" | "governance">("operations");

  const comparisons = {
    operations: {
      legacyTitle: "Fragmented Legacy Spreadsheets & Proxy Clock-Ins",
      legacyPoints: [
        "Manual Excel timesheets with frequent proxy check-ins and unverified hours",
        "Disjointed branch locations with no real-time headcount or attendance telemetry",
        "Days wasted manually reconciling overtime and statutory payroll compliance",
        "Zero automated alerts for shift coverage gaps or unexpected absences",
      ],
      modernTitle: "Automated Attendance ERP & Biometric Synchronized OS",
      modernPoints: [
        "Hardware-level GPS polygon geofences with sub-3m spoof-proof accuracy",
        "Direct TCP/IP biometric sync (ZKTeco, Suprema) streaming real-time punch logs",
        "1-click statutory payroll reconciliation ready for SAP, Oracle HCM & QuickBooks",
        "Automated WhatsApp, SMS, and email alerts for overtime anomalies and shift rosters",
      ],
    },
    engineering: {
      legacyTitle: "Traditional Agency Hourly Billing & 3-Month Hiring Lag",
      legacyPoints: [
        "Vague, open-ended hourly billing with zero guaranteed delivery dates",
        "Junior developer handoffs behind agency account managers",
        "Accumulated technical debt and undocumented proprietary lock-in",
        "Months of onboarding before seeing a single working prototype",
      ],
      modernTitle: "SprintStack Fixed-Sprint High-Velocity Squads",
      modernPoints: [
        "Strict 48-hour scope lock with guaranteed 1–2 week production sprint deployments",
        "Senior systems architects with direct Slack and GitHub repository access",
        "100% unencumbered source code & IP ownership transferred from Day 1",
        "Weekly working milestone preview builds with zero fluff or scope creep",
      ],
    },
    governance: {
      legacyTitle: "Siloed CRMs & Unmonitored Manual Processes",
      legacyPoints: [
        "Inbound leads lost across personal WhatsApps and fragmented inbox silos",
        "Manual proposal drafting causing 3–5 day delays in sending client quotes",
        "No immutable audit trail or role-based access scoping for sensitive data",
        "Blind spots in real-time system performance, errors, and database latency",
      ],
      modernTitle: "Custom CRM Engine & Real-Time Telemetry Observability",
      modernPoints: [
        "Instant multi-channel lead ingestion (Website, WhatsApp API, Email webhooks)",
        "Automated 1-click PDF quote and milestone SOW generation",
        "Cryptographic SHA-256 chained audit trails with granular multi-tenant RBAC",
        "Sub-25ms live telemetry dashboards with automated Slack and email alerts",
      ],
    },
  };

  const current = comparisons[activeTab];

  return (
    <section className="py-20 md:py-24 relative" style={{ background: "linear-gradient(180deg, #090D16 0%, #0E1623 100%)", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="flex items-center justify-center">
            <span className="section-label">System Modernization</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1]">
            The Difference{" "}
            <span className="text-gradient-blue-violet">in Execution</span>
          </h2>
          <p className="text-[#A3A2B0] text-base leading-relaxed">
            See how custom enterprise engineering eliminates the friction, delays, and hidden costs of legacy software.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-10">
          <div className="p-1 rounded-xl inline-flex gap-1" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
            {(["operations", "engineering", "governance"] as const).map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="px-4 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer"
                style={{
                  background: activeTab === tab ? "rgba(59,130,246,0.18)" : "transparent",
                  border: `1px solid ${activeTab === tab ? "rgba(99,102,241,0.32)" : "transparent"}`,
                  color: activeTab === tab ? "#F4F3F8" : "#6B6A78",
                }}
              >
                {["Workforce & Operations", "Software Delivery", "CRM & Governance"][i]}
              </button>
            ))}
          </div>
        </div>

        {/* Comparison Grid (Side-by-Side) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 items-stretch">
          {/* Left: Legacy */}
          <div className="p-6 sm:p-8 rounded-2xl flex flex-col justify-between space-y-6" style={{ background: "rgba(244,63,94,0.04)", border: "1px solid rgba(244,63,94,0.15)" }}>
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                <span className="text-xs font-semibold uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  Legacy / Fragmented Approach
                </span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded" style={{ background: "rgba(244,63,94,0.1)", color: "#FB7185", border: "1px solid rgba(244,63,94,0.2)" }}>
                  High Overhead
                </span>
              </div>

              <h3 className="text-xl font-bold text-white tracking-tight">
                {current.legacyTitle}
              </h3>

              <div className="space-y-3 pt-1">
                {current.legacyPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3 text-xs sm:text-sm text-[#A3A2B0]">
                    <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 text-xs text-[#6B6A78]" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
              Outcome: Operational bottlenecks &amp; lost billable hours.
            </div>
          </div>

          {/* Right: SprintStack Modern Approach */}
          <div className="p-6 sm:p-8 rounded-2xl flex flex-col justify-between space-y-6" style={{ background: "rgba(16,185,129,0.04)", border: "1px solid rgba(16,185,129,0.18)" }}>
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5" />
                  SprintStack Engineering Standard
                </span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded" style={{ background: "rgba(16,185,129,0.12)", color: "#34D399", border: "1px solid rgba(16,185,129,0.25)" }}>
                  Zero Technical Debt
                </span>
              </div>

              <h3 className="text-xl font-bold text-white tracking-tight">
                {current.modernTitle}
              </h3>

              <div className="space-y-3 pt-1">
                {current.modernPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3 text-xs sm:text-sm text-[#D4D3E0]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
              <span className="text-xs font-semibold text-emerald-400">
                Outcome: 100% IP ownership &amp; sub-second speed.
              </span>
              <Button
                onClick={openBookingModal}
                variant="emerald"
                size="sm"
                className="text-xs font-bold gap-1.5 py-2"
              >
                <span>Scope Solution</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
