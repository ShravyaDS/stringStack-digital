"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Shield,
  ShieldCheck,
  CheckCircle2,
  Activity,
  BarChart3,
  ArrowRight,
  Play,
  Lock,
  Zap,
  Fingerprint,
  Cloud,
  Users,
  User,
  Settings,
  Bell,
  ChevronDown,
  MapPin,
  Check,
  Sliders,
  Layers,
  Radio,
  Server
} from "lucide-react";
import { useBookingModal } from "../ModalProvider";

/* ═════════════════════════════════════════════════════════════════
   PRODUCT SYSTEMS DATA SPECIFICATION
   ═════════════════════════════════════════════════════════════════ */
interface MetricSpec {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  sub: string;
  iconBg: string;
  iconColor: string;
}

interface StatTile {
  label: string;
  value: string;
  change: string;
  changePositive: boolean;
  icon: React.ComponentType<{ className?: string }>;
  iconColor: string;
}

interface ActivityItem {
  name: string;
  action: string;
  time: string;
  avatarBg: string;
}

interface ProductSystem {
  id: string;
  moduleNo: string;
  shortTitle: string;
  badge: string;
  title: string;
  description: string;
  endpoint: string;
  defaultTab: "attendance" | "governance" | "crm" | "telemetry";
  accentColor: string;
  accentBorder: string;
  accentGlow: string;
  icon: React.ComponentType<{ className?: string }>;
  iconBg: string;
  metrics: MetricSpec[];
  features: string[];
  sidebarItems: string[];
  stats: StatTile[];
  trendTitle: string;
  chartPath: string;
  chartFill: string;
  mapTitle?: string;
  activities: ActivityItem[];
}

