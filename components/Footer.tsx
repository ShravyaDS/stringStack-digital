"use client";

import React from "react";
import Link from "next/link";
import { Code2, Globe, Zap, Mail, ShieldCheck } from "lucide-react";
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
  { icon: <ShieldCheck className="w-3.5 h-3.5" />, label: "100% IP Transferred" },
  { icon: <Zap className="w-3.5 h-3.5" />, label: "1–2 Week Sprints" },
  { icon: <Globe className="w-3.5 h-3.5" />, label: "6 Global Markets" },
];

export function Footer() {
  const { openBookingModal } = useBookingModal();

  return (
    <footer className="bg-slate-100 dark:bg-[#070B12] text-slate-900 dark:text-white pt-20 pb-16 pb-safe border-t border-slate-200 dark:border-[#1F2937] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Main footer grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-slate-200 dark:border-[#1F2937]">

          {/* Brand column (2 cols) */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-flex items-center gap-2.5 group select-none">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-xs transition-transform group-hover:scale-105">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-base text-slate-900 dark:text-white tracking-tight">
                SprintStack<span className="text-blue-500">.digital</span>
              </span>
            </Link>

            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xs leading-relaxed">
              A software engineering and enterprise technology company providing custom software solutions for businesses globally. Zero agency fluff.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2">
              {TRUST_BADGES.map((badge) => {
                const isProof = badge.label.includes("100% IP");
                return (
                  <span
                    key={badge.label}
                    className={`inline-flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-md border ${
                      isProof
                        ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-300"
                        : "bg-white dark:bg-[#111827] border-slate-200 dark:border-[#1F2937] text-slate-700 dark:text-slate-300 shadow-2xs"
                    }`}
                  >
                    <span className={isProof ? "text-emerald-600 dark:text-emerald-400" : "text-blue-600 dark:text-blue-400"}>{badge.icon}</span>
                    {badge.label}
                  </span>
                );
              })}
            </div>

            {/* Markets */}
            <div className="space-y-1">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-slate-500 block">
                Global Markets:
              </span>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                US · UK · UAE · Singapore · EU · Australia
              </p>
            </div>
          </div>

          {/* Navigation (1 col) */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-300">Navigation</h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Dedicated Pages (1 col) */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-300">Dedicated Pages</h4>
            <ul className="space-y-2.5">
              {DEDICATED_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
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
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-300">Get In Touch</h4>
              {/* Flat CTA button, NO arrow per user rule */}
              <button
                onClick={openBookingModal}
                className="btn-primary w-full py-2.5 text-xs sm:text-sm font-semibold cursor-pointer active:scale-95 transition-transform text-white"
              >
                Book Discovery Call
              </button>

              {/* Email */}
              <a
                href={`mailto:${SITE_CONFIG.links.email}`}
                className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <span className="truncate">{SITE_CONFIG.links.email}</span>
              </a>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Legal</h4>
              <div className="flex flex-col gap-1.5 text-xs text-slate-600 dark:text-slate-400">
                <Link href="/privacy" className="hover:text-slate-900 dark:hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-slate-900 dark:hover:text-white transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <span>© 2026 SprintStack.digital. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-900 dark:hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-900 dark:hover:text-slate-300 transition-colors">Terms of Service</Link>
            <span className="text-slate-300 dark:text-white/[0.10]">|</span>
            <span className="text-slate-600 dark:text-slate-400">High-Performance Engineering</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
