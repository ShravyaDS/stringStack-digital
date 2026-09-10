import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/constants";
import {
  generateOrganizationSchema,
  generateProfessionalServiceSchema,
  generateSoftwareApplicationSchema,
} from "@/lib/seo";
import { ModalProvider } from "@/components/ModalProvider";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0F62FE",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "SprintStack.digital — Enterprise Software Engineering, Delivered on Fixed Sprints",
    template: "%s | SprintStack.digital",
  },
  description:
    "SprintStack designs and builds web platforms, mobile products, and proprietary enterprise software — architected up front, built in accountable sprint cycles, and handed over with full source ownership.",
  keywords: [
    "SprintStack",
    "Enterprise Software",
    "Custom ERP",
    "Web Applications",
    "Mobile Applications",
    "Flutter",
    "React",
    "Fixed Sprints",
    "White Label Software",
    "Workflow Automation",
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
    title: "SprintStack.digital — Enterprise Software Engineering, Delivered on Fixed Sprints",
    description:
      "Enterprise software, engineered on fixed sprints. 100% IP ownership transferred at handover.",
    url: SITE_CONFIG.url,
    siteName: "SprintStack.digital",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SprintStack.digital — Enterprise Software Engineering, Delivered on Fixed Sprints",
    description:
      "Enterprise software, engineered on fixed sprints. 100% IP ownership transferred at handover.",
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
    <html lang="en" className={ibmPlexSans.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
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
      <body className="min-h-screen flex flex-col antialiased">
        <ModalProvider>
          <Navigation />
          <main id="top" className="flex-1">
            {children}
          </main>
          <Footer />
        </ModalProvider>
      </body>
    </html>
  );
}
