"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { STATS } from "@/lib/constants";
import { funFacts, skills } from "@/data/content";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1600;
    const step = Math.ceil(value / (duration / 16));
    const id = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(id);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(id);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="relative section-padding">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-brand-cyan">About</p>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-6xl">
            Crafting digital products that feel <span className="text-gradient">inevitable</span>
          </h2>
          <p className="mt-6 text-lg text-white/55">
            I&apos;m JIDEX CODER — a creative full-stack engineer and AI automation specialist. I blend design sensibility with production engineering to ship experiences that look like Awwwards winners and perform like Silicon Valley products.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 text-center"
            >
              <div className="font-display text-4xl font-bold text-gradient md:text-5xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-sm text-white/50">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h3 className="font-display text-2xl font-semibold">Skills</h3>
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="mb-2 flex justify-between text-sm">
                  <span className="text-white/80">{skill.name}</span>
                  <span className="text-brand-cyan">{skill.level}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/5">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-brand-purple via-brand-blue to-brand-cyan"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <div>
            <h3 className="font-display text-2xl font-semibold">Fun Facts</h3>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {funFacts.map((fact, i) => (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="glass rounded-2xl p-5"
                >
                  <p className="font-display text-2xl font-bold text-white">{fact.value}</p>
                  <p className="mt-1 text-xs text-white/45">{fact.label}</p>
                </motion.div>
              ))}
            </div>
            <p className="mt-8 text-white/50">
              From freelance beginnings to leading AI product builds, my north star is the same: make technology feel human, beautiful, and inevitable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
