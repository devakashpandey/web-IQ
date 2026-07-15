"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import InteractiveBuilder from "@/components/InteractiveBuilder";
import HowItWorks from "@/components/HowItWorks";
import AtmosphereCards from "@/components/AtmosphereCards";
import Integrations from "@/components/Integrations";
import Testimonials from "@/components/Testimonials";
import PricingSection from "@/components/PricingSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import { Sparkles, Terminal, Code2, Cpu, ArrowRight } from "lucide-react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-canvas text-ink overflow-x-hidden selection:bg-accent-blue/30 selection:text-white flex flex-col justify-between">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Hero Section */}
      <header className="relative w-full pt-20 pb-16 md:pt-32 md:pb-24 px-6 md:px-8 grid-bg border-b border-hairline overflow-hidden flex flex-col items-center">
        {/* Layered glowing atmospheres */}
        <div className="absolute top-[-30%] left-[50%] -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-gradient-to-r from-accent-blue/10 to-gradient-violet/10 glow-blur pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[450px] h-[450px] rounded-full bg-gradient-to-br from-gradient-magenta/5 to-gradient-coral/5 glow-blur pointer-events-none"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-accent-blue/5 to-transparent glow-blur pointer-events-none"></div>

        {/* Floating 3D Developer & Coding Elements with Parallax Effect */}
        {/* Top Right Floating Code Block - Canvas UI Component themed */}
        <div 
          style={{ transform: `translateY(${scrollY * 0.3}px)` }} 
          className="hidden lg:block absolute top-[18%] right-[3%] lg:right-[5%] z-20 transition-transform duration-75 ease-out"
        >
          <div className="w-[240px] bg-[#141414]/60 backdrop-blur-xl border border-white/10 rounded-xl p-4 shadow-[0_25px_60px_rgba(0,0,0,0.7)] animate-float-1 select-none pointer-events-none transform [transform-style:preserve-3d] [perspective:1000px]">
            <div className="flex items-center gap-1.5 border-b border-white/10 pb-2 mb-2">
              <div className="w-1.5 h-1.5 rounded-full bg-accent-blue"></div>
              <span className="text-[10px] font-mono text-zinc-400">ButtonComponent.tsx</span>
            </div>
            <div className="font-mono text-[10.5px] leading-relaxed text-zinc-300 flex flex-col gap-0.5">
              <div><span className="text-sky-400 font-mono">import</span> &#123; Button &#125; <span className="text-sky-400 font-mono">from</span> <span className="text-emerald-400 font-mono">"@/ui"</span>;</div>
              <div className="mt-1"><span className="text-zinc-500 font-mono">// Visual Canvas Node</span></div>
              <div>&lt;<span className="text-accent-blue font-mono">Button</span> <span className="text-amber-400 font-mono">variant</span>=<span className="text-emerald-400 font-mono">"premium"</span>&gt;</div>
              <div>&nbsp;&nbsp;Generate Web App</div>
              <div>&lt;/<span className="text-accent-blue font-mono">Button</span>&gt;</div>
            </div>
          </div>
        </div>

        {/* Top Left Floating Code Block - Theme Config themed */}
        <div 
          style={{ transform: `translateY(${scrollY * -0.22}px)` }} 
          className="hidden lg:block absolute top-[52%] left-[3%] lg:left-[5%] z-20 transition-transform duration-75 ease-out"
        >
          <div className="w-[240px] bg-[#141414]/60 backdrop-blur-xl border border-white/10 rounded-xl p-4 shadow-[0_25px_60px_rgba(0,0,0,0.7)] animate-float-2 select-none pointer-events-none transform [transform-style:preserve-3d] [perspective:1000px]">
            <div className="flex items-center gap-1.5 border-b border-white/10 pb-2 mb-2">
              <div className="w-1.5 h-1.5 rounded-full bg-accent-blue"></div>
              <span className="text-[10px] font-mono text-zinc-400">ThemeConfig.ts</span>
            </div>
            <div className="font-mono text-[10.5px] leading-relaxed text-zinc-300 flex flex-col gap-0.5">
              <div><span className="text-sky-400 font-mono">export const</span> config = &#123;</div>
              <div>&nbsp;&nbsp;theme: <span className="text-emerald-400 font-mono">"cyber-dark"</span>,</div>
              <div>&nbsp;&nbsp;grid: <span className="text-sky-400 font-mono">true</span>,</div>
              <div>&nbsp;&nbsp;padding: <span className="text-emerald-400 font-mono">"24px"</span></div>
              <div>&#125;;</div>
            </div>
          </div>
        </div>

        {/* Hero Content Wrapper */}
        <div className="relative z-10 w-full max-w-[1200px] flex flex-col items-center">

          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md px-4.5 py-1.5 font-sans text-[12px] font-semibold text-accent-blue mb-8 shadow-2xl hover:bg-white/[0.06] hover:border-white/20 transition-all select-none cursor-pointer">
            <Sparkles className="h-3.5 w-3.5 text-accent-blue animate-pulse" />
            <span className="text-zinc-200">Introducing</span>
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-600"></span>
            webIQ Sandbox v1.0
          </div>

          {/* Aggressive poster-like display headline */}
          <h1 className="font-heading text-4xl sm:text-6xl md:text-[85px] lg:text-[105px] font-medium tracking-[-0.05em] leading-[0.95] md:leading-[0.85] text-white text-center max-w-5xl uppercase select-none">
            A visual canvas <br className="hidden md:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-blue via-violet-400 to-[#d44df0] drop-shadow-[0_2px_20px_rgba(106,76,245,0.15)]">that actually</span> codes.
          </h1>

          {/* Detailed, premium description */}
          <p className="max-w-2xl mx-auto text-ink-muted text-base md:text-[18px] leading-relaxed tracking-[-0.012em] mt-6 md:mt-8 mb-10 text-center">
            Create, iterate, and deploy full-stack React applications in a collaborative, agent-orchestrated canvas. Your visual designs convert to production-ready Next.js and Tailwind code instantly.
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a
              href="#demo"
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 font-sans text-[14px] font-bold text-black shadow-[0_4px_20px_rgba(255,255,255,0.15)] transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              Open Sandbox
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#features"
              className="w-full sm:w-auto flex items-center justify-center rounded-full bg-[#141414]/40 backdrop-blur-md border border-white/10 hover:border-white/20 text-white px-8 py-3.5 font-sans text-[14px] font-bold transition-all hover:bg-white/[0.04] active:scale-[0.98]"
            >
              Explore Features
            </a>
          </div>

          {/* Miniature visual UI mock floating above sandbox */}
          <div className="w-full max-w-[900px] mt-16 border border-zinc-700 bg-[#1c1c1c]/90 backdrop-blur-md rounded-2xl p-4 shadow-[0_25px_60px_rgba(0,0,0,0.8)] relative select-none md:mt-24">
            <div className="flex items-center gap-2 border-b border-zinc-800 pb-3 mb-3 px-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56] border border-red-500/20"></span>
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e] border border-amber-500/20"></span>
              <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f] border border-emerald-500/20"></span>
              <span className="text-[11px] text-zinc-300 font-mono ml-4">webiq.app/project/dashboard-core</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-[#101010] border border-zinc-700/80 hover:border-zinc-600 rounded-xl p-4 flex flex-col gap-2 transition-all">
                <span className="text-[10px] uppercase font-bold text-zinc-300 flex items-center gap-1.5 select-none">
                  <Terminal className="h-3.5 w-3.5 text-accent-blue animate-terminal-pulse shrink-0" />
                  prompt agent
                </span>
                <p className="text-[12.5px] text-white leading-relaxed font-sans font-medium">"Create a dark dashboard analytics grid with server stats, active users chart, and a live sync latency indicator."</p>
              </div>
              <div className="bg-[#101010] border border-zinc-700/80 hover:border-zinc-600 rounded-xl p-4 flex flex-col justify-between transition-all min-h-[110px]">
                <span className="text-[10px] uppercase font-bold text-zinc-300 flex items-center gap-1.5 select-none">
                  <Cpu className="h-3.5 w-3.5 text-accent-blue animate-slow-spin shrink-0" />
                  compiling ast
                </span>
                <div className="flex items-center gap-2 text-[13px] text-emerald-300 font-bold mt-4">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping"></span>
                  Success (0 lint issues)
                </div>
              </div>
              <div className="bg-[#101010] border border-zinc-700/80 hover:border-zinc-600 rounded-xl p-4 flex flex-col justify-between transition-all min-h-[110px]">
                <span className="text-[10px] uppercase font-bold text-zinc-300 flex items-center gap-1.5 select-none">
                  <Code2 className="h-3.5 w-3.5 text-accent-blue animate-bounce-x shrink-0" />
                  live synced code
                </span>
                <div className="text-[12px] font-mono text-white mt-4 block overflow-hidden truncate">
                  <span className="text-sky-400 font-bold font-mono">import</span> &#123; Card &#125; <span className="text-sky-400 font-bold font-mono">from</span> <span className="text-emerald-400 font-semibold font-mono">'@/components/ui'</span>;
                </div>
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* Main Sections */}
      <main className="flex-1 w-full bg-canvas">
        {/* Section 1: Playable AI Terminal sandbox builder */}
        <InteractiveBuilder />

        {/* Section 2: How It Works interactive timeline */}
        <HowItWorks />

        {/* Section 3: Atmosphere grids and highlights */}
        <AtmosphereCards />

        {/* Section 4: Ecosystem & Integrations */}
        <Integrations />

        {/* Section 5: Bento Wall of Love Testimonials */}
        <Testimonials />

        {/* Section 6: Pricing Cards & Comparison Table */}
        <PricingSection />

        {/* Section 7: Accordion FAQ support */}
        <FaqSection />

        {/* Section 5: Dynamic CTA bottom banner */}
        <section className="w-full max-w-[1200px] mx-auto px-6 md:px-8 py-20 text-center relative overflow-hidden border-t border-hairline-soft">
          {/* Back glows */}
          <div className="absolute bottom-0 right-0 w-[400px] h-[300px] rounded-full bg-gradient-orange/5 glow-blur pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <h2 className="font-heading text-4xl md:text-[62px] font-medium tracking-[-0.04em] text-white leading-tight uppercase">
              Start Building <br /> With webIQ Today
            </h2>
            <p className="max-w-md mx-auto text-ink-muted text-sm md:text-base leading-relaxed tracking-[-0.015em] mt-4 mb-8">
              Experience the power of design-to-code dual sync. Spin up your first autonomous sandbox in seconds.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <a
                href="#demo"
                className="w-full sm:w-auto rounded-full bg-white px-8 py-3.5 font-sans text-sm font-bold text-black shadow-lg transition-transform hover:scale-[1.03]"
              >
                Get Started Free
              </a>
              <a
                href="#"
                className="w-full sm:w-auto rounded-full bg-surface-1 border border-hairline hover:bg-surface-2 text-white px-8 py-3.5 font-sans text-sm font-bold transition-all"
              >
                Talk to Sales
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Integrated Layout Footer */}
      <Footer />
    </div>
  );
}
