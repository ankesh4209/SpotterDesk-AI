"use client";

import { Mic2, Workflow, ArrowRight } from "lucide-react";

const services = [
  {
    title: "AI Voice Agents",
    icon: Mic2,
    desc: "Deploy intelligent AI voice systems that answer calls, qualify leads, schedule appointments, and support customers 24/7 with natural, human-like conversations.",
  },
  {
    title: "AI Workflow Automation",
    icon: Workflow,
    desc: "Eliminate repetitive tasks and streamline business operations with AI-powered workflows that improve efficiency, accuracy, and response times.",
  },
];

export default function Services() {
  return (
    <section className="relative w-full max-w-[1280px] mx-auto px-6 py-16 md:py-24 lg:py-32">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 -z-10 w-64 h-64 bg-[#5b5fef]/5 blur-[120px] rounded-full" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-6">
        <div className="max-w-2xl">
          <span className="text-[#5b5fef] font-bold text-[10px] md:text-xs uppercase tracking-[0.3em] block mb-3">
            Solutions
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#1c1b1b] leading-tight">
            Core Capabilities
          </h2>

          <p className="text-[#464555] text-base md:text-lg mt-4 opacity-90">
            AI systems designed to automate operations, improve customer
            responsiveness, and help businesses scale more efficiently.
          </p>
        </div>

        <button className="flex items-center gap-2 text-[#5b5fef] font-bold text-sm uppercase tracking-wider hover:gap-3 transition-all w-fit">
          Explore All Solutions
          <ArrowRight size={18} />
        </button>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="group relative bg-white p-7 md:p-10 rounded-[24px] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_30px_60px_rgba(91,95,239,0.12)] transition-all duration-500 hover:-translate-y-1.5 overflow-hidden"
          >
            {/* Sidebar Accent */}
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#5b5fef] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />

            {/* Icon */}
            <div className="w-12 h-12 md:w-14 md:h-14 bg-[#5b5fef]/10 rounded-2xl flex items-center justify-center text-[#5b5fef] mb-6 md:mb-8 group-hover:bg-[#5b5fef] group-hover:text-white transition-all duration-300">
              <service.icon size={24} className="md:w-7 md:h-7" />
            </div>

            {/* Title */}
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-[#1c1b1b] group-hover:text-[#5b5fef] transition-colors">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-[#464555] text-sm md:text-base lg:text-lg leading-relaxed mb-6 md:mb-8">
              {service.desc}
            </p>

            {/* CTA */}
            <a
              href="#"
              className="inline-flex items-center gap-2 text-[#5b5fef] font-bold text-[13px] uppercase tracking-widest group/link"
            >
              Learn More
              <ArrowRight
                size={16}
                className="group-hover/link:translate-x-1 transition-transform"
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}