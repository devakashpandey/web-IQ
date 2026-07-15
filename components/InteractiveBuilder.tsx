"use client";

import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Terminal, 
  Code2, 
  Play, 
  Sparkles, 
  CheckCircle2, 
  Cpu, 
  ArrowRight,
  ThumbsUp,
  Plus,
  TrendingUp,
  CreditCard,
  Percent,
  Check
} from "lucide-react";

interface PromptOption {
  id: number;
  label: string;
  desc: string;
  promptText: string;
  fileName: string;
  codeSnippet: string;
  previewUrl: string;
}

const PROMPTS: PromptOption[] = [
  {
    id: 0,
    label: "Feedback Board",
    desc: "Create a dark feedback board with tags and votes",
    promptText: "Build a responsive feedback board with thumbs-up vote counts, custom tags (Feature, Bug), and a new feedback input field.",
    fileName: "components/FeedbackBoard.tsx",
    previewUrl: "webiq.app/sandbox/feedback-board",
    codeSnippet: `import React, { useState } from 'react';
import { ThumbsUp, Plus } from 'lucide-react';

interface FeedbackItem {
  id: number;
  title: string;
  votes: number;
  tag: 'Feature' | 'Bug';
}

export default function FeedbackBoard() {
  const [items, setItems] = useState<FeedbackItem[]>([
    { id: 1, title: 'Add dark mode settings API', votes: 24, tag: 'Feature' },
    { id: 2, title: 'Fix CSS lint overflow bug on mobile', votes: 8, tag: 'Bug' },
    { id: 3, title: 'Support drag-and-drop file upload', votes: 15, tag: 'Feature' }
  ]);
  const [newTitle, setNewTitle] = useState('');
  const [activeTag, setActiveTag] = useState<'Feature' | 'Bug'>('Feature');

  const handleVote = (id: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, votes: item.votes + 1 } : item
    ).sort((a, b) => b.votes - a.votes));
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    setItems([...items, {
      id: Date.now(),
      title: newTitle,
      votes: 0,
      tag: activeTag
    }]);
    setNewTitle('');
  };

  return (
    <div className="w-full max-w-sm rounded-xl border border-[#262626] bg-[#141414] p-5 shadow-2xl">
      <h3 className="text-[15px] font-bold text-white mb-3 tracking-tight">Community Feedback</h3>
      
      <form onSubmit={handleAdd} className="flex gap-2 mb-4">
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="I want webIQ to..."
          className="flex-1 bg-[#090909] text-white border border-[#262626] rounded-lg px-3 py-1.5 text-xs focus:outline-none"
        />
        <button type="submit" className="bg-white text-black font-semibold rounded-lg px-3 py-1.5 text-xs hover:bg-zinc-200">
          <Plus className="h-4 w-4" />
        </button>
      </form>

      <div className="flex flex-col gap-2 max-h-[160px] overflow-y-auto">
        {items.map(item => (
          <div key={item.id} className="flex items-center justify-between bg-[#1c1c1c] border border-[#262626] rounded-lg p-3">
            <span className="text-[13px] font-medium text-white">{item.title}</span>
            <button onClick={() => handleVote(item.id)} className="flex items-center gap-1.5 bg-[#090909] border border-[#262626] rounded px-2.5 py-1 text-xs">
              <ThumbsUp className="h-3 w-3" /> {item.votes}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}`
  },
  {
    id: 1,
    label: "SaaS Dashboard",
    desc: "Create a SaaS billing dashboard with user metric charts",
    promptText: "Generate a dashboard summary displaying ARR, MRR, Active Users, and a mini vertical chart comparing monthly revenue.",
    fileName: "components/BillingDashboard.tsx",
    previewUrl: "webiq.app/sandbox/saas-dashboard",
    codeSnippet: `import React, { useState } from 'react';
import { DollarSign, Users, TrendingUp } from 'lucide-react';

export default function Dashboard() {
  const stats = [
    { label: 'ARR Growth', value: '$1.2M', change: '+24%', icon: DollarSign },
    { label: 'Active Users', value: '14,820', change: '+12%', icon: Users }
  ];

  const chartData = [
    { month: 'Apr', rev: 45, height: 'h-[45%]' },
    { month: 'May', rev: 62, height: 'h-[62%]' },
    { month: 'Jun', rev: 89, height: 'h-[89%]' },
    { month: 'Jul', rev: 110, height: 'h-[100%]' }
  ];

  return (
    <div className="w-full max-w-sm rounded-xl border border-[#262626] bg-[#141414] p-5 shadow-2xl">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[15px] font-bold text-white">Billing Analytics</h3>
        <span className="text-[11px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/10 px-2 py-0.5 rounded-full font-medium">Live Metrics</span>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-5">
        {stats.map((stat, i) => (
          <div key={i} className="bg-[#1c1c1c] border border-[#262626] rounded-lg p-3">
            <span className="text-[11px] text-[#999999]">{stat.label}</span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-lg font-bold text-white">{stat.value}</span>
              <span className="text-[11px] text-emerald-400 font-semibold">{stat.change}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-end justify-between h-[80px] bg-[#090909] border border-[#262626] rounded-lg p-4">
        {chartData.map((d, i) => (
          <div key={i} className="flex flex-col items-center flex-1 h-full justify-end relative">
            <div className={\`w-6 bg-[#0099ff] rounded-t \${d.height}\`}></div>
            <span className="text-[10px] text-[#999999] mt-1">{d.month}</span>
          </div>
        ))}
      </div>
    </div>
  );
}`
  },
  {
    id: 2,
    label: "Checkout Card",
    desc: "Sleek pricing card with promo discount logic",
    promptText: "Build a card for webIQ Pro subscription. Include a working coupon code field (coupon 'IQ50' applies 50% discount) and recalculates the total.",
    fileName: "components/CheckoutCard.tsx",
    previewUrl: "webiq.app/sandbox/checkout-card",
    codeSnippet: `import React, { useState } from 'react';
import { CreditCard, Check, Percent } from 'lucide-react';

export default function CheckoutCard() {
  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);
  const [applied, setApplied] = useState(false);
  const basePrice = 29;

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (coupon.toUpperCase() === 'IQ50') {
      setDiscount(14.5);
      setApplied(true);
    }
  };

  return (
    <div className="w-full max-w-sm rounded-xl border border-[#262626] bg-[#141414] p-5 shadow-2xl text-center">
      <h3 className="text-lg font-bold text-white tracking-tight">webIQ Pro</h3>
      <p className="text-[13px] text-[#999999] mb-4">Scale your development with agentic builders</p>
      
      <div className="bg-[#090909] border border-[#262626] rounded-xl p-4 mb-4">
        <span className="text-3xl font-extrabold text-white">\${applied ? basePrice - discount : basePrice}</span>
        <span className="text-sm text-[#999999]">/ month</span>
      </div>

      <form onSubmit={handleApply} className="flex gap-2 mb-4">
        <input
          type="text"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          placeholder="Promo code (try 'IQ50')"
          className="flex-1 bg-[#090909] text-white border border-[#262626] rounded-lg px-3 py-1.5 text-xs focus:outline-none"
        />
        <button type="submit" className="bg-[#1c1c1c] border border-[#262626] text-white rounded-lg px-3 text-xs font-semibold">Apply</button>
      </form>

      <button className="w-full bg-white text-black font-semibold rounded-lg py-2 text-xs flex items-center justify-center gap-2 hover:bg-zinc-200">
        <CreditCard className="h-4 w-4" /> Upgrade with Card
      </button>
    </div>
  );
}`
  }
];

