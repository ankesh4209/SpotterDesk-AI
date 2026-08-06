"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

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
      button: "Learn More",
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
      button: "Contact Us",
    },
  ];

  return (
    <section className="relative w-full max-w-[1280px] mx-auto px-6 py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#5b5fef]/5 blur-[80px] md:blur-[120px] rounded-full" />

      <div className="text-center mb-12 md:mb-20">
        <h2 className="text-3xl md:text-5xl font-bold text-[#1c1b1b] tracking-tight">
          AI Solutions Built for Every Stage of Growth
        </h2>
        <p className="text-[#464555] mt-4 text-base md:text-lg max-w-2xl mx-auto opacity-90">
          From AI-powered customer conversations to fully automated business
          operations, we help organizations deploy practical AI systems that
          drive measurable results.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`relative p-7 md:p-8 rounded-[24px] border flex flex-col transition-all duration-300 ${
              plan.popular
                ? "border-[#5b5fef] shadow-[0_20px_50px_rgba(91,95,239,0.12)] bg-white md:scale-105 z-10"
                : "border-gray-100 bg-white/70 backdrop-blur-sm shadow-sm"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="bg-[#5b5fef] text-white text-[10px] font-bold uppercase tracking-[0.15em] px-4 py-1 rounded-full shadow-md">
                  Most Requested
                </span>
              </div>
            )}

            <div className="mb-6 md:mb-8">
              <h3 className="text-lg font-bold text-[#1c1b1b] mb-4 uppercase tracking-wide opacity-70">
                {plan.name}
              </h3>

              <p className="text-[#464555] text-[15px] leading-relaxed">
                {plan.description}
              </p>
            </div>

            <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10 flex-grow">
              {plan.feat.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-3 text-sm md:text-[15px] text-[#464555]"
                >
                  <div className="mt-0.5 bg-[#5b5fef]/10 p-0.5 rounded-full shrink-0">
                    <Check size={14} className="text-[#5b5fef]" />
                  </div>
                  <span className="font-medium leading-tight">{f}</span>
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-4 rounded-2xl font-bold text-[15px] transition-all duration-200 active:scale-[0.98] ${
                plan.popular
                  ? "bg-[#5b5fef] text-white hover:bg-[#4a4edb] shadow-xl shadow-indigo-100"
                  : "bg-white border border-gray-200 text-[#1c1b1b] hover:bg-gray-50"
              }`}
            >
              {plan.button}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}