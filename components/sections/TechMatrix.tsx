"use client";

import React from "react";
import Image from "next/image";
import styles from "./TechMatrix.module.css";

interface TechCardItem {
  id: string;
  idx: string;
  title: string;
  stackline: string;
  tags: string[];
  code: string;
  frameworksCount: string;
  icon: React.ReactNode;
}

const TECH_CARDS: TechCardItem[] = [
  {
    id: "frontend",
    idx: "01 / Presentation Layer",
    title: "Frontend Web",
    stackline: "React.js, Next.js, Tailwind CSS, TypeScript",
    tags: [
      "Next.js 15 App Router",
      "React 19 Server Actions",
      "Strict TypeScript",
      "Tailwind Design Tokens",
    ],
    code: "WEB_UI",
    frameworksCount: "4 frameworks",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 5 L3 12 L8 19" />
        <path d="M16 5 L21 12 L16 19" />
      </svg>
    ),
  },
  {
    id: "backend",
    idx: "02 / Service Layer",
    title: "Backend & APIs",
    stackline: "Node.js (Express/Nest), Python (Django/FastAPI), Laravel",
    tags: [
      "High-Concurrency REST & GraphQL",
      "FastAPI Async Pipelines",
      "NestJS Microservices",
      "Laravel APIs",
    ],
    code: "API_SYS",
    frameworksCount: "3 frameworks",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="5" rx="1.2" />
        <rect x="4" y="10.5" width="16" height="5" rx="1.2" />
        <rect x="4" y="17" width="16" height="3.5" rx="1" />
      </svg>
    ),
  },
  {
    id: "mobile",
    idx: "03 / Client Devices",
    title: "Mobile Platforms",
    stackline: "Flutter, React Native, Native iOS (Swift), Android (Kotlin)",
    tags: [
      "Flutter Cross-Platform",
      "React Native",
      "Swift & CoreLocation",
      "Kotlin Foreground Services",
    ],
    code: "MOB_OS",
    frameworksCount: "4 frameworks",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="7" y="2.5" width="10" height="19" rx="2" />
        <line x1="10.5" y1="18" x2="13.5" y2="18" />
      </svg>
    ),
  },
  {
    id: "databases",
    idx: "04 / Persistence Layer",
    title: "Databases & Caching",
    stackline: "MySQL, PostgreSQL, MongoDB, Redis",
    tags: [
      "PostgreSQL ACID Schemas",
      "Redis Sub-Millisecond Cache",
      "MySQL High Availability",
      "MongoDB Aggregations",
    ],
    code: "DATA_STORE",
    frameworksCount: "4 frameworks",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5.5" rx="8" ry="3" />
        <path d="M4 5.5v13c0 1.66 3.58 3 8 3s8-1.34 8-3v-13" />
        <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
      </svg>
    ),
  },
  {
    id: "cms",
    idx: "05 / Content Layer",
    title: "CMS & Quick Engines",
    stackline: "WordPress (Custom Theme & Headless), PHP",
    tags: [
      "Headless WordPress GraphQL",
      "Custom PHP Enterprise Modules",
      "Zero-Bloat Custom Themes",
      "Edge Caching",
    ],
    code: "CMS_ENG",
    frameworksCount: "2 frameworks",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3c2.4 2.6 3.6 6 3.6 9s-1.2 6.4-3.6 9c-2.4-2.6-3.6-6-3.6-9s1.2-6.4 3.6-9z" />
      </svg>
    ),
  },
  {
    id: "cloud",
    idx: "06 / Infrastructure Layer",
    title: "Cloud & DevOps",
    stackline: "AWS, Google Cloud, DigitalOcean, Docker, CI/CD Pipelines",
    tags: [
      "Multi-Region Edge Routing",
      "Docker & Kubernetes",
      "GitHub Actions CI/CD",
      "Terraform IaC",
    ],
    code: "CLOUD_OPS",
    frameworksCount: "5 frameworks",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 18h10a4 4 0 0 0 0.6-7.96A5.5 5.5 0 0 0 7.1 8.05 4.5 4.5 0 0 0 7 18z" />
      </svg>
    ),
  },
];

export function TechMatrix() {
  return (
    <div className={styles.sectionWrapper}>
      {/* Aesthetic architectural wireframe background image */}
      <div className={styles.bgImageContainer}>
        <Image
          src="/images/tech-stack/tech-stack-bg.jpg"
          alt="Tech Stack Architectural Infrastructure"
          fill
          priority={false}
          className="object-cover object-center opacity-60"
        />
        <div className={styles.bgOverlay} />
      </div>

      <section id="tech-stack" className={styles.stackSection}>
        {/* ── Section Header ── */}
        <div className={styles.sectionHead}>
          <div className="flex justify-center mb-4">
            <span className="section-label">Enterprise Technology Matrix</span>
          </div>
          <h2 className={styles.headTitle}>The stack behind every build</h2>
          <p className={styles.headDesc}>
            Six disciplines, sixteen frameworks, one delivery team — production-hardened on live client work.
          </p>
        </div>

        {/* ── Connected Node Directory Grid ── */}
        <div className={styles.directory}>
          {TECH_CARDS.map((card) => (
            <div key={card.id} className={styles.card}>
              {/* Horizontal Spine Connector */}
              <div className={styles.connector} />

              {/* Icon Node */}
              <div className={styles.nodeWrap}>
                <div className={styles.node}>{card.icon}</div>
              </div>

              {/* Content */}
              <span className={styles.idx}>{card.idx}</span>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <div className={styles.stackline}>{card.stackline}</div>

              {/* Tag Pills */}
              <div className={styles.tags}>
                {card.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Framework Count Pill */}
              <div className="flex items-center gap-2 pt-2">
                <span className="studio-pill font-mono text-[11px] text-slate-400">
                  {card.frameworksCount}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
