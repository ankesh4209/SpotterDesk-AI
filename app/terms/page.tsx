import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileCheck, ShieldAlert, Cpu, Scale, CheckCircle2 } from "lucide-react";
import { BOOKING_URL } from "@/lib/constants";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Enterprise Telephony & Automation Agreement",
  description: "Read the service agreement, acceptable use policies, and SLA commitments governing SpotterDesk AI platform usage.",
  alternates: {
    canonical: "https://spotterdesk.ai/terms",
  },
  openGraph: {
    title: "Terms of Service - SpotterDesk AI",
    description: "Enterprise voice telephony, acceptable use policies, and service agreements at SpotterDesk AI.",
    url: "https://spotterdesk.ai/terms",
    siteName: "SpotterDesk AI",
    type: "website",
  },
};

export default function TermsPage() {
  const lastUpdated = "September 19, 2026";

  const keyTerms = [
    {
      icon: <Cpu size={20} className="text-[#5b5fef]" />,
      title: "Enterprise AI Infrastructure",
      desc: "SpotterDesk AI provides automated voice receptionist and operational workflow integration services."
    },
    {
      icon: <ShieldAlert size={20} className="text-amber-500" />,
      title: "Responsible Telephony",
      desc: "Users must adhere to telecommunications laws, consent requirements, and acceptable call practices."
    },
    {
      icon: <Scale size={20} className="text-emerald-500" />,
      title: "Transparent Service Terms",
      desc: "Clear service scope, intellectual property protections, uptime objectives, and billing commitments."
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
              <FileCheck size={14} /> Service Agreement
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-4">
              Terms of <span className="bg-gradient-to-r from-[#5b5fef] to-indigo-600 bg-clip-text text-transparent">Service.</span>
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-3">
              Please review these Terms of Service before accessing or deploying SpotterDesk AI voice receptionists and workflow systems.
            </p>
            <p className="text-xs text-slate-500 font-medium">
              Effective Date: {lastUpdated}
            </p>
          </div>

          {/* Key Term Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 sm:mb-16">
            {keyTerms.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-4 shadow-xs">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Detailed Terms Content */}
          <div className="max-w-4xl space-y-10 sm:space-y-12 text-slate-700 leading-relaxed">
            
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-3 border-b border-slate-100 pb-3">
                1. Acceptance of Terms
              </h2>
              <p className="text-sm sm:text-base">
                By accessing our website, subscribing to our services, or deploying SpotterDesk AI agents within your business infrastructure, you agree to be bound by these Terms of Service and all incorporated policies. If you are entering into this agreement on behalf of a company or legal entity, you represent that you have the authority to bind that entity.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-3 border-b border-slate-100 pb-3">
                2. Description of Services
              </h2>
              <p className="text-sm sm:text-base">
                SpotterDesk AI delivers enterprise software solutions including:
              </p>
              <ul className="space-y-2.5 text-sm sm:text-base pl-5 list-disc text-slate-600">
                <li><strong>AI Voice Receptionists:</strong> Autonomous low-latency voice systems capable of answering inbound calls, scheduling calendar appointments, and triaging customer inquiries.</li>
                <li><strong>Workflow Automation:</strong> Cross-application integration connectors that synchronize telephony data with CRM platforms, databases, and third-party APIs.</li>
                <li><strong>Custom Deployment &amp; Audits:</strong> Enterprise onboarding, voice prompt engineering, and operational system optimization.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-3 border-b border-slate-100 pb-3">
                3. Acceptable Use &amp; Regulatory Compliance
              </h2>
              <p className="text-sm sm:text-base">
                You agree to use SpotterDesk AI only for lawful, legitimate business operations. You expressly agree not to:
              </p>
              <ul className="space-y-2.5 text-sm sm:text-base pl-5 list-disc text-slate-600">
                <li>Engage in illegal robocalling, deceptive voice spoofing, or unsolicited telemarketing in violation of applicable telecommunication laws (e.g., TCPA, TRAI, GDPR).</li>
                <li>Deploy voice agents for harassment, impersonation of emergency personnel or government officials, or fraudulent activities.</li>
                <li>Attempt to reverse-engineer, decompile, or extract the underlying model architecture or proprietary latency optimization layer of the platform.</li>
                <li>Transmit malicious code, viruses, or disruptive traffic targeting our infrastructure or downstream telephony providers.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-3 border-b border-slate-100 pb-3">
                4. Intellectual Property Rights
              </h2>
              <p className="text-sm sm:text-base">
                <strong>Our IP:</strong> The SpotterDesk AI platform, logos, algorithms, orchestration software, and website design remain the exclusive intellectual property of SpotterDesk AI.
              </p>
              <p className="text-sm sm:text-base text-slate-600">
                <strong>Your Data &amp; Content:</strong> You retain 100% ownership of your business data, customer contacts, brand scripts, and integration assets. You grant SpotterDesk AI a limited, non-exclusive license solely to process and transmit this data as necessary to provide the service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-3 border-b border-slate-100 pb-3">
                5. Service Levels &amp; Latency Goals
              </h2>
              <p className="text-sm sm:text-base">
                SpotterDesk AI strives to maintain sub-500ms voice pipeline response latency and 99.9% uptime across production telephony clusters. However, actual voice latency and uptime may occasionally be impacted by upstream carrier networks, local internet connections, or third-party CRM API response times.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-3 border-b border-slate-100 pb-3">
                6. Limitation of Liability
              </h2>
              <p className="text-sm sm:text-base">
                To the maximum extent permitted by applicable law, SpotterDesk AI and its officers shall not be liable for any indirect, incidental, punitive, or consequential damages resulting from lost profits, telecommunication carrier outages, or third-party service interruptions.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-3 border-b border-slate-100 pb-3">
                7. Inquiries &amp; Governance
              </h2>
              <p className="text-sm sm:text-base">
                These terms shall be governed by the laws of India. For questions or legal notices regarding these Terms of Service, contact:
              </p>
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 text-sm sm:text-base">
                <p><strong>SpotterDesk AI</strong></p>
                <p className="text-slate-600">Attention: Legal Operations</p>
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
