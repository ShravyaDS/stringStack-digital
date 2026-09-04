import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/constants";
import {
  generateOrganizationSchema,
  generateProfessionalServiceSchema,
  generateSoftwareApplicationSchema,
} from "@/lib/seo";
import { ModalProvider } from "@/components/ModalProvider";
import { ScrollRevealProvider } from "@/components/ScrollRevealProvider";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#090D16",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "SprintStack.digital | High-Velocity Product Engineering & Enterprise Software",
    template: "%s | SprintStack.digital",
  },
  description:
    "We architect, engineer, and deploy mission-critical web applications, Flutter mobile platforms, and enterprise ERP systems with sub-second performance and 0% agency fluff.",
  keywords: [
    "Custom ERP",
    "SaaS Engineering",
    "Flutter Development",
    "React Enterprise Apps",
    "Attendance Management Software",
    "Next.js Development Services",
    "White-Label Software Solutions",
    "Enterprise Software Engineering",
    "Workflow Automation Platform",
    "Custom CRM Development",
  ],
  authors: [{ name: "SprintStack Engineering Team", url: SITE_CONFIG.url }],
  creator: "SprintStack.digital",
  publisher: "SprintStack.digital",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SprintStack.digital | High-Velocity Product Engineering & Enterprise Software",
    description:
      "Enterprise web engineering, Flutter mobile systems, and proprietary Attendance ERP solutions architected for sub-second performance.",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SprintStack.digital - High-Velocity Product Engineering",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SprintStack.digital | High-Velocity Product Engineering",
    description:
      "Mission-critical web, Flutter mobile platforms, and custom ERP systems with guaranteed delivery velocity.",
    images: ["/images/og-image.jpg"],
    creator: "@sprintstack",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateOrganizationSchema();
  const professionalServiceSchema = generateProfessionalServiceSchema();
  const softwareAppSchema = generateSoftwareApplicationSchema();

  return (
    <html lang="en" className={`dark ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        {/* Structured Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
        />
      </head>
      <body className="min-h-screen font-sans flex flex-col antialiased bg-[#090D16] text-[#F8FAFC] selection:bg-blue-600/30 selection:text-blue-200">
        <ModalProvider>
          <ScrollRevealProvider>
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
          </ScrollRevealProvider>
        </ModalProvider>
      </body>
    </html>
  );
}
