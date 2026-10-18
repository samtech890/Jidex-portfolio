"use client";

const ITEMS = [
  "Website Development",
  "AI Automation",
  "Mobile Apps",
  "SaaS Products",
  "UI/UX Design",
  "Performance",
  "Next.js",
  "React Native",
  "OpenAI",
  "Brand Experiences",
];

/** CSS-only marquee — far cheaper than framer infinite animation */
export function MarqueeStrip() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="relative overflow-hidden border-y border-white/5 bg-white/[0.02] py-5">
      <div className="flex w-max animate-marquee gap-10 will-change-transform">
        {row.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-10 font-display text-sm uppercase tracking-[0.25em] text-white/40"
          >
            {item}
            <span className="text-brand-purple">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
