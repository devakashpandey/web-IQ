"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Sparkles } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Demo", href: "#demo" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full pointer-events-none mt-4">
      <div className="mx-auto w-full max-w-[95%] md:max-w-[1000px] pointer-events-auto px-4 sm:px-0">
        <div className="flex items-center justify-between bg-[#141414]/90 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] rounded-full px-6 py-2 h-[52px] backdrop-blur-md">
          
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-surface-2 border border-hairline shadow-inner transition-transform group-hover:scale-105">
              <Sparkles className="h-4.5 w-4.5 text-accent-blue transition-colors group-hover:text-white" />
              <div className="absolute inset-0 rounded-lg bg-accent-blue/10 opacity-0 group-hover:opacity-100 transition-opacity blur-[4px]"></div>
            </div>
            <span className="font-geist text-xl font-bold tracking-[-0.04em] text-white">
              web<span className="text-accent-blue">IQ</span>
            </span>
          </Link>

          {/* Center Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-sans text-[14px] font-medium text-ink-muted transition-colors hover:text-white tracking-[-0.01em]"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="#login"
              className="rounded-full bg-surface-1 px-4.5 py-2 font-sans text-[14px] font-semibold text-white border border-hairline transition-all hover:bg-surface-2 hover:border-ink-muted/30"
            >
              Sign in
            </Link>
            <Link
              href="#start"
              className="rounded-full bg-white px-4.5 py-2 font-sans text-[14px] font-semibold text-black transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              Build Free
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <Link
              href="#start"
              className="rounded-full bg-white px-3.5 py-1.5 font-sans text-[13px] font-semibold text-black transition-transform hover:scale-[1.03]"
            >
              Build
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1 text-ink-muted transition-colors hover:text-white"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Overlay Menu */}
      {isOpen && (
        <div className="fixed z-40 bg-canvas/98 px-6 py-8 flex flex-col gap-6 md:hidden animate-in fade-in slide-in-from-top duration-300 pointer-events-auto inset-x-4 top-[76px] border border-hairline rounded-2xl shadow-2xl">
          <div className="flex flex-col gap-5 border-b border-hairline pb-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-sans text-lg font-medium text-ink-muted hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-3 mt-2">
            <Link
              href="#login"
              onClick={() => setIsOpen(false)}
              className="flex justify-center items-center rounded-full bg-surface-1 py-3 font-sans text-sm font-semibold text-white border border-hairline transition-colors hover:bg-surface-2"
            >
              Sign in
            </Link>
            <Link
              href="#start"
              onClick={() => setIsOpen(false)}
              className="flex justify-center items-center rounded-full bg-white py-3 font-sans text-sm font-semibold text-black shadow-lg"
            >
              Get started for free
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
