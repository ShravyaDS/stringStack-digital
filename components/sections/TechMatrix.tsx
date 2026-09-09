"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useBookingModal } from "../ModalProvider";

interface TechItem {
  name: string;
  category: string;
  group: "Frontend" | "Backend" | "Mobile" | "Database" | "Cloud" | "Integrations";
  iconBg: string;
  svgIcon: React.ReactNode;
}

const CATEGORIES = [
  { id: "all", label: "All Tools" },
  { id: "Frontend", label: "Frontend & UI" },
  { id: "Backend", label: "Backend & APIs" },
  { id: "Mobile", label: "Mobile Platforms" },
  { id: "Database", label: "Databases & Cache" },
  { id: "Cloud", label: "Cloud & DevOps" },
  { id: "Integrations", label: "Integrations & Ops" },
] as const;

export function TechMatrix() {
  const { openBookingModal } = useBookingModal();
  const [activeCategory, setActiveCategory] = useState<string>("all");

  // Core production technologies directly aligned with implementation_plan.md & ARCHITECTURE.md
  const technologies: TechItem[] = [
    // ── Frontend & UI ──
    {
      name: "Next.js 15+",
      category: "Fullstack App Router",
      group: "Frontend",
      iconBg: "#000000",
      svgIcon: (
        <svg viewBox="0 0 180 180" className="w-5 h-5 fill-white">
          <path d="M149.508 159.43L64.225 48.006h-14.7v83.997h12.564V65.656l73.49 96.064c4.606-.723 9.07-1.776 13.929-2.29zM121.239 48.006v47.288l12.564 16.418V48.006z" />
        </svg>
      ),
    },
    {
      name: "React 19",
      category: "Modern UI Architecture",
      group: "Frontend",
      iconBg: "#087ea4",
      svgIcon: (
        <svg viewBox="-11.5 -10.232 23 20.463" className="w-5 h-5 fill-cyan-400">
          <circle cx="0" cy="0" r="2.05" />
          <g stroke="#00d8ff" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      ),
    },
    {
      name: "TypeScript",
      category: "Strict Type-Safety",
      group: "Frontend",
      iconBg: "#3178c6",
      svgIcon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
          <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm11.23 15.65h-2.14v5.35H8.06v-5.35H5.915v-1.89h6.44v1.89zm4.24 5.48c-1.39 0-2.48-.48-3.08-1.42l1.63-1.04c.36.56.96.88 1.63.88.75 0 1.25-.37 1.25-.92 0-.6-.49-.83-1.63-1.22-1.61-.55-2.67-1.29-2.67-2.76 0-1.57 1.23-2.63 2.92-2.63 1.23 0 2.14.43 2.76 1.25l-1.54 1.05c-.32-.47-.77-.73-1.33-.73-.61 0-1.04.35-1.04.83 0 .5.39.72 1.54 1.12 1.76.62 2.77 1.34 2.77 2.87 0 1.74-1.35 2.77-3.21 2.77z" />
        </svg>
      ),
    },
    {
      name: "Tailwind CSS v4",
      category: "Design Tokens & Engine",
      group: "Frontend",
      iconBg: "#06b6d4",
      svgIcon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-cyan-400">
          <path d="M12 6c-3.3 0-5.3 1.7-6 5 1.3-1.7 2.9-2.3 4.7-1.8 1.1.3 1.8 1.1 2.7 1.9C14.8 12.6 16.6 14 20 14c3.3 0 5.3-1.7 6-5-1.3 1.7-2.9 2.3-4.7 1.8-1.1-.3-1.8-1.1-2.7-1.9C17.2 7.4 15.4 6 12 6zM6 13c-3.3 0-5.3 1.7-6 5 1.3-1.7 2.9-2.3 4.7-1.8 1.1.3 1.8 1.1 2.7 1.9 1.4 1.5 3.2 2.9 6.6 2.9 3.3 0 5.3-1.7 6-5-1.3 1.7-2.9 2.3-4.7 1.8-1.1-.3-1.8-1.1-2.7-1.9C11.2 14.4 9.4 13 6 13z" />
        </svg>
      ),
    },
    {
      name: "Shadcn UI",
      category: "Composable UI Primitives",
      group: "Frontend",
      iconBg: "#18181b",
      svgIcon: (
        <svg viewBox="0 0 256 256" className="w-5 h-5 stroke-white fill-none stroke-[16]">
          <line x1="208" y1="128" x2="128" y2="208" />
          <line x1="192" y1="40" x2="40" y2="192" />
        </svg>
      ),
    },

    // ── Backend & APIs ──
    {
      name: "Node.js",
      category: "Async Runtime Engine",
      group: "Backend",
      iconBg: "#215732",
      svgIcon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-emerald-500">
          <path d="M12 2L3 7.2v10.4L12 22l9-4.4V7.2L12 2zm6.7 14.7L12 20.2l-6.7-3.5V8.1L12 4.6l6.7 3.5v8.6z" />
        </svg>
      ),
    },
    {
      name: "NestJS",
      category: "Enterprise Microservices",
      group: "Backend",
      iconBg: "#ea2845",
      svgIcon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
          <path d="M12 2L2 7l10 5 10-5-10-5zm0 9L4 7.5v9l8 4.5 8-4.5v-9L12 11z" />
        </svg>
      ),
    },
    {
      name: "Python / FastAPI",
      category: "Async Pipelines & APIs",
      group: "Backend",
      iconBg: "#3776ab",
      svgIcon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-amber-400">
          <path d="M11.9 2c-3.7 0-3.5 1.6-3.5 1.6l.04 1.7h3.5v.5H4.8S2 5.5 2 9.2s2.5 3.6 2.5 3.6h1.5v-2.1s-.1-2.5 2.5-2.5h4.3s2.4.04 2.4-2.3V4.4s.3-2.4-3.3-2.4zm-1.8 1.2c.4 0 .7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7zm1.9 18.8c3.7 0 3.5-1.6 3.5-1.6l-.04-1.7H12v-.5h7.1s2.8.3 2.8-3.4-2.5-3.6-2.5-3.6h-1.5v2.1s.1 2.5-2.5 2.5h-4.3s-2.4-.04-2.4 2.3v1.5s-.3 2.4 3.3 2.4zm1.8-1.2c-.4 0-.7-.3-.7-.7s.3-.7.7-.7.7.3.7.7-.3.7-.7.7z" />
        </svg>
      ),
    },
    {
      name: "REST & Webhooks",
      category: "Event-Driven Integration",
      group: "Backend",
      iconBg: "#4f46e5",
      svgIcon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-indigo-400">
          <path d="M4 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm0 10a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm4-6h8v2H8v-2z" />
        </svg>
      ),
    },
    {
      name: "GraphQL",
      category: "Typed Schema Queries",
      group: "Backend",
      iconBg: "#e535ab",
      svgIcon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
          <path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2zm0 2.31L5.34 8.15v7.7L12 19.69l6.66-3.84v-7.7L12 4.31z" />
        </svg>
      ),
    },

    // ── Mobile Platforms ──
    {
      name: "Flutter",
      category: "High-Velocity Cross-Platform",
      group: "Mobile",
      iconBg: "#02569B",
      svgIcon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-sky-400">
          <path d="M14.314 0L2.3 12 6 15.7 21.686 0h-7.372zm.057 11.286L8.4 17.257l5.971 6.743h7.315l-9.315-10.514 1.999-2.2z" />
        </svg>
      ),
    },
    {
      name: "React Native",
      category: "Native Fabric Architecture",
      group: "Mobile",
      iconBg: "#161b22",
      svgIcon: (
        <svg viewBox="-11.5 -10.232 23 20.463" className="w-5 h-5 fill-cyan-400">
          <circle cx="0" cy="0" r="2.05" />
          <g stroke="#00d8ff" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      ),
    },
    {
      name: "Swift (iOS)",
      category: "Native Apple SDKs",
      group: "Mobile",
      iconBg: "#fa7343",
      svgIcon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
          <path d="M21.5 16.5c-.3.4-.8.8-1.3 1.2-1.9 1.4-4.5 2.1-7.2 1.6 3.1-1.3 5.4-3.7 6.3-6.8-1.5 1.5-3.4 2.4-5.3 2.7-3.1.5-6.2-.7-8.1-3.2-1.4-1.8-2.1-4-2.1-6.4 0-.6.1-1.2.2-1.8.8 2.1 2.2 3.9 4 5.1 2.6 1.8 5.8 2.3 8.8 1.4-1.5-.7-2.8-1.8-3.7-3.2-1.3-2-1.7-4.4-1.2-6.8 1.8 2.6 4.6 4.3 7.7 4.7 1.3.2 2.6.1 3.8-.3-1.1 1.2-2.4 2.1-3.9 2.7 4.1 2.1 8 4.7 12 9.2z" />
        </svg>
      ),
    },
    {
      name: "Kotlin (Android)",
      category: "Native Coroutines & Jetpack",
      group: "Mobile",
      iconBg: "#7f52ff",
      svgIcon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
          <path d="M24 24H0V0h24L12 12Z" />
        </svg>
      ),
    },

    // ── Databases & Persistence ──
    {
      name: "PostgreSQL",
      category: "ACID Relational & Supabase",
      group: "Database",
      iconBg: "#336791",
      svgIcon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-sky-500">
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 17.9c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" />
        </svg>
      ),
    },
    {
      name: "Redis",
      category: "In-Memory Microsecond Cache",
      group: "Database",
      iconBg: "#d82c20",
      svgIcon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-rose-600">
          <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l-9-4.5v6.5l9 4.5 9-4.5V11l-9 4.5z" />
        </svg>
      ),
    },
    {
      name: "MongoDB",
      category: "NoSQL Document Storage",
      group: "Database",
      iconBg: "#13aa52",
      svgIcon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
          <path d="M12 1.5s-6 5.5-6 11.5c0 4.5 3 7.5 6 9 3-1.5 6-4.5 6-9 0-6-6-11.5-6-11.5z" />
        </svg>
      ),
    },
    {
      name: "MySQL",
      category: "High-Availability Clustering",
      group: "Database",
      iconBg: "#00758f",
      svgIcon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-amber-300">
          <path d="M12 3c-4.97 0-9 1.79-9 4v10c0 2.21 4.03 4 9 4s9-1.79 9-4V7c0-2.21-4.03-4-9-4zm0 2c3.87 0 7 1.34 7 3s-3.13 3-7 3-7-1.34-7-3 3.13-3 7-3zm0 14c-3.87 0-7-1.34-7-3v-2.23c1.61.78 4.14 1.23 7 1.23s5.39-.45 7-1.23V16c0 1.66-3.13 3-7 3z" />
        </svg>
      ),
    },

    // ── Cloud & DevOps ──
    {
      name: "Vercel",
      category: "Sub-Second Global Edge",
      group: "Cloud",
      iconBg: "#000000",
      svgIcon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
          <path d="M12 1L24 22H0L12 1z" />
        </svg>
      ),
    },
    {
      name: "AWS Cloud",
      category: "Multi-Region Enterprise Infra",
      group: "Cloud",
      iconBg: "#232f3e",
      svgIcon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-amber-500">
          <path d="M6.5 14.5c-1.4 0-2.5-.8-2.5-2.2 0-1.7 1.4-2.4 3.9-2.6l1.8-.1v-.5c0-.8-.5-1.3-1.6-1.3-.9 0-1.6.4-1.8 1.1l-1.6-.7c.5-1.4 1.9-2 3.5-2 2.2 0 3.3 1.1 3.3 3v4.6H10v-1.1c-.6.8-1.7 1.2-2.8 1.2h-.7zM18.8 16c-3.5 2.1-8 3-12.4 1.8-.6-.2-1.2.3-.9.9 3.8 2.8 9.5 2.8 14.3-.2.5-.3.2-1-.4-.9l-.6-1.6z" />
        </svg>
      ),
    },
    {
      name: "Docker",
      category: "Containerized Orchestration",
      group: "Cloud",
      iconBg: "#1d63ed",
      svgIcon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
          <path d="M13.9 11.2h2.2v2.2h-2.2v-2.2zm-3.3 0h2.2v2.2h-2.2v-2.2zm-3.3 0h2.2v2.2H7.3v-2.2zm-3.3 0h2.2v2.2H4v-2.2zm9.9-3.3h2.2v2.2h-2.2V7.9zm-3.3 0h2.2v2.2h-2.2V7.9zm-3.3 0h2.2v2.2H7.3V7.9zm6.6-3.3h2.2v2.2h-2.2V4.6zM22.5 12c-.3 0-1.5.1-2.4.7-.5-.4-1.3-.7-2.2-.7-.1 0-.3 0-.4.1-.4-1.7-1.9-3-3.6-3h-.9v3.7H1.5C.7 12.8 0 13.5 0 14.3c0 4.3 3.5 7.7 7.7 7.7 6.1 0 10.9-4 12.8-9.8.7.2 1.3.3 2 .3.3 0 .7 0 1-.1-.3-.2-.6-.4-1-.4z" />
        </svg>
      ),
    },
    {
      name: "GitHub Actions",
      category: "Zero-Downtime CI/CD",
      group: "Cloud",
      iconBg: "#24292e",
      svgIcon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
          <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.3-3.2-.1-.3-.6-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.2 2.9.1 3.2.8.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3" />
        </svg>
      ),
    },

    // ── Integrations & Ops ──
    {
      name: "Cal.com",
      category: "Scheduling & Booking Engine",
      group: "Integrations",
      iconBg: "#292929",
      svgIcon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
          <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5v-5z" />
        </svg>
      ),
    },
    {
      name: "Resend",
      category: "Transactional Email API",
      group: "Integrations",
      iconBg: "#000000",
      svgIcon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
        </svg>
      ),
    },
    {
      name: "Slack Webhooks",
      category: "Real-Time Incident & Lead Ops",
      group: "Integrations",
      iconBg: "#4a154b",
      svgIcon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
          <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z" />
        </svg>
      ),
    },
    {
      name: "Sentry",
      category: "Application Error Telemetry",
      group: "Integrations",
      iconBg: "#362d59",
      svgIcon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-rose-400">
          <path d="M12 2L1 21h22L12 2zm0 3.8l7.5 13.2H4.5L12 5.8zM11 10v4h2v-4h-2zm0 6v2h2v-2h-2z" />
        </svg>
      ),
    },
  ];

  const filteredTechnologies =
    activeCategory === "all"
      ? technologies
      : technologies.filter((t) => t.group === activeCategory);

  return (
    <section
      id="tech-stack"
      className="py-20 lg:py-28 bg-slate-50 dark:bg-[#070B14] text-slate-900 dark:text-white border-t border-slate-200 dark:border-white/[0.08] relative overflow-hidden scroll-mt-20 transition-colors duration-200"
    >
      {/* Animated Tech Stack Architectural Infrastructure Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="relative w-full h-full animate-slow-drift">
          <Image
            src="/images/tech-stack/tech-stack-bg.jpg"
            alt="Tech Stack Infrastructure Grid"
            fill
            className="object-cover object-center opacity-[0.05] dark:opacity-[0.10] mix-blend-luminosity"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-transparent to-slate-50 dark:from-[#070B14] dark:via-transparent dark:to-[#070B14]" />
      </div>

      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[350px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none animate-aura-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 tracking-widest uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              04 — TECHNICAL FOUNDATION
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Modern Tools.{" "}
              <span className="text-blue-600 dark:text-blue-500">Proven Results.</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              We build with battle-tested frameworks, cloud infrastructure, and modern databases that guarantee speed, high security, and zero proprietary lock-in.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={openBookingModal}
              className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold border border-slate-300 dark:border-white/20 bg-white dark:bg-white/[0.05] hover:bg-slate-100 dark:hover:bg-white/[0.1] text-slate-900 dark:text-white transition-all cursor-pointer shadow-xs active:scale-95"
            >
              <span>Explore Architecture & Stack</span>
            </button>
          </div>
        </div>

        {/* Interactive Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-8 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                    : "bg-white/80 dark:bg-white/[0.05] border border-slate-200/80 dark:border-white/[0.08] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-white/10"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Responsive Grid of Clean, Modern Aesthetic Technology Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {filteredTechnologies.map((tech) => (
            <div
              key={tech.name}
              className="group p-5 rounded-2xl bg-white/90 dark:bg-[#0C1220]/80 backdrop-blur-md border border-slate-200/80 dark:border-white/[0.07] hover:border-blue-500/40 hover:bg-white dark:hover:bg-[#11192E] transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 cursor-default relative overflow-hidden"
            >
              {/* Soft ambient corner glow on hover */}
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-blue-500/10 rounded-full blur-xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />

              {/* Top Row: Icon and category badge */}
              <div className="relative z-10 flex items-center justify-between mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 shadow-xs"
                  style={{ backgroundColor: tech.iconBg }}
                >
                  {tech.svgIcon}
                </div>
                <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-white/[0.05] border border-slate-200/60 dark:border-white/[0.08] px-2.5 py-0.5 rounded-full">
                  {tech.category}
                </span>
              </div>

              {/* Bottom: Name & Subtitle */}
              <div className="relative z-10">
                <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {tech.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

