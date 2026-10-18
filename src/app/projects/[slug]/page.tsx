import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, ExternalLink, Github, Star } from "lucide-react";
import { getProject, projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project" };
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | JIDEX CODER`,
      description: project.description,
    },
  };
}

export default async function ProjectCaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const cs = project.caseStudy;

  return (
    <article className="pt-28">
      <div className={`relative overflow-hidden bg-gradient-to-br ${project.coverGradient}`}>
        <div className="container-tight section-padding !pb-16">
          <Link
            href="/#projects"
            className="mb-8 inline-flex items-center gap-2 text-sm text-white/50 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> Back to projects
          </Link>
          <div className="flex flex-wrap gap-2">
            <Badge>{project.industry}</Badge>
            <Badge>{project.completionDate}</Badge>
            <Badge>{project.client}</Badge>
          </div>
          <h1 className="mt-6 font-display text-4xl font-bold md:text-7xl">
            <span className="mr-3 text-5xl md:text-7xl">{project.logo}</span>
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/60">{project.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href={project.liveUrl}>
                <ExternalLink className="h-4 w-4" /> Open Live Website
              </Link>
            </Button>
            <Button asChild variant="secondary">
              <a href={project.githubUrl} target="_blank" rel="noreferrer">
                <Github className="h-4 w-4" /> GitHub
              </a>
            </Button>
          </div>

          {/* Avoid recursive iframe on demo routes — preview is the demo itself */}
          <div className="mt-10 overflow-hidden rounded-2xl border border-white/15 bg-black/40 shadow-2xl">
            <div className="flex items-center gap-2 border-b border-white/10 bg-black/50 px-4 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
              <span className="ml-3 truncate rounded-md bg-white/5 px-3 py-1 font-mono text-[11px] text-white/50">
                jidexcoder.com{project.liveUrl}
              </span>
            </div>
            <div className={`flex h-[280px] flex-col items-center justify-center gap-4 bg-gradient-to-br ${project.coverGradient}`}>
              <span className="text-5xl">{project.logo}</span>
              <p className="text-sm text-white/70">{project.title} — interactive live website</p>
              <Link
                href={project.liveUrl}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black"
              >
                <ExternalLink className="h-4 w-4" /> Launch website
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container-tight section-padding space-y-16">
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {project.metrics.map((m) => (
            <div key={m.label} className="glass rounded-2xl p-5 text-center">
              <p className="font-display text-3xl font-bold text-gradient">{m.value}</p>
              <p className="mt-1 text-sm text-white/45">{m.label}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-10 lg:grid-cols-2">
          <div className="glass rounded-3xl p-6 md:p-8">
            <h2 className="font-display text-2xl font-bold">Problem</h2>
            <p className="mt-3 text-white/55">{cs.problem}</p>
          </div>
          <div className="glass rounded-3xl p-6 md:p-8">
            <h2 className="font-display text-2xl font-bold">Research</h2>
            <p className="mt-3 text-white/55">{cs.research}</p>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {[
            { title: "Wireframes", body: cs.wireframes },
            { title: "Design Process", body: cs.design },
            { title: "Development", body: cs.development },
          ].map((block) => (
            <div key={block.title} className="glass rounded-3xl p-6">
              <h3 className="font-display text-xl font-semibold">{block.title}</h3>
              <p className="mt-3 text-sm text-white/50">{block.body}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold">Challenges</h2>
            <ul className="mt-4 space-y-3">
              {cs.challenges.map((c) => (
                <li key={c} className="glass rounded-xl px-4 py-3 text-sm text-white/55">
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold">Solutions</h2>
            <ul className="mt-4 space-y-3">
              {cs.solutions.map((s) => (
                <li key={s} className="glass rounded-xl px-4 py-3 text-sm text-white/55">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="glass rounded-3xl p-6 md:p-8">
          <h2 className="font-display text-2xl font-bold">Performance</h2>
          <p className="mt-3 text-white/55">{cs.performance}</p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold">Gallery</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`aspect-video rounded-2xl border border-white/10 bg-gradient-to-br ${project.coverGradient} flex items-center justify-center`}
              >
                <div className="text-center">
                  <p className="text-3xl">{project.logo}</p>
                  <p className="mt-2 text-xs text-white/40">Screenshot placeholder {i + 1}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-white/30">Video preview placeholder — drop MP4/WebM assets here.</p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold">Tech Stack</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>
          <h3 className="mt-8 font-display text-xl font-semibold">Features</h3>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {project.features.map((f) => (
              <li key={f} className="text-sm text-white/50">
                ✦ {f}
              </li>
            ))}
          </ul>
        </section>

        <section className="glass rounded-3xl p-6 md:p-8">
          <div className="flex gap-1">
            {Array.from({ length: project.review.rating }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <p className="mt-4 text-lg text-white/70">&ldquo;{project.review.quote}&rdquo;</p>
          <p className="mt-4 text-sm text-white/40">
            — {project.review.author}, {project.review.role}
          </p>
        </section>

        <div className="flex justify-center">
          <Button asChild size="lg">
            <Link href="/#contact">Start a similar project</Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
