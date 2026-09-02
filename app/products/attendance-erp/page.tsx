"use client";

import React from "react";
import Link from "next/link";
import {
  MapPin,
  Fingerprint,
  Clock,
  FileSpreadsheet,
  ShieldCheck,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Server,
  Layers,
  Users,
  Database,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { BackButton } from "@/components/ui/BackButton";
import { useBookingModal } from "@/components/ModalProvider";
import { PRODUCTS } from "@/lib/constants";

export default function AttendanceERPPage() {
  const { openBookingModal } = useBookingModal();

  const modules = [
    {
      id: "geofence",
      name: "Geofenced Mobile Punch-In",
      badge: "Anti-Spoofing GPS",
      icon: <MapPin className="w-6 h-6 text-accent-blue" />,
      description:
        "Define custom polygon or radial geofences around job sites, warehouses, or client offices. Employees can only clock in when verified within coordinates.",
      features: [
        "Polygon boundary mapping with sub-3m accuracy",
        "Hardware-level mock location and VPN spoof defense",
        "Selfie & live facial verification at punch-in",
        "Offline punch-in caching with cryptographic timestamping",
      ],
    },
    {
      id: "biometrics",
      name: "Biometric Hardware Sync Gateways",
      badge: "TCP/IP & Cloud Gateway",
      icon: <Fingerprint className="w-6 h-6 text-cyan-400" />,
      description:
        "Direct TCP/IP and cloud sync with physical biometric terminals (ZKTeco, Hikvision, eSSL, Suprema) across multiple branch locations with zero lag.",
      features: [
        "Real-time event streaming via WebSocket & MQTT",
        "Automatic offline buffering (up to 500,000 logs per device)",
        "Over-the-air (OTA) employee biometric template sync",
        "Multi-branch centralized device health monitoring",
      ],
    },
    {
      id: "shift-rules",
      name: "Dynamic Shift & Overtime Calculation",
      badge: "Automated Policy Engine",
      icon: <Clock className="w-6 h-6 text-amber-400" />,
      description:
        "Configurable multi-tier shift policies including rotational shifts, split shifts, grace period buffers, automated half-day penalties, and weekend multipliers.",
      features: [
        "Custom overtime formulas (1.5x, 2.0x, custom flat rates)",
        "Automated shift rotation and roster scheduling",
        "Multi-level manager approval workflows for regularization",
        "Late arrival and early departure grace period rules",
      ],
    },
    {
      id: "payroll",
      name: "Statutory Payroll Reconciliation",
      badge: "SAP & Oracle Sync",
      icon: <FileSpreadsheet className="w-6 h-6 text-accent-emerald" />,
      description:
        "Instantly compile verified attendance data into payroll-ready balance sheets formatted directly for SAP, Oracle HCM, QuickBooks, ADP, and custom ERPs.",
      features: [
        "One-click CSV, Excel, XML, and JSON API payroll feeds",
        "Statutory compliance for US, UK, UAE, Singapore, EU, and Australia",
        "Leave deduction, paid time off (PTO), and sick day calculations",
        "Reconciliation speeds under 1 second for 10,000+ employees",
      ],
    },
    {
      id: "audit-logs",
      name: "Immutable Audit Trail & RBAC",
      badge: "Tamper-Proof Security",
      icon: <ShieldCheck className="w-6 h-6 text-indigo-400" />,
      description:
        "Enterprise-grade security with granular Role-Based Access Control and cryptographic SHA-256 logs for every attendance override or manual edit.",
      features: [
        "Cryptographically chained audit trail (immutable)",
        "Multi-tenant branch scoping for regional managers",
        "SOC 2 Type II and ISO 27001 compliance logs",
        "Exportable compliance records for labor inspections",
      ],
    },
    {
      id: "analytics",
      name: "Live Operations & Headcount Telemetry",
      badge: "Real-Time Telemetry",
      icon: <BarChart3 className="w-6 h-6 text-purple-400" />,
      description:
        "Real-time operational dashboard providing instant headcount numbers, absenteeism alerts, late-arrival trends, and labor cost forecasts.",
      features: [
        "Live on-site vs. absent employee radar",
        "Departmental cost projections and overtime alerts",
        "Custom scheduled executive reports (PDF / Email / Slack)",
        "Anomaly detection for unusual attendance patterns",
      ],
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-obsidian bg-grid-pattern">
      {/* Hero */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-emerald-600/15 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <BackButton fallbackHref="/#enterprise-solutions" />
          </div>

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2">
              <Badge variant="emerald">Proprietary Enterprise Software</Badge>
              <Badge variant="slate">Workforce OS</Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Enterprise Attendance &amp; <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300">
                Workforce Management ERP.
              </span>
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed font-normal">
              Eliminate manual time cards, proxy check-ins, and shift-planning friction across 500 to 50,000+ distributed employees with real-time geofencing, hardware biometric sync, and instant payroll exports.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button
                onClick={openBookingModal}
                variant="emerald"
                size="lg"
                className="gap-2 shadow-xl shadow-emerald-500/25 font-bold"
              >
                <span>Request Enterprise Sandbox Demo</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Link href="#modules">
                <Button variant="secondary" size="lg" className="font-semibold">
                  Explore ERP Modules
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Metrics Bar */}
      <section className="py-10 bg-surface/60 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-accent-emerald font-mono">100%</div>
              <div className="text-xs text-slate-200 font-bold mt-1">Verified Presence</div>
              <div className="text-[11px] text-slate-400">Zero proxy check-ins</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono">&lt; 2s</div>
              <div className="text-xs text-slate-200 font-bold mt-1">Biometric Sync Speed</div>
              <div className="text-[11px] text-slate-400">TCP/IP direct push</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-accent-blue font-mono">90%</div>
              <div className="text-xs text-slate-200 font-bold mt-1">Payroll Time Saved</div>
              <div className="text-[11px] text-slate-400">1-click reconciliation</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-indigo-400 font-mono">50,000+</div>
              <div className="text-xs text-slate-200 font-bold mt-1">Capacity Per Tenant</div>
              <div className="text-[11px] text-slate-400">Horizontal microservices</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Core Modules Grid */}
      <section id="modules" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <Badge variant="emerald">Comprehensive Module Architecture</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Six Purpose-Built Enterprise Engines
          </h2>
          <p className="text-slate-300 text-sm font-normal">
            Everything your HR, operations, and payroll leadership need in a single, high-performance platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((mod) => (
            <div
              key={mod.id}
              id={mod.id}
              className="p-8 rounded-3xl bg-surface/90 border border-border space-y-6 glow-card flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-obsidian border border-slate-800">
                    {mod.icon}
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                    {mod.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight">
                  {mod.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {mod.description}
                </p>
              </div>

              <div className="pt-4 border-t border-border/60 space-y-2">
                <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">
                  Core Capabilities:
                </span>
                {mod.features.map((feat) => (
                  <div key={feat} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent-emerald shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Live Demo Callout */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-surface border border-emerald-500/40 shadow-2xl shadow-emerald-500/15 text-center space-y-6 glow-card">
          <div className="max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Experience the Attendance ERP Live Sandbox
            </h3>
            <p className="text-sm text-slate-300">
              We will deploy a pre-configured sandbox instance with your shift rules, sample biometric logs, and payroll export templates.
            </p>
          </div>
          <Button
            onClick={openBookingModal}
            variant="emerald"
            size="lg"
            className="gap-2 shadow-lg shadow-emerald-500/30 font-bold"
          >
            <span>Schedule 15-Min Technical Discovery</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}
