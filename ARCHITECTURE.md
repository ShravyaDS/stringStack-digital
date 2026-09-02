# SprintStack.digital - Project Architecture

**Project:** SprintStack.digital (High-Velocity Product Engineering & Enterprise Software)  
**Target Markets:** US, UK, UAE, Singapore, EU, Australia, Global  
**Date:** 2026-09-01  
**Status:** Architecture Phase

---

## 1. Executive Summary

SprintStack.digital is a **B2B SaaS/Agency website** showcasing:
- Engineering service capabilities (web, mobile, enterprise software)
- Proprietary enterprise solutions (Attendance ERP, CRM, Project Management)
- White-label partnership opportunities
- Lead generation & technical discovery funnel

**Core Design Principle:** Elite engineering partner brand → pragmatic, high-trust, delivery-focused messaging with zero generic agency fluff.

---

## 2. Technology Stack & Decisions

### 2.1 Frontend Framework
- **Primary:** Next.js 15+ (App Router)
- **Rationale:**
  - Server-side rendering (SSR) for SEO-critical pages (hero, services, products)
  - App Router enables clean nested layouts and streaming
  - Built-in image optimization (`next/image`)
  - Vercel integration for edge caching and global CDN
  - React 19 for modern UI patterns

### 2.2 Styling & UI Components
- **CSS Framework:** Tailwind CSS v4
- **Component Library:** Shadcn/ui (unstyled, composable, TypeScript-first)
- **Rationale:**
  - Tailwind provides utility-first workflow for rapid iteration
  - Shadcn/ui avoids component library lock-in; we own all component source
  - Easy to customize design tokens (colors, spacing, typography)

### 2.3 Design Tokens (Brand Colors)
```
Background Primary (Hero, Dark Mode):     #090D16 (Deep Obsidian Slate)
Card & Surface:                           #111827 (Elevated Dark Slate)
Card Border:                              #1F2937 (Subtle Gray)
Primary Accent / CTA:                     #3B82F6 (Electric Blue) or #6366F1 (Indigo)
Success / Metrics:                        #10B981 (Emerald Green)
Typography - Headers/Body:                Inter / Geist Sans
Typography - Code/Badges:                 JetBrains Mono
```

### 2.4 Hosting & Edge Delivery
- **Primary:** Vercel (Next.js native)
- **Fallback:** Cloudflare Pages (for redundancy)
- **Edge Regions:** US-East, Europe-West, Asia-Southeast
- **Performance Target:** 95+ on all Lighthouse metrics (Performance, Accessibility, Best Practices, SEO)
- **CDN:** Automatic caching via edge functions; aggressive image optimization

### 2.5 Form & API Communication
- **Contact Forms:** API routes (`/api/contact`, `/api/discovery-form`)
- **Email Service:** Resend (enterprise transactional email)
- **Webhooks:** Slack channel notifications + CRM sync (optional)
- **Data Storage:** PostgreSQL (Supabase or AWS RDS) or Firebase Firestore
- **Rate Limiting:** Built-in middleware (prevent spam)

### 2.6 CMS Strategy
- **No Headless CMS for MVP** (content is hardcoded in React components initially)
- **Optional Future:** Contentful, Sanity, or Strapi if content management becomes frequent
- **Database-Driven Content:** Enterprise solutions (Attendance ERP, CRM) details stored in DB, fetched via API

### 2.7 Analytics & Monitoring
- **Website Analytics:** Vercel Web Analytics or Plausible (privacy-first)
- **Error Tracking:** Sentry (client + server errors)
- **Performance Monitoring:** Web Vitals + custom metrics
- **Form Analytics:** Track conversion funnel (form views → submissions → discovery calls)

---

## 3. Project Directory Structure

