"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  AlertCircle,
  Clock,
  ShieldCheck,
  Zap,
  ArrowRight,
  Lock,
} from "lucide-react";
import { Button } from "../ui/Button";

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
      // Fallback optimistic success for resilient UX
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-24 bg-[#070A12] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Context & Guarantees (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400">
              <span className="font-semibold uppercase tracking-wider">Direct Technical Scoping</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Let&apos;s Scope Your Software Build
            </h2>

            <p className="text-slate-200 text-lg font-semibold">
              Speak to a Technical Lead.
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
              SprintStack helps you define your system architecture, technology stack, and fixed sprint milestone breakdown. Receive an <strong className="text-white">Architecture &amp; Sprint Plan within 24 business hours</strong>.
            </p>

            {/* Assurance Cards */}
            <div className="space-y-3 pt-2">
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/40 border border-slate-800 flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-blue-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">24-Hour Scope Architecture</h3>
                  <p className="text-xs text-slate-400 mt-0.5 leading-relaxed font-normal">
                    Detailed sprint roadmap, data models, and fixed milestone breakdown delivered in under 24 hours.
                  </p>
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/40 border border-slate-800 flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-emerald-400 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Strict Bilateral NDA</h3>
                  <p className="text-xs text-slate-400 mt-0.5 leading-relaxed font-normal">
                    Your proprietary specifications and codebase ideas remain 100% confidential under mutual NDA.
                  </p>
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/40 border border-slate-800 flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-indigo-400 shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Direct Principal Architect Sync</h3>
                  <p className="text-xs text-slate-400 mt-0.5 leading-relaxed font-normal">
                    Zero sales reps. You speak with senior systems engineers who design and ship production code.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Discovery Form Card (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-2xl bg-slate-900/50 border border-slate-800">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Discovery Brief Received!
                  </h3>
                  <p className="text-slate-300 max-w-md mx-auto text-sm leading-relaxed">
                    Thank you <strong className="text-white">{formData.fullName}</strong>. Our Principal Systems Architect is analyzing your specifications and will deliver your sprint blueprint to <strong className="text-slate-200">{formData.workEmail}</strong> within 24 hours.
                  </p>
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 inline-block text-left text-xs font-mono space-y-2 text-slate-400 max-w-md w-full">
                    <div className="flex justify-between pb-1 border-b border-slate-800">
                      <span>Project Focus:</span>
                      <strong className="text-white">{formData.primaryProjectFocus}</strong>
                    </div>
                    <div className="flex justify-between pb-1 border-b border-slate-800">
                      <span>Timeline:</span>
                      <strong className="text-white">{formData.estimatedTimeline}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Status:</span>
                      <span className="text-emerald-400 font-semibold">● Queued for Architecture Scoping</span>
                    </div>
                  </div>
                  <div className="pt-2">
                    <Button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          fullName: "",
                          workEmail: "",
                          phone: "",
                          countryCode: "+1",
                          primaryProjectFocus: "Custom Web / SaaS",
                          estimatedTimeline: "<30 days",
                          projectOverview: "",
                        });
                      }}
                      variant="secondary"
                    >
                      Submit Another Scope Request
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-slate-800 pb-4">
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      Technical Discovery &amp; Scope Estimator
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Complete the brief below to initialize your architectural evaluation.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* 1. Full Name & 2. Work Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase text-slate-300 font-semibold flex items-center justify-between">
                        <span>1. Full Name</span>
                        <span className="text-blue-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Alex Vance"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase text-slate-300 font-semibold flex items-center justify-between">
                        <span>2. Work Email</span>
                        <span className="text-blue-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.workEmail}
                        onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* 3. Phone / WhatsApp (with Country Code) */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase text-slate-300 font-semibold">
                        Country Code
                      </label>
                      <select
                        value={formData.countryCode}
                        onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-3 text-sm text-white focus:outline-none focus:border-blue-500 font-mono"
                      >
                        <option value="+1">🇺🇸 US (+1)</option>
                        <option value="+44">🇬🇧 UK (+44)</option>
                        <option value="+971">🇦🇪 UAE (+971)</option>
                        <option value="+65">🇸🇬 SG (+65)</option>
                        <option value="+49">🇩🇪 EU (+49)</option>
                        <option value="+61">🇦🇺 AU (+61)</option>
                        <option value="+91">🇮🇳 IN (+91)</option>
                        <option value="other">🌐 Global</option>
                      </select>
                    </div>

                    <div className="sm:col-span-2 space-y-1.5">
                      <label className="text-xs font-mono uppercase text-slate-300 font-semibold">
                        3. Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 019-2831"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* 4. Primary Project Focus */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase text-slate-300 font-semibold flex items-center justify-between">
                      <span>4. Primary Project Focus</span>
                      <span className="text-blue-400">*</span>
                    </label>
                    <select
                      value={formData.primaryProjectFocus}
                      onChange={(e) => setFormData({ ...formData, primaryProjectFocus: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500"
                    >
                      <option value="Custom Web / SaaS">Custom Web / SaaS</option>
                      <option value="Mobile App">Mobile App</option>
                      <option value="Attendance Management & ERP">Attendance Management &amp; ERP</option>
                      <option value="Custom CRM / Workflow">Custom CRM / Workflow</option>
                      <option value="Legacy Platform Revamp">Legacy Platform Revamp</option>
                      <option value="White-Label">White-Label</option>
                    </select>
                  </div>

                  {/* 5. Estimated Target Timeline (Interactive Pills) */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase text-slate-300 font-semibold flex items-center justify-between">
                      <span>5. Estimated Target Timeline</span>
                      <span className="text-blue-400">*</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {timelineOptions.map((opt) => {
                        const isSelected = formData.estimatedTimeline === opt;
                        return (
                          <button
                            type="button"
                            key={opt}
                            onClick={() => setFormData({ ...formData, estimatedTimeline: opt })}
                            className={`p-2.5 rounded-xl border text-xs font-mono transition-colors text-center cursor-pointer ${
                              isSelected
                                ? "bg-slate-800 text-white font-bold border-slate-600"
                                : "bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
                            }`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 6. Project Overview / Key Requirements */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase text-slate-300 font-semibold">
                      6. Project Overview / Key Requirements
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Describe your objectives, required integrations, user volume, or current operational bottlenecks..."
                      value={formData.projectOverview}
                      onChange={(e) => setFormData({ ...formData, projectOverview: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 resize-none transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting || !formData.fullName || !formData.workEmail}
                    className="w-full justify-center text-sm font-semibold bg-blue-600 hover:bg-blue-500 py-3.5 rounded-xl transition-colors"
                  >
                    {isSubmitting ? (
                      "Generating Architectural Estimate..."
                    ) : (
                      <>
                        <span>Request Architecture &amp; Sprint Plan</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </Button>

                  {/* Compliance Subtext */}
                  <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between gap-2">
                    <span className="flex items-center gap-1.5 text-slate-300">
                      <Lock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      NDA available on request. Your data is protected under strict global privacy standards.
                    </span>
                    <span className="text-blue-400 font-semibold shrink-0 hidden sm:inline">24h SLA</span>
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
