import React from "react";
import { FileText } from "lucide-react";
import { BackButton } from "@/components/ui/BackButton";

export const metadata = {
  title: "Terms of Service | SprintStack.digital",
  description: "Terms of service and engineering engagement agreements of SprintStack.digital.",
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 bg-[#090D16] min-h-screen text-slate-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <BackButton fallbackHref="/" label="Back to Homepage" />

        <div className="space-y-4 border-b border-slate-800 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono">
            <FileText className="w-3.5 h-3.5" />
            <span>Enterprise Service Terms</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Terms of Service
          </h1>
          <p className="text-sm text-slate-400 font-mono">
            Last Updated: January 2026 • SprintStack.digital
          </p>
        </div>

        <div className="space-y-8 text-sm leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white tracking-tight">
              1. Engagement Framework
            </h2>
            <p>
              SprintStack.digital delivers custom software engineering, ERP system implementation, and white-label engineering capacity on fixed-scope sprint models. Specific sprint deliverables, acceptance criteria, and timelines are codified in individual Statements of Work (SOW).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white tracking-tight">
              2. Intellectual Property Transfer
            </h2>
            <p>
              Upon receipt of agreed milestone payments, SprintStack.digital unconditionally transfers all intellectual property, source code repositories, design assets, and architecture schematics created specifically for the client.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white tracking-tight">
              3. White-Label &amp; Non-Disclosure (NDA)
            </h2>
            <p>
              For agency and consultancy partners, SprintStack.digital operates under bilateral non-disclosure agreements. We do not publicly disclose agency client identities or projects unless explicit written authorization is provided.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white tracking-tight">
              4. Service Level Agreements (SLA) &amp; Warranties
            </h2>
            <p>
              Code delivered during sprint cycles includes post-launch hardening warranties to remediate bugs or defects discovered within the agreed warranty period, as specified in the service contract.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white tracking-tight">
              5. Governing Law
            </h2>
            <p>
              Standard commercial agreements with international clients are governed by international commercial arbitration standards or the mutually agreed jurisdiction identified in the executed Master Services Agreement (MSA).
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
