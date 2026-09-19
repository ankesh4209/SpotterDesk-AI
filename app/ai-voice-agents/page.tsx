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

      <main className="flex-grow w-full max-w-full overflow-x-hidden">
        {/* --- Premium Enterprise Hero Section --- */}
        <section className="pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-12 sm:pb-16 md:pb-20 bg-[#0b0f19] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#5b5fef]/20 to-transparent blur-[160px] rounded-full pointer-events-none" />
          
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-indigo-200 text-xs font-semibold uppercase tracking-wider mb-4 sm:mb-5 backdrop-blur-sm">
                <Mic size={14} className="text-indigo-400" /> Production-Grade Voice Infrastructure
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.15] mb-4 sm:mb-5 tracking-tight text-white">
                <span className="text-white">Never Miss a Call.</span> <br />
                <span className="bg-gradient-to-r from-indigo-300 via-indigo-200 to-white bg-clip-text text-transparent">
                  Automate Your Front Desk.
                </span>
              </h1>
              <p className="text-slate-200 text-base sm:text-lg mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Deploy human-grade Voice AI receptionists engineered for high-growth businesses. Capture missed revenue, schedule consultations, and handle inquiries 24/7/365.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3.5 justify-center lg:justify-start">
                <a 
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#5b5fef] hover:bg-[#4a4edb] text-white px-7 py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/35 hover:-translate-y-0.5 inline-flex items-center justify-center w-full sm:w-auto text-center"
                >
                  Schedule Operations Audit
                </a>
                <a 
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold border border-white/20 hover:bg-white/10 transition-all text-white w-full sm:w-auto text-center"
                >
                  <Play size={18} fill="currentColor" /> Book Live Voice Demo
                </a>
              </div>
            </motion.div>

            {/* Right Column: Balanced Enterprise Voice Agent Terminal */}
            <div className="relative flex justify-center items-center w-full">
              {/* Outer ambient glow */}
              <div className="absolute inset-0 bg-indigo-500/15 blur-[120px] rounded-full pointer-events-none -z-10" />

              <div className="w-full max-w-lg bg-slate-900/90 border border-slate-800 rounded-3xl p-5 sm:p-8 backdrop-blur-xl shadow-2xl shadow-black/60 relative">
                {/* Header status bar */}
                <div className="flex items-center justify-between pb-4 sm:pb-5 border-b border-slate-800/80">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping shrink-0" />
                    <div>
                      <div className="text-sm font-bold text-white">AI Voice Receptionist</div>
                      <div className="text-[11px] sm:text-xs text-slate-400">Live Inbound Call in Progress</div>
                    </div>
                  </div>
                  <span className="text-[11px] sm:text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 shrink-0">
                    HD Voice
                  </span>
                </div>

                {/* Central Audio Waveform Visualizer */}
                <div className="my-5 sm:my-6 py-5 sm:py-6 px-3 sm:px-4 bg-slate-950/70 rounded-2xl border border-slate-800/80 flex flex-col items-center justify-center relative overflow-hidden">
                  <div className="flex items-center justify-center gap-1 sm:gap-1.5 h-16 mb-4 w-full overflow-hidden">
                    {[35, 65, 45, 85, 60, 95, 75, 45, 90, 60, 80, 50, 70, 90, 40, 65, 85, 50, 75, 35].map((h, idx) => (
                      <div
                        key={idx}
                        className="w-1 sm:w-1.5 rounded-full bg-gradient-to-t from-[#5b5fef] to-indigo-300 transition-all duration-300 shrink-0"
                        style={{ height: `${h}%`, opacity: (idx % 2 === 0) ? 0.95 : 0.6 }}
                      />
                    ))}
                  </div>

                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] sm:text-xs text-slate-300 text-center">
                    <Mic size={14} className="text-[#5b5fef] animate-pulse shrink-0" />
                    <span>Real-Time Voice Streaming Active</span>
                  </div>
                </div>

                {/* Live Conversation Snippet */}
                <div className="space-y-2.5 sm:space-y-3 mb-5 sm:mb-6 text-left">
                  <div className="p-3 sm:p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 text-xs text-slate-300 leading-relaxed">
                    <span className="font-semibold text-white">Caller:</span> "Hi, I need to book a strategy consultation for tomorrow."
                  </div>
                  <div className="p-3 sm:p-3.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-xs text-indigo-200 leading-relaxed">
                    <span className="font-semibold text-indigo-400">SpotterDesk AI:</span> "I can lock that in right now! Opening calendar slots for tomorrow..."
                  </div>
                </div>

                {/* Metrics Footer */}
                <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 gap-3 sm:gap-4 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold">Response Latency</span>
                    <span className="text-lg sm:text-xl font-black text-indigo-400">Sub-500ms</span>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-400 block text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold">Booking Status</span>
                    <span className="text-lg sm:text-xl font-black text-emerald-400">Instant Sync</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Engineering Capabilities Grid --- */}
        <section className="py-16 sm:py-20 md:py-28 bg-white overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16 max-w-2xl mx-auto">
              <span className="text-[#5b5fef] font-bold text-xs uppercase tracking-[0.2em] mb-3 block">
                Architecture
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
                Engineered for Operational Scale
              </h2>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                Replace human phone bottlenecks with high-availability digital voice receptionists built to protect your business margins.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {capabilities.map((c, i) => (
                <div key={i} className="bg-slate-50/80 p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 hover:border-indigo-200 hover:-translate-y-1 transition-all duration-300">
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
        <section className="pb-20 sm:pb-24 md:pb-32 bg-white">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="bg-[#0b0f19] rounded-3xl sm:rounded-[40px] text-white p-5 sm:p-10 md:p-16 relative overflow-hidden border border-slate-800">
              <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
              
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
                <div>
                  <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight tracking-tight text-white">
                    From Missed Calls to <br /> <span className="text-indigo-400">Automated Bookings.</span>
                  </h2>
                  <ul className="space-y-3.5 sm:space-y-4 mb-8">
                    {[
                      "Immediate Customer Consultation Scheduling & Confirmation",
                      "24/7 Inbound Qualification & Smart Routing",
                      "Automated FAQs, Inquiry Resolution & Account Sync",
                      "Seamless CRM & Multi-Calendar Coordination"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start sm:items-center gap-3 text-sm sm:text-base font-medium text-slate-300">
                        <CheckCircle className="text-[#5b5fef] flex-shrink-0 mt-0.5 sm:mt-0" size={18} /> {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#5b5fef] hover:bg-[#4a4edb] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-indigo-500/25 w-full sm:w-auto text-center"
                  >
                    Book a Voice Demo Call
                  </a>
                </div>
                
                {/* Dynamic Interaction Dialogue Sandbox */}
                <div className="bg-white/5 rounded-3xl p-5 sm:p-6 md:p-8 border border-white/10 backdrop-blur-md mt-6 lg:mt-0">
                  <div className="flex flex-col gap-4">
                    <div className="self-end bg-white/10 text-white p-4 rounded-2xl rounded-tr-none max-w-[92%] sm:max-w-[85%] text-sm font-medium border border-white/10">
                      Hey, I want to book a demo call tomorrow afternoon to discuss AI voice automation.
                    </div>
                    <div className="self-start bg-[#5b5fef] text-white p-4 rounded-2xl rounded-tl-none max-w-[92%] sm:max-w-[85%] text-sm font-medium shadow-lg flex items-start gap-3">
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