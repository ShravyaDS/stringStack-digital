"use client";

import React from "react";
import Link from "next/link";
import {
  Code2,
  Smartphone,
  ShoppingBag,
  Share2,
  Cloud,
  Cpu,
  ArrowUpRight,
} from "lucide-react";
import { useBookingModal } from "../ModalProvider";

export function ServiceBento() {
  const { openBookingModal } = useBookingModal();

  const services = [
    {
      id: "web",
      icon: <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "High-Concurrency Web Ecosystems",
      desc: "Scalable, secure, and lightning-fast web applications built with Next.js, React, Node.js, and Python/Django. Engineered for high conversion rates, sub-second latency, and enterprise-grade security.",
      coreFocus: "SaaS Platforms • Portals • High-Performance Web Assets",
    },
    {
      id: "mobile",
      icon: <Smartphone className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "Cross-Platform iOS & Android Engineering",
      desc: "Production-grade mobile experiences built with React Native and Flutter, alongside native iOS/Android development. Offline-first architecture, hardware biometric integration, and fluid UX.",
      coreFocus: "B2B Mobile Workflows • Consumer Apps • Field Operations Apps",
    },
    {
      id: "commerce",
      icon: <ShoppingBag className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "Headless & Omnichannel Commerce",
      desc: "Custom e-commerce engines, headless Shopify/WooCommerce architectures, inventory sync pipelines, and payment gateways for global cross-border operations (Stripe, Adyen, Checkout.com, Razorpay).",
      coreFocus: "Custom Marketplaces • Headless Stores • Subscription Engines",
    },
    {
      id: "apis",
      icon: <Share2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "Third-Party Integrations & Custom APIs",
      desc: "Connect fragmented tools into unified ecosystems with custom APIs, middleware, and automation workflows that eliminate manual work and reduce operational complexity.",
      coreFocus: "CRM • ERP • Payment • Analytics • IoT",
    },
    {
      id: "cloud",
      icon: <Cloud className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "Cloud Infrastructure & DevOps",
      desc: "Secure, scalable, and cost-optimized infrastructure with AWS, Vercel, and Cloudflare. CI/CD, containerization, and monitoring for 99.9% uptime and faster releases.",
      coreFocus: "AWS • Vercel • Kubernetes • CI/CD • Monitoring",
    },
    {
      id: "ai",
      icon: <Cpu className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "AI & Data-Driven Solutions",
      desc: "Integrate AI and data analytics to build smarter experiences, automate decisions, and unlock business insights with ML, LLMs, and modern data pipelines.",
      coreFocus: "AI/ML • LLMs • Data Engineering • Analytics",
    },
  ];

  return (
    <section id="solutions" className="py-24 lg:py-32 bg-slate-50 dark:bg-[#070B14] text-slate-900 dark:text-white border-t border-slate-200 dark:border-white/[0.08] relative overflow-hidden scroll-mt-20 transition-colors duration-200">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[400px] bg-blue-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header matching Figma */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-16">
          <div className="lg:col-span-7 space-y-3">
            <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 tracking-widest uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              01 — WHAT WE ENGINEER
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] leading-tight text-slate-900 dark:text-white">
              End-to-End Digital Products<br />
              <span className="text-blue-600 dark:text-blue-500">Engineered for Scale</span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              From idea to impact, we build complete digital products that help businesses grow, operate, and scale globally. Our engineering teams bring deep technical expertise and product thinking to every project.
            </p>
          </div>
        </div>

        {/* 6 Bento Grid Cards with Modern Aesthetic Styling & Ambient Glow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, idx) => (
            <div
              key={item.id}
              onClick={openBookingModal}
              className="group p-6 sm:p-7 rounded-2xl bg-white/90 dark:bg-[#0C1220]/80 backdrop-blur-md border border-slate-200/80 dark:border-white/[0.07] hover:border-blue-500/40 hover:bg-white dark:hover:bg-[#10172A] transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1.5 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 relative overflow-hidden"
            >
              {/* Soft ambient corner glow on hover */}
              <div className="absolute -top-16 -right-16 w-36 h-36 bg-blue-500/10 rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />

              <div className="relative z-10">
                {/* Top Row: Icon, Index badge and top-right arrow */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 dark:bg-blue-500/15 border border-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center transition-transform group-hover:scale-105 duration-200">
                      {item.icon}
                    </div>
                    <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-slate-100 dark:bg-white/[0.05] text-slate-500 dark:text-slate-400 border border-slate-200/60 dark:border-white/[0.06]">
                      0{idx + 1}
                    </span>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-white/[0.04] flex items-center justify-center text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:bg-blue-50 dark:group-hover:bg-blue-500/10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Core Focus Tag Line */}
              <div className="relative z-10 pt-4 mt-5 border-t border-slate-200/70 dark:border-white/[0.06] text-[11px] font-mono text-slate-500 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">
                <span className="text-blue-600 dark:text-blue-400 font-semibold">Core Focus: </span>
                <span>{item.coreFocus}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
