"use client";

import React from "react";
import Link from "next/link";
import {
  Fingerprint,
  MapPin,
  Clock,
  FileSpreadsheet,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Cpu,
  BarChart3,
  Users,
} from "lucide-react";
import { BackButton } from "@/components/ui/BackButton";
import { useBookingModal } from "@/components/ModalProvider";

export default function AttendanceERPPage() {
  const { openBookingModal } = useBookingModal();

  const modules = [
    {
      id: "biometrics",
      name: "TCP/IP Biometric Device Sync",
      icon: <Fingerprint className="w-5 h-5 text-[#2563EB]" />,
      badge: "Real-Time Push",
      description:
        "Direct socket connectivity with ZKTeco, eSSL, and Matrix biometric terminals. Push attendance punches to the cloud within 2 seconds of finger/face scan.",
      features: [
        "Direct TCP/IP & WebSocket terminal sync",
        "Offline punch buffering during network downtime",
        "Multi-branch device registry & remote health ping",
        "Firmware-level duplicate punch deduplication",
      ],
    },
    {
      id: "geofencing",
      name: "Geofencing & Anti-Spoof Punch",
      icon: <MapPin className="w-5 h-5 text-emerald-600" />,
      badge: "Sub-2.4m GPS",
      description:
        "Field employee mobile punch-in secured with polygon GPS geofencing, hardware mock-location detection, and mandatory selfie capture.",
      features: [
        "Complex polygon work boundary definition",
        "OS-level mock location & VPN spoof detection",
        "Offline punch queue with cryptographic timestamps",
        "Facial recognition liveness verification",
      ],
    },
    {
      id: "shifts",
      name: "Dynamic Shift & Roster Engine",
      icon: <Clock className="w-5 h-5 text-blue-600" />,
      badge: "Automated Rules",
      description:
        "Manage complex rotating, overnight, and split shifts with automated grace period calculations, half-day rules, and overtime threshold detection.",
      features: [
        "24/7 rotating, split, and flexi-shift schedules",
        "Configurable late grace periods & early departure penalization",
        "Automated overtime calculation (regular vs. holiday)",
        "Self-service shift swap requests with manager approvals",
      ],
    },
    {
      id: "leaves",
      name: "Leave & Regularization Ops",
      icon: <Users className="w-5 h-5 text-purple-600" />,
      badge: "Multi-Tier Approval",
      description:
        "Comprehensive leave balances, statutory holiday calendars by location, and automated punch regularization workflows via Slack and WhatsApp.",
      features: [
        "Custom leave categories (Casual, Sick, Earned, Comp-off)",
        "Slack & WhatsApp interactive approval webhooks",
        "Automated monthly leave quota accrual and carryover",
        "Comprehensive audit log for all HR policy overrides",
      ],
    },
    {
      id: "payroll",
      name: "One-Click Payroll Reconciliation",
      icon: <FileSpreadsheet className="w-5 h-5 text-emerald-600" />,
      badge: "Instant Export",
      description:
        "Generate 100% reconciled payroll summary sheets in seconds. Direct export formats compatible with SAP, Oracle, Zoho Payroll, RazorpayX, and QuickBooks.",
      features: [
        "1-click monthly attendance reconciliation",
        "Pre-built export templates for SAP, Zoho & Razorpay",
        "Loss of Pay (LOP) automated calculation",
        "Direct salary slip email & WhatsApp delivery",
      ],
    },
    {
      id: "analytics",
      name: "Workforce Telemetry & Heatmaps",
      icon: <BarChart3 className="w-5 h-5 text-indigo-600" />,
      badge: "Live Executive BI",
      description:
        "Executive dashboards showing real-time on-floor headcounts, absenteeism heatmaps, overtime budget burn rates, and department productivity trends.",
      features: [
        "Real-time company-wide active headcount counter",
        "Departmental absenteeism rate heatmaps",
        "Overtime cost forecast vs. monthly budget caps",
        "Anomaly detection for unusual attendance patterns",
      ],
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-[#FAFAF8] text-[#0F172A] min-h-screen">
      
      {/* ── Hero Section ── */}
      <section className="py-12 md:py-20 relative overflow-hidden border-b border-[#E5E8ED]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(#E2E8F0_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none -z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-6">
            <BackButton fallbackHref="/#enterprise-solutions" label="Back to Enterprise Solutions" />
          </div>

          <div className="max-w-3xl space-y-5">
            <div className="flex items-center gap-2">
              <span className="section-label">Proprietary Enterprise Software</span>
              <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-[#475569] border border-[#E5E8ED]">
                Workforce OS
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight leading-[1.1]">
              Enterprise Attendance &amp; <br />
              <span className="text-emerald-600">
                Workforce Management ERP.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-normal">
              Eliminate manual time cards, proxy check-ins, and shift-planning friction across 500 to 50,000+ distributed employees with real-time geofencing, hardware biometric sync, and instant payroll exports.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                onClick={openBookingModal}
                className="btn-primary px-6 py-3 text-sm font-semibold cursor-pointer active:scale-95 transition-transform"
              >
                Request Enterprise Sandbox Demo
              </button>
              <Link
                href="#modules"
                className="btn-secondary px-5 py-3 text-sm font-semibold text-center active:scale-95 transition-transform"
              >
                Explore ERP Modules
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Enterprise Metrics Bar ── */}
      <section className="py-8 bg-white border-b border-[#E5E8ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600 font-mono">100%</div>
              <div className="text-xs text-[#0F172A] font-bold mt-1">Verified Presence</div>
              <div className="text-[11px] text-[#64748B]">Zero proxy check-ins</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] font-mono">&lt; 2s</div>
              <div className="text-xs text-[#0F172A] font-bold mt-1">Biometric Sync Speed</div>
              <div className="text-[11px] text-[#64748B]">TCP/IP direct push</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#2563EB] font-mono">90%</div>
              <div className="text-xs text-[#0F172A] font-bold mt-1">Payroll Time Saved</div>
              <div className="text-[11px] text-[#64748B]">1-click reconciliation</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] font-mono">50,000+</div>
              <div className="text-xs text-[#0F172A] font-bold mt-1">Capacity Per Tenant</div>
              <div className="text-[11px] text-[#64748B]">Horizontal microservices</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6 Core Modules Grid ── */}
      <section id="modules" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2.5">
          <span className="section-label">Comprehensive Architecture</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Six Purpose-Built Enterprise Engines
          </h2>
          <p className="text-[#475569] text-sm font-normal">
            Everything your HR, operations, and payroll leadership need in a single, high-performance platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((mod) => (
            <div
              key={mod.id}
              id={mod.id}
              className="p-6 sm:p-7 rounded-xl bg-white border border-[#E5E8ED] space-y-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:border-[#CBD5E1] transition-colors flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-[#F8FAFC] border border-[#E5E8ED] flex items-center justify-center">
                    {mod.icon}
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
                    {mod.badge}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] tracking-tight">
                  {mod.name}
                </h3>

                <p className="text-xs sm:text-sm text-[#5B6472] leading-relaxed font-normal">
                  {mod.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E5E8ED] space-y-2">
                <span className="text-[11px] font-semibold uppercase text-[#64748B] tracking-wider block">
                  Core Capabilities:
                </span>
                {mod.features.map((feat) => (
                  <div key={feat} className="flex items-start gap-2 text-xs text-[#334155]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── Live Demo Callout ── */}
        <div className="mt-14 p-8 sm:p-12 rounded-2xl bg-white border border-[#E5E8ED] shadow-[0_1px_4px_rgba(0,0,0,0.04)] text-center space-y-5">
          <div className="max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
              Experience the Attendance ERP Live Sandbox
            </h3>
            <p className="text-sm text-[#475569]">
              We will deploy a pre-configured sandbox instance with your shift rules, sample biometric logs, and payroll export templates.
            </p>
          </div>
          <div>
            <button
              onClick={openBookingModal}
              className="btn-primary px-6 py-3 text-sm font-semibold cursor-pointer active:scale-95 transition-transform"
            >
              Schedule 15-Min Technical Discovery
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
