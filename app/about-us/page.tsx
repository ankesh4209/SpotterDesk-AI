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
    <div className="flex flex-col min-h-screen bg-[#fdf8f8]">
      <Navbar />

      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-[1280px] mx-auto px-6">
          
          {/* --- Mission Section --- */}
          <section className="mb-32">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="text-[#5b5fef] font-bold text-sm uppercase tracking-[0.3em] mb-6 block">Our Mission</span>
              <h1 className="text-4xl md:text-7xl font-bold text-[#1c1b1b] mb-8 tracking-tight leading-tight">
                Humanizing AI Through <span className="text-[#5b5fef]">Action.</span>
              </h1>
              <p className="text-[#464555] text-lg md:text-xl leading-relaxed">
                SpotterDesk AI was founded with a single goal: to eliminate the friction between humans and machines. We build autonomous voice agents that don't just speak—they think, solve, and execute.
              </p>
            </motion.div>
          </section>

          {/* --- Stats Grid --- */}
          <section className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-[32px] border border-gray-100 shadow-sm text-center"
              >
                <div className="text-4xl md:text-5xl font-black text-[#5b5fef] mb-2">{stat.value}</div>
                <div className="text-[#767586] text-xs font-bold uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </section>

          {/* --- The Story / Values --- */}
          <section className="grid lg:grid-cols-2 gap-20 items-center mb-32">
            <div className="relative">
              <div className="absolute -inset-4 bg-[#5b5fef]/10 rounded-[40px] blur-2xl" />
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
                alt="Our Team" 
                className="relative rounded-[40px] shadow-2xl border border-white"
              />
            </div>
            <div className="space-y-10">
              <h2 className="text-3xl md:text-5xl font-bold text-[#1c1b1b] leading-tight">
                Technically Driven. <br />Customer Obsessed.
              </h2>
              
              <div className="space-y-8">
                <ValueItem 
                  icon={<Code className="text-[#5b5fef]" />}
                  title="Developer First"
                  desc="We provide robust APIs and documentation so you can customize our voice agents to fit your unique business logic."
                />
                <ValueItem 
                  icon={<Zap className="text-yellow-500" />}
                  title="Performance Minded"
                  desc="Latency is the enemy of trust. We optimize every millisecond of our orchestration layer for real-time feel."
                />
                <ValueItem 
                  icon={<Shield className="text-green-500" />}
                  title="Privacy by Design"
                  desc="Your data is your own. We implement end-to-end encryption and SOC2 standards across all voice interactions."
                />
              </div>
            </div>
          </section>

          {/* --- Founder / Lead Section --- */}
          <section className="bg-[#1c1b1b] rounded-[48px] p-12 md:p-24 text-white">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-[#5b5fef] flex-shrink-0">
                 {/* Replace with your photo */}
                <div className="w-full h-full bg-[#333] flex items-center justify-center text-4xl font-bold">AD</div>
              </div>
              <div className="space-y-4 text-center md:text-left">
                <h3 className="text-3xl font-bold">Ankesh Daheriya</h3>
                <p className="text-[#5b5fef] font-bold uppercase tracking-widest text-sm">Founder & Lead Developer</p>
                <p className="text-gray-400 text-lg leading-relaxed italic">
                  "At SpotterDesk, we aren't just building software; we're building the future of how businesses communicate. Our focus is on the hard technical problems—latency, context awareness, and seamless automation."
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
    <div className="flex gap-6">
      <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-gray-50 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="text-xl font-bold text-[#1c1b1b] mb-2">{title}</h4>
        <p className="text-[#464555] leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}