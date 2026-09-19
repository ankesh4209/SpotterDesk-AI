import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Consultations - Book a Demo",
  description: "Schedule an AI operations audit or 30-min strategy consultation with SpotterDesk AI. Deploy front-desk voice receptionists or enterprise workflows.",
  keywords: [
    "Contact SpotterDesk AI",
    "Book AI Voice Demo",
    "Operations Consultation",
    "Voice AI Support",
    "Deploy AI Receptionist"
  ],
  alternates: {
    canonical: "https://spotterdesk.ai/contact",
  },
  openGraph: {
    title: "Contact SpotterDesk AI - Schedule a Consultation",
    description: "Let's talk about automation. Deploy production-grade Voice AI receptionists and cross-system workflows.",
    url: "https://spotterdesk.ai/contact",
    siteName: "SpotterDesk AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact & Consultations - SpotterDesk AI",
    description: "Book an operations audit or live voice demo directly with our technical deployment team.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
