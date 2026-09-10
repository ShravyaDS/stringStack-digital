import React from "react";

interface TechLogoProps {
  name: string;
  className?: string;
}

export function TechLogo({ name, className = "tech-tag-logo" }: TechLogoProps) {
  switch (name) {
    // ---------------- Frontend ----------------
    case "React 19":
    case "React Native":
      return (
        <span className={className} title={name}>
          <svg viewBox="-11.5 -10.23174 23 20.46348" fill="none">
            <circle cx="0" cy="0" r="2.05" fill="#00D8FF" />
            <g stroke="#00D8FF" strokeWidth="1" fill="none">
              <ellipse rx="11" ry="4.2" />
              <ellipse rx="11" ry="4.2" transform="rotate(60)" />
              <ellipse rx="11" ry="4.2" transform="rotate(120)" />
            </g>
          </svg>
        </span>
      );

    case "Next.js":
      return (
        <span className={className} title={name}>
          <svg viewBox="0 0 180 180" fill="none">
            <mask id="maskNext" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180" style={{ maskType: "alpha" }}>
              <circle cx="90" cy="90" r="90" fill="black" />
            </mask>
            <g mask="url(#maskNext)">
              <circle cx="90" cy="90" r="90" fill="#000000" />
              <path
                d="M149.508 157.438L69.1447 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.137 149.508 157.438Z"
                fill="url(#paint0_linear_next)"
              />
              <rect x="115" y="54" width="12" height="72" fill="url(#paint1_linear_next)" />
            </g>
            <defs>
              <linearGradient id="paint0_linear_next" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="paint1_linear_next" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </span>
      );

    case "TypeScript":
      return (
        <span className={className} title={name}>
          <svg viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="4" fill="#3178C6" />
            <path
              d="M11.5 8H6V9.5H8V18H9.5V9.5H11.5V8ZM14.2 13.5C14.2 12.3 15.2 11.5 16.5 11.5C17.4 11.5 18.2 11.9 18.6 12.4L17.7 13.3C17.4 13 17 12.8 16.5 12.8C15.9 12.8 15.6 13.1 15.6 13.5C15.6 14 16 14.2 16.8 14.5L17.4 14.7C18.6 15.1 19.3 15.8 19.3 16.8C19.3 18.1 18.1 19 16.6 19C15.4 19 14.5 18.4 14 17.7L15 16.7C15.4 17.2 15.9 17.5 16.6 17.5C17.3 17.5 17.8 17.2 17.8 16.7C17.8 16.2 17.4 15.9 16.6 15.6L16 15.4C14.9 15 14.2 14.4 14.2 13.5Z"
              fill="white"
            />
          </svg>
        </span>
      );

    case "Tailwind CSS":
      return (
        <span className={className} title={name}>
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.974 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.974 12 6.001 12z"
              fill="#38BDF8"
            />
          </svg>
        </span>
      );

    case "State Machines":
      return (
        <span className={className} title={name}>
          <svg viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="6" cy="6" r="3" fill="#6366F1" fillOpacity="0.2" />
            <circle cx="18" cy="18" r="3" fill="#6366F1" fillOpacity="0.2" />
            <path d="M8.5 8.5L15.5 15.5" />
            <polyline points="12 16 16 16 16 12" />
            <circle cx="18" cy="6" r="2.5" />
          </svg>
        </span>
      );

    case "Vite":
      return (
        <span className={className} title={name}>
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M21.5 4.5L12.7 20.8c-.3.5-1.1.5-1.4 0L2.5 4.5c-.3-.6.2-1.3.8-1.1l8.5 2.8c.2.1.4.1.6 0l8.3-2.8c.6-.2 1.1.5.8 1.1z"
              fill="url(#vite-bg)"
            />
            <path
              d="M14.6 2.5L7.2 12.3c-.2.3 0 .7.4.7h3.8l-1.8 6.5c-.1.5.5.8.8.4l7.4-9.8c.2-.3 0-.7-.4-.7h-3.8l1.8-6.5c.1-.5-.5-.8-.8-.4z"
              fill="#FFD62E"
            />
            <defs>
              <linearGradient id="vite-bg" x1="2.5" y1="3" x2="21.5" y2="21" gradientUnits="userSpaceOnUse">
                <stop stopColor="#41D1FF" />
                <stop offset="1" stopColor="#BD34FE" />
              </linearGradient>
            </defs>
          </svg>
        </span>
      );

    // ---------------- Backend ----------------
    case "Node.js":
      return (
        <span className={className} title={name}>
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2L3.5 6.9v9.8L12 21.6l8.5-4.9V6.9L12 2z"
              fill="#339933"
            />
            <path
              d="M12 4.4l6.4 3.7v7.4L12 19.2l-6.4-3.7V8.1L12 4.4z"
              fill="#5FA04E"
            />
            <path
              d="M12 6.5l4.5 2.6v5.2L12 16.9l-4.5-2.6V9.1L12 6.5z"
              fill="#FFFFFF"
            />
          </svg>
        </span>
      );

    case "NestJS":
      return (
        <span className={className} title={name}>
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M21.5 9.2c-.3-.9-1.2-1.5-2.1-1.3-.8.2-1.5.8-1.8 1.6-.2.6-.2 1.2 0 1.8l.5 1.5c-1.1-.9-2.4-1.5-3.8-1.7.3-1.1.2-2.3-.3-3.3-.6-1.1-1.6-1.9-2.8-2.2-1.3-.3-2.6 0-3.6.8-1 1-1.5 2.3-1.4 3.7.1 1.4.9 2.6 2.1 3.3.4.2.9.4 1.4.5-1.5 1.1-3.4 1.7-5.3 1.6-.8 0-1.5.3-2 .8-.6.6-.8 1.4-.6 2.2.2.8.8 1.5 1.6 1.8.8.3 1.7.1 2.4-.4 3.3-2.3 7.4-3.3 11.4-2.8 1.4.2 2.7.6 3.9 1.3.4.2.9.3 1.3.1.4-.1.8-.4 1-.8.2-.4.2-.9.1-1.3l-2-6.5c-.1-.7.2-1.4.7-1.8.5-.4 1.2-.5 1.8-.3.6.2 1.1.7 1.2 1.3.2.7-.1 1.4-.7 1.8-.3.2-.5.5-.5.9 0 .4.2.8.5.9.6.3 1.3.1 1.7-.4.6-.7.7-1.7.4-2.5z"
              fill="#E0234E"
            />
          </svg>
        </span>
      );

    case "Python":
      return (
        <span className={className} title={name}>
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M11.9 2c-4.4 0-4.1 1.9-4.1 1.9l.01 2h4.2v.6H5.2S2 6.1 2 10.6s2.8 4.3 2.8 4.3h1.7v-2.4s-.1-2.9 2.8-2.9h4.8s2.8.1 2.8-2.7V4.7S17.4 2 11.9 2zm-2.3 1.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z"
              fill="#3776AB"
            />
            <path
              d="M12.1 22c4.4 0 4.1-1.9 4.1-1.9l-.01-2h-4.2v-.6h6.8s3.2.4 3.2-4.1-2.8-4.3-2.8-4.3h-1.7v2.4s.1 2.9-2.8 2.9H9.9s-2.8-.1-2.8 2.7v2.2S6.6 22 12.1 22zm2.3-1.5c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z"
              fill="#FFD438"
            />
          </svg>
        </span>
      );

    case "FastAPI":
      return (
        <span className={className} title={name}>
          <svg viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="11" fill="#059669" />
            <path d="M12.8 4.5L6.5 13.5h5l-1.5 6 7.2-9.5h-5.2l1.8-5.5z" fill="#FFFFFF" />
          </svg>
        </span>
      );

    case "Go / Golang":
      return (
        <span className={className} title={name}>
          <svg viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="4" fill="#00ADD8" />
            <path
              d="M6.2 12.4c0-2.3 1.5-3.8 3.6-3.8 1.4 0 2.4.6 2.9 1.6l-1.3.8c-.3-.6-.9-1-1.6-1-1.2 0-2.1.9-2.1 2.4s.9 2.4 2.1 2.4c.8 0 1.4-.4 1.7-1.1h-2v-1.3h3.5v3.1c-.6.8-1.8 1.4-3.2 1.4-2.1 0-3.6-1.6-3.6-3.8zm11.5 0c0-2.3-1.6-3.8-3.7-3.8s-3.7 1.5-3.7 3.8 1.6 3.8 3.7 3.8 3.7-1.6 3.7-3.8zm-5.8 0c0-1.5.9-2.4 2.1-2.4s2.1.9 2.1 2.4-.9 2.4-2.1 2.4-2.1-.9-2.1-2.4z"
              fill="#FFFFFF"
            />
          </svg>
        </span>
      );

    case "Express":
      return (
        <span className={className} title={name}>
          <svg viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="4" fill="#1E293B" />
            <path
              d="M5.5 8h4.5v1.6H7.3v2h2.4v1.6H7.3v2.2H10v1.6H5.5V8zm6 0h1.8l1.7 3.3L16.7 8h1.8l-2.6 4.4 2.8 4.6h-1.9L15 13.5l-1.8 3.5h-1.9l2.7-4.6L11.5 8z"
              fill="#FFFFFF"
            />
          </svg>
        </span>
      );

    case "Django":
      return (
        <span className={className} title={name}>
          <svg viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="4" fill="#0C4B33" />
            <path
              d="M11 6v10.2c-.6.2-1.1.3-1.7.3-2 0-3.2-1-3.2-2.9 0-1.8 1.1-2.9 2.9-2.9.4 0 .8.1 1.1.2v-2.2c-.4-.1-.8-.1-1.3-.1-3.2 0-5.1 1.8-5.1 5 0 3.3 2 5.1 5.3 5.1 1.1 0 2.2-.2 3.1-.6V6H11zm5.2 3.5c-.7 0-1.2.5-1.2 1.2 0 .7.5 1.2 1.2 1.2.7 0 1.2-.5 1.2-1.2 0-.7-.5-1.2-1.2-1.2zm-1.1 3.2h2.2v8h-2.2v-8z"
              fill="#44B78B"
            />
          </svg>
        </span>
      );

    // ---------------- Mobile ----------------
    case "Flutter":
      return (
        <span className={className} title={name}>
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M14.3 2L4 12.3l3.2 3.2L20.7 2h-6.4z" fill="#42A5F5" />
            <path d="M14.3 12.7L9.5 17.5l4.8 4.8h6.4l-8-8-3.2 3.2 1.6 1.6 4.8-4.8 1.6 1.6-3.2 3.2" fill="#01579B" opacity="0.15" />
            <path d="M9.5 17.5l4.8-4.8h6.4l-8 8-3.2-3.2z" fill="#29B6F6" />
            <path d="M14.3 22.3l-4.8-4.8 3.2-3.2 4.8 4.8-3.2 3.2z" fill="#01579B" />
          </svg>
        </span>
      );

    case "Swift (iOS)":
      return (
        <span className={className} title={name}>
          <svg viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="5" fill="#F05138" />
            <path
              d="M18.8 16.9c-.3.4-1.2 1.2-2.7 1.8 1.5-1 2.3-2.5 2.5-3.8-1.5 1-3.3 1.3-4.8 1.3-3.6 0-6.7-2.3-7.5-5.4.8.9 1.9 1.5 3.2 1.6-1.5-.9-2.5-2.5-2.7-4.4.8.4 1.7.6 2.6.6C7.9 7.4 7 5.8 7 4c1.8 1.8 4.1 3.1 6.8 3.6-.4-1.3-.1-2.7.7-3.6 1.2-1.3 3.2-1.5 4.6-.3.7-.6 1.6-1 2.5-1.4-.4 1-.9 1.8-1.8 2.4.9-.1 1.7-.4 2.4-.8-.6.9-1.3 1.6-2.1 2.2.4 4.5-1.8 8.8-1.3 10.8z"
              fill="#FFFFFF"
            />
          </svg>
        </span>
      );

    case "Kotlin (Android)":
      return (
        <span className={className} title={name}>
          <svg viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="4" fill="url(#kotlin-grad)" />
            <path d="M4 4h16L12 12l8 8H4V4z" fill="url(#kotlin-tri)" />
            <defs>
              <linearGradient id="kotlin-grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                <stop stopColor="#7F52FF" />
                <stop offset="0.5" stopColor="#C711E1" />
                <stop offset="1" stopColor="#E4485D" />
              </linearGradient>
              <linearGradient id="kotlin-tri" x1="4" y1="4" x2="20" y2="20" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFFFFF" stopOpacity="0.9" />
                <stop offset="1" stopColor="#FFFFFF" stopOpacity="0.4" />
              </linearGradient>
            </defs>
          </svg>
        </span>
      );

    case "Dart":
      return (
        <span className={className} title={name}>
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M4 13.5L10.5 20H17l-9.5-9.5L4 13.5z" fill="#01579B" />
            <path d="M10.5 4L4 10.5l3.5 3.5 9.5-9.5H10.5z" fill="#00B0FF" />
            <path d="M17 4l-9.5 9.5L11 17l9-9V4h-3z" fill="#29B6F6" />
            <path d="M20 8l-6 6 3 3 3-3V8z" fill="#01579B" />
          </svg>
        </span>
      );

    case "SQLite":
      return (
        <span className={className} title={name}>
          <svg viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="4" fill="#003B57" />
            <path
              d="M6 9c0-1.7 2.7-3 6-3s6 1.3 6 3-2.7 3-6 3-6-1.3-6-3zm0 3.5c0 1.7 2.7 3 6 3s6-1.3 6-3v2c0 1.7-2.7 3-6 3s-6-1.3-6-3v-2zm0 3.5c0 1.7 2.7 3 6 3s6-1.3 6-3v2c0 1.7-2.7 3-6 3s-6-1.3-6-3v-2z"
              fill="#0097DB"
            />
          </svg>
        </span>
      );

    // ---------------- Databases ----------------
    case "PostgreSQL":
      return (
        <span className={className} title={name}>
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2C6.5 2 2 6.5 2 12c0 3.9 2.2 7.2 5.5 8.8l1.2-3.1c-1.8-1-3-2.9-3-5.2 0-3.3 2.7-6 6-6s6 2.7 6 6c0 1.3-.4 2.5-1.1 3.5l1.6 1.6c1.3-1.4 2-3.2 2-5.1 0-5.5-4.5-10-10-10zm.5 7.5c-1.9 0-3.5 1.6-3.5 3.5 0 .8.3 1.6.8 2.2l3.4-3.4c-.2-1.3-.7-2.3-.7-2.3zm1.8 1.4L11 14.2c.4.2.9.3 1.5.3 1.9 0 3.5-1.6 3.5-3.5 0-.6-.2-1.2-.5-1.6l-1.2 1.5z"
              fill="#336791"
            />
            <circle cx="12" cy="12" r="9" stroke="#336791" strokeWidth="1.5" />
          </svg>
        </span>
      );

    case "Redis":
      return (
        <span className={className} title={name}>
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#D82C20" />
            <path d="M2 7v5l10 5 10-5V7l-10 5-10-5z" fill="#A3241A" />
            <path d="M2 12v5l10 5 10-5v-5l-10 5-10-5z" fill="#7C1912" />
            <circle cx="12" cy="6" r="1.2" fill="#FFFFFF" />
          </svg>
        </span>
      );

    case "MySQL":
      return (
        <span className={className} title={name}>
          <svg viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="4" fill="#00758F" />
            <path
              d="M17.5 10c-.5-1.5-1.8-2.5-3.5-2.5-1.2 0-2.3.6-3 1.5-.7-.9-1.8-1.5-3-1.5-2 0-3.5 1.5-3.5 3.5 0 2.8 3.5 5 6.5 7 3-2 6.5-4.2 6.5-7 0-.4 0-.7 0-1z"
              fill="#F29111"
            />
          </svg>
        </span>
      );

    case "MongoDB":
      return (
        <span className={className} title={name}>
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2C11.6 2.4 8 7 8 12.3c0 3.7 2.3 6.7 4 8.7 1.7-2 4-5 4-8.7C16 7 12.4 2.4 12 2z"
              fill="#13AA52"
            />
            <path
              d="M12 2.2v18.7c.3-.4.7-.8 1-1.3 1.6-2 3-4.7 3-7.3 0-5-3.6-9.4-4-10.1z"
              fill="#116149"
            />
          </svg>
        </span>
      );

    case "Supabase":
      return (
        <span className={className} title={name}>
          <svg viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="4" fill="#1C1C1C" />
            <path
              d="M13.2 21.2c-.6.8-1.9.4-1.9-.6V13h-7c-.9 0-1.4-1.1-.8-1.7l8.6-8.5c.6-.8 1.9-.4 1.9.6V11h7c.9 0 1.4 1.1.8 1.7l-8.6 8.5z"
              fill="url(#supa-grad)"
            />
            <defs>
              <linearGradient id="supa-grad" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
                <stop stopColor="#24E395" />
                <stop offset="1" stopColor="#3ECF8E" />
              </linearGradient>
            </defs>
          </svg>
        </span>
      );

    case "Prisma ORM":
      return (
        <span className={className} title={name}>
          <svg viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="4" fill="#0C344B" />
            <path
              d="M12.8 3.5c-.4-.7-1.3-.7-1.7 0L4.3 17.6c-.4.7.1 1.6.9 1.6h13.6c.8 0 1.3-.9.9-1.6L12.8 3.5zm-.8 4.2l4.8 9.5H8.2l3.8-9.5z"
              fill="#5A67D8"
            />
            <path d="M12 7.7l4.8 9.5H12V7.7z" fill="#FFFFFF" opacity="0.9" />
          </svg>
        </span>
      );

    // ---------------- Cloud & DevOps ----------------
    case "AWS":
      return (
        <span className={className} title={name}>
          <svg viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="4" fill="#232F3E" />
            <path
              d="M5 14.5c3.2 2.2 7.6 2.2 11.2.2.3-.2.7.2.5.5-2.2 2.2-6.5 3.3-10.4 1.4-.4-.2-.5-.7-.2-1l-1.1-1.1zm12.5.3c-.2-.3-.1-.7.2-.8.5-.2 1.3-.4 2-.4.4 0 .7.3.7.7 0 .8-.5 1.5-1.2 1.9-.3.2-.7 0-.8-.3l-.9-1.1z"
              fill="#FF9900"
            />
            <path
              d="M8.2 9.5h1.3l1.8 5h-1.1l-.4-1.2H8l-.4 1.2H6.5l1.7-5zm1.3 3L9 10.4l-.5 2.1h1zM13 14.5l-1.3-5h1.2l.8 3.5.8-3.5h1.2l-1.4 5H13z"
              fill="#FFFFFF"
            />
          </svg>
        </span>
      );

    case "Google Cloud":
      return (
        <span className={className} title={name}>
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M19.3 10.5c-.3-2.8-2.7-5-5.6-5-2.2 0-4.1 1.3-4.9 3.2C8.3 8.3 7.7 8 7 8 5.3 8 4 9.3 4 11c0 .2 0 .4.1.6C2.9 12.3 2 13.8 2 15.5 2 18 4 20 6.5 20h12.5c2.8 0 5-2.2 5-5 0-2.4-1.7-4.4-4-4.9-.2.1-.4.2-.7.4z"
              fill="#4285F4"
            />
            <path d="M19.3 10.5c-.3-2.8-2.7-5-5.6-5-1.3 0-2.5.5-3.4 1.3l3.5 3.5 5.5.2z" fill="#EA4335" />
            <path d="M6.5 20H19c2.8 0 5-2.2 5-5 0-2.4-1.7-4.4-4-4.9l-4.5 4.5L6.5 20z" fill="#34A853" />
            <path d="M4 11c0 .2 0 .4.1.6C2.9 12.3 2 13.8 2 15.5 2 18 4 20 6.5 20l5.5-5.4-8-3.6z" fill="#FBBC05" />
          </svg>
        </span>
      );

    case "Docker":
      return (
        <span className={className} title={name}>
          <svg viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="4" fill="#2496ED" />
            <path
              d="M21.5 11.5c-.3-.2-1.3-.3-2-.1-.2-.8-.7-1.4-1.5-1.8l-.5.5c.5.5.7 1.2.7 1.9 0 .2 0 .4-.1.6-1-.2-2.5.3-3.1 1.4H2.5c-.3 1.3.1 3 1.2 4.2 1.3 1.4 3.3 2 5.3 2 4.5 0 8.2-2.4 10-6.2.7-.2 1.8-.7 2.5-2zM5.5 10h1.8v1.8H5.5V10zm2.4 0h1.8v1.8H7.9V10zm2.4 0h1.8v1.8h-1.8V10zm2.4 0h1.8v1.8h-1.8V10zm-4.8-2.4h1.8v1.8H7.9V7.6zm2.4 0h1.8v1.8h-1.8V7.6zm2.4 0h1.8v1.8h-1.8V7.6zm0-2.4h1.8V7h-1.8V5.2z"
              fill="#FFFFFF"
            />
          </svg>
        </span>
      );

    case "Kubernetes":
      return (
        <span className={className} title={name}>
          <svg viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="4" fill="#326CE5" />
            <path
              d="M12 4l6.9 4v8L12 20l-6.9-4V8L12 4z"
              stroke="#FFFFFF"
              strokeWidth="1.5"
            />
            <circle cx="12" cy="12" r="2.5" fill="#FFFFFF" />
            <line x1="12" y1="4" x2="12" y2="9.5" stroke="#FFFFFF" strokeWidth="1.2" />
            <line x1="18.9" y1="8" x2="14.2" y2="10.7" stroke="#FFFFFF" strokeWidth="1.2" />
            <line x1="18.9" y1="16" x2="14.2" y2="13.3" stroke="#FFFFFF" strokeWidth="1.2" />
            <line x1="12" y1="20" x2="12" y2="14.5" stroke="#FFFFFF" strokeWidth="1.2" />
            <line x1="5.1" y1="16" x2="9.8" y2="13.3" stroke="#FFFFFF" strokeWidth="1.2" />
            <line x1="5.1" y1="8" x2="9.8" y2="10.7" stroke="#FFFFFF" strokeWidth="1.2" />
          </svg>
        </span>
      );

    case "GitHub Actions":
      return (
        <span className={className} title={name}>
          <svg viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="4" fill="#2088FF" />
            <path
              d="M12 5.5a6.5 6.5 0 00-2 12.7v-2.3c0-.6.2-1.1.5-1.5-1.9-.2-3.8-.9-3.8-4.2 0-.9.3-1.7.9-2.3-.1-.2-.4-1.1.1-2.2 0 0 .7-.2 2.3.9a8 8 0 014.2 0c1.6-1.1 2.3-.9 2.3-.9.5 1.1.2 2 .1 2.2.6.6.9 1.4.9 2.3 0 3.3-2 4-3.9 4.2.3.4.6 1 .6 1.8v2.7A6.5 6.5 0 0012 5.5z"
              fill="#FFFFFF"
            />
          </svg>
        </span>
      );

    case "Terraform":
      return (
        <span className={className} title={name}>
          <svg viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="4" fill="#623CE4" />
            <path d="M12.5 8.7L8.2 6.2v5l4.3 2.5v-5z" fill="#844FBA" />
            <path d="M13.2 8.7l4.3-2.5v5l-4.3 2.5v-5z" fill="#5C4EE5" />
            <path d="M13.2 14.5l4.3-2.5v5l-4.3 2.5v-5z" fill="#00BC7E" />
            <path d="M7.5 12l4.3 2.5v5L7.5 17v-5z" fill="#FFFFFF" />
          </svg>
        </span>
      );

    // ---------------- AI Engineering ----------------
    case "OpenAI API":
      return (
        <span className={className} title={name}>
          <svg viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="4" fill="#10A37F" />
            <path
              d="M17.7 10.3a3.5 3.5 0 00-.3-2.7 3.6 3.6 0 00-3.3-1.8 3.5 3.5 0 00-2.3.8 3.5 3.5 0 00-3.4-.2 3.6 3.6 0 00-2 2.7 3.5 3.5 0 00-1.2 2.5c0 1.2.6 2.3 1.6 2.9a3.5 3.5 0 00.3 2.7 3.6 3.6 0 003.3 1.8 3.5 3.5 0 002.3-.8 3.5 3.5 0 003.4.2 3.6 3.6 0 002-2.7 3.5 3.5 0 001.2-2.5c0-1.2-.6-2.3-1.6-2.9zm-5.7 8.3a2.4 2.4 0 01-1.6-.6l1.8-1 2.2 1.3c-.7.2-1.6.3-2.4.3zm-4.3-2.2a2.3 2.3 0 01-.4-1.7l1.8 1v2.5c-.7-.4-1.1-1.1-1.4-1.8zm-1-4.8c.2-.6.7-1.1 1.3-1.4v2.1l2.2 1.3-2.2 1.3c-.6-.6-1.1-1.8-1.3-3.3zm6.3-.9L12 9.5l-1 .6-1.8-1 1.8-1 1.8 1zm1.7 5.1l-2.2-1.3 2.2-1.3v-2.1c.6.3 1.1.8 1.3 1.4.3 1.4-.2 2.7-1.3 3.3zm1.4-4.8l-1.8-1V7.5c.7.4 1.1 1.1 1.4 1.8.3.6.4 1.1.4 1.7zm-2.8-2.6l-2.2-1.3c.7-.2 1.6-.3 2.4-.3.6 0 1.2.2 1.6.6l-1.8 1z"
              fill="#FFFFFF"
            />
          </svg>
        </span>
      );

    case "Anthropic Claude":
      return (
        <span className={className} title={name}>
          <svg viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="4" fill="#CC785C" />
            <path
              d="M13.8 6.5h2.4L20 17.5h-2.3l-.9-2.5h-4.6l-.9 2.5H9L13.8 6.5zm2.5 6.6L15 8.8l-1.3 4.3h2.6zm-8.6 4.4L4 6.5h2.4l2.5 7.4 1.2-3.7H12l-2.5 7.3H7.7z"
              fill="#FFFFFF"
            />
          </svg>
        </span>
      );

    case "LangChain":
      return (
        <span className={className} title={name}>
          <svg viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="4" fill="#0E2F2B" />
            <path
              d="M14.5 8.5c1.4 1.4 1.4 3.6 0 5l-2.5 2.5c-1.4 1.4-3.6 1.4-5 0-1.4-1.4-1.4-3.6 0-5l1-1 1.4 1.4-1 1c-.6.6-.6 1.6 0 2.2.6.6 1.6.6 2.2 0l2.5-2.5c.6-.6.6-1.6 0-2.2l-1.4-1.4 2.8-2z"
              fill="#22C55E"
            />
            <path
              d="M9.5 15.5c-1.4-1.4-1.4-3.6 0-5l2.5-2.5c1.4-1.4 3.6-1.4 5 0 1.4 1.4 1.4 3.6 0 5l-1 1-1.4-1.4 1-1c.6-.6.6-1.6 0-2.2-.6-.6-1.6-.6-2.2 0l-2.5 2.5c-.6.6-.6 1.6 0 2.2l1.4 1.4-2.8 2z"
              fill="#22C55E"
              opacity="0.6"
            />
          </svg>
        </span>
      );

    case "PgVector / Pinecone":
      return (
        <span className={className} title={name}>
          <svg viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="4" fill="#000000" />
            <path
              d="M12 4l3.5 3.5L12 11 8.5 7.5 12 4zm0 6l3.5 3.5L12 17l-3.5-3.5L12 10zm-6 0l3.5 3.5L6 17l-3.5-3.5L6 10zm12 0l3.5 3.5L18 17l-3.5-3.5L18 10zm-6 6l3.5 3.5L12 23l-3.5-3.5L12 16z"
              fill="#00E599"
            />
          </svg>
        </span>
      );

    case "PyTorch":
      return (
        <span className={className} title={name}>
          <svg viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="4" fill="#EE4C2C" />
            <path
              d="M13.2 5.5l-1.4 1.4 2.8 2.8c1.6 1.6 1.6 4.1 0 5.7s-4.1 1.6-5.7 0l-2-2 1.4-1.4 2 2c.8.8 2.2.8 3 0s.8-2.2 0-3l-2.8-2.8 2.7-2.7z"
              fill="#FFFFFF"
            />
            <circle cx="16" cy="6.8" r="1.2" fill="#FFFFFF" />
          </svg>
        </span>
      );

    case "RAG Workflows":
      return (
        <span className={className} title={name}>
          <svg viewBox="0 0 24 24" fill="none" stroke="#0284C7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="6" rx="2" fill="#0284C7" fillOpacity="0.15" />
            <rect x="3" y="14" width="18" height="6" rx="2" fill="#0284C7" fillOpacity="0.15" />
            <path d="M7 10v4" />
            <path d="M12 10v4" />
            <path d="M17 10v4" />
            <circle cx="12" cy="7" r="1" fill="#0284C7" />
            <circle cx="12" cy="17" r="1" fill="#0284C7" />
          </svg>
        </span>
      );

    case "Laravel":
      return (
        <span className={className} title={name}>
          <svg viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="4" fill="#FF2D20" />
            <path
              d="M17.5 7.5L12 4.25L6.5 7.5V16.5L12 19.75L17.5 16.5V7.5ZM12 6.5L15.5 8.5L12 10.5L8.5 8.5L12 6.5ZM8 10L11.5 12V16.5L8 14.5V10ZM12.5 16.5V12L16 10V14.5L12.5 16.5Z"
              fill="#FFFFFF"
            />
          </svg>
        </span>
      );

    case "DigitalOcean":
      return (
        <span className={className} title={name}>
          <svg viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="4" fill="#0080FF" />
            <path
              d="M12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12H16.5C16.5 14.49 14.49 16.5 12 16.5C9.51 16.5 7.5 14.49 7.5 12C7.5 9.51 9.51 7.5 12 7.5V4ZM12 12H15.5V15.5H12V12ZM9.5 16.5H7.5V18.5H9.5V16.5ZM7.5 14H6V15.5H7.5V14Z"
              fill="#FFFFFF"
            />
          </svg>
        </span>
      );

    case "CI/CD":
    case "CI / CD":
    case "CI/CD Pipelines":
      return (
        <span className={className} title={name}>
          <svg viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="6" cy="6" r="3" fill="#2563EB" fillOpacity="0.2" />
            <circle cx="18" cy="18" r="3" fill="#2563EB" fillOpacity="0.2" />
            <path d="M9 6h6a3 3 0 0 1 3 3v6" />
            <path d="M15 18H9a3 3 0 0 1-3-3V9" />
          </svg>
        </span>
      );

    default:
      return (
        <span className={className} title={name}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="8" />
          </svg>
        </span>
      );
  }
}
