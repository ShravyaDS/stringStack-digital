# Implementation Plan: SprintStack.digital High-Velocity Frontend

Build the complete, production-ready frontend for **SprintStack.digital** based on the architecture and handoff specifications. The site is a B2B SaaS/Agency portal engineered with Next.js (App Router, React 19, TypeScript), Tailwind CSS, shadcn-inspired components, rich Bento Grid modules, dark Obsidian Slate aesthetics, Cal.com discovery booking modal, contact form UI with API route, and enterprise-grade SEO/Schema markup.

## User Review Required

> [!NOTE]
> We will scaffold a Next.js 15+ App Router application with TypeScript and Tailwind CSS directly in the workspace `d:\stringstack--digital`. All pages, components, API routes, and styling tokens will match the exact specification from the handoff document.

- **Design System Tokens**:
  - Background Primary: Deep Obsidian Slate `#090D16`
  - Card/Surface Background: Elevated Dark Slate `#111827` with 1px border `#1F2937`
  - Accent/CTA: Electric Cyan/Indigo `#3B82F6` / `#6366F1`
  - Metrics & Success: Emerald Green `#10B981`
  - Typography: Inter / Geist Sans for body/headings, JetBrains Mono for badges & metrics

---

## Proposed Changes

### Core Project Initialization & Setup

#### [NEW] Next.js 15 App Structure
- Initialize Next.js app in `d:\stringstack--digital` with TypeScript, Tailwind CSS, Lucide icons, clsx, and tailwind-merge.
- Configure `tailwind.config.ts` and `globals.css` with exact brand tokens, dark mode obsidian palette, glassmorphism borders, glowing gradients, and custom micro-animations.

---

### Global Design System & Components (`/components`)

#### [NEW] [Navigation.tsx](file:///d:/stringstack--digital/components/Navigation.tsx)
- Global fixed sticky navigation with glassmorphism blur (`rgba(9, 13, 22, 0.85)`).
- Logo with electric cyan pulse, dropdown navigation for Services and Products, Partners link, Tech Stack link.
- Quick CTA: "Book Technical Discovery" (triggers interactive Cal.com booking modal) + Live System Status pill ("Edge Active: 14ms").

#### [NEW] [Footer.tsx](file:///d:/stringstack--digital/components/Footer.tsx)
- Comprehensive enterprise footer: brand manifesto, services index, proprietary products, partnership tiers, global regions (US, UK, UAE, Singapore, EU, Australia), ISO/GDPR security assurances, and newsletter/status feeds.

#### [NEW] [BookingModal.tsx](file:///d:/stringstack--digital/components/BookingModal.tsx)
- Embeddable Cal.com / interactive 15-minute technical discovery scheduling modal with timezone detection, engineering domain selection, and direct calendar slot booking.

#### [NEW] [DiscoveryForm.tsx](file:///d:/stringstack--digital/components/sections/DiscoveryForm.tsx)
- High-converting technical discovery form:
  - Full Name, Work Email, Phone/WhatsApp with Country Code, Project Focus dropdown (`web`, `mobile`, `attendance`, `crm`, `modernization`, `partnership`), Timeline select (`immediate`, `1-3months`, `3-6months`, `exploring`), and Project Overview textarea.
  - Submits asynchronously to `/api/discovery-form` with animated loading state, validation, error handling, and rich confirmation screen.

#### [NEW] Reusable Section & UI Components
- `components/ui/Button.tsx`, `components/ui/Badge.tsx`, `components/ui/Card.tsx`, `components/ui/Input.tsx`, `components/ui/Select.tsx`, `components/ui/Textarea.tsx`
- `components/sections/HeroSection.tsx` (Electric glow, terminal badge, high-velocity headline, velocity metrics)
- `components/sections/TrustMetrics.tsx` (SLA 99.99%, Edge latency, verified engineering delivery speed)
- `components/sections/ServiceBento.tsx` (Dynamic Bento grid cards for Web, Mobile, ERP, Microservices)
- `components/sections/ProductShowcase.tsx` (Attendance ERP preview, live module badges, interactive simulator)
- `components/sections/TechMatrix.tsx` (Interactive filterable stack: Frontend, Backend, Mobile, Cloud, Database)
- `components/sections/PartnershipSection.tsx` (White-label capabilities, NDA guarantee, dedicated squad model)
- `components/sections/FAQSection.tsx` (B2B engineering engagement FAQ accordion)

