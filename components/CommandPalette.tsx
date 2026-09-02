"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  Code2,
  Smartphone,
  ShieldCheck,
  Cpu,
  Layers,
  Calendar,
  Play,
  ArrowRight,
  FileText,
  Workflow,
  Sparkles,
  Command,
} from "lucide-react";
import { useBookingModal } from "./ModalProvider";

interface PaletteItem {
  id: string;
  title: string;
  category: "Solutions" | "Enterprise Software" | "Tech Stack" | "Actions";
  description: string;
  icon: React.ReactNode;
  action: () => void;
  shortcut?: string;
}

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();
  const { openBookingModal, openDemoModal } = useBookingModal();

  const items: PaletteItem[] = [
    // Actions
    {
      id: "action-discovery",
      title: "Schedule a 15-Minute Technical Discovery",
      category: "Actions",
      description: "Direct scoping call with a Principal Systems Architect",
      icon: <Calendar className="w-4 h-4 text-cyan-400" />,
      action: () => {
        setIsOpen(false);
        openBookingModal();
      },
      shortcut: "Book",
    },
    {
      id: "action-demo",
      title: "Launch Interactive Sandbox Demos",
      category: "Actions",
      description: "Test live Attendance ERP and CRM telemetry simulators",
      icon: <Play className="w-4 h-4 text-emerald-400" />,
      action: () => {
        setIsOpen(false);
        openDemoModal();
      },
      shortcut: "Demo",
    },
    {
      id: "action-calculator",
      title: "Open Interactive Sprint Scope Estimator",
      category: "Actions",
      description: "Calculate delivery timelines, squad composition, and sprint count",
      icon: <Layers className="w-4 h-4 text-blue-400" />,
      action: () => {
        setIsOpen(false);
        const el = document.getElementById("estimator");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      },
      shortcut: "Calc",
    },
    // Enterprise Software
    {
      id: "product-attendance",
      title: "Attendance & Workforce Management ERP",
      category: "Enterprise Software",
      description: "GPS geofencing, ZKTeco biometric sync, shift rules, and payroll exports",
      icon: <ShieldCheck className="w-4 h-4 text-emerald-400" />,
      action: () => {
        setIsOpen(false);
        router.push("/products/attendance-erp");
      },
    },
    {
      id: "product-governance",
      title: "Project Management & Resource Governance",
      category: "Enterprise Software",
      description: "Gantt milestones, utilization heatmaps, budget tracking, and invoicing",
      icon: <Layers className="w-4 h-4 text-blue-400" />,
      action: () => {
        setIsOpen(false);
        router.push("/#enterprise-solutions");
      },
    },
    {
      id: "product-crm",
      title: "Custom CRM & Lead Operations Engine",
      category: "Enterprise Software",
      description: "WhatsApp/Web lead capture, lead routing, quote and PDF contracts",
      icon: <Cpu className="w-4 h-4 text-indigo-400" />,
      action: () => {
        setIsOpen(false);
        router.push("/#enterprise-solutions");
      },
    },
    {
      id: "product-automation",
      title: "Business Process Automation & Telemetry",
      category: "Enterprise Software",
      description: "Live dashboards, WhatsApp/SMS alerts, audit trails, and RBAC",
      icon: <Workflow className="w-4 h-4 text-cyan-400" />,
      action: () => {
        setIsOpen(false);
        router.push("/#enterprise-solutions");
      },
    },
    // Solutions
    {
      id: "service-web",
      title: "Web Applications & Dynamic Business Platforms",
      category: "Solutions",
      description: "High-concurrency Next.js App Router & React 19 edge architectures",
      icon: <Code2 className="w-4 h-4 text-blue-400" />,
      action: () => {
        setIsOpen(false);
        router.push("/services/web-development");
      },
    },
    {
      id: "service-mobile",
      title: "Native & Cross-Platform Mobile Apps",
      category: "Solutions",
      description: "Flutter, React Native, Swift iOS & Kotlin Android field tools",
      icon: <Smartphone className="w-4 h-4 text-cyan-400" />,
      action: () => {
        setIsOpen(false);
        router.push("/services/mobile-apps");
      },
    },
    {
      id: "service-whitelabel",
      title: "White-Label & Agency Partnerships",
      category: "Solutions",
      description: "100% white-label software engineering for digital consultancies and agencies",
      icon: <FileText className="w-4 h-4 text-purple-400" />,
      action: () => {
        setIsOpen(false);
        router.push("/partners/white-label");
      },
    },
  ];

  const filteredItems = items.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      // Toggle palette on Cmd+K or Ctrl+K
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    },
    [isOpen]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const handleItemSelect = (index: number) => {
    const item = filteredItems[index];
    if (item) {
      item.action();
    }
  };

  const handlePaletteKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      handleItemSelect(selectedIndex);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="relative w-full max-w-2xl bg-surface border border-slate-700/90 rounded-2xl shadow-2xl shadow-blue-500/10 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handlePaletteKey}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-border bg-obsidian">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Search software systems, tech stack, or actions..."
            autoFocus
            className="w-full bg-transparent text-sm sm:text-base text-white placeholder-slate-500 focus:outline-none font-sans"
          />
          <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-[10px] font-mono text-slate-400">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-[380px] overflow-y-auto p-2 space-y-1">
          {filteredItems.length === 0 ? (
            <div className="p-8 text-center text-sm text-slate-400">
              No results found for &ldquo;{query}&rdquo;.
            </div>
          ) : (
            filteredItems.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemSelect(idx)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full flex items-center justify-between p-3 rounded-xl text-left transition-colors cursor-pointer ${
                    isSelected
                      ? "bg-blue-600/20 border border-blue-500/40 text-white"
                      : "bg-transparent text-slate-300 hover:bg-slate-900"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`p-2 rounded-lg border shrink-0 ${
                        isSelected
                          ? "bg-blue-500/20 border-blue-500/40"
                          : "bg-slate-900 border-slate-800"
                      }`}
                    >
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold truncate">
                          {item.title}
                        </span>
                        <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700/60 shrink-0">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 truncate">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected ? "translate-x-1 text-cyan-400" : "text-transparent"
                    }`}
                  />
                </button>
              );
            })
          )}
        </div>

        {/* Footer info bar */}
        <div className="px-4 py-2 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>ESC Close</span>
          </div>
          <span className="text-cyan-400 font-semibold">SprintStack Command Palette</span>
        </div>
      </div>
    </div>
  );
}

// Quick trigger button component for Navbar
export function CommandPaletteTrigger() {
  const [, setTriggerOpen] = useState(false);

  const handleClick = () => {
    // Dispatch Cmd+K event to open palette
    window.dispatchEvent(
      new KeyboardEvent("keydown", { key: "k", ctrlKey: true, metaKey: true, bubbles: true })
    );
  };

  return (
    <button
      onClick={handleClick}
      className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 text-xs font-mono text-slate-400 hover:text-white transition-all shadow-inner group"
      title="Search and Navigation (⌘K)"
    >
      <Search className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
      <span className="text-xs">Quick Search</span>
      <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-[10px] text-slate-400 font-bold">
        ⌘K
      </kbd>
    </button>
  );
}
