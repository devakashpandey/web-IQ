"use client";

import React, { useState, useEffect } from "react";
import { 
  Sparkles, 
  Cpu, 
  Globe, 
  RefreshCw, 
  GitBranch, 
  Code,
  ShieldCheck,
  Zap,
  Gauge
} from "lucide-react";

export default function AtmosphereCards() {
  const [fixState, setFixState] = useState<"error" | "fixing" | "fixed">("error");

  // Simulated compiler fix state loop
  useEffect(() => {
    const timer = setInterval(() => {
      setFixState((prev) => {
        if (prev === "error") return "fixing";
        if (prev === "fixing") return "fixed";
        return "error";
      });
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div id="features" className="w-full max-w-[1200px] mx-auto px-6 md:px-8 py-20">
      {/* Section Header */}
      <div className="mb-16">
        <span className="text-[13px] font-semibold uppercase tracking-[0.2em] text-accent-blue">
          Architecture
        </span>
        <h2 className="font-heading text-4xl md:text-[62px] font-medium tracking-[-0.05em] text-white mt-4 leading-[1.0] max-w-2xl">
          Engineered for visual autonomy.
        </h2>
        <p className="max-w-xl text-ink-muted text-[18px] leading-relaxed tracking-[-0.015em] mt-6">
          A design-to-production pipeline powered by independent compiler agents that resolve code dependencies and bundle layouts instantly.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* VIOLET SPOTLIGHT: Self-Healing Codebase (Spans 2 cols on desktop) */}
        <div className="md:col-span-2 relative overflow-hidden rounded-[30px] p-8 md:p-10 bg-gradient-to-br from-gradient-violet via-gradient-violet/90 to-indigo-950 text-white border border-white/10 group flex flex-col justify-between min-h-[380px]">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/3 w-80 h-80 rounded-full bg-white/10 blur-[80px] pointer-events-none"></div>

          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 border border-white/20 mb-6">
              <Cpu className="h-5 w-5 text-white" />
            </div>
            <h3 className="font-heading text-[28px] md:text-[32px] font-medium tracking-[-0.03em] leading-tight max-w-md">
              Self-healing compilers repair lint and type mismatches instantly.
            </h3>
            <p className="text-white/85 text-[15px] font-normal leading-relaxed mt-3 max-w-lg tracking-[-0.01em]">
              The webIQ frontend agent runs code compilation in an isolated AST sandbox. If imports break or lints fail, compiler agents resolve typings autonomously before compilation exits.
            </p>
          </div>

          {/* Interactive self-healing simulation code console */}
          <div className="mt-8 bg-black/55 backdrop-blur-md border border-white/10 rounded-xl p-4 font-mono text-[11px] leading-normal w-full overflow-hidden text-zinc-300">
            <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3 font-mono">
              <span className="flex items-center gap-1.5 text-[9px] uppercase font-bold text-white/60">
                <Code className="h-3.5 w-3.5" />
                AST Sandbox Compiler
              </span>
              <span className="text-[10px] font-bold text-white/50">Terminal</span>
            </div>

            <div className="flex flex-col gap-1.5 font-mono">
              <div className="font-mono text-white/65">
                <span className="text-white/40 font-mono">1 │</span> export default function Component() &#123;
              </div>
              <div className="font-mono">
                <span className="text-white/40 font-mono">2 │</span> &nbsp;&nbsp;return &lt;div className=&quot;flex&quot;&gt;
              </div>
              <div className="font-mono flex items-center flex-wrap gap-x-2">
                <span className="text-white/40 font-mono">3 │</span> &nbsp;&nbsp;&nbsp;&nbsp;&lt;Button variant=&#123;activeVariant&#125; /&gt;
                {fixState === "error" && (
                  <span className="text-red-400 font-semibold bg-red-500/10 px-1.5 py-0.5 rounded text-[10px] animate-pulse">
                    error: activeVariant is undefined
                  </span>
                )}
                {fixState === "fixing" && (
                  <span className="text-amber-300 font-semibold bg-amber-500/10 px-1.5 py-0.5 rounded text-[10px]">
                    fixing: importing State Hook...
                  </span>
                )}
                {fixState === "fixed" && (
                  <span className="text-emerald-400 font-semibold bg-emerald-500/10 px-1.5 py-0.5 rounded text-[10px] flex items-center gap-1">
                    <ShieldCheck className="h-3 w-3" /> Auto-healed
                  </span>
                )}
              </div>
              <div className="font-mono text-white/65">
                <span className="text-white/40 font-mono">4 │</span> &nbsp;&nbsp;&lt;/div&gt;
              </div>
              
              <div className="mt-2 border-t border-white/5 pt-2 flex items-center justify-between text-[10px] font-bold text-white/45">
                <span>Status: {fixState.toUpperCase()}</span>
                <span>Lint Checker v1.4</span>
              </div>
            </div>
          </div>
        </div>

        {/* CHARCOAL CARD: Visual Studio Code-Sync (1 col) */}
        <div className="rounded-[20px] p-6 bg-surface-1 border border-hairline flex flex-col justify-between min-h-[380px] transition-all hover:border-hairline-soft/80 group">
          <div>
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-surface-2 border border-hairline mb-6 group-hover:scale-105 transition-transform">
              <RefreshCw className="h-4.5 w-4.5 text-accent-blue" />
            </div>
            <h3 className="font-heading text-[22px] font-medium tracking-[-0.03em] leading-tight text-white">
              Dual-Sync Core
            </h3>
            <p className="text-ink-muted text-[14px] leading-relaxed mt-2 tracking-[-0.01em]">
              Drag layout dimensions on the canvas, and watch CSS update in React. Make edits in the code editor, and the visual workspace reflects changes instantly.
            </p>
          </div>

          <div className="mt-6 bg-[#090909] border border-hairline rounded-xl p-4 flex flex-col gap-3 relative overflow-hidden select-none">
            <div className="flex items-center justify-between text-[10px] text-ink-muted border-b border-hairline/60 pb-1.5">
              <span>Canvas Sync</span>
              <span className="text-accent-blue font-mono font-bold">1ms lag</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[11px] font-mono text-zinc-400">Canvas width changed: <span className="text-accent-blue">480px</span></span>
              <span className="text-[11px] font-mono text-emerald-400">+ Injected `sm:w-md` breakpoint</span>
            </div>
          </div>
        </div>

        {/* CHARCOAL CARD: Zero-Config Bundler (1 col) */}
        <div className="rounded-[20px] p-6 bg-surface-1 border border-hairline flex flex-col justify-between min-h-[380px] transition-all hover:border-hairline-soft/80 group">
          <div>
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-surface-2 border border-hairline mb-6 group-hover:scale-105 transition-transform">
              <GitBranch className="h-4.5 w-4.5 text-accent-blue" />
            </div>
            <h3 className="font-heading text-[22px] font-medium tracking-[-0.03em] leading-tight text-white">
              Smart Version Control
            </h3>
            <p className="text-ink-muted text-[14px] leading-relaxed mt-2 tracking-[-0.01em]">
              Every prompt creates a secure, isolated git branch sandbox automatically. Merge visual code adjustments with peace of mind.
            </p>
          </div>

          <div className="mt-6 bg-[#090909] border border-hairline rounded-xl p-3 flex flex-col gap-2 font-mono text-[11px]">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent-blue"></div>
              <span className="text-white font-mono">webiq-branch-324</span>
            </div>
            <div className="flex flex-col border-l border-accent-blue/30 ml-1 pl-3 gap-1">
              <span className="text-zinc-500 font-mono">commit: visual button placement</span>
              <span className="text-emerald-400 font-mono">success: auto-built in 0.4s</span>
            </div>
          </div>
        </div>

        {/* ORANGE SPOTLIGHT: Edge Cloud Deployment (Spans 2 cols on desktop) */}
        <div className="md:col-span-2 relative overflow-hidden rounded-[30px] p-8 md:p-10 bg-gradient-to-br from-gradient-orange via-gradient-orange/95 to-amber-950 text-white border border-white/10 group flex flex-col justify-between min-h-[380px]">
          {/* Ambient Glow */}
          <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 w-80 h-80 rounded-full bg-white/10 blur-[80px] pointer-events-none"></div>

          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 border border-white/20 mb-6">
              <Globe className="h-5 w-5 text-white" />
            </div>
            <h3 className="font-heading text-[28px] md:text-[32px] font-medium tracking-[-0.03em] leading-tight max-w-md">
              Deploy to edge locations with zero devops setup.
            </h3>
            <p className="text-white/85 text-[15px] font-normal leading-relaxed mt-3 max-w-lg tracking-[-0.01em]">
              webIQ includes built-in global CDN routing and edge server rendering. When you hit publish, our cloud network spins up serverless assets across 85 global pops under 120ms.
            </p>
          </div>

          <div className="mt-8 bg-black/55 backdrop-blur-md border border-white/10 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-zinc-300">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 border border-white/10 shrink-0">
                <Zap className="h-4.5 w-4.5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-[13px] font-bold text-white leading-tight">Global CDN Edge Network</span>
                <span className="text-[11px] text-white/60">Live CDN Nodes Active</span>
              </div>
            </div>
            
            <div className="flex gap-4 self-stretch sm:self-auto justify-around border-t sm:border-t-0 sm:border-l border-white/10 pt-3 sm:pt-0 sm:pl-6">
              <div className="flex flex-col text-center sm:text-left">
                <span className="text-lg font-bold text-white leading-none">12ms</span>
                <span className="text-[10px] text-white/50 mt-1 uppercase font-bold tracking-wider">Avg Latency</span>
              </div>
              <div className="flex flex-col text-center sm:text-left">
                <span className="text-lg font-bold text-white leading-none">99.99%</span>
                <span className="text-[10px] text-white/50 mt-1 uppercase font-bold tracking-wider">Uptime</span>
              </div>
              <div className="flex flex-col text-center sm:text-left">
                <span className="text-lg font-bold text-white leading-none">85+</span>
                <span className="text-[10px] text-white/50 mt-1 uppercase font-bold tracking-wider">Edge Pops</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
