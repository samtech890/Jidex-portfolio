"use client";

import { useState } from "react";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { DemoChrome } from "./demo-chrome";
import {
  ArrowRight,
  BedDouble,
  Bike,
  BookOpen,
  Brain,
  Check,
  CreditCard,
  Dumbbell,
  Home,
  MapPin,
  Plane,
  Search,
  Sparkles,
  Star,
  TrendingUp,
  Utensils,
  Wallet,
} from "lucide-react";

function DemoShell({
  project,
  children,
  brand,
}: {
  project: Project;
  children: React.ReactNode;
  brand?: string;
}) {
  return (
    <DemoChrome project={project}>
      <div style={{ ["--accent" as string]: project.accentColor }} className="min-h-[calc(100vh-57px)]">
        <div
          className="border-b border-white/10 px-4 py-2 text-center text-[11px] text-white/55"
          style={{ background: `${project.accentColor}18` }}
        >
          You are viewing the live interactive website for{" "}
          <strong className="text-white">{brand || project.title}</strong> — try the controls below
        </div>
        {children}
        <footer className="mt-12 border-t border-white/10 px-4 py-8 text-center text-xs text-white/35">
          © {new Date().getFullYear()} {project.client} · Demo by JIDEX CODER ·{" "}
          <Link href={`/projects/${project.slug}`} className="text-brand-cyan hover:underline">
            Read case study
          </Link>
        </footer>
      </div>
    </DemoChrome>
  );
}

