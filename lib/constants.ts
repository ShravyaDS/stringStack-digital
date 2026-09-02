export const SITE_CONFIG = {
  name: "SprintStack.digital",
  tagline: "High-Performance Software Engineering & Enterprise ERP Systems",
  positioning: "Elite Engineering Partner • Pragmatic • High-Trust • Delivery-Focused • Zero Fluff",
  description:
    "SprintStack.digital is a software engineering and enterprise technology company providing custom software solutions for businesses globally across the US, UK, UAE, Singapore, EU, Australia, and global growth hubs.",
  url: "https://sprintstack.digital",
  ogImage: "/images/og-image.jpg",
  links: {
    calBooking: "https://cal.com/sprintstack/discovery-15min",
    email: "engineering@sprintstack.digital",
    github: "https://github.com/sprintstack",
    linkedin: "https://linkedin.com/company/sprintstack-digital",
    twitter: "https://x.com/sprintstack",
  },
  markets: [
    { code: "US", name: "United States", flag: "🇺🇸", region: "US-East (N. Virginia)" },
    { code: "UK", name: "United Kingdom", flag: "🇬🇧", region: "EU-West (London)" },
    { code: "UAE", name: "UAE / Dubai", flag: "🇦🇪", region: "ME-Central (Dubai)" },
    { code: "SG", name: "Singapore", flag: "🇸🇬", region: "AP-Southeast (Singapore)" },
    { code: "EU", name: "European Union", flag: "🇪🇺", region: "EU-Central (Frankfurt)" },
    { code: "AU", name: "Australia", flag: "🇦🇺", region: "AP-Southeast (Sydney)" },
  ],
  whatWeBuild: [
    "Web applications",
    "Mobile applications",
    "ERP systems",
    "CRM systems",
    "Workflow automation",
    "Digital products",
  ],
  trustMetrics: [
    {
      title: "100% IP Ownership",
      detail: "Full code ownership, comprehensive documentation, and clean repository transfer from Day 1.",
      badge: "Immediate Transfer",
    },
    {
      title: "Agile Sprint Cadence",
      detail: "1–2 week fixed sprint blocks with weekly production demos and direct architect access.",
      badge: "Fixed Milestones",
    },
    {
      title: "Global Standards",
      detail: "Built for enterprise compliance (ISO, GDPR, HIPAA) across cross-border infrastructure.",
      badge: "Enterprise Ready",
    },
    {
      title: "Zero Technical Debt",
      detail: "Clean architectures built across Next.js, Node.js, Python, Flutter, and PostgreSQL.",
      badge: "Strict Architecture",
    },
  ],
  stats: [
    { label: "Production Uptime SLA", value: "99.99%", detail: "Enterprise resilience" },
    { label: "Delivery Velocity", value: "4x", detail: "Fixed sprint cadences" },
    { label: "Global Edge Latency", value: "< 28ms", detail: "Edge CDN in US, EU & Asia" },
    { label: "Lighthouse Performance", value: "99+", detail: "Optimized Core Web Vitals" },
  ],
};

