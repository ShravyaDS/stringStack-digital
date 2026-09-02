import { EpamHero } from "@/components/sections/EpamHero";
import { TrustBanner } from "@/components/sections/TrustBanner";
import { ServiceBento } from "@/components/sections/ServiceBento";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { TransformationCompare } from "@/components/sections/TransformationCompare";
import { TechMatrix } from "@/components/sections/TechMatrix";
import { SprintCalculator } from "@/components/sections/SprintCalculator";
import { PartnershipSection } from "@/components/sections/PartnershipSection";
import { DeliveryFramework } from "@/components/sections/DeliveryFramework";
import { DiscoveryForm } from "@/components/sections/DiscoveryForm";

export default function Home() {
  return (
    <>
      {/* 1. Hero Section: Positioning, What We Build, CTAs & 3-Slide Crossfade */}
      <EpamHero />

      {/* 2. Enterprise Trust Guarantees: 100% IP, Agile Sprints, Global Compliance */}
      <TrustBanner />

      {/* 3. Core Engineering Capabilities: Web, Mobile, E-commerce, Middleware */}
      <ServiceBento />

      {/* 4. Enterprise Solutions: Attendance ERP, Resource Governance, CRM, Telemetry */}
      <ProductShowcase />

      {/* 5. Interactive System Modernization Comparison: Legacy vs SprintStack */}
      <TransformationCompare />

      {/* 6. Technology Stack: Modern Enterprise Ecosystem */}
      <TechMatrix />

      {/* 7. Interactive Sprint Scope & Timeline Estimator */}
      <SprintCalculator />

      {/* 8. White-Label & Agency Partnerships: 3-Step Agency Revenue Model */}
      <PartnershipSection />

      {/* 9. Delivery Process: 4 Structured Engineering Stages */}
      <DeliveryFramework />

      {/* 10. Technical Discovery Funnel: Let's Scope Your Software Build */}
      <DiscoveryForm />
    </>
  );
}
