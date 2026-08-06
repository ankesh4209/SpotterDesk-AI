"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, BookOpen, FileText, Users } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  const resourceLinks = [
    { name: "About Us", href: "/about-us", icon: <Users size={18} />, desc: "Learn about our vision" },
    { name: "Blog", href: "/blog", icon: <BookOpen size={18} />, desc: "Latest AI insights" },
    { name: "Case Studies", href: "/case-studies", icon: <FileText size={18} />, desc: "Real-world results" },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-[1000] bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
          
          {/* Logo - Added shrink-0 to prevent compression */}
          <Link href="/" className="text-xl lg:text-2xl font-bold tracking-tighter text-[#1c1b1b] z-[120] shrink-0">
            SpotterDesk<span className="text-[#5b5fef]">.AI</span>
          </Link>

          {/* Desktop Links - Switch to mobile menu at 1024px (lg) to avoid 767px-877px clutter */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-10">
            <Link href="/ai-voice-agents" className="nav-link">AI Voice Agents</Link>
            <Link href="/ai-automations" className="nav-link">AI Automations</Link>
            
            <div 
              className="relative group py-7"
              onMouseEnter={() => setIsResourcesOpen(true)}
              onMouseLeave={() => setIsResourcesOpen(false)}
            >
              <button className="flex items-center gap-1 nav-link outline-none">
                Resources <ChevronDown size={14} className={`transition-transform duration-300 ${isResourcesOpen ? 'rotate-180' : ''}`} />
              </button>

              <div className={`absolute top-[70px] left-1/2 -translate-x-1/2 w-72 bg-white border border-gray-100 rounded-2xl shadow-2xl p-4 transition-all duration-300 transform ${isResourcesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                {resourceLinks.map((item) => (
                  <Link key={item.name} href={item.href} className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors group/item">
                    <div className="text-[#5b5fef] bg-[#5b5fef]/10 p-2 rounded-lg group-hover/item:bg-[#5b5fef] group-hover/item:text-white transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#1c1b1b]">{item.name}</div>
                      <div className="text-[11px] text-[#767586] font-medium">{item.desc}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/contact" className="nav-link">Contact</Link>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 md:gap-4 z-[120] shrink-0">
            <button className="hidden sm:block bg-[#5b5fef] text-white px-4 xl:px-6 py-2 md:py-2.5 rounded-full text-[12px] xl:text-sm font-bold shadow-lg shadow-indigo-100 hover:bg-[#4a4edb] transition-all active:scale-95 whitespace-nowrap">
              Get a Free Demo
            </button>
            
            {/* Breakpoint fix: Changed from md:hidden to lg:hidden */}
            <button 
              className="lg:hidden p-2 text-[#1c1b1b] hover:bg-gray-100 rounded-lg transition-colors" 
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 top-16 md:top-20 bg-white z-[105] lg:hidden transition-transform duration-500 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col p-6 h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] overflow-y-auto bg-white">
            
            <div className="flex flex-col">
              <Link href="/ai-voice-agents" className="mobile-link" onClick={() => setIsOpen(false)}>
                AI Voice Agents
              </Link>
              <Link href="/ai-automations" className="mobile-link" onClick={() => setIsOpen(false)}>
                AI Automations
              </Link>
              
              <div className="border-b border-gray-100">
                <button 
                  onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                  className="flex justify-between items-center w-full py-5 text-xl font-bold text-[#1c1b1b]"
                >
                  Resources
                  <ChevronDown size={20} className={`text-[#5b5fef] transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${isResourcesOpen ? 'max-h-[300px] mb-4' : 'max-h-0'}`}>
                  <div className="grid gap-1 pl-4 border-l-2 border-gray-100">
                    {resourceLinks.map((item) => (
                      <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)} className="flex items-center gap-4 py-3 text-base font-semibold text-[#464555]">
                        <span className="text-[#5b5fef]">{item.icon}</span> 
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link href="/contact" className="mobile-link" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </div>

            <div className="mt-auto pt-8 pb-6">
              <button className="w-full py-4 bg-[#5b5fef] text-white rounded-2xl font-bold">
                Get a Free Demo
              </button>
            </div>
          </div>
        </div>
      </nav>

      <style jsx>{`
        .nav-link {
          @apply text-[12px] xl:text-[13px] font-bold uppercase tracking-widest text-[#464555] hover:text-[#5b5fef] transition-all whitespace-nowrap;
        }
        .mobile-link {
          @apply flex items-center justify-between text-xl font-bold text-[#1c1b1b] border-b border-gray-100 py-5;
        }
      `}</style>
    </>
  );
}