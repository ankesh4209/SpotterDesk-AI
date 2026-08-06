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

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 pt-24 pb-12">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Top Section: Brand & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-[#1c1b1b] mb-8 block">
              SpotterDesk<span className="text-[#5b5fef]">.AI</span>
            </Link>
            <p className="text-[#464555] text-base leading-relaxed max-w-sm mb-8">
              Revolutionizing enterprise communication with sub-500ms voice orchestration and intelligent automation.
            </p>
            <div className="flex gap-5">
              {/* <SocialLink href="#" icon={<Twitter size={20} />} /> */}
              {/* <SocialLink href="#" icon={<Linkedin size={20} />} /> */}
              {/* <SocialLink href="#" icon={<Github size={20} />} /> */}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <FooterGroup 
              title="Platform" 
              links={[
                { name: 'Voice Agents', href: '/ai-voice-agents' },
                { name: 'Automations', href: '/ai-automations' },
                { name: 'Case Studies', href: '/case-studies' },
                // { name: 'API Docs', href: '#' }
              ]} 
            />
            <FooterGroup 
              title="Company" 
              links={[
                { name: 'About Us', href: '/about-us' },
                { name: 'Blog', href: '/blog' },
                // { name: 'Careers', href: '#' },
                { name: 'Contact', href: '/contact' }
              ]} 
            />
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-4 bg-[#fdf8f8] p-8 rounded-[32px] border border-gray-50">
            <h4 className="font-bold text-sm uppercase tracking-widest text-[#1c1b1b] mb-4 flex items-center gap-2">
              <Mail size={16} className="text-[#5b5fef]" /> Stay Updated
            </h4>
            <p className="text-[#767586] text-sm mb-6">Receive the latest AI research and product updates directly in your inbox.</p>
            <form className="relative group" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="email@company.com" 
                className="w-full bg-white border border-gray-100 rounded-2xl py-4 pl-5 pr-14 text-sm outline-none focus:ring-2 focus:ring-[#5b5fef]/10 focus:border-[#5b5fef] transition-all"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-[#5b5fef] text-white px-3 rounded-xl hover:bg-[#4a4edb] transition-all flex items-center justify-center">
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-[11px] font-bold text-[#767586] uppercase tracking-[0.15em]">
            <p>© {currentYear} SpotterDesk AI.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-[#5b5fef] transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-[#5b5fef] transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-[#5b5fef] transition-colors">Security</Link>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-[10px] font-bold text-[#767586] uppercase tracking-widest">Systems Operational</span>
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
            <Link 
              href={link.href} 
              className="text-sm font-medium text-[#464555] hover:text-[#5b5fef] transition-all duration-200"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}