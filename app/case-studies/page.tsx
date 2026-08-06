"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, TrendingUp, Users, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
      image: "https://images.unsplash.com/photo-1551288049-bbda6465fba1?auto=format&fit=crop&q=80&w=800",
      tags: ["Sales", "Lead Gen", "Scaling"]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#fdf8f8]">
      <Navbar />

      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-[1280px] mx-auto px-6">
          
          {/* --- Hero Header --- */}
          <div className="text-center mb-20 md:mb-32">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[#5b5fef] font-bold text-xs md:text-sm uppercase tracking-[0.4em] mb-6 block"
            >
              Proof of Performance
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-7xl font-bold text-[#1c1b1b] tracking-tight mb-8"
            >
              Real Results. <span className="text-[#5b5fef]">Verified.</span>
            </motion.h1>
            <p className="text-[#464555] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              We don't just promise efficiency; we deliver it. Explore how global leaders are leveraging SpotterDesk AI to transform their operations.
            </p>
          </div>

          {/* --- Case Studies List --- */}
          <div className="space-y-20 md:space-y-32">
            {cases.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`grid lg:grid-cols-2 gap-12 md:gap-20 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Image Section */}
                <div className={`${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-[#5b5fef]/5 rounded-[40px] scale-95 group-hover:scale-100 transition-transform duration-500" />
                    <div className="relative overflow-hidden rounded-[32px] aspect-[4/3] border border-gray-100 shadow-2xl">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-6 left-6 flex gap-2">
                        {item.tags.map(tag => (
                          <span key={tag} className="bg-white/90 backdrop-blur-md text-[#1c1b1b] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="space-y-8">
                  <div>
                    <div className="text-[#5b5fef] font-bold text-sm uppercase tracking-widest mb-2">{item.company} — {item.industry}</div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1c1b1b] leading-tight mb-6">
                      {item.title}
                    </h2>
                    <p className="text-[#464555] text-lg leading-relaxed mb-8">
                      {item.description}
                    </p>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-6 p-8 bg-white rounded-3xl border border-gray-100 shadow-sm">
                    {item.stats.map((stat, idx) => (
                      <div key={idx}>
                        <div className="flex items-center gap-2 text-[#5b5fef] mb-1">
                          {stat.icon}
                          <span className="text-2xl md:text-3xl font-black tracking-tighter">{stat.value}</span>
                        </div>
                        <div className="text-[#767586] text-xs font-bold uppercase tracking-widest">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <Link 
                    href={`/case-studies/${item.company.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center gap-2 font-bold text-[#1c1b1b] group hover:text-[#5b5fef] transition-colors"
                  >
                    View Full Technical Breakdown 
                    <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* --- Bottom CTA --- */}
          <section className="mt-32 text-center bg-[#1c1b1b] rounded-[48px] p-12 md:p-24 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Your success story starts here.</h2>
              <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
                Ready to see what SpotterDesk AI can do for your specific business logic? Let's build a prototype.
              </p>
              <button className="bg-[#5b5fef] text-white px-10 py-4 rounded-2xl font-bold hover:bg-[#4a4edb] transition-all shadow-xl shadow-indigo-500/20">
                Schedule a Consultation
              </button>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}