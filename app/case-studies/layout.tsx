import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies - Proven Enterprise AI Voice ROI & Results",
  description: "Real results. Verified performance. See how enterprise leaders achieve 340%+ efficiency and save millions with SpotterDesk AI.",
  keywords: [
    "AI Case Studies",
    "Voice AI Results",
    "Enterprise Automation ROI",
    "Customer Support Automation Case Study",
    "SpotterDesk Case Studies"
  ],
  alternates: {
    canonical: "https://spotterdesk.ai/case-studies",
  },
  openGraph: {
    title: "Case Studies - SpotterDesk AI",
    description: "Proof of Performance. Explore verified case studies and metrics across supply chain, health insurance, and fintech.",
    url: "https://spotterdesk.ai/case-studies",
    siteName: "SpotterDesk AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies - SpotterDesk AI",
    description: "Real results, verified performance. How businesses automate operations with SpotterDesk AI.",
  },
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
