"use client";

import { Mic2, Workflow, ArrowRight } from "lucide-react";
import Link from "next/link";
import { BOOKING_URL } from "@/lib/constants";

const services = [
  {
    title: "AI Voice Agents",
    icon: Mic2,
    desc: "Deploy intelligent AI voice systems that answer calls, qualify leads, schedule appointments, and support customers 24/7 with natural, human-like conversations.",
    href: "/ai-voice-agents",
  },
  {
    title: "AI Workflow Automation",
    icon: Workflow,
    desc: "Eliminate repetitive tasks and streamline business operations with AI-powered workflows that improve efficiency, accuracy, and response times.",
    href: "/ai-automations",
  },
];

export default function Services() {
  return (
    <section className="relative w-full max-w-[1280px] mx-auto px-6 py-20 md:py-28">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
        <div className="max-w-2xl">
          <span className="text-[#5b5fef] font-bold text-xs uppercase tracking-[0.2em] block mb-3">
            Core Solutions
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            Engineered For Performance
          </h2>

          <p className="text-slate-600 text-base md:text-lg mt-4 max-w-xl leading-relaxed">
            AI systems designed to automate operations, improve customer responsiveness, and help businesses scale effortlessly.
          </p>
        </div>

        <a 
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[#5b5fef] font-bold text-sm uppercase tracking-wider hover:gap-3 hover:text-[#4a4edb] transition-all w-fit"
        >
          Book a Discovery Call
          <ArrowRight size={18} />
        </a>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="group relative bg-white p-8 md:p-10 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-200 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
          >
            {/* Top Bar Accent */}
            <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-[#5b5fef] to-indigo-400 rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div>
              {/* Icon */}
              <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-[#5b5fef] mb-6 group-hover:bg-[#5b5fef] group-hover:text-white transition-all duration-300 shadow-sm">
                <service.icon size={26} />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-[#5b5fef] transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 text-base leading-relaxed mb-8">
                {service.desc}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex items-center justify-between pt-6 border-t border-slate-100">
              <Link
                href={service.href}
                className="inline-flex items-center gap-2 text-[#5b5fef] font-bold text-sm hover:text-[#4a4edb] transition-colors"
              >
                Learn More
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-slate-50 hover:bg-indigo-50 text-slate-700 hover:text-[#5b5fef] border border-slate-200/80 hover:border-indigo-200 transition-all"
              >
                Book Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}