"use client";
import React from 'react';
import Link from 'next/link';
import { 
  // Twitter, 
  // Linkedin, 
  // Github, // Agar yahan error hai, to neeche wala SVG method use karein
  ArrowRight, 
  Mail 
} from 'lucide-react';
import { BOOKING_URL } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-12">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Top Section: Brand & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="text-2xl font-bold tracking-tight text-slate-900 mb-4 block">
              SpotterDesk<span className="text-[#5b5fef]">.AI</span>
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed max-w-sm mb-6">
              Revolutionizing enterprise customer communication with sub-500ms voice orchestration and intelligent automation.
            </p>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <FooterGroup 
              title="Platform" 
              links={[
                { name: 'Voice Agents', href: '/ai-voice-agents' },
                { name: 'Automations', href: '/ai-automations' },
                { name: 'Case Studies', href: '/case-studies' },
                { name: 'Book a Call', href: BOOKING_URL },
              ]} 
            />
            <FooterGroup 
              title="Company" 
              links={[
                { name: 'About Us', href: '/about-us' },
                { name: 'Blog', href: '/blog' },
                { name: 'Contact', href: '/contact' }
              ]} 
            />
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-4 bg-slate-50 p-7 rounded-3xl border border-slate-200/80">
            <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
              <Mail size={16} className="text-[#5b5fef]" /> Stay Updated
            </h4>
            <p className="text-slate-600 text-xs mb-5 leading-relaxed">
              Receive the latest AI voice research and deployment updates directly in your inbox.
            </p>
            <form className="relative group" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="you@company.com" 
                className="w-full bg-white border border-slate-200 rounded-xl py-3 pl-4 pr-12 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-indigo-100 focus:border-[#5b5fef] transition-all"
              />
              <button 
                type="submit"
                aria-label="Subscribe"
                className="absolute right-1.5 top-1.5 bottom-1.5 bg-[#5b5fef] text-white px-3 rounded-lg hover:bg-[#4a4edb] transition-all flex items-center justify-center"
              >
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium">
          <p>© {currentYear} SpotterDesk AI. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[#5b5fef] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#5b5fef] transition-colors">Terms of Service</Link>
            <span className="inline-flex items-center gap-2 text-emerald-600 font-medium">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              All Systems Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a 
      href={href} 
      className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-[#464555] hover:bg-[#5b5fef] hover:text-white hover:border-[#5b5fef] transition-all duration-300"
    >
      {icon}
    </a>
  );
}

function FooterGroup({ title, links }: { title: string; links: { name: string; href: string }[] }) {
  return (
    <div className="flex flex-col">
      <h4 className="font-bold text-[11px] uppercase tracking-[0.2em] text-[#1c1b1b] mb-8">
        {title}
      </h4>
      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link.name}>
            {link.href.startsWith('http') ? (
              <a 
                href={link.href} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-[#464555] hover:text-[#5b5fef] transition-all duration-200"
              >
                {link.name}
              </a>
            ) : (
              <Link 
                href={link.href} 
                className="text-sm font-medium text-[#464555] hover:text-[#5b5fef] transition-all duration-200"
              >
                {link.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}