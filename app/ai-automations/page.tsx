"use client";

import { motion } from "framer-motion";
import { Layers, GitBranch, Database, Mail, Calendar, Workflow, ArrowRight, Zap, CheckCircle } from 'lucide-react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    <div className="flex flex-col min-h-screen bg-[#fdf8f8]">
      <Navbar />

      <main className="flex-grow">
        {/* --- Hero Section --- */}
        <section className="pt-32 pb-20 md:pt-44 md:pb-24">
          <div className="max-w-[1280px] mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5b5fef]/10 text-[#5b5fef] text-xs font-bold uppercase tracking-widest mb-6">
                <Workflow size={14} /> Intelligent Workflows
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-[#1c1b1b] leading-[1.1] mb-8 tracking-tight">
                Beyond Voice. <br /><span className="text-[#5b5fef]">Pure Action.</span>
              </h1>
              <p className="text-[#464555] text-lg md:text-xl leading-relaxed mb-10">
                Don't just talk to customers. Let SpotterDesk AI handle the heavy lifting by connecting your voice agents to 5,000+ apps and internal databases.
              </p>
              <button className="bg-[#1c1b1b] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#333] transition-all flex items-center gap-3">
                Build a Workflow <ArrowRight size={20} />
              </button>
            </motion.div>

            <div className="relative">
              <div className="absolute inset-0 bg-[#5b5fef]/20 blur-[100px] rounded-full -z-10" />
              <img 
                src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1200" 
                alt="AI Automation Concept" 
                className="rounded-[40px] shadow-2xl border border-gray-100"
              />
            </div>
          </div>
        </section>

        {/* --- Automation Cards --- */}
        <section className="py-20 bg-white">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="mb-20">
              <h2 className="text-3xl md:text-5xl font-bold text-[#1c1b1b] mb-6">Automate your <span className="text-[#5b5fef]">entire stack.</span></h2>
              <p className="text-[#464555] max-w-xl">Our agents don't just speak; they perform complex cross-platform operations.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {workflows.map((flow, i) => (
                <div key={i} className="p-8 rounded-[32px] border border-gray-100 bg-[#fdf8f8] hover:shadow-xl transition-all group">
                  <div className={`w-14 h-14 ${flow.color} text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg`}>
                    {flow.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#1c1b1b] mb-6">{flow.title}</h3>
                  <div className="space-y-4">
                    {flow.steps.map((step, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[10px] font-bold text-[#5b5fef]">
                          {idx + 1}
                        </div>
                        <span className="text-[#464555] font-medium">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Integration Section --- */}
        <section className="py-24 md:py-32 overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="bg-[#1c1b1b] rounded-[48px] p-12 md:p-24 text-white relative">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-3xl md:text-5xl font-bold mb-8">Natively integrated with your <span className="text-[#5b5fef]">ecosystem.</span></h2>
                  <p className="text-gray-400 text-lg mb-10">
                    Connect to Salesforce, HubSpot, Zapier, and custom Webhooks in one click. No complex coding required.
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    <IntegrationTag label="CRM Sync" />
                    <IntegrationTag label="API Webhooks" />
                    <IntegrationTag label="SQL Databases" />
                    <IntegrationTag label="Cloud Storage" />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 opacity-50 grayscale hover:grayscale-0 transition-all">
                   {/* Placeholder icons for tech stack */}
                   {[1,2,3,4,5,6,7,8,9].map(n => (
                     <div key={n} className="aspect-square bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center">
                        <Database size={32} className="text-gray-500" />
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