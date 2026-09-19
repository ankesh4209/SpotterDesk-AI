import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Humanizing AI Through Action",
  description: "Learn about SpotterDesk AI's mission, our founder Arif Khan, and how we build zero-latency voice agents and automated business infrastructure.",
  keywords: [
    "About SpotterDesk AI",
    "Arif Khan Founder",
    "Voice AI Mission",
    "Enterprise AI Team",
    "SpotterDesk Leadership"
  ],
  alternates: {
    canonical: "https://spotterdesk.ai/about-us",
  },
  openGraph: {
    title: "About Us - SpotterDesk AI",
    description: "Humanizing AI through action. Founded by Arif Khan with the vision to eliminate friction between humans and business systems.",
    url: "https://spotterdesk.ai/about-us",
    siteName: "SpotterDesk AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About SpotterDesk AI - Leadership & Mission",
    description: "We build autonomous voice systems that don't just speak—they think, solve, and execute.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
