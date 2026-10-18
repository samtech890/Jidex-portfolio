"use client";

import { motion } from "framer-motion";
import { ExternalLink, GitBranch, Star } from "lucide-react";
import { SITE } from "@/lib/constants";

const REPOS = [
  {
    name: "luxora-banking",
    description: "Private wealth banking platform with biometric MFA and AI insights.",
    language: "TypeScript",
    stars: 128,
    forks: 24,
  },
  {
    name: "aether-canvas",
    description: "AI image studio with infinite canvas and brand style packs.",
    language: "TypeScript",
    stars: 312,
    forks: 41,
  },
  {
    name: "hirecraft-ai",
    description: "ATS-optimized resume builder with streaming LLM generation.",
    language: "TypeScript",
    stars: 89,
    forks: 17,
  },
  {
    name: "jidex-ui",
    description: "Internal design system tokens, motion presets, and glass primitives.",
    language: "TypeScript",
    stars: 56,
    forks: 8,
  },
];

export function LatestRepos() {
  return (
    <section className="relative section-padding pt-0">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 flex items-end justify-between gap-4"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-brand-cyan">Repositories</p>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl">
              Latest on <span className="text-gradient">GitHub</span>
            </h2>
          </div>
          <a
            href={SITE.github}
            target="_blank"
            rel="noreferrer"
            className="hidden text-sm text-brand-cyan hover:underline sm:inline-flex items-center gap-1"
          >
            View profile <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {REPOS.map((repo, i) => (
            <motion.a
              key={repo.name}
              href={`${SITE.github}/${repo.name}`}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass block rounded-2xl p-5"
              data-cursor="hover"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-lg font-semibold text-white">{repo.name}</h3>
                <GitBranch className="h-4 w-4 text-white/30" />
              </div>
              <p className="mt-2 text-sm text-white/50">{repo.description}</p>
              <div className="mt-4 flex items-center gap-4 text-xs text-white/40">
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-brand-blue" />
                  {repo.language}
                </span>
                <span className="flex items-center gap-1">
                  <Star className="h-3.5 w-3.5" /> {repo.stars}
                </span>
                <span>{repo.forks} forks</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
