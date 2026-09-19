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
    <section className="bg-white py-20 md:py-28 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 md:mb-20 text-center max-w-2xl mx-auto"
        >
          <span className="text-[#5b5fef] font-bold text-xs uppercase tracking-[0.2em] block mb-3">
            AI Operations
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            Autonomous Operations Stack
          </h2>

          <p className="text-slate-600 text-base md:text-lg mt-4 leading-relaxed">
            Connect every touchpoint across your CRM, voice channels, and internal tools into unified autonomous workflows.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {automationItems.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="relative p-8 bg-slate-50/80 hover:bg-white border border-slate-200/80 hover:border-indigo-200 rounded-3xl transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 group flex flex-col justify-between"
              >
                <div>
                  {/* Icon */}
                  <div className="w-14 h-14 bg-white group-hover:bg-[#5b5fef] group-hover:text-white border border-slate-200/80 group-hover:border-transparent rounded-2xl flex items-center justify-center text-[#5b5fef] mb-6 transition-all duration-300 shadow-sm">
                    <Icon size={26} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-[#5b5fef] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}