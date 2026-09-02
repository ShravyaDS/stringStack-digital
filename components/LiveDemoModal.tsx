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
  Sparkles,
  ArrowRight,
  Activity,
  Zap,
  Users,
  Send,
  AlertTriangle,
  Play,
  RotateCcw,
  Check,
} from "lucide-react";
import { Button } from "./ui/Button";
import { Badge } from "./ui/Badge";
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
    { time: "09:00:14", user: "Alexander Vance (Sr. Architect)", location: "HQ Polygon Geofence", status: "Verified (ARM TrustZone)" },
    { time: "08:58:32", user: "Elena Rostova (DevOps Lead)", location: "London Branch Terminal", status: "Biometric TCP/IP Synced" },
    { time: "08:55:01", user: "Kenji Sato (Mobile Engineer)", location: "Tokyo Node Geofence", status: "Verified (GPS Polygon)" },
  ]);

  // Simulation state for CRM Lead Routing
  const [crmSimulating, setCrmSimulating] = useState(false);
  const [crmLeadStage, setCrmLeadStage] = useState<"New Lead" | "AI Qualified" | "Architect Routed" | "Proposal Dispatched">("New Lead");

  // Simulation state for Telemetry
  const [activeAlerts, setActiveAlerts] = useState<string[]>([]);

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
        time: new Date().toLocaleTimeString(),
        user: "Live Test User (Sandbox)",
        location: "Simulated Geofence Alpha",
        status: "Verified • 0% Spoof Risk",
      };
      setPunchLogs((prev) => [newLog, ...prev.slice(0, 4)]);
      setTimeout(() => setPunchStatus("idle"), 3500);
    }, 1200);
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
        }, 1000);
      }, 1000);
    }, 1000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-surface border border-slate-700/90 rounded-3xl shadow-2xl shadow-blue-500/10 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-obsidian/80">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-accent-emerald animate-ping" />
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Interactive Enterprise Sandbox
              </span>
              <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                SprintStack Production Software Suite
                <Badge variant="emerald" size="sm">Live Sandbox</Badge>
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close demo modal"
            className="text-slate-400 hover:text-white p-2 rounded-xl hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-border bg-obsidian/40 overflow-x-auto px-4 py-2 gap-2 text-xs font-mono">
          <button
            onClick={() => setActiveTab("attendance")}
            className={`px-4 py-2 rounded-xl transition-all flex items-center gap-2 shrink-0 ${
              activeTab === "attendance"
                ? "bg-accent-blue text-white font-bold shadow-md shadow-blue-500/20"
                : "text-slate-400 hover:text-white hover:bg-surface"
            }`}
          >
            <Fingerprint className="w-3.5 h-3.5" />
            <span>Attendance ERP OS</span>
          </button>

          <button
            onClick={() => setActiveTab("governance")}
            className={`px-4 py-2 rounded-xl transition-all flex items-center gap-2 shrink-0 ${
              activeTab === "governance"
                ? "bg-indigo-600 text-white font-bold shadow-md shadow-indigo-500/20"
                : "text-slate-400 hover:text-white hover:bg-surface"
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Project & Resource Governance</span>
          </button>

          <button
            onClick={() => setActiveTab("crm")}
            className={`px-4 py-2 rounded-xl transition-all flex items-center gap-2 shrink-0 ${
              activeTab === "crm"
                ? "bg-accent-emerald text-obsidian font-bold shadow-md shadow-emerald-500/20"
                : "text-slate-400 hover:text-white hover:bg-surface"
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Custom CRM & Routing</span>
          </button>

          <button
            onClick={() => setActiveTab("telemetry")}
            className={`px-4 py-2 rounded-xl transition-all flex items-center gap-2 shrink-0 ${
              activeTab === "telemetry"
                ? "bg-cyan-500 text-obsidian font-bold shadow-md shadow-cyan-500/20"
                : "text-slate-400 hover:text-white hover:bg-surface"
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>Process Telemetry & RBAC</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 bg-obsidian/30">
          {/* TAB 1: Attendance ERP OS */}
          {activeTab === "attendance" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-surface border border-slate-700/80">
                <div className="space-y-1">
                  <div className="text-xs font-mono uppercase text-emerald-400 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    Live Geofence + Biometric Simulator
                  </div>
                  <h3 className="text-base font-bold text-white">
                    Simulate Mobile Check-In & Anti-Spoofing Verification
                  </h3>
                  <p className="text-xs text-slate-400">
                    Tests GPS polygon bounding, hardware mock location inspection, and direct TCP/IP ledger synchronization.
                  </p>
                </div>

                <Button
                  onClick={handleSimulatePunch}
                  disabled={punchStatus === "verifying"}
                  variant={punchStatus === "success" ? "emerald" : "primary"}
                  size="md"
                  className="shrink-0 gap-2"
                >
                  {punchStatus === "verifying" ? (
                    <>
                      <Clock className="w-4 h-4 animate-spin text-blue-200" />
                      <span>Verifying Coordinates...</span>
                    </>
                  ) : punchStatus === "success" ? (
                    <>
                      <Check className="w-4 h-4 text-white" />
                      <span>Punch Verified (28ms)</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4" />
                      <span>Trigger Live Punch-In</span>
                    </>
                  )}
                </Button>
              </div>

              {/* Attendance Live Log Table */}
              <div className="rounded-2xl bg-surface border border-border p-4 space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-slate-400">
                  <span>Real-time Ingestion Stream</span>
                  <span className="text-accent-emerald text-[11px]">TCP/IP Sync Active</span>
                </div>

                <div className="space-y-2">
                  {punchLogs.map((log, index) => (
                    <div
                      key={index}
                      className="p-2.5 rounded-xl bg-obsidian border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-slate-300"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-slate-500">{log.time}</span>
                        <strong className="text-white">{log.user}</strong>
                      </div>
                      <div className="flex items-center gap-3 text-xs">
                        <span className="text-slate-400">{log.location}</span>
                        <span className="text-accent-emerald font-semibold">{log.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Payroll 1-Click Export Preview */}
              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-0.5">
                  <span className="text-xs font-mono uppercase text-emerald-400 font-bold">
                    Statutory Payroll Sync Engine
                  </span>
                  <p className="text-xs text-slate-300">
                    Reconciled 2,480 attendance hours across US, UK & UAE shifts. Ready for instant SAP/ADP export.
                  </p>
                </div>
                <Badge variant="emerald" size="md">
                  0.8s Total Reconciliation
                </Badge>
              </div>
            </div>
          )}

          {/* TAB 2: Project & Resource Governance */}
          {activeTab === "governance" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-surface border border-border space-y-1 font-mono">
                  <div className="text-slate-400 text-xs">Billable Capacity</div>
                  <div className="text-2xl font-bold text-white">94.2%</div>
                  <div className="text-[11px] text-accent-emerald">Optimized resource allocation</div>
                </div>

                <div className="p-4 rounded-2xl bg-surface border border-border space-y-1 font-mono">
                  <div className="text-slate-400 text-xs">Budget Burn SLA</div>
                  <div className="text-2xl font-bold text-accent-blue font-mono">$48,200 / $50,000</div>
                  <div className="text-[11px] text-blue-400">Fixed Milestone Protected</div>
                </div>

                <div className="p-4 rounded-2xl bg-surface border border-border space-y-1 font-mono">
                  <div className="text-slate-400 text-xs">Gantt Milestone Velocity</div>
                  <div className="text-2xl font-bold text-indigo-400 font-mono">4.2x Average</div>
                  <div className="text-[11px] text-indigo-300">Sprint 1-4 on-schedule</div>
                </div>
              </div>

              {/* Simulated Gantt Milestone Matrix */}
              <div className="p-5 rounded-2xl bg-surface border border-border space-y-4 font-mono text-xs">
                <div className="text-slate-300 font-bold flex items-center justify-between">
                  <span>Sprint Milestone Pipeline (Fixed Delivery Schedule)</span>
                  <span className="text-accent-emerald text-[11px]">Sprint 3 in Active QA</span>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-slate-400 text-[11px] mb-1">
                      <span>Phase 1: DB Schema &amp; Auth Architecture</span>
                      <span className="text-emerald-400">100% Signed Off</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-obsidian overflow-hidden">
                      <div className="h-full bg-accent-emerald w-full" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-slate-400 text-[11px] mb-1">
                      <span>Phase 2: Core Microservices &amp; Edge APIs</span>
                      <span className="text-emerald-400">100% Signed Off</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-obsidian overflow-hidden">
                      <div className="h-full bg-accent-emerald w-full" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-slate-400 text-[11px] mb-1">
                      <span>Phase 3: Cross-Device QA &amp; ISO Audit</span>
                      <span className="text-accent-blue">85% Complete</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-obsidian overflow-hidden">
                      <div className="h-full bg-accent-blue w-[85%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-slate-400 text-[11px] mb-1">
                      <span>Phase 4: Zero-Downtime Cutover &amp; IP Handover</span>
                      <span className="text-slate-500">Queued for Day 28</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-obsidian overflow-hidden">
                      <div className="h-full bg-slate-700 w-[15%]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Custom CRM & Lead Operations */}
          {activeTab === "crm" && (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-surface border border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-sm font-bold text-white">Omnichannel Lead Pipeline Engine</h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Ingests incoming enterprise briefs across Web, WhatsApp, and Partner APIs with sub-200ms routing.
                  </p>
                </div>
                <Button
                  onClick={handleSimulateCrm}
                  disabled={crmSimulating}
                  variant="primary"
                  size="md"
                  className="gap-2 shrink-0"
                >
                  <Send className="w-4 h-4" />
                  <span>{crmSimulating ? "Routing Lead..." : "Simulate Inbound Deal Flow"}</span>
                </Button>
              </div>

              {/* Lead Stage Flow */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
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
                      className={`p-3.5 rounded-xl border text-xs font-mono transition-all ${
                        isCurrent
                          ? "bg-emerald-500/15 border-accent-emerald text-white font-bold scale-[1.02]"
                          : "bg-surface/60 border-border text-slate-400"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] text-slate-500 uppercase">Stage</span>
                        {isCurrent && <span className="w-2 h-2 rounded-full bg-accent-emerald animate-ping" />}
                      </div>
                      <div className="font-bold text-sm text-slate-100">{step.stage}</div>
                      <div className="text-[11px] text-slate-400 mt-1">{step.desc}</div>
                    </div>
                  );
                })}
              </div>

              <div className="p-4 rounded-2xl bg-obsidian border border-slate-800 font-mono text-xs space-y-2 text-slate-300">
                <div className="text-slate-500 flex items-center justify-between">
                  <span>Simulated Deal Record (#SP-9482)</span>
                  <span className="text-accent-emerald">Status: {crmLeadStage}</span>
                </div>
                <div>Account: <strong className="text-white">Fintech Systems Global (London, UK)</strong></div>
                <div>Project Scope: <span className="text-accent-blue">High-Concurrency SaaS Platform (Next.js + Go)</span></div>
                <div>Contract Target: <span className="text-emerald-400">$65,000 / 6-Week Fixed Sprint</span></div>
              </div>
            </div>
          )}

          {/* TAB 4: Process Telemetry & RBAC */}
          {activeTab === "telemetry" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
                <div className="p-4 rounded-2xl bg-surface border border-border space-y-1">
                  <span className="text-slate-400">Audit Trail Integrity</span>
                  <div className="text-lg font-bold text-accent-emerald">SHA-256 Chained</div>
                  <span className="text-[10px] text-slate-500">100% Tamper Proof</span>
                </div>
                <div className="p-4 rounded-2xl bg-surface border border-border space-y-1">
                  <span className="text-slate-400">RBAC Scopes</span>
                  <div className="text-lg font-bold text-white">48 Granular Roles</div>
                  <span className="text-[10px] text-slate-500">Branch & Dept Level</span>
                </div>
                <div className="p-4 rounded-2xl bg-surface border border-border space-y-1">
                  <span className="text-slate-400">Telemetry Latency</span>
                  <div className="text-lg font-bold text-cyan-400">18ms Global Avg</div>
                  <span className="text-[10px] text-slate-500">WebSocket Mesh</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-obsidian border border-slate-800 font-mono text-xs space-y-3">
                <div className="text-slate-400 flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="flex items-center gap-1.5 text-slate-200">
                    <ShieldCheck className="w-4 h-4 text-accent-emerald" />
                    Live System Compliance Stream
                  </span>
                  <span className="text-slate-500 text-[11px]">ISO 27001 / SOC 2 Ready</span>
                </div>
                <div className="text-slate-300 space-y-1.5 text-[11px]">
                  <div>[10:32:01.442] <span className="text-emerald-400">AUTH_OK</span> Session validated for user token (US-East Edge Node)</div>
                  <div>[10:32:03.119] <span className="text-blue-400">AUDIT_LOG</span> Employee roster recalculated across 12 branch entities</div>
                  <div>[10:32:05.881] <span className="text-indigo-400">SYNC_DISPATCH</span> Webhook fired to ERP ledger with zero packet loss</div>
                  <div>[10:32:08.012] <span className="text-cyan-400">ENCRYPTION</span> TLS 1.3 key rotation verified across distributed replicas</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4 border-t border-border bg-obsidian/90">
          <span className="text-xs text-slate-400 font-mono text-center sm:text-left">
            Need a custom deployment with your exact corporate rules?
          </span>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Button
              onClick={() => {
                onClose();
                openBookingModal();
              }}
              variant="primary"
              size="md"
              className="w-full sm:w-auto gap-2"
            >
              <span>Schedule 15-Min Technical Discovery</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
