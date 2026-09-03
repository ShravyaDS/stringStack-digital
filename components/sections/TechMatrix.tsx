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
    "Cloud & DevOps": <Cloud className="w-5 h-5 text-blue-400" />,
  };

  return (
    <section id="tech-stack" className="py-20 md:py-24 relative" style={{ background: "linear-gradient(180deg, #0E1623 0%, #090D16 100%)", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="flex items-center justify-center">
            <span className="section-label-blue section-label">Modern Technology Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1]">
            Technology <span className="text-gradient-blue-violet">Stack</span>
          </h2>
          <p className="text-[#A3A2B0] text-base leading-relaxed">
            Battle-tested, enterprise-grade frameworks and cloud infrastructure. Zero obsolete legacy frameworks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TECH_STACK_DOMAINS.map((item) => {
            const techList = item.supported.split(", ");
            return (
              <div
                key={item.domain}
                className="card-raised rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-5 hover-glow-blue"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="icon-box" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                      {domainIcons[item.domain]}
                    </div>
                    <span className="text-[11px] font-semibold" style={{ color: "#22D3EE" }}>
                      {techList.length} Frameworks
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white tracking-tight">
                      {item.domain}
                    </h3>
                    <p className="text-xs text-[#6B6A78] mt-1 leading-relaxed">
                      {item.supported}
                    </p>
                  </div>

                  {/* Technology Highlights */}
                  <div className="flex flex-wrap gap-1.5">
                    {item.highlights.map((tech) => (
                      <span key={tech} className="tech-pill">{tech}</span>
                    ))}
                  </div>
                </div>

                {/* Category Code */}
                <div className="pt-4 flex items-center justify-between text-xs" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                  <span className="text-[#6B6A78]">Standard Architecture:</span>
                  <span className="font-mono font-semibold" style={{ color: "#22D3EE" }}>{item.categoryCode}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
