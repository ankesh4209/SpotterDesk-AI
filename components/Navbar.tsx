"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, BookOpen, FileText, Users, Mic, Workflow, Mail, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { BOOKING_URL } from '@/lib/constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  const platformLinks = [
    { 
      name: "AI Voice Agents", 
      href: "/ai-voice-agents", 
      icon: <Mic size={18} />, 
      desc: "Autonomous voice receptionists" 
    },
    { 
      name: "AI Automations", 
      href: "/ai-automations", 
      icon: <Workflow size={18} />, 
      desc: "Intelligent workflow orchestration" 
    },
  ];

  const resourceLinks = [
    { name: "About Us", href: "/about-us", icon: <Users size={18} />, desc: "Learn about our vision" },
    { name: "Blog", href: "/blog", icon: <BookOpen size={18} />, desc: "Latest AI insights" },
    { name: "Case Studies", href: "/case-studies", icon: <FileText size={18} />, desc: "Real-world results" },
  ];

  const contactLink = {
    name: "Contact",
    href: "/contact",
    icon: <Mail size={18} />,
    desc: "Get in touch with our team"
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 w-full z-[1000] bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 z-[120] shrink-0">
            SpotterDesk<span className="text-[#5b5fef]">.AI</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/ai-voice-agents" className="nav-link">AI Voice Agents</Link>
            <Link href="/ai-automations" className="nav-link">AI Automations</Link>
            
            <div 
              className="relative group py-6"
              onMouseEnter={() => setIsResourcesOpen(true)}
              onMouseLeave={() => setIsResourcesOpen(false)}
            >
              <button className="flex items-center gap-1.5 nav-link outline-none">
                Resources <ChevronDown size={14} className={`transition-transform duration-300 ${isResourcesOpen ? 'rotate-180' : ''}`} />
              </button>

              <div className={`absolute top-[68px] left-1/2 -translate-x-1/2 w-72 bg-white border border-slate-100 rounded-2xl shadow-xl shadow-slate-200/50 p-3 transition-all duration-300 transform ${isResourcesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                {resourceLinks.map((item) => (
                  <Link key={item.name} href={item.href} className="flex items-center gap-3.5 p-3 rounded-xl hover:bg-slate-50 transition-colors group/item">
                    <div className="text-[#5b5fef] bg-[#5b5fef]/10 p-2.5 rounded-xl group-hover/item:bg-[#5b5fef] group-hover/item:text-white transition-colors shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900">{item.name}</div>
                      <div className="text-xs text-slate-500 font-normal">{item.desc}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/contact" className="nav-link">Contact</Link>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 z-[120] shrink-0">
            <a 
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center justify-center bg-[#5b5fef] text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-md shadow-indigo-500/20 hover:bg-[#4a4edb] hover:shadow-indigo-500/30 transition-all active:scale-95 whitespace-nowrap"
            >
              Get a Free Demo
            </a>
            
            <button 
              className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-xl transition-colors" 
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 top-20 bg-white z-[105] lg:hidden transition-transform duration-500 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col p-5 sm:p-6 h-[calc(100vh-80px)] overflow-y-auto bg-white">
            
            <div className="flex flex-col space-y-1">
              {/* Core Platform Links */}
              {platformLinks.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href} 
                  onClick={() => setIsOpen(false)} 
                  className="flex items-center gap-3.5 p-3 rounded-2xl hover:bg-slate-50 active:bg-slate-100 transition-colors group"
                >
                  <span className="text-[#5b5fef] bg-[#5b5fef]/10 p-2.5 rounded-xl shrink-0 group-hover:bg-[#5b5fef] group-hover:text-white transition-colors">
                    {item.icon}
                  </span> 
                  <div>
                    <div className="font-semibold text-slate-900 text-sm group-hover:text-[#5b5fef] transition-colors">{item.name}</div>
                    <div className="text-xs text-slate-500">{item.desc}</div>
                  </div>
                </Link>
              ))}

              {/* Resources Accordion */}
              <div className="py-1">
                <button 
                  onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                  className="flex justify-between items-center w-full p-3 rounded-2xl hover:bg-slate-50 active:bg-slate-100 transition-colors text-left group"
                >
                  <div className="flex items-center gap-3.5">
                    <span className="text-[#5b5fef] bg-[#5b5fef]/10 p-2.5 rounded-xl shrink-0 group-hover:bg-[#5b5fef] group-hover:text-white transition-colors">
                      <Sparkles size={18} />
                    </span>
                    <div>
                      <div className="font-semibold text-slate-900 text-sm group-hover:text-[#5b5fef] transition-colors">Resources</div>
                      <div className="text-xs text-slate-500">Guides, insights &amp; case studies</div>
                    </div>
                  </div>
                  <ChevronDown size={18} className={`text-[#5b5fef] transition-transform duration-300 ${isResourcesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${isResourcesOpen ? 'max-h-[350px] my-1' : 'max-h-0'}`}>
                  <div className="grid gap-1 pl-4 ml-5 border-l-2 border-slate-100">
                    {resourceLinks.map((item) => (
                      <Link 
                        key={item.name} 
                        href={item.href} 
                        onClick={() => setIsOpen(false)} 
                        className="flex items-center gap-3.5 p-2.5 rounded-xl hover:bg-slate-50 active:bg-slate-100 transition-colors group"
                      >
                        <span className="text-[#5b5fef] bg-[#5b5fef]/10 p-2 rounded-lg shrink-0 group-hover:bg-[#5b5fef] group-hover:text-white transition-colors">
                          {item.icon}
                        </span> 
                        <div>
                          <div className="font-semibold text-slate-900 text-sm group-hover:text-[#5b5fef] transition-colors">{item.name}</div>
                          <div className="text-xs text-slate-500">{item.desc}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Link */}
              <Link 
                href={contactLink.href} 
                onClick={() => setIsOpen(false)} 
                className="flex items-center gap-3.5 p-3 rounded-2xl hover:bg-slate-50 active:bg-slate-100 transition-colors group"
              >
                <span className="text-[#5b5fef] bg-[#5b5fef]/10 p-2.5 rounded-xl shrink-0 group-hover:bg-[#5b5fef] group-hover:text-white transition-colors">
                  {contactLink.icon}
                </span> 
                <div>
                  <div className="font-semibold text-slate-900 text-sm group-hover:text-[#5b5fef] transition-colors">{contactLink.name}</div>
                  <div className="text-xs text-slate-500">{contactLink.desc}</div>
                </div>
              </Link>
            </div>

            <div className="mt-auto pt-8 pb-6">
              <a 
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="block w-full py-4 bg-[#5b5fef] text-white rounded-2xl font-bold text-center hover:bg-[#4a4edb] transition-all shadow-lg shadow-indigo-500/20 active:scale-[0.98]"
              >
                Get a Free Demo
              </a>
            </div>
          </div>
        </div>
      </nav>

      <style jsx>{`
        .nav-link {
          @apply text-sm font-semibold text-slate-600 hover:text-[#5b5fef] transition-all whitespace-nowrap;
        }
      `}</style>
    </>
  );
}