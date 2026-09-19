import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import Automations from "@/components/Automations";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "SpotterDesk AI - Next-Gen Enterprise Voice AI & Intelligent Automation",
  description: "Automate operations, eliminate repetitive work, and handle customer conversations 24/7 with human-grade AI Voice Agents and workflow automation.",
  alternates: {
    canonical: "https://spotterdesk.ai",
  },
};

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-white">
      {/* Navbar fixed hai, isliye yahan extra space handle karne ki zarurat nahi */}
      <Navbar />

      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        {/* Hero section handles its own top padding for fixed navbar */}
        <Hero />
        
        {/* Scroll-mt-20 ensures that when you click a nav link, 
            the section doesn't hide behind the sticky navbar.
        */}
        <div id="platform" className="scroll-mt-20">
          <Services />
        </div>

        <div id="how-it-works" className="scroll-mt-20">
          <HowItWorks />
        </div>

        <div id="solutions" className="scroll-mt-20">
          <Automations />
        </div>

        <div id="pricing" className="scroll-mt-20">
          <Pricing />
        </div>
      </main>

      <Footer />
    </div>
  );
}