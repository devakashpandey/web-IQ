"use client";

import React, { useState } from "react";
import { Check, Sparkles } from "lucide-react";

interface Tier {
  name: string;
  desc: string;
  priceMonthly: number;
  priceAnnually: number;
  features: string[];
  cta: string;
  featured: boolean;
}

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">("annually");

  const tiers: Tier[] = [
    {
      name: "Starter",
      desc: "For hobbyists and individual creators exploring AI site building.",
      priceMonthly: 0,
      priceAnnually: 0,
      features: [
        "1 active project sandbox",
        "Visual canvas editor",
        "Standard AST code compilation",
        "Deploy to webiq.app domain",
        "Community support"
      ],
      cta: "Start for Free",
      featured: false
    },
    {
      name: "Pro",
      desc: "For professional developers who need rapid visual-code iterations.",
      priceMonthly: 29,
      priceAnnually: 24,
      features: [
        "Unlimited active project sandboxes",
        "Dual-Sync Visual-Code core",
        "Autonomous Self-healing compilers",
        "Custom domains + Free SSL",
        "Prioritized edge hosting (85+ pops)",
        "Priority Discord & email support"
      ],
      cta: "Upgrade to Pro",
      featured: true
    },
    {
      name: "Enterprise",
      desc: "For agencies and teams requiring advanced security and automation.",
      priceMonthly: 149,
      priceAnnually: 119,
      features: [
        "Everything in Pro",
        "Shared team workspaces & sandboxes",
        "Custom LLM API keys integration",
        "Deploy to AWS/Vercel/custom clouds",
        "Dedicated compiler orchestration pipelines",
        "SLA 99.99% uptime guarantee"
      ],
      cta: "Contact Sales",
      featured: false
    }
  ];


  return (
    <div id="pricing" className="w-full max-w-[1200px] mx-auto px-6 md:px-8 py-20 border-t border-hairline-soft">
      
      {/* Section Header */}
      <div className="text-center mb-12">
        <span className="text-[13px] font-semibold uppercase tracking-[0.2em] text-accent-blue bg-accent-blue/10 px-3 py-1 rounded-full">
          Pricing
        </span>
        <h2 className="font-heading text-4xl md:text-5xl font-medium tracking-[-0.04em] text-white mt-4 mb-4">
          Flexible tiers for active creators.
        </h2>
        <p className="max-w-xl mx-auto text-ink-muted text-base leading-relaxed tracking-[-0.015em] mb-8">
          Start for free, upgrade to unlock self-healing code compilation, full dual-sync visual code assets, and custom edge endpoints.
        </p>

        {/* Pricing Switcher Tabs */}
        <div className="inline-flex items-center bg-[#141414] border border-hairline p-1 rounded-full select-none">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`px-4 py-2 text-[13px] font-semibold tracking-tight rounded-full transition-all ${
              billingCycle === "monthly"
                ? "bg-surface-2 text-white shadow-md"
                : "text-ink-muted hover:text-white"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle("annually")}
            className={`px-4 py-2 text-[13px] font-semibold tracking-tight rounded-full transition-all flex items-center gap-1.5 ${
              billingCycle === "annually"
                ? "bg-surface-2 text-white shadow-md"
                : "text-ink-muted hover:text-white"
            }`}
          >
            Annually
            <span className="bg-accent-blue/20 text-accent-blue text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0">
              -20%
            </span>
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 items-stretch">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`flex flex-col justify-between rounded-2xl p-6 md:p-8 transition-all ${
              tier.featured
                ? "bg-surface-2 border border-accent-blue/30 shadow-2xl relative"
                : "bg-surface-1 border border-hairline hover:border-hairline-soft"
            }`}
          >
            {tier.featured && (
              <span className="absolute top-0 right-6 -translate-y-1/2 bg-accent-blue text-white text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                <Sparkles className="h-3 w-3" /> Most Popular
              </span>
            )}

            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">{tier.name}</h3>
              <p className="text-[13px] text-ink-muted mt-2 leading-relaxed min-h-[40px] tracking-[-0.01em]">
                {tier.desc}
              </p>

              {/* Price Display */}
              <div className="mt-6 flex items-baseline gap-1.5">
                <span className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                  ${billingCycle === "annually" ? tier.priceAnnually : tier.priceMonthly}
                </span>
                <span className="text-ink-muted text-sm tracking-tight">/ month</span>
              </div>
              {billingCycle === "annually" && tier.priceAnnually > 0 && (
                <p className="text-[11px] text-accent-blue font-semibold mt-1">
                  Billed annually (${tier.priceAnnually * 12}/yr)
                </p>
              )}

              {/* Divider */}
              <div className="h-px bg-hairline my-6"></div>

              {/* Features List */}
              <ul className="flex flex-col gap-3">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-[13px] text-zinc-300">
                    <Check className="h-4.5 w-4.5 text-accent-blue shrink-0 mt-0.5" />
                    <span className="leading-tight tracking-[-0.01em]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <button
              className={`w-full mt-8 rounded-full py-2.5 text-[14px] font-bold tracking-tight transition-all active:scale-[0.98] ${
                tier.featured
                  ? "bg-white text-black hover:bg-zinc-200"
                  : "bg-surface-2 text-white border border-hairline hover:bg-surface-1"
              }`}
            >
              {tier.cta}
            </button>
          </div>
        ))}
      </div>


    </div>
  );
}
