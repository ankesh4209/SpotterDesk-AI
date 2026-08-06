import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full max-w-[1280px] mx-auto px-6 py-16 md:py-24 lg:py-32 grid lg:grid-cols-2 gap-12 items-center overflow-hidden">
      
      {/* Left Content Column */}
      <div className="z-10 text-center lg:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold leading-[1.1] tracking-tight mb-6 text-[#1c1b1b]">
          AI Systems That <span className="text-[#5b5fef]">Run Your Business </span> More Efficiently.
        </h1>
        
        <p className="text-base sm:text-lg md:text-[18px] leading-relaxed text-[#464555] mb-10 max-w-xl mx-auto lg:mx-0">
          SpotterDesk AI helps businesses automate operations, improve customer responsiveness, and eliminate repetitive work using AI Voice Agents and intelligent workflow automation.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start">
          <button className="bg-[#5b5fef] text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-[#4a4edb] hover:shadow-lg hover:-translate-y-0.5 transition-all w-full sm:w-auto">
            Book a Discovery Call <ArrowRight size={18} />
          </button>
          
          <button className="border border-[#767586] px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all text-[#1c1b1b] w-full sm:w-auto">
            Explore Solutions
          </button>
        </div>
      </div>

      {/* Right Column: Visual Element */}
      <div className="relative flex justify-center items-center lg:mt-0 mt-12">
        {/* Glow Effect behind the circle */}
        <div className="absolute w-72 h-72 bg-[#5b5fef]/10 blur-[100px] rounded-full" />
        
        <div className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] rounded-full border border-[#e6e1e1] flex items-center justify-center relative bg-white/50 backdrop-blur-sm">
          <div className="w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] lg:w-[300px] lg:h-[300px] rounded-full border border-[#1c1b1b] overflow-hidden flex items-center">
            {/* Simple Animated Waveform simulation */}
            {Array.from({ length: 24 }).map((_, i) => (
              <div 
                key={i} 
                className="flex-1 bg-[#1c1b1b]/20" 
                style={{ 
                  height: `${Math.random() * 60 + 20}%`,
                  margin: '0 1px'
                }} 
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="col-span-full flex justify-center mt-12 animate-bounce text-[#767586]">
        <ChevronDown />
      </div>
    </section>
  );
}