"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  CheckCircle2,
  AlertCircle,
  Clock,
  ShieldCheck,
  Zap,
  Lock,
  FileText,
} from "lucide-react";

export function DiscoveryForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    phone: "",
    countryCode: "+1",
    primaryProjectFocus: "Custom Web / SaaS",
    estimatedTimeline: "<30 days",
    projectOverview: "",
  });

  const [wantsNda, setWantsNda] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const timelineOptions = [
    "<30 days",
    "1–3 months",
    "3–6 months",
    "Exploring",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      const response = await fetch("/api/discovery-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.workEmail,
          phone: `${formData.countryCode} ${formData.phone}`,
          projectFocus: formData.primaryProjectFocus,
          timeline: formData.estimatedTimeline,
          projectOverview: formData.projectOverview,
          wantsNda,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSubmitted(true);
      } else {
        setErrorMsg(result.message || "Failed to submit discovery brief. Please try again.");
      }
    } catch (err) {
      console.error("Submission error", err);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-28 lg:py-36 bg-slate-50 dark:bg-[#090D16] border-t border-slate-200 dark:border-[#1F2937] relative overflow-hidden text-slate-900 dark:text-white scroll-mt-24 transition-colors duration-200"
    >
      {/* ── Atmospheric Landscape Background (Dark mode subtle atmosphere) ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0 hidden dark:block">
        {/* Full-bleed Landscape Image */}
        <Image
          src="/images/contact-landscape.jpg"
          alt="SprintStack Engineering Landscape"
          fill
          priority={false}
          className="object-cover object-center opacity-20"
        />

        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#090D16]/98 via-[#090D16]/90 to-[#090D16]/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090D16] via-transparent to-[#090D16]/90" />

        {/* Dot Matrix Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:32px_32px] opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_85%)]" />

        {/* Ambient Sapphire Blue Light Bloom */}
        <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-blue-600/[0.08] blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Value Proposition (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 tracking-widest uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                05 — LEAD CAPTURE & DISCOVERY
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-[-0.03em] leading-tight">
                Let&apos;s Build Your Software.
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                Connect directly with our engineering team. Receive an actionable project proposal, sprint breakdown, and fixed-price estimate within 24 hours.
              </p>
            </div>

            {/* Direct Guarantees */}
            <div className="space-y-3.5">
              <div className="p-4 rounded-xl bg-white/90 dark:bg-[#111827]/80 backdrop-blur-md border border-slate-200/80 dark:border-white/[0.08] shadow-xs hover:shadow-lg hover:border-blue-500/40 hover:-translate-y-0.5 transition-all duration-300 flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">24-Hour Proposal Turnaround</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                    Complete milestone breakdown, tech stack plan, and fixed pricing delivered within 1 business day.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/90 dark:bg-[#111827]/80 backdrop-blur-md border border-slate-200/80 dark:border-white/[0.08] shadow-xs hover:shadow-lg hover:border-emerald-500/40 hover:-translate-y-0.5 transition-all duration-300 flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">Mutual NDA on Day 1</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                    Standard mutual non-disclosure agreement signed to protect your ideas and data.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/90 dark:bg-[#111827]/80 backdrop-blur-md border border-slate-200/80 dark:border-white/[0.08] shadow-xs hover:shadow-lg hover:border-blue-500/40 hover:-translate-y-0.5 transition-all duration-300 flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">Direct Senior Engineers</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                    You communicate directly with senior developers and architects who build your project.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Elevated Modern Glass Form Card (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-white/95 dark:bg-[#111827]/90 backdrop-blur-md border border-slate-200/80 dark:border-white/[0.08] shadow-2xl dark:shadow-[0_12px_40px_rgba(0,0,0,0.4)] text-slate-900 dark:text-white">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Project Inquiry Received</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                    An Engineering Lead is reviewing your requirements. We will send your initial sprint proposal and timeline estimate within 24 business hours.
                  </p>
                  {wantsNda && (
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Mutual NDA Ready</span>
                    </div>
                  )}
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-slate-200 dark:border-white/[0.08] pb-3 mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                      Project Inquiry Form
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      Tell us about your project requirements to receive a fast, fixed estimate.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-md bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Your Name <span className="text-rose-500 dark:text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Alex Mercer"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-white/[0.12] text-base sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 bg-slate-50 dark:bg-[#090D16] transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Work Email <span className="text-rose-500 dark:text-rose-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.workEmail}
                        onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                        placeholder="alex@enterprise.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-white/[0.12] text-base sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 bg-slate-50 dark:bg-[#090D16] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Phone Number (Optional)
                      </label>
                      <div className="flex gap-2">
                        <select
                          value={formData.countryCode}
                          onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                          className="px-2.5 py-2.5 rounded-xl border border-slate-300 dark:border-white/[0.12] text-base sm:text-xs text-slate-900 dark:text-white bg-slate-50 dark:bg-[#090D16] focus:outline-none focus:border-blue-500"
                        >
                          <option value="+1">🇺🇸 +1</option>
                          <option value="+44">🇬🇧 +44</option>
                          <option value="+971">🇦🇪 +971</option>
                          <option value="+65">🇸🇬 +65</option>
                          <option value="+91">🇮🇳 +91</option>
                        </select>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="(555) 000-0000"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-white/[0.12] text-base sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 bg-slate-50 dark:bg-[#090D16] transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Primary Project Focus
                      </label>
                      <select
                        value={formData.primaryProjectFocus}
                        onChange={(e) => setFormData({ ...formData, primaryProjectFocus: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-white/[0.12] text-base sm:text-sm text-slate-900 dark:text-white bg-slate-50 dark:bg-[#090D16] focus:outline-none focus:border-blue-500"
                      >
                        <option value="Custom Web / SaaS">Custom Web Applications &amp; SaaS</option>
                        <option value="Mobile App">Native &amp; Cross-Platform Mobile</option>
                        <option value="Attendance ERP">Attendance &amp; Workforce ERP</option>
                        <option value="Custom CRM">Custom CRM &amp; Lead Engine</option>
                        <option value="White-Label Squad">White-Label Engineering Squad</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Estimated Target Launch Timeline
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {timelineOptions.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setFormData({ ...formData, estimatedTimeline: opt })}
                          className={`py-2.5 px-3 min-h-[42px] rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                            formData.estimatedTimeline === opt
                              ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                              : "bg-slate-50 dark:bg-[#090D16] text-slate-700 dark:text-slate-300 border-slate-300 dark:border-white/[0.10] hover:border-slate-400 dark:hover:border-white/[0.20] hover:text-slate-900 dark:hover:text-white"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Project Overview / Requirements
                    </label>
                    <textarea
                      rows={3}
                      value={formData.projectOverview}
                      onChange={(e) => setFormData({ ...formData, projectOverview: e.target.value })}
                      placeholder="Describe your system requirements, target users, or current technical bottlenecks..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-white/[0.12] text-base sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 bg-slate-50 dark:bg-[#090D16] transition-all"
                    />
                  </div>

                  {/* ── "I'd like to sign an NDA" Toggle ── */}
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#090D16] border border-slate-200 dark:border-white/[0.08] flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                        <FileText className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-slate-900 dark:text-white">I&apos;d like to sign an NDA</span>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400">
                          Mutual non-disclosure agreement sent before technical review
                        </p>
                      </div>
                    </div>

                    {/* Toggle Switch */}
                    <button
                      type="button"
                      onClick={() => setWantsNda(!wantsNda)}
                      className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                        wantsNda ? "bg-blue-600" : "bg-slate-300 dark:bg-white/[0.15]"
                      }`}
                    >
                      <span
                        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
                          wantsNda ? "translate-x-5" : "translate-x-0"
                        }`}
                      />
                    </button>
                  </div>

                  {/* Submit Button: Solid Electric Blue */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full py-3.5 text-sm font-bold cursor-pointer disabled:opacity-50 text-white"
                    >
                      {isSubmitting ? "Analyzing Scope..." : "Submit Technical Discovery Brief"}
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-xs text-slate-500 dark:text-slate-400 pt-1">
                    <Lock className="w-3.5 h-3.5" />
                    <span>Strict NDA Protected. Zero Spam Guaranteed.</span>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
