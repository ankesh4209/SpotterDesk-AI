import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://spotterdesk.ai"),
  title: {
    default: "SpotterDesk AI - AI Voice Agents & Intelligent Automation",
    template: "%s | SpotterDesk AI",
  },
  description: "Deploy production-grade AI voice receptionists and intelligent automations with sub-500ms latency. Capture leads, schedule appointments, and run business operations 24/7.",
  keywords: [
    "AI Voice Agents",
    "Voice AI Receptionist",
    "AI Automation",
    "Workflow Automation",
    "CRM Integration",
    "Low Latency Voice AI",
    "Enterprise AI",
    "SpotterDesk AI",
    "Arif Khan"
  ],
  authors: [{ name: "Arif Khan", url: "https://spotterdesk.ai" }],
  creator: "Arif Khan",
  publisher: "SpotterDesk AI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://spotterdesk.ai",
    siteName: "SpotterDesk AI",
    title: "SpotterDesk AI - AI Voice Agents & Workflow Automations",
    description: "Deploy production-grade Voice AI receptionists and intelligent workflows with sub-500ms latency.",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 800,
        alt: "SpotterDesk AI Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SpotterDesk AI - AI Voice Agents & Workflow Automations",
    description: "Deploy production-grade Voice AI receptionists and intelligent workflows with sub-500ms latency.",
    images: ["/images/logo.png"],
    creator: "@spotterdesk",
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
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SpotterDesk AI",
    url: "https://spotterdesk.ai",
    logo: "https://spotterdesk.ai/images/logo.png",
    founder: {
      "@type": "Person",
      name: "Arif Khan",
      jobTitle: "Founder of SpotterDesk AI",
    },
    description: "Enterprise AI Voice Agents and intelligent workflow automation systems with sub-500ms latency.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-6391031776",
      contactType: "customer service",
      email: "info@spotterdesk.ai",
      areaServed: "Worldwide",
    },
  };

  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden w-full max-w-full">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body 
        className={`${inter.className} min-h-screen antialiased overflow-x-hidden w-full max-w-full bg-white text-slate-900`}
      >
        <div className="relative flex flex-col min-h-screen w-full max-w-full overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}