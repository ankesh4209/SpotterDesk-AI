"use client";

import { motion } from "framer-motion";
import { Mic, Zap, Target, Shield, Cpu, Play, CheckCircle } from 'lucide-react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function VoiceAgentsPage() {
const capabilities = [
  {
    icon: <Zap className="text-yellow-500" />,
    title: "24/7 Call Answering",
    desc: "Answer every customer call instantly, even after hours, on weekends, and during peak demand."
  },
  {
    icon: <Target className="text-blue-500" />,
    title: "Lead Qualification",
    desc: "Automatically qualify prospects, collect key information, and route high-intent leads to the right team."
  },
  {
    icon: <Shield className="text-green-500" />,
    title: "Appointment Booking",
    desc: "Schedule consultations, demos, tours, and appointments directly into your calendar without manual follow-up."
  },
  {
    icon: <Cpu className="text-purple-500" />,
    title: "Customer Support",
    desc: "Handle common customer questions, provide instant answers, and improve response times without increasing headcount."
  }
];

  return (
    <div className="flex flex-col min-h-screen bg-[#fdf8f8]">
      <Navbar />

      <main className="flex-grow">
        {/* --- Premium Enterprise Hero Section --- */}
        <section className="pt-32 pb-20 md:pt-44 md:pb-32 bg-[#1c1b1b] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#5b5fef]/10 blur-[150px] rounded-full" />
          
          <div className="max-w-[1280px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#5b5fef] text-xs font-bold uppercase tracking-widest mb-6">
                <Mic size={14} /> Production-Grade Infrastructure
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8 tracking-tight">
                Call. <span className="text-[#5b5fef]">Automate Your Front Desk.</span>
              </h1>
              <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
                Deploy human-grade Voice AI receptionists engineered explicitly for high-growth gyms and wellness facilities. Capture missed revenue, schedule tours, and handle inquiries 24/7.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-[#5b5fef] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#4a4edb] transition-all shadow-lg shadow-[#5b5fef]/20">
                  Schedule Operations Audit
                </button>
                <button className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold border border-white/20 hover:bg-white/5 transition-all">
                  <Play size={18} fill="currentColor" /> Listen to Infrastructure Demo
                </button>
              </div>
            </motion.div>

            {/* Visual Wave Representation */}
            <div className="relative flex justify-center items-center">
              <div className="w-64 h-64 md:w-96 md:h-96 rounded-full border-2 border-[#5b5fef]/20 flex items-center justify-center animate-pulse">
                <div className="w-48 h-48 md:w-80 md:h-80 rounded-full border border-[#5b5fef]/40 flex items-center justify-center">
                   <Mic size={64} className="text-[#5b5fef]" />
                </div>
              </div>
              
              {/* Performance Tag */}
              <motion.div 
                animate={{ y: [0, -8, 0] }} 
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-10 right-0 bg-white text-black p-5 rounded-2xl shadow-2xl border border-gray-100 hidden md:block"
              >
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Response Latency</p>
                <p className="text-3xl font-black text-[#5b5fef]">Sub-500ms</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- Engineering Capabilities Grid --- */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold text-[#1c1b1b] mb-6 tracking-tight">Engineered for Operational Scale</h2>
              <p className="text-[#464555] max-w-2xl mx-auto text-lg">
                We replace fragile human phone bottlenecks with high-availability digital assets built to protect your facility's margins.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {capabilities.map((c, i) => (
                <div key={i} className="bg-[#fdf8f8]/40 p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm">
                    {c.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#1c1b1b] mb-4">{c.title}</h3>
                  <p className="text-[#464555] text-sm leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Strategic Use Cases Section --- */}
        <section className="pb-32 bg-white">
          <div className="max-w-[1280px] mx-auto px-6 bg-[#1c1b1b] rounded-[48px] text-white p-10 md:p-20 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#5b5fef]/5 blur-[120px] rounded-full" />
            
            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight tracking-tight">
                  From Missed Calls to <br /> <span className="text-[#5b5fef]">Automated Bookings.</span>
                </h2>
                <ul className="space-y-6">
                  {[
                    "Immediate Guest Tour Scheduling & Validation",
                    "24/7 Inbound Membership Qualification & Sales",
                    "Automated Account Freezes & Billing Resolution",
                    "Seamless Multi-Location Operational Routing"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-lg font-medium text-gray-300">
                      <CheckCircle className="text-[#5b5fef] flex-shrink-0" size={24} /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Dynamic Interaction Dialogue Sandbox */}
              <div className="bg-white/5 rounded-3xl p-8 border border-white/10 backdrop-blur-sm">
                <div className="flex flex-col gap-4">
                  <div className="self-end bg-white/10 text-white p-4 rounded-2xl rounded-tr-none max-w-[80%] text-sm font-medium border border-white/5">
                    Hey, I want to drop by tomorrow afternoon to check out your elite training facility.
                  </div>
                  <div className="self-start bg-[#5b5fef] text-white p-4 rounded-2xl rounded-tl-none max-w-[80%] text-sm font-medium shadow-lg flex items-start gap-3">
                    <Mic size={16} className="text-white mt-0.5 flex-shrink-0 animate-pulse" />
                    <div>
                      I can lock that in for you right now. I have openings for a VIP facility tour at 2:00 PM and 4:30 PM tomorrow. Which fits your schedule?
                    </div>
                  </div>
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