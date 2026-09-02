"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Code2,
  Smartphone,
  ShoppingBag,
  Workflow,
  ArrowRight,
} from "lucide-react";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { CORE_CAPABILITIES } from "@/lib/constants";
import { useBookingModal } from "../ModalProvider";

export function ServiceBento() {
  const { openBookingModal } = useBookingModal();

  const webCap = CORE_CAPABILITIES[0];
  const mobileCap = CORE_CAPABILITIES[1];
  const ecomCap = CORE_CAPABILITIES[2];
  const integrationCap = CORE_CAPABILITIES[3];

  return (
    <section id="solutions" className="py-20 md:py-24 bg-[#080C14] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="space-y-2.5">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
              WHAT WE BUILD
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Core Engineering Capabilities
            </h2>
          </div>
          <p className="text-slate-300 max-w-md text-sm sm:text-base leading-relaxed">
            From high-concurrency web platforms to native mobile apps and enterprise middleware — built by senior software engineers on fixed weekly sprints.
          </p>
        </div>

        {/* 4 Identical, Symmetrical Capability Cards (2x2 Balanced Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Card 1: Web Applications & Dynamic Business Platforms */}
          <div className="rounded-2xl bg-slate-900/40 border border-slate-800 p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:border-slate-700 transition-colors">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-400">
                  <Code2 className="w-5 h-5" />
                </div>
                <Badge variant="blue">{webCap.badge}</Badge>
              </div>

              <div>
                <span className="text-xs font-mono uppercase text-slate-400 tracking-wider font-semibold">
                  {webCap.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-1">
                  {webCap.headline}
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  {webCap.description}
                </p>
              </div>

              {/* High-Resolution Web Architecture UI Preview */}
              <div className="rounded-xl overflow-hidden border border-slate-800 bg-[#070A12] relative aspect-[16/9] w-full">
                <Image
                  src="/images/services/web-apps.jpg"
                  alt="Enterprise Web Application Architecture"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 pt-1">
                {webCap.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-5 border-t border-slate-800 flex items-center justify-between">
              <Link
                href="/services/web-development"
                className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
              >
                <span>Deep Dive Architecture &amp; Sprints</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Button onClick={openBookingModal} variant="outline" size="sm" className="text-xs border-slate-700 hover:border-slate-600">
                Scope Web Build
              </Button>
            </div>
          </div>

          {/* Card 2: Native & Cross-Platform Mobile Applications */}
          <div className="rounded-2xl bg-slate-900/40 border border-slate-800 p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:border-slate-700 transition-colors">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400">
                  <Smartphone className="w-5 h-5" />
                </div>
                <Badge variant="cyan">{mobileCap.badge}</Badge>
              </div>

              <div>
                <span className="text-xs font-mono uppercase text-slate-400 tracking-wider font-semibold">
                  {mobileCap.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-1">
                  {mobileCap.headline}
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  {mobileCap.description}
                </p>
              </div>

              {/* High-Resolution Mobile Architecture UI Preview */}
              <div className="rounded-xl overflow-hidden border border-slate-800 bg-[#070A12] relative aspect-[16/9] w-full">
                <Image
                  src="/images/services/mobile-apps.jpg"
                  alt="Cross-Platform Mobile Application Architecture"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 pt-1">
                {mobileCap.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-5 border-t border-slate-800 flex items-center justify-between">
              <Link
                href="/services/mobile-apps"
                className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <span>Explore Mobile Systems</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Button onClick={openBookingModal} variant="outline" size="sm" className="text-xs border-slate-700 hover:border-slate-600">
                Scope Mobile Build
              </Button>
            </div>
          </div>

          {/* Card 3: E-commerce Architecture & Digital Commerce */}
          <div className="rounded-2xl bg-slate-900/40 border border-slate-800 p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:border-slate-700 transition-colors">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <Badge variant="emerald">{ecomCap.badge}</Badge>
              </div>

              <div>
                <span className="text-xs font-mono uppercase text-slate-400 tracking-wider font-semibold">
                  {ecomCap.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-1">
                  {ecomCap.headline}
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  {ecomCap.description}
                </p>
              </div>

              {/* High-Resolution E-Commerce UI Preview */}
              <div className="rounded-xl overflow-hidden border border-slate-800 bg-[#070A12] relative aspect-[16/9] w-full">
                <Image
                  src="/images/services/ecommerce.jpg"
                  alt="Headless E-Commerce & Checkout Architecture"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 pt-1">
                {ecomCap.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-5 border-t border-slate-800 flex items-center justify-between">
              <Link
                href="/services/web-development"
                className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <span>Explore Commerce Architecture</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Button onClick={openBookingModal} variant="outline" size="sm" className="text-xs border-slate-700 hover:border-slate-600">
                Scope Commerce Engine
              </Button>
            </div>
          </div>

          {/* Card 4: System Integrations & Process Automation */}
          <div className="rounded-2xl bg-slate-900/40 border border-slate-800 p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:border-slate-700 transition-colors">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-indigo-400">
                  <Workflow className="w-5 h-5" />
                </div>
                <Badge variant="indigo">{integrationCap.badge}</Badge>
              </div>

              <div>
                <span className="text-xs font-mono uppercase text-slate-400 tracking-wider font-semibold">
                  {integrationCap.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-1">
                  {integrationCap.headline}
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  {integrationCap.description}
                </p>
              </div>

              {/* High-Resolution API Integrations UI Preview */}
              <div className="rounded-xl overflow-hidden border border-slate-800 bg-[#070A12] relative aspect-[16/9] w-full">
                <Image
                  src="/images/services/integrations.jpg"
                  alt="Enterprise API Middleware & Automation Pipeline"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 pt-1">
                {integrationCap.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-5 border-t border-slate-800 flex items-center justify-between">
              <Link
                href="/services/web-development"
                className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                <span>Explore Middleware Pipeline</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Button onClick={openBookingModal} variant="outline" size="sm" className="text-xs border-slate-700 hover:border-slate-600">
                Scope Integration Build
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
