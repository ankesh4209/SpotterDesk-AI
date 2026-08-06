"use client";

import { motion } from "framer-motion";
import { Zap, Workflow, Database } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Automations() {
  const automationItems = [
    {
      title: "Lead Capture & Qualification",
      icon: Zap,
      desc: "Capture, engage, and qualify inbound leads automatically to ensure every opportunity receives an immediate response.",
    },
    {
      title: "Workflow Automation",
      icon: Workflow,
      desc: "Eliminate repetitive manual tasks and streamline business processes with intelligent AI-powered automation.",
    },
    {
      title: "CRM & Business Systems",
      icon: Database,
      desc: "Keep customer records, communications, and operational data synchronized across your existing tools automatically.",
    },
  ];

  return (
    <section className="bg-[#f8f9fa] py-16 md:py-24 lg:py-28 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-16 text-center md:text-left"
        >
          <span className="text-[#5b5fef] font-bold text-[10px] md:text-xs uppercase tracking-[0.3em] block mb-3">
            AI OPERATIONS
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#1c1b1b] leading-tight">
            Autonomous Operations
          </h2>

          <div className="h-1.5 w-12 bg-[#5b5fef] mt-5 mx-auto md:mx-0 rounded-full" />
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6"
        >
          {automationItems.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  backgroundColor: "#ffffff",
                  boxShadow: "0 15px 30px rgba(0,0,0,0.04)",
                }}
                className="relative p-7 md:p-8 bg-white/60 backdrop-blur-sm border border-gray-100 rounded-[24px] transition-all duration-300 group"
              >
                {/* Accent */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-10 bg-[#5b5fef] rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Icon */}
                <div className="w-12 h-12 bg-[#5b5fef]/10 rounded-xl flex items-center justify-center text-[#5b5fef] mb-6 group-hover:bg-[#5b5fef] group-hover:text-white transition-all duration-300">
                  <Icon size={24} />
                </div>

                {/* Title */}
                <h4 className="text-lg md:text-xl font-bold mb-3 text-[#1c1b1b]">
                  {item.title}
                </h4>

                {/* Description */}
                <p className="text-[#464555] text-sm md:text-base leading-relaxed opacity-90">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}