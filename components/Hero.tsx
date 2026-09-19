import { ArrowRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { BOOKING_URL } from '@/lib/constants';

export default function Hero() {
  const waveHeights = [30, 65, 45, 80, 60, 95, 75, 40, 85, 90, 50, 70, 85, 40, 65, 90, 55, 75, 80, 45, 60, 35];

  return (
    <section className="relative w-full max-w-[1280px] mx-auto px-6 pt-28 md:pt-36 lg:pt-40 pb-16 md:pb-24 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Left Content Column */}
      <div className="z-10 text-center lg:text-left">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-[#5b5fef] text-xs font-semibold mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#5b5fef] animate-pulse" />
          <span>Next-Gen Enterprise AI Voice &amp; Automation</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.12] tracking-tight mb-6 text-slate-900">
          AI Systems That{" "}
          <span className="bg-gradient-to-r from-[#5b5fef] via-indigo-600 to-indigo-700 bg-clip-text text-transparent">
            Run Your Business
          </span>{" "}
          More Efficiently.
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl leading-relaxed text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0">
          SpotterDesk AI helps businesses automate operations, improve customer responsiveness, and eliminate repetitive work using AI Voice Agents and intelligent workflow automation.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start items-center">
          <a 
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#5b5fef] hover:bg-[#4a4edb] text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/35 hover:-translate-y-0.5 transition-all w-full sm:w-auto text-base"
          >
            Book a Discovery Call <ArrowRight size={18} />
          </a>
          
          <a 
            href="#platform"
            className="border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 text-slate-800 px-8 py-4 rounded-xl font-bold shadow-sm transition-all w-full sm:w-auto text-center text-base"
          >
            Explore Solutions
          </a>
        </div>

        {/* Trust metrics */}
        <div className="mt-12 pt-8 border-t border-slate-100 grid grid-cols-3 gap-6 text-left max-w-lg mx-auto lg:mx-0">
          <div>
            <div className="text-2xl font-bold text-slate-900">&lt;500ms</div>
            <div className="text-xs text-slate-500 mt-0.5">Voice Latency</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-900">24/7/365</div>
            <div className="text-xs text-slate-500 mt-0.5">Availability</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-900">100%</div>
            <div className="text-xs text-slate-500 mt-0.5">Automated Booking</div>
          </div>
        </div>
      </div>

      {/* Right Column: Sleek Voice Agent Visual */}
      <div className="relative flex justify-center items-center">
        <div className="w-full max-w-md bg-white rounded-3xl border border-slate-200/80 shadow-2xl shadow-slate-200/60 p-6 md:p-8 relative backdrop-blur-sm">
          {/* Header pill */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
              <div>
                <div className="text-sm font-bold text-slate-900">AI Voice Assistant</div>
                <div className="text-xs text-slate-500">Live Call in Progress</div>
              </div>
            </div>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-50 text-[#5b5fef] border border-indigo-100">
              HD Audio
            </span>
          </div>

          {/* Voice Wave Visualizer */}
          <div className="my-8 py-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center gap-1.5 px-4 h-28 overflow-hidden">
            {waveHeights.map((height, i) => (
              <div
                key={i}
                className="w-1.5 rounded-full bg-gradient-to-t from-[#5b5fef] to-indigo-400 transition-all duration-300"
                style={{
                  height: `${height}%`,
                  opacity: (i % 3 === 0) ? 0.9 : 0.6,
                }}
              />
            ))}
          </div>

          {/* Dialogue snippet */}
          <div className="space-y-3">
            <div className="p-3.5 rounded-xl bg-slate-100/80 text-xs text-slate-700">
              <span className="font-semibold text-slate-900">Caller:</span> "Hi, I need to book a 30-min strategy consultation."
            </div>
            <div className="p-3.5 rounded-xl bg-indigo-50 text-xs text-slate-800 border border-indigo-100/60">
              <span className="font-bold text-[#5b5fef]">SpotterDesk AI:</span> "I can lock that in right away! Opening your calendar for this week..."
            </div>
          </div>

          {/* Footer stats */}
          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>Response Latency: <strong className="text-slate-900 font-semibold">280ms</strong></span>
            <span className="text-emerald-600 font-semibold flex items-center gap-1">
              ✓ Calendar Connected
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="col-span-full flex justify-center mt-8 text-slate-400">
        <a href="#platform" className="hover:text-[#5b5fef] transition-colors">
          <ChevronDown className="animate-bounce" size={24} />
        </a>
      </div>
    </section>
  );
}