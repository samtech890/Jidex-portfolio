import { SITE } from "@/lib/constants";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <p className="text-sm uppercase tracking-[0.3em] text-brand-cyan">404</p>
      <h1 className="mt-4 font-display text-5xl font-bold md:text-7xl">
        Lost in the <span className="text-gradient">void</span>
      </h1>
      <p className="mt-4 max-w-md text-white/50">
        This page doesn&apos;t exist. Head back to {SITE.name}&apos;s portfolio.
      </p>
      <a
        href="/"
        className="mt-8 rounded-xl bg-gradient-to-r from-brand-purple via-brand-blue to-brand-cyan px-6 py-3 text-sm font-medium text-white"
      >
        Return home
      </a>
    </div>
  );
}
