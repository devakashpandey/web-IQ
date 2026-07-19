"use client";

import React, { useState } from "react";
import { Check, Sparkles, Loader2 } from "lucide-react";
import { PricingTable, ClerkLoading, ClerkLoaded } from "@clerk/nextjs";

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
        <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-blue/30 bg-accent-blue/10 px-3.5 py-1 font-sans text-[11.5px] font-extrabold uppercase tracking-wider text-accent-blue shadow-[0_0_15px_rgba(0,153,255,0.08)]">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse"></span>
          Pricing
        </span>
        <h2 className="font-heading text-4xl md:text-5xl font-medium tracking-[-0.04em] text-white mt-4 mb-4">
          Flexible tiers for active creators.
        </h2>
        <p className="max-w-xl mx-auto text-ink-muted text-base leading-relaxed tracking-[-0.015em] mb-8">
          Start for free, upgrade to unlock self-healing code compilation, full dual-sync visual code assets, and custom edge endpoints.
        </p>

        {/* Pricing Switcher Tabs */}
        {/* <div className="inline-flex items-center bg-[#141414] border border-hairline p-1 rounded-full select-none">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`px-4 py-2 text-[13px] font-semibold tracking-tight rounded-full transition-all ${billingCycle === "monthly"
              ? "bg-surface-2 text-white shadow-md"
              : "text-ink-muted hover:text-white"
              }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle("annually")}
            className={`px-4 py-2 text-[13px] font-semibold tracking-tight rounded-full transition-all flex items-center gap-1.5 ${billingCycle === "annually"
              ? "bg-surface-2 text-white shadow-md"
              : "text-ink-muted hover:text-white"
              }`}
          >
            Annually
            <span className="bg-accent-blue/20 text-accent-blue text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0">
              -20%
            </span>
          </button>
        </div> */}
      </div>

      {/* Cards Grid */}
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 items-stretch">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`flex flex-col justify-between rounded-2xl p-6 md:p-8 transition-all ${tier.featured
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


              <div className="h-px bg-hairline my-6"></div>


              <ul className="flex flex-col gap-3">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-[13px] text-zinc-300">
                    <Check className="h-4.5 w-4.5 text-accent-blue shrink-0 mt-0.5" />
                    <span className="leading-tight tracking-[-0.01em]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>


            <button
              className={`w-full mt-8 rounded-full py-2.5 text-[14px] font-bold tracking-tight transition-all active:scale-[0.98] ${tier.featured
                ? "bg-white text-black hover:bg-zinc-200"
                : "bg-surface-2 text-white border border-hairline hover:bg-surface-1"
                }`}
            >
              {tier.cta}
            </button>
          </div>
        ))}
      </div> */}

      <ClerkLoading>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-surface-1 border border-hairline rounded-2xl p-6 md:p-8 flex flex-col justify-between h-[480px] animate-pulse relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-blue/40 to-transparent"></div>
              <div>
                <div className="h-6 w-1/3 bg-surface-2 rounded-md mb-4"></div>
                <div className="h-4 w-3/4 bg-surface-2/60 rounded-md mb-8"></div>
                <div className="h-10 w-1/2 bg-surface-2 rounded-md mb-6"></div>
                <div className="space-y-3 pt-6 border-t border-hairline/60">
                  <div className="h-4 w-5/6 bg-surface-2/80 rounded-md"></div>
                  <div className="h-4 w-4/6 bg-surface-2/60 rounded-md"></div>
                  <div className="h-4 w-3/4 bg-surface-2/70 rounded-md"></div>
                  <div className="h-4 w-2/3 bg-surface-2/50 rounded-md"></div>
                </div>
              </div>
              <div className="h-11 w-full bg-surface-2 rounded-full mt-8 flex items-center justify-center gap-2">
                <Loader2 className="h-4 w-4 text-accent-blue animate-spin" />
                <span className="text-xs text-ink-muted font-medium">Loading pricing...</span>
              </div>
            </div>
          ))}
        </div>
      </ClerkLoading>

      <ClerkLoaded>
        <PricingTable
          appearance={{
            variables: {
              colorPrimary: "#0099ff",
              colorBackground: "#141414",
              colorForeground: "#ffffff",
              colorMutedForeground: "#999999",
              borderRadius: "1rem",
            },
            elements: {
              pricingTable: "grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-stretch",
              pricingTableCard: "bg-[#141414] border border-[#262626] hover:border-accent-blue/40 rounded-2xl p-6 md:p-8 transition-all duration-300 shadow-xl hover:shadow-[0_0_30px_rgba(0,153,255,0.15)] flex flex-col justify-between",
              pricingTableCardTitle: "text-2xl font-bold text-white tracking-tight",
              pricingTableCardDescription: "text-xs text-ink-muted leading-relaxed mt-2",
              pricingTableCardFee: "text-4xl md:text-5xl font-extrabold text-white tracking-tight",
              pricingTableCardFeePeriod: "text-xs text-ink-muted font-medium ml-1",
              pricingTableCardBadge: "bg-accent-blue/15 text-accent-blue border border-accent-blue/30 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full",
              pricingTableCardFeaturesListItemTitle: "text-xs text-zinc-300",
              pricingTableCardFooterButton: "w-full py-3 px-4 rounded-full font-bold text-sm text-white bg-gradient-to-r from-accent-blue to-[#6a4cf5] hover:from-[#0088ee] hover:to-[#5a3ce5] transition-all shadow-[0_0_20px_rgba(0,153,255,0.25)] hover:shadow-[0_0_30px_rgba(0,153,255,0.4)] active:scale-[0.98] cursor-pointer text-center",
            },
          }}
          checkoutProps={{
            appearance: {
              elements: {
                drawerRoot: {
                  zIndex: 2000,
                },
              },
            },
          }}
        />
      </ClerkLoaded>


    </div>
  );
}
