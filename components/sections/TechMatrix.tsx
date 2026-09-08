"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useBookingModal } from "../ModalProvider";

interface TechItem {
  name: string;
  category: string;
  iconBg: string;
  svgIcon: React.ReactNode;
}

export function TechMatrix() {
  const { openBookingModal } = useBookingModal();

  // Core production technologies directly aligned with ARCHITECTURE.md
  const technologies: TechItem[] = [
    // Row 1: Modern Frontend & Language
    {
      name: "Next.js",
      category: "Fullstack Framework",
      iconBg: "#000000",
      svgIcon: (
        <svg viewBox="0 0 180 180" className="w-5 h-5 fill-white">
          <path d="M149.508 159.43L64.225 48.006h-14.7v83.997h12.564V65.656l73.49 96.064c4.606-.723 9.07-1.776 13.929-2.29zM121.239 48.006v47.288l12.564 16.418V48.006z" />
        </svg>
      ),
    },
    {
      name: "React",
      category: "UI Architecture",
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
      category: "Type-Safe Systems",
      iconBg: "#3178c6",
      svgIcon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
          <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm11.23 15.65h-2.14v5.35H8.06v-5.35H5.915v-1.89h6.44v1.89zm4.24 5.48c-1.39 0-2.48-.48-3.08-1.42l1.63-1.04c.36.56.96.88 1.63.88.75 0 1.25-.37 1.25-.92 0-.6-.49-.83-1.63-1.22-1.61-.55-2.67-1.29-2.67-2.76 0-1.57 1.23-2.63 2.92-2.63 1.23 0 2.14.43 2.76 1.25l-1.54 1.05c-.32-.47-.77-.73-1.33-.73-.61 0-1.04.35-1.04.83 0 .5.39.72 1.54 1.12 1.76.62 2.77 1.34 2.77 2.87 0 1.74-1.35 2.77-3.21 2.77z" />
        </svg>
      ),
    },
    {
      name: "Tailwind CSS",
      category: "Design Tokens & UI",
      iconBg: "#06b6d4",
      svgIcon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-cyan-400">
          <path d="M12 6c-3.3 0-5.3 1.7-6 5 1.3-1.7 2.9-2.3 4.7-1.8 1.1.3 1.8 1.1 2.7 1.9C14.8 12.6 16.6 14 20 14c3.3 0 5.3-1.7 6-5-1.3 1.7-2.9 2.3-4.7 1.8-1.1-.3-1.8-1.1-2.7-1.9C17.2 7.4 15.4 6 12 6zM6 13c-3.3 0-5.3 1.7-6 5 1.3-1.7 2.9-2.3 4.7-1.8 1.1.3 1.8 1.1 2.7 1.9 1.4 1.5 3.2 2.9 6.6 2.9 3.3 0 5.3-1.7 6-5-1.3 1.7-2.9 2.3-4.7 1.8-1.1-.3-1.8-1.1-2.7-1.9C11.2 14.4 9.4 13 6 13z" />
        </svg>
      ),
    },

    // Row 2: Core Backend, Mobile & Database
    {
      name: "Node.js",
      category: "Runtime Engine",
      iconBg: "#215732",
      svgIcon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-emerald-500">
          <path d="M12 2L3 7.2v10.4L12 22l9-4.4V7.2L12 2zm6.7 14.7L12 20.2l-6.7-3.5V8.1L12 4.6l6.7 3.5v8.6z" />
        </svg>
      ),
    },
    {
      name: "Python",
      category: "Backend & Automation",
      iconBg: "#3776ab",
      svgIcon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-amber-400">
          <path d="M11.9 2c-3.7 0-3.5 1.6-3.5 1.6l.04 1.7h3.5v.5H4.8S2 5.5 2 9.2s2.5 3.6 2.5 3.6h1.5v-2.1s-.1-2.5 2.5-2.5h4.3s2.4.04 2.4-2.3V4.4s.3-2.4-3.3-2.4zm-1.8 1.2c.4 0 .7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7zm1.9 18.8c3.7 0 3.5-1.6 3.5-1.6l-.04-1.7H12v-.5h7.1s2.8.3 2.8-3.4-2.5-3.6-2.5-3.6h-1.5v2.1s.1 2.5-2.5 2.5h-4.3s-2.4-.04-2.4 2.3v1.5s-.3 2.4 3.3 2.4zm1.8-1.2c-.4 0-.7-.3-.7-.7s.3-.7.7-.7.7.3.7.7-.3.7-.7.7z" />
        </svg>
      ),
    },
    {
      name: "Flutter",
      category: "iOS & Android Mobile",
      iconBg: "#02569B",
      svgIcon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-sky-400">
          <path d="M14.314 0L2.3 12 6 15.7 21.686 0h-7.372zm.057 11.286L8.4 17.257l5.971 6.743h7.315l-9.315-10.514 1.999-2.2z" />
        </svg>
      ),
    },
    {
      name: "PostgreSQL",
      category: "Enterprise ACID DB",
      iconBg: "#336791",
      svgIcon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-sky-500">
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 17.9c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" />
        </svg>
      ),
    },

    // Row 3: Infrastructure, Cache & Integration
    {
      name: "Redis",
      category: "In-Memory Cache",
      iconBg: "#d82c20",
      svgIcon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-rose-600">
          <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l-9-4.5v6.5l9 4.5 9-4.5V11l-9 4.5z" />
        </svg>
      ),
    },
    {
      name: "Docker",
      category: "Containerization",
      iconBg: "#1d63ed",
      svgIcon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-blue-500">
          <path d="M13.9 11.2h2.2v2.2h-2.2v-2.2zm-3.3 0h2.2v2.2h-2.2v-2.2zm-3.3 0h2.2v2.2H7.3v-2.2zm-3.3 0h2.2v2.2H4v-2.2zm9.9-3.3h2.2v2.2h-2.2V7.9zm-3.3 0h2.2v2.2h-2.2V7.9zm-3.3 0h2.2v2.2H7.3V7.9zm6.6-3.3h2.2v2.2h-2.2V4.6zM22.5 12c-.3 0-1.5.1-2.4.7-.5-.4-1.3-.7-2.2-.7-.1 0-.3 0-.4.1-.4-1.7-1.9-3-3.6-3h-.9v3.7H1.5C.7 12.8 0 13.5 0 14.3c0 4.3 3.5 7.7 7.7 7.7 6.1 0 10.9-4 12.8-9.8.7.2 1.3.3 2 .3.3 0 .7 0 1-.1-.3-.2-.6-.4-1-.4z" />
        </svg>
      ),
    },
    {
      name: "AWS / Vercel",
      category: "Cloud & Edge Hosting",
      iconBg: "#232f3e",
      svgIcon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-slate-900 dark:fill-white">
          <path d="M12 1L24 22H0L12 1z" />
        </svg>
      ),
    },
    {
      name: "REST & Webhooks",
      category: "API Integration",
      iconBg: "#4f46e5",
      svgIcon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-indigo-400">
          <path d="M4 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm0 10a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm4-6h8v2H8v-2z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="tech-stack" className="py-20 lg:py-28 bg-slate-50 dark:bg-[#070B14] text-slate-900 dark:text-white border-t border-slate-200 dark:border-white/[0.08] relative overflow-hidden scroll-mt-20 transition-colors duration-200">
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
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
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

        {/* 4x3 Grid of Clean, Modern Technology Cards with CAD Corner Ticks */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="ticks p-5 rounded-xl bg-white dark:bg-[#0C1220]/85 border border-slate-200 dark:border-white/10 hover:border-blue-500/50 hover:bg-blue-50/40 dark:hover:bg-[#11192E] transition-all duration-200 flex flex-col justify-between group shadow-xs dark:shadow-sm hover:shadow-md cursor-default"
            >
              <span className="tk-bl"></span>
              <span className="tk-br"></span>

              {/* Top Row: Icon and category badge */}
              <div className="flex items-center justify-between mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 shadow-xs"
                  style={{ backgroundColor: tech.iconBg }}
                >
                  {tech.svgIcon}
                </div>
                <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.08] px-2 py-0.5 rounded-md">
                  {tech.category}
                </span>
              </div>

              {/* Bottom: Name & Subtitle */}
              <div>
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
