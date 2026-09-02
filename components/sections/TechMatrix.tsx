"use client";

import React from "react";
import { TECH_STACK_DOMAINS } from "@/lib/constants";
import { Code2, Layers, Cpu, Database, Globe, Cloud } from "lucide-react";

export function TechMatrix() {
  const domainIcons: Record<string, React.ReactNode> = {
    "Frontend Web": <Code2 className="w-5 h-5 text-blue-400" />,
    "Backend & APIs": <Layers className="w-5 h-5 text-indigo-400" />,
    "Mobile Platforms": <Cpu className="w-5 h-5 text-cyan-400" />,
    "Databases & Caching": <Database className="w-5 h-5 text-emerald-400" />,
    "CMS & Quick Engines": <Globe className="w-5 h-5 text-amber-400" />,
    "Cloud & DevOps": <Cloud className="w-5 h-5 text-purple-400" />,
  };

  return (
    <section id="tech-stack" className="py-20 md:py-24 bg-[#080C14] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 mb-12 md:mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
            MODERN TECHNOLOGY ECOSYSTEM
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Technology Stack
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Battle-tested, enterprise-grade frameworks and cloud infrastructure. Zero obsolete legacy frameworks.
          </p>
        </div>

        {/* 6 Clean Technology Domain Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECH_STACK_DOMAINS.map((item) => {
            const techList = item.supported.split(", ");
            return (
              <div
                key={item.domain}
                className="p-6 sm:p-7 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white">
                      {domainIcons[item.domain]}
                    </div>
                    <span className="text-xs font-mono text-cyan-400 font-semibold">
                      {techList.length} Frameworks
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {item.domain}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {item.supported}
                    </p>
                  </div>

                  {/* Technology Highlights */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {item.highlights.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Category Code */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Standard Architecture:</span>
                  <span className="text-cyan-400 font-semibold">{item.categoryCode}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
