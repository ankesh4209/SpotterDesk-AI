import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automations - Autonomous Business Workflow Systems",
  description: "Connect your AI voice agents to 5,000+ apps, CRMs, and internal databases. Autonomous workflows that eliminate repetitive operational work.",
  keywords: [
    "AI Automations",
    "Workflow Automation",
    "CRM AI Integration",
    "Autonomous Business Operations",
    "Cross-platform AI Sync",
    "SpotterDesk Automations"
  ],
  alternates: {
    canonical: "https://spotterdesk.ai/ai-automations",
  },
  openGraph: {
    title: "AI Automations - SpotterDesk AI",
    description: "Pure Autonomous Action. Seamlessly connect Voice AI to your CRM, calendars, and backend databases.",
    url: "https://spotterdesk.ai/ai-automations",
    siteName: "SpotterDesk AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automations - SpotterDesk AI",
    description: "Connect your voice agents to 5,000+ apps, CRMs, and internal databases. Pure autonomous action.",
  },
};

export default function AutomationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
