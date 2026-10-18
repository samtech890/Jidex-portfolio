"use client";

import { motion } from "framer-motion";
import { GitCommit, GitFork, Star } from "lucide-react";

const ACTIVITY = [
  { type: "commit", repo: "jidex/luxora-banking", message: "feat: biometric MFA flow", time: "2h ago" },
  { type: "star", repo: "vercel/next.js", message: "Starred repository", time: "5h ago" },
  { type: "commit", repo: "jidex/aether-canvas", message: "perf: GPU queue fairness", time: "1d ago" },
  { type: "fork", repo: "pmndrs/react-three-fiber", message: "Forked repository", time: "2d ago" },
  { type: "commit", repo: "jidex/hirecraft-ai", message: "feat: streaming resume gen", time: "3d ago" },
];

const CONTRIBUTION = [
  0, 1, 2, 3, 1, 0, 4, 2, 1, 3, 0, 2, 4, 3, 1, 0, 2, 3, 4, 1, 0, 2, 1, 3, 4, 2, 0, 1,
  3, 2, 4, 0, 1, 2, 3, 1, 4, 0, 2, 3, 1, 0, 4, 2, 3, 1, 0, 2, 4, 3, 1, 2, 0, 4, 1, 3,
  2, 0, 1, 4, 3, 2, 1, 0, 3, 4, 2, 1, 0, 3, 2, 4, 1, 0, 2, 3, 1, 4, 0, 2, 3, 1, 4, 0,
];

export function GithubActivity() {
  return (
    <section className="relative section-padding pt-0">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-brand-cyan">GitHub</p>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl">
            Live coding <span className="text-gradient">pulse</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="glass rounded-3xl p-6">
            <h3 className="font-display text-lg font-semibold">Recent activity</h3>
            <ul className="mt-4 space-y-3">
              {ACTIVITY.map((item) => (
                <li key={item.message + item.time} className="flex gap-3 text-sm">
                  <div className="mt-0.5 text-brand-cyan">
                    {item.type === "commit" && <GitCommit className="h-4 w-4" />}
                    {item.type === "star" && <Star className="h-4 w-4" />}
                    {item.type === "fork" && <GitFork className="h-4 w-4" />}
                  </div>
                  <div className="flex-1">
                    <p className="text-white/80">{item.message}</p>
                    <p className="text-xs text-white/35">
                      {item.repo} · {item.time}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass rounded-3xl p-6">
            <h3 className="font-display text-lg font-semibold">Contribution graph</h3>
            <div className="mt-4 grid grid-cols-12 gap-1.5">
              {CONTRIBUTION.map((level, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-sm"
                  style={{
                    background:
                      level === 0
                        ? "rgba(255,255,255,0.05)"
                        : `rgba(124, 58, 237, ${0.2 + level * 0.2})`,
                  }}
                  title={`${level} contributions`}
                />
              ))}
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              {[
                { label: "Repos", value: "1.2k" },
                { label: "Commits", value: "3.8k" },
                { label: "PRs", value: "640" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-xl bg-white/5 p-3">
                  <p className="font-display text-xl font-bold text-white">{stat.value}</p>
                  <p className="text-[10px] text-white/40">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
