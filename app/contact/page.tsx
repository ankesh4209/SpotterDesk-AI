"use client";

import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fdf8f8]">
      <Navbar />
      
      <main className="flex-grow pt-28 md:pt-36 pb-16 md:pb-24">
        <div className="max-w-[1280px] mx-auto px-6">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-12 md:mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5b5fef]/10 text-[#5b5fef] text-xs font-bold uppercase tracking-wider mb-6">
              <MessageSquare size={14} /> Contact Us
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#1c1b1b] tracking-tight mb-6">
              Let's talk about <span className="text-[#5b5fef]">Automation.</span>
            </h1>
            <p className="text-[#464555] text-lg md:text-xl leading-relaxed">
              Whether you're looking to deploy 10 or 10,000 agents, our team is ready to help you architect the perfect voice workflow.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* Left Side: Contact Details */}
            <div className="lg:col-span-5 space-y-8 md:space-y-12">
              <ContactCard 
                icon={<Mail size={24} />} 
                title="Email support" 
                detail="info@spotterdesk.ai" 
                subDetail="Response within 24 hours"
              />
              <ContactCard 
                icon={<Phone size={24} />} 
                title="Direct Line" 
                detail="+91-6391031776" 
                subDetail="Available Mon-Fri (10 AM - 5 PM)"
              />
              <ContactCard 
                icon={<MapPin size={24} />} 
                title="Head Office" 
                detail="Rise Center" 
                subDetail="Jhansi, India"
              />
            </div>

            {/* Right Side: Responsive Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-6 md:p-10 rounded-[32px] border border-gray-100 shadow-[0_30px_60px_rgba(0,0,0,0.03)] transition-all">
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
                    <textarea rows={5} placeholder="Tell us about your use case or mention about your requirement..." className="input-style resize-none"></textarea>
                  </div>

                  <div className="md:col-span-2 pt-2">
                    <button className="w-full bg-[#5b5fef] text-white py-4 md:py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-[#4a4edb] hover:shadow-xl hover:shadow-indigo-200 transition-all active:scale-[0.98]">
                      Submit Inquiry <Send size={20} />
                    </button>
                  </div>

                </form>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />

      {/* Global CSS Inject (Add this to globals.css instead if preferred) */}
      <style jsx>{`
        .input-style {
          width: 100%;
          background-color: #f8f9fa;
          padding: 1rem 1.25rem;
          border-radius: 1rem;
          border: 1px solid #e9ecef;
          color: #1c1b1b;
          font-weight: 500;
          transition: all 0.2s;
        }
        .input-style:focus {
          outline: none;
          border-color: #5b5fef;
          background-color: #fff;
          box-shadow: 0 0 0 4px rgba(91, 95, 239, 0.1);
        }
      `}</style>
    </div>
  );
}

/* Helper Components to keep code clean */
function ContactCard({ icon, title, detail, subDetail }: any) {
  return (
    <div className="flex gap-6 group">
      <div className="w-14 h-14 bg-white border border-gray-100 rounded-2xl flex items-center justify-center text-[#5b5fef] shadow-sm group-hover:bg-[#5b5fef] group-hover:text-white transition-all shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-[#1c1b1b] text-lg mb-1">{title}</h3>
        <p className="text-[#5b5fef] font-semibold">{detail}</p>
        <p className="text-[#767586] text-sm mt-1">{subDetail}</p>
      </div>
    </div>
  );
}

function FormLabel({ children }: { children: React.ReactNode }) {
  return (
    <label className="block text-xs font-bold uppercase tracking-widest text-[#767586] ml-1">
      {children}
    </label>
  );
}