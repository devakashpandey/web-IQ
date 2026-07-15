"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sparkles } from "lucide-react";
import { SignIn, SignUp, Show, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  useEffect(() => {
    if (isSignInOpen || isSignUpOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      if (typeof window !== "undefined" && (window as any).lenis) {
        (window as any).lenis.stop();
      }
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      if (typeof window !== "undefined" && (window as any).lenis) {
        (window as any).lenis.start();
      }
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      if (typeof window !== "undefined" && (window as any).lenis) {
        (window as any).lenis.start();
      }
    };
  }, [isSignInOpen, isSignUpOpen]);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Workflow", href: "#workflow" },
    { name: "Demo", href: "#demo" },
    { name: "Integrations", href: "#integrations" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full pointer-events-none mt-4">
      <div className="mx-auto w-full max-w-[95%] md:max-w-[1000px] pointer-events-auto px-4 sm:px-0">
        <div className="flex items-center justify-between bg-[#141414]/90 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] rounded-full px-6 py-2 h-[52px] backdrop-blur-md">

          {/* Logo / Brand */}
          <Link href="/" className="flex items-center gap-2 group">

            <span className="font-geist text-xl font-bold tracking-[-0.04em] text-white">
              web<span className="text-accent-blue">IQ</span>
            </span>
          </Link>

          {/* Center Desktop Links */}
          <div className="hidden lg:flex items-center gap-4.5 xl:gap-6">
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
          <div className="hidden lg:flex items-center gap-3">
            <Show when="signed-out">
              <button
                onClick={() => setIsSignInOpen(true)}
                className="rounded-full bg-surface-1 px-4.5 py-2 font-sans text-[14px] font-semibold text-white border border-hairline transition-all hover:bg-surface-2 hover:border-ink-muted/30 cursor-pointer"
              >
                Sign in
              </button>
              <button
                onClick={() => setIsSignUpOpen(true)}
                className="rounded-full bg-white px-4.5 py-2 font-sans text-[14px] font-semibold text-black transition-transform hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
              >
                Build Free
              </button>
            </Show>
            <Show when="signed-in">
              <UserButton />
            </Show>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-3">
            <Show when="signed-out">
              <button
                onClick={() => setIsSignUpOpen(true)}
                className="rounded-full bg-white px-3.5 py-1.5 font-sans text-[13px] font-semibold text-black transition-transform hover:scale-[1.03] cursor-pointer"
              >
                Build
              </button>
            </Show>
            <Show when="signed-in">
              <UserButton />
            </Show>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-ink-muted transition-all hover:text-white bg-surface-1 border border-hairline rounded-full hover:bg-surface-2 hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center h-9 w-9"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-4.5 w-4.5 transition-transform rotate-90 duration-200" /> : <Menu className="h-4.5 w-4.5 transition-transform duration-200" />}
            </button>
          </div>
        </div>
      </div>

      {/* Sign In Modal Overlay */}
      {isSignInOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-md pointer-events-auto" onClick={() => setIsSignInOpen(false)}>
          <div className="relative border border-hairline rounded-2xl bg-canvas p-6 shadow-2xl animate-in zoom-in-95 duration-200" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsSignInOpen(false)}
              className="absolute top-4 right-4 text-ink-muted hover:text-white cursor-pointer transition-colors z-10"
            >
              <X className="h-5 w-5" />
            </button>
            <SignIn routing="hash" />
          </div>
        </div>
      )}

      {/* Sign Up Modal Overlay */}
      {isSignUpOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-md pointer-events-auto" onClick={() => setIsSignUpOpen(false)}>
          <div className="relative border border-hairline rounded-2xl bg-canvas p-6 shadow-2xl animate-in zoom-in-95 duration-200" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsSignUpOpen(false)}
              className="absolute top-4 right-4 text-ink-muted hover:text-white cursor-pointer transition-colors z-10"
            >
              <X className="h-5 w-5" />
            </button>
            <SignUp routing="hash" />
          </div>
        </div>
      )}

      {/* Mobile Overlay Menu */}
      {isOpen && (
        <div className="fixed z-40 bg-[#090909]/95 backdrop-blur-2xl px-6 py-6 flex flex-col gap-4 lg:hidden menu-slide-in pointer-events-auto inset-x-4 top-[76px] border border-white/10 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.8)]">
          <div className="flex flex-col gap-3 border-b border-hairline/60 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-sans text-lg font-medium text-ink-muted hover:text-white flex items-center justify-between group transition-colors py-1.5"
              >
                <span>{link.name}</span>
                <span className="text-accent-blue opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all font-mono">&rarr;</span>
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-3 mt-1">
            <Show when="signed-out">
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsSignInOpen(true);
                }}
                className="w-full flex justify-center items-center rounded-full bg-surface-1 py-3 font-sans text-sm font-semibold text-white border border-hairline transition-all hover:bg-surface-2 cursor-pointer active:scale-[0.98]"
              >
                Sign in
              </button>
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsSignUpOpen(true);
                }}
                className="w-full flex justify-center items-center rounded-full bg-white py-3 font-sans text-sm font-bold text-black shadow-lg transition-all cursor-pointer active:scale-[0.98]"
              >
                Build Free
              </button>
            </Show>
          </div>
        </div>
      )}
    </nav>
  );
}