// Helper components that render in the Live Canvas
// 1. FeedbackBoard Preview
function FeedbackBoardPreview() {
  const [items, setItems] = useState([
    { id: 1, title: "Add dark mode settings API", votes: 24, tag: "Feature" },
    { id: 2, title: "Fix CSS lint overflow bug on mobile", votes: 8, tag: "Bug" },
    { id: 3, title: "Support drag-and-drop file upload", votes: 15, tag: "Feature" }
  ]);
  const [newTitle, setNewTitle] = useState("");

  const handleVote = (id: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, votes: item.votes + 1 } : item
    ).sort((a,b) => b.votes - a.votes));
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    setItems([...items, {
      id: Date.now(),
      title: newTitle,
      votes: 0,
      tag: "Feature"
    }]);
    setNewTitle("");
  };

  return (
    <div className="w-full max-w-sm rounded-xl border border-hairline bg-[#141414] p-5 shadow-2xl">
      <h3 className="text-[15px] font-bold text-white mb-3 tracking-tight">Community Feedback</h3>
      
      <form onSubmit={handleAdd} className="flex gap-2 mb-4">
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="I want webIQ to..."
          className="flex-1 bg-[#090909] text-white border border-hairline rounded-lg px-3 py-1.5 text-[13px] placeholder-ink-muted focus:outline-none focus:border-accent-blue/50"
        />
        <button type="submit" className="bg-white text-black font-semibold rounded-lg px-3 py-1.5 text-[13.px] flex items-center justify-center hover:bg-zinc-200 transition-colors">
          <Plus className="h-4 w-4" />
        </button>
      </form>

      <div className="flex flex-col gap-2 max-h-[160px] overflow-y-auto pr-1">
        {items.map(item => (
          <div key={item.id} className="flex items-center justify-between bg-[#1c1c1c] border border-hairline rounded-lg p-3 transition-colors hover:border-hairline-soft/80">
            <div className="flex flex-col gap-1 pr-3">
              <span className="text-[13px] font-medium text-white leading-tight tracking-tight">{item.title}</span>
              <span className={`text-[10px] w-fit font-bold rounded px-1.5 py-0.5 ${
                item.tag === "Bug" ? "bg-red-500/10 text-red-400" : "bg-accent-blue/10 text-accent-blue"
              }`}>
                {item.tag}
              </span>
            </div>
            <button 
              onClick={() => handleVote(item.id)}
              className="flex items-center gap-1.5 bg-[#090909] border border-hairline hover:border-accent-blue hover:text-accent-blue transition-all rounded px-2.5 py-1 text-ink-muted text-[11px]"
            >
              <ThumbsUp className="h-3 w-3" />
              <span>{item.votes}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// 2. SaaS Dashboard Preview
function DashboardPreview() {
  const chartData = [
    { month: "Apr", rev: 45, height: "h-[45%]" },
    { month: "May", rev: 62, height: "h-[62%]" },
    { month: "Jun", rev: 89, height: "h-[89%]" },
    { month: "Jul", rev: 110, height: "h-[100%]" }
  ];

  return (
    <div className="w-full max-w-sm rounded-xl border border-hairline bg-[#141414] p-5 shadow-2xl">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[15px] font-bold text-white tracking-tight">Billing Analytics</h3>
        <span className="text-[11px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/10 px-2 py-0.5 rounded-full font-medium">Live Metrics</span>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-5">
        <div className="bg-[#1c1c1c] border border-hairline rounded-lg p-3">
          <span className="text-[11px] text-ink-muted">ARR Growth</span>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-lg font-bold text-white tracking-tight">$1.2M</span>
            <span className="text-[11px] text-emerald-400 font-semibold">+24%</span>
          </div>
        </div>
        <div className="bg-[#1c1c1c] border border-hairline rounded-lg p-3">
          <span className="text-[11px] text-ink-muted">Active Users</span>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-lg font-bold text-white tracking-tight">14,820</span>
            <span className="text-[11px] text-emerald-400 font-semibold">+12%</span>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-[12px] font-medium text-white">Monthly MRR Growth</span>
          <span className="text-[11px] text-ink-muted flex items-center gap-1">
            <TrendingUp className="h-3 w-3 text-accent-blue" />
            +89% QoQ
          </span>
        </div>
        <div className="flex items-end justify-between h-[80px] bg-[#090909] border border-hairline rounded-lg p-4 pt-6">
          {chartData.map((d, i) => (
            <div key={i} className="flex flex-col items-center flex-1 h-full justify-end group relative">
              {/* Tooltip */}
              <span className="absolute bottom-full mb-1 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-black text-[9px] px-1.5 py-0.5 rounded font-bold shadow-md">
                ${d.rev}k
              </span>
              <div className={`w-6 bg-accent-blue rounded-t transition-all duration-500 hover:bg-white ${d.height}`}></div>
              <span className="text-[10px] text-ink-muted mt-1.5">{d.month}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// 3. CheckoutCard Preview
function CheckoutCardPreview() {
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [applied, setApplied] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  
  const basePrice = 29;

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!coupon.trim()) return;
    
    setLoading(true);
    setError("");

    setTimeout(() => {
      setLoading(false);
      if (coupon.toUpperCase() === "IQ50") {
        setDiscount(14.5);
        setApplied(true);
      } else {
        setError("Invalid code");
      }
    }, 600);
  };

  return (
    <div className="w-full max-w-sm rounded-xl border border-hairline bg-[#141414] p-5 shadow-2xl text-center">
      <h3 className="text-lg font-bold text-white tracking-tight">webIQ Pro</h3>
      <p className="text-[13px] text-ink-muted mb-4 mt-0.5">Scale your development with agentic builders</p>
      
      <div className="bg-[#090909] border border-hairline rounded-xl p-4 mb-4 flex flex-col justify-center items-center">
        <div className="flex items-baseline justify-center gap-1.5">
          {applied ? (
            <>
              <span className="text-3xl font-extrabold text-white tracking-tight">${basePrice - discount}</span>
              <span className="text-sm text-ink-muted line-through">${basePrice}</span>
            </>
          ) : (
            <span className="text-3xl font-extrabold text-white tracking-tight">${basePrice}</span>
          )}
          <span className="text-[13px] text-ink-muted">/ month</span>
        </div>
        <p className="text-[11px] text-ink-muted mt-1">Billed annually, cancel anytime</p>
      </div>

      <div className="flex flex-col gap-2 mb-4 text-left">
        <div className="flex items-center gap-2 text-[12.5px] text-zinc-300">
          <Check className="h-4 w-4 text-accent-blue shrink-0" />
          <span>Unlimited AI agents execution</span>
        </div>
        <div className="flex items-center gap-2 text-[12.5px] text-zinc-300">
          <Check className="h-4 w-4 text-accent-blue shrink-0" />
          <span>Full Visual Canvas + Code Sync</span>
        </div>
      </div>

      {!applied ? (
        <form onSubmit={handleApply} className="flex gap-2 mb-4">
          <input
            type="text"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            placeholder="Promo code (try 'IQ50')"
            className="flex-1 bg-[#090909] text-white border border-hairline rounded-lg px-3 py-1.5 text-[12px] uppercase tracking-wider placeholder-ink-muted focus:outline-none focus:border-accent-blue/50"
          />
          <button 
            type="submit" 
            disabled={loading}
            className="bg-surface-2 border border-hairline text-white hover:bg-surface-1 rounded-lg px-3 py-1.5 text-[12px] font-semibold transition-colors disabled:opacity-50"
          >
            {loading ? "..." : "Apply"}
          </button>
        </form>
      ) : (
        <div className="flex items-center justify-between bg-accent-blue/10 border border-accent-blue/20 rounded-lg p-2.5 mb-4 text-[12px] text-accent-blue font-medium">
          <span className="flex items-center gap-1.5">
            <Percent className="h-3.5 w-3.5" />
            Coupon IQ50 Applied
          </span>
          <span>-$14.50/mo</span>
        </div>
      )}
      {error && <p className="text-[11px] text-red-400 text-left mt-[-8px] mb-3 pl-1">{error}</p>}

      <button className="w-full bg-white text-black font-semibold rounded-lg py-2 text-[13px] flex items-center justify-center gap-2 hover:bg-zinc-200 transition-all active:scale-[0.98]">
        <CreditCard className="h-4 w-4" />
        Upgrade with Card
      </button>
    </div>
  );
}

export default function InteractiveBuilder() {
  const [activePromptIdx, setActivePromptIdx] = useState(0);
  const [activeTab, setActiveTab] = useState<"code" | "preview">("preview");
  const [displayedCode, setDisplayedCode] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);
  const [isDeploying, setIsDeploying] = useState(false);
  const typingTimer = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const stRef = useRef<any>(null);

  // Cache refs to prevent duplicate React state updates on every scroll pixel
  const activePromptIdxRef = useRef(0);
  const activeTabRef = useRef<"code" | "preview">("preview");

  const activePrompt = PROMPTS[activePromptIdx];

  // GSAP ScrollTrigger Pinning and Scroll-linked indexing
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let st: any = null;

    const initScrollTrigger = () => {
      if (window.innerWidth >= 1024 && gridRef.current) {
        st = ScrollTrigger.create({
          trigger: gridRef.current,
          start: "top 80px", // Pinned grid starts at exactly 80px offset
          end: "+=3600",     // Height of pinned scroll range (increased to make scroll-reveal slower and more premium)
          pin: true,
          pinSpacing: true,
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            
            // Determine active prompt and phase
            let promptIdx = 0;
            let phase: "code" | "preview" = "code";
            let localProgress = 0; // progress within the current phase [0, 1]

            if (progress < 0.33) {
              promptIdx = 0;
              const local = progress / 0.33;
              if (local < 0.5) {
                phase = "code";
                localProgress = local / 0.5;
              } else {
                phase = "preview";
                localProgress = (local - 0.5) / 0.5;
              }
            } else if (progress < 0.66) {
              promptIdx = 1;
              const local = (progress - 0.33) / 0.33;
              if (local < 0.5) {
                phase = "code";
                localProgress = local / 0.5;
              } else {
                phase = "preview";
                localProgress = (local - 0.5) / 0.5;
              }
            } else {
              promptIdx = 2;
              const local = Math.min(1, (progress - 0.66) / 0.34);
              if (local < 0.5) {
                phase = "code";
                localProgress = local / 0.5;
              } else {
                phase = "preview";
                localProgress = (local - 0.5) / 0.5;
              }
            }

            // Update indices ONLY if they actually changed
            if (activePromptIdxRef.current !== promptIdx) {
              activePromptIdxRef.current = promptIdx;
              setActivePromptIdx(promptIdx);
            }
            if (activeTabRef.current !== phase) {
              activeTabRef.current = phase;
              setActiveTab(phase);
            }

            // Update displayed code based on progress using bailouts
            const fullCode = PROMPTS[promptIdx].codeSnippet;
            if (phase === "code") {
              const charsToShow = Math.floor(fullCode.length * localProgress);
              const nextCode = fullCode.slice(0, charsToShow);
              setDisplayedCode((prev) => (prev !== nextCode ? nextCode : prev));
              
              // Set progressive terminal logs
              const logs = [
                `[AI Agent] Orchestrating files for request: "${PROMPTS[promptIdx].promptText}"`,
                `[AI Agent] Initializing workspace inside sandbox container...`,
              ];
              if (localProgress > 0.3) {
                logs.push(`[AST Compiler] Extracting code structure. Analyzing React imports...`);
              }
              if (localProgress > 0.6) {
                logs.push(`[Tailwind JIT] Compiling utilities. Applying styling tree...`);
              }
              if (localProgress > 0.8) {
                logs.push(`[Self-Healer] Checking AST rules. 0 typescript warnings.`);
              }
              setTerminalLogs((prev) => {
                if (prev.length !== logs.length || prev[prev.length - 1] !== logs[logs.length - 1]) {
                  return logs;
                }
                return prev;
              });
            } else {
              setDisplayedCode((prev) => (prev !== fullCode ? fullCode : prev));
              const fullLogs = [
                `[AI Agent] Orchestrating files for request: "${PROMPTS[promptIdx].promptText}"`,
                `[AI Agent] Initializing workspace inside sandbox container...`,
                `[AST Compiler] Extracting code structure. Analyzing React imports...`,
                `[Tailwind JIT] Compiling utilities. Applying styling tree...`,
                `[Self-Healer] Checking AST rules. 0 typescript warnings.`,
                `[Deployer] Live sandbox synced to: https://${PROMPTS[promptIdx].previewUrl}`
              ];
              setTerminalLogs((prev) => {
                if (prev.length !== fullLogs.length) {
                  return fullLogs;
                }
                return prev;
              });
            }
          },
        });
        stRef.current = st;
      }
    };

    // Run initialization
    initScrollTrigger();

    // Re-initialize ScrollTrigger on resize to handle responsiveness
    const handleResize = () => {
      if (st) {
        st.kill(true); // Revert DOM cleanly
        st = null;
        stRef.current = null;
      }
      initScrollTrigger();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (st) {
        st.kill(true); // Synchronously restore DOM state to avoid React removeChild errors
        stRef.current = null;
      }
    };
  }, []);

  // Fallback for mobile and initial load (non-scroll driven typing)
  const runMobileTypingFallback = (promptIdx: number) => {
    if (typingTimer.current) {
      clearInterval(typingTimer.current);
    }
    
    setIsTyping(true);
    setIsDeploying(false);
    setActiveTab("code");
    setDisplayedCode("");
    
    const fullCode = PROMPTS[promptIdx].codeSnippet;
    setTerminalLogs([
      `[AI Agent] Orchestrating files for request: "${PROMPTS[promptIdx].promptText}"`,
      `[AI Agent] Initializing workspace inside sandbox container...`,
      `[AI Agent] Bootstrapping React / Tailwind environment...`,
    ]);

    let index = 0;
    const charsPerStep = 20;

    typingTimer.current = setInterval(() => {
      if (index < fullCode.length) {
        setDisplayedCode(fullCode.slice(0, index + charsPerStep));
        index += charsPerStep;
      } else {
        if (typingTimer.current) clearInterval(typingTimer.current);
        setDisplayedCode(fullCode);
        setIsTyping(false);
        setIsDeploying(true);

        setTerminalLogs(prev => [
          ...prev,
          `[AST Compiler] Completed code extraction. 0 syntax errors found.`,
          `[Tailwind JIT] Injected utility classes successfully.`,
          `[webIQ Bundler] Launching development environment server...`,
          `[Deployer] Live deployment synced to: https://${PROMPTS[promptIdx].previewUrl}`
        ]);

        setTimeout(() => {
          setIsDeploying(false);
          setActiveTab("preview");
        }, 1000);
      }
    }, 30);
  };

  const handlePromptClick = (idx: number) => {
    if (typingTimer.current) {
      clearInterval(typingTimer.current);
    }

    if (window.innerWidth < 1024) {
      setActivePromptIdx(idx);
      runMobileTypingFallback(idx);
      
      // Scroll to the editor container on mobile/tablet so the user sees the code/canvas update
      setTimeout(() => {
        const editorElement = document.querySelector(".lg\\:col-span-8");
        if (editorElement) {
          const topOffset = editorElement.getBoundingClientRect().top + window.scrollY - 90;
          if ((window as any).lenis) {
            (window as any).lenis.scrollTo(topOffset, { immediate: false });
          } else {
            window.scrollTo({ top: topOffset, behavior: "smooth" });
          }
        }
      }, 50);
    } else {
      // On desktop, calculate progress for this card index and scroll to it
      // Prompt 0: 0.0 | Prompt 1: 0.335 | Prompt 2: 0.67
      const progress = idx === 0 ? 0.0 : idx === 1 ? 0.335 : 0.67;
      if (stRef.current) {
        const scrollStart = stRef.current.start;
        const scrollEnd = stRef.current.end;
        const targetScroll = scrollStart + (scrollEnd - scrollStart) * progress;
        
        activePromptIdxRef.current = idx;
        activeTabRef.current = "code";
        setActivePromptIdx(idx);
        setActiveTab("code");

        window.scrollTo({
          top: targetScroll + 2, // Add 2px offset to guarantee ScrollTrigger state is triggered
          behavior: "smooth"
        });
      } else {
        setActivePromptIdx(idx);
      }
    }
  };

  useEffect(() => {
    if (window.innerWidth < 1024) {
      runMobileTypingFallback(0);
    } else {
      // On desktop, initialize with prompt 0 fully loaded on preview tab
      setDisplayedCode(PROMPTS[0].codeSnippet);
      setActiveTab("preview");
      setTerminalLogs([
        `[AI Agent] Orchestrating files for request: "${PROMPTS[0].promptText}"`,
        `[AI Agent] Initializing workspace inside sandbox container...`,
        `[AST Compiler] Extracting code structure. Analyzing React imports...`,
        `[Tailwind JIT] Compiling utilities. Applying styling tree...`,
        `[Self-Healer] Checking AST rules. 0 typescript warnings.`,
        `[Deployer] Live sandbox synced to: https://${PROMPTS[0].previewUrl}`
      ]);
    }

    return () => {
      if (typingTimer.current) clearInterval(typingTimer.current);
    };
  }, []);

  return (
    <div ref={containerRef} id="demo" className="w-full max-w-[1200px] mx-auto px-6 md:px-8 mt-12 mb-24">
      {/* Section Header */}
      <div className="text-center mb-16">
        <span className="text-[13px] font-semibold uppercase tracking-[0.2em] text-accent-blue bg-accent-blue/10 px-3 py-1 rounded-full">
          The Playground
        </span>
        <h2 className="font-heading text-4xl md:text-5xl font-medium tracking-[-0.04em] text-white mt-4 mb-4">
          See the Agent Code in Real Time.
        </h2>
        <p className="max-w-xl mx-auto text-ink-muted text-base leading-relaxed tracking-[-0.015em]">
          Click a prompt template on the left. Watch the webIQ frontend agent generate responsive components, sync styles, pass compilation, and render immediately on the canvas.
        </p>
      </div>

      <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-surface-1/30 border border-hairline rounded-2xl p-4 md:p-6 overflow-hidden lg:h-[600px]">
        
        {/* Left Side: Prompts & AI Agent Logs (4 cols) */}
        <div className="lg:col-span-4 flex flex-col gap-6 lg:h-full justify-between">
          <div className="flex flex-col gap-2">
            <span className="text-[12px] font-semibold uppercase tracking-[0.05em] text-ink-muted">
              Select Prompt Template
            </span>
            <div className="flex flex-col gap-2">
              {PROMPTS.map((prompt, idx) => (
                <button
                  key={prompt.id}
                  onClick={() => handlePromptClick(idx)}
                  className={`relative overflow-hidden flex flex-col items-start text-left p-3.5 pl-6 rounded-xl border transition-all ${
                    activePromptIdx === idx
                      ? "bg-surface-2 border-accent-blue/30 shadow-lg scale-[1.01]"
                      : "bg-[#090909]/45 border-hairline hover:border-hairline-soft hover:bg-surface-1"
                  }`}
                >
                  {activePromptIdx === idx && (
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-accent-blue animate-pulse"></div>
                  )}
                  <span className={`text-[14px] font-bold tracking-tight ${activePromptIdx === idx ? "text-white" : "text-zinc-300"}`}>
                    {prompt.label}
                  </span>
                  <span className="text-[12px] text-ink-muted mt-1 leading-normal">
                    {prompt.desc}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* AI Terminal console log */}
          <div className="flex-1 flex flex-col bg-[#090909] border border-hairline rounded-xl p-4 font-mono text-[11px] leading-relaxed text-zinc-400 select-none min-h-[180px] h-[220px] lg:h-auto">
            <div className="flex items-center justify-between border-b border-hairline pb-2 mb-3">
              <span className="flex items-center gap-1.5 text-[10px] uppercase font-bold text-ink-muted">
                <Terminal className="h-3.5 w-3.5 text-accent-blue" />
                webIQ Agent Console
              </span>
              <span className="h-2 w-2 rounded-full bg-accent-blue animate-pulse"></span>
            </div>
            
            <div className="flex flex-col gap-2 overflow-y-auto max-h-[200px] flex-1 pr-1 font-mono">
              {terminalLogs.map((log, idx) => (
                <div key={idx} className="flex gap-1.5">
                  <span className="text-accent-blue shrink-0">&gt;</span>
                  <span className={log.includes("[AI Agent]") ? "text-zinc-300" : log.includes("Live deployment") ? "text-accent-blue font-semibold" : "text-zinc-400"}>
                    {log}
                  </span>
                </div>
              ))}
              {isTyping && (
                <div className="flex items-center gap-1.5 text-zinc-500 italic">
                  <Cpu className="h-3.5 w-3.5 text-accent-blue animate-spin shrink-0" />
                  <span>Agent is writing component code...</span>
                </div>
              )}
              {isDeploying && (
                <div className="flex items-center gap-1.5 text-accent-blue italic font-semibold">
                  <Sparkles className="h-3.5 w-3.5 animate-bounce shrink-0" />
                  <span>Deploying sandbox server...</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Side: IDE Editor + Canvas Sandbox (8 cols) */}
        <div className="lg:col-span-8 flex flex-col border border-hairline rounded-xl bg-[#090909] shadow-2xl h-[480px] lg:h-full overflow-hidden">
          
          {/* Header Sandbox Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-hairline bg-[#141414]/90 px-4 py-2 gap-2 shrink-0">
            
            {/* Tabs */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab("preview")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[13px] font-semibold transition-all ${
                  activeTab === "preview"
                    ? "bg-[#090909] text-white border border-hairline"
                    : "text-ink-muted hover:text-white"
                }`}
              >
                <Play className="h-3.5 w-3.5 text-accent-blue" />
                Live Canvas
              </button>
              <button
                onClick={() => setActiveTab("code")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[13px] font-semibold transition-all ${
                  activeTab === "code"
                    ? "bg-[#090909] text-white border border-hairline"
                    : "text-ink-muted hover:text-white"
                }`}
              >
                <Code2 className="h-3.5 w-3.5 text-zinc-400" />
                Code Editor
              </button>
            </div>

            {/* Simulated Address / Info */}
            <div className="flex items-center gap-3 bg-[#090909] border border-hairline rounded-md px-3 py-1 text-[11px] font-mono text-zinc-500 sm:w-auto max-w-full truncate">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0"></span>
              <span className="truncate">{activePrompt.previewUrl}</span>
            </div>
          </div>

          {/* IDE Content */}
          <div className="flex-1 relative flex flex-col overflow-hidden bg-[#090909]">
            
            {/* 1. Preview Canvas rendering */}
            {activeTab === "preview" && (
              <div className="flex-1 flex items-center justify-center p-6 md:p-10 grid-bg relative overflow-y-auto h-full">
                {/* Accent glows */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-accent-blue/5 blur-[70px] pointer-events-none"></div>
                
                <div className="w-full flex items-center justify-center animate-in fade-in zoom-in-95 duration-300">
                  {activePromptIdx === 0 && <FeedbackBoardPreview />}
                  {activePromptIdx === 1 && <DashboardPreview />}
                  {activePromptIdx === 2 && <CheckoutCardPreview />}
                </div>
              </div>
            )}

            {/* 2. Code Editor rendering */}
            {activeTab === "code" && (
              <div className="flex-1 p-4 font-mono text-[12px] leading-relaxed overflow-y-auto h-full">
                <div className="flex font-mono h-full">
                  {/* Fake line numbers */}
                  <div className="text-zinc-600 select-none text-right pr-4 border-r border-hairline/60 w-8 shrink-0">
                    {Array.from({ length: Math.max(12, displayedCode.split("\n").length) }).map((_, i) => (
                      <div key={i}>{i + 1}</div>
                    ))}
                  </div>
                  {/* Code body with highlights */}
                  <pre className="pl-4 text-zinc-300 overflow-x-auto flex-1 select-text cursor-text font-mono">
                    <code className="cursor-blink font-mono">
                      {/* Simple regex parsing for display coloring */}
                      {displayedCode.split("\n").map((line, idx) => {
                        // Very simple coloring logic for rendering
                        let content: React.ReactNode = line;
                        if (line.trim().startsWith("import") || line.trim().startsWith("export") || line.trim().startsWith("default") || line.trim().startsWith("return") || line.trim().startsWith("const") || line.trim().startsWith("function")) {
                          const words = line.split(" ");
                          content = (
                            <>
                              <span className="text-accent-blue">{words[0]}</span> {words.slice(1).join(" ")}
                            </>
                          );
                        } else if (line.trim().startsWith("<") || line.trim().startsWith("</")) {
                          content = <span className="text-amber-500">{line}</span>;
                        }
                        return (
                          <div key={idx} className="min-h-[1.5em] font-mono">
                            {content}
                          </div>
                        );
                      })}
                    </code>
                  </pre>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