function LuxoraDemo({ project }: { project: Project }) {
  const [balance] = useState("$2,847,920.44");
  return (
    <DemoShell project={project} brand="Luxora Private">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 lg:grid-cols-[240px_1fr]">
        <aside className="rounded-2xl border border-amber-500/20 bg-[#0c0a09] p-4">
          <p className="font-display text-lg font-bold text-amber-400">Luxora</p>
          <nav className="mt-6 space-y-1 text-sm text-white/60">
            {["Overview", "Accounts", "Transfers", "Advisor", "Statements"].map((i) => (
              <div key={i} className="rounded-lg px-3 py-2 hover:bg-white/5 hover:text-white cursor-pointer">
                {i}
              </div>
            ))}
          </nav>
        </aside>
        <div className="space-y-6">
          <div className="rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 to-transparent p-6">
            <p className="text-sm text-white/50">Total wealth</p>
            <p className="mt-2 font-display text-4xl font-bold text-amber-300">{balance}</p>
            <p className="mt-2 text-sm text-emerald-400">+3.2% this month</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["Private Checking", "$184,220"],
              ["Growth Portfolio", "$1.92M"],
              ["Yield Vault", "$743,500"],
            ].map(([n, v]) => (
              <div key={n} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-white/40">{n}</p>
                <p className="mt-2 text-xl font-semibold">{v}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="mb-3 font-medium">Recent activity</p>
            {[
              ["Wire to Geneva Trust", "-$25,000", "Today"],
              ["Dividend · Apple Inc.", "+$4,820", "Yesterday"],
              ["Advisor consult fee", "-$1,200", "Mar 12"],
            ].map(([t, a, d]) => (
              <div key={t} className="flex items-center justify-between border-t border-white/5 py-3 text-sm">
                <div>
                  <p>{t}</p>
                  <p className="text-xs text-white/40">{d}</p>
                </div>
                <p className={a.startsWith("+") ? "text-emerald-400" : "text-white/80"}>{a}</p>
              </div>
            ))}
          </div>
          <button className="rounded-xl bg-amber-500 px-5 py-3 text-sm font-semibold text-black">
            <Wallet className="mr-2 inline h-4 w-4" /> New transfer
          </button>
        </div>
      </div>
    </DemoShell>
  );
}

function MediSenseDemo({ project }: { project: Project }) {
  const [note, setNote] = useState("");
  const [out, setOut] = useState("");
  return (
    <DemoShell project={project}>
      <div className="mx-auto max-w-5xl px-4 py-8">
        <div className="mb-6 flex items-center gap-3">
          <div className="rounded-xl bg-emerald-500/20 p-3 text-emerald-400">
            <Brain className="h-6 w-6" />
          </div>
          <div>
            <h1 className="font-display text-3xl font-bold">MediSense Clinical</h1>
            <p className="text-sm text-white/50">Patient timeline · AI documentation</p>
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-emerald-500/20 bg-[#071a14] p-5">
            <p className="text-sm font-medium text-emerald-300">Patient · Alex Rivera · 42</p>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>09:14 — BP 128/82 · HR 74</li>
              <li>09:22 — Labs ordered (CBC, CMP)</li>
              <li>09:40 — Symptoms: fatigue, mild dyspnea</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm font-medium">Voice / text → clinical note</p>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Patient reports 3 days of fatigue..."
              className="mt-3 h-28 w-full rounded-xl border border-white/10 bg-black/40 p-3 text-sm outline-none"
            />
            <button
              onClick={() =>
                setOut(
                  `SOAP Note\nS: ${note || "Fatigue ×3 days"}\nO: Vitals stable\nA: Fatigue NYD — consider anemia/thyroid\nP: Labs pending; follow-up 48h`
                )
              }
              className="mt-3 rounded-xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-black"
            >
              Generate note
            </button>
            {out && <pre className="mt-4 whitespace-pre-wrap rounded-xl bg-black/50 p-4 text-xs text-emerald-100">{out}</pre>}
          </div>
        </div>
      </div>
    </DemoShell>
  );
}

function NexusDemo({ project }: { project: Project }) {
  const [side, setSide] = useState<"buy" | "sell">("buy");
  return (
    <DemoShell project={project}>
      <div className="mx-auto max-w-6xl px-4 py-6">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <h1 className="font-display text-2xl font-bold">Nexus · BTC/USDT</h1>
          <p className="text-emerald-400">$97,842.20 <span className="text-xs">+1.8%</span></p>
        </div>
        <div className="grid gap-4 lg:grid-cols-[1fr_280px]">
          <div className="rounded-2xl border border-violet-500/20 bg-[#0b0714] p-4">
            <div className="flex h-56 items-end gap-1">
              {[40, 55, 48, 70, 62, 80, 75, 90, 68, 85, 78, 95, 88, 100, 92].map((h, i) => (
                <div key={i} className="flex-1 rounded-t bg-violet-500/80" style={{ height: `${h}%` }} />
              ))}
            </div>
            <p className="mt-3 text-xs text-white/40">1H chart · demo feed</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="mb-3 flex gap-2">
              <button
                onClick={() => setSide("buy")}
                className={`flex-1 rounded-lg py-2 text-sm font-semibold ${side === "buy" ? "bg-emerald-500 text-black" : "bg-white/5"}`}
              >
                Buy
              </button>
              <button
                onClick={() => setSide("sell")}
                className={`flex-1 rounded-lg py-2 text-sm font-semibold ${side === "sell" ? "bg-rose-500 text-white" : "bg-white/5"}`}
              >
                Sell
              </button>
            </div>
            <label className="text-xs text-white/40">Amount (USDT)</label>
            <input defaultValue="1000" className="mt-1 mb-3 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm" />
            <button className="w-full rounded-xl bg-violet-500 py-2.5 text-sm font-semibold">
              <CreditCard className="mr-1 inline h-4 w-4" /> Place {side} order
            </button>
          </div>
        </div>
      </div>
    </DemoShell>
  );
}

function RideFlowDemo({ project }: { project: Project }) {
  const [booked, setBooked] = useState(false);
  return (
    <DemoShell project={project}>
      <div className="mx-auto max-w-lg px-4 py-8">
        <div className="overflow-hidden rounded-3xl border border-sky-500/30 bg-[#061018]">
          <div className="relative h-48 bg-gradient-to-br from-sky-600/40 to-blue-900/60">
            <MapPin className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 text-sky-300" />
            <p className="absolute bottom-3 left-4 text-xs text-white/70">Live map preview</p>
          </div>
          <div className="space-y-3 p-5">
            <input className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm" defaultValue="Current location" />
            <input className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm" defaultValue="Downtown Hub" />
            <div className="flex gap-2">
              {["Economy", "Comfort", "XL"].map((t, i) => (
                <button key={t} className={`flex-1 rounded-xl py-2 text-xs ${i === 1 ? "bg-sky-500 text-black" : "bg-white/5"}`}>
                  {t}
                </button>
              ))}
            </div>
            <button
              onClick={() => setBooked(true)}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-sky-500 py-3 text-sm font-semibold text-black"
            >
              <Bike className="h-4 w-4" /> {booked ? "Driver arriving · 4 min" : "Request RideFlow"}
            </button>
          </div>
        </div>
      </div>
    </DemoShell>
  );
}

function FeastlyDemo({ project }: { project: Project }) {
  const [cart, setCart] = useState(0);
  const items = [
    ["Truffle Pasta", "$24"],
    ["Miso Salmon", "$32"],
    ["Citrus Tart", "$14"],
  ];
  return (
    <DemoShell project={project}>
      <div className="mx-auto max-w-4xl px-4 py-8">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="font-display text-3xl font-bold">Feastly · Neon Bistro</h1>
          <span className="rounded-full bg-orange-500/20 px-3 py-1 text-sm text-orange-300">Cart {cart}</span>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {items.map(([n, p]) => (
            <div key={n} className="rounded-2xl border border-orange-500/20 bg-[#1a0c08] p-4">
              <div className="mb-3 flex h-28 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500/30 to-rose-600/20">
                <Utensils className="h-8 w-8 text-orange-300" />
              </div>
              <p className="font-medium">{n}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-orange-300">{p}</span>
                <button onClick={() => setCart((c) => c + 1)} className="rounded-lg bg-orange-500 px-3 py-1 text-xs font-semibold text-black">
                  Add
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DemoShell>
  );
}

function AetherDemo({ project }: { project: Project }) {
  const [prompt, setPrompt] = useState("neon city at dusk, cinematic");
  const [done, setDone] = useState(false);
  return (
    <DemoShell project={project}>
      <div className="mx-auto max-w-5xl px-4 py-8">
        <h1 className="font-display text-3xl font-bold">Aether Canvas</h1>
        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_320px]">
          <div className={`flex min-h-[320px] items-center justify-center rounded-3xl border border-cyan-500/30 bg-gradient-to-br ${project.coverGradient}`}>
            {done ? (
              <p className="max-w-sm text-center text-sm text-white/80">Generated frame for “{prompt}”</p>
            ) : (
              <Sparkles className="h-10 w-10 text-cyan-300" />
            )}
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="h-28 w-full rounded-xl border border-white/10 bg-black/40 p-3 text-sm"
            />
            <button
              onClick={() => setDone(true)}
              className="mt-3 w-full rounded-xl bg-cyan-400 py-2.5 text-sm font-semibold text-black"
            >
              Generate image
            </button>
          </div>
        </div>
      </div>
    </DemoShell>
  );
}

function HireCraftDemo({ project }: { project: Project }) {
  const [gen, setGen] = useState(false);
  return (
    <DemoShell project={project}>
      <div className="mx-auto grid max-w-5xl gap-6 px-4 py-8 lg:grid-cols-2">
        <div className="rounded-2xl border border-indigo-500/20 bg-white text-zinc-900 p-6 shadow-xl">
          <p className="text-xs uppercase tracking-widest text-indigo-600">Resume</p>
          <h2 className="mt-2 text-2xl font-bold">Jordan Lee</h2>
          <p className="text-sm text-zinc-500">Full Stack Engineer</p>
          <hr className="my-4" />
          <p className="text-sm leading-relaxed text-zinc-700">
            {gen
              ? "Built scalable Next.js platforms serving 100K+ MAU. Led AI feature delivery reducing support load 40%."
              : "Click Generate to craft an ATS-optimized summary…"}
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="font-medium">Target role</p>
          <input defaultValue="Senior Frontend Engineer" className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm" />
          <button
            onClick={() => setGen(true)}
            className="mt-4 w-full rounded-xl bg-indigo-500 py-2.5 text-sm font-semibold"
          >
            Generate with AI
          </button>
        </div>
      </div>
    </DemoShell>
  );
}

function WanderlyDemo({ project }: { project: Project }) {
  return (
    <DemoShell project={project}>
      <div className="relative overflow-hidden">
        <div className={`px-4 py-16 bg-gradient-to-br ${project.coverGradient}`}>
          <div className="mx-auto max-w-3xl text-center">
            <Plane className="mx-auto h-10 w-10 text-teal-200" />
            <h1 className="mt-4 font-display text-4xl font-bold md:text-5xl">Where next?</h1>
            <div className="mt-8 flex flex-col gap-2 rounded-2xl bg-black/50 p-3 backdrop-blur sm:flex-row">
              <input className="flex-1 rounded-xl bg-white/10 px-4 py-3 text-sm outline-none" placeholder="Destination" defaultValue="Lisbon" />
              <input className="rounded-xl bg-white/10 px-4 py-3 text-sm outline-none sm:w-36" defaultValue="Apr 12–19" />
              <button className="rounded-xl bg-teal-400 px-5 py-3 text-sm font-semibold text-black">
                <Search className="mr-1 inline h-4 w-4" /> Search
              </button>
            </div>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-4 px-4 py-8 sm:grid-cols-3">
          {["Lisbon Loft", "Kyoto Ryokan", "Santorini Villa"].map((n) => (
            <div key={n} className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="mb-3 h-28 rounded-xl bg-teal-500/20" />
              <p className="font-medium">{n}</p>
              <p className="text-sm text-teal-300">From $148/night</p>
            </div>
          ))}
        </div>
      </div>
    </DemoShell>
  );
}

function StayOpsDemo({ project }: { project: Project }) {
  const rooms = [
    ["101", "Clean", "emerald"],
    ["102", "Occupied", "sky"],
    ["103", "Dirty", "amber"],
    ["201", "Clean", "emerald"],
    ["202", "Maintenance", "rose"],
    ["203", "Occupied", "sky"],
  ];
  return (
    <DemoShell project={project}>
      <div className="mx-auto max-w-5xl px-4 py-8">
        <div className="mb-6 flex items-center gap-2">
          <BedDouble className="h-6 w-6 text-blue-400" />
          <h1 className="font-display text-3xl font-bold">StayOps Board</h1>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {rooms.map(([r, s]) => (
            <div key={r} className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-lg font-semibold">Room {r}</p>
              <p className="mt-2 text-sm text-white/60">{s}</p>
            </div>
          ))}
        </div>
      </div>
    </DemoShell>
  );
}

function HomeFolioDemo({ project }: { project: Project }) {
  return (
    <DemoShell project={project}>
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <h1 className="font-display text-3xl font-bold">HomeFolio</h1>
          <div className="flex gap-2">
            <input className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm" placeholder="City or ZIP" defaultValue="Austin, TX" />
            <button className="rounded-xl bg-lime-500 px-4 py-2 text-sm font-semibold text-black">Search</button>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Modern Oak Residence", "$1.28M", "4 bed · 3 bath"],
            ["Lakeview Condo", "$640K", "2 bed · 2 bath"],
            ["Hill Country Estate", "$2.1M", "5 bed · 4 bath"],
          ].map(([t, p, m]) => (
            <div key={t} className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="flex h-36 items-center justify-center bg-lime-500/20">
                <Home className="h-8 w-8 text-lime-300" />
              </div>
              <div className="p-4">
                <p className="font-medium">{t}</p>
                <p className="text-lime-300">{p}</p>
                <p className="text-xs text-white/45">{m}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DemoShell>
  );
}

function SkilloraDemo({ project }: { project: Project }) {
  const [playing, setPlaying] = useState(false);
  return (
    <DemoShell project={project}>
      <div className="mx-auto max-w-4xl px-4 py-8">
        <div className="overflow-hidden rounded-3xl border border-pink-500/20 bg-[#140812]">
          <div className="flex h-56 items-center justify-center bg-gradient-to-br from-pink-600/40 to-purple-900/50">
            <button
              onClick={() => setPlaying((p) => !p)}
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black"
            >
              {playing ? "Pause lesson" : "Play lesson"}
            </button>
          </div>
          <div className="p-5">
            <div className="flex items-center gap-2 text-pink-300">
              <BookOpen className="h-4 w-4" /> Module 3 · Advanced React Patterns
            </div>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-2/3 rounded-full bg-pink-500" />
            </div>
            <p className="mt-2 text-xs text-white/45">67% complete</p>
          </div>
        </div>
      </div>
    </DemoShell>
  );
}

function PulseFitDemo({ project }: { project: Project }) {
  const [started, setStarted] = useState(false);
  return (
    <DemoShell project={project}>
      <div className="mx-auto max-w-md px-4 py-10 text-center">
        <Dumbbell className="mx-auto h-10 w-10 text-red-400" />
        <h1 className="mt-4 font-display text-3xl font-bold">PulseFit</h1>
        <p className="mt-2 text-white/50">Today · Upper Strength</p>
        <div className="mx-auto mt-8 grid h-40 w-40 place-items-center rounded-full border-8 border-red-500/40">
          <div className="text-center">
            <p className="font-display text-3xl font-bold">{started ? "18:42" : "45:00"}</p>
            <p className="text-xs text-white/40">remaining</p>
          </div>
        </div>
        <button
          onClick={() => setStarted(true)}
          className="mt-8 w-full rounded-2xl bg-red-500 py-3 text-sm font-semibold"
        >
          {started ? "Workout in progress" : "Start workout"}
        </button>
        <div className="mt-6 grid grid-cols-3 gap-2 text-xs text-white/50">
          <div className="rounded-xl bg-white/5 p-3"><TrendingUp className="mx-auto mb-1 h-4 w-4" /> Streak 12</div>
          <div className="rounded-xl bg-white/5 p-3"><Star className="mx-auto mb-1 h-4 w-4" /> 840 kcal</div>
          <div className="rounded-xl bg-white/5 p-3"><Check className="mx-auto mb-1 h-4 w-4" /> 4/5</div>
        </div>
      </div>
    </DemoShell>
  );
}

export function ProjectDemo({ project }: { project: Project }) {
  switch (project.slug) {
    case "luxora-banking":
      return <LuxoraDemo project={project} />;
    case "medisense-ai":
      return <MediSenseDemo project={project} />;
    case "nexus-exchange":
      return <NexusDemo project={project} />;
    case "rideflow":
      return <RideFlowDemo project={project} />;
    case "feastly":
      return <FeastlyDemo project={project} />;
    case "aether-canvas":
      return <AetherDemo project={project} />;
    case "hirecraft-ai":
      return <HireCraftDemo project={project} />;
    case "wanderly":
      return <WanderlyDemo project={project} />;
    case "stayops":
      return <StayOpsDemo project={project} />;
    case "homefolio":
      return <HomeFolioDemo project={project} />;
    case "skillora":
      return <SkilloraDemo project={project} />;
    case "pulsefit":
      return <PulseFitDemo project={project} />;
    default:
      return (
        <DemoShell project={project}>
          <div className="mx-auto max-w-3xl px-4 py-16 text-center">
            <h1 className="font-display text-4xl font-bold">{project.title}</h1>
            <p className="mt-4 text-white/60">{project.description}</p>
            <a href={`/projects/${project.slug}`} className="mt-8 inline-flex items-center gap-2 text-brand-cyan">
              View case study <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </DemoShell>
      );
  }
}
