import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import Automations from "@/components/Automations";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-white">
      {/* Navbar fixed hai, isliye yahan extra space handle karne ki zarurat nahi */}
      <Navbar />

      <main className="flex-1">
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