---

### Pages & Routing (`/app`)

#### [NEW] [layout.tsx](file:///d:/stringstack--digital/app/layout.tsx)
- Root layout with font configuration (Inter & JetBrains Mono), JSON-LD Structured Schema (`Organization`, `ProfessionalService`, `SoftwareApplication`), OpenGraph metadata, Twitter cards, viewport configuration, and booking modal provider.

#### [NEW] [page.tsx](file:///d:/stringstack--digital/app/page.tsx)
- Main landing page aggregating Hero, Trust Metrics, Services Bento, Product Showcase (Attendance ERP), Tech Matrix, Partnership CTA, and Discovery Form.

#### [NEW] [app/services/web-development/page.tsx](file:///d:/stringstack--digital/app/services/web-development/page.tsx)
- Dedicated deep-dive into Enterprise Web Engineering, Next.js/React architecture, sub-second edge rendering, real-time WebSockets, micro-frontends, and delivery sprints.

#### [NEW] [app/services/mobile-apps/page.tsx](file:///d:/stringstack--digital/app/services/mobile-apps/page.tsx)
- Dedicated deep-dive into Cross-Platform & Native Mobile Engineering (Flutter, React Native, Swift, Kotlin), offline-first synchronization, biometric auth, and IoT/Hardware integrations.

#### [NEW] [app/products/attendance-erp/page.tsx](file:///d:/stringstack--digital/app/products/attendance-erp/page.tsx)
- Comprehensive Enterprise Attendance & Workforce Management solution page with module deep-dives (Geofenced Mobile Check-In, Biometric Hardware Sync, Shift Planning, Automated Payroll Engine, Audit Logs) and interactive live module playground.

#### [NEW] [app/partners/white-label/page.tsx](file:///d:/stringstack--digital/app/partners/white-label/page.tsx)
- White-Label & Agency Partnership portal: Dedicated engineering squads, strict IP assignment, stealth delivery, white-label client portals, and engagement tiers.

---

### Backend API Routes (`/app/api`)

#### [NEW] [app/api/discovery-form/route.ts](file:///d:/stringstack--digital/app/api/discovery-form/route.ts)
- Handles `POST /api/discovery-form`, validates payload, returns structured JSON response with `leadId`, logs lead activity.

#### [NEW] [app/api/contact/route.ts](file:///d:/stringstack--digital/app/api/contact/route.ts)
- Handles general contact form submissions with rate limit checks.

#### [NEW] [app/api/products/route.ts](file:///d:/stringstack--digital/app/api/products/route.ts) & [app/api/services/route.ts](file:///d:/stringstack--digital/app/api/services/route.ts)
- REST endpoints returning product and service catalogs.

---

## Verification Plan

### Automated Build & Type Checks
- `npm run build` to ensure 0 TypeScript errors, clean static generation, and correct route compilation.
- `npm run lint` for code quality and standard adherence.

### Visual & Functional Testing with Browser Subagent
- Start `npm run dev` and navigate to `http://localhost:3000`.
- Verify Hero section, visual design tokens (Deep Obsidian `#090D16`, Card `#111827`, Electric Accent `#3B82F6`), Bento grid cards, typography, and responsive layout.
- Test "Book a 15-Minute Technical Discovery" modal opening, slot selection, and closing.
- Test Contact / Discovery form filling and submission to `/api/discovery-form`.
- Navigate to subpages:
  - `/services/web-development`
  - `/services/mobile-apps`
  - `/products/attendance-erp`
  - `/partners/white-label`
- Inspect page source to verify SEO meta tags, OpenGraph tags, and JSON-LD structured schemas (`Organization`, `SoftwareApplication`, `ProfessionalService`).
