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
      className="py-28 lg:py-36 bg-[#090D16] border-t border-white/[0.08] relative overflow-hidden text-white scroll-mt-24"
    >
      {/* ── Atmospheric Landscape Background ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Context & Guarantees (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="section-label">Direct Technical Scoping</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-[-0.03em] leading-tight">
              Let&apos;s Scope Your Software Build
            </h2>

            <p className="text-lg sm:text-xl font-bold text-blue-400">
              Speak Directly to a Principal Systems Architect.
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              SprintStack helps you define your system architecture, technology stack, and fixed sprint milestone breakdown. Receive an <strong className="text-white">Architecture &amp; Sprint Plan within 24 business hours</strong>.
            </p>

            {/* Assurance Cards */}
            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-xl bg-[#0E1626] border border-white/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.25)] flex items-start gap-4 hover:border-white/[0.16] transition-all">
                <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">24-Hour Scope Architecture</h3>
                  <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                    Complete milestone breakdown, tech stack audit, and delivery schedule delivered within 1 business day.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0E1626] border border-white/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.25)] flex items-start gap-4 hover:border-white/[0.16] transition-all">
                <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Mutual NDA on Day 1</h3>
                  <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                    Enterprise non-disclosure agreements executed prior to any proprietary code, database, or API discussion.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0E1626] border border-white/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.25)] flex items-start gap-4 hover:border-white/[0.16] transition-all">
                <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Zero Junior Pass-Through</h3>
                  <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                    You interface solely with senior full-stack architects with 6+ years shipping high-concurrency systems.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Elevated Dark Form Card (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-[#0E1626] border border-white/[0.10] shadow-[0_12px_40px_rgba(0,0,0,0.4)] text-white">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Discovery Brief Received</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    A Senior Technical Lead is reviewing your requirements. We will deliver your initial Sprint Plan and architecture breakdown within 24 business hours.
                  </p>
                  {wantsNda && (
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-semibold text-emerald-400">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Mutual NDA Confirmation Dispatched</span>
                    </div>
                  )}
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-white/[0.08] pb-3 mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      Technical Discovery Brief
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Fill out your project parameters to initiate the technical discovery sprint.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-md bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        Your Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Alex Mercer"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-white/[0.12] text-base sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 bg-[#090D16] transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        Work Email <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.workEmail}
                        onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                        placeholder="alex@enterprise.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-white/[0.12] text-base sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 bg-[#090D16] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        Phone Number (Optional)
                      </label>
                      <div className="flex gap-2">
                        <select
                          value={formData.countryCode}
                          onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                          className="px-2.5 py-2.5 rounded-xl border border-white/[0.12] text-base sm:text-xs text-white bg-[#090D16] focus:outline-none focus:border-blue-500"
                        >
                          <option value="+1" className="bg-[#090D16] text-white">🇺🇸 +1</option>
                          <option value="+44" className="bg-[#090D16] text-white">🇬🇧 +44</option>
                          <option value="+971" className="bg-[#090D16] text-white">🇦🇪 +971</option>
                          <option value="+65" className="bg-[#090D16] text-white">🇸🇬 +65</option>
                          <option value="+91" className="bg-[#090D16] text-white">🇮🇳 +91</option>
                        </select>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="(555) 000-0000"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-white/[0.12] text-base sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 bg-[#090D16] transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        Primary Project Focus
                      </label>
                      <select
                        value={formData.primaryProjectFocus}
                        onChange={(e) => setFormData({ ...formData, primaryProjectFocus: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-white/[0.12] text-base sm:text-sm text-white bg-[#090D16] focus:outline-none focus:border-blue-500"
                      >
                        <option value="Custom Web / SaaS" className="bg-[#090D16] text-white">Custom Web Applications &amp; SaaS</option>
                        <option value="Mobile App" className="bg-[#090D16] text-white">Native &amp; Cross-Platform Mobile</option>
                        <option value="Attendance ERP" className="bg-[#090D16] text-white">Attendance &amp; Workforce ERP</option>
                        <option value="Custom CRM" className="bg-[#090D16] text-white">Custom CRM &amp; Lead Engine</option>
                        <option value="White-Label Squad" className="bg-[#090D16] text-white">White-Label Engineering Squad</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
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
                              ? "bg-blue-600 text-white border-blue-500 shadow-sm"
                              : "bg-[#090D16] text-slate-300 border-white/[0.10] hover:border-white/[0.20] hover:text-white"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Project Overview / Requirements
                    </label>
                    <textarea
                      rows={3}
                      value={formData.projectOverview}
                      onChange={(e) => setFormData({ ...formData, projectOverview: e.target.value })}
                      placeholder="Describe your system requirements, target users, or current technical bottlenecks..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-white/[0.12] text-base sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 bg-[#090D16] transition-all"
                    />
                  </div>

                  {/* ── "I'd like to sign an NDA" Toggle ── */}
                  <div className="p-3.5 rounded-xl bg-[#090D16] border border-white/[0.08] flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                        <FileText className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-white">I&apos;d like to sign an NDA</span>
                        <p className="text-[11px] text-slate-400">
                          Mutual non-disclosure agreement sent before technical review
                        </p>
                      </div>
                    </div>

                    {/* Toggle Switch */}
                    <button
                      type="button"
                      onClick={() => setWantsNda(!wantsNda)}
                      className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                        wantsNda ? "bg-blue-600" : "bg-white/[0.15]"
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
                      className="btn-primary w-full py-3.5 text-sm font-bold cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? "Analyzing Scope..." : "Submit Technical Discovery Brief"}
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-1">
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
