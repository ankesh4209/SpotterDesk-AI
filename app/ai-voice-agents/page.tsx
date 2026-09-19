"use client";

import { motion } from "framer-motion";
import { Mic, Zap, Target, Shield, Cpu, Play, CheckCircle } from 'lucide-react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BOOKING_URL } from "@/lib/constants";

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
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main className="flex-grow">
        {/* --- Premium Enterprise Hero Section --- */}
        <section className="pt-32 pb-20 md:pt-44 md:pb-32 bg-[#0b0f19] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#5b5fef]/20 to-transparent blur-[160px] rounded-full pointer-events-none" />
          
          <div className="max-w-[1280px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-indigo-200 text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-sm">
                <Mic size={14} className="text-indigo-400" /> Production-Grade Voice Infrastructure
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-[1.1] mb-8 tracking-tight text-white">
                <span className="text-white">Never Miss a Call.</span> <br />
                <span className="bg-gradient-to-r from-indigo-300 via-indigo-200 to-white bg-clip-text text-transparent">
                  Automate Your Front Desk.
                </span>
              </h1>
              <p className="text-slate-200 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
                Deploy human-grade Voice AI receptionists engineered for high-growth businesses. Capture missed revenue, schedule consultations, and handle inquiries 24/7/365.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#5b5fef] hover:bg-[#4a4edb] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-indigo-500/25 inline-flex items-center justify-center"
                >
                  Schedule Operations Audit
                </a>
                <a 
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold border border-white/20 hover:bg-white/10 transition-all text-white"
                >
                  <Play size={18} fill="currentColor" /> Book Live Voice Demo
                </a>
              </div>
            </motion.div>

            {/* Visual Wave Representation */}
            <div className="relative flex justify-center items-center">
              <div className="w-64 h-64 md:w-96 md:h-96 rounded-full border border-indigo-500/20 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-[#5b5fef]/10 rounded-full blur-2xl animate-pulse" />
                <div className="w-48 h-48 md:w-80 md:h-80 rounded-full border border-indigo-500/40 flex items-center justify-center bg-slate-900/60 backdrop-blur-md">
                   <Mic size={64} className="text-[#5b5fef]" />
                </div>
              </div>
              
              {/* Performance Tag */}
              <motion.div 
                animate={{ y: [0, -8, 0] }} 
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-10 right-0 bg-white text-slate-900 p-5 rounded-2xl shadow-2xl border border-slate-100 hidden md:block"
              >
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Response Latency</p>
                <p className="text-3xl font-black text-[#5b5fef]">Sub-500ms</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- Engineering Capabilities Grid --- */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <span className="text-[#5b5fef] font-bold text-xs uppercase tracking-[0.2em] mb-3 block">
                Architecture
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
                Engineered for Operational Scale
              </h2>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                Replace human phone bottlenecks with high-availability digital voice receptionists built to protect your business margins.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {capabilities.map((c, i) => (
                <div key={i} className="bg-slate-50/80 p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 hover:border-indigo-200 hover:-translate-y-1 transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-center mb-6 shadow-sm">
                    {c.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{c.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Strategic Use Cases Section --- */}
        <section className="pb-24 md:pb-32 bg-white">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="bg-[#0b0f19] rounded-[40px] text-white p-10 md:p-16 relative overflow-hidden border border-slate-800">
              <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
              
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
                <div>
                  <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight tracking-tight text-white">
                    From Missed Calls to <br /> <span className="text-indigo-400">Automated Bookings.</span>
                  </h2>
                  <ul className="space-y-4 mb-8">
                    {[
                      "Immediate Customer Consultation Scheduling & Confirmation",
                      "24/7 Inbound Qualification & Smart Routing",
                      "Automated FAQs, Inquiry Resolution & Account Sync",
                      "Seamless CRM & Multi-Calendar Coordination"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-base font-medium text-slate-300">
                        <CheckCircle className="text-[#5b5fef] flex-shrink-0" size={20} /> {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#5b5fef] hover:bg-[#4a4edb] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-indigo-500/25"
                  >
                    Book a Voice Demo Call
                  </a>
                </div>
                
                {/* Dynamic Interaction Dialogue Sandbox */}
                <div className="bg-white/5 rounded-3xl p-6 md:p-8 border border-white/10 backdrop-blur-md">
                  <div className="flex flex-col gap-4">
                    <div className="self-end bg-white/10 text-white p-4 rounded-2xl rounded-tr-none max-w-[85%] text-sm font-medium border border-white/10">
                      Hey, I want to book a demo call tomorrow afternoon to discuss AI voice automation.
                    </div>
                    <div className="self-start bg-[#5b5fef] text-white p-4 rounded-2xl rounded-tl-none max-w-[85%] text-sm font-medium shadow-lg flex items-start gap-3">
                      <Mic size={16} className="text-white mt-1 flex-shrink-0 animate-pulse" />
                      <div>
                        I can lock that in for you right now! We have slots open at 2:00 PM and 4:30 PM tomorrow. Which time suits your schedule best?
                      </div>
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