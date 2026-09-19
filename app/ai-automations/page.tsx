"use client";

import { motion } from "framer-motion";
import { Layers, GitBranch, Database, Mail, Calendar, Workflow, ArrowRight, Zap, CheckCircle } from 'lucide-react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BOOKING_URL } from "@/lib/constants";

export default function AutomationsPage() {
  const workflows = [
    {
      title: "Lead Nurturing",
      icon: <UsersIcon />,
      steps: ["AI Call", "Sentiment Analysis", "Auto-Email", "CRM Sync"],
      color: "bg-blue-500"
    },
    {
      title: "Appointment Setting",
      icon: <Calendar />,
      steps: ["Availability Check", "Voice Booking", "SMS Confirm", "Invite Sent"],
      color: "bg-[#5b5fef]"
    },
    {
      title: "Support Escalation",
      icon: <Layers />,
      steps: ["Voice Triage", "Ticket Creation", "Slack Alert", "Summary Sent"],
      color: "bg-purple-500"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main className="flex-grow">
        {/* --- Hero Section --- */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="max-w-[1280px] mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-[#5b5fef] text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm">
                <Workflow size={14} /> Intelligent Workflows
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8 tracking-tight">
                Beyond Voice. <br />
                <span className="bg-gradient-to-r from-[#5b5fef] to-indigo-600 bg-clip-text text-transparent">
                  Pure Autonomous Action.
                </span>
              </h1>
              <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
                Don't just talk to customers. Let SpotterDesk AI handle the heavy lifting by connecting your voice agents to 5,000+ apps, CRMs, and internal databases.
              </p>
              <a 
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#5b5fef] hover:bg-[#4a4edb] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-indigo-500/25 inline-flex items-center gap-3 w-fit"
              >
                Build a Workflow <ArrowRight size={20} />
              </a>
            </motion.div>

            <div className="relative">
              <div className="absolute inset-0 bg-[#5b5fef]/15 blur-[100px] rounded-full -z-10" />
              <img 
                src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1200" 
                alt="AI Automation Concept" 
                className="rounded-[36px] shadow-2xl border border-slate-200/80"
              />
            </div>
          </div>
        </section>

        {/* --- Automation Cards --- */}
        <section className="py-20 md:py-28 bg-slate-50/70 border-y border-slate-200/60">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="mb-16 text-center max-w-2xl mx-auto">
              <span className="text-[#5b5fef] font-bold text-xs uppercase tracking-[0.2em] mb-3 block">
                Workflow Orchestration
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
                Automate your <span className="text-[#5b5fef]">entire stack.</span>
              </h2>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                Our agents don't just speak; they perform complex cross-platform business operations in real-time.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {workflows.map((flow, i) => (
                <div key={i} className="p-8 rounded-3xl border border-slate-200/80 bg-white hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/5 transition-all group flex flex-col justify-between">
                  <div>
                    <div className={`w-14 h-14 ${flow.color} text-white rounded-2xl flex items-center justify-center mb-8 shadow-md`}>
                      {flow.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">{flow.title}</h3>
                    <div className="space-y-4">
                      {flow.steps.map((step, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center text-xs font-bold text-[#5b5fef]">
                            {idx + 1}
                          </div>
                          <span className="text-slate-700 font-medium text-sm">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Integration Section --- */}
        <section className="py-24 md:py-32 overflow-hidden bg-white">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="bg-[#0b0f19] rounded-[40px] p-10 md:p-16 text-white relative border border-slate-800">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div>
                  <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight leading-tight text-white">
                    Natively integrated with your <span className="text-indigo-400">ecosystem.</span>
                  </h2>
                  <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                    Connect seamlessly to Salesforce, HubSpot, Zapier, Google Workspace, and custom Webhooks. No fragile code required.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <IntegrationTag label="CRM Sync" />
                    <IntegrationTag label="API Webhooks" />
                    <IntegrationTag label="SQL Databases" />
                    <IntegrationTag label="Cloud Storage" />
                  </div>
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#5b5fef] hover:bg-[#4a4edb] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-xl shadow-indigo-500/25"
                  >
                    Schedule Integration Call <ArrowRight size={18} />
                  </a>
                </div>
                <div className="grid grid-cols-3 gap-4 opacity-70 hover:opacity-100 transition-opacity">
                   {[1,2,3,4,5,6,7,8,9].map(n => (
                     <div key={n} className="aspect-square bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center hover:border-indigo-500/50 hover:bg-white/10 transition-all">
                        <Database size={28} className="text-indigo-400" />
                     </div>
                   ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function IntegrationTag({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 text-sm font-bold">
      <CheckCircle size={18} className="text-[#5b5fef]" /> {label}
    </div>
  );
}

function UsersIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
}