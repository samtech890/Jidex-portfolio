import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";
import { SITE } from "@/lib/constants";
import { PrintButton } from "@/components/resume/print-button";

export const metadata = {
  title: "Resume",
  description: "Resume for Jide Coder — creative full-stack developer and AI engineer.",
};

const strengths = ["Full-stack web development", "AI products & automation", "Mobile app development", "Performance & accessibility", "Product UI/UX engineering"];
const technologies = ["React", "Next.js", "TypeScript", "Node.js", "Python", "React Native", "Flutter", "PostgreSQL", "Tailwind CSS", "AI APIs", "Vercel", "AWS"];

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-[#080a10] px-4 pb-16 pt-28 text-slate-800 print:bg-white print:px-0 print:pb-0 print:pt-0">
      <div className="mx-auto mb-6 flex max-w-4xl items-center justify-between print:hidden">
        <Link href="/#home" className="inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-white">
          <ArrowLeft className="h-4 w-4" /> Back to portfolio
        </Link>
        <PrintButton />
      </div>

      <article className="mx-auto max-w-4xl overflow-hidden rounded-3xl bg-white shadow-[0_30px_100px_rgba(0,0,0,0.45)] print:max-w-none print:rounded-none print:shadow-none">
        <header className="relative overflow-hidden bg-slate-950 px-8 py-10 text-white sm:px-12 sm:py-12 print:px-12 print:py-8">
          <div className="absolute -right-20 -top-28 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl print:hidden" />
          <div className="absolute -bottom-36 right-1/3 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl print:hidden" />
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300">Creative Developer · AI Engineer</p>
            <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-6xl">Jide Coder</h1>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">I design and build fast, polished digital products — from responsive websites and mobile apps to AI-powered tools and scalable SaaS platforms.</p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-200">
              <a className="inline-flex items-center gap-2 hover:text-cyan-300" href={`mailto:${SITE.email}`}><Mail className="h-4 w-4 text-cyan-300" />{SITE.email}</a>
              <span>{SITE.location}</span>
              <a className="underline decoration-white/30 underline-offset-4 hover:text-cyan-300" href={SITE.github}>GitHub</a>
              <a className="underline decoration-white/30 underline-offset-4 hover:text-cyan-300" href={SITE.linkedin}>LinkedIn</a>
            </div>
          </div>
        </header>

        <div className="grid gap-10 px-8 py-9 sm:grid-cols-[1.35fr_0.8fr] sm:px-12 print:gap-8 print:px-12 print:py-8">
          <div className="space-y-8">
            <section>
              <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-700">Profile</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">Creative full-stack developer focused on clear user experiences, reliable engineering, and practical performance. Comfortable taking a product from early concept through design, implementation, and deployment.</p>
            </section>

            <section>
              <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-700">Selected experience</h2>
              <div className="mt-4 space-y-5">
                <div className="border-l-2 border-cyan-500 pl-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3"><h3 className="font-semibold text-slate-900">Independent Developer</h3><span className="text-xs text-slate-500">2024 — Present</span></div>
                  <p className="mt-1 text-xs font-medium text-slate-500">Web products · AI engineering · Remote</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">Build custom web experiences, AI tools, automation workflows, and product interfaces for clients and independent projects.</p>
                </div>
                <div className="border-l-2 border-violet-400 pl-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3"><h3 className="font-semibold text-slate-900">Full-Stack Product Development</h3><span className="text-xs text-slate-500">Project-based</span></div>
                  <p className="mt-1 text-xs font-medium text-slate-500">Frontend · Backend · Deployment</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">Create responsive applications and landing pages, connect APIs and databases, and ship production-ready deployments.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-700">Project highlights</h2>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                <li><strong className="text-slate-800">Gratitude Ride Lux</strong> — premium ride-booking web experience.</li>
                <li><strong className="text-slate-800">Cyber Interface Seven</strong> — immersive cyber-inspired interactive website.</li>
                <li><strong className="text-slate-800">Highway Rush Game</strong> — browser-based arcade game experience.</li>
              </ul>
            </section>
          </div>

          <aside className="space-y-8">
            <section>
              <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-700">Core strengths</h2>
              <ul className="mt-4 space-y-2.5">
                {strengths.map((item) => <li key={item} className="flex items-start gap-2 text-sm text-slate-600"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />{item}</li>)}
              </ul>
            </section>
            <section>
              <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-700">Technology</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {technologies.map((item) => <span key={item} className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">{item}</span>)}
              </div>
            </section>
            <section className="rounded-2xl bg-slate-50 p-5 print:border print:border-slate-200">
              <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-700">Let’s connect</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">Available for select freelance, contract, and product opportunities.</p>
              <a className="mt-3 inline-block break-all text-sm font-semibold text-slate-900 underline decoration-cyan-400 underline-offset-4" href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </section>
          </aside>
        </div>
        <footer className="border-t border-slate-100 px-8 py-4 text-xs text-slate-400 sm:px-12 print:px-12">Jide Coder · Portfolio & contact: {SITE.url}</footer>
      </article>

      <style>{`@media print { @page { size: A4; margin: 12mm; } body { -webkit-print-color-adjust: exact; print-color-adjust: exact; } }`}</style>
    </main>
  );
}
