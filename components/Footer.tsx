"use client";

import React from "react";
import Link from "next/link";
import { Code2 } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { useBookingModal } from "./ModalProvider";

export function Footer() {
  const { openBookingModal } = useBookingModal();

  return (
    <footer className="bg-[#070A11] border-t border-slate-800/80 pt-16 pb-12 text-slate-400 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1 & 2: Brand, Positioning & Global Markets */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group select-none">
              <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-white">
                <Code2 className="w-4 h-4 text-cyan-400" />
              </div>
              <span className="font-mono font-bold text-base text-white tracking-tight">
                SprintStack<span className="text-cyan-400">.digital</span>
              </span>
            </Link>

            <p className="text-sm text-slate-300 max-w-sm leading-relaxed font-normal">
              SprintStack.digital is a software engineering and enterprise technology company providing custom software solutions for businesses globally.
            </p>

            <p className="text-xs font-mono text-cyan-400 font-semibold">
              Elite Engineering Partner • Pragmatic • High-Trust • Delivery-Focused • Zero Fluff
            </p>

            {/* Target Global Markets */}
            <div className="pt-2 space-y-1.5 font-mono text-xs">
              <span className="text-slate-400 uppercase tracking-wider block text-[11px] font-bold">
                Global Markets:
              </span>
              <p className="text-slate-200 font-medium">
                US • UK • UAE / Dubai • Singapore • EU • Australia
              </p>
            </div>
          </div>

          {/* Col 3: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase text-white font-bold tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/#solutions"
                  className="hover:text-white transition-colors text-slate-300"
                >
                  Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/#enterprise-solutions"
                  className="hover:text-white transition-colors text-slate-300"
                >
                  Enterprise Software
                </Link>
              </li>
              <li>
                <Link
                  href="/#tech-stack"
                  className="hover:text-white transition-colors text-slate-300"
                >
                  Tech Stack
                </Link>
              </li>
              <li>
                <Link
                  href="/partners/white-label"
                  className="hover:text-white transition-colors text-slate-300"
                >
                  White-Label &amp; Partners
                </Link>
              </li>
              <li>
                <Link
                  href="/#process"
                  className="hover:text-white transition-colors text-slate-300"
                >
                  Process
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Solutions Subpages */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase text-white font-bold tracking-wider">
              Dedicated Pages
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/services/web-development"
                  className="hover:text-white transition-colors text-slate-300"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/mobile-apps"
                  className="hover:text-white transition-colors text-slate-300"
                >
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link
                  href="/products/attendance-erp"
                  className="hover:text-white transition-colors text-slate-300"
                >
                  Attendance &amp; Workforce ERP
                </Link>
              </li>
              <li>
                <Link
                  href="/partners/white-label"
                  className="hover:text-white transition-colors text-slate-300"
                >
                  White-Label Partnerships
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Legal & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase text-white font-bold tracking-wider">
              Legal &amp; Direct
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors text-slate-300">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors text-slate-300">
                  Terms
                </Link>
              </li>
              <li className="pt-2">
                <button
                  onClick={openBookingModal}
                  className="text-xs font-mono text-cyan-400 hover:text-cyan-300 font-bold block"
                >
                  Book Discovery Call
                </button>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.links.email}`}
                  className="text-xs font-mono text-slate-300 hover:text-white transition-colors block"
                >
                  {SITE_CONFIG.links.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            &copy; 2026 SprintStack.digital. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
            <span className="text-slate-600">|</span>
            <span className="text-slate-300">High-Performance Engineering</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