export const CORE_CAPABILITIES = [
  {
    id: "web-development",
    slug: "web-development",
    category: "Web Applications & Dynamic Business Platforms",
    headline: "High-Concurrency Web Ecosystems & Business Platforms",
    description:
      "Scalable, high-concurrency web ecosystems and robust business platforms built with React, Next.js, Node.js, and TypeScript. Sub-second performance, strict security, and zero technical debt.",
    coreFocus: "High-Concurrency Web Systems • Enterprise SaaS • Business Platforms",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    link: "/services/web-development",
    href: "/services/web-development",
    badge: "Next.js & React",
  },
  {
    id: "mobile-apps",
    slug: "mobile-apps",
    category: "Native & Cross-Platform Mobile Apps",
    headline: "Mobile Application Development (iOS, Android & Flutter)",
    description:
      "Production-grade mobile applications built across Flutter, React Native, native Swift (iOS), and Kotlin (Android). Offline-first synchronization, hardware biometric integration, and fluid UX.",
    coreFocus: "Cross-Platform Flutter • React Native • Native iOS & Android",
    techStack: ["Flutter", "React Native", "Swift", "Kotlin", "SQLite", "Biometrics"],
    link: "/services/mobile-apps",
    href: "/services/mobile-apps",
    badge: "Flutter & Native",
  },
  {
    id: "ecommerce",
    slug: "ecommerce",
    category: "E-commerce / Headless & Omnichannel Commerce",
    headline: "E-commerce Platforms & Omnichannel Experiences",
    description:
      "Headless e-commerce architectures, custom digital storefronts, and multi-region inventory synchronization. Global payment processing across Stripe, Adyen, and regional gateways.",
    coreFocus: "E-commerce Platforms • Headless Commerce • Omnichannel Experiences",
    techStack: ["Headless Shopify", "Next.js Commerce", "WooCommerce", "Stripe", "Adyen", "Redis"],
    link: "/services/web-development",
    href: "/services/web-development",
    badge: "Omnichannel Commerce",
  },
  {
    id: "integrations-automation",
    slug: "integrations-automation",
    category: "System Integrations & Process Automation",
    headline: "API Integrations & Workflow Automation",
    description:
      "Connect fragmented enterprise systems into automated business workflows. Robust REST and GraphQL APIs, event-driven webhooks, and ETL pipelines eliminating manual bottlenecks.",
    coreFocus: "API Integrations • Business-System Integrations • Workflow Automation",
    techStack: ["REST APIs", "GraphQL", "Webhooks", "FastAPI", "Python", "Docker", "AWS"],
    link: "/services/web-development",
    href: "/services/web-development",
    badge: "APIs & Automation",
  },
];

export const ENTERPRISE_SOLUTIONS = [
  {
    id: "attendance-erp",
    slug: "attendance-erp",
    moduleNumber: "Module 01",
    title: "Enterprise Attendance & Workforce Management",
    summary: "Eliminate manual logs, proxy check-ins, and shift-planning chaos.",
    keyFeatures: [
      "Geofenced & multi-location mobile check-ins with IP restriction.",
      "Biometric hardware API sync (ZKTeco, Realtime, Suprema).",
      "Dynamic shift scheduling, overtime tracking, and multi-tier leave approval matrices.",
      "Real-time automated payroll sync with statutory compliance exports.",
    ],
    technicalMetrics: {
      checkInTime: "< 0.4s",
      biometricSync: "Realtime TCP/IP & MQTT",
      spoofDefense: "ARM TrustZone & GPS Polygon",
      payrollCompatibility: "SAP, Oracle, QuickBooks, ADP",
    },
    badge: "Flagship Suite",
    link: "/products/attendance-erp",
    href: "/products/attendance-erp",
  },
  {
    id: "project-governance",
    slug: "project-governance",
    moduleNumber: "Module 02",
    title: "Project Management & Resource Governance",
    summary: "Full visibility into delivery pipelines, billable capacity, and project margins.",
    keyFeatures: [
      "Milestone-driven task dependencies and Gantt scheduling.",
      "Resource allocation matrices and real-time utilization heatmaps.",
      "Automated client reporting dashboards and deliverable sign-off workflows.",
      "Real-time budget burn tracking with integrated invoicing milestones.",
    ],
    technicalMetrics: {
      burnRateTracking: "Sub-second Ledger Sync",
      ganttEngine: "Interactive Canvas 120 FPS",
      marginAccuracy: "99.98% Forecast Precision",
      approvalSpeed: "Automated Sign-Off Gates",
    },
    badge: "Operations OS",
    link: "/products/attendance-erp",
    href: "/products/attendance-erp",
  },
  {
    id: "custom-crm",
    slug: "custom-crm",
    moduleNumber: "Module 03",
    title: "Custom CRM & Lead Operations Engine",
    summary: "Custom sales pipelines designed around your exact operational sales cycle.",
    keyFeatures: [
      "Multi-channel lead ingestion (Web, WhatsApp, Email, Ad networks).",
      "Automated lead routing, stage tracking, and deal aging alerts.",
      "Custom quotation and PDF contract generation within the platform.",
      "Omnichannel communication history and client engagement telemetry.",
    ],
    technicalMetrics: {
      leadIngestionSpeed: "< 150ms Instant Sync",
      routingMatrix: "Skill & Territory Weighted",
      pdfGeneration: "< 0.8s High-Res Rendering",
      slaCompliance: "Automated Deal Escalations",
    },
    badge: "High-Conversion",
    link: "/products/attendance-erp",
    href: "/products/attendance-erp",
  },
  {
    id: "process-automation",
    slug: "process-automation",
    moduleNumber: "Module 04",
    title: "Business Process Automation & Monitoring",
    summary: "Real-time data streams and telemetry to track business operations without manual check-ins.",
    keyFeatures: [
      "Custom executive dashboards and live metric telemetry.",
      "Automated trigger-based email, SMS, and WhatsApp alerts.",
      "End-to-end audit trails and role-based access control (RBAC).",
      "Automated ETL pipelines consolidating multi-branch accounting and inventory.",
    ],
    technicalMetrics: {
      streamLatency: "< 25ms WebSocket Telemetry",
      auditTrail: "Cryptographic SHA-256 Chained",
      alertDispatch: "Multi-Channel Fallback",
      rbacGranularity: "Field-Level Permission Scoping",
    },
    badge: "Telemetry Engine",
    link: "/products/attendance-erp",
    href: "/products/attendance-erp",
  },
];

