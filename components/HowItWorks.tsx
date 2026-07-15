"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Cpu,
  Globe,
  Play,
  Terminal,
  Code2,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Server
} from "lucide-react";

interface Step {
  id: number;
  number: string;
  title: string;
  desc: string;
  accent: string;
  glowClass: string;
}

const STEPS: Step[] = [
  {
    id: 1,
    number: "01",
    title: "Prompt & Design Visually",
    desc: "Describe your ideas in natural language or customize dimensions visually. The dual-sync core matches styles and code perfectly.",
    accent: "text-accent-blue",
    glowClass: "bg-accent-blue/10 border-accent-blue/30"
  },
  {
    id: 2,
    number: "02",
    title: "Self-Healing AST Compile",
    desc: "Our compilers analyze imports, Tailwind values, and types in an isolated AST sandbox. Errors are resolved autonomously in real-time.",
    accent: "text-gradient-violet",
    glowClass: "bg-gradient-violet/10 border-gradient-violet/30"
  },
  {
    id: 3,
    number: "03",
    title: "Instant Edge Deployment",
    desc: "One click bundles and publishes production-ready code directly to 85+ edge cloud locations worldwide with a sub-120ms cold start.",
    accent: "text-gradient-orange",
    glowClass: "bg-gradient-orange/10 border-gradient-orange/30"
  }
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(1);
  const [progress, setProgress] = useState(0);

  // Tick progress from 0 to 100 every 6 seconds (60ms * 100)
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 1;
      });
    }, 60);

    return () => clearInterval(timer);
  }, [activeStep]);

  // Transition to the next step once progress hits 100%
  useEffect(() => {
    if (progress >= 100) {
      const transitionTimer = setTimeout(() => {
        setActiveStep((current) => {
          if (current === 1) return 2;
          if (current === 2) return 3;
          return 1;
        });
        setProgress(0);
      }, 300); // 300ms pause at 100% completion before sliding to next step
      return () => clearTimeout(transitionTimer);
    }
  }, [progress]);

  const handleStepClick = (stepId: number) => {
    setActiveStep(stepId);
    setProgress(0);
  };

  return (
    <section id="workflow" className="w-full max-w-[1200px] mx-auto px-6 md:px-8 py-24 border-t border-hairline-soft relative overflow-hidden">
      {/* Background ambient decorative glows */}
      <div className="absolute top-[20%] left-[-10%] w-[300px] h-[300px] rounded-full bg-gradient-violet/5 glow-blur pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[300px] h-[300px] rounded-full bg-gradient-orange/5 glow-blur pointer-events-none"></div>

      {/* Section Header */}
      <div className="mb-16 text-center md:text-left">
        <span className="text-[13px] font-semibold uppercase tracking-[0.2em] text-accent-blue bg-accent-blue/10 px-3 py-1 rounded-full">
          Workflow
        </span>
        <h2 className="font-heading text-4xl md:text-[62px] font-medium tracking-[-0.05em] text-white mt-4 leading-[1.0] max-w-2xl uppercase">
          From Prompt to Production.
        </h2>
        <p className="max-w-xl text-ink-muted text-base md:text-[18px] leading-relaxed tracking-[-0.015em] mt-4">
          See how webIQ combines agentic intelligence and dual-sync compilers to construct complete full-stack apps.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Timeline Steps */}
        <div className="lg:col-span-5 flex flex-col gap-6 relative">
          {STEPS.map((step) => {
            const isActive = activeStep === step.id;
            return (
              <button
                key={step.id}
                onClick={() => handleStepClick(step.id)}
                className={`w-full text-left rounded-2xl p-6 border transition-all duration-300 relative overflow-hidden flex gap-5 select-none focus:outline-none ${isActive
                    ? "bg-[#141414] border-hairline shadow-2xl scale-[1.02]"
                    : "bg-transparent border-transparent hover:bg-surface-1/40 hover:border-hairline/40"
                  }`}
              >
                {/* Visual Progress Bar on Left Edge */}
                {isActive && (
                  <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#1a1a1a]">
                    <div
                      className={`h-full w-full transition-all ease-linear ${step.id === 1 ? "bg-accent-blue" : step.id === 2 ? "bg-[#6a4cf5]" : "bg-[#ff7a3d]"
                        }`}
                      style={{ height: `${progress}%` }}
                    />
                  </div>
                )}

                {/* Step Icon / Number Indicator */}
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border text-sm font-bold transition-all duration-300 font-mono ${isActive
                    ? step.id === 1
                      ? "bg-accent-blue/10 border-accent-blue/30 text-accent-blue"
                      : step.id === 2
                        ? "bg-[#6a4cf5]/10 border-[#6a4cf5]/30 text-[#6a4cf5]"
                        : "bg-[#ff7a3d]/10 border-[#ff7a3d]/30 text-[#ff7a3d]"
                    : "bg-surface-1 border-hairline text-ink-muted"
                  }`}>
                  {step.number}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className={`font-heading text-lg font-semibold tracking-tight transition-colors duration-300 ${isActive ? "text-white" : "text-zinc-400 group-hover:text-white"
                    }`}>
                    {step.title}
                  </h3>
                  <p className="text-[13.5px] leading-relaxed text-ink-muted mt-2 tracking-[-0.01em]">
                    {step.desc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Side: Interactive Mockup Showcase */}
        <div className="lg:col-span-7 bg-[#141414] border border-hairline rounded-[24px] p-5 shadow-2xl min-h-[420px] flex flex-col justify-between relative overflow-hidden">
          {/* Frame Top controls */}
          <div className="flex items-center justify-between border-b border-hairline pb-4 mb-4 select-none">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#1c1c1c] border border-hairline"></span>
              <span className="h-3 w-3 rounded-full bg-[#1c1c1c] border border-hairline"></span>
              <span className="h-3 w-3 rounded-full bg-[#1c1c1c] border border-hairline"></span>
              <span className="text-[11px] text-ink-muted font-mono ml-4">
                {activeStep === 1
                  ? "webiq.app/sandbox/visual-editor"
                  : activeStep === 2
                    ? "compiler.webiq.app/ast-sync"
                    : "console.webiq.app/deployments/logs"}
              </span>
            </div>
            <div className="flex items-center gap-1.5 bg-[#090909] border border-hairline px-2 py-0.5 rounded-full">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping"></span>
              <span className="text-[10px] text-emerald-400 font-semibold font-mono">Live</span>
            </div>
          </div>

          {/* Interactive Screen Display Container */}
          <div className="flex-1 flex items-center justify-center min-h-[300px]">
            <AnimatePresence mode="wait">
              {activeStep === 1 && <PromptPreview key="step1" />}
              {activeStep === 2 && <CompilePreview key="step2" />}
              {activeStep === 3 && <DeployPreview key="step3" />}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==========================================
   Step 1 Preview Component: Prompt & Design
   ========================================== */
function PromptPreview() {
  const [promptText, setPromptText] = useState("");
  const [isDoneTyping, setIsDoneTyping] = useState(false);
  const promptTarget = "Build a sleek pricing card for webIQ Pro subscription. Include a working discount coupon field.";

  useEffect(() => {
    let index = 0;
    setPromptText("");
    setIsDoneTyping(false);

    const timer = setInterval(() => {
      if (index < promptTarget.length) {
        setPromptText(promptTarget.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        setIsDoneTyping(true);
      }
    }, 25);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-[480px] flex flex-col gap-4 font-sans text-white p-2"
    >
      {/* Agent text input box */}
      <div className="bg-[#090909] border border-hairline rounded-xl p-3 flex flex-col gap-2 shadow-inner">
        <div className="flex items-center gap-1.5 text-[10px] text-ink-muted uppercase font-bold tracking-wider">
          <Terminal className="h-3.5 w-3.5 text-accent-blue" />
          Prompt Builder
        </div>
        <div className="text-[13px] font-medium text-zinc-300 font-sans min-h-[40px] leading-relaxed select-none">
          {promptText}
          {!isDoneTyping && <span className="cursor-blink"></span>}
        </div>
      </div>

      {/* Resulting Component Card Fade In */}
      <div className="relative">
        <AnimatePresence>
          {isDoneTyping && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.3 }}
              className="bg-[#1c1c1c] border border-hairline rounded-2xl p-5 shadow-2xl flex flex-col items-center text-center relative overflow-hidden"
            >
              {/* Subtle top ambient glow */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent-blue/40 to-transparent"></div>

              <span className="text-[11px] font-bold text-accent-blue uppercase tracking-widest bg-accent-blue/10 px-2 py-0.5 rounded-full mb-2">
                webIQ Pro
              </span>
              <h4 className="text-[20px] font-black tracking-tight text-white">$24<span className="text-[12px] text-ink-muted font-normal">/mo</span></h4>
              <p className="text-[11px] text-ink-muted mt-1 leading-normal max-w-[200px]">
                Build, collaborate and self-heal your layouts autonomously.
              </p>

              {/* Mock Promo Input */}
              <div className="flex gap-2 w-full mt-4 max-w-[280px]">
                <input
                  type="text"
                  readOnly
                  value="IQ50"
                  className="flex-1 bg-[#090909] border border-hairline text-[11px] px-3 py-1.5 rounded-lg text-emerald-400 font-bold font-mono focus:outline-none"
                />
                <button className="bg-white text-black font-bold text-[11.5px] px-3 py-1.5 rounded-lg shrink-0">
                  Applied
                </button>
              </div>
              <div className="text-[10px] text-emerald-400 font-semibold mt-2 flex items-center gap-1.5">
                <CheckCircle2 className="h-3 w-3 shrink-0" />
                50% off applied! New Price: $12/mo
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

/* ==========================================
   Step 2 Preview Component: AST Compilation
   ========================================== */
function CompilePreview() {
  const [compilingStep, setCompilingStep] = useState<"error" | "fixing" | "success">("error");

  useEffect(() => {
    // Error -> Fixing after 1.5s -> Success after 3.5s
    const timer1 = setTimeout(() => {
      setCompilingStep("fixing");
    }, 1500);

    const timer2 = setTimeout(() => {
      setCompilingStep("success");
    }, 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-[480px] bg-[#090909] border border-hairline rounded-xl p-4 font-mono text-[11.5px] leading-relaxed text-zinc-300 relative select-none"
    >
      <div className="flex items-center justify-between border-b border-hairline pb-2 mb-3 text-[10px] font-bold text-ink-muted uppercase tracking-wider">
        <span className="flex items-center gap-1.5">
          <Code2 className="h-3.5 w-3.5 text-[#6a4cf5]" />
          AST Engine v1.8
        </span>
        <span>sync_sandbox.tsx</span>
      </div>

      <div className="flex flex-col gap-1">
        <div className="text-zinc-500">
          <span className="text-zinc-700">01 │</span> import React from &apos;react&apos;;
        </div>

        {/* Row showing auto-healing imports */}
        <AnimatePresence>
          {compilingStep !== "error" && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              className="text-emerald-400 overflow-hidden font-mono"
            >
              <span className="text-zinc-700">02 │</span> <span className="bg-emerald-500/10 px-1 py-0.5 rounded text-emerald-400">+ import &#123; useState &#125; from &apos;react&apos;;</span>
            </motion.div>
          )}
        </AnimatePresence>

        <div>
          <span className="text-zinc-700">03 │</span> export default function Badge() &#123;
        </div>

        {/* Row showing error / healing / success */}
        <div className="flex flex-wrap items-center gap-x-2">
          <span className="text-zinc-700">04 │</span> &nbsp;&nbsp;const [active, setActive] = useState(false);

          {compilingStep === "error" && (
            <span className="text-red-400 font-bold bg-red-500/10 px-1.5 py-0.2 rounded text-[10px] animate-pulse">
              error: useState is undefined
            </span>
          )}
          {compilingStep === "fixing" && (
            <span className="text-amber-300 font-bold bg-amber-500/10 px-1.5 py-0.2 rounded text-[10px]">
              resolving: importing hooks...
            </span>
          )}
          {compilingStep === "success" && (
            <span className="text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.2 rounded text-[10px] flex items-center gap-1">
              <ShieldCheck className="h-3.5 w-3.5" /> Compiles clean
            </span>
          )}
        </div>

        <div>
          <span className="text-zinc-700">05 │</span> &nbsp;&nbsp;return &lt;div className=&quot;rounded-lg&quot; /&gt;
        </div>
        <div>
          <span className="text-zinc-700">06 │</span> &#125;
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-hairline/40 flex items-center justify-between text-[10px] font-bold text-ink-muted uppercase">
        <div className="flex items-center gap-2">
          <span>Status:</span>
          {compilingStep === "error" && <span className="text-red-400">Broken AST</span>}
          {compilingStep === "fixing" && <span className="text-amber-400">Self-Healing</span>}
          {compilingStep === "success" && <span className="text-emerald-400">Ready</span>}
        </div>
        <span>Webpack 0.4s</span>
      </div>
    </motion.div>
  );
}

/* ==========================================
   Step 3 Preview Component: Edge Deployment
   ========================================== */
function DeployPreview() {
  const [deployPercent, setDeployPercent] = useState(0);

  useEffect(() => {
    setDeployPercent(0);
    const interval = setInterval(() => {
      setDeployPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 70);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-[460px] flex flex-col gap-5 text-white font-sans p-2 select-none"
    >
      {/* Build progress bar */}
      <div className="bg-[#1c1c1c] border border-hairline rounded-xl p-4 flex flex-col gap-3">
        <div className="flex justify-between items-center text-[12px] font-semibold text-zinc-300">
          <span className="flex items-center gap-1.5">
            <Zap className="h-4 w-4 text-[#ff7a3d]" />
            Bundling Edge Assets
          </span>
          <span className="font-mono">{deployPercent}%</span>
        </div>

        <div className="w-full h-2.5 bg-[#090909] rounded-full overflow-hidden border border-hairline">
          <div
            className="h-full bg-gradient-to-r from-[#6a4cf5] to-[#ff7a3d] transition-all duration-100 ease-out"
            style={{ width: `${deployPercent}%` }}
          />
        </div>

        {deployPercent === 100 ? (
          <div className="text-[11.5px] text-emerald-400 font-semibold flex items-center gap-1.5 animate-fade-in">
            <CheckCircle2 className="h-3.5 w-3.5" />
            Edge build completed successfully. Hosted live globally.
          </div>
        ) : (
          <div className="text-[11.5px] text-ink-muted">
            Transpiling code assets, optimizing code splits, preparing edge caches...
          </div>
        )}
      </div>

      {/* Edge deployment metrics card */}
      <AnimatePresence>
        {deployPercent === 100 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="grid grid-cols-3 gap-3"
          >
            {[
              { label: "Edge Latency", val: "12ms", c: "text-[#ff7a3d]" },
              { label: "Active Nodes", val: "85 POPs", c: "text-white" },
              { label: "Cold Starts", val: "100ms", c: "text-emerald-400" }
            ].map((metric, i) => (
              <div key={i} className="bg-[#1c1c1c] border border-hairline rounded-lg p-3 text-center">
                <span className="text-[9px] uppercase tracking-wider text-ink-muted font-bold block">{metric.label}</span>
                <span className={`text-[16px] font-black font-mono block mt-1.5 ${metric.c}`}>{metric.val}</span>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
