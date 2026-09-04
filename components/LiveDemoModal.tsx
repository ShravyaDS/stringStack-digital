"use client";

import React, { useState, useEffect } from "react";
import {
  X,
  MapPin,
  Fingerprint,
  Clock,
  FileSpreadsheet,
  ShieldCheck,
  BarChart3,
  CheckCircle2,
  Users,
  Send,
  Play,
  Check,
  Activity,
  ArrowRight,
} from "lucide-react";
import { useBookingModal } from "./ModalProvider";

interface LiveDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: "attendance" | "governance" | "crm" | "telemetry";
}

export function LiveDemoModal({ isOpen, onClose, defaultTab = "attendance" }: LiveDemoModalProps) {
  const { openBookingModal } = useBookingModal();
  const [activeTab, setActiveTab] = useState<"attendance" | "governance" | "crm" | "telemetry">(defaultTab);

  // Simulation state for Attendance
  const [punchStatus, setPunchStatus] = useState<"idle" | "verifying" | "success">("idle");
  const [punchLogs, setPunchLogs] = useState<Array<{ time: string; user: string; location: string; status: string }>>([
    { time: "09:00:14", user: "Alexander Vance (Sr. Architect)", location: "HQ Polygon Geofence", status: "Verified • ARM TrustZone" },
    { time: "08:58:32", user: "Elena Rostova (DevOps Lead)", location: "London Branch Terminal", status: "TCP/IP Biometric Synced" },
    { time: "08:55:01", user: "Kenji Sato (Mobile Engineer)", location: "Tokyo Node Geofence", status: "Verified • GPS Polygon" },
  ]);

  // Simulation state for CRM Lead Routing
  const [crmSimulating, setCrmSimulating] = useState(false);
  const [crmLeadStage, setCrmLeadStage] = useState<"New Lead" | "AI Qualified" | "Architect Routed" | "Proposal Dispatched">("New Lead");

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

  const handleSimulatePunch = () => {
    setPunchStatus("verifying");
    setTimeout(() => {
      setPunchStatus("success");
      const newLog = {
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" }),
        user: "Live Test User (Sandbox)",
        location: "Simulated Geofence Alpha",
        status: "Verified • 0% Spoof Risk",
      };
      setPunchLogs((prev) => [newLog, ...prev.slice(0, 3)]);
      setTimeout(() => setPunchStatus("idle"), 3500);
    }, 1100);
  };

  const handleSimulateCrm = () => {
    setCrmSimulating(true);
    setCrmLeadStage("New Lead");
    setTimeout(() => {
      setCrmLeadStage("AI Qualified");
      setTimeout(() => {
        setCrmLeadStage("Architect Routed");
        setTimeout(() => {
          setCrmLeadStage("Proposal Dispatched");
          setCrmSimulating(false);
        }, 900);
      }, 900);
    }, 900);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 md:p-8 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white border border-[#E5E8ED] rounded-2xl shadow-[0_20px_60px_rgba(15,22,38,0.15)] overflow-hidden flex flex-col max-h-[92vh] sm:max-h-[90vh] animate-in zoom-in-95 duration-200 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Header ── */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 border-b border-[#E5E8ED] bg-[#F6F7F9]">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <div>
              <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#64748B] block">
                Interactive Enterprise Sandbox
              </span>
              <h2 className="text-sm sm:text-base md:text-lg font-bold text-[#0F172A] flex items-center gap-2">
                <span className="truncate">Production Software Suite</span>
                <span className="text-[10px] sm:text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[#E9F9F1] text-[#0E9F6E] border border-emerald-200 shrink-0">
                  Live
                </span>
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close demo modal"
            className="text-[#64748B] hover:text-[#0F172A] w-9 h-9 rounded-lg hover:bg-slate-200/60 active:bg-slate-300 transition-colors cursor-pointer flex items-center justify-center shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* ── Clean Light Tab Navigation (Horizontally Swipeable on Mobile) ── */}
        <div className="flex border-b border-[#E5E8ED] bg-[#F6F7F9] overflow-x-auto no-scrollbar px-3 sm:px-6 gap-1.5 sm:gap-2 text-xs font-semibold shrink-0">
          {[
            { id: "attendance", label: "Attendance ERP", Icon: Fingerprint },
            { id: "governance", label: "Governance & Sprints", Icon: BarChart3 },
            { id: "crm", label: "CRM & Routing", Icon: Users },
            { id: "telemetry", label: "Telemetry & RBAC", Icon: Activity },
          ].map((tab) => {
            const isCurrent = activeTab === tab.id;
            const Icon = tab.Icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3 py-2.5 transition-all flex items-center gap-1.5 sm:gap-2 shrink-0 cursor-pointer border-b-2 whitespace-nowrap ${
                  isCurrent
                    ? "bg-white text-[#2554EB] border-[#2554EB] font-bold shadow-2xs rounded-t-lg -mb-[1px]"
                    : "text-[#64748B] hover:text-[#0F172A] border-transparent hover:bg-white/60 rounded-t-lg"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isCurrent ? "text-[#2554EB]" : "text-[#64748B]"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* ── Content Body ── */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5 sm:space-y-6 flex-1 bg-white">
          
          {/* ════ TAB 1: Attendance ERP OS ════ */}
          {activeTab === "attendance" && (
            <div className="space-y-5">
              
              {/* Trigger panel ("Simulate Mobile Check-In...") */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-[#F8FAFC] border border-[#E5E8ED]">
                <div className="space-y-1">
                  <div className="text-xs font-semibold text-[#0E9F6E] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#0E9F6E] animate-pulse" />
                    <span>Live Geofence + Biometric Simulator</span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-[#0F172A]">
                    Simulate Mobile Check-In &amp; Anti-Spoofing Verification
                  </h3>
                  <p className="text-xs text-[#5B6472]">
                    Tests GPS polygon bounding, hardware mock location inspection, and direct TCP/IP ledger synchronization.
                  </p>
                </div>

                <button
                  onClick={handleSimulatePunch}
                  disabled={punchStatus === "verifying"}
                  className="btn-primary px-4 py-2 text-xs font-semibold cursor-pointer active:scale-95 transition-transform shrink-0 flex items-center gap-2"
                >
                  {punchStatus === "verifying" ? (
                    <>
                      <Clock className="w-3.5 h-3.5 animate-spin text-blue-200" />
                      <span>Verifying Coordinates...</span>
                    </>
                  ) : punchStatus === "success" ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-white" />
                      <span>Punch Verified (28ms)</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Trigger Live Punch-In</span>
                    </>
                  )}
                </button>
              </div>

              {/* Real-Time Ingestion Stream (Relighted) */}
              <div className="rounded-xl bg-white border border-[#E5E8ED] p-4 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-[#E5E8ED]">
                  <span className="text-xs font-semibold text-[#0F172A]">Real-time Ingestion Stream</span>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[#E9F9F1] text-[#0E9F6E] border border-emerald-200 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0E9F6E] animate-pulse" />
                    <span>TCP/IP Sync Active</span>
                  </span>
                </div>

                <div className="space-y-2">
                  {punchLogs.map((log, index) => (
                    <div
                      key={`${log.time}-${index}`}
                      className="p-3 rounded-lg bg-[#F8FAFC] border border-[#E5E8ED] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs animate-in fade-in slide-in-from-top-2 duration-200"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-[11px] font-mono text-[#94A3B8]">{log.time}</span>
                        <strong className="font-semibold text-[#0F172A]">{log.user}</strong>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-[#64748B] text-[11px]">{log.location}</span>
                        <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-[#E9F9F1] text-[#0E9F6E] border border-emerald-200">
                          {log.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reconciliation Summary Panel */}
              <div className="p-4 rounded-xl bg-[#F3FBF7] border border-[#CDEFE0] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-0.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#0E9F6E] block">
                    Statutory Payroll Sync Engine
                  </span>
                  <p className="text-xs text-[#334155]">
                    Reconciled 2,480 attendance hours across US, UK &amp; UAE shifts. Ready for instant SAP/Zoho/ADP export.
                  </p>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white text-[#0E9F6E] border border-[#CDEFE0] shadow-2xs shrink-0 text-center">
                  0.8s Total Reconciliation
                </span>
              </div>

            </div>
          )}

          {/* ════ TAB 2: Project & Resource Governance ════ */}
          {activeTab === "governance" && (
            <div className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E5E8ED] space-y-1">
                  <div className="text-[#64748B] text-xs font-medium">Billable Capacity</div>
                  <div className="text-2xl font-bold font-mono text-[#0F172A]">94.2%</div>
                  <div className="text-[11px] font-semibold text-[#0E9F6E]">Optimized resource allocation</div>
                </div>

                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E5E8ED] space-y-1">
                  <div className="text-[#64748B] text-xs font-medium">Budget Burn SLA</div>
                  <div className="text-2xl font-bold font-mono text-[#2554EB]">$48,200 / $50,000</div>
                  <div className="text-[11px] font-semibold text-[#2554EB]">Fixed Milestone Protected</div>
                </div>

                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E5E8ED] space-y-1">
                  <div className="text-[#64748B] text-xs font-medium">Gantt Milestone Velocity</div>
                  <div className="text-2xl font-bold font-mono text-purple-600">4.2x Average</div>
                  <div className="text-[11px] font-semibold text-purple-600">Sprint 1–4 on-schedule</div>
                </div>
              </div>

              {/* Gantt Milestone Matrix */}
              <div className="p-5 rounded-xl bg-white border border-[#E5E8ED] space-y-4 text-xs">
                <div className="text-[#0F172A] font-semibold flex items-center justify-between border-b border-[#E5E8ED] pb-2">
                  <span>Sprint Milestone Pipeline (Fixed Delivery Schedule)</span>
                  <span className="text-[#0E9F6E] text-[11px] font-semibold">Sprint 3 in Active QA</span>
                </div>

                <div className="space-y-3.5">
                  <div>
                    <div className="flex justify-between text-[#64748B] text-[11px] mb-1 font-medium">
                      <span>Phase 1: DB Schema &amp; Auth Architecture</span>
                      <span className="text-[#0E9F6E] font-semibold">100% Signed Off</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                      <div className="h-full bg-emerald-500 w-full rounded-full" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[#64748B] text-[11px] mb-1 font-medium">
                      <span>Phase 2: Core Microservices &amp; Edge APIs</span>
                      <span className="text-[#0E9F6E] font-semibold">100% Signed Off</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                      <div className="h-full bg-emerald-500 w-full rounded-full" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[#64748B] text-[11px] mb-1 font-medium">
                      <span>Phase 3: Cross-Device QA &amp; ISO Audit</span>
                      <span className="text-[#2554EB] font-semibold">85% Complete</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                      <div className="h-full bg-[#2554EB] w-[85%] rounded-full" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[#64748B] text-[11px] mb-1 font-medium">
                      <span>Phase 4: Zero-Downtime Cutover &amp; IP Handover</span>
                      <span className="text-[#94A3B8]">Queued for Day 28</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                      <div className="h-full bg-slate-300 w-[15%] rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ════ TAB 3: Custom CRM & Lead Operations ════ */}
          {activeTab === "crm" && (
            <div className="space-y-5">
              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E5E8ED] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-sm font-bold text-[#0F172A]">Omnichannel Lead Pipeline Engine</h3>
                  <p className="text-xs text-[#5B6472] mt-0.5">
                    Ingests incoming enterprise briefs across Web, WhatsApp, and Partner APIs with sub-200ms routing.
                  </p>
                </div>
                <button
                  onClick={handleSimulateCrm}
                  disabled={crmSimulating}
                  className="btn-primary px-4 py-2 text-xs font-semibold cursor-pointer active:scale-95 transition-transform shrink-0 flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{crmSimulating ? "Routing Lead..." : "Simulate Inbound Deal Flow"}</span>
                </button>
              </div>

              {/* Lead Stage Flow */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { stage: "New Lead", desc: "Multi-channel ingest" },
                  { stage: "AI Qualified", desc: "Scope & budget match" },
                  { stage: "Architect Routed", desc: "Assigned to tech lead" },
                  { stage: "Proposal Dispatched", desc: "Fixed sprint PDF created" },
                ].map((step) => {
                  const isCurrent = crmLeadStage === step.stage;
                  return (
                    <div
                      key={step.stage}
                      className={`p-3 rounded-xl border text-xs transition-all ${
                        isCurrent
                          ? "bg-[#E9F9F1] border-2 border-[#0E9F6E] text-[#0F172A] font-bold shadow-xs"
                          : "bg-white border-[#E5E8ED] text-[#475569]"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-semibold text-[#64748B] uppercase">Stage</span>
                        {isCurrent && <span className="w-2 h-2 rounded-full bg-[#0E9F6E] animate-ping" />}
                      </div>
                      <div className="font-bold text-xs text-[#0F172A]">{step.stage}</div>
                      <div className="text-[11px] text-[#64748B] mt-0.5">{step.desc}</div>
                    </div>
                  );
                })}
              </div>

              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E5E8ED] text-xs space-y-1.5 text-[#475569]">
                <div className="text-[#64748B] flex items-center justify-between pb-1 border-b border-[#E5E8ED]">
                  <span>Simulated Deal Record (#SP-9482)</span>
                  <span className="text-[#0E9F6E] font-semibold">Status: {crmLeadStage}</span>
                </div>
                <div>Account: <strong className="text-[#0F172A]">Fintech Systems Global (London, UK)</strong></div>
                <div>Project Scope: <span className="text-[#2554EB] font-medium">High-Concurrency SaaS Platform (Next.js + PostgreSQL)</span></div>
                <div>Contract Target: <span className="text-[#0E9F6E] font-bold">$65,000 / 6-Week Fixed Sprint</span></div>
              </div>
            </div>
          )}

          {/* ════ TAB 4: Process Telemetry & RBAC ════ */}
          {activeTab === "telemetry" && (
            <div className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E5E8ED] space-y-1">
                  <span className="text-[#64748B]">Audit Trail Integrity</span>
                  <div className="text-lg font-bold text-[#0E9F6E] font-mono">SHA-256 Chained</div>
                  <span className="text-[10px] text-[#94A3B8]">100% Tamper Proof</span>
                </div>
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E5E8ED] space-y-1">
                  <span className="text-[#64748B]">RBAC Scopes</span>
                  <div className="text-lg font-bold text-[#0F172A] font-mono">48 Granular Roles</div>
                  <span className="text-[10px] text-[#94A3B8]">Branch &amp; Dept Level</span>
                </div>
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E5E8ED] space-y-1">
                  <span className="text-[#64748B]">Telemetry Latency</span>
                  <div className="text-lg font-bold text-[#2554EB] font-mono">18ms Global Avg</div>
                  <span className="text-[10px] text-[#94A3B8]">WebSocket Mesh</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E5E8ED] text-xs space-y-2.5">
                <div className="flex items-center justify-between pb-2 border-b border-[#E5E8ED]">
                  <span className="flex items-center gap-1.5 font-semibold text-[#0F172A]">
                    <ShieldCheck className="w-4 h-4 text-[#0E9F6E]" />
                    Live System Compliance Stream
                  </span>
                  <span className="text-[11px] font-semibold text-[#64748B]">ISO 27001 / SOC 2 Ready</span>
                </div>
                <div className="space-y-1.5 text-[11px] font-mono text-[#475569]">
                  <div>[10:32:01] <span className="text-[#0E9F6E] font-bold">AUTH_OK</span> Session validated for user token (US-East Edge Node)</div>
                  <div>[10:32:03] <span className="text-[#2554EB] font-bold">AUDIT_LOG</span> Employee roster recalculated across 12 branch entities</div>
                  <div>[10:32:05] <span className="text-purple-600 font-bold">SYNC_DISPATCH</span> Webhook fired to ERP ledger with zero packet loss</div>
                  <div>[10:32:08] <span className="text-[#0E9F6E] font-bold">ENCRYPTION</span> TLS 1.3 key rotation verified across distributed replicas</div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* ── Footer Actions ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-4 sm:px-6 py-3.5 sm:py-4 border-t border-[#E5E8ED] bg-[#F6F7F9] pb-safe">
          <span className="text-xs text-[#5B6472] font-medium text-center sm:text-left">
            Need a custom deployment with your exact corporate rules?
          </span>

          <button
            onClick={() => {
              onClose();
              openBookingModal();
            }}
            className="btn-primary w-full sm:w-auto px-5 py-3 sm:py-2.5 text-xs font-semibold cursor-pointer active:scale-95 transition-transform flex items-center justify-center gap-1.5"
          >
            <span>Schedule 15-Min Technical Discovery</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
