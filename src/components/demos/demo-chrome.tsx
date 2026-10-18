"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/projects";

export function DemoChrome({ project, children }: { project: Project; children: React.ReactNode }) {
  const url = `https://demo.jidexcoder.com${project.liveUrl.replace("/demos", "")}`;

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <div className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3">
          <div className="flex min-w-0 flex-1 items-center gap-3">
            <Link
              href="/#projects"
              className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70 hover:text-white"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Back
            </Link>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5">
                <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
                <span className="truncate font-mono text-[11px] text-white/55">{url}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href={`/projects/${project.slug}`}
              className="hidden rounded-lg border border-white/10 px-3 py-1.5 text-xs text-white/70 hover:text-white sm:inline-flex"
            >
              Case Study
            </Link>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 rounded-lg border border-white/10 px-3 py-1.5 text-xs text-white/70 hover:text-white"
            >
              <Github className="h-3.5 w-3.5" /> Code
            </a>
            <span className="inline-flex items-center gap-1 rounded-lg bg-emerald-500/15 px-3 py-1.5 text-xs font-medium text-emerald-300">
              <ExternalLink className="h-3.5 w-3.5" /> Live site
            </span>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
