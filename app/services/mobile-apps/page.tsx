"use client";

import React from "react";
import {
  Smartphone,
  CheckCircle2,
  WifiOff,
  Fingerprint,
  MapPin,
  Zap,
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
    <div className="pt-28 pb-20 bg-[#FAFAF8] text-[#0F172A] min-h-screen">
      
      {/* ── Hero Section ── */}
      <section className="py-12 md:py-20 relative overflow-hidden border-b border-[#E5E8ED]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none -z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(#E2E8F0_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none -z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-6">
            <BackButton fallbackHref="/#solutions" label="Back to Capabilities" />
          </div>

          <div className="max-w-3xl space-y-5">
            <div className="flex items-center gap-2">
              <span className="section-label">Mobile Systems &amp; Flutter</span>
              <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-[#475569] border border-[#E5E8ED]">
                iOS &amp; Android
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight leading-[1.1]">
              Enterprise Mobile Systems <br />
              <span className="text-[#2554EB]">
                Engineered for Zero Latency.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-normal">
              We build mission-critical, offline-first mobile applications with Flutter and native Swift/Kotlin. Hardware telemetry, geofencing, and biometric authentication engineered for massive field operations.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                onClick={openBookingModal}
                className="btn-primary px-6 py-3 text-sm font-semibold cursor-pointer active:scale-95 transition-transform"
              >
                Book 15-Min Mobile Discovery
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Capabilities ── */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E5E8ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2.5">
            <span className="section-label">Mobile Architecture</span>
            <h2 className="text-3xl font-extrabold text-[#0F172A] tracking-tight">
              Enterprise Mobile Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((cap) => {
              const Icon = cap.Icon;
              return (
                <div
                  key={cap.title}
                  className="p-6 sm:p-8 rounded-xl bg-[#F8FAFC] border border-[#E5E8ED] space-y-3.5 hover:border-[#CBD5E1] transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#EEF2FF] border border-blue-100 flex items-center justify-center text-[#2554EB]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0F172A]">{cap.title}</h3>
                  <p className="text-xs sm:text-sm text-[#5B6472] leading-relaxed font-normal">{cap.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Discovery CTA Box ── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-2xl bg-white border border-[#E5E8ED] shadow-[0_1px_4px_rgba(0,0,0,0.04)] text-center space-y-5">
          <div className="w-12 h-12 rounded-xl bg-[#EEF2FF] border border-blue-100 text-[#2554EB] flex items-center justify-center mx-auto">
            <Smartphone className="w-6 h-6" />
          </div>
          <div className="max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
              Planning your enterprise mobile application?
            </h3>
            <p className="text-sm text-[#475569]">
              Talk directly with our Mobile Lead Architect to review offline-sync requirements, biometric protocols, and cross-platform Flutter roadmaps.
            </p>
          </div>
          <div>
            <button
              onClick={openBookingModal}
              className="btn-primary px-6 py-3 text-sm font-semibold cursor-pointer active:scale-95 transition-transform"
            >
              Book 15-Min Technical Discovery
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
