import Navbar from "@/components/Navbar";
import InteractiveBuilder from "@/components/InteractiveBuilder";
import AtmosphereCards from "@/components/AtmosphereCards";
import PricingSection from "@/components/PricingSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import { Sparkles, Terminal, Code2, Cpu, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-canvas text-ink overflow-x-hidden selection:bg-accent-blue/30 selection:text-white flex flex-col justify-between">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Hero Section */}
      <header className="relative w-full pt-20 pb-16 md:pt-32 md:pb-24 px-6 md:px-8 grid-bg border-b border-hairline overflow-hidden flex flex-col items-center">
        {/* Background Atmosphere Spotlight (Glowing Violet Aura) */}
        <div className="absolute top-[-20%] left-[50%] -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-gradient-violet/10 glow-blur pointer-events-none"></div>
        <div className="absolute bottom-0 left-[-10%] w-[350px] h-[350px] rounded-full bg-gradient-magenta/5 glow-blur pointer-events-none"></div>

        {/* Hero Content Wrapper */}
        <div className="relative z-10 w-full max-w-[1200px] flex flex-col items-center">
          
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-accent-blue/30 bg-accent-blue/10 px-4 py-1.5 font-sans text-[12.5px] font-semibold text-accent-blue mb-8 shadow-lg hover:bg-accent-blue/15 transition-all select-none">
            <Sparkles className="h-3.5 w-3.5 text-accent-blue animate-pulse" />
            Introducing webIQ Sandbox v1.0
          </div>

          {/* Aggressive poster-like display headline */}
          <h1 className="font-heading text-4xl sm:text-6xl md:text-[85px] lg:text-[105px] font-medium tracking-[-0.05em] leading-[0.95] md:leading-[0.85] text-white text-center max-w-5xl uppercase">
            A visual canvas <br className="hidden md:inline" />
            <span className="text-ink-muted">that actually</span> codes.
          </h1>

          {/* Detailed, premium description */}
          <p className="max-w-2xl mx-auto text-ink-muted text-base md:text-[18px] leading-relaxed tracking-[-0.012em] mt-6 md:mt-8 mb-10 text-center">
            Create, iterate, and deploy full-stack React applications in a collaborative, agent-orchestrated canvas. Your visual designs convert to production-ready Next.js and Tailwind code instantly.
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a
              href="#demo"
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 font-sans text-[14px] font-bold text-black shadow-lg transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              Open Sandbox
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#features"
              className="w-full sm:w-auto flex items-center justify-center rounded-full bg-surface-1 border border-hairline hover:bg-surface-2 text-white px-8 py-3.5 font-sans text-[14px] font-bold transition-all active:scale-[0.98]"
            >
              Explore Features
            </a>
          </div>

          {/* Miniature visual UI mock floating above sandbox */}
          <div className="w-full max-w-[900px] mt-16 border border-hairline rounded-2xl bg-surface-1 p-3.5 shadow-2xl relative select-none md:mt-24">
            <div className="flex items-center gap-2 border-b border-hairline/60 pb-3 mb-3 px-1.5">
              <span className="h-3 w-3 rounded-full bg-[#1c1c1c] border border-hairline"></span>
              <span className="h-3 w-3 rounded-full bg-[#1c1c1c] border border-hairline"></span>
              <span className="h-3 w-3 rounded-full bg-[#1c1c1c] border border-hairline"></span>
              <span className="text-[11px] text-ink-muted font-mono ml-4">webiq.app/project/dashboard-core</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-[#090909] border border-hairline rounded-lg p-4 flex flex-col gap-2">
                <span className="text-[10px] uppercase font-bold text-ink-muted flex items-center gap-1.5"><Terminal className="h-3 w-3 text-accent-blue" /> prompt agent</span>
                <p className="text-[12px] text-zinc-300">"Create a dark dashboard analytics grid with server stats, active users chart, and a live sync latency indicator."</p>
              </div>
              <div className="bg-[#090909] border border-hairline rounded-lg p-4 flex flex-col justify-between">
                <span className="text-[10px] uppercase font-bold text-ink-muted flex items-center gap-1.5"><Cpu className="h-3 w-3 text-accent-blue" /> compiling ast</span>
                <div className="flex items-center gap-2 text-[12px] text-emerald-400 font-semibold mt-2">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping"></span>
                  Success (0 lint issues)
                </div>
              </div>
              <div className="bg-[#090909] border border-hairline rounded-lg p-4 flex flex-col justify-between">
                <span className="text-[10px] uppercase font-bold text-ink-muted flex items-center gap-1.5"><Code2 className="h-3 w-3 text-accent-blue" /> live synced code</span>
                <span className="text-[11px] font-mono text-zinc-500 mt-2 block overflow-hidden truncate">import &#123; Card &#125; from '@/components/ui';</span>
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* Main Sections */}
      <main className="flex-1 w-full bg-canvas">
        {/* Section 1: Playable AI Terminal sandbox builder */}
        <InteractiveBuilder />

        {/* Section 2: Atmosphere grids and highlights */}
        <AtmosphereCards />

        {/* Section 3: Pricing Cards & Comparison Table */}
        <PricingSection />

        {/* Section 4: Accordion FAQ support */}
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
