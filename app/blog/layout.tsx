import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Research - Voice AI Insights & Innovations",
  description: "Explore research and technical insights on LLMs, low-latency synthetic speech, and the future of autonomous business operations.",
  keywords: [
    "AI Blog",
    "Voice AI Architecture",
    "Low Latency Audio Streaming",
    "LLM Speech Synthesis",
    "AI Engineering Insights",
    "SpotterDesk Blog"
  ],
  alternates: {
    canonical: "https://spotterdesk.ai/blog",
  },
  openGraph: {
    title: "Blog & Research - SpotterDesk AI",
    description: "Insights and innovations at the intersection of LLMs, low-latency voice, and autonomous systems.",
    url: "https://spotterdesk.ai/blog",
    siteName: "SpotterDesk AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog & Research - SpotterDesk AI",
    description: "Technical deep dives into voice AI architectures, latency optimization, and scalable microservices.",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
