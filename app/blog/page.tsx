"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Search, Tag } from 'lucide-react';
import Link from 'next/link';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "The Future of Sub-500ms Voice Response Times",
      excerpt: "How we optimized our orchestration layer to achieve human-like conversation speeds in enterprise environments.",
      category: "AI Research",
      date: "May 10, 2026",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 2,
      title: "Why Traditional IVR is Dying a Slow Death",
      excerpt: "The shift from 'Press 1' to natural language understanding is saving companies millions in support costs.",
      category: "Voice Tech",
      date: "May 05, 2026",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 3,
      title: "Scaling to 10k Concurrent Calls: A Technical Guide",
      excerpt: "A deep dive into our microservices architecture and how we handle massive spikes in voice traffic.",
      category: "Product Updates",
      date: "April 28, 2026",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main className="flex-grow pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 w-full max-w-full overflow-x-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        
        {/* Header Section */}
        <div className="mb-8 sm:mb-12 md:mb-14 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-[#5b5fef] text-xs font-semibold uppercase tracking-wider mb-4 sm:mb-5 shadow-sm">
            Research &amp; Updates
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-4 sm:mb-5"
          >
            Insights &amp; <span className="bg-gradient-to-r from-[#5b5fef] to-indigo-600 bg-clip-text text-transparent">Innovations.</span>
          </motion.h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Exploring the intersection of LLMs, low-latency voice technology, and the future of autonomous business operations.
          </p>
        </div>

        {/* Featured Post */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative group rounded-3xl overflow-hidden bg-white border border-slate-200/80 shadow-xl mb-12 sm:mb-16 md:mb-24 cursor-pointer hover:border-indigo-200 transition-all"
        >
          <div className="grid lg:grid-cols-2 items-center">
            <div className="h-full min-h-[220px] sm:min-h-[300px] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1200" 
                alt="Featured article"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-5 sm:p-8 md:p-14">
              <div className="flex items-center gap-2 text-[#5b5fef] font-bold text-xs uppercase tracking-wider mb-3 sm:mb-4">
                <Tag size={14} /> Featured Article
              </div>
              <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4 group-hover:text-[#5b5fef] transition-colors leading-tight">
                The Anatomy of a Perfect AI Voice Agent
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 line-clamp-3">
                What makes users trust an AI? We break down the psychology of vocal tone, response latency, and the "uncanny valley" in enterprise applications.
              </p>
              <Link href="/blog" className="inline-flex items-center gap-2 font-bold text-slate-900 hover:text-[#5b5fef] transition-colors text-sm">
                Read Full Story <ArrowRight size={16} className="text-[#5b5fef]" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {posts.map((post, i) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer p-5 sm:p-6 rounded-3xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/5 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 border border-slate-200/80 shadow-sm">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-[#5b5fef] uppercase tracking-wider shadow-sm">
                    {post.category}
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-slate-500 text-xs font-medium mb-3">
                  <span className="flex items-center gap-1.5"><Calendar size={13} /> {post.date}</span>
                  <span className="flex items-center gap-1.5"><Clock size={13} /> {post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#5b5fef] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
              
              <div className="flex items-center gap-2 font-bold text-sm text-slate-900 group-hover:text-[#5b5fef] transition-colors pt-2 border-t border-slate-200/60">
                Read Article <ArrowRight size={15} className="text-[#5b5fef] group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.article>
          ))}
        </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}