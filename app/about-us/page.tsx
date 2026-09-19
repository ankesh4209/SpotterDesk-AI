"use client";

import { motion } from "framer-motion";
import { Users, Target, Shield, Globe, ArrowRight, Code, Zap } from 'lucide-react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  const stats = [
    { label: "Voice Interactions", value: "10M+" },
    { label: "Response Latency", value: "<500ms" },
    { label: "Enterprise Clients", value: "50+" },
    { label: "Countries Served", value: "12+" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main className="flex-grow pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 w-full max-w-full overflow-x-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          
          {/* --- Mission Section --- */}
          <section className="mb-12 sm:mb-16 md:mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-[#5b5fef] text-xs font-semibold uppercase tracking-wider mb-4 sm:mb-5 shadow-sm">
                Our Mission
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-slate-900 mb-4 sm:mb-5 tracking-tight leading-[1.15]">
                Humanizing AI Through <span className="bg-gradient-to-r from-[#5b5fef] to-indigo-600 bg-clip-text text-transparent">Action.</span>
              </h1>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
                SpotterDesk AI was founded with a single goal: to eliminate friction between humans and operational business systems. We build autonomous voice agents that don't just speak—they think, solve, and execute.
              </p>
            </motion.div>
          </section>

          {/* --- Stats Grid --- */}
          <section className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6 md:gap-8 mb-16 sm:mb-24 md:mb-32">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-slate-50/80 p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-slate-200/80 shadow-sm text-center hover:border-indigo-200 transition-colors"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-[#5b5fef] mb-1 sm:mb-2">{stat.value}</div>
                <div className="text-slate-500 text-[10px] sm:text-xs font-bold uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </section>

          {/* --- The Story / Values --- */}
          <section className="grid lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center mb-16 sm:mb-24 md:mb-32">
            <div className="relative">
              <div className="absolute -inset-4 bg-indigo-500/10 rounded-[40px] blur-2xl -z-10" />
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
                alt="Our Team" 
                className="relative rounded-3xl sm:rounded-[36px] shadow-2xl border border-slate-200/80 w-full object-cover"
              />
            </div>
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                Technically Driven. <br />Customer Obsessed.
              </h2>
              
              <div className="space-y-5 sm:space-y-6">
                <ValueItem 
                  icon={<Code size={22} className="text-[#5b5fef]" />}
                  title="Developer First"
                  desc="We provide robust APIs and documentation so you can customize our voice agents to fit your unique business logic."
                />
                <ValueItem 
                  icon={<Zap size={22} className="text-amber-500" />}
                  title="Performance Minded"
                  desc="Latency is the enemy of trust. We optimize every millisecond of our orchestration layer for real-time natural conversations."
                />
                <ValueItem 
                  icon={<Shield size={22} className="text-emerald-500" />}
                  title="Privacy by Design"
                  desc="Your data is strictly confidential. We implement end-to-end encryption and compliance standards across all voice interactions."
                />
              </div>
            </div>
          </section>

          {/* --- Founder / Lead Section --- */}
          <section className="bg-[#0b0f19] rounded-3xl sm:rounded-[40px] p-5 sm:p-10 md:p-16 text-white border border-slate-800 overflow-hidden">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-12">
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-[#5b5fef] flex-shrink-0 bg-slate-800 flex items-center justify-center text-2xl sm:text-3xl font-bold text-white shadow-xl shadow-indigo-500/20">
                AK
              </div>
              <div className="space-y-2 sm:space-y-3 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-white">Arif Khan</h3>
                <p className="text-indigo-400 font-bold uppercase tracking-wider text-xs">Founder of SpotterDesk AI</p>
                <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed italic">
                  "At SpotterDesk, we aren't just building voice models; we're building the infrastructure for how businesses communicate in real time—with zero latency, total context awareness, and autonomous execution."
                </p>
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}

function ValueItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex gap-5 items-start">
      <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100/60 flex items-center justify-center flex-shrink-0 mt-0.5">
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-bold text-slate-900 mb-1">{title}</h4>
        <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}