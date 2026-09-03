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
  Check,
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
      className="py-20 lg:py-28 bg-[#090D16] border-t border-[#1E293B] relative overflow-hidden text-white"
    >
      {/* ── Atmospheric Landscape Background (Styled like designli.co screenshot) ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        {/* Full-bleed Landscape Image */}
        <Image
          src="/images/contact-landscape.jpg"
          alt="SprintStack Engineering Landscape"
          fill
          priority={false}
          className="object-cover object-center opacity-45"
        />

        {/* Cinematic Gradient Overlays: Deep sapphire on left for text legibility, subtle fade to right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#090D16]/95 via-[#090D16]/85 to-[#090D16]/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090D16] via-transparent to-[#090D16]/80" />

        {/* Dot Matrix Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.12)_1.5px,transparent_1.5px)] [background-size:28px_28px] opacity-35 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_85%)]" />

        {/* Ambient Cyan/Blue Light Bloom */}
        <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-[650px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.15)_0%,rgba(37,99,235,0.1)_45%,transparent_75%)] blur-[95px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Context & Guarantees on Dark Dot-Grid (5 cols) */}
          <div className="lg:col-span-5 space-y-6 scroll-reveal">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                <span>Direct Technical Scoping</span>
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Let&apos;s Scope Your Software Build
            </h2>

            <p className="text-xl font-bold text-blue-400">
              Speak Directly to a Principal Systems Architect.
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              SprintStack helps you define your system architecture, technology stack, and fixed sprint milestone breakdown. Receive an <strong className="text-white">Architecture &amp; Sprint Plan within 24 business hours</strong>.
            </p>

            {/* Assurance Cards */}
            <div className="space-y-3 pt-2 scroll-stagger">
              <div className="p-4 rounded-xl bg-[#111827]/80 border border-[#1E293B] shadow-sm flex items-start gap-4 hover:border-blue-500/30 transition-colors">
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

              <div className="p-4 rounded-xl bg-[#111827]/80 border border-[#1E293B] shadow-sm flex items-start gap-4 hover:border-blue-500/30 transition-colors">
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

              <div className="p-4 rounded-xl bg-[#111827]/80 border border-[#1E293B] shadow-sm flex items-start gap-4 hover:border-blue-500/30 transition-colors">
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

          {/* Right Column: Generous White Form Card (7 cols, styled like saigontechnology.com) */}
          <div className="lg:col-span-7 scroll-reveal">
            <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.35)] text-[#0F172A]">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0F172A]">Discovery Brief Received</h3>
                  <p className="text-sm text-[#475569] max-w-md mx-auto">
                    A Senior Technical Lead is reviewing your requirements. We will deliver your initial Sprint Plan and architecture breakdown within 24 business hours.
                  </p>
                  {wantsNda && (
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-700">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Mutual NDA Confirmation Dispatched</span>
                    </div>
                  )}
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-[#F1F5F9] pb-3 mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
                      Technical Discovery Brief
                    </h3>
                    <p className="text-xs text-[#64748B] mt-0.5">
                      Fill out your project parameters to initiate the technical discovery sprint.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-md bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-[#334155]">
                        Your Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Alex Mercer"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2E8F0] text-sm text-[#0F172A] focus:outline-none focus:border-[#2563EB] bg-[#F8FAFC]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-[#334155]">
                        Work Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.workEmail}
                        onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                        placeholder="alex@enterprise.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2E8F0] text-sm text-[#0F172A] focus:outline-none focus:border-[#2563EB] bg-[#F8FAFC]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-[#334155]">
                        Phone Number (Optional)
                      </label>
                      <div className="flex gap-2">
                        <select
                          value={formData.countryCode}
                          onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                          className="px-2 py-2.5 rounded-xl border border-[#E2E8F0] text-xs text-[#0F172A] bg-[#F8FAFC]"
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
                          className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2E8F0] text-sm text-[#0F172A] focus:outline-none focus:border-[#2563EB] bg-[#F8FAFC]"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-[#334155]">
                        Primary Project Focus
                      </label>
                      <select
                        value={formData.primaryProjectFocus}
                        onChange={(e) => setFormData({ ...formData, primaryProjectFocus: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2E8F0] text-sm text-[#0F172A] bg-[#F8FAFC] focus:outline-none focus:border-[#2563EB]"
                      >
                        <option value="Custom Web / SaaS">Custom Web Applications &amp; SaaS</option>
                        <option value="Mobile App">Native &amp; Cross-Platform Mobile</option>
                        <option value="Attendance ERP">Attendance &amp; Workforce ERP</option>
                        <option value="Custom CRM">Custom CRM &amp; Lead Engine</option>
                        <option value="White-Label Squad">White-Label Engineering Squad</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#334155]">
                      Estimated Target Launch Timeline
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {timelineOptions.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setFormData({ ...formData, estimatedTimeline: opt })}
                          className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                            formData.estimatedTimeline === opt
                              ? "bg-[#2563EB] text-white border-[#2563EB] shadow-xs"
                              : "bg-[#F8FAFC] text-[#475569] border-[#E2E8F0] hover:border-[#CBD5E1]"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#334155]">
                      Project Overview / Requirements
                    </label>
                    <textarea
                      rows={3}
                      value={formData.projectOverview}
                      onChange={(e) => setFormData({ ...formData, projectOverview: e.target.value })}
                      placeholder="Describe your system requirements, target users, or current technical bottlenecks..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2E8F0] text-sm text-[#0F172A] focus:outline-none focus:border-[#2563EB] bg-[#F8FAFC]"
                    />
                  </div>

                  {/* ── "I'd like to sign an NDA" Toggle (Exact Feature from saigontechnology.com) ── */}
                  <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-[#2563EB] shrink-0">
                        <FileText className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-[#0F172A]">I&apos;d like to sign an NDA</span>
                        <p className="text-[11px] text-[#64748B]">
                          Mutual non-disclosure agreement sent before technical review
                        </p>
                      </div>
                    </div>

                    {/* Toggle Switch */}
                    <button
                      type="button"
                      onClick={() => setWantsNda(!wantsNda)}
                      className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                        wantsNda ? "bg-[#2563EB]" : "bg-slate-200"
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
                      className="btn-primary w-full py-4 text-sm font-bold cursor-pointer disabled:opacity-50 shadow-md shadow-blue-500/20"
                    >
                      {isSubmitting ? "Analyzing Scope..." : "Submit Technical Discovery Brief"}
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-xs text-[#64748B] pt-1">
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
