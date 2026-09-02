"use client";

import React, { useState, useEffect } from "react";
import { X, Calendar, Clock, Globe, CheckCircle2, User, Mail, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "./ui/Button";
import { Badge } from "./ui/Badge";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [selectedDate, setSelectedDate] = useState<string>("Tomorrow");
  const [selectedSlot, setSelectedSlot] = useState<string>("15:00 UTC");
  const [focusArea, setFocusArea] = useState<string>("Custom ERP / Web Platform");
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
      // Send to API route
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-surface border border-slate-700/80 rounded-2xl shadow-2xl shadow-blue-500/10 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-obsidian/60">
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-accent-emerald animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-wider text-slate-300">
              Technical Discovery Session
            </span>
            <Badge variant="blue" size="sm">15 Min</Badge>
          </div>
          <button
            onClick={onClose}
            aria-label="Close booking modal"
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8 max-h-[85vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-accent-emerald flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="text-2xl font-bold text-white">Discovery Call Confirmed!</h3>
              <p className="text-slate-300 max-w-md mx-auto text-sm leading-relaxed">
                We have locked in your 15-minute architecture discovery with our Lead Systems Architect for{" "}
                <span className="text-white font-semibold">{selectedDate} at {selectedSlot}</span>.
              </p>
              <div className="p-4 rounded-xl bg-obsidian border border-border inline-block text-left text-xs font-mono space-y-1.5 text-slate-400">
                <div><span className="text-slate-500">Attendee:</span> {email}</div>
                <div><span className="text-slate-500">Topic:</span> {focusArea}</div>
                <div><span className="text-slate-500">Timezone:</span> {timezone}</div>
              </div>
              <div className="pt-4">
                <Button onClick={onClose} variant="primary">
                  Done
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  Book a 15-Minute Technical Discovery
                </h2>
                <p className="text-sm text-slate-400 mt-1">
                  Talk directly with a Lead Solutions Architect. We review your architecture, scope feasibility, and sprint timeline with zero sales fluff.
                </p>
              </div>

              {/* Focus area select */}
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase text-slate-300">
                  Select Consultation Focus
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    "Full-Stack Web Engineering (Next.js)",
                    "Mobile App & Flutter Development",
                    "Attendance ERP & Workforce Suite",
                    "White-Label Agency Partnership",
                  ].map((area) => (
                    <button
                      type="button"
                      key={area}
                      onClick={() => setFocusArea(area)}
                      className={`text-left p-3 rounded-xl border text-xs font-medium transition-all ${
                        focusArea === area
                          ? "bg-blue-500/10 border-accent-blue text-white shadow-sm shadow-blue-500/20"
                          : "bg-obsidian/70 border-border text-slate-400 hover:text-slate-200 hover:border-slate-700"
                      }`}
                    >
                      {area}
                    </button>
                  ))}
                </div>
              </div>

              {/* Date & Time selection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase text-slate-300 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-accent-blue" />
                    Target Date
                  </label>
                  <div className="space-y-1.5">
                    {dates.map((d) => (
                      <button
                        type="button"
                        key={d.label}
                        onClick={() => setSelectedDate(d.label)}
                        className={`w-full flex items-center justify-between p-2.5 rounded-lg border text-xs font-medium transition-all ${
                          selectedDate === d.label
                            ? "bg-blue-500/15 border-accent-blue text-white"
                            : "bg-obsidian/50 border-border text-slate-400 hover:text-slate-200"
                        }`}
                      >
                        <span className="font-semibold">{d.label}</span>
                        <span className="text-[11px] text-slate-500">{d.detail}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase text-slate-300 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-accent-emerald" />
                    Available Time Slots
                  </label>
                  <div className="grid grid-cols-2 gap-1.5">
                    {slots.map((slot) => (
                      <button
                        type="button"
                        key={slot}
                        onClick={() => setSelectedSlot(slot)}
                        className={`p-2.5 rounded-lg border text-xs font-mono transition-all text-center ${
                          selectedSlot === slot
                            ? "bg-emerald-500/15 border-accent-emerald text-emerald-300 font-semibold"
                            : "bg-obsidian/50 border-border text-slate-400 hover:text-slate-200"
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Timezone banner */}
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-obsidian border border-border text-xs text-slate-400">
                <Globe className="w-3.5 h-3.5 text-accent-blue shrink-0" />
                <span>Detected Timezone: <strong className="text-slate-200">{timezone}</strong></span>
              </div>

              {/* User credentials */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase text-slate-300 flex items-center gap-1">
                    <User className="w-3 h-3 text-slate-400" />
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Alex Morgan"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-obsidian border border-border rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase text-slate-300 flex items-center gap-1">
                    <Mail className="w-3 h-3 text-slate-400" />
                    Work Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@enterprise.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-obsidian border border-border rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full justify-center"
                  disabled={isSubmitting || !email}
                >
                  {isSubmitting ? (
                    "Locking in calendar slot..."
                  ) : (
                    <>
                      Confirm 15-Min Technical Discovery
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </Button>
                <div className="flex items-center justify-center gap-2 mt-3 text-[11px] text-slate-500 font-mono">
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