export const INDUSTRIES = [
  {
    id: "fintech",
    name: "Financial Services & FinTech",
    subtitle: "High-concurrency ledgers & payment mesh",
    description: "Sub-second transaction processing, PCI-DSS compliance, multi-currency wallets, and automated reconciliation engines.",
    badge: "PCI-DSS / SOC-2",
    iconName: "CreditCard",
    metrics: "< 15ms Latency • 99.999% SLA",
  },
  {
    id: "logistics",
    name: "Logistics, Field & Workforce",
    subtitle: "Geofenced telemetry & offline-first ERP",
    description: "Multi-facility geofencing, hardware biometric sync, dynamic shift rostering, and driver routing engines.",
    badge: "ZKTeco / GPS",
    iconName: "Truck",
    metrics: "50,000+ Active Seats",
  },
  {
    id: "ecommerce",
    name: "Digital Commerce & Retail",
    subtitle: "Headless omnichannel storefronts",
    description: "Multi-region inventory routing, sub-50ms product catalog lookups, and unified global checkout flows.",
    badge: "Global Rails",
    iconName: "ShoppingBag",
    metrics: "Instant Settlement",
  },
  {
    id: "healthcare",
    name: "HealthTech & Regulated Data",
    subtitle: "HIPAA & GDPR sovereign systems",
    description: "Cryptographic audit logging, zero-knowledge patient data isolation, and FHIR-compliant API middleware.",
    badge: "HIPAA / ISO 27001",
    iconName: "HeartPulse",
    metrics: "Zero-Trust Encryption",
  },
  {
    id: "saas",
    name: "SaaS & High-Tech Ventures",
    subtitle: "Edge SSR & multi-tenant architectures",
    description: "Next.js 15 App Router platforms, React 19 Server Actions, and distributed PostgreSQL clusters engineered for rapid PMF.",
    badge: "Next.js 15",
    iconName: "Cpu",
    metrics: "4x Sprint Velocity",
  },
  {
    id: "agencies",
    name: "Digital Consultancies & Agencies",
    subtitle: "100% White-Label engineering pods",
    description: "Silent execution squads, bilateral NDA adherence, and unencumbered IP transfers for agency service expansion.",
    badge: "Stealth NDA",
    iconName: "Briefcase",
    metrics: "7-Day Squad Ramp",
  },
];

// Aliases for compatibility
export const SERVICES = CORE_CAPABILITIES;
export const PRODUCTS = ENTERPRISE_SOLUTIONS;

