"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { BOOKING_URL } from "@/lib/constants";

export default function Pricing() {
  const plans = [
    {
      name: "AI Voice Agents",
      description:
        "Automate customer conversations, lead qualification, and appointment booking with AI-powered voice systems.",
      feat: [
        "24/7 Call Answering",
        "Lead Qualification",
        "Appointment Booking",
        "Customer Support",
      ],
      button: "Book a Demo",
      href: BOOKING_URL,
    },
    {
      name: "AI Operations Systems",
      description:
        "Eliminate repetitive work and streamline business operations with intelligent automation.",
      feat: [
        "Workflow Automation",
        "CRM Integrations",
        "Lead Management",
        "Process Optimization",
      ],
      button: "Book a Consultation",
      href: BOOKING_URL,
      popular: true,
    },
    {
      name: "Enterprise AI Solutions",
      description:
        "Custom AI infrastructure and advanced automation designed for growing organizations.",
      feat: [
        "Custom AI Systems",
        "Multi-System Automation",
        "Dedicated Support",
        "Tailored Deployment",
      ],
      button: "Book Enterprise Call",
      href: BOOKING_URL,
    },
  ];

  return (
    <section className="relative w-full max-w-[1280px] mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-28 overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[500px] h-[500px] bg-indigo-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="text-center mb-10 sm:mb-14 md:mb-20 max-w-2xl mx-auto">
        <span className="text-[#5b5fef] font-bold text-xs uppercase tracking-[0.2em] mb-3 block">
          Solutions &amp; Pricing
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
          AI Solutions Built for Every Stage
        </h2>
        <p className="text-slate-600 mt-4 text-base md:text-lg leading-relaxed">
          From AI-powered customer conversations to fully automated business operations, deploy practical systems that drive measurable ROI.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`relative p-5 sm:p-8 rounded-2xl sm:rounded-3xl border flex flex-col justify-between transition-all duration-300 ${
              plan.popular
                ? "border-2 border-[#5b5fef] shadow-2xl shadow-indigo-500/15 bg-white md:-translate-y-2 z-10"
                : "border-slate-200/80 bg-white shadow-sm hover:shadow-lg hover:border-slate-300"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="bg-[#5b5fef] text-white text-[11px] font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-md shadow-indigo-500/25">
                  Most Requested
                </span>
              </div>
            )}

            <div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {plan.name}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed min-h-[48px]">
                  {plan.description}
                </p>
              </div>

              <div className="h-px w-full bg-slate-100 my-6" />

              <ul className="space-y-3.5 mb-8">
                {plan.feat.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-3 text-sm text-slate-700"
                  >
                    <div className="w-5 h-5 rounded-full bg-indigo-50 text-[#5b5fef] border border-indigo-100/80 flex items-center justify-center shrink-0">
                      <Check size={13} strokeWidth={2.5} />
                    </div>
                    <span className="font-medium">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={plan.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-200 active:scale-[0.98] text-center block ${
                plan.popular
                  ? "bg-[#5b5fef] text-white hover:bg-[#4a4edb] shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/35"
                  : "bg-slate-50 border border-slate-200 text-slate-800 hover:bg-indigo-50 hover:text-[#5b5fef] hover:border-indigo-200"
              }`}
            >
              {plan.button}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}