"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useBookingModal } from "./ModalProvider";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openBookingModal } = useBookingModal();

  return (
    <header>
      <nav className="wrap nav-container">
        <Link href="#top" className="logo">
          <div className="logo-mark">
            <svg viewBox="0 0 24 24">
              <path d="M4 12l5 5L20 6" />
            </svg>
          </div>
          <div className="logo-text">
            SprintStack<span>.digital</span>
          </div>
        </Link>

        <div className="nav-links">
          <Link href="#solutions">Solutions</Link>
          <Link href="#enterprise">Enterprise Software</Link>
          <Link href="#technology">Technology</Link>
          <Link href="#process">Process</Link>
          <Link href="#demos">Live Demos</Link>
          <Link href="#contact">Contact</Link>
        </div>

        <div className="nav-cta">
          <button
            type="button"
            onClick={openBookingModal}
            className="btn btn-primary nav-btn"
            title="Book a 15-Minute Technical Discovery"
          >
            Book Discovery
          </button>
        </div>

        <button
          className="menu-toggle"
          aria-label="Menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile / Tablet Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? "open" : ""}`}>
        <Link href="#solutions" onClick={() => setMobileMenuOpen(false)}>
          Solutions
        </Link>
        <Link href="#enterprise" onClick={() => setMobileMenuOpen(false)}>
          Enterprise Software
        </Link>
        <Link href="#technology" onClick={() => setMobileMenuOpen(false)}>
          Technology
        </Link>
        <Link href="#process" onClick={() => setMobileMenuOpen(false)}>
          Process
        </Link>
        <Link href="#demos" onClick={() => setMobileMenuOpen(false)}>
          Live Product Demos
        </Link>
        <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>
          Contact
        </Link>
        <div className="mobile-cta-row">
          <Link
            href="#demos"
            className="btn btn-outline"
            style={{ width: "100%", justifyContent: "center" }}
            onClick={() => setMobileMenuOpen(false)}
          >
            Live Product Demos
          </Link>
          <button
            type="button"
            className="btn btn-primary"
            style={{ width: "100%" }}
            onClick={() => {
              setMobileMenuOpen(false);
              openBookingModal();
            }}
          >
            Book a 15-Minute Technical Discovery
          </button>
        </div>
      </div>
    </header>
  );
}
