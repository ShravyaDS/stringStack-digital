"use client";

import React from "react";
import Link from "next/link";
import { useBookingModal } from "./ModalProvider";

export function Footer() {
  const { openBookingModal } = useBookingModal();

  return (
    <footer>
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="logo">
              <div className="logo-mark">
                <svg viewBox="0 0 24 24">
                  <path d="M4 12l5 5L20 6" />
                </svg>
              </div>
              <div className="logo-text">
                SprintStack<span>.digital</span>
              </div>
            </div>
            <p className="footer-tagline">
              High-Velocity Product Engineering & Enterprise Software.
              Architected up front, built in fixed sprint cycles, and handed over with 100% IP ownership.
            </p>
            <div className="footer-markets">
              <span className="markets-label">Global Delivery Hubs:</span>
              <p className="markets-list">New York • London • Dubai • Singapore • Sydney • Bangalore</p>
            </div>
          </div>

          <div className="footer-col">
            <h5>Solutions</h5>
            <ul>
              <li><Link href="#solutions">Web Development</Link></li>
              <li><Link href="#solutions">Mobile Development</Link></li>
              <li><Link href="#solutions">E-commerce</Link></li>
              <li><Link href="#solutions">Integrations & Automation</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Enterprise Software</h5>
            <ul>
              <li><Link href="#enterprise">Attendance ERP</Link></li>
              <li><Link href="#enterprise">Project Management</Link></li>
              <li><Link href="#enterprise">CRM Systems</Link></li>
              <li><Link href="#enterprise">Business Automation</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Capabilities & Delivery</h5>
            <ul>
              <li><Link href="#technology">Tech Stack</Link></li>
              <li><Link href="#process">Sprint Process</Link></li>
              <li><Link href="#partners">White-Label</Link></li>
              <li><Link href="#about">About SprintStack</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Get Started</h5>
            <ul>
              <li><Link href="#demos">Live Demos</Link></li>
              <li>
                <button
                  type="button"
                  onClick={openBookingModal}
                  className="footer-link-btn"
                >
                  Book Discovery
                </button>
              </li>
              <li><Link href="#contact">Contact Team</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal-copy">
            <span>© {new Date().getFullYear()} SprintStack.digital — All builds delivered with 100% IP ownership & zero vendor lock-in.</span>
          </div>
          <div className="footer-legal-links">
            <Link href="/privacy">Privacy Policy</Link>
            <span className="dot-sep">•</span>
            <Link href="/terms">Terms of Service</Link>
            <span className="dot-sep">•</span>
            <Link href="#process">Security & Compliance</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
