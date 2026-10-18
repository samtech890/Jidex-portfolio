"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Bot, MessageCircle, Send, Sparkles, X } from "lucide-react";
import { SITE } from "@/lib/constants";

type ChatMessage = {
  role: "assistant" | "visitor";
  text: string;
};

const QUICK_PROMPTS = ["What services do you offer?", "Show me your projects", "How can I get in touch?"];

function getReply(message: string) {
  const query = message.toLowerCase();

  if (/\b(hi|hello|hey|good morning|good afternoon)\b/.test(query)) {
    return "Hey! I can tell you about Jide’s services, projects, and how to get in touch. What would you like to know?";
  }
  if (/service|offer|build|develop|website|app|chatbot|automation/.test(query)) {
    return "Jide builds premium websites and landing pages, mobile apps, dashboards, AI chatbots, workflow automations, and SaaS products. Take a look at the Services section for the full list.";
  }
  if (/project|work|portfolio|case stud/.test(query)) {
    return "The portfolio features work across fintech, healthcare, marketplaces, AI, and creative tools. Visit the Projects section to explore the case studies and live demos.";
  }
  if (/price|pricing|cost|budget|quote/.test(query)) {
    return "Project pricing depends on the scope, features, and timeline. Share a few details through the contact form and Jide can put together a suitable estimate.";
  }
  if (/contact|email|hire|reach|talk|book/.test(query)) {
    return `You can reach Jide at ${SITE.email}, or use the contact form on this page to share what you’re planning.`;
  }
  if (/technology|tech stack|stack|react|next|typescript/.test(query)) {
    return "Jide works with React, Next.js, TypeScript, Node.js, Python, React Native, Flutter, and modern AI APIs. The Tech Stack section has more details.";
  }
  if (/where|location|based/.test(query)) {
    return `Jide works remotely and serves clients across regions. The listed locations are ${SITE.location}.`;
  }

  return "I can help with Jide’s services, projects, pricing, tech stack, or contact details. Try one of the suggested questions, or send a note through the contact form.";
}

export function PortfolioChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      text: "Hi! I’m Jide’s portfolio assistant. Ask me about services, projects, or starting a conversation.",
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [messages, isOpen]);

  function sendMessage(message: string) {
    const text = message.trim();
    if (!text) return;
    setMessages((current) => [
      ...current,
      { role: "visitor", text },
      { role: "assistant", text: getReply(text) },
    ]);
    setDraft("");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    sendMessage(draft);
  }

  return (
    <div className="fixed bottom-5 right-4 z-[70] flex flex-col items-end gap-3 sm:bottom-7 sm:right-7">
      <AnimatePresence>
        {isOpen && (
          <motion.section
            aria-label="Portfolio chat assistant"
            aria-live="polite"
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="flex h-[min(560px,calc(100dvh-110px))] w-[min(390px,calc(100vw-32px))] flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#090b12]/95 shadow-[0_24px_90px_rgba(0,0,0,0.65)] backdrop-blur-2xl"
          >
            <header className="flex items-center justify-between border-b border-white/10 bg-gradient-to-r from-brand-purple/20 via-brand-blue/10 to-brand-cyan/10 px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-brand-cyan/30 bg-brand-cyan/10 text-brand-cyan">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-display text-sm font-semibold text-white">Jide’s Assistant</p>
                  <p className="mt-0.5 flex items-center gap-1.5 text-xs text-white/45">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Here to help
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-xl p-2 text-white/50 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
                aria-label="Close chat"
              >
                <X className="h-4 w-4" />
              </button>
            </header>

            <div className="flex-1 space-y-4 overflow-y-auto px-4 py-5" role="log" aria-label="Chat messages">
              {messages.map((message, index) => (
                <div key={`${message.role}-${index}`} className={`flex ${message.role === "visitor" ? "justify-end" : "justify-start"}`}>
                  <p
                    className={`max-w-[88%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      message.role === "visitor"
                        ? "rounded-br-md bg-gradient-to-r from-brand-purple to-brand-blue text-white"
                        : "rounded-bl-md border border-white/[0.07] bg-white/[0.05] text-white/75"
                    }`}
                  >
                    {message.text}
                  </p>
                </div>
              ))}
              {messages.length === 1 && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {QUICK_PROMPTS.map((prompt) => (
                    <button
                      key={prompt}
                      type="button"
                      onClick={() => sendMessage(prompt)}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-left text-xs text-white/60 transition hover:border-brand-cyan/30 hover:text-brand-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="border-t border-white/10 px-4 pb-4 pt-3">
              <div className="mb-3 flex items-center justify-between text-xs">
                <a className="inline-flex items-center gap-1 text-white/45 transition hover:text-brand-cyan" href="/#projects" onClick={() => setIsOpen(false)}>
                  Explore projects <ArrowUpRight className="h-3 w-3" />
                </a>
                <a className="inline-flex items-center gap-1 text-white/45 transition hover:text-brand-cyan" href={`mailto:${SITE.email}`}>
                  Email Jide <ArrowUpRight className="h-3 w-3" />
                </a>
              </div>
              <form onSubmit={handleSubmit} className="flex items-center gap-2 rounded-2xl border border-white/10 bg-black/30 p-2 focus-within:border-brand-cyan/40">
                <input
                  value={draft}
                  onChange={(event) => setDraft(event.target.value)}
                  placeholder="Ask me anything..."
                  aria-label="Type a message"
                  className="min-w-0 flex-1 bg-transparent px-2 py-2 text-sm text-white outline-none placeholder:text-white/30"
                />
                <button
                  type="submit"
                  disabled={!draft.trim()}
                  aria-label="Send message"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-purple to-brand-cyan text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
              <p className="mt-2 text-center text-[10px] text-white/25">Portfolio guide · Quick answers, no sign-in</p>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        aria-label={isOpen ? "Close portfolio chat" : "Open portfolio chat"}
        aria-expanded={isOpen}
        className="group flex h-14 items-center gap-2 rounded-full border border-brand-cyan/30 bg-[#0b1018]/95 px-4 text-white shadow-[0_10px_40px_rgba(6,182,212,0.2)] backdrop-blur-xl transition hover:border-brand-cyan/60 hover:shadow-[0_10px_45px_rgba(6,182,212,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
      >
        <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-purple to-brand-cyan text-white">
          {isOpen ? <X className="h-4 w-4" /> : <MessageCircle className="h-4 w-4" />}
          {!isOpen && <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-[#0b1018] bg-emerald-400" />}
        </span>
        <span className="text-sm font-medium">Let&apos;s chat</span>
        {!isOpen && <Sparkles className="h-3.5 w-3.5 text-brand-cyan/70 transition group-hover:text-brand-cyan" />}
      </motion.button>
    </div>
  );
}