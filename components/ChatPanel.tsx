"use client";

import React, { useState, useRef, useEffect } from "react";
import { Message, StatusStep } from "@/types/workspace";
import {
  Sparkles,
  Terminal,
  ChevronRight,
  Bot,
  User as UserIcon,
  Paperclip,
  Send,
  X,
  Loader2,
} from "lucide-react";

export interface ChatPanelProps {
  messages: Message[];
  onSendMessage: (text: string, image?: string) => void;
  isGenerating?: boolean;
  statusLogs?: (StatusStep | string)[];
}

export function ChatPanel({
  messages,
  onSendMessage,
  isGenerating = false,
  statusLogs = [],
}: ChatPanelProps) {
  const [inputMessage, setInputMessage] = useState("");
  const [attachedImage, setAttachedImage] = useState<string | null>(null);
  const [showLogs, setShowLogs] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isGenerating, statusLogs]);

  const handleSend = () => {
    if ((!inputMessage.trim() && !attachedImage) || isGenerating) return;
    onSendMessage(inputMessage.trim(), attachedImage || undefined);
    setInputMessage("");
    setAttachedImage(null);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setAttachedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div data-lenis-prevent className="h-full flex flex-col justify-between bg-[#0c0c0e] overflow-hidden select-none">
      {/* Chat Panel Header */}
      <div className="h-12 border-b border-white/10 px-4 flex items-center justify-between bg-[#121214] shrink-0">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-lg bg-blue-500/15 border border-blue-500/30 flex items-center justify-center">
            <Sparkles className="h-3.5 w-3.5 text-blue-400 animate-pulse" />
          </div>
          <span className="text-xs font-bold text-white tracking-tight">AI Builder Chat</span>
        </div>

        {statusLogs.length > 0 && (
          <button
            onClick={() => setShowLogs(!showLogs)}
            type="button"
            className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border transition-all flex items-center gap-1.5 cursor-pointer ${
              showLogs
                ? "bg-blue-500/20 text-blue-400 border-blue-500/30 shadow-sm shadow-blue-500/10"
                : "bg-white/5 text-zinc-400 border-white/10 hover:text-white hover:bg-white/10"
            }`}
          >
            <Terminal className="h-3 w-3" />
            <span>{showLogs ? "Hide Logs" : "View Logs"}</span>
            {isGenerating && (
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-ping" />
            )}
          </button>
        )}
      </div>

      {/* Compiler / Status Logs Overlay (Togglable) */}
      {showLogs && (
        <div className="bg-[#09090b] border-b border-white/10 p-3 font-mono text-[11px] leading-relaxed text-zinc-400 max-h-[160px] overflow-y-auto space-y-1.5">
          {statusLogs.map((log, index) => {
            const label = typeof log === "string" ? log : log.label;
            return (
              <div key={index} className="flex items-start gap-1.5">
                <ChevronRight className="h-3 w-3 text-blue-400 shrink-0 mt-0.5" />
                <span className="text-zinc-300">{label}</span>
              </div>
            );
          })}
          {isGenerating && (
            <div className="flex items-center gap-2 text-blue-400 mt-2 font-medium">
              <Loader2 className="h-3 w-3 animate-spin" />
              <span>AI Agent compiling workspace AST...</span>
            </div>
          )}
        </div>
      )}

      {/* Chat Messages Feed */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4 font-sans text-xs">
        {messages.map((msg, index) => {
          const isUser = msg.role === "user";
          return (
            <div
              key={msg.id || index}
              className={`flex gap-3 ${isUser ? "justify-end" : "justify-start"}`}
            >
              {!isUser && (
                <div className="h-7 w-7 rounded-full bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                  <Bot className="h-4 w-4" />
                </div>
              )}

              <div
                className={`max-w-[85%] rounded-2xl p-3.5 shadow-lg leading-relaxed ${
                  isUser
                    ? "bg-blue-600 text-white rounded-br-none"
                    : "bg-[#161619] border border-white/10 text-zinc-200 rounded-bl-none"
                }`}
              >
                {msg.imageUrl && (
                  <div className="mb-2.5 rounded-lg overflow-hidden border border-white/10 max-h-48">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={msg.imageUrl}
                      alt="Uploaded attachment"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <p className="whitespace-pre-wrap text-[12.5px] select-text">
                  {msg.content}
                </p>
                {msg.timestamp && (
                  <span
                    className={`text-[10px] block text-right mt-1.5 ${
                      isUser ? "text-blue-100/70" : "text-zinc-500"
                    }`}
                  >
                    {msg.timestamp}
                  </span>
                )}
              </div>

              {isUser && (
                <div className="h-7 w-7 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white shrink-0 mt-0.5">
                  <UserIcon className="h-4 w-4" />
                </div>
              )}
            </div>
          );
        })}

        {isGenerating && (
          <div className="flex gap-3 justify-start items-center">
            <div className="h-7 w-7 rounded-full bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
              <Loader2 className="h-4 w-4 animate-spin" />
            </div>
            <div className="rounded-2xl p-3 bg-[#161619] border border-white/10 text-zinc-400 text-xs flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse"></span>
              Generating updates...
            </div>
          </div>
        )}

        <div ref={chatEndRef} />
      </div>

      {/* Input Panel (ChatGPT/Gemini Style) */}
      <div className="p-3 border-t border-white/10 bg-[#121214] shrink-0">
        {/* Attached Image Preview Chip */}
        {attachedImage && (
          <div className="mb-2 relative inline-block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={attachedImage}
              alt="Preview"
              className="h-14 w-14 object-cover rounded-lg border border-blue-500/50 shadow-md"
            />
            <button
              onClick={() => setAttachedImage(null)}
              type="button"
              className="absolute -top-1.5 -right-1.5 bg-black text-white rounded-full p-0.5 border border-white/20 hover:bg-red-600 transition-all cursor-pointer"
            >
              <X className="h-3 w-3" />
            </button>
          </div>
        )}

        <div className="bg-[#18181c] border border-white/10 focus-within:border-blue-500/40 rounded-xl p-2.5 transition-all flex flex-col justify-between gap-2 shadow-inner">
          <textarea
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder="Ask webIQ Agent to edit layout, add features, or upload mockups..."
            className="w-full bg-transparent text-white text-xs placeholder-zinc-500 focus:outline-none resize-none min-h-[44px] max-h-[100px] leading-relaxed select-text"
            rows={2}
          />

          <div className="flex items-center justify-between pt-1 border-t border-white/5">
            <div className="flex items-center gap-1.5">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageUpload}
                accept="image/*"
                className="hidden"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                type="button"
                className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-white/5 transition-all cursor-pointer"
                title="Attach Image / Mockup"
              >
                <Paperclip className="h-4 w-4" />
              </button>
            </div>

            <button
              onClick={handleSend}
              disabled={(!inputMessage.trim() && !attachedImage) || isGenerating}
              type="button"
              className="h-7 w-7 rounded-full bg-white text-black hover:bg-zinc-200 disabled:opacity-30 disabled:pointer-events-none transition-all flex items-center justify-center cursor-pointer shadow-md"
            >
              <Send className="h-3.5 w-3.5 fill-black" />
            </button>
          </div>
        </div>
        <p className="text-[10px] text-zinc-500 text-center mt-2">
          webIQ Agent can make mistakes. Verify component code outputs.
        </p>
      </div>
    </div>
  );
}

export default ChatPanel;
