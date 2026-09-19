"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, TrendingUp, Users, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BOOKING_URL } from "@/lib/constants";

export default function CaseStudiesPage() {
  const cases = [
    {
      company: "Global Logistics Corp",
      industry: "Supply Chain",
      title: "Automating 24/7 Dispatch Coordination",
      stats: [
        { label: "Efficiency Boost", value: "+340%", icon: <TrendingUp size={20} /> },
        { label: "Op-Ex Saved", value: "$1.2M", icon: <BarChart3 size={20} /> }
      ],
      description: "How we replaced a fragmented manual dispatch desk with autonomous voice agents that handle driver routing across 4 time zones.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
      tags: ["Voice AI", "Dispatch", "Enterprise"]
    },
    {
      company: "HealthSync Insurance",
      industry: "Healthcare",
      title: "Zero-Latency Claims Processing",
      stats: [
        { label: "Patient CSAT", value: "4.9/5", icon: <Users size={20} /> },
        { label: "Wait Time", value: "-95%", icon: <TrendingUp size={20} /> }
      ],
      description: "Reducing patient anxiety by deploying voice agents capable of authenticating and processing simple insurance claims in under 2 minutes.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
      tags: ["HIPAA Compliant", "Real-time", "Support"]
    },
    {
      company: "NexGen Fintech",
      industry: "Finance",
      title: "Scaling Outbound Lead Qualification",
      stats: [
        { label: "Conv. Rate", value: "5.2x", icon: <CheckCircle2 size={20} /> },
        { label: "Call Capacity", value: "Infinite", icon: <BarChart3 size={20} /> }
      ],
      description: "NexGen used SpotterDesk to qualify 50,000 leads in a single weekend during a product launch—something impossible with human staff.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800",
      tags: ["Sales", "Lead Gen", "Scaling"]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main className="flex-grow pt-32 pb-24">
        <div className="max-w-[1280px] mx-auto px-6">
          
          {/* --- Hero Header --- */}
          <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-[#5b5fef] text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm"
            >
              Proof of Performance
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6"
            >
              Real Results. <span className="bg-gradient-to-r from-[#5b5fef] to-indigo-600 bg-clip-text text-transparent">Verified.</span>
            </motion.h1>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
              We don't just promise efficiency; we deliver it. Explore how forward-thinking leaders are leveraging SpotterDesk AI to transform their operations.
            </p>
          </div>

          {/* --- Case Studies List --- */}
          <div className="space-y-16 md:space-y-24">
            {cases.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`grid lg:grid-cols-2 gap-12 md:gap-16 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Image Section */}
                <div className={`${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <div className="relative group">
                    <div className="relative overflow-hidden rounded-3xl aspect-[4/3] border border-slate-200/80 shadow-xl">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-5 left-5 flex gap-2">
                        {item.tags.map(tag => (
                          <span key={tag} className="bg-white/95 backdrop-blur-md text-slate-900 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="space-y-6">
                  <div>
                    <div className="text-[#5b5fef] font-bold text-xs uppercase tracking-wider mb-2">{item.company} — {item.industry}</div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-4">
                      {item.title}
                    </h2>
                    <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-6 p-6 bg-slate-50 rounded-2xl border border-slate-200/80">
                    {item.stats.map((stat, idx) => (
                      <div key={idx}>
                        <div className="flex items-center gap-2 text-[#5b5fef] mb-1">
                          {stat.icon}
                          <span className="text-2xl md:text-3xl font-black tracking-tight">{stat.value}</span>
                        </div>
                        <div className="text-slate-500 text-xs font-bold uppercase tracking-wider">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <a 
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-bold text-slate-900 group hover:text-[#5b5fef] transition-colors pt-2"
                  >
                    Schedule Similar Implementation
                    <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#5b5fef]" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* --- Bottom CTA --- */}
          <section className="mt-24 md:mt-32 text-center bg-[#0b0f19] rounded-[40px] p-10 md:p-20 text-white relative overflow-hidden border border-slate-800">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-5 tracking-tight text-white">Your success story starts here.</h2>
              <p className="text-slate-300 text-base md:text-lg mb-8 leading-relaxed">
                Ready to see what SpotterDesk AI can do for your business operations? Let's engineer a custom workflow.
              </p>
              <a 
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#5b5fef] hover:bg-[#4a4edb] text-white px-9 py-4 rounded-xl font-bold transition-all shadow-xl shadow-indigo-500/25"
              >
                Schedule a Consultation
              </a>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}