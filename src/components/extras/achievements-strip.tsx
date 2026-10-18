"use client";

import { motion } from "framer-motion";
import { Award, Flame, Rocket, Trophy, Zap } from "lucide-react";

const BADGES = [
  { icon: Trophy, label: "120+ Projects Shipped", color: "text-amber-400" },
  { icon: Zap, label: "95+ Lighthouse Habit", color: "text-brand-cyan" },
  { icon: Rocket, label: "AI Product Specialist", color: "text-brand-purple" },
  { icon: Flame, label: "Awwwards Obsessed", color: "text-orange-400" },
  { icon: Award, label: "Client NPS Champions", color: "text-brand-blue" },
];

export function AchievementsStrip() {
  return (
    <section className="section-padding pt-0">
      <div className="container-tight">
        <div className="flex flex-wrap justify-center gap-3">
          {BADGES.map((badge, i) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white/70"
            >
              <badge.icon className={`h-4 w-4 ${badge.color}`} />
              {badge.label}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
