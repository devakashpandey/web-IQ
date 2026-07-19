"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqSection() {
  const faqs: FaqItem[] = [
    {
      question: "How does the Visual-Code Dual Sync engine work?",
      answer: "webIQ parses your components into Abstract Syntax Trees (ASTs). When you drag layout borders or change styles visually, our sync engine translates those edits into precise Tailwind utility updates in your React codebase. Conversely, code edits instantly re-render the visual editor canvas under 1ms."
    },
    {
      question: "What happens if the agent writes buggy or invalid code?",
      answer: "Every code change is evaluated in our sandbox environment. If the AI agent introduces type conflicts or lint errors, a self-healing daemon interceptor catches the output. It reads the compiler output logs, applies patches (like adding missing imports or correct prop typings), and re-compiles until the code passes validation cleanly."
    },
    {
      question: "Can I export the code and host it on my own server?",
      answer: "Absolutely. webIQ builds applications using standard React, Next.js, and Tailwind CSS. The output is a clean git repository that you can clone locally, build with npm run build, or host on any hosting provider like Vercel, AWS, or Netlify."
    },
    {
      question: "How does webIQ compare to other tools like v0.dev or bolt.new?",
      answer: "While v0 specializes in component generation and bolt.new runs in-browser stacks, webIQ is built specifically for production-grade full-stack web applications. It bridges the gap by letting you collaboratively edit files visually like Framer, but with a full IDE code view and robust autonomous agents that self-heal dependencies and deploy instantly."
    },
    {
      question: "Can I connect custom databases and API routes?",
      answer: "Yes. The webIQ workspace supports multi-agent setups. You can prompt: 'Create a postgres table for users and build a Next.js API route to fetch data'. The agents will configure database schemas, set up mock seeds, write backend fetch endpoints, and connect them to visual UI cards in one go."
    }
  ];

  return (
    <div id="faq" className="w-full max-w-[800px] mx-auto px-6 md:px-8 py-20 border-t border-hairline-soft">
      {/* Section Header */}
      <div className="text-center mb-12">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-blue/30 bg-accent-blue/10 px-3.5 py-1 font-sans text-[11.5px] font-extrabold uppercase tracking-wider text-accent-blue shadow-[0_0_15px_rgba(0,153,255,0.08)]">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse"></span>
          Support
        </span>
        <h2 className="font-heading text-4xl md:text-5xl font-medium tracking-[-0.04em] text-white mt-4 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-ink-muted text-base leading-relaxed tracking-[-0.015em]">
          Everything you need to know about the webIQ visual code-canvas pipeline.
        </p>
      </div>

      {/* FAQ Accordion List */}
      <div className="flex flex-col gap-3.5">
        {faqs.map((faq, idx) => (
          <FaqAccordion key={idx} faq={faq} />
        ))}
      </div>
    </div>
  );
}

function FaqAccordion({ faq }: { faq: FaqItem }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="border border-hairline rounded-xl bg-surface-1/40 overflow-hidden transition-colors hover:border-hairline-soft/80"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left text-white select-none focus:outline-none"
      >
        <span className="font-sans text-[15px] font-semibold tracking-tight pr-4">
          {faq.question}
        </span>
        <ChevronDown 
          className={`h-4.5 w-4.5 text-ink-muted transition-transform duration-300 shrink-0 ${
            isOpen ? "transform rotate-180 text-white" : ""
          }`} 
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <div className="px-5 pb-5 pt-1 border-t border-hairline/25">
              <p className="font-sans text-[14.5px] font-medium leading-relaxed text-ink-muted tracking-[-0.012em]">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
