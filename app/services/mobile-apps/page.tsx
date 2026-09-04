"use client";

import React from "react";
import {
  Smartphone,
  CheckCircle2,
  WifiOff,
  Fingerprint,
  MapPin,
  Zap,
  ArrowRight,
} from "lucide-react";
import { BackButton } from "@/components/ui/BackButton";
import { useBookingModal } from "@/components/ModalProvider";

export default function MobileAppsPage() {
  const { openBookingModal } = useBookingModal();

  const capabilities = [
    {
      Icon: WifiOff,
      title: "Offline-First Synchronization",
      desc: "SQLite and WatermelonDB delta sync engines that allow seamless field work in zero-connectivity environments with conflict-free replication.",
    },
    {
      Icon: Fingerprint,
      title: "Biometrics & Hardware Security",
      desc: "Native integration with Apple Face ID, Touch ID, Android BiometricPrompt, and Hardware Security Enclave encryption.",
    },
    {
      Icon: MapPin,
      title: "Geofencing & Anti-Spoofing",
      desc: "High-accuracy GPS polygon boundaries with OS-level mock location detection, BLE beacon sync, and battery-optimized telemetry.",
    },
    {
      Icon: Zap,
      title: "60–120 FPS Native Performance",
      desc: "Compiled Flutter and native Dart pipelines delivering silky-smooth UI rendering, zero stutter, and optimized memory footprints.",
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-[#090D16] text-white min-h-screen">
      
      {/* ── Hero Section ── */}
      <section className="py-12 md:py-20 relative overflow-hidden border-b border-[#1F2937]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none -z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-6">
            <BackButton fallbackHref="/#solutions" label="Back to Capabilities" />
          </div>

          <div className="max-w-3xl space-y-5">
            <div className="flex items-center gap-2">
              <span className="section-label">Mobile Systems &amp; Flutter</span>
              <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/25">
                iOS &amp; Android
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Enterprise Mobile Systems <br />
              <span className="text-indigo-400">
                Engineered for Zero Latency.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              We build mission-critical, offline-first mobile applications with Flutter and native Swift/Kotlin. Hardware telemetry, geofencing, and biometric authentication engineered for massive field operations.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                onClick={openBookingModal}
                className="btn-primary px-6 py-3 text-sm font-semibold cursor-pointer active:scale-95 transition-transform flex items-center gap-2"
              >
                <span>Book 15-Min Mobile Discovery</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Capabilities ── */}
      <section className="py-16 sm:py-20 bg-[#070B14] border-b border-[#1F2937]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2.5">
            <span className="section-label">Mobile Architecture</span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Enterprise Mobile Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((cap) => {
              const Icon = cap.Icon;
              return (
                <div
                  key={cap.title}
                  className="p-6 sm:p-8 rounded-2xl bg-[#0E1528] border border-[#1F2937] space-y-4 hover:border-indigo-500/40 transition-all duration-300 shadow-lg hover:-translate-y-1"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 text-indigo-400 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{cap.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">{cap.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Discovery CTA Box ── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0E1528] border border-[#1F2937] shadow-2xl text-center space-y-6 relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

          <div className="w-12 h-12 rounded-2xl bg-indigo-500/15 border border-indigo-500/30 text-indigo-400 flex items-center justify-center mx-auto shadow-inner">
            <Smartphone className="w-6 h-6" />
          </div>
          <div className="max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Ready to ship your enterprise mobile app?
            </h3>
            <p className="text-sm text-slate-400">
              Schedule a technical discovery call to review your mobile specifications, hardware requirements, and sprint timelines.
            </p>
          </div>
          <div>
            <button
              onClick={openBookingModal}
              className="btn-primary px-7 py-3.5 text-sm font-semibold cursor-pointer active:scale-95 transition-transform flex items-center gap-2 mx-auto"
            >
              <span>Book 15-Min Mobile Discovery</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
