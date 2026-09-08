"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Layers,
  Cpu,
  Smartphone,
  ShieldCheck,
  CheckCircle2,
  FileCode2,
  Check,
  Zap,
  Shield,
  Code2,
  Globe,
  Calendar,
  ArrowRight,
  Target,
  Users,
  Rocket,
  Database,
  Cloud,
  Terminal,
} from "lucide-react";
import { useBookingModal } from "../ModalProvider";

export function SprintCalculator() {
  const { openBookingModal } = useBookingModal();

  const [projectType, setProjectType] = useState<"web" | "mobile" | "erp" | "crm" | "whitelabel">("web");
  const [scale, setScale] = useState<"startup" | "growth" | "enterprise">("growth");
  const [selectedIntegrations, setSelectedIntegrations] = useState<string[]>([
    "auth-rbac",
    "db-postgres",
    "edge-cdn",
  ]);

  // Live update animation trigger
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    setIsUpdating(true);
    const timer = setTimeout(() => setIsUpdating(false), 200);
    return () => clearTimeout(timer);
  }, [projectType, scale, selectedIntegrations]);

  const toggleIntegration = (id: string) => {
    setSelectedIntegrations((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const projectTypes = [
    { id: "web", name: "Custom Web App / SaaS", icon: <Layers className="w-4 h-4" />, baseSprints: 3 },
    { id: "mobile", name: "Mobile App (iOS & Android)", icon: <Smartphone className="w-4 h-4" />, baseSprints: 3 },
    { id: "erp", name: "Workforce & Attendance ERP", icon: <ShieldCheck className="w-4 h-4" />, baseSprints: 4 },
    { id: "crm", name: "Custom CRM & Lead Portal", icon: <Cpu className="w-4 h-4" />, baseSprints: 3 },
    { id: "whitelabel", name: "Dedicated Developer Squad", icon: <FileCode2 className="w-4 h-4" />, baseSprints: 2 },
  ];

  const scaleOptions = [
    { id: "startup", name: "Startup MVP", users: "< 2,500 Users", multiplier: 1, sla: "99.9% SLA" },
    { id: "growth", name: "Growing Business", users: "2,500 – 50,000 Users", multiplier: 1.2, sla: "99.95% SLA" },
    { id: "enterprise", name: "Enterprise Scale", users: "50,000+ Users", multiplier: 1.5, sla: "99.99% SLA" },
  ];

  const integrationList = [
    { id: "auth-rbac", name: "User Logins & Permissions", desc: "Role-based access & SSO" },
    { id: "db-postgres", name: "Database & Cache", desc: "Fast, reliable data storage" },
    { id: "edge-cdn", name: "Cloud Hosting & Fast CDN", desc: "Global speed & 99.9% uptime" },
    { id: "biometrics", name: "Biometric & Hardware Sync", desc: "Fingerprint & scanner integration" },
    { id: "payments", name: "Payment Gateway", desc: "Stripe, Apple Pay & credit cards" },
    { id: "websockets", name: "Live Chat & Real-Time Alerts", desc: "Instant push notifications" },
  ];

  const selectedProj = projectTypes.find((p) => p.id === projectType) || projectTypes[0];
  const selectedScaleObj = scaleOptions.find((s) => s.id === scale) || scaleOptions[1];

  const extraIntegrations = Math.max(0, selectedIntegrations.length - 3);
  const estimatedSprints = Math.max(
    2,
    Math.round(selectedProj.baseSprints * (selectedScaleObj.multiplier > 1.2 ? 1.3 : 1) + extraIntegrations * 0.5)
  );
  const estimatedDays = estimatedSprints * 7;

  const sectionRef = useRef<HTMLElement>(null);
  const [hasEnteredView, setHasEnteredView] = useState(false);
  const [isSectionInView, setIsSectionInView] = useState(false);
  const [displaySprints, setDisplaySprints] = useState(0);
  const [displayDays, setDisplayDays] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setHasEnteredView(true);
      setIsSectionInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSectionInView(entry.isIntersecting);
        if (entry.isIntersecting && !hasEnteredView) {
          setHasEnteredView(true);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasEnteredView]);

  useEffect(() => {
    if (!hasEnteredView) return;
    const duration = 700;
    const startTime = performance.now();

    let animId: number;
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setDisplaySprints(Math.max(1, Math.round(estimatedSprints * ease)));
      setDisplayDays(Math.max(1, Math.round(estimatedDays * ease)));
      if (progress < 1) {
        animId = requestAnimationFrame(step);
      }
    };
    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [hasEnteredView, estimatedSprints, estimatedDays]);

  const stackRecommendations: Record<string, string[]> = {
    web: ["Next.js 15 App Router", "React 19 Server Actions", "PostgreSQL", "Tailwind CSS", "Redis"],
    mobile: ["Flutter 3.x", "Dart", "SQLite Local-First", "Apple FaceID / Biometric", "Node.js API"],
    erp: ["PostgreSQL Multi-Tenant", "ZKTeco Biometric API", "Next.js 15", "NestJS Microservices", "Redis"],
    crm: ["FastAPI Python", "PostgreSQL", "WhatsApp Cloud API", "Next.js App Router", "Kafka"],
    whitelabel: ["Dedicated Principal Architect", "2x Senior Full-Stack", "1x Flutter Engineer", "1x QA Lead"],
  };

  const topFeatures = [
    {
      icon: <Zap className="w-4 h-4 text-blue-400" />,
      title: "Fast & Accurate",
      desc: "Get estimates in seconds with real project data.",
    },
    {
      icon: <Shield className="w-4 h-4 text-blue-400" />,
      title: "Transparent Process",
      desc: "See the stack, sprints and deliverables upfront.",
    },
    {
      icon: <Code2 className="w-4 h-4 text-blue-400" />,
      title: "Expert Guidance",
      desc: "Built by senior engineers with real-world experience.",
    },
    {
      icon: <Globe className="w-4 h-4 text-blue-400" />,
      title: "Global Delivery",
      desc: "Teams across US, UK, UAE, Singapore and beyond.",
    },
  ];

  const whyPillars = [
    {
      icon: <Target className="w-5 h-5 text-blue-500" />,
      title: "Fixed Sprints",
      desc: "Predictable timelines. No scope creep.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-blue-500" />,
      title: "Enterprise Grade",
      desc: "Secure, scalable, and compliant solutions.",
    },
    {
      icon: <Users className="w-5 h-5 text-blue-500" />,
      title: "Expert Teams",
      desc: "Senior engineers with domain experience.",
    },
    {
      icon: <Rocket className="w-5 h-5 text-blue-500" />,
      title: "Real Business Impact",
      desc: "Software that drives measurable growth.",
    },
  ];

  return (
    <section id="estimator" ref={sectionRef} className="py-24 lg:py-32 bg-slate-50 dark:bg-[#070B14] text-slate-900 dark:text-white border-t border-slate-200 dark:border-white/[0.08] relative overflow-hidden scroll-mt-20 transition-colors duration-200">
      {/* Background Architectural Blueprint with slow drift */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="relative w-full h-full animate-slow-drift">
          <Image
            src="/images/delivery-blueprint-bg.jpg"
            alt="Sprint Estimation Architecture"
            fill
            className="object-cover object-center opacity-[0.04] dark:opacity-[0.08] mix-blend-luminosity"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/70 via-transparent to-slate-50 dark:from-[#070B14]/80 dark:via-transparent dark:to-[#070B14]" />
      </div>

      {/* Floating Animated Luminous Ambient Orb */}
      <div className="absolute top-1/3 right-1/4 w-[700px] h-[400px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none animate-aura-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* ── TOP SECTION HEADER + 4 FEATURE CARDS (matching photo) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Heading and Subtitle */}
          <div className="lg:col-span-6 space-y-3">
            <span className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase">
              // TECH STACK
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] leading-tight text-slate-900 dark:text-white">
              Plan Your Project.<br />
              Get a <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 dark:from-blue-400 dark:via-cyan-400 dark:to-indigo-400 bg-clip-text text-transparent">Sprint Estimate.</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
              Choose your technology stack and project requirements to get an instant estimate of sprint milestones, delivery timelines, and recommended stack.
            </p>
          </div>

          {/* Right: 4 Horizontal Quick Value Cards */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {topFeatures.map((f) => (
              <div
                key={f.title}
                className="p-3 sm:p-3.5 rounded-xl bg-white dark:bg-[#0D1424] border border-slate-200 dark:border-white/10 flex flex-col justify-between shadow-xs"
              >
                <div className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-white/[0.06] border border-blue-200 dark:border-white/10 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-2">
                  {f.icon}
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-900 dark:text-white leading-snug mb-1">
                    {f.title}
                  </h3>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* ── MAIN ESTIMATOR WORKSTATION CARD (matching photo) ── */}
        <div className="rounded-3xl bg-white dark:bg-[#0A101D] border border-slate-200 dark:border-blue-500/20 shadow-2xl p-5 sm:p-8 lg:p-10 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

            {/* ══════════════════════════════════════════════════════════
                LEFT: 3-STEP CONFIGURATOR (7 cols)
                ══════════════════════════════════════════════════════════ */}
            <div className="lg:col-span-7 space-y-7">
              
              {/* Step 1: Software Category */}
              <div className="space-y-3.5">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center shrink-0 shadow-md shadow-blue-500/30">
                    1
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
                      Select target software category
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      Choose the primary system you&apos;re building
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {projectTypes.slice(0, 4).map((p) => {
                    const isSelected = projectType === p.id;
                    return (
                      <button
                        key={p.id}
                        onClick={() => setProjectType(p.id as any)}
                        className={`p-3.5 rounded-xl text-left flex items-center justify-between gap-3 transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? "bg-blue-50/80 dark:bg-[#131D31] border-2 border-blue-600 dark:border-blue-500 text-slate-900 dark:text-white shadow-[0_0_16px_rgba(37,99,235,0.15)]"
                            : "bg-slate-50/80 dark:bg-[#0E1526] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-white/20"
                        }`}
                      >
                        <div className="flex items-center gap-2.5 truncate">
                          <div className={`p-1.5 rounded-lg shrink-0 ${isSelected ? "bg-blue-600 text-white" : "bg-slate-200/70 dark:bg-white/[0.06] text-slate-600 dark:text-slate-400"}`}>
                            {p.icon}
                          </div>
                          <span className="text-xs sm:text-sm font-semibold truncate">{p.name}</span>
                        </div>

                        <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 transition-all ${
                          isSelected ? "bg-blue-600 text-white" : "border border-slate-300 dark:border-white/20 bg-transparent"
                        }`}>
                          {isSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                        </div>
                      </button>
                    );
                  })}

                  {/* 5th Option: Dedicated Squad spans 2 cols or full row */}
                  {projectTypes.slice(4).map((p) => {
                    const isSelected = projectType === p.id;
                    return (
                      <button
                        key={p.id}
                        onClick={() => setProjectType(p.id as any)}
                        className={`sm:col-span-2 p-3.5 rounded-xl text-left flex items-center justify-between gap-3 transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? "bg-blue-50/80 dark:bg-[#131D31] border-2 border-blue-600 dark:border-blue-500 text-slate-900 dark:text-white shadow-[0_0_16px_rgba(37,99,235,0.15)]"
                            : "bg-slate-50/80 dark:bg-[#0E1526] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-white/20"
                        }`}
                      >
                        <div className="flex items-center gap-2.5 truncate">
                          <div className={`p-1.5 rounded-lg shrink-0 ${isSelected ? "bg-blue-600 text-white" : "bg-slate-200/70 dark:bg-white/[0.06] text-slate-600 dark:text-slate-400"}`}>
                            {p.icon}
                          </div>
                          <span className="text-xs sm:text-sm font-semibold truncate">{p.name}</span>
                        </div>

                        <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 transition-all ${
                          isSelected ? "bg-blue-600 text-white" : "border border-slate-300 dark:border-white/20 bg-transparent"
                        }`}>
                          {isSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Infrastructure Scale */}
              <div className="space-y-3.5">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center shrink-0 shadow-md shadow-blue-500/30">
                    2
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
                      Select infrastructure scale
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      Pick expected scale to size the SLA
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {scaleOptions.map((s) => {
                    const isSelected = scale === s.id;
                    return (
                      <button
                        key={s.id}
                        onClick={() => setScale(s.id as any)}
                        className={`p-3.5 rounded-xl text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? "bg-blue-50/80 dark:bg-[#131D31] border-2 border-blue-600 dark:border-blue-500 shadow-[0_0_16px_rgba(37,99,235,0.15)]"
                            : "bg-slate-50/80 dark:bg-[#0E1526] border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20"
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between gap-1 mb-1">
                            <div className="text-xs font-bold text-slate-900 dark:text-white">{s.name}</div>
                            <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 transition-all ${
                              isSelected ? "bg-blue-600 text-white" : "border border-slate-300 dark:border-white/20 bg-transparent"
                            }`}>
                              {isSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                            </div>
                          </div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400">{s.users}</div>
                        </div>

                        <div className="text-[11px] text-slate-500 dark:text-slate-400 font-mono font-medium pt-2 mt-2 border-t border-slate-200 dark:border-white/10">
                          {s.sla}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Enterprise Integrations */}
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center shrink-0 shadow-md shadow-blue-500/30">
                      3
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
                        Select enterprise integrations
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        Select the integrations this build needs
                      </p>
                    </div>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/30">
                    {selectedIntegrations.length} Selected
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {integrationList.map((item) => {
                    const isSelected = selectedIntegrations.includes(item.id);
                    return (
                      <button
                        key={item.id}
                        onClick={() => toggleIntegration(item.id)}
                        className={`p-3 rounded-xl text-left flex items-start justify-between gap-2.5 transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? "bg-blue-50/80 dark:bg-[#131D31] border-2 border-blue-600 dark:border-blue-500 shadow-[0_0_16px_rgba(37,99,235,0.15)]"
                            : "bg-slate-50/80 dark:bg-[#0E1526] border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20"
                        }`}
                      >
                        <div>
                          <div className="text-xs font-semibold text-slate-900 dark:text-white">{item.name}</div>
                          <div className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">{item.desc}</div>
                        </div>

                        <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                          isSelected ? "bg-blue-600 text-white" : "border border-slate-300 dark:border-white/20 bg-transparent"
                        }`}>
                          {isSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Bottom Assistance Link */}
                <div className="pt-1">
                  <button
                    onClick={openBookingModal}
                    className="inline-flex items-center gap-1.5 text-xs text-blue-600 dark:text-blue-400 hover:underline cursor-pointer font-medium"
                  >
                    <span>Need a custom setup? Talk to our experts</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>

            {/* ══════════════════════════════════════════════════════════
                RIGHT: COMPUTED SCOPE OUTPUT + 3D ISOMETRIC STACK (5 cols)
                ══════════════════════════════════════════════════════════ */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Output Container Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-slate-50 dark:bg-[#0D1527] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white space-y-5 shadow-xl">
                
                {/* Header Row */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-white/10">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                    COMPUTED SCOPE OUTPUT
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/30">
                    Guaranteed SLA
                  </span>
                </div>

                {/* Metrics Grid */}
                <div
                  className={`grid grid-cols-2 gap-3 transition-all duration-200 ${
                    isUpdating ? "opacity-60 scale-[0.99]" : "opacity-100 scale-100"
                  }`}
                >
                  <div className="p-4 rounded-xl bg-white dark:bg-[#080E1C] border border-slate-200 dark:border-white/10 space-y-1">
                    <div className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 text-xs">
                      <Zap className="w-3.5 h-3.5 fill-blue-500" />
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Estimated Cadence</span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-white flex items-baseline gap-1 font-mono">
                      {hasEnteredView ? displaySprints : estimatedSprints}{" "}
                      <span className="text-xs font-normal text-slate-500 dark:text-slate-400 font-sans">Sprints</span>
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">1–2 week cycles</div>
                  </div>

                  <div className="p-4 rounded-xl bg-white dark:bg-[#080E1C] border border-slate-200 dark:border-white/10 space-y-1">
                    <div className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 text-xs">
                      <Calendar className="w-3.5 h-3.5" />
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Target Delivery</span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white flex items-baseline gap-1 font-mono">
                      ~{hasEnteredView ? displayDays : estimatedDays}{" "}
                      <span className="text-xs font-normal text-slate-500 dark:text-slate-400 font-sans">Days</span>
                    </div>
                    <div className="text-[11px] text-blue-600 dark:text-blue-400 font-medium font-mono">Production Ready</div>
                  </div>
                </div>

                {/* Recommended Architecture Pills */}
                <div
                  className={`space-y-2 transition-all duration-200 ${
                    isUpdating ? "opacity-60" : "opacity-100"
                  }`}
                >
                  <span className="text-[11px] font-mono font-semibold uppercase text-slate-500 dark:text-slate-400 block tracking-wider">
                    RECOMMENDED ARCHITECTURE:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {stackRecommendations[projectType]?.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white dark:bg-white/[0.06] border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Guarantees Checklist */}
                <div className="p-3.5 rounded-xl bg-white dark:bg-[#080E1C] border border-slate-200 dark:border-white/10 space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400">100% Unencumbered IP Transfer on Day 1</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Direct senior engineer access (Slack &amp; GitHub)</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Weekly live milestone preview builds</span>
                  </div>
                </div>

                {/* Primary CTA Button (matching gradient in photo) */}
                <button
                  onClick={openBookingModal}
                  className="w-full py-3.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-600/35 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  <span>Lock In This Sprint Plan &amp; Scope</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="text-center text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                  Formal SOW &amp; Architectural Blueprint provided within 24h.
                </div>
              </div>

              {/* ── 3D ISOMETRIC ARCHITECTURE STACK VISUAL (matching photo) ── */}
              <div className="relative p-6 rounded-2xl bg-slate-50 dark:bg-[#080E1C] border border-slate-200 dark:border-white/10 overflow-hidden flex flex-col items-center justify-center select-none">
                
                {/* Background glow beneath pedestal */}
                <div className="absolute bottom-4 w-48 h-20 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />

                {/* Isometric SVG Stack matching Figma photo */}
                <svg viewBox="0 0 400 320" className="w-full max-w-[340px] h-auto drop-shadow-2xl">
                  <defs>
                    <linearGradient id="gradPlatform" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#2563EB" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.9" />
                    </linearGradient>
                    <linearGradient id="gradCyanPedestal" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#0284C7" stopOpacity="0.4" />
                    </linearGradient>
                    <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1E293B" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#0F172A" stopOpacity="0.9" />
                    </linearGradient>
                  </defs>

                  {/* Circuit Grid Lines */}
                  <path d="M 60 220 L 200 290 L 340 220 L 200 150 Z" fill="none" stroke="#38BDF8" strokeWidth="1" opacity="0.25" strokeDasharray="4 4" />
                  <line x1="200" y1="50" x2="200" y2="250" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.4" />

                  {/* Base Glowing Pedestal (Bottom) */}
                  <g transform="translate(140, 210)">
                    {/* Glowing cube base */}
                    <polygon points="60,30 120,60 60,90 0,60" fill="url(#gradCyanPedestal)" opacity="0.85" />
                    <polygon points="0,60 60,90 60,110 0,80" fill="#0284C7" opacity="0.9" />
                    <polygon points="60,90 120,60 120,80 60,110" fill="#0369A1" opacity="0.9" />
                    {/* Top bright cap */}
                    <polygon points="60,20 110,45 60,70 10,45" fill="#38BDF8" opacity="0.9" />
                  </g>

                  {/* Layer 4: Cloud (Bottom Layer) */}
                  <g transform="translate(230, 165)">
                    <polygon points="60,0 120,30 60,60 0,30" fill="url(#cardGrad)" stroke="#38BDF8" strokeWidth="1.5" />
                    <circle cx="28" cy="30" r="5" fill="#38BDF8" />
                    <text x="40" y="34" fill="#FFFFFF" fontSize="12" fontWeight="bold" fontFamily="monospace">Cloud</text>
                  </g>

                  {/* Layer 3: Database */}
                  <g transform="translate(210, 115)">
                    <polygon points="60,0 120,30 60,60 0,30" fill="url(#cardGrad)" stroke="#60A5FA" strokeWidth="1.5" />
                    <circle cx="24" cy="30" r="5" fill="#60A5FA" />
                    <text x="36" y="34" fill="#FFFFFF" fontSize="12" fontWeight="bold" fontFamily="monospace">Database</text>
                  </g>

                  {/* Layer 2: Backend */}
                  <g transform="translate(150, 75)">
                    <polygon points="60,0 120,30 60,60 0,30" fill="url(#cardGrad)" stroke="#818CF8" strokeWidth="1.5" />
                    <circle cx="26" cy="30" r="5" fill="#818CF8" />
                    <text x="38" y="34" fill="#FFFFFF" fontSize="12" fontWeight="bold" fontFamily="monospace">Backend</text>
                  </g>

                  {/* Layer 1: Frontend (Top Layer) */}
                  <g transform="translate(70, 35)">
                    <polygon points="60,0 120,30 60,60 0,30" fill="url(#cardGrad)" stroke="#38BDF8" strokeWidth="2" />
                    <circle cx="24" cy="30" r="5" fill="#38BDF8" />
                    <text x="36" y="34" fill="#FFFFFF" fontSize="13" fontWeight="bold" fontFamily="monospace">Frontend</text>
                  </g>

                  {/* Glowing Pulse Node on Top */}
                  <circle cx="130" cy="65" r="4" fill="#38BDF8">
                    <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="210" cy="105" r="3" fill="#818CF8" />
                  <circle cx="270" cy="145" r="3" fill="#60A5FA" />
                  <circle cx="290" cy="195" r="3" fill="#38BDF8" />
                </svg>

                <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 mt-2 text-center">
                  Full-Stack Architecture Stack • ISO &amp; SOC2 Tiered
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* ── BOTTOM BANNER: "WHY SPRINTSTACK" (matching photo) ── */}
        <div className="pt-6 pb-2 border-t border-slate-200 dark:border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Headline */}
            <div className="lg:col-span-4 space-y-1.5">
              <span className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase">
                // WHY SPRINTSTACK
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-[-0.03em] leading-tight text-slate-900 dark:text-white">
                More Than Code.<br />
                <span className="text-blue-600 dark:text-blue-500">A Delivery Partnership.</span>
              </h3>
            </div>

            {/* Right 4 Value Pillars */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4">
              {whyPillars.map((p) => (
                <div key={p.title} className="space-y-1.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-white/[0.06] border border-blue-200 dark:border-white/10 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-2">
                    {p.icon}
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-tight">
                    {p.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>

      {/* ── Mobile Sticky Summary Bar ── */}
      <div
        className={`lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 dark:bg-[#090D16]/95 backdrop-blur-md border-t border-slate-200 dark:border-white/[0.08] px-4 py-3 shadow-2xl flex items-center justify-between gap-3 pb-safe transition-all duration-300 ${
          isSectionInView
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div>
          <div className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Estimated Scope
          </div>
          <div className="text-sm font-bold text-slate-900 dark:text-white flex items-baseline gap-1.5 font-mono">
            <span>{estimatedSprints} Sprints</span>
            <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">(~{estimatedDays} Days)</span>
          </div>
        </div>

        <button
          onClick={openBookingModal}
          className="btn-primary px-4 py-2 text-xs font-semibold cursor-pointer active:scale-95"
        >
          Lock In Scope
        </button>
      </div>
    </section>
  );
}
