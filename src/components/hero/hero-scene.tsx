"use client";

/** Lightweight CSS hero backdrop — no Three.js, no infinite framer particles */
export function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-mesh-gradient opacity-70" />
      <div
        className="absolute left-1/2 top-[42%] h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-3xl md:h-[520px] md:w-[520px]"
        style={{
          background:
            "radial-gradient(circle at 35% 35%, rgba(124,58,237,0.5), rgba(59,130,246,0.2) 50%, transparent 70%)",
        }}
      />
      <div className="absolute left-1/2 top-[42%] h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-cyan/25 md:h-72 md:w-72" />
      <div className="absolute left-1/2 top-[42%] h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-brand-purple/30 md:h-52 md:w-52" />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black/40 via-transparent to-brand-black" />
    </div>
  );
}
