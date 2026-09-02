"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Fingerprint,
  BarChart3,
  Users,
  Activity,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { ENTERPRISE_SOLUTIONS } from "@/lib/constants";
import { useBookingModal } from "../ModalProvider";

const PRODUCT_IMAGES = [
  {
    src: "/images/products/attendance-erp.jpg",
    alt: "Attendance & Workforce Management ERP Dashboard",
    caption: "Enterprise Workforce OS • Live GPS Geofence & Biometric Sync",
  },
  {
    src: "/images/products/project-governance.jpg",
    alt: "Project Management & Resource Governance Dashboard",
    caption: "Portfolio Governance • Milestone Gantt & Capacity Heatmaps",
  },
  {
    src: "/images/products/custom-crm.jpg",
    alt: "Custom CRM & Lead Operations Engine",
    caption: "LeadFlow Ops • WhatsApp & Multi-Channel Deal Pipeline",
  },
  {
    src: "/images/products/process-automation.jpg",
    alt: "Business Process Automation & Telemetry Console",
    caption: "Telemetry Console • Event Triggers & Immutable Audit Trails",
  },
];

export function ProductShowcase() {
  const { openBookingModal } = useBookingModal();
  const [activeModuleIndex, setActiveModuleIndex] = useState(0);

  const activeModule = ENTERPRISE_SOLUTIONS[activeModuleIndex];
  const activeImage = PRODUCT_IMAGES[activeModuleIndex];

  const icons = [
    <Fingerprint key="fp" className="w-4 h-4 text-emerald-400" />,
    <BarChart3 key="chart" className="w-4 h-4 text-blue-400" />,
    <Users key="crm" className="w-4 h-4 text-indigo-400" />,
    <Activity key="stream" className="w-4 h-4 text-cyan-400" />,
  ];

  return (
    <section id="enterprise-solutions" className="py-20 md:py-24 bg-[#070A12] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
            PROPRIETARY BUSINESS PLATFORMS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Enterprise Solutions
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Mission-critical software systems tailored to your exact operational workflows — deployed on modern cloud infrastructure with zero recurring license lock-in.
          </p>
        </div>

        {/* 1. Clean Horizontal Module Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {ENTERPRISE_SOLUTIONS.map((mod, index) => {
            const isSelected = activeModuleIndex === index;
            return (
              <button
                key={mod.id}
                onClick={() => setActiveModuleIndex(index)}
                className={`flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-colors cursor-pointer ${
                  isSelected
                    ? "bg-slate-900 border border-slate-700 text-white"
                    : "bg-slate-900/40 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"
                }`}
              >
                <span>{icons[index]}</span>
                <span>{mod.title}</span>
              </button>
            );
          })}
        </div>

        {/* 2. Main 2-Column Showcase Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-slate-900/30 border border-slate-800 rounded-2xl p-6 sm:p-10">
          {/* Left Column: Human Story, Value & Features (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <Badge variant="emerald">{activeModule.badge}</Badge>
                <span className="text-xs font-mono text-slate-400">
                  {activeModule.moduleNumber}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {activeModule.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                {activeModule.summary}
              </p>
            </div>

            {/* Key Capabilities Checklist */}
            <div className="space-y-2.5 pt-1">
              <span className="text-xs font-mono uppercase text-slate-400 tracking-wider block font-semibold">
                What this system includes:
              </span>
              <div className="space-y-2">
                {activeModule.keyFeatures.map((feat) => (
                  <div key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Metric Pills */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              {Object.entries(activeModule.technicalMetrics).map(([key, val]) => (
                <div key={key} className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                  <div className="text-[11px] text-slate-400 uppercase font-mono">{key.replace(/([A-Z])/g, " $1")}</div>
                  <div className="text-sm font-bold font-mono text-emerald-400">{val}</div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Button
                onClick={openBookingModal}
                variant="emerald"
                size="md"
                className="justify-center text-xs font-semibold py-3 px-5 rounded-xl"
              >
                <span>Scope {activeModule.title.split(" ")[0]} System</span>
                <ArrowRight className="w-4 h-4" />
              </Button>

              <Link href={activeModule.link}>
                <Button
                  variant="outline"
                  size="md"
                  className="w-full sm:w-auto justify-center text-xs border-slate-700 hover:border-slate-600 text-slate-300 hover:text-white py-3 rounded-xl"
                >
                  <span>Technical Breakdown</span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Clean, Edge-to-Edge Screenshot (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-xl overflow-hidden border border-slate-800 bg-[#070A12] group relative">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={activeImage.src}
                  alt={activeImage.alt}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
              <div className="px-4 py-2.5 bg-slate-900 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-300 font-medium truncate pr-2">
                  {activeImage.caption}
                </span>
                <span className="text-emerald-400 font-semibold shrink-0 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Live Platform Preview
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
