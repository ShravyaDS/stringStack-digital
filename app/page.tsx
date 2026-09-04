import { EpamHero } from "@/components/sections/EpamHero";
import { TrustBanner } from "@/components/sections/TrustBanner";
import { SocialProofBanner } from "@/components/sections/SocialProofBanner";
import { ServiceBento } from "@/components/sections/ServiceBento";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { TechMatrix } from "@/components/sections/TechMatrix";
import { SprintCalculator } from "@/components/sections/SprintCalculator";
import { PartnershipSection } from "@/components/sections/PartnershipSection";
import { DeliveryFramework } from "@/components/sections/DeliveryFramework";
import { FAQSection } from "@/components/sections/FAQSection";
import { DiscoveryForm } from "@/components/sections/DiscoveryForm";

export default function Home() {
  return (
    <>
      {/* 1. Hero Section: Positioning, What We Build, CTAs & 3-Slide Crossfade */}
      <EpamHero />

      {/* 2. Enterprise Trust Guarantees: 100% IP, Agile Sprints, Global Compliance */}
      <TrustBanner />

      {/* 3. Social Proof & Engineering Guild: Authentic Studio Collaboration & Partner Tier */}
      <SocialProofBanner />

      {/* 4. Core Engineering Capabilities: Bento Grid (Web, Mobile, E-commerce, Middleware) */}
      <ServiceBento />

      {/* 5. Enterprise Solutions: Bento Grid (Attendance ERP Flagship, Governance, CRM, Telemetry) */}
      <ProductShowcase />

      {/* 5. Technology Stack: Modern Enterprise Ecosystem */}
      <TechMatrix />

      {/* 6. Interactive Sprint Scope & Timeline Estimator */}
      <SprintCalculator />

      {/* 7. White-Label & Agency Partnerships: 3-Step Agency Revenue Model */}
      <PartnershipSection />

      {/* 8. Delivery Process: 4 Structured Engineering Stages */}
      <DeliveryFramework />

      {/* 9. Engineering Engagement FAQ Accordion */}
      <FAQSection />

      {/* 10. Technical Discovery Funnel: Let's Scope Your Software Build */}
      <DiscoveryForm />
    </>
  );
}