```
sprintstack-digital/
│
├── .github/
│   └── workflows/
│       ├── ci-deploy.yml          # Vercel deployment automation
│       ├── security-scan.yml      # Dependency & code security
│       └── lighthouse.yml         # Performance audit on PR
│
├── app/                            # Next.js App Router
│   ├── layout.tsx                 # Root layout (nav, footer, providers)
│   ├── page.tsx                   # Hero / Home
│   ├── globals.css                # Tailwind directives + custom utilities
│   │
│   ├── (marketing)/               # Marketing page group (shared nav/footer)
│   │   ├── solutions/
│   │   │   ├── page.tsx           # Solutions overview
│   │   │   ├── [slug]/
│   │   │   │   └── page.tsx       # Dynamic solution detail (web, mobile, ecommerce, integrations)
│   │   │
│   │   ├── products/
│   │   │   ├── page.tsx           # Products overview
│   │   │   ├── attendance-erp/
│   │   │   │   └── page.tsx       # Attendance ERP detail
│   │   │   ├── crm/
│   │   │   │   └── page.tsx       # CRM detail
│   │   │   └── pmo/
│   │   │       └── page.tsx       # Project Management detail
│   │   │
│   │   ├── partners/
│   │   │   └── page.tsx           # White-label & agency partnerships
│   │   │
│   │   └── tech-stack/
│   │       └── page.tsx           # Technology matrix & capabilities
│   │
│   ├── api/                       # API Routes (backend logic)
│   │   ├── contact/
│   │   │   └── route.ts           # POST /api/contact (form submission)
│   │   ├── discovery-form/
│   │   │   └── route.ts           # POST /api/discovery-form (lead capture)
│   │   ├── services/
│   │   │   └── route.ts           # GET /api/services (fetch dynamic services)
│   │   └── products/
│   │       └── route.ts           # GET /api/products (fetch product catalog)
│   │
│   └── not-found.tsx              # 404 page
│
├── components/
│   ├── Navigation.tsx             # Global nav bar
│   ├── Footer.tsx                 # Global footer
│   ├── ui/                        # Shadcn/ui components (auto-generated)
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── form.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   └── ...
│   │
│   ├── sections/                  # Reusable page sections
│   │   ├── HeroSection.tsx
│   │   ├── TrustMetrics.tsx
│   │   ├── ServiceBento.tsx
│   │   ├── ProductShowcase.tsx
│   │   ├── TechMatrix.tsx
│   │   ├── CTA.tsx
│   │   ├── DiscoveryForm.tsx
│   │   └── FAQSection.tsx
│   │
│   ├── features/                  # Feature-specific components
│   │   ├── ServiceCard.tsx
│   │   ├── ProductModule.tsx
│   │   ├── GeoTargeting.tsx
│   │   ├── ClientLogos.tsx
│   │   └── FeatureGrid.tsx
│   │
│   └── common/
│       ├── SectionHeader.tsx      # Reusable section header (Overline + H2)
│       ├── CTAButton.tsx          # Standardized CTA button
│       └── LoadingSpinner.tsx
│
├── lib/
│   ├── constants.ts               # Brand colors, metadata, messaging
│   ├── utils.ts                   # Helper functions (form validation, etc.)
│   ├── db.ts                      # Database client (Supabase/Prisma)
│   ├── email.ts                   # Resend email templates & sending logic
│   ├── slack.ts                   # Slack webhook for lead alerts
│   └── seo.ts                     # Metadata & structured schema builders
│
├── styles/
│   ├── globals.css                # Tailwind + global styles
│   ├── typography.css             # Font imports (Inter, Geist, JetBrains Mono)
│   └── animations.css             # Micro-interactions
│
├── public/
│   ├── images/
│   │   ├── logo.svg               # SprintStack logo
│   │   ├── hero-bg.jpg            # Hero background image
│   │   ├── og-image.jpg           # OpenGraph preview image
│   │   └── ...
│   ├── icons/
│   │   ├── globe.svg
│   │   ├── rocket.svg
│   │   └── ...
│   └── robots.txt                 # SEO
│
├── prisma/                        # (Optional) Database schema & migrations
│   ├── schema.prisma
│   └── migrations/
│
├── tests/
│   ├── unit/
│   │   ├── utils.test.ts
│   │   └── components.test.tsx
│   │
│   ├── integration/
│   │   ├── api.test.ts            # API route tests
│   │   └── forms.test.tsx         # Form submission flow
│   │
│   └── e2e/
│       ├── hero-cta.spec.ts       # Playwright E2E tests
│       ├── discovery-form.spec.ts
│       └── mobile-responsive.spec.ts
│
├── .env.local                     # Local secrets (Resend API key, DB URL, etc.)
├── .env.example                   # Template for secrets
├── next.config.ts                 # Next.js configuration
├── tailwind.config.ts             # Tailwind design tokens
├── tsconfig.json                  # TypeScript configuration
├── package.json
├── pnpm-lock.yaml                 # (Preferred over npm for workspaces)
├── README.md                       # Project setup & contribution guide
├── ARCHITECTURE.md                # This file
├── PAGE_STRUCTURE.md              # Next: Page routing & layout hierarchy
│
└── docs/
    ├── DEPLOYMENT.md              # Vercel/Cloudflare setup
    ├── API_CONTRACTS.md           # API request/response schemas
    ├── DATABASE_SCHEMA.md         # PostgreSQL/Firestore schema docs
    └── SEO_CHECKLIST.md           # SEO optimization roadmap
```

---

## 4. High-Level Data Flow

### 4.1 Page Load (SSR / Static Generation)
```
User Request
    ↓
Vercel Edge (Geographic Routing)
    ↓
Next.js Server (SSR / ISR / Static)
    ↓
Fetch Data (API routes, DB, external services)
    ↓
Render React Components
    ↓
Inject SEO metadata (OpenGraph, structured schema)
    ↓
Stream HTML + React Hydration
    ↓
Browser (Client-side interactivity)
```