export const TECH_STACK_DOMAINS = [
  {
    domain: "Frontend Web",
    supported: "React.js, Next.js, Tailwind CSS, TypeScript",
    highlights: ["Next.js 15 App Router", "React 19 Server Actions", "Strict TypeScript", "Tailwind CSS Design Tokens"],
    categoryCode: "WEB_UI",
  },
  {
    domain: "Backend & APIs",
    supported: "Node.js (Express/Nest), Python (Django/FastAPI), Laravel",
    highlights: ["High-Concurrency REST & GraphQL", "FastAPI Asynchronous Pipelines", "NestJS Microservices", "Laravel APIs"],
    categoryCode: "API_SYS",
  },
  {
    domain: "Mobile Platforms",
    supported: "Flutter, React Native, Native iOS (Swift), Android (Kotlin)",
    highlights: ["Flutter Cross-Platform", "React Native", "Swift & CoreLocation", "Kotlin & Foreground Services"],
    categoryCode: "MOB_OS",
  },
  {
    domain: "Databases & Caching",
    supported: "MySQL, PostgreSQL, MongoDB, Redis",
    highlights: ["PostgreSQL ACID Schemas", "Redis Sub-Millisecond Cache", "MySQL High Availability", "MongoDB Aggregations"],
    categoryCode: "DATA_STORE",
  },
  {
    domain: "CMS & Quick Engines",
    supported: "WordPress (Custom Theme & Headless), PHP",
    highlights: ["Headless WordPress GraphQL", "Custom PHP Enterprise Modules", "Zero-Bloat Custom Themes", "Edge Caching"],
    categoryCode: "CMS_ENG",
  },
  {
    domain: "Cloud & DevOps",
    supported: "AWS, Google Cloud, DigitalOcean, Docker, CI/CD Pipelines",
    highlights: ["Multi-Region Edge Routing", "Docker Containers & Kubernetes", "GitHub Actions CI/CD", "Terraform IaC"],
    categoryCode: "CLOUD_OPS",
  },
];

export const DELIVERY_FRAMEWORK = [
  {
    phase: "Phase 1",
    name: "Architecture & Scope",
    duration: "Sprint 0 (48h Lock)",
    items: [
      "48-Hour Scope Lock",
      "Database & API Design",
      "Technical Risk & Feasibility Audit",
      "Repository & CI/CD Scaffolding",
    ],
    deliverable: "Locked Architectural Blueprint & Schema Specs",
  },
  {
    phase: "Phase 2",
    name: "Sprint Builds",
    duration: "1-2 Week Cycles",
    items: [
      "1-2 Week Deployments",
      "Live Preview Links",
      "Direct Slack / GitHub Team Access",
      "Weekly Production Milestone Demos",
    ],
    deliverable: "Working Production Code Every 7-14 Days",
  },
  {
    phase: "Phase 3",
    name: "QA & Hardening",
    duration: "Continuous & Pre-Launch",
    items: [
      "Cross-Device & Browser Testing",
      "Security & API Penetration Audits",
      "Lighthouse 95+ Core Web Vitals Tuning",
      "Load & Concurrency Stress Tests",
    ],
    deliverable: "Zero Critical Vulnerabilities & 99+ Score",
  },
  {
    phase: "Phase 4",
    name: "Launch & Handover",
    duration: "Production Cutover",
    items: [
      "Full Code & IP Ownership Transfer",
      "Comprehensive Knowledge Documentation",
      "Zero-Downtime DNS & Edge Cutover",
      "Post-Launch SLA & Maintenance Protocol",
    ],
    deliverable: "100% Unencumbered IP & Production Readiness",
  },
];

export const FAQS = [
  {
    question: "How does the Fixed Sprint model work at SprintStack?",
    answer:
      "We operate in transparent 1-to-2 week sprint blocks with fixed scope locks and guaranteed weekly production deployments. You receive live preview URLs, weekly video/interactive demos, and direct access to senior architects on Slack or GitHub.",
  },
  {
    question: "Do we retain 100% Intellectual Property (IP) and source code ownership?",
    answer:
      "Yes, 100%. All repository code, database migrations, cloud configurations, API documentation, and architecture assets are transferred with immediate, unencumbered IP assignment as milestones are delivered.",
  },
  {
    question: "How does White-Label Engineering work for agencies and IT providers?",
    answer:
      "We serve as your stealth engineering department under strict mutual NDAs. We build under your brand, commit to your repositories, and follow your communication guidelines. You can also re-sell our proven Attendance ERP, CRM, and workflow modules directly to your clients under your own brand.",
  },
  {
    question: "Can your Attendance ERP integrate with our biometric hardware and existing payroll?",
    answer:
      "Yes. Our Attendance ERP supports real-time TCP/IP and cloud sync protocols with all major hardware devices (ZKTeco, Realtime, Suprema, Hikvision, eSSL) and exports clean, formatted attendance sheets formatted directly for SAP, Oracle HCM, QuickBooks, ADP, and custom ERP APIs.",
  },
  {
    question: "What communication channels and collaboration tools do you support?",
    answer:
      "We integrate directly into your workflow: Slack, Microsoft Teams, Jira, Linear, GitHub, GitLab, and Figma. You speak directly with Principal Architects and senior engineers who write code.",
  },
];
