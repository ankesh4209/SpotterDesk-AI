"use client";
import React from 'react';
import { Settings2, Radio, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  { 
    id: '01', 
    title: 'Discovery & Strategy', 
    icon: Settings2, 
    desc: 'We identify operational bottlenecks, customer communication gaps, and automation opportunities across your business.' 
  },
  { 
    id: '02', 
    title: 'AI System Deployment', 
    icon: Radio, 
    desc: 'Our team builds and deploys custom AI Voice Agents and automation workflows tailored to your business processes.' 
  },
  { 
    id: '03', 
    title: 'Optimization & Growth', 
    icon: BarChart3, 
    desc: 'Monitor performance, improve workflows, and continuously optimize your AI systems as your business scales.' 
  }
];

export default function HowItWorks() {
  return (
    <section className="bg-slate-50/80 border-y border-slate-200/60 py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-14 md:mb-20 text-center max-w-2xl mx-auto">
          <span className="text-[#5b5fef] font-bold text-xs uppercase tracking-[0.2em] mb-3 block">
            Three-Step Framework
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
            How SpotterDesk Works
          </h2>
          <p className="text-slate-600 text-base md:text-lg mt-4 leading-relaxed">
            From discovering operational bottlenecks to deploying high-availability voice agents and workflows.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 hover:border-indigo-200 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header row with Icon and Step Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 bg-indigo-50 border border-indigo-100 rounded-2xl flex items-center justify-center text-[#5b5fef] group-hover:bg-[#5b5fef] group-hover:text-white transition-all shadow-sm">
                    <step.icon size={26} />
                  </div>
                  <span className="text-xs font-bold text-[#5b5fef] bg-indigo-50 px-3 py-1.5 rounded-full border border-indigo-100 tracking-wider">
                    STEP {step.id}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold mb-3 text-slate-900 group-hover:text-[#5b5fef] transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-slate-600 text-base leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}