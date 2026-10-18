"use client";

import Link from "next/link";
import { ArrowUpRight, ExternalLink, Github, MonitorSmartphone } from "lucide-react";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const pastProjects = [
  { title: "Gratitude Ride Lux", url: "https://gratitude-ride-lux.vercel.app/", kind: "Ride experience", color: "from-amber-400/25 to-orange-950/70" },
  { title: "Living Interface Style", url: "https://living-interface-style.vercel.app/", kind: "Interface design", color: "from-emerald-400/25 to-teal-950/70" },
  { title: "Cyber Interface Seven", url: "https://cyber-interface-seven.vercel.app/", kind: "Digital experience", color: "from-cyan-400/25 to-blue-950/70" },
  { title: "Sample Website Phi Two", url: "https://sample-website-phi-two.vercel.app/", kind: "Website", color: "from-violet-400/25 to-indigo-950/70" },
  { title: "Two Website Style", url: "https://two-website-style.vercel.app/", kind: "Website design", color: "from-pink-400/25 to-rose-950/70" },
  { title: "Highway Rush Game", url: "https://highway-rush-game.vercel.app/", kind: "Browser game", color: "from-red-400/25 to-slate-950/70" },
  { title: "Personal Web Showcase Space", url: "https://personal-web-showcase-space.vercel.app/", kind: "Portfolio showcase", color: "from-sky-400/25 to-slate-950/70" },
  { title: "Sam Jay Showcase Space 15", url: "https://sam-jay-showcase-space-15.vercel.app/", kind: "Portfolio showcase", color: "from-fuchsia-400/25 to-purple-950/70" },
];

function DeviceMockup({
  gradient,
  accent,
  logo,
  href,
}: {
  gradient: string;
  accent: string;
  logo: string;
  href: string;
}) {
  return (
    <Link href={href} className="relative mx-auto block h-48 w-full max-w-sm" data-cursor="hover">
      <div
        className={`absolute inset-x-6 top-4 h-36 rounded-xl bg-gradient-to-br ${gradient} border border-white/10 shadow-2xl transition group-hover:scale-[1.02]`}
      >
        <div className="flex h-6 items-center gap-1.5 rounded-t-xl bg-black/40 px-3">
          <span className="h-1.5 w-1.5 rounded-full bg-red-400/80" />
          <span className="h-1.5 w-1.5 rounded-full bg-yellow-400/80" />
          <span className="h-1.5 w-1.5 rounded-full bg-green-400/80" />
          <span className="ml-2 truncate text-[9px] text-white/40">{href}</span>
        </div>
        <div className="flex h-[calc(100%-1.5rem)] flex-col items-center justify-center gap-2">
          <span className="text-4xl">{logo}</span>
          <span className="inline-flex items-center gap-1 rounded-full bg-black/40 px-2 py-0.5 text-[10px] text-emerald-300">
            <ExternalLink className="h-3 w-3" /> Open live site
          </span>
        </div>
      </div>
      <div
        className="absolute bottom-0 right-4 h-28 w-14 rounded-2xl border-2 border-white/20 bg-black/80 shadow-xl"
        style={{ boxShadow: `0 0 30px ${accent}44` }}
      >
        <div className="mx-auto mt-1.5 h-1 w-6 rounded-full bg-white/20" />
        <div className={`mx-1 mt-2 h-20 rounded-lg bg-gradient-to-br ${gradient} opacity-80`} />
      </div>
    </Link>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="relative section-padding">
      <div className="container-tight">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-cyan">Projects</p>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-6xl">
              Selected work that <span className="text-gradient">defines the bar</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-white/45">
            Click <span className="text-white">Live Demo</span> on any project to open a real interactive website preview.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="group glass overflow-hidden rounded-3xl transition-transform duration-300 hover:-translate-y-1"
              data-cursor="hover"
            >
              <div className={`relative bg-gradient-to-br ${project.coverGradient} p-6 pb-2`}>
                <DeviceMockup
                  gradient={project.coverGradient}
                  accent={project.accentColor}
                  logo={project.logo}
                  href={project.liveUrl}
                />
                <div className="absolute right-4 top-4 flex gap-2">
                  <Badge>{project.industry}</Badge>
                  <Badge>{project.year}</Badge>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-white">{project.title}</h3>
                    <p className="mt-1 text-sm text-brand-cyan">{project.tagline}</p>
                  </div>
                  <MonitorSmartphone className="h-5 w-5 text-white/30" />
                </div>
                <p className="mt-4 line-clamp-2 text-sm text-white/50">{project.description}</p>
                <p className="mt-3 text-xs text-white/35">Client: {project.client}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((t) => (
                    <span key={t} className="rounded-lg bg-white/5 px-2 py-1 text-[10px] text-white/50">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-4 gap-2">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="rounded-xl bg-white/[0.03] p-2 text-center">
                      <p className="text-sm font-semibold text-white">{m.value}</p>
                      <p className="text-[9px] text-white/35">{m.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  <Button asChild size="sm" variant="default">
                    <Link href={project.liveUrl}>
                      <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                    </Link>
                  </Button>
                  <Button asChild size="sm" variant="secondary">
                    <Link href={`/projects/${project.slug}`}>
                      Case Study <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </Button>
                  <Button asChild variant="ghost" size="sm">
                    <a href={project.githubUrl} target="_blank" rel="noreferrer">
                      <Github className="h-3.5 w-3.5" /> GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20">
          <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-brand-cyan">More work</p>
              <h3 className="mt-2 font-display text-3xl font-bold text-white md:text-4xl">Past projects</h3>
            </div>
            <p className="max-w-md text-sm text-white/45">A few more websites and interactive experiences. Open any project to view it live.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pastProjects.map((project) => (
              <a
                key={project.url}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden rounded-2xl border border-white/10 bg-[#080b12] transition duration-200 hover:-translate-y-1 hover:border-brand-cyan/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
              >
                <div className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${project.color}`}>
                  <div className="absolute inset-x-0 top-0 z-10 flex h-7 items-center gap-1.5 border-b border-white/10 bg-[#090b12]/95 px-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-400/80" />
                    <span className="h-1.5 w-1.5 rounded-full bg-yellow-400/80" />
                    <span className="h-1.5 w-1.5 rounded-full bg-green-400/80" />
                    <span className="ml-2 truncate font-mono text-[9px] text-white/40">{new URL(project.url).hostname}</span>
                    <span className="ml-auto inline-flex items-center gap-1 text-[9px] text-brand-cyan opacity-0 transition-opacity group-hover:opacity-100">
                      Open site <ExternalLink className="h-2.5 w-2.5" />
                    </span>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 top-7 overflow-hidden">
                    <iframe
                      src={project.url}
                      title={`${project.title} live website preview`}
                      loading="lazy"
                      tabIndex={-1}
                      aria-hidden="true"
                      referrerPolicy="strict-origin-when-cross-origin"
                      sandbox="allow-forms allow-scripts allow-same-origin allow-popups"
                      className="pointer-events-none absolute left-0 top-0 h-[400%] w-[400%] origin-top-left scale-[0.25] border-0"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-70 transition-opacity group-hover:opacity-30" />
                  </div>
                </div>
                <div className="flex min-h-[84px] items-center justify-between gap-3 px-4 py-3.5">
                  <span className="min-w-0">
                    <span className="block text-[10px] uppercase tracking-[0.22em] text-white/45">{project.kind}</span>
                    <span className="mt-1 block font-display text-base font-semibold leading-tight text-white">{project.title}</span>
                  </span>
                  <ExternalLink className="h-4 w-4 shrink-0 text-brand-cyan transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
