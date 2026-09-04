"use client";

import React, { useState } from "react";
import { XCircle, CheckCircle2 } from "lucide-react";
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
    <section className="py-20 md:py-24 bg-[#F8FAFC] border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <span className="section-label">System Modernization</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            The Difference in Execution
          </h2>
          <p className="text-[#475569] text-sm sm:text-base leading-relaxed">
            See how custom enterprise engineering eliminates the friction, delays, and hidden costs of legacy software.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-10">
          <div className="p-1 rounded-lg inline-flex gap-1 bg-white border border-[#E2E8F0]">
            {(["operations", "engineering", "governance"] as const).map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-md text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === tab
                    ? "bg-[#0F172A] text-white"
                    : "text-[#64748B] hover:text-[#0F172A] hover:bg-[#F8FAFC]"
                }`}
              >
                {["Workforce & Operations", "Software Delivery", "CRM & Governance"][i]}
              </button>
            ))}
          </div>
        </div>

        {/* Light Card Comparison Grid (Side-by-Side, subtle interactive lift) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          
          {/* Left: Legacy Approach (Light Card, small red icons & text) */}
          <div className="p-6 sm:p-8 rounded-xl bg-white border border-[#E2E8F0] shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#F1F5F9]">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-600 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  Legacy Approach
                </span>
                <span className="text-[11px] font-semibold text-rose-600 bg-rose-50 px-2 py-0.5 rounded border border-rose-100">
                  High Friction
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] tracking-tight">
                {current.legacyTitle}
              </h3>

              <div className="space-y-3 pt-1">
                {current.legacyPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3 text-xs sm:text-sm text-[#64748B] hover:text-[#0F172A] transition-colors">
                    <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 text-xs text-[#94A3B8] border-t border-[#F1F5F9]">
              Outcome: Operational bottlenecks &amp; lost billable hours.
            </div>
          </div>

          {/* Right: SprintStack Modern Approach (Light Card, small green icons & text) */}
          <div className="p-6 sm:p-8 rounded-xl bg-white border border-[#CBD5E1] shadow-xs flex flex-col justify-between space-y-6 hover:border-emerald-400 transition-colors">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#F1F5F9]">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  SprintStack Standard
                </span>
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                  Zero Tech Debt
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] tracking-tight">
                {current.modernTitle}
              </h3>

              <div className="space-y-3 pt-1">
                {current.modernPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3 text-xs sm:text-sm text-[#334155]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between border-t border-[#F1F5F9]">
              <span className="text-xs font-semibold text-emerald-700">
                Outcome: 100% IP ownership &amp; weekly sprints.
              </span>
              {/* Flat button, NO arrow per rule */}
              <button
                onClick={openBookingModal}
                className="btn-primary text-xs font-semibold px-4 py-2 cursor-pointer"
              >
                Scope Solution
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
