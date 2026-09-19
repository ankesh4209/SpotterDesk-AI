import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Voice Agents - Enterprise Autonomous Phone Receptionists",
  description: "Deploy human-grade AI Voice receptionists with sub-500ms latency. Handle inbound calls, schedule appointments, and qualify leads 24/7/365.",
  keywords: [
    "AI Voice Agents",
    "Voice AI Receptionist",
    "Autonomous Call Answering",
    "Low Latency Voice AI",
    "Appointment Scheduling AI",
    "SpotterDesk Voice"
  ],
  alternates: {
    canonical: "https://spotterdesk.ai/ai-voice-agents",
  },
  openGraph: {
    title: "AI Voice Agents - SpotterDesk AI",
    description: "Production-grade voice infrastructure. Never miss an inbound call with automated 24/7 front desk receptionists.",
    url: "https://spotterdesk.ai/ai-voice-agents",
    siteName: "SpotterDesk AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Voice Agents - SpotterDesk AI",
    description: "Production-grade Voice AI receptionists engineered for high-growth businesses. Sub-500ms voice response latency.",
  },
};

export default function VoiceAgentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
