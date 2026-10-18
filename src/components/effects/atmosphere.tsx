"use client";

export function NoiseOverlay() {
  return <div className="noise-overlay hidden md:block" aria-hidden="true" />;
}

export function SpotlightBackground() {
  // Disabled by default — mousemove spotlight causes lag on large pages
  return null;
}

export function BackgroundBlobs() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-brand-purple/15 blur-[100px]" />
      <div className="absolute -right-32 top-1/3 h-64 w-64 rounded-full bg-brand-blue/15 blur-[90px]" />
      <div className="absolute bottom-1/4 left-1/3 h-56 w-56 rounded-full bg-brand-cyan/10 blur-[90px]" />
    </div>
  );
}
