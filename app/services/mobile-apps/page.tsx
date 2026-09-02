"use client";

import React from "react";
import Link from "next/link";
import {
  Smartphone,
  ArrowRight,
  CheckCircle2,
  Cpu,
  WifiOff,
  Fingerprint,
  MapPin,
  Layers,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { BackButton } from "@/components/ui/BackButton";
import { useBookingModal } from "@/components/ModalProvider";

export default function MobileAppsPage() {
  const { openBookingModal } = useBookingModal();

  const capabilities = [
    {
      icon: <WifiOff className="w-6 h-6 text-cyan-400" />,
      title: "Offline-First Synchronization",
      desc: "SQLite and WatermelonDB delta sync engines that allow seamless field work in zero-connectivity environments with conflict-free replication.",
    },
    {
      icon: <Fingerprint className="w-6 h-6 text-accent-emerald" />,
      title: "Biometrics & Hardware Security",
      desc: "Native integration with Apple Face ID, Touch ID, Android BiometricPrompt, and Hardware Security Enclave encryption.",
    },
    {
      icon: <MapPin className="w-6 h-6 text-accent-blue" />,
      title: "Geofencing & Anti-Spoofing",
      desc: "High-accuracy GPS polygon boundaries with OS-level mock location detection, BLE beacon sync, and battery-optimized telemetry.",
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-400" />,
      title: "60–120 FPS Native Performance",
      desc: "Compiled Flutter and native Dart pipelines delivering silky-smooth UI rendering, zero stutter, and optimized memory footprints.",
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-obsidian bg-grid-pattern">
      {/* Hero */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[750px] h-[400px] bg-cyan-600/15 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <BackButton fallbackHref="/#solutions" />
          </div>

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2">
              <Badge variant="cyan">Mobile Systems &amp; Flutter</Badge>
              <Badge variant="slate">iOS &amp; Android</Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Enterprise Mobile Systems <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300">
                Engineered for Zero Latency.
              </span>
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed font-normal">
              We build mission-critical, offline-first mobile applications with Flutter and native Swift/Kotlin. Hardware telemetry, geofencing, and biometric authentication engineered for massive field operations.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button onClick={openBookingModal} variant="primary" size="lg" className="gap-2 font-bold shadow-xl shadow-cyan-500/25">
                <span>Book 15-Min Mobile Discovery</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-16 bg-surface/40 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <Badge variant="cyan">Mobile Architecture</Badge>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Enterprise Mobile Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="p-8 rounded-3xl bg-surface/90 border border-border space-y-4 glow-card"
              >
                <div className="p-3.5 rounded-2xl bg-obsidian border border-slate-800 inline-block">
                  {cap.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{cap.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discovery CTA Box */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-surface border border-cyan-500/40 shadow-2xl shadow-cyan-500/15 text-center space-y-6 glow-card">
          <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-accent-cyan flex items-center justify-center mx-auto">
            <Smartphone className="w-7 h-7" />
          </div>
          <div className="max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Planning your enterprise mobile application?
            </h3>
            <p className="text-sm text-slate-300">
              Talk directly with our Mobile Lead Architect to review offline-sync requirements, biometric protocols, and cross-platform Flutter roadmaps.
            </p>
          </div>
          <Button onClick={openBookingModal} variant="primary" size="lg" className="gap-2 font-bold shadow-xl shadow-cyan-500/30">
            <span>Book 15-Min Technical Discovery</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}
