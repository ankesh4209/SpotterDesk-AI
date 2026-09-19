"use client";

import { Mail, Phone, MapPin, Send, MessageSquare, Calendar, ArrowRight } from 'lucide-react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BOOKING_URL } from "@/lib/constants";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50/60">
      <Navbar />
      
      <main className="flex-grow pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 w-full max-w-full overflow-x-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-8 sm:mb-12 md:mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-[#5b5fef] text-xs font-semibold uppercase tracking-wider mb-4 sm:mb-5 shadow-sm">
              <MessageSquare size={14} /> Contact &amp; Consultations
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-slate-900 tracking-tight mb-4 sm:mb-5 leading-[1.15]">
              Let's talk about <span className="bg-gradient-to-r from-[#5b5fef] to-indigo-600 bg-clip-text text-transparent">Automation.</span>
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Whether you are looking to deploy a single front-desk voice receptionist or enterprise-scale cross-system automations, our team is ready to assist.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* Left Side: Direct Booking + Details */}
            <div className="lg:col-span-5 space-y-6">
              {/* Direct Online Booking Card */}
              <a 
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 sm:gap-5 p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-[#5b5fef] to-indigo-600 text-white hover:from-[#4a4edb] hover:to-indigo-700 transition-all shadow-xl shadow-indigo-500/25 group block"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-2xl flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform backdrop-blur-sm">
                  <Calendar size={24} className="sm:w-6 sm:h-6" />
                </div>
                <div className="flex-grow">
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-indigo-100 block">Instant Booking</span>
                  <h3 className="font-bold text-base sm:text-lg leading-snug">Book a 30-Min Call</h3>
                  <p className="text-white/80 text-xs mt-0.5">Pick a convenient slot directly online</p>
                </div>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform shrink-0 sm:w-5 sm:h-5" />
              </a>

              <div className="space-y-4 pt-2">
                <ContactCard 
                  icon={<Mail size={22} />} 
                  title="Email support" 
                  detail="info@spotterdesk.ai" 
                  subDetail="Response within 24 hours"
                />
                <ContactCard 
                  icon={<Phone size={22} />} 
                  title="Direct Line" 
                  detail="+91-6391031776" 
                  subDetail="Available Mon-Fri (10 AM - 5 PM)"
                />
                <ContactCard 
                  icon={<MapPin size={22} />} 
                  title="Head Office" 
                  detail="Rise Center" 
                  subDetail="Jhansi, India"
                />
              </div>
            </div>

            {/* Right Side: Responsive Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-slate-200/80 shadow-xl shadow-slate-200/40">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Send us an Inquiry</h3>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
                  
                  <div className="space-y-2">
                    <FormLabel>Full Name</FormLabel>
                    <input type="text" placeholder="John Doe" className="input-style" />
                  </div>

                  <div className="space-y-2">
                    <FormLabel>Email</FormLabel>
                    <input type="email" placeholder="john@company.com" className="input-style" />
                  </div>

                  <div className="md:col-span-2 space-y-2">
                    <FormLabel>Inquiry Type</FormLabel>
                    <select className="input-style appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke%3D%22currentColor%22%3E%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%222%22%20d%3D%22M19%209l-7%207-7-7%22%3E%3C/path%3E%3C/svg%3E')] bg-[length:1.25rem] bg-[right_1rem_center] bg-no-repeat">
                      <option>Enterprise Voice Solutions</option>
                      <option>Technical Integration</option>
                      <option>AI Automations</option>
                      <option>Pricing Related</option>
                    </select>
                  </div>

                  <div className="md:col-span-2 space-y-2">
                    <FormLabel>How can we help?</FormLabel>
                    <textarea rows={4} placeholder="Tell us about your use case or requirement..." className="input-style resize-none"></textarea>
                  </div>

                  <div className="md:col-span-2 pt-2">
                    <button className="w-full bg-[#5b5fef] hover:bg-[#4a4edb] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/35 transition-all active:scale-[0.98]">
                      Submit Inquiry <Send size={18} />
                    </button>
                  </div>

                </form>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />

      <style jsx>{`
        .input-style {
          width: 100%;
          background-color: #f8fafc;
          padding: 0.875rem 1.125rem;
          border-radius: 0.875rem;
          border: 1px solid #e2e8f0;
          color: #0f172a;
          font-size: 0.9375rem;
          font-weight: 500;
          transition: all 0.2s;
        }
        .input-style:focus {
          outline: none;
          border-color: #5b5fef;
          background-color: #fff;
          box-shadow: 0 0 0 3px rgba(91, 95, 239, 0.12);
        }
      `}</style>
    </div>
  );
}

/* Helper Components to keep code clean */
function ContactCard({ icon, title, detail, subDetail }: any) {
  return (
    <div className="flex items-center gap-3.5 sm:gap-5 p-4 sm:p-5 bg-white rounded-2xl border border-slate-200/80 shadow-sm group hover:border-indigo-200 transition-all">
      <div className="w-12 h-12 bg-indigo-50 border border-indigo-100 rounded-xl flex items-center justify-center text-[#5b5fef] group-hover:bg-[#5b5fef] group-hover:text-white transition-all shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-slate-900 text-sm mb-0.5">{title}</h3>
        <p className="text-[#5b5fef] font-semibold text-sm">{detail}</p>
        <p className="text-slate-500 text-xs mt-0.5">{subDetail}</p>
      </div>
    </div>
  );
}

function FormLabel({ children }: { children: React.ReactNode }) {
  return (
    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 ml-0.5">
      {children}
    </label>
  );
}