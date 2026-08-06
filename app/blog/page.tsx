"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Search, Tag } from 'lucide-react';
import Link from 'next/link';
import Navbar from "@/components/Navbar";

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
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fdf8f8]">
      <Navbar />

      <main className="pt-32 pb-20 max-w-[1280px] mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-[#1c1b1b] tracking-tight mb-6"
          >
            Insights & <span className="text-[#5b5fef]">Innovations.</span>
          </motion.h1>
          <p className="text-[#464555] text-lg max-w-2xl leading-relaxed">
            Exploring the intersection of LLMs, low-latency voice technology, and the future of autonomous business operations.
          </p>
        </div>

        {/* Featured Post */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative group rounded-[40px] overflow-hidden bg-white border border-gray-100 shadow-2xl mb-20 cursor-pointer"
        >
          <div className="grid lg:grid-cols-2 items-center">
            <div className="h-full min-h-[300px] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1200" 
                alt="Featured article"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-8 md:p-16">
              <div className="flex items-center gap-3 text-[#5b5fef] font-bold text-xs uppercase tracking-widest mb-6">
                <Tag size={14} /> Featured Article
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#1c1b1b] mb-6 group-hover:text-[#5b5fef] transition-colors leading-tight">
                The Anatomy of a Perfect AI Voice Agent
              </h2>
              <p className="text-[#464555] text-lg mb-8 line-clamp-3">
                What makes users trust an AI? We break down the psychology of vocal tone, response latency, and the "uncanny valley" in enterprise applications.
              </p>
              <Link href="/blog/featured-article" className="inline-flex items-center gap-2 font-bold text-[#1c1b1b] border-b-2 border-[#5b5fef] pb-1 hover:gap-4 transition-all">
                Read Full Story <ArrowRight size={20} className="text-[#5b5fef]" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post, i) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video rounded-3xl overflow-hidden mb-6 border border-gray-100 shadow-sm">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-[#5b5fef] uppercase tracking-wider">
                  {post.category}
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-[#767586] text-xs font-medium mb-4">
                <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
              </div>
              
              <h3 className="text-2xl font-bold text-[#1c1b1b] mb-4 group-hover:text-[#5b5fef] transition-colors line-clamp-2">
                {post.title}
              </h3>
              
              <p className="text-[#464555] text-sm leading-relaxed mb-6 line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="flex items-center gap-2 font-bold text-sm text-[#1c1b1b] group-hover:text-[#5b5fef] transition-colors">
                Read Article <ArrowRight size={16} className="text-[#5b5fef]" />
              </div>
            </motion.article>
          ))}
        </div>

      </main>
    </div>
  );
}