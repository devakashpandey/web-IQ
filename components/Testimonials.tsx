"use client";

import React from "react";
import { MessageSquare, ShieldCheck } from "lucide-react";

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

interface Testimonial {
  id: number;
  name: string;
  handle: string;
  role: string;
  avatarBg: string;
  initials: string;
  quote: string;
  spanClass: string;
  accentGlow: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Aarav Sharma",
    handle: "@aarav_sharma",
    role: "CTO at DevSprint",
    avatarBg: "bg-[#1c1f2e] text-[#748ffc]",
    initials: "AS",
    quote: "webIQ has completely transformed our prototyping workflow. We went from a Figma mock to a live Next.js sandbox in under 5 minutes. The self-healing compiler resolves imports like magic before we even notice.",
    spanClass: "md:col-span-2",
    accentGlow: "group-hover:border-accent-blue/40 group-hover:shadow-[0_0_30px_rgba(0,153,255,0.15)]"
  },
  {
    id: 2,
    name: "Rohan Mehta",
    handle: "@rohan_codes",
    role: "Lead Architect",
    avatarBg: "bg-[#172522] text-[#63e6be]",
    initials: "RM",
    quote: "The dual-sync engine is highly robust. I can edit TypeScript logic directly in the code editor, and the visual canvas syncs instantly without breaking layouts.",
    spanClass: "md:col-span-1",
    accentGlow: "group-hover:border-gradient-violet/40 group-hover:shadow-[0_0_30px_rgba(106,76,245,0.15)]"
  },
  {
    id: 3,
    name: "Kabir Malhotra",
    handle: "@kabir_builds",
    role: "Indie Creator",
    avatarBg: "bg-[#2b1d16] text-[#ffd8a8]",
    initials: "KM",
    quote: "I've tried almost every code-generator out there. webIQ is the first tool that outputs clean, componentized React code that I would actually commit to our production main branch.",
    spanClass: "md:col-span-1",
    accentGlow: "group-hover:border-gradient-orange/40 group-hover:shadow-[0_0_30px_rgba(255,122,61,0.15)]"
  },
  {
    id: 4,
    name: "Ananya Iyer",
    handle: "@ananya_design",
    role: "UI/UX Engineer",
    avatarBg: "bg-[#142534] text-[#74c0fc]",
    initials: "AI",
    quote: "As a designer who codes, webIQ is the perfect bridge. I can tweak paddings, gaps, and grids visually, and see clean Tailwind CSS utility classes updated in the files. The AST self-healing fixes missing imports instantly.",
    spanClass: "md:col-span-2",
    accentGlow: "group-hover:border-accent-blue/40 group-hover:shadow-[0_0_30px_rgba(0,153,255,0.15)]"
  },
  {
    id: 5,
    name: "Devendra Mishra",
    handle: "@devendra_mishra",
    role: "Agency Founder",
    avatarBg: "bg-[#2a1720] text-[#ffdeeb]",
    initials: "DM",
    quote: "Deploying to 85 edge server POPs in under 2 seconds is unbelievable. We demoed a full app setup to a client and deployed it on their domain during the Zoom call.",
    spanClass: "md:col-span-2",
    accentGlow: "group-hover:border-gradient-coral/40 group-hover:shadow-[0_0_30px_rgba(255,85,119,0.15)]"
  },
  {
    id: 6,
    name: "Priya Patel",
    handle: "@priya_codes",
    role: "SaaS Developer",
    avatarBg: "bg-[#1f1730] text-[#d0bfff]",
    initials: "PP",
    quote: "Setting up complex dashboard grids and data visualization layouts used to take days. With webIQ, it's a few English prompts and a couple of visual tweaks. Highly recommended.",
    spanClass: "md:col-span-1",
    accentGlow: "group-hover:border-gradient-violet/40 group-hover:shadow-[0_0_30px_rgba(106,76,245,0.15)]"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full max-w-[1200px] mx-auto px-6 md:px-8 py-24 border-t border-hairline-soft relative">
      {/* Glow highlight */}
      <div className="absolute top-[30%] right-[10%] w-[350px] h-[350px] rounded-full bg-gradient-magenta/5 glow-blur pointer-events-none"></div>

      {/* Section Header */}
      <div className="text-center mb-16">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-blue/30 bg-accent-blue/10 px-3.5 py-1 font-sans text-[11.5px] font-extrabold uppercase tracking-wider text-accent-blue shadow-[0_0_15px_rgba(0,153,255,0.08)]">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse"></span>
          Community
        </span>
        <h2 className="font-heading text-4xl md:text-5xl font-medium tracking-[-0.04em] text-white mt-4 mb-4 uppercase">
          Loved by builders.
        </h2>
        <p className="max-w-xl mx-auto text-ink-muted text-base leading-relaxed tracking-[-0.015em]">
          Read how developers, designers, and fast-moving teams leverage webIQ to construct production web apps.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t) => (
          <div
            key={t.id}
            className={`group bg-surface-1/40 backdrop-blur-md border border-hairline rounded-[24px] p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:bg-[#141414]/90 hover:scale-[1.01] ${t.spanClass} ${t.accentGlow}`}
          >
            {/* Quote Icon & Quote Text */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between text-ink-muted">
                <MessageSquare className="h-5 w-5 text-accent-blue/60 group-hover:text-accent-blue transition-colors" />
              </div>
              <p className="text-[14.5px] md:text-[15.5px] leading-relaxed text-zinc-300 font-medium tracking-[-0.012em]">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>

            {/* Author Profile */}
            <div className="flex items-center gap-4 mt-8 pt-4 border-t border-hairline/30">
              <div className={`h-11 w-11 rounded-full ${t.avatarBg} flex items-center justify-center text-[13px] font-bold select-none border border-white/5`}>
                {t.initials}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1">
                  <h4 className="font-sans text-[14px] font-bold text-white leading-tight truncate">
                    {t.name}
                  </h4>
                  <ShieldCheck className="h-4 w-4 text-accent-blue shrink-0" />
                </div>
                <p className="font-sans text-[12px] text-ink-muted leading-tight mt-0.5 truncate">
                  {t.role} &bull; {t.handle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
