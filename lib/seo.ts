import { SITE_CONFIG } from "./constants";

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/images/logo.png`,
    description: SITE_CONFIG.description,
    email: SITE_CONFIG.links.email,
    sameAs: [
      SITE_CONFIG.links.github,
      SITE_CONFIG.links.linkedin,
      SITE_CONFIG.links.twitter,
    ],
    areaServed: ["US", "GB", "AE", "SG", "DE", "AU", "Worldwide"],
    knowsAbout: [
      "Custom ERP Software",
      "Enterprise SaaS Engineering",
      "Flutter Development",
      "React Enterprise Apps",
      "Attendance Management Software",
      "Next.js Development Services",
    ],
  };
}

export function generateProfessionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "SprintStack.digital Engineering Services",
    url: `${SITE_CONFIG.url}/services/web-development`,
    image: `${SITE_CONFIG.url}/images/og-image.jpg`,
    description:
      "Enterprise software development, full-stack React/Next.js platforms, mobile apps with Flutter, and custom ERP engineering.",
    priceRange: "$$$$",
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
    serviceType: [
      "Full-Stack Web Engineering",
      "Mobile Systems & Flutter Development",
      "Custom ERP Software Development",
      "White-Label Engineering Squads",
    ],
  };
}

export function generateSoftwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "SprintStack Attendance & Workforce Management ERP",
    operatingSystem: "Web, iOS, Android, Cloud",
    applicationCategory: "BusinessApplication",
    offers: {
      "@type": "Offer",
      price: "Custom Enterprise",
      priceCurrency: "USD",
    },
    description:
      "Enterprise attendance and workforce operating system featuring geofenced mobile check-ins, biometric hardware sync, automated shift engine, and one-click payroll calculation.",
    featureList: [
      "Geofenced Mobile Punch-In with Anti-Spoofing",
      "Biometric Hardware Integration (ZKTeco, Hikvision)",
      "Dynamic Shift, Grace Period & Overtime Automation",
      "Direct Payroll Export for SAP, Oracle, and QuickBooks",
      "Cryptographically Verified Audit Trails",
    ],
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_CONFIG.url}${item.url}`,
    })),
  };
}
