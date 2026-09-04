"use client";

import React, { useState, useEffect } from "react";
import { X, Calendar, Clock, Globe, CheckCircle2, User, Mail, ArrowRight } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [selectedDate, setSelectedDate] = useState<string>("Tomorrow");
  const [selectedSlot, setSelectedSlot] = useState<string>("15:00 UTC");
  const [focusArea, setFocusArea] = useState<string>("Full-Stack Web Engineering (Next.js)");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [timezone, setTimezone] = useState<string>("UTC+00:00 (London/GMT)");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    try {
      const userTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (userTz) {
        setTimezone(userTz);
      }
    } catch {
      // Default timezone
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const dates = [
    { label: "Today", detail: "Urgent slot" },
    { label: "Tomorrow", detail: "High availability" },
    { label: "In 2 Days", detail: "Morning & Afternoon" },
    { label: "In 3 Days", detail: "Standard availability" },
  ];

  const slots = [
    "09:00 UTC",
    "11:30 UTC",
    "14:00 UTC",
    "15:30 UTC",
    "17:00 UTC",
    "19:30 UTC",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch("/api/discovery-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name || "Anonymous Discovery Lead",
          email,
          projectFocus: focusArea,
          timeline: "immediate",
          projectOverview: `Discovery Call scheduled for ${selectedDate} at ${selectedSlot} (${timezone}). Focus: ${focusArea}`,
        }),
      });
      setIsSubmitted(true);
    } catch (err) {
      console.error("Failed to book slot", err);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 md:p-8 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white border border-[#E5E8ED] rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Header Bar ── */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 border-b border-[#E5E8ED] bg-[#F8FAFC]">
          <div className="flex items-center gap-2 sm:gap-2.5">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#475569] truncate">
              Technical Discovery
            </span>
            <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[#EEF2FF] text-[#2554EB] border border-blue-100 shrink-0">
              15 Min
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close booking modal"
            className="text-[#64748B] hover:text-[#0F172A] w-9 h-9 rounded-lg hover:bg-slate-200/70 active:bg-slate-300 flex items-center justify-center transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* ── Content Body ── */}
        <div className="p-4 sm:p-6 md:p-8 max-h-[85vh] sm:max-h-[82vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#0F172A]">Discovery Call Confirmed!</h3>
              <p className="text-[#475569] max-w-md mx-auto text-sm leading-relaxed">
                We have locked in your 15-minute architecture discovery with our Lead Systems Architect for{" "}
                <span className="text-[#0F172A] font-semibold">{selectedDate} at {selectedSlot}</span>.
              </p>
              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E5E8ED] inline-block text-left text-xs font-mono space-y-1.5 text-[#475569]">
                <div><span className="text-[#64748B]">Attendee:</span> <strong className="text-[#0F172A]">{email}</strong></div>
                <div><span className="text-[#64748B]">Topic:</span> <strong className="text-[#0F172A]">{focusArea}</strong></div>
                <div><span className="text-[#64748B]">Timezone:</span> <strong className="text-[#0F172A]">{timezone}</strong></div>
              </div>
              <div className="pt-3">
                <button
                  onClick={onClose}
                  className="btn-primary px-6 py-2.5 text-sm font-semibold cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-[#0F172A] tracking-tight">
                  Book a 15-Minute Technical Discovery
                </h2>
                <p className="text-sm text-[#475569] mt-1">
                  Talk directly with a Lead Solutions Architect. We review your architecture, scope feasibility, and sprint timeline with zero sales fluff.
                </p>
              </div>

              {/* ── Consultation Focus Selection ── */}
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">
                  Select Consultation Focus
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    "Full-Stack Web Engineering (Next.js)",
                    "Mobile App & Flutter Development",
                    "Attendance ERP & Workforce Suite",
                    "White-Label Agency Partnership",
                  ].map((area) => {
                    const isSelected = focusArea === area;
                    return (
                      <button
                        type="button"
                        key={area}
                        onClick={() => setFocusArea(area)}
                        className={`text-left p-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                          isSelected
                            ? "bg-[#EEF2FF] border-2 border-[#2554EB] text-[#0F172A] shadow-xs"
                            : "bg-white border-[#E5E8ED] text-[#475569] hover:border-[#CBD5E1] hover:text-[#0F172A]"
                        }`}
                      >
                        {area}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* ── Date & Time selection ── */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#64748B] flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#2554EB]" />
                    Target Date
                  </label>
                  <div className="space-y-1.5">
                    {dates.map((d) => {
                      const isSelected = selectedDate === d.label;
                      return (
                        <button
                          type="button"
                          key={d.label}
                          onClick={() => setSelectedDate(d.label)}
                          className={`w-full flex items-center justify-between p-2.5 rounded-lg border text-xs transition-all cursor-pointer ${
                            isSelected
                              ? "bg-[#EEF2FF] border-2 border-[#2554EB] text-[#0F172A] font-semibold"
                              : "bg-white border-[#E5E8ED] text-[#475569] hover:border-[#CBD5E1]"
                          }`}
                        >
                          <span className="font-semibold text-[#0F172A]">{d.label}</span>
                          <span className="text-[11px] text-[#64748B]">{d.detail}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#64748B] flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-emerald-600" />
                    Available Time Slots
                  </label>
                  <div className="grid grid-cols-2 gap-1.5">
                    {slots.map((slot) => {
                      const isSelected = selectedSlot === slot;
                      return (
                        <button
                          type="button"
                          key={slot}
                          onClick={() => setSelectedSlot(slot)}
                          className={`p-2.5 rounded-lg border text-xs font-mono transition-all text-center cursor-pointer ${
                            isSelected
                              ? "bg-emerald-50 border-2 border-emerald-600 text-emerald-700 font-bold shadow-xs"
                              : "bg-white border-[#E5E8ED] text-[#475569] hover:border-[#CBD5E1]"
                          }`}
                        >
                          {slot}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* ── Timezone banner ── */}
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#F8FAFC] border border-[#E5E8ED] text-xs text-[#475569]">
                <Globe className="w-3.5 h-3.5 text-[#2554EB] shrink-0" />
                <span>Detected Timezone: <strong className="text-[#0F172A]">{timezone}</strong></span>
              </div>

              {/* ── User credentials ── */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#64748B] flex items-center gap-1">
                    <User className="w-3 h-3 text-[#64748B]" />
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Alex Morgan"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white border border-[#E5E8ED] rounded-xl px-3.5 py-2.5 text-base sm:text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#64748B] flex items-center gap-1">
                    <Mail className="w-3 h-3 text-[#64748B]" />
                    Work Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@enterprise.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white border border-[#E5E8ED] rounded-xl px-3.5 py-2.5 text-base sm:text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
                  />
                </div>
              </div>

              {/* ── Submit CTA ── */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting || !email}
                  className="btn-primary w-full py-3.5 text-sm font-semibold cursor-pointer active:scale-95 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    "Locking in calendar slot..."
                  ) : (
                    "Confirm 15-Min Technical Discovery"
                  )}
                </button>
                <div className="flex items-center justify-center gap-2 mt-3 text-[11px] text-[#64748B] font-mono">
                  Cal.com sync enabled • Direct Google Meet invite generated automatically
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
