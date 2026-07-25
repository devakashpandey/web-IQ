"use client";

import { X, Zap, Sparkles } from "lucide-react";

interface PlanModalProps {
  isOpen: boolean;
  onClose: () => void;
  credits: number;
  maxCredits: number;
  planName?: string;
  onUpgradeClick?: () => void;
}

export default function PlanModal({
  isOpen,
  onClose,
  credits,
  maxCredits,
  planName,
  onUpgradeClick,
}: PlanModalProps) {
  if (!isOpen) return null;

  const handleUpgrade = () => {
    if (onUpgradeClick) {
      onUpgradeClick();
    } else {
      onClose();
      const element = document.getElementById("pricing");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div
      className="fixed inset-0 z-[110] flex items-center justify-center bg-black/80 backdrop-blur-md pointer-events-auto p-4"
      onClick={onClose}
    >
      <div
        className="relative border border-hairline rounded-2xl bg-[#141414] p-6 md:p-8 max-w-md w-full shadow-2xl animate-in zoom-in-95 duration-200 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
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
          {planName && (
            <span className="text-[10px] font-bold uppercase tracking-wider bg-accent-blue/15 text-accent-blue border border-accent-blue/30 px-2.5 py-1 rounded-full animate-pulse">
              {planName} Plan
            </span>
          )}
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
            onClick={handleUpgrade}
            className="w-full py-3 px-4 rounded-full font-bold text-sm text-white bg-gradient-to-r from-accent-blue to-gradient-violet hover:from-accent-blue hover:to-gradient-violet/90 transition-all shadow-[0_0_20px_rgba(0,153,255,0.25)] hover:shadow-[0_0_30px_rgba(0,153,255,0.4)] active:scale-[0.98] cursor-pointer text-center flex items-center justify-center gap-1.5"
          >
            <Sparkles className="h-4 w-4 text-white animate-pulse" />
            Upgrade Plan
          </button>
        </div>
      </div>
    </div>
  );
}
