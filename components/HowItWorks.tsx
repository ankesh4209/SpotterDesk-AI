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
    <section className="bg-[#f8f7f6] py-12 md:py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Header - Reduced Margin */}
        <div className="mb-12 md:mb-20">
          <span className="text-[#5b5fef] font-bold text-xs uppercase tracking-[0.2em] mb-3 block">Process</span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1c1b1b] tracking-tight">
            How it works
          </h2>
        </div>

        {/* Steps Grid - Adjusted Gaps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 md:gap-x-12 lg:gap-x-20">
          {steps.map((step, index) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              
              {/* Responsive Background Numbering */}
              <div className="text-6xl md:text-8xl lg:text-9xl font-black text-black/[0.04] absolute -top-6 md:-top-10 left-0 select-none group-hover:text-[#5b5fef]/5 transition-colors">
                {step.id}
              </div>

              <div className="relative z-10">
                {/* Icon Box */}
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white shadow-sm border border-gray-100 rounded-2xl flex items-center justify-center text-[#5b5fef] mb-6 transition-all group-hover:bg-[#5b5fef] group-hover:text-white group-hover:shadow-lg group-hover:shadow-indigo-100">
                  <step.icon size={24} className="md:w-7 md:h-7" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold mb-3 text-[#1c1b1b]">
                  {step.title}
                </h3>
                
                <p className="text-[#464555] text-sm md:text-base lg:text-lg leading-relaxed max-w-sm">
                  {step.desc}
                </p>
              </div>

              {/* Progress Line (Desktop Only) - Subtle & Professional */}
              {step.id !== '03' && (
                <div className="hidden md:block absolute top-12 -right-6 lg:-right-10 w-8 lg:w-12 border-t border-gray-200" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}