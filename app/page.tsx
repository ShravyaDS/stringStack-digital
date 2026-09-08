import { EpamHero } from "@/components/sections/EpamHero";
import { ServiceBento } from "@/components/sections/ServiceBento";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { DeliveryFramework } from "@/components/sections/DeliveryFramework";
import { TechMatrix } from "@/components/sections/TechMatrix";
import { SocialProofBanner } from "@/components/sections/SocialProofBanner";

export default function Home() {
  return (
    <>
      {/* 1. Hero: High-Performance Software Engineering (3-Slide Rotating Showcase) */}
      <EpamHero />

      {/* 2. Solutions: What We Engineer (6 Core Engineering Bento Cards) */}
      <ServiceBento />

      {/* 3. Enterprise Software: Ready-to-Deploy Software Solutions (4 Core Modules) */}
      <ProductShowcase />

      {/* 4. Process: Our Process — From Discovery to Deployment (4 Connected Steps) */}
      <DeliveryFramework />

      {/* 5. Tech Stack: Modern Tools. Proven Results. (12 Core Technologies) */}
      <TechMatrix />

      {/* 6. Call to Action: Start Your Next Project (Pre-Footer Discovery Banner) */}
      <SocialProofBanner />
    </>
  );
}
