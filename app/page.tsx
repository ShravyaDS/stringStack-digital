"use client";

import { FormEvent, useMemo, useState } from "react";
import {
  Check,
  Clock3,
  Code2,
  Cpu,
  Database,
  Layers3,
  Monitor,
  Search,
  Smartphone,
  Workflow,
} from "lucide-react";
import { useBookingModal } from "@/components/ModalProvider";
import { TechLogo } from "@/components/TechIcons";

/* ─── Solutions Data ─── */
const solutions = [
  [
    Monitor,
    "Web applications",
    "High-performance web platforms, SaaS products, customer portals, internal tools, and B2B software built to scale.",
    ["SaaS platforms", "Client portals", "Internal tools"],
  ],
  [
    Smartphone,
    "Mobile apps",
    "Cross-platform and native mobile software for field teams, consumer products, and connected enterprise workflows.",
    ["Flutter", "React Native", "iOS & Android"],
  ],
  [
    Layers3,
    "E-commerce",
    "Custom commerce platforms, headless storefronts, multi-vendor marketplaces, and high-volume checkout funnels.",
    ["Marketplaces", "Headless stores", "Payments"],
  ],
  [
    Workflow,
    "Integrations & automation",
    "Connect operational systems with custom middleware, automated billing pipelines, and event-driven architectures.",
    ["REST / GraphQL", "ERP sync", "Webhooks"],
  ],
] as const;

/* ─── Enterprise Modules Data ─── */
const modules = [
  {
    title: "Attendance & Workforce Management",
    heading: "Modern workforce operations, built around how your teams actually work.",
    image: "photo-1521737711867-e3b97375f902",
    features: [
      "GPS & biometric attendance",
      "Shift scheduling",
      "Leave management",
      "Payroll sync",
    ],
  },
  {
    title: "Project & Resource Management",
    heading: "A clear operating system for projects, people, budgets, and delivery.",
    image: "photo-1552664730-d307ca884978",
    features: [
      "Project planning",
      "Resource allocation",
      "Utilization tracking",
      "Client reporting",
    ],
  },
  {
    title: "CRM & Lead Management",
    heading: "A focused CRM that keeps your pipeline moving without the enterprise bloat.",
    image: "photo-1454165804606-c3d57bc86b40",
    features: [
      "Lead capture",
      "Pipeline stages",
      "Quotes & contracts",
      "Forecasting",
    ],
  },
  {
    title: "Business Process Automation",
    heading: "Remove manual handoffs and give every team a live view of the work.",
    image: "photo-1518770660439-4636190af475",
    features: [
      "Workflow rules",
      "Approvals",
      "Audit trails",
      "System alerts",
    ],
  },
];

