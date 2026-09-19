import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Lock, Eye, CheckCircle2 } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Data Security & Confidentiality",
  description: "Learn how SpotterDesk AI collects, encrypts, and protects your business data, customer calls, and telephony interactions.",
  alternates: {
    canonical: "https://spotterdesk.ai/privacy",
  },
  openGraph: {
    title: "Privacy Policy - SpotterDesk AI",
    description: "Enterprise data security and voice confidentiality standards at SpotterDesk AI.",
    url: "https://spotterdesk.ai/privacy",
    siteName: "SpotterDesk AI",
    type: "website",
  },
};

export default function PrivacyPage() {
  const lastUpdated = "September 19, 2026";

  const keyPrinciples = [
    {
      icon: <Lock size={20} className="text-[#5b5fef]" />,
      title: "End-to-End Encryption",
      desc: "All audio streams, transcripts, and API payloads are encrypted in transit (TLS 1.3) and at rest (AES-256)."
    },
    {
      icon: <Eye size={20} className="text-emerald-500" />,
      title: "No Unauthorized Sharing",
      desc: "We do not sell, rent, or monetize your customer data or call recordings to third parties."
    },
    {
      icon: <Shield size={20} className="text-amber-500" />,
      title: "Strict Access Controls",
      desc: "Access to client telemetry and databases is restricted by role-based permissions and multi-factor authentication."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main className="flex-grow pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-24 w-full max-w-full overflow-x-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          
          {/* Header */}
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-[#5b5fef] text-xs font-semibold uppercase tracking-wider mb-4 sm:mb-5 shadow-sm">
              <Shield size={14} /> Legal &amp; Data Security
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-4">
              Privacy <span className="bg-gradient-to-r from-[#5b5fef] to-indigo-600 bg-clip-text text-transparent">Policy.</span>
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-3">
              At SpotterDesk AI, we recognize the importance of data privacy, confidentiality, and data integrity when deploying voice automation systems.
            </p>
            <p className="text-xs text-slate-500 font-medium">
              Effective Date: {lastUpdated}
            </p>
          </div>

          {/* Key Principles Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 sm:mb-16">
            {keyPrinciples.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-4 shadow-xs">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Detailed Legal Content */}
          <div className="max-w-4xl space-y-10 sm:space-y-12 text-slate-700 leading-relaxed">
            
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-3 border-b border-slate-100 pb-3">
                1. Information We Collect
              </h2>
              <p className="text-sm sm:text-base">
                We collect information necessary to operate, improve, and secure our enterprise voice agents and automation workflows:
              </p>
              <ul className="space-y-2.5 text-sm sm:text-base pl-5 list-disc text-slate-600">
                <li><strong>Account &amp; Contact Details:</strong> Name, professional email address, organization name, phone number, and billing details provided during consultation and onboarding.</li>
                <li><strong>Audio Streams &amp; Call Records:</strong> Audio recordings, call duration, latency metrics, and transcription logs generated when an inbound or outbound call interacts with SpotterDesk AI agents.</li>
                <li><strong>Workflow &amp; Integration Telemetry:</strong> Connected CRM records, webhook trigger logs, and scheduling metadata authorized by your organization.</li>
                <li><strong>Usage Data:</strong> Browser diagnostics, device information, and IP addresses captured for platform stability and abuse prevention.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-3 border-b border-slate-100 pb-3">
                2. How We Use Your Information
              </h2>
              <p className="text-sm sm:text-base">
                Your data is processed strictly to provide high-availability AI voice and workflow services:
              </p>
              <div className="grid sm:grid-cols-2 gap-3.5 pt-1">
                {[
                  "Executing real-time voice call triage and scheduling",
                  "Syncing appointments directly with your connected calendar",
                  "Triggering authenticated CRM updates and webhooks",
                  "Monitoring and maintaining sub-500ms voice pipeline latency",
                  "Detecting security threats, fraud, or misuse",
                  "Providing technical customer support and operational audits"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200/60">
                    <CheckCircle2 size={16} className="text-[#5b5fef] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-3 border-b border-slate-100 pb-3">
                3. Voice Data, AI Models &amp; Confidentiality
              </h2>
              <p className="text-sm sm:text-base">
                We adhere to strict privacy safeguards regarding Large Language Models (LLMs) and synthetic speech pipelines:
              </p>
              <p className="text-sm sm:text-base text-slate-600">
                Your private customer calls, proprietary internal knowledge bases, and confidential business documents are <strong>never used to train public foundation models</strong>. Enterprise customer data is isolated in secure, tenant-partitioned execution environments.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-3 border-b border-slate-100 pb-3">
                4. Data Retention &amp; Deletion
              </h2>
              <p className="text-sm sm:text-base">
                We retain call audio and transcripts only for the duration agreed upon in your service configuration or as required by applicable laws. You maintain full ownership of your data and can request complete purging of call recordings and transcripts at any time by contacting our support desk.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-3 border-b border-slate-100 pb-3">
                5. Third-Party Integrations
              </h2>
              <p className="text-sm sm:text-base">
                SpotterDesk AI connects with customer-authorized services (e.g., Salesforce, HubSpot, Google Calendar, Zapier, Webhooks). Any data exchanged through these integrations is governed by the respective platform's privacy policy and your authorization scopes.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-3 border-b border-slate-100 pb-3">
                6. Contact Our Privacy Team
              </h2>
              <p className="text-sm sm:text-base">
                If you have questions, inquiries regarding data compliance, or wish to exercise your data subject rights, please reach out to us:
              </p>
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 text-sm sm:text-base">
                <p><strong>SpotterDesk AI</strong></p>
                <p className="text-slate-600">Attention: Privacy &amp; Data Protection Officer</p>
                <p className="text-slate-600">Email: <a href="mailto:info@spotterdesk.ai" className="text-[#5b5fef] font-semibold hover:underline">info@spotterdesk.ai</a></p>
                <p className="text-slate-600">Office: Rise Center, Jhansi, India</p>
                <p className="text-slate-600">Direct Line: +91-6391031776</p>
              </div>
            </section>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
