"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { SITE } from "@/lib/constants";
import { projects } from "@/data/projects";
import { techStack } from "@/data/content";

const COMMANDS: Record<string, string[]> = {
  help: [
    "Available commands:",
    "  help       — show this list",
    "  about      — who is JIDEX CODER",
    "  projects   — list featured projects",
    "  skills     — tech stack overview",
    "  contact    — get in touch",
    "  resume     — resume download info",
    "  clear      — clear terminal",
  ],
  about: [
    "JIDEX CODER — Creative Developer & AI Automation Engineer.",
    "7+ years building premium websites, mobile apps, and AI products.",
    "Specializing in experiences that feel expensive and convert.",
  ],
  projects: projects.slice(0, 6).map((p) => `• ${p.title} — ${p.tagline}`),
  skills: [
    "Frontend: React, Next.js, TypeScript, Tailwind, Framer Motion",
    "Mobile: React Native, Expo, Flutter",
    "Backend: Node, Python, FastAPI, PostgreSQL, MongoDB",
    "AI: OpenAI, Claude, Gemini, RAG, Agents",
    `Stack size: ${techStack.length} core technologies`,
  ],
  contact: [
    `Email: ${SITE.email}`,
    `Discord: ${SITE.discord}`,
    `Calendly: ${SITE.calendly}`,
    "Type 'resume' for CV info.",
  ],
  resume: [
    "Resume available at /resume.pdf",
    "Or request a tailored PDF via contact form.",
  ],
};

export function InteractiveTerminal() {
  const [lines, setLines] = useState<string[]>([
    "JIDEX CODER terminal v1.0",
    "Type 'help' to get started.",
    "",
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  const run = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const next = [...lines, `❯ ${cmd}`];
    if (!trimmed) {
      setLines(next);
      return;
    }
    if (trimmed === "clear") {
      setLines([]);
      return;
    }
    const output = COMMANDS[trimmed];
    if (output) {
      setLines([...next, ...output, ""]);
    } else {
      setLines([...next, `Command not found: ${trimmed}. Type 'help'.`, ""]);
    }
  };

  return (
    <section className="relative section-padding pt-0">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-3xl border border-white/10 bg-black/80 shadow-neon"
          onClick={() => inputRef.current?.focus()}
        >
          <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-red-500/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <span className="h-3 w-3 rounded-full bg-green-500/80" />
            <span className="ml-3 font-mono text-xs text-white/40">jidex@portfolio:~</span>
          </div>
          <div className="h-72 overflow-y-auto p-4 font-mono text-sm text-brand-cyan/90" data-lenis-prevent>
            {lines.map((line, i) => (
              <div key={i} className={line.startsWith("❯") ? "text-white" : ""}>
                {line || "\u00A0"}
              </div>
            ))}
            <div className="flex items-center gap-2">
              <span className="text-white">❯</span>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    run(input);
                    setInput("");
                  }
                }}
                className="flex-1 bg-transparent text-white outline-none"
                aria-label="Terminal input"
                autoComplete="off"
                spellCheck={false}
              />
            </div>
            <div ref={bottomRef} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