### 4.2 Form Submission Flow
```
User fills Discovery Form (Client)
    ↓
Form Validation (Client-side + Server)
    ↓
POST /api/discovery-form
    ↓
Rate Limit Check
    ↓
Save to Database (PostgreSQL / Firestore)
    ↓
Send Email (Resend) to internal team
    ↓
Post to Slack #leads channel
    ↓
Optional: Sync to CRM (Pipedrive, HubSpot)
    ↓
Return Success Response to Client
    ↓
Show Confirmation Message / Redirect to Thank You
```

### 4.3 Dynamic Product/Service Pages
```
User visits /products/attendance-erp
    ↓
Next.js Route Segment: products/[slug]
    ↓
Fetch Product Data: GET /api/products?slug=attendance-erp
    ↓
Render ProductShowcase with Module Cards, Features, Pricing
    ↓
Include CTA: "Book Discovery" → Discovery Form
```

---

## 5. Database Schema (High-Level)

### 5.1 Tables (PostgreSQL / Supabase)

#### `contacts` (Lead Capture)
```sql
id (UUID, PK)
name (String)
email (String, unique)
phone (String)
country_code (String)
project_focus (Enum: web | mobile | attendance | crm | modernization | partnership)
timeline (Enum: immediate | 1-3months | 3-6months | exploring)
project_overview (Text)
created_at (Timestamp)
status (Enum: new | contacted | qualified | won | lost)
slack_notified (Boolean)
crm_sync_id (String, optional)
```

#### `products` (Enterprise Solutions Catalog)
```sql
id (UUID, PK)
slug (String, unique)
name (String)
description (Text)
modules (JSON Array)
key_features (JSON Array)
icon_url (String)
hero_image_url (String)
created_at (Timestamp)
updated_at (Timestamp)
```

#### `solutions` (Service Offerings)
```sql
id (UUID, PK)
slug (String, unique)
title (String)
headline (String)
description (Text)
focus_areas (JSON Array)
tech_stack (JSON Array)
case_study_url (String, optional)
created_at (Timestamp)
```

#### `analytics_events` (Form tracking)
```sql
id (UUID, PK)
event_type (Enum: form_view | form_submit | cta_click | discovery_call_booked)
page_url (String)
user_id (String, anonymous)
timestamp (Timestamp)
metadata (JSON)
```

---

## 6. API Routes & Contracts

### 6.1 POST /api/discovery-form
**Purpose:** Lead capture from discovery form  
**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@acme.com",
  "phone": "+1-555-0123",
  "countryCode": "+1",
  "projectFocus": "web",
  "timeline": "1-3months",
  "projectOverview": "We need a custom SaaS platform..."
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Thank you! We'll contact you within 24 hours.",
  "leadId": "lead_uuid_123",
  "nextSteps": "Check your email for confirmation."
}
```

### 6.2 GET /api/products
**Purpose:** Fetch product catalog  
**Query Params:** `slug` (optional), `limit` (default 10)  
**Response (200 OK):**
```json
{
  "products": [
    {
      "id": "prod_1",
      "slug": "attendance-erp",
      "name": "Enterprise Attendance & Workforce Management",
      "headline": "Eliminate manual logs, proxy check-ins, and shift-planning chaos.",
      "modules": [
        { "id": "mod_1", "name": "Geofenced Mobile Check-In", "description": "..." },
        { "id": "mod_2", "name": "Biometric Hardware Sync", "description": "..." }
      ]
    }
  ]
}
```

### 6.3 GET /api/services
**Purpose:** Fetch service offerings  
**Response:** Array of service solutions with details

---

## 7. SEO & Performance Strategy

### 7.1 Meta Tags & Structured Data
- **Root Layout:** Set global defaults (site name, logo, social profiles)
- **Per-Page Metadata:** Override for each route (og:image, og:title, og:description)
- **Structured Schema:** 
  - `Organization` (homepage)
  - `SoftwareApplication` (products)
  - `ProfessionalService` (services)
  - `BreadcrumbList` (navigation hierarchy)

### 7.2 Performance Targets
- **Core Web Vitals:**
  - LCP (Largest Contentful Paint): < 2.5s
  - FID (First Input Delay): < 100ms
  - CLS (Cumulative Layout Shift): < 0.1
- **Lighthouse Scores:** 95+ across all categories
- **Image Optimization:**
  - Use Next.js `next/image` for all hero/product images
  - Serve WebP with JPEG fallback
  - Implement lazy loading for below-fold images

### 7.3 Target Keywords (SEO)
```
Primary:
  - Custom ERP Software
  - Attendance Management System
  - Enterprise SaaS Development
  - Custom CRM Development
  - React Development Agency
  - Next.js Development Services

