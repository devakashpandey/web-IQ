"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sparkles, Zap } from "lucide-react";
import { SignIn, SignUp, Show, UserButton, useUser } from "@clerk/nextjs";

export default function Navbar() {
  const { user } = useUser();
  const planName = (user?.publicMetadata?.plan as string) ?? "Pro";
  const credits = (user?.publicMetadata?.credits as number) ?? 3;
  const maxCredits = (user?.publicMetadata?.maxCredits as number) ?? 
    (planName.toLowerCase() === "pro" ? 150 : planName.toLowerCase() === "starter" ? 50 : 40);

  const [isOpen, setIsOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isCreditsModalOpen, setIsCreditsModalOpen] = useState(false);

  useEffect(() => {
    if (isSignInOpen || isSignUpOpen || isCreditsModalOpen) {
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
  }, [isSignInOpen, isSignUpOpen, isCreditsModalOpen]);

  const handleOpenSignIn = () => {
    setIsSignInOpen(true);
    if (typeof window !== "undefined") {
      window.history.pushState({ modal: "signin" }, "", "/sign-in");
    }
  };

  const handleCloseSignIn = () => {
    setIsSignInOpen(false);
    if (typeof window !== "undefined") {
      window.history.pushState(null, "", "/");
    }
  };

  const handleOpenSignUp = () => {
    setIsSignUpOpen(true);
    if (typeof window !== "undefined") {
      window.history.pushState({ modal: "signup" }, "", "/sign-up");
    }
  };

  const handleCloseSignUp = () => {
    setIsSignUpOpen(false);
    if (typeof window !== "undefined") {
      window.history.pushState(null, "", "/");
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      setIsSignInOpen(false);
      setIsSignUpOpen(false);
    };
    if (typeof window !== "undefined") {
      window.addEventListener("popstate", handlePopState);
      return () => window.removeEventListener("popstate", handlePopState);
    }
  }, []);

  const navLinks = [
    { name: "Workflow", href: "#workflow" },
    { name: "Demo", href: "#demo" },
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
                onClick={handleOpenSignIn}
                className="rounded-full bg-surface-1 px-4.5 py-2 font-sans text-[14px] font-semibold text-white border border-hairline transition-all hover:bg-surface-2 hover:border-ink-muted/30 cursor-pointer"
              >
                Sign in
              </button>
              <button
                onClick={handleOpenSignUp}
                className="rounded-full bg-white px-4.5 py-2 font-sans text-[14px] font-semibold text-black transition-transform hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
              >
                Build Free
              </button>
            </Show>
            <Show when="signed-in">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsCreditsModalOpen(true)}
                  className="flex items-center gap-1.5 bg-white/[0.05] border border-white/10 rounded-full px-3 py-1.5 font-sans text-[12.5px] font-medium text-zinc-300 select-none cursor-pointer transition-all hover:bg-white/[0.1] active:scale-[0.98]"
                >
                  <Zap className="h-3 w-3 text-zinc-300 fill-zinc-300/10" />
                  <span className="tracking-tight">{credits} / {maxCredits} credits</span>
                </button>
                <UserButton />
              </div>
            </Show>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-3">
            <Show when="signed-out">
              <button
                onClick={handleOpenSignUp}
                className="rounded-full bg-white px-3.5 py-1.5 font-sans text-[13px] font-semibold text-black transition-transform hover:scale-[1.03] cursor-pointer"
              >
                Build
              </button>
            </Show>
            <Show when="signed-in">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsCreditsModalOpen(true)}
                  className="flex items-center gap-1 bg-white/[0.05] border border-white/10 rounded-full px-2.5 py-1 font-sans text-[11.5px] font-medium text-zinc-300 select-none cursor-pointer transition-all hover:bg-white/[0.1] active:scale-[0.98]"
                >
                  <Zap className="h-2.5 w-2.5 text-zinc-300 fill-zinc-300/10" />
                  <span className="tracking-tight">{credits} / {maxCredits} credits</span>
                </button>
                <UserButton />
              </div>
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
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-md pointer-events-auto" onClick={handleCloseSignIn}>
          <div className="relative border border-hairline rounded-2xl bg-canvas p-6 shadow-2xl animate-in zoom-in-95 duration-200" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={handleCloseSignIn}
              className="absolute top-4 right-4 text-ink-muted hover:text-white cursor-pointer transition-colors z-10"
            >
              <X className="h-5 w-5" />
            </button>
            <SignIn routing="path" path="/sign-in" />
          </div>
        </div>
      )}

      {/* Sign Up Modal Overlay */}
      {isSignUpOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-md pointer-events-auto" onClick={handleCloseSignUp}>
          <div className="relative border border-hairline rounded-2xl bg-canvas p-6 shadow-2xl animate-in zoom-in-95 duration-200" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={handleCloseSignUp}
              className="absolute top-4 right-4 text-ink-muted hover:text-white cursor-pointer transition-colors z-10"
            >
              <X className="h-5 w-5" />
            </button>
            <SignUp routing="path" path="/sign-up" />
          </div>
        </div>
      )}

      {/* Credits & Usage Modal Overlay */}
      {isCreditsModalOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/80 backdrop-blur-md pointer-events-auto p-4" onClick={() => setIsCreditsModalOpen(false)}>
          <div className="relative border border-hairline rounded-2xl bg-[#141414] p-6 md:p-8 max-w-md w-full shadow-2xl animate-in zoom-in-95 duration-200 text-white" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={() => setIsCreditsModalOpen(false)}
              className="absolute top-4 right-4 text-ink-muted hover:text-white cursor-pointer transition-colors z-10 p-1 rounded-full hover:bg-surface-2"
            >
              <X className="h-4.5 w-4.5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-lg bg-accent-blue/10 text-accent-blue">
                  <Zap className="h-5 w-5 fill-accent-blue/20" />
                </span>
                <div>
                  <h3 className="font-heading text-lg font-bold tracking-tight">Credits & Usage</h3>
                  <p className="text-[12px] text-ink-muted leading-none mt-1">Monitor your generation limits</p>
                </div>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-accent-blue/15 text-accent-blue border border-accent-blue/30 px-2.5 py-1 rounded-full">
                {planName} Plan
              </span>
            </div>

            {/* Modal Body */}
            <div className="space-y-6">
              {/* Progress Panel */}
              <div className="bg-[#1c1c1c] border border-hairline p-5 rounded-xl">
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-3xl font-extrabold tracking-tight text-white">{credits}</span>
                  <span className="text-sm font-semibold text-ink-muted">/ {maxCredits} credits available</span>
                </div>
                {/* Glowing Progress Bar */}
                <div className="w-full h-2 bg-hairline rounded-full overflow-hidden relative">
                  <div
                    className="h-full bg-gradient-to-r from-accent-blue to-gradient-violet rounded-full transition-all duration-700 ease-out shadow-[0_0_12px_rgba(0,153,255,0.4)]"
                    style={{ width: `${Math.min(100, Math.max(0, (credits / maxCredits) * 100))}%` }}
                  ></div>
                </div>
                <p className="text-[11px] text-[#999999] mt-3 leading-normal">
                  Credits reset automatically at the start of your billing cycle.
                </p>
              </div>

              {/* Usage History */}
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#999999] block mb-3">Recent Activity</span>
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-1.5 border-b border-hairline/40">
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-white">Visual Compiler Sync</span>
                      <span className="text-[10px] text-ink-muted">Dual-Sync core update</span>
                    </div>
                    <span className="text-xs font-bold text-accent-blue">-1 credit</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-hairline/40">
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-white">Self-healing compilation</span>
                      <span className="text-[10px] text-ink-muted">AST parser adjustment</span>
                    </div>
                    <span className="text-xs font-bold text-accent-blue">-1 credit</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5">
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-white">Deployment Deploy</span>
                      <span className="text-[10px] text-ink-muted">Edge node bundle upload</span>
                    </div>
                    <span className="text-xs font-bold text-accent-blue">-1 credit</span>
                  </div>
                </div>
              </div>

              {/* Upgrade CTA */}
              <button
                onClick={() => {
                  setIsCreditsModalOpen(false);
                  setIsOpen(false);
                  const element = document.getElementById("pricing");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="w-full py-3 px-4 rounded-full font-bold text-sm text-white bg-gradient-to-r from-accent-blue to-gradient-violet hover:from-accent-blue hover:to-gradient-violet/90 transition-all shadow-[0_0_20px_rgba(0,153,255,0.25)] hover:shadow-[0_0_30px_rgba(0,153,255,0.4)] active:scale-[0.98] cursor-pointer text-center flex items-center justify-center gap-1.5"
              >
                <Sparkles className="h-4 w-4 text-white animate-pulse" />
                Upgrade Plan
              </button>
            </div>
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
                  handleOpenSignIn();
                }}
                className="w-full flex justify-center items-center rounded-full bg-surface-1 py-3 font-sans text-sm font-semibold text-white border border-hairline transition-all hover:bg-surface-2 cursor-pointer active:scale-[0.98]"
              >
                Sign in
              </button>
              <button
                onClick={() => {
                  setIsOpen(false);
                  handleOpenSignUp();
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
