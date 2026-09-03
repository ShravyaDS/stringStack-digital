"use client";

import React from "react";
import Link from "next/link";
import { Code2, ArrowRight, Globe, Zap, Mail } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { useBookingModal } from "./ModalProvider";

const NAV_LINKS = [
  { href: "/#solutions", label: "Solutions" },
  { href: "/#enterprise-solutions", label: "Enterprise Software" },
  { href: "/#tech-stack", label: "Tech Stack" },
  { href: "/partners/white-label", label: "White-Label & Partners" },
  { href: "/#process", label: "Delivery Process" },
];

const DEDICATED_LINKS = [
  { href: "/services/web-development", label: "Web Development" },
  { href: "/services/mobile-apps", label: "Mobile Apps" },
  { href: "/products/attendance-erp", label: "Attendance & Workforce ERP" },
  { href: "/partners/white-label", label: "White-Label Partnerships" },
];

const TRUST_BADGES = [
  { icon: <Code2 className="w-3.5 h-3.5" />, label: "100% IP Transferred" },
  { icon: <Zap className="w-3.5 h-3.5" />, label: "1–2 Week Sprints" },
  { icon: <Globe className="w-3.5 h-3.5" />, label: "6 Global Markets" },
];

export function Footer() {
  const { openBookingModal } = useBookingModal();

  return (
    <footer
      className="relative overflow-hidden pt-16 pb-10"
      style={{
        background: "linear-gradient(180deg, #090D16 0%, #09090F 100%)",
        borderTop: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      {/* Ambient gradient glow in footer */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-64 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 50% 60% at 50% 100%, rgba(99,102,241,0.08), transparent)" }} />

      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.35), rgba(99,102,241,0.3), transparent)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* ── Main footer grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>

          {/* Brand column (2 cols) */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-flex items-center gap-2.5 group select-none">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-700 flex items-center justify-center shadow-lg shadow-violet-500/25 group-hover:shadow-violet-500/40 transition-all">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-base text-white tracking-tight">
                SprintStack<span className="text-gradient-violet">.digital</span>
              </span>
            </Link>

            <p className="text-sm text-[#A3A2B0] max-w-xs leading-relaxed">
              A software engineering and enterprise technology company providing custom software solutions for businesses globally. Zero agency fluff.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2">
              {TRUST_BADGES.map((badge) => (
                <span
                  key={badge.label}
                  className="inline-flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-lg"
                  style={{
                    background: "rgba(59,130,246,0.10)",
                    border: "1px solid rgba(59,130,246,0.18)",
                    color: "#A5B4FC",
                  }}
                >
                  {badge.icon}
                  {badge.label}
                </span>
              ))}
            </div>

            {/* Markets */}
            <div className="space-y-1.5">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#6B6A78] block">
                Global Markets:
              </span>
              <p className="text-sm text-[#D4D3E0] font-medium">
                US · UK · UAE / Dubai · Singapore · EU · Australia
              </p>
            </div>
          </div>

          {/* Navigation (1 col) */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white">Navigation</h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#A3A2B0] hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Dedicated Pages (1 col) */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white">Dedicated Pages</h4>
            <ul className="space-y-2.5">
              {DEDICATED_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#A3A2B0] hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + CTA (1 col) */}
          <div className="space-y-5">
            <div className="space-y-4">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-white">Get In Touch</h4>
              {/* CTA button */}
              <button
                onClick={openBookingModal}
                className="btn-primary w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-white cursor-pointer"
              >
                <span>Book Discovery Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Email */}
              <a
                href={`mailto:${SITE_CONFIG.links.email}`}
                className="flex items-center gap-2 text-sm text-[#A3A2B0] hover:text-white transition-colors group"
              >
                <Mail className="w-4 h-4 group-hover:text-violet-400 transition-colors shrink-0" />
                <span className="truncate">{SITE_CONFIG.links.email}</span>
              </a>
            </div>

            <div className="space-y-2.5">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-[#6B6A78]">Legal</h4>
              <div className="flex flex-col gap-2">
                <Link href="/privacy" className="text-sm text-[#A3A2B0] hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="text-sm text-[#A3A2B0] hover:text-white transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B6A78]">
          <span>© 2026 SprintStack.digital. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <span className="text-[#3A3A4A]">|</span>
            <span className="text-[#A3A2B0] font-medium">High-Performance Engineering</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