Secondary:
  - Flutter App Development
  - White-Label Software Solutions
  - Enterprise Software Engineering
  - Workflow Automation Platform
  - Project Management Software
```

---

## 8. Development Workflow

### 8.1 Local Setup
```bash
git clone https://github.com/sprintstack/sprintstack-digital.git
cd sprintstack-digital

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with:
#   - DATABASE_URL (Supabase/RDS)
#   - RESEND_API_KEY
#   - SLACK_WEBHOOK_URL

# Run development server
pnpm dev
# Opens http://localhost:3000
```

### 8.2 Git Workflow
- **Branch Strategy:** `main` (production) → `staging` → feature branches
- **Commit Messages:** Conventional commits (`feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `test:`)
- **PR Process:** Feature branch → PR → code review → merge to staging → E2E tests → merge to main → auto-deploy to Vercel

### 8.3 Deployment Pipeline
1. **Dev Deployment:** Automatic on `staging` branch push (Vercel preview URL)
2. **Production Deployment:** Automatic on `main` branch push (with Lighthouse audit)
3. **Rollback:** Quick revert via Vercel dashboard (one-click)

### 8.4 Testing Strategy
- **Unit Tests:** Component logic, utilities (Jest + React Testing Library)
- **Integration Tests:** API routes, form submission flow (Vitest)
- **E2E Tests:** User journeys (Playwright) — hero CTA → form submission → success
- **Lighthouse:** Automated performance audit on PR (GitHub Actions)

---

## 9. Security & Compliance

### 9.1 Data Protection
- **HTTPS Only:** All traffic encrypted (TLS 1.3+)
- **GDPR Compliance:** Privacy policy, cookie consent, data deletion workflow
- **HIPAA Readiness:** (For future enterprise clients) Encrypted at-rest, audit trails
- **ISO 27001:** Third-party audit path (Vercel SOC 2 compliance)

### 9.2 Secret Management
- **Environment Variables:** `.env.local` (never committed)
- **API Keys:** Stored in Vercel environment (not in code)
- **Database Credentials:** Managed via Supabase/AWS Secrets Manager
- **Slack Webhook:** Masked in logs, rotated quarterly

### 9.3 Rate Limiting & Bot Prevention
- **Form Submissions:** 5 submissions per IP per hour
- **API Routes:** 100 requests per IP per minute
- **CAPTCHA:** (Optional) Implement for discovery form if spam increases

---

## 10. Monitoring & Analytics

### 10.1 Error Tracking
- **Sentry:** Client + server-side errors logged with full stack trace
- **Alerting:** Slack notification on critical errors (5xx, form failures)

### 10.2 Performance Monitoring
- **Vercel Analytics:** Real-user monitoring (RUM)
- **Web Vitals Dashboard:** Track LCP, FID, CLS over time
- **Custom Events:** Track form views, CTA clicks, discovery form submissions

### 10.3 Conversion Funnel
- Track: Page views → Discovery form views → Form submissions → Phone calls booked

---

## 11. Scalability & Future Roadmap

### 11.1 Phase 1 (MVP - Now)
- [ ] Hero page with CTA
- [ ] Solutions & Products pages (static content)
- [ ] Discovery form + lead capture
- [ ] Basic SEO setup

### 11.2 Phase 2 (Enhancement)
- [ ] Testimonials / Case Studies carousel
- [ ] Blog / Knowledge base (Contentful integration)
- [ ] Live product demos (Loom embed or interactive sandbox)
- [ ] Email drip campaign automation

### 11.3 Phase 3 (Advanced)
- [ ] Admin dashboard (edit services/products without re-deploy)
- [ ] Client portal (view ongoing project status)
- [ ] Webhook integrations (Pipedrive, HubSpot CRM sync)
- [ ] Multi-language support (i18n for global markets)

---

## 12. Key Files to Create Next

1. **PAGE_STRUCTURE.md** — Detailed routing, layout hierarchy, and page responsibilities
2. **COMPONENT_STRUCTURE.md** — Component tree, prop interfaces, state management
3. **DATABASE_SCHEMA.md** — Detailed SQL schema with indexes & relationships
4. **API_CONTRACTS.md** — Request/response schemas, error codes, authentication
5. **SEO_CHECKLIST.md** — Keywords, meta tags, structured data per page

---

## 13. Success Metrics

- ✅ Time to First Byte (TTFB): < 100ms
- ✅ Lighthouse Score: 95+ across all categories
- ✅ Form Submission Funnel: > 5% conversion rate
- ✅ Mobile-Responsive: 100% across all viewports (320px - 4K)
- ✅ Accessibility: WCAG 2.1 AA compliance
- ✅ SEO: Top 3 ranking for primary keywords within 6 months

---

**Next Step:** Generate [PAGE_STRUCTURE.md](./PAGE_STRUCTURE.md) to define routing, layout patterns, and page-level responsibilities.