const PRODUCT_SYSTEMS: ProductSystem[] = [
  {
    id: "attendance-erp",
    moduleNo: "MOD-01",
    shortTitle: "Attendance ERP",
    badge: "Flagship Suite",
    title: "Enterprise Attendance & Workforce ERP",
    description:
      "Streamline attendance, workforce management and payroll with a secure, biometric-enabled, cloud-based solution.",
    endpoint: "os.sprintstack.digital/erp/attendance-v4.2",
    defaultTab: "attendance",
    accentColor: "text-blue-500",
    accentBorder: "border-blue-500",
    accentGlow: "rgba(59, 130, 246, 0.25)",
    icon: User,
    iconBg: "bg-blue-600",
    metrics: [
      {
        icon: Zap,
        label: "CHECK-IN SPEED",
        value: "< 0.4s",
        sub: "Sub-second punch",
        iconBg: "bg-blue-500/15 border-blue-500/30",
        iconColor: "text-blue-400",
      },
      {
        icon: Fingerprint,
        label: "HARDWARE SYNC",
        value: "Biometric",
        sub: "ZKTeco & Suprema",
        iconBg: "bg-blue-500/15 border-blue-500/30",
        iconColor: "text-blue-400",
      },
      {
        icon: ShieldCheck,
        label: "SPOOF DEFENSE",
        value: "100%",
        sub: "Anti-proxy GPS",
        iconBg: "bg-teal-500/15 border-teal-500/30",
        iconColor: "text-teal-400",
      },
      {
        icon: Cloud,
        label: "PAYROLL EXPORT",
        value: "Instant",
        sub: "Accounting-ready",
        iconBg: "bg-blue-500/15 border-blue-500/30",
        iconColor: "text-blue-400",
      },
    ],
    features: [
      "GPS geofencing with physical biometric fingerprint and facial recognition machines.",
      "Automated shift scheduling, overtime calculation, and multi-tier leave approvals.",
      "One-click payroll export ready for Excel, QuickBooks, SAP, and local tax reporting.",
    ],
    sidebarItems: ["Dashboard", "Employees", "Attendance", "Payroll", "Reports", "Settings"],
    stats: [
      { label: "Total Employees", value: "1,248", change: "+ 9%", changePositive: true, icon: Users, iconColor: "text-blue-400" },
      { label: "Present Today", value: "1,182", change: "+ 3%", changePositive: true, icon: CheckCircle2, iconColor: "text-emerald-400" },
      { label: "Absent Today", value: "66", change: "+ 2%", changePositive: false, icon: User, iconColor: "text-rose-400" },
      { label: "On Leave", value: "24", change: "+ 0%", changePositive: true, icon: Activity, iconColor: "text-purple-400" },
    ],
    trendTitle: "Attendance Trend",
    chartPath: "M0,65 Q30,55 60,62 T120,40 T180,48 T240,25 T300,32 T360,18",
    chartFill: "M0,65 Q30,55 60,62 T120,40 T180,48 T240,25 T300,32 T360,18 L360,90 L0,90 Z",
    mapTitle: "Live Locations",
    activities: [
      { name: "Rahul Sharma", action: "Checked In", time: "09:12 AM", avatarBg: "bg-blue-600" },
      { name: "Priya Nair", action: "Checked Out", time: "08:48 PM", avatarBg: "bg-emerald-600" },
      { name: "Vikram Singh", action: "Checked In", time: "09:24 AM", avatarBg: "bg-purple-600" },
      { name: "Ananya Rao", action: "Checked Out", time: "06:02 PM", avatarBg: "bg-amber-600" },
    ],
  },
  {
    id: "governance-os",
    moduleNo: "MOD-02",
    shortTitle: "Governance OS",
    badge: "Operations OS",
    title: "Project Management & Resource Governance OS",
    description:
      "Eliminate scope creep and margin leaks with automated sprint milestone tracking, resource heatmaps, and client sign-offs.",
    endpoint: "os.sprintstack.digital/governance/pipeline-matrix",
    defaultTab: "governance",
    accentColor: "text-emerald-500",
    accentBorder: "border-emerald-500",
    accentGlow: "rgba(16, 185, 129, 0.25)",
    icon: Shield,
    iconBg: "bg-emerald-600",
    metrics: [
      {
        icon: Zap,
        label: "BOARD SPEED",
        value: "< 50ms",
        sub: "Instant updates",
        iconBg: "bg-emerald-500/15 border-emerald-500/30",
        iconColor: "text-emerald-400",
      },
      {
        icon: Activity,
        label: "CAPACITY SYNC",
        value: "Real-Time",
        sub: "Team heatmaps",
        iconBg: "bg-emerald-500/15 border-emerald-500/30",
        iconColor: "text-emerald-400",
      },
      {
        icon: ShieldCheck,
        label: "MARGIN PRECISION",
        value: "99.9%",
        sub: "Budget tracking",
        iconBg: "bg-blue-500/15 border-blue-500/30",
        iconColor: "text-blue-400",
      },
      {
        icon: Cloud,
        label: "SIGN-OFF GATES",
        value: "Automated",
        sub: "Client approvals",
        iconBg: "bg-teal-500/15 border-teal-500/30",
        iconColor: "text-teal-400",
      },
    ],
    features: [
      "Interactive visual Gantt timelines and sprint boards with automated task dependencies.",
      "Real-time team resource allocation heatmaps to eliminate project bottlenecks.",
      "Automated client milestone sign-off workflows before deliverable invoicing.",
    ],
    sidebarItems: ["Overview", "Sprints", "Backlog", "Milestones", "Budgets", "Settings"],
    stats: [
      { label: "Active Sprints", value: "14", change: "+ 2", changePositive: true, icon: Layers, iconColor: "text-emerald-400" },
      { label: "Sprint Velocity", value: "94.2%", change: "+ 4.1%", changePositive: true, icon: Zap, iconColor: "text-blue-400" },
      { label: "Milestone Signoffs", value: "100%", change: "On Target", changePositive: true, icon: CheckCircle2, iconColor: "text-teal-400" },
      { label: "Margin Health", value: "+18.4%", change: "Protected", changePositive: true, icon: BarChart3, iconColor: "text-purple-400" },
    ],
    trendTitle: "Sprint Velocity & Burn",
    chartPath: "M0,70 Q30,60 60,50 T120,45 T180,35 T240,28 T300,20 T360,12",
    chartFill: "M0,70 Q30,60 60,50 T120,45 T180,35 T240,28 T300,20 T360,12 L360,90 L0,90 Z",
    mapTitle: "Team Workload Heatmap",
    activities: [
      { name: "Sprint 4 Deliverable", action: "Milestone Approved", time: "11:20 AM", avatarBg: "bg-emerald-600" },
      { name: "Cloud Architecture Gate", action: "Sign-off Locked", time: "10:05 AM", avatarBg: "bg-blue-600" },
      { name: "Resource Allocation", action: "Capacity Rebalanced", time: "09:30 AM", avatarBg: "bg-teal-600" },
      { name: "Milestone Payment", action: "Invoice Auto-Dispatched", time: "08:15 AM", avatarBg: "bg-purple-600" },
    ],
  },
  {
    id: "custom-crm",
    moduleNo: "MOD-03",
    shortTitle: "Custom CRM",
    badge: "High-Conversion",
    title: "Custom CRM & Lead Operations Engine",
    description:
      "Unify omni-channel customer leads, automate sales rep territory assignment, and trigger 1-click branded estimates.",
    endpoint: "os.sprintstack.digital/crm/conversion-pipeline",
    defaultTab: "crm",
    accentColor: "text-purple-500",
    accentBorder: "border-purple-500",
    accentGlow: "rgba(168, 85, 247, 0.25)",
    icon: Users,
    iconBg: "bg-purple-600",
    metrics: [
      {
        icon: Zap,
        label: "LEAD CAPTURE",
        value: "Instant",
        sub: "Web, WhatsApp, Ads",
        iconBg: "bg-purple-500/15 border-purple-500/30",
        iconColor: "text-purple-400",
      },
      {
        icon: Users,
        label: "LEAD ROUTING",
        value: "< 150ms",
        sub: "Auto rep assignment",
        iconBg: "bg-purple-500/15 border-purple-500/30",
        iconColor: "text-purple-400",
      },
      {
        icon: ShieldCheck,
        label: "PDF PROPOSALS",
        value: "< 1s",
        sub: "Branded estimates",
        iconBg: "bg-blue-500/15 border-blue-500/30",
        iconColor: "text-blue-400",
      },
      {
        icon: Cloud,
        label: "FOLLOW-UP SLA",
        value: "Automated",
        sub: "Zero lost deals",
        iconBg: "bg-teal-500/15 border-teal-500/30",
        iconColor: "text-teal-400",
      },
    ],
    features: [
      "Automatic lead capture from website, WhatsApp Business, email, and social ads.",
      "Smart sales rep routing based on territory, deal size, or language.",
      "One-click generation of branded PDF proposals, estimates, and contracts.",
    ],
    sidebarItems: ["Pipeline", "Leads", "Deals", "Quotations", "Accounts", "Settings"],
    stats: [
      { label: "Pipeline Value", value: "$1.42M", change: "+ 24%", changePositive: true, icon: BarChart3, iconColor: "text-purple-400" },
      { label: "Ingestion Rate", value: "340 /day", change: "+ 38%", changePositive: true, icon: Zap, iconColor: "text-blue-400" },
      { label: "Deal Velocity", value: "12.4 Days", change: "- 3.2d", changePositive: true, icon: Activity, iconColor: "text-emerald-400" },
      { label: "Win Rate", value: "44.8%", change: "+ 5.2%", changePositive: true, icon: CheckCircle2, iconColor: "text-teal-400" },
    ],
    trendTitle: "Pipeline Conversion Flow",
    chartPath: "M0,60 Q30,40 60,45 T120,30 T180,38 T240,15 T300,22 T360,10",
    chartFill: "M0,60 Q30,40 60,45 T120,30 T180,38 T240,15 T300,22 T360,10 L360,90 L0,90 Z",
    mapTitle: "Omni-Channel Lead Stream",
    activities: [
      { name: "Enterprise Retainer", action: "WhatsApp Lead · Routed", time: "11:45 AM", avatarBg: "bg-purple-600" },
      { name: "Healthcare SaaS Deal", action: "Quote PDF Generated", time: "10:14 AM", avatarBg: "bg-blue-600" },
      { name: "FinTech Migration", action: "Proposal Accepted", time: "09:50 AM", avatarBg: "bg-emerald-600" },
      { name: "Retail Automation", action: "Follow-up Triggered", time: "08:32 AM", avatarBg: "bg-amber-600" },
    ],
  },
  {
    id: "automation-gateway",
    moduleNo: "MOD-04",
    shortTitle: "Automation Gateway",
    badge: "Integration Suite",
    title: "Process Automation & Integration Gateway",
    description:
      "Connect legacy systems, cloud apps, and accounting software into an automated, event-driven business pipeline.",
    endpoint: "os.sprintstack.digital/telemetry/event-stream",
    defaultTab: "telemetry",
    accentColor: "text-orange-500",
    accentBorder: "border-orange-500",
    accentGlow: "rgba(249, 115, 22, 0.25)",
    icon: Settings,
    iconBg: "bg-orange-500",
    metrics: [
      {
        icon: Zap,
        label: "SYNC LATENCY",
        value: "< 18ms",
        sub: "Instant stream",
        iconBg: "bg-orange-500/15 border-orange-500/30",
        iconColor: "text-orange-400",
      },
      {
        icon: Lock,
        label: "AUDIT SECURITY",
        value: "Encrypted",
        sub: "Tamper-proof log",
        iconBg: "bg-blue-500/15 border-blue-500/30",
        iconColor: "text-blue-400",
      },
      {
        icon: ShieldCheck,
        label: "ALERT DISPATCH",
        value: "Multi-Channel",
        sub: "WhatsApp & SMS",
        iconBg: "bg-teal-500/15 border-teal-500/30",
        iconColor: "text-teal-400",
      },
      {
        icon: Cloud,
        label: "COMPLIANCE",
        value: "100%",
        sub: "SOC2 & GDPR",
        iconBg: "bg-emerald-500/15 border-emerald-500/30",
        iconColor: "text-emerald-400",
      },
    ],
    features: [
      "Real-time operational dashboards displaying key metrics across all your branches.",
      "Automated WhatsApp, SMS, and transactional email alerts triggered by business events.",
      "Tamper-proof audit logs recording every action for complete compliance and security.",
    ],
    sidebarItems: ["Streams", "Triggers", "Webhooks", "Integrations", "Audit Logs", "Settings"],
    stats: [
      { label: "Daily Events", value: "4.8M", change: "+ 18%", changePositive: true, icon: Activity, iconColor: "text-orange-400" },
      { label: "Success Rate", value: "99.99%", change: "Zero Errors", changePositive: true, icon: CheckCircle2, iconColor: "text-emerald-400" },
      { label: "Average Latency", value: "16ms", change: "- 4ms", changePositive: true, icon: Zap, iconColor: "text-blue-400" },
      { label: "Active Connectors", value: "28", change: "Multi-Branch", changePositive: true, icon: Server, iconColor: "text-purple-400" },
    ],
    trendTitle: "Event Stream Throughput",
    chartPath: "M0,68 Q30,45 60,55 T120,25 T180,35 T240,12 T300,18 T360,8",
    chartFill: "M0,68 Q30,45 60,55 T120,25 T180,35 T240,12 T300,18 T360,8 L360,90 L0,90 Z",
    mapTitle: "Connector Cluster Status",
    activities: [
      { name: "SAP Ledger Sync", action: "Reconciled · 200 OK", time: "11:58 AM", avatarBg: "bg-orange-600" },
      { name: "QuickBooks Batch", action: "Payroll Stream Dispatched", time: "11:12 AM", avatarBg: "bg-blue-600" },
      { name: "WhatsApp Gateway", action: "Alert Broadcasted", time: "10:44 AM", avatarBg: "bg-emerald-600" },
      { name: "Biometric Event Sync", action: "Suprema Core Synced", time: "09:05 AM", avatarBg: "bg-purple-600" },
    ],
  },
];

