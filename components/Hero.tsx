import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { BOOKING_URL } from '@/lib/constants';

export default function Hero() {
  const waveHeights = [30, 65, 45, 80, 60, 95, 75, 40, 85, 90, 50, 70, 85, 40, 65, 90, 55, 75, 80, 45, 60, 35];

  return (
    <section className="relative w-full max-w-[1280px] mx-auto px-4 sm:px-6 pt-24 sm:pt-28 md:pt-32 lg:pt-32 pb-6 sm:pb-8 md:pb-10 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent blur-[80px] sm:blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Left Content Column */}
      <div className="z-10 text-center lg:text-left w-full">
        <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-[#5b5fef] text-[11px] sm:text-xs font-semibold mb-4 sm:mb-5 shadow-sm max-w-full">
          <span className="w-2 h-2 rounded-full bg-[#5b5fef] animate-pulse shrink-0" />
          <span className="truncate sm:whitespace-normal">Next-Gen Enterprise AI Voice &amp; Automation</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.15] tracking-tight mb-4 sm:mb-5 text-slate-900">
          AI Systems That{" "}
          <span className="bg-gradient-to-r from-[#5b5fef] via-indigo-600 to-indigo-700 bg-clip-text text-transparent">
            Run Your Business
          </span>{" "}
          More Efficiently.
        </h1>
        
        <p className="text-base sm:text-lg leading-relaxed text-slate-600 mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0">
          SpotterDesk AI helps businesses automate operations, improve customer responsiveness, and eliminate repetitive work using AI Voice Agents and intelligent workflow automation.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap gap-3.5 justify-center lg:justify-start items-center">
          <a 
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#5b5fef] hover:bg-[#4a4edb] text-white px-7 py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/35 hover:-translate-y-0.5 transition-all w-full sm:w-auto text-base"
          >
            Book a Discovery Call <ArrowRight size={18} />
          </a>
          
          <a 
            href="#platform"
            className="border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 text-slate-800 px-7 py-3.5 rounded-xl font-bold shadow-sm transition-all w-full sm:w-auto text-center text-base"
          >
            Explore Solutions
          </a>
        </div>

        {/* Trust metrics */}
        <div className="mt-8 sm:mt-10 pt-6 border-t border-slate-100 grid grid-cols-3 gap-2 sm:gap-6 text-center sm:text-left max-w-lg mx-auto lg:mx-0">
          <div>
            <div className="text-lg sm:text-2xl font-bold text-slate-900">&lt;500ms</div>
            <div className="text-[10px] sm:text-xs text-slate-500 mt-0.5">Voice Latency</div>
          </div>
          <div>
            <div className="text-lg sm:text-2xl font-bold text-slate-900">24/7/365</div>
            <div className="text-[10px] sm:text-xs text-slate-500 mt-0.5">Availability</div>
          </div>
          <div>
            <div className="text-lg sm:text-2xl font-bold text-slate-900">100%</div>
            <div className="text-[10px] sm:text-xs text-slate-500 mt-0.5">Automated Booking</div>
          </div>
        </div>
      </div>

      {/* Right Column: Sleek Voice Agent Visual */}
      <div className="relative flex justify-center items-center w-full">
        <div className="w-full max-w-lg bg-white rounded-3xl border border-slate-200/80 shadow-2xl shadow-slate-200/60 p-5 sm:p-7 relative backdrop-blur-sm">
          {/* Header pill */}
          <div className="flex items-center justify-between pb-4 sm:pb-5 border-b border-slate-100">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping shrink-0" />
              <div>
                <div className="text-sm font-bold text-slate-900">AI Voice Assistant</div>
                <div className="text-[11px] sm:text-xs text-slate-500">Live Call in Progress</div>
              </div>
            </div>
            <span className="text-[11px] sm:text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-50 text-[#5b5fef] border border-indigo-100 shrink-0">
              HD Audio
            </span>
          </div>

          {/* Voice Wave Visualizer */}
          <div className="my-5 sm:my-6 py-4 sm:py-5 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center gap-1 sm:gap-1.5 px-3 sm:px-4 h-24 overflow-hidden">
            {waveHeights.map((height, i) => (
              <div
                key={i}
                className="w-1 sm:w-1.5 rounded-full bg-gradient-to-t from-[#5b5fef] to-indigo-400 transition-all duration-300 shrink-0"
                style={{
                  height: `${height}%`,
                  opacity: (i % 3 === 0) ? 0.9 : 0.6,
                }}
              />
            ))}
          </div>

          {/* Dialogue snippet */}
          <div className="space-y-2.5">
            <div className="p-3 rounded-xl bg-slate-100/80 text-xs text-slate-700 leading-relaxed">
              <span className="font-semibold text-slate-900">Caller:</span> "Hi, I need to book a 30-min strategy consultation."
            </div>
            <div className="p-3 rounded-xl bg-indigo-50 text-xs text-slate-800 border border-indigo-100/60 leading-relaxed">
              <span className="font-bold text-[#5b5fef]">SpotterDesk AI:</span> "I can lock that in right away! Opening your calendar for this week..."
            </div>
          </div>

          {/* Footer stats */}
          <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
            <span>Response Latency: <strong className="text-slate-900 font-semibold">280ms</strong></span>
            <span className="text-emerald-600 font-semibold flex items-center gap-1">
              ✓ Calendar Connected
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}