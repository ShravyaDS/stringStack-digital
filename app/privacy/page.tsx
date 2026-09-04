import React from "react";
import { ShieldCheck } from "lucide-react";
import { BackButton } from "@/components/ui/BackButton";

export const metadata = {
  title: "Privacy Policy | SprintStack.digital",
  description: "Enterprise privacy and data governance policies of SprintStack.digital.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24 bg-slate-50 dark:bg-[#090D16] min-h-screen text-slate-700 dark:text-slate-300 transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <BackButton fallbackHref="/" label="Back to Homepage" />

        <div className="space-y-4 border-b border-slate-200 dark:border-slate-800 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-mono">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Enterprise Data Governance</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 font-mono">
            Last Updated: January 2026 • SprintStack.digital
          </p>
        </div>

        <div className="space-y-8 text-sm leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
              1. Information We Collect
            </h2>
            <p>
              When you submit a discovery brief, request a product demo, or contact us through our website, we collect your name, corporate email address, phone / WhatsApp number, project specifications, and timeline requirements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
              2. Use of Information
            </h2>
            <p>
              We process information solely to prepare architecture estimates, draft mutual Non-Disclosure Agreements (NDAs), coordinate technical discovery calls, and deliver software engineering services. We never sell or license your personal or corporate data to third parties.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
              3. Client IP &amp; Confidentiality
            </h2>
            <p>
              All proprietary business logic, schemas, designs, and architectural deliverables shared with SprintStack.digital are treated under strict bilateral confidentiality. All intellectual property developed during client engagements transfers 100% to the client upon milestone settlement.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
              4. Global Data Protection Compliance
            </h2>
            <p>
              We adhere to global data privacy regulations including GDPR (European Union), UK Data Protection Act, and Singapore PDPA across our international client engagements (US, UK, UAE, Singapore, EU, Australia).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
              5. Contact Information
            </h2>
            <p>
              For inquiries regarding data governance or to request data deletion, contact our engineering privacy officer at{" "}
              <a href="mailto:hello@sprintstack.digital" className="text-cyan-600 dark:text-cyan-400 font-semibold hover:underline">
                hello@sprintstack.digital
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
