"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Eye, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroScene } from "./hero-scene";

const ROLES = [
  "Creative Developer",
  "Website Builder",
  "Mobile App Builder",
  "AI Automation Engineer",
  "Full Stack Developer",
];

const CODE_SNIPPETS = [
  "const magic = await buildExperience()",
  "deploy({ quality: 'awwwards' })",
  "ai.automate(workflow)",
  "<Motion.div animate />",
  "git commit -m 'ship it'",
];

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const role = ROLES[roleIndex];
    if (charIndex < role.length) {
      const t = setTimeout(() => {
        setTyped(role.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, 60);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setCharIndex(0);
      setTyped("");
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }, 2200);
    return () => clearTimeout(t);
  }, [charIndex, roleIndex]);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <HeroScene />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-black/40 via-transparent to-brand-black" />

      {CODE_SNIPPETS.map((snippet, i) => (
        <div
          key={snippet}
          className="pointer-events-none absolute hidden rounded-lg border border-white/10 bg-black/50 px-3 py-2 font-mono text-xs text-brand-cyan/70 backdrop-blur-md opacity-50 lg:block"
          style={{
            left: `${10 + (i % 3) * 28}%`,
            top: `${20 + i * 12}%`,
          }}
        >
          {snippet}
        </div>
      ))}

      <div className="container-tight relative z-10 section-padding !pt-8">
        <div className="grid items-center gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <motion.div
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/70 backdrop-blur-md"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="h-3.5 w-3.5 text-brand-cyan" />
              Available for premium projects
            </motion.div>

            <p className="font-body text-lg text-white/60 md:text-xl">Hi, I&apos;m</p>
            <h1 className="mt-2 font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
              <span className="text-gradient-animated">JIDEX</span>
              <br />
              <span className="text-white">CODER</span>
            </h1>

            <div className="mt-6 flex h-10 items-center font-display text-xl text-white/80 sm:text-2xl md:text-3xl">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-brand-cyan"
                >
                  {typed}
                  <span className="ml-0.5 inline-block h-6 w-0.5 animate-pulse bg-brand-cyan align-middle sm:h-8" />
                </motion.span>
              </AnimatePresence>
            </div>

            <p className="mt-6 max-w-xl text-base text-white/50 md:text-lg">
              I craft unforgettable digital experiences — websites, mobile apps, AI systems, and SaaS products that feel expensive and convert.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/#projects">
                  <Eye className="h-4 w-4" /> View Projects
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/#contact">Hire Me</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="/resume" target="_blank" rel="noopener noreferrer">
                  <Download className="h-4 w-4" /> Resume
                </a>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <Link href="/demos/luxora-banking">
                  <Play className="h-4 w-4" /> Watch Demo
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[440px] rounded-[28px] border border-white/10 bg-white/[0.04] p-3 shadow-[0_35px_90px_rgba(3,7,18,0.7)] backdrop-blur-xl">
              <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-brand-cyan/15 via-transparent to-brand-purple/20" />
              <div className="relative h-[420px] overflow-hidden rounded-[22px] border border-white/10 bg-black/40 sm:h-[520px]">
                <Image
                  src="/jide-portrait.jpg"
                  alt="Jide Coder portrait"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  priority
                  className="z-10 object-cover object-[center_28%] saturate-[0.98] contrast-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 border-t border-white/10 bg-black/30 px-5 py-4 backdrop-blur-md">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.28em] text-brand-cyan/80">Creative Developer</p>
                    <p className="mt-1 font-display text-xl font-semibold text-white">Jide Coder</p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-cyan/40 bg-brand-cyan/10 text-brand-cyan shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                    <Sparkles className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/30"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Scroll
        <div className="h-10 w-px bg-gradient-to-b from-brand-cyan to-transparent" />
      </motion.div>
    </section>
  );
}