/* ─── Technology Stacks Data ─── */
const stacks = [
  {
    name: "Frontend",
    summary: "Interfaces that feel fast, clear, and effortless across every screen.",
    tags: ["React 19", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "Backend",
    summary: "Reliable application logic and APIs built to handle real operating complexity.",
    tags: [
      "Node.js",
      "Express",
      "NestJS",
      "Python",
      "Django",
      "FastAPI",
      "Laravel",
    ],
  },
  {
    name: "Mobile",
    summary: "Native-quality experiences for teams and customers on the move.",
    tags: ["Flutter", "React Native", "Swift (iOS)", "Kotlin (Android)"],
  },
  {
    name: "Data systems",
    summary: "Structured, secure data foundations that stay responsive as you grow.",
    tags: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    name: "Cloud & delivery",
    summary: "Secure infrastructure and automated delivery that keep releases dependable.",
    tags: ["AWS", "Google Cloud", "DigitalOcean", "Docker", "CI/CD"],
  },
];

/* ─── Delivery Phases Data ─── */
const phases: Array<[string, string, string[]]> = [
  [
    "01",
    "Architecture & scope",
    ["Requirements", "Database design", "API architecture", "Scope lock"],
  ],
  [
    "02",
    "Sprint builds",
    ["1–2 week cycles", "Live preview", "Weekly demos", "Feedback loop"],
  ],
  [
    "03",
    "QA & hardening",
    ["Cross-device testing", "Security testing", "API audits", "Bug fixing"],
  ],
  [
    "04",
    "Launch & handover",
    ["Production deployment", "Code transfer", "Documentation", "Knowledge transfer"],
  ],
];

export default function Home() {
  const { openBookingModal } = useBookingModal();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [stackFilter, setStackFilter] = useState("All");
  const [stackSearch, setStackSearch] = useState("");
  const [activeDemo, setActiveDemo] = useState(0);
  const [selectedTechnology, setSelectedTechnology] = useState("React 19");

  const visibleStacks = useMemo(() => {
    return stacks.filter(({ name, tags }) => {
      const matchesFilter = stackFilter === "All" || name === stackFilter;
      const query = stackSearch.trim().toLowerCase();
      return (
        matchesFilter &&
        (!query ||
          [name, ...tags].some((item) =>
            item.toLowerCase().includes(query)
          ))
      );
    });
  }, [stackFilter, stackSearch]);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setFormError("");
    const data = new FormData(event.currentTarget);
    try {
      const response = await fetch("/api/discovery-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          projectFocus: data.get("focus"),
          timeline: data.get("timeline"),
          projectOverview: data.get("requirements"),
        }),
      });
      if (!response.ok) throw new Error("Unable to send your request.");
      setSubmitted(true);
      event.currentTarget.reset();
    } catch (error) {
      setFormError(
        error instanceof Error
          ? error.message
          : "Unable to send your request. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* ── 1. Hero Section ── */}
      <section className="hero" id="top">
        <div className="hero-media">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1800&q=80"
            alt="Engineering team collaborating on software architecture"
          />
        </div>
        <div className="wrap hero-content">
          <h1>Enterprise software, engineered on fixed sprints.</h1>
          <p className="hero-sub">
            SprintStack designs and builds web platforms, mobile products, and
            proprietary enterprise software. Architected up front, built in
            accountable sprint cycles, and handed over with full source code
            ownership.
          </p>
          <div className="hero-ctas">
            <button
              type="button"
              className="btn btn-primary"
              onClick={openBookingModal}
            >
              Book a Technical Discovery
            </button>
            <a href="#enterprise" className="btn btn-ghost-light">
              Explore Enterprise Software
            </a>
          </div>
        </div>
      </section>

      {/* ── 2. Stat Band ── */}
      <div className="stat-band">
        <div className="wrap stat-grid">
          <div>
            <div className="stat-num">100%</div>
            <div className="stat-lbl">IP ownership transferred at handover</div>
          </div>
          <div>
            <div className="stat-num">1–2 wk</div>
            <div className="stat-lbl">Fixed sprint cycles, every engagement</div>
          </div>
          <div>
            <div className="stat-num">6</div>
            <div className="stat-lbl">Global markets actively served</div>
          </div>
        </div>
      </div>

      {/* ── 3. Solutions Section ── */}
      <section id="solutions">
        <div className="wrap">
          <div className="label">Solutions</div>
          <div className="section-head">
            <h2>Software built around the way your business runs</h2>
            <p>
              From customer-facing products to internal operating systems, we
              build the software that turns complex work into a competitive
              advantage.
            </p>
          </div>
          <div className="cap-grid">
            {solutions.map(([Icon, title, description, tags]) => (
              <article className="cap-card" key={title}>
                <div className="cap-icon">
                  <Icon className="icon" />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <ul>
                  {tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Enterprise Software Section ── */}
      <section id="enterprise" className="soft">
        <div className="wrap">
          <div className="label">Enterprise software</div>
          <div className="section-head">
            <h2>Proven business modules, ready to shape around your operations</h2>
            <p>
              Start from a mature foundation or build an entirely bespoke platform.
              Either way, the code and infrastructure are yours.
            </p>
          </div>
          {modules.map((module, index) => (
            <article
              className={`split ${index % 2 ? "reverse" : ""}`}
              key={module.title}
            >
              <div className="split-media">
                <img
                  src={`https://images.unsplash.com/${module.image}?auto=format&fit=crop&w=1200&q=80`}
                  alt={module.title}
                />
              </div>
              <div className="split-text">
                <div className="idx">{module.title}</div>
                <h3>{module.heading}</h3>
                <p>
                  Production-ready software designed for visibility,
                  accountability, and dependable day-to-day execution across
                  your organization.
                </p>
                <div className="split-feats">
                  {module.features.map((feature) => (
                    <div key={feature}>
                      <Check />
                      {feature}
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  className="split-link"
                  onClick={openBookingModal}
                >
                  View live demo <span aria-hidden="true">→</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── 5. Technology Stack Section ── */}
      <section id="technology" className="technology-showcase">
        <div className="wrap">
          <div className="technology-heading">
            <div>
              <div className="label">Technology</div>
              <h2>Built from systems your team will trust for years.</h2>
            </div>
            <p>
              We combine mature tools into a practical architecture that is fast
              to ship, straightforward to operate, and ready to evolve.
            </p>
          </div>

          <div className="stack-explorer">
            <div
              className="stack-filter-group"
              role="group"
              aria-label="Filter technology stack"
            >
              {["All", ...stacks.map(({ name }) => name)].map((filter) => (
                <button
                  type="button"
                  key={filter}
                  className={`stack-filter ${
                    stackFilter === filter ? "active" : ""
                  }`}
                  onClick={() => setStackFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
            <label className="stack-search">
              <Search aria-hidden="true" />
              <input
                value={stackSearch}
                onChange={(event) => setStackSearch(event.target.value)}
                placeholder="Find a technology"
                aria-label="Search technology"
              />
            </label>
          </div>

          <div className="stack-grid">
            {visibleStacks.map(({ name, summary, tags }) => (
              <article className="stack-card" key={name}>
                <div className="stack-identity">
                  <div className="stack-lead-logo">
                    <TechLogo
                      name={tags[0]}
                      className="stack-lead-logo-inner"
                    />
                  </div>
                  <div>
                    <span className="stack-eyebrow">
                      Engineering system 0
                      {stacks.findIndex((stack) => stack.name === name) + 1}
                    </span>
                    <h4>{name}</h4>
                  </div>
                </div>
                <p className="stack-summary">{summary}</p>
                <div className="tags">
                  {tags.map((tag) => (
                    <button
                      type="button"
                      key={tag}
                      className={`tech-tile ${
                        selectedTechnology === tag ? "active" : ""
                      }`}
                      onClick={() => setSelectedTechnology(tag)}
                      aria-pressed={selectedTechnology === tag}
                    >
                      <TechLogo name={tag} className="tech-tile-logo" />
                      <span>
                        {tag
                          .replace("React 19", "React")
                          .replace("Swift (iOS)", "Swift")
                          .replace("Kotlin (Android)", "Kotlin")}
                      </span>
                    </button>
                  ))}
                </div>
              </article>
            ))}
          </div>

          {visibleStacks.length === 0 && (
            <p className="empty-stack">
              No matching technology found. Try another search.
            </p>
          )}

          <div className="technology-note" role="status">
            <TechLogo
              name={selectedTechnology}
              className="technology-note-logo"
            />
            <span>
              <strong>{selectedTechnology}</strong> is part of our production-ready
              engineering toolkit.
            </span>
          </div>
        </div>
      </section>

      {/* ── 6. Process Section ── */}
      <section id="process" className="soft">
        <div className="wrap">
          <div className="label">Process</div>
          <div className="section-head">
            <h2>Delivery you can see, review, and rely on</h2>
            <p>
              Every engagement follows an accountable path from technical
              discovery to a complete, documented handover.
            </p>
          </div>
          <div className="process-grid">
            <div className="process-line" />
            {phases.map(([number, title, items]) => (
              <article className="phase" key={number}>
                <div className="num">{number}</div>
                <h4>{title}</h4>
                <ul>
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Quote Band ── */}
      <section className="quote-band">
        <div className="wrap">
          <h2>We build software your team can own, operate, and grow without us.</h2>
          <div className="who">the SprintStack delivery model</div>
        </div>
      </section>

      {/* ── 8. Partners / White-Label Section ── */}
      <section id="partners" className="partners">
        <div className="partners-inner">
          <div className="partners-media">
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80"
              alt="Partners collaborating"
            />
          </div>
          <div className="partners-text">
            <div className="label">Partners</div>
            <h2>White-label engineering that keeps your agency in the lead</h2>
            <p className="lead">
              SprintStack builds under white label for agencies and technology
              service providers that need dependable delivery capacity.
            </p>
            <div className="wl-flow">
              <div className="node">You bring the client</div>
              <span className="arrow">→</span>
              <div className="node">SprintStack builds</div>
              <span className="arrow">→</span>
              <div className="node">You deliver</div>
            </div>
            <ul className="wl-list">
              <li>
                <Check />
                Strict NDA and your brand front-and-center
              </li>
              <li>
                <Check />
                Senior engineering capacity when you need it
              </li>
              <li>
                <Check />
                Clear sprint visibility without client confusion
              </li>
            </ul>
            <div style={{ marginTop: 32 }}>
              <button
                type="button"
                className="btn btn-white"
                onClick={openBookingModal}
              >
                Discuss a partnership
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. About Section ── */}
      <section id="about">
        <div className="wrap">
          <div className="label">About</div>
          <div className="about-split">
            <img
              src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=1200&q=80"
              alt="Team working together"
            />
            <div className="about-copy">
              <h2>A delivery partner for ambitious software teams</h2>
              <p>
                We pair rigorous technical thinking with a practical sprint cadence,
                giving leaders a clear route from idea to production.
              </p>
              <div className="about-principles">
                {[
                  [Code2, "No vendor lock-in", "Source and infrastructure transfer at handover."],
                  [Database, "Security by default", "Audits built into every sprint."],
                  [Cpu, "Standards over trends", "Chosen for maintainability, not novelty."],
                  [Clock3, "Fixed cadence", "1–2 week sprints, every time."],
                ].map(([Icon, title, text]) => (
                  <div className="about-principle" key={title as string}>
                    <Icon />
                    <div>
                      <h5>{title as string}</h5>
                      <p>{text as string}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. Live Product Demos Section ── */}
      <section id="demos" className="soft">
        <div className="wrap">
          <div className="label">Live product demos</div>
          <div className="section-head">
            <h2>Product demo center</h2>
            <p>
              Choose a product to preview its core workflow, then request a
              tailored walkthrough.
            </p>
          </div>
          <div className="demo-grid">
            {modules.map((module, index) => (
              <button
                type="button"
                className={`demo-card ${activeDemo === index ? "active" : ""}`}
                key={module.title}
                onClick={() => setActiveDemo(index)}
                aria-pressed={activeDemo === index}
              >
                <div className="demo-thumb">
                  {index === 0 ? (
                    <Clock3 className="icon" />
                  ) : index === 1 ? (
                    <Layers3 className="icon" />
                  ) : index === 2 ? (
                    <Monitor className="icon" />
                  ) : (
                    <Workflow className="icon" />
                  )}
                </div>
                <div className="demo-body">
                  <h4>{module.title}</h4>
                  <span>View overview →</span>
                </div>
              </button>
            ))}
          </div>
          <div className="demo-detail">
            <div>
              <span className="label">Selected demo</span>
              <h3>{modules[activeDemo].title}</h3>
              <p>{modules[activeDemo].heading}</p>
              <div className="demo-feature-list">
                {modules[activeDemo].features.map((feature) => (
                  <span key={feature}>
                    <Check />
                    {feature}
                  </span>
                ))}
              </div>
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={openBookingModal}
            >
              Request this demo
            </button>
          </div>
        </div>
      </section>

      {/* ── 11. Technical Discovery Contact Section ── */}
      <section id="contact" style={{ padding: 0 }}>
        <div className="contact-wrap">
          <div className="contact-media">
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80"
              alt="Office workspace"
            />
            <div className="contact-media-inner">
              <div className="label" style={{ color: "#8FB0FF" }}>
                Technical discovery
              </div>
              <h2>Let&apos;s scope the right software for your next move.</h2>
              <p>
                Bring the problem. We&apos;ll turn it into an architecture and
                sprint plan your team can act on.
              </p>
              <ul className="contact-types">
                {[
                  "Web platform",
                  "Mobile app",
                  "Attendance / ERP",
                  "CRM",
                  "Workflow automation",
                  "White-label partnership",
                ].map((item) => (
                  <li key={item}>
                    <Check />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="contact-form-wrap">
            <form onSubmit={submit}>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="name">Full name</label>
                  <input id="name" name="name" required />
                </div>
                <div className="field">
                  <label htmlFor="email">Work email</label>
                  <input id="email" name="email" type="email" required />
                </div>
              </div>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="phone">Phone / WhatsApp</label>
                  <input id="phone" name="phone" type="tel" />
                </div>
                <div className="field">
                  <label htmlFor="focus">Project focus</label>
                  <select id="focus" name="focus">
                    <option>Custom Web / SaaS</option>
                    <option>Mobile App</option>
                    <option>Attendance / ERP</option>
                    <option>CRM</option>
                    <option>Workflow Automation</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="field full">
                  <label htmlFor="timeline">Target timeline</label>
                  <select id="timeline" name="timeline">
                    <option>Immediate — within 4 weeks</option>
                    <option>1–3 months</option>
                    <option>3–6 months</option>
                    <option>Exploring options</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="field full">
                  <label htmlFor="requirements">Project requirements</label>
                  <textarea
                    id="requirements"
                    name="requirements"
                    placeholder="What are you building, and what is the current state of it?"
                  />
                </div>
              </div>
              {submitted && (
                <p className="form-success" role="status">
                  Thanks. Your discovery request is on its way.
                </p>
              )}
              {formError && (
                <p className="form-error" role="alert">
                  {formError}
                </p>
              )}
              <button
                type="submit"
                className="btn btn-primary"
                disabled={submitting}
              >
                {submitting
                  ? "Sending request..."
                  : "Request Architecture & Sprint Plan"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