export function ProductShowcase() {
  const { openBookingModal } = useBookingModal();
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % PRODUCT_SYSTEMS.length);
    }, 8000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const currentSystem = PRODUCT_SYSTEMS[activeIdx];

  return (
    <section
      id="enterprise-solutions"
      className="py-20 lg:py-28 bg-slate-50 dark:bg-[#050811] border-t border-slate-200 dark:border-[#1F2937] scroll-mt-20 relative overflow-hidden text-slate-900 dark:text-white transition-colors duration-200"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Architectural Mesh with slow drift */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="relative w-full h-full animate-slow-drift">
          <Image
            src="/images/tech-stack/tech-stack-bg.jpg"
            alt="Enterprise Systems Infrastructure"
            fill
            className="object-cover object-center opacity-[0.03] dark:opacity-[0.08] mix-blend-luminosity"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/70 via-transparent to-slate-50 dark:from-[#050811]/90 dark:via-transparent dark:to-[#050811]" />
      </div>

      {/* Dynamic Ambient Glow Behind Active Section */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[850px] h-[500px] rounded-full blur-[160px] pointer-events-none transition-all duration-700 opacity-60 dark:opacity-75"
        style={{
          background: `radial-gradient(circle, ${currentSystem.accentGlow} 0%, transparent 70%)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ═══════════════════════════════════════════════════════════════
            SECTION HEADER
            ═══════════════════════════════════════════════════════════════ */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2.5 max-w-3xl">
            <span className="text-xs font-mono font-bold text-sky-500 dark:text-[#00D2FE] tracking-widest uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
              02 — ENTERPRISE SOFTWARE SOLUTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Enterprise{" "}
              <span className="text-[#2563EB] dark:text-[#3B82F6] bg-gradient-to-r from-blue-600 via-blue-500 to-sky-400 bg-clip-text text-transparent">
                Software Solutions
              </span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl">
              Ready-to-deploy business software systems. Deployed on your private cloud with full
              source code ownership and zero monthly vendor lock-in.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={openBookingModal}
              className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-white/90 dark:bg-[#0A1224]/90 hover:bg-blue-50 dark:hover:bg-[#0F1B35] text-slate-900 dark:text-white border border-slate-300 dark:border-blue-500/40 hover:border-blue-500 flex items-center gap-2 cursor-pointer transition-all active:scale-95 shadow-md shadow-blue-500/10"
            >
              <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
                <Play className="w-2.5 h-2.5 text-white fill-white ml-0.5" />
              </div>
              <span>Request Guided Demo</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white" />
            </button>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            TOP ROW: 4 HORIZONTAL MODULE SELECTOR CARDS
            ═══════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {PRODUCT_SYSTEMS.map((sys, idx) => {
            const isActive = idx === activeIdx;
            const Icon = sys.icon;

            return (
              <button
                key={sys.id}
                onClick={() => setActiveIdx(idx)}
                className={`text-left p-4 rounded-2xl border transition-all duration-300 relative group cursor-pointer flex items-center justify-between gap-3 ${
                  isActive
                    ? "bg-white dark:bg-[#0C152B] border-blue-500 shadow-[0_0_25px_rgba(37,99,235,0.25)] ring-1 ring-blue-500/50"
                    : "bg-white/90 dark:bg-[#070D1A]/90 border-slate-200 dark:border-[#1E293B]/70 hover:border-slate-300 dark:hover:border-slate-700 shadow-xs dark:shadow-none"
                }`}
              >
                {/* Left Colored Icon */}
                <div
                  className={`w-11 h-11 rounded-xl ${sys.iconBg} flex items-center justify-center shrink-0 shadow-md shadow-black/20`}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>

                {/* Center Title & Subtitle */}
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">
                    {sys.moduleNo}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white truncate">
                    {sys.shortTitle}
                  </h3>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                    {sys.badge}
                  </p>
                </div>

                {/* Right Circular Arrow Button */}
                <div
                  className={`w-7 h-7 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                    isActive
                      ? "border-blue-500 text-blue-500 dark:text-blue-400"
                      : "border-slate-300 dark:border-white/15 text-slate-400 group-hover:text-white group-hover:border-slate-400"
                  }`}
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </button>
            );
          })}
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            LOWER WORKSTATION: SPLIT 2-COLUMN VIEW
            Left: Interactive OS Browser Window Mockup
            Right: Technical Specifications & Core Features
            ═══════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-stretch">
          {/* ─────────────────────────────────────────────────────────────
              LEFT COLUMN: BROWSER WINDOW MOCKUP (7 COLS)
              ───────────────────────────────────────────────────────────── */}
          <div className="xl:col-span-7 bg-white dark:bg-[#070D1A] border border-slate-200 dark:border-[#1E2A44] rounded-2xl p-5 sm:p-6 shadow-xl dark:shadow-2xl flex flex-col justify-between relative overflow-hidden">
            {/* Top Browser Chrome Bar */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200 dark:border-[#1E293B]/60 gap-3">
              {/* Traffic light dots */}
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
              </div>

              {/* URL Address Bar */}
              <div className="bg-slate-100 dark:bg-[#0B132B]/80 px-4 py-1 rounded-full border border-slate-200 dark:border-white/10 font-mono text-[11px] text-slate-600 dark:text-slate-300 flex items-center gap-2 max-w-[320px] truncate">
                <Lock className="w-3 h-3 text-slate-400 shrink-0" />
                <span className="truncate">{currentSystem.endpoint}</span>
              </div>

              {/* Deployment Status Pill */}
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold shrink-0">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Ready for Deployment</span>
              </div>
            </div>

            {/* Browser Content Header */}
            <div className="mb-4">
              <div className="text-xs font-mono font-bold text-sky-500 dark:text-sky-400 uppercase tracking-wider mb-1">
                {currentSystem.moduleNo} · {currentSystem.badge.toUpperCase()}
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {currentSystem.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                {currentSystem.description}
              </p>
            </div>

            {/* Interactive SaaS Dashboard UI Surface */}
            <div className="bg-slate-900 dark:bg-[#0A1224] rounded-xl border border-slate-800 dark:border-[#1A2640] p-3.5 sm:p-4 text-white shadow-inner flex flex-col justify-between">
              {/* Top Dashboard Nav Bar */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-xs">
                <div className="flex items-center gap-2 font-bold tracking-wide">
                  <div className="w-5 h-5 rounded-md bg-blue-600 flex items-center justify-center text-[10px] font-extrabold text-white">
                    {currentSystem.moduleNo.replace("MOD-0", "")}
                  </div>
                  <span>{currentSystem.shortTitle}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Bell className="w-3.5 h-3.5 text-slate-400 cursor-pointer hover:text-white" />
                  <div className="flex items-center gap-1.5 cursor-pointer bg-white/5 hover:bg-white/10 px-2 py-1 rounded-md border border-white/10">
                    <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center text-[9px] font-bold">
                      A
                    </div>
                    <span className="text-[11px] text-slate-200">Admin</span>
                    <ChevronDown className="w-3 h-3 text-slate-400" />
                  </div>
                </div>
              </div>

              {/* Main Dashboard Layout (Sidebar + Content) */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                {/* Mini Left Sidebar */}
                <div className="sm:col-span-3 space-y-1">
                  {currentSystem.sidebarItems.map((item, i) => (
                    <div
                      key={item}
                      className={`px-2.5 py-1.5 rounded-lg text-[11px] font-medium transition-colors flex items-center justify-between ${
                        i === 0
                          ? "bg-blue-600 text-white font-semibold shadow-xs"
                          : "text-slate-400 hover:text-slate-200 hover:bg-white/5 cursor-pointer"
                      }`}
                    >
                      <span>{item}</span>
                      {i === 0 && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </div>
                  ))}
                </div>

                {/* Dashboard Stats & Live Visuals */}
                <div className="sm:col-span-9 space-y-3">
                  {/* 4 Stat Cards Row */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {currentSystem.stats.map((st, i) => {
                      const StatIcon = st.icon;
                      return (
                        <div
                          key={i}
                          className="bg-[#0D1830] border border-white/10 rounded-lg p-2 flex flex-col justify-between"
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-[9px] text-slate-400 truncate">{st.label}</span>
                            <StatIcon className={`w-3 h-3 ${st.iconColor}`} />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-white font-mono">{st.value}</div>
                            <span
                              className={`text-[9px] font-mono ${
                                st.changePositive ? "text-emerald-400" : "text-rose-400"
                              }`}
                            >
                              {st.change}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* 3 Widgets: Trend Chart, Map/Matrix, Recent Activity */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {/* Widget 1: Trend Area Chart */}
                    <div className="bg-[#0D1830] border border-white/10 rounded-lg p-2.5 flex flex-col justify-between">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] font-bold text-slate-300">
                          {currentSystem.trendTitle}
                        </span>
                      </div>
                      <div className="h-20 w-full relative flex items-end">
                        {/* SVG Area Chart */}
                        <svg
                          viewBox="0 0 360 90"
                          className="w-full h-full overflow-visible"
                          preserveAspectRatio="none"
                        >
                          <defs>
                            <linearGradient
                              id={`grad-${currentSystem.id}`}
                              x1="0%"
                              y1="0%"
                              x2="0%"
                              y2="100%"
                            >
                              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.45" />
                              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.0" />
                            </linearGradient>
                          </defs>
                          <path
                            d={currentSystem.chartFill}
                            fill={`url(#grad-${currentSystem.id})`}
                          />
                          <path
                            d={currentSystem.chartPath}
                            fill="none"
                            stroke="#38BDF8"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                      <div className="flex justify-between text-[8px] font-mono text-slate-400 mt-1 border-t border-white/5 pt-1">
                        <span>Mon</span>
                        <span>Wed</span>
                        <span>Fri</span>
                        <span>Sun</span>
                      </div>
                    </div>

                    {/* Widget 2: Live Locations / Map Widget */}
                    <div className="bg-[#0D1830] border border-white/10 rounded-lg p-2.5 flex flex-col justify-between relative overflow-hidden">
                      <div className="flex items-center justify-between mb-1 z-10">
                        <span className="text-[10px] font-bold text-slate-300">
                          {currentSystem.mapTitle}
                        </span>
                        <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[8px] font-mono font-bold flex items-center gap-1">
                          <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                          GPS Active
                        </span>
                      </div>

                      {/* Map Graphic Surface */}
                      <div className="h-20 rounded bg-[#0A1120] border border-white/5 relative overflow-hidden flex items-center justify-center">
                        {/* Subtle Grid Map Lines */}
                        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:8px_8px]" />
                        {/* Animated Pulsing Location Pins */}
                        <div className="absolute top-4 left-6 flex items-center gap-1">
                          <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-ping absolute opacity-75" />
                          <span className="w-2 h-2 rounded-full bg-blue-500 relative" />
                        </div>
                        <div className="absolute bottom-5 right-8 flex items-center gap-1">
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping absolute opacity-75" />
                          <span className="w-2 h-2 rounded-full bg-emerald-500 relative" />
                        </div>
                        <div className="absolute top-7 right-12 flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-purple-500 relative" />
                        </div>
                        <div className="text-[9px] font-mono text-slate-400 bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs z-10">
                          Biometric Site Cluster
                        </div>
                      </div>

                      <div className="text-[8px] font-mono text-slate-400 mt-1 truncate">
                        Suprema & ZKTeco Hardware Synced
                      </div>
                    </div>

                    {/* Widget 3: Recent Activity Feed */}
                    <div className="bg-[#0D1830] border border-white/10 rounded-lg p-2.5 flex flex-col justify-between">
                      <div className="text-[10px] font-bold text-slate-300 mb-1.5">
                        Recent Activity
                      </div>
                      <div className="space-y-1.5">
                        {currentSystem.activities.map((act, i) => (
                          <div
                            key={i}
                            className="flex items-center justify-between text-[9px] border-b border-white/5 pb-1 last:border-0 last:pb-0"
                          >
                            <div className="flex items-center gap-1.5 min-w-0">
                              <div
                                className={`w-4 h-4 rounded-full ${act.avatarBg} text-white text-[8px] font-bold flex items-center justify-center shrink-0`}
                              >
                                {act.name.charAt(0)}
                              </div>
                              <div className="truncate">
                                <div className="font-semibold text-slate-200 truncate">
                                  {act.name}
                                </div>
                                <div className="text-[8px] text-slate-400">{act.action}</div>
                              </div>
                            </div>
                            <span className="text-[8px] font-mono text-slate-400 shrink-0 ml-1">
                              {act.time}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Live Demo Button */}
            <div className="mt-4 pt-3 flex items-center justify-between">
              <button
                onClick={openBookingModal}
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs flex items-center gap-2 cursor-pointer shadow-md shadow-blue-600/30 transition-all active:scale-95"
              >
                <Play className="w-3 h-3 fill-white" />
                <span>Request Guided Demo</span>
              </button>

              <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                Full source code included · Docker / Bare-metal deployable
              </div>
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────────
              RIGHT COLUMN: TECHNICAL SPECIFICATIONS & CORE FEATURES (5 COLS)
              ───────────────────────────────────────────────────────────── */}
          <div className="xl:col-span-5 bg-white dark:bg-[#070D1A] border border-slate-200 dark:border-[#1E2A44] rounded-2xl p-5 sm:p-6 shadow-xl dark:shadow-2xl flex flex-col justify-between space-y-6">
            {/* Top Header: Technical Specifications */}
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-sky-500 dark:text-sky-400 uppercase tracking-wider mb-4">
                <Settings className="w-4 h-4" />
                <span>TECHNICAL SPECIFICATIONS</span>
              </div>

              {/* 4 Metrics (2x2 Grid) */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {currentSystem.metrics.map((m, idx) => {
                  const Icon = m.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-slate-50 dark:bg-[#0A1224] border border-slate-200 dark:border-white/10 rounded-xl p-3.5 flex flex-col justify-between hover:border-blue-500/50 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-tight">
                          {m.label}
                        </span>
                        <div className={`p-1.5 rounded-lg border ${m.iconBg}`}>
                          <Icon className={`w-3.5 h-3.5 ${m.iconColor}`} />
                        </div>
                      </div>
                      <div>
                        <div className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white font-mono">
                          {m.value}
                        </div>
                        <div className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-medium">
                          {m.sub}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Core Architectural Features List */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                  <span>CORE FEATURES</span>
                </div>

                <div className="space-y-3">
                  {currentSystem.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Action CTAs */}
            <div className="pt-4 border-t border-slate-200 dark:border-[#1E293B]/60 flex flex-col sm:flex-row items-stretch gap-3">
              <button
                onClick={openBookingModal}
                className="flex-1 py-3 px-4 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-blue-600/30 transition-all active:scale-95"
              >
                <Play className="w-3.5 h-3.5 fill-white" />
                <span>Schedule Solution Walkthrough</span>
              </button>

              <button
                onClick={openBookingModal}
                className="flex-1 py-3 px-4 rounded-xl text-xs font-bold bg-white dark:bg-[#0A1224] hover:bg-slate-100 dark:hover:bg-[#0F1B35] text-slate-900 dark:text-white border border-slate-300 dark:border-white/15 flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95"
              >
                <span>Deploy Solution</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
