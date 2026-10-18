"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/content";

export function ExperienceSection() {
  return (
    <section id="experience" className="relative section-padding">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 max-w-2xl"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-brand-cyan">Experience</p>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-6xl">
            A career built on <span className="text-gradient">shipping</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-brand-purple via-brand-blue to-brand-cyan md:left-1/2" />
          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative md:flex md:items-start md:gap-10 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="hidden md:block md:w-1/2" />
                <div className="absolute left-4 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-brand-cyan bg-brand-black shadow-neon-cyan md:left-1/2" />
                <div className="ml-10 glass rounded-2xl p-6 md:ml-0 md:w-1/2">
                  <p className="text-xs uppercase tracking-widest text-brand-cyan">{exp.period}</p>
                  <h3 className="mt-2 font-display text-xl font-bold text-white">{exp.role}</h3>
                  <p className="text-sm text-white/50">
                    {exp.company} · {exp.location}
                  </p>
                  <p className="mt-3 text-sm text-white/55">{exp.description}</p>
                  <ul className="mt-4 space-y-2">
                    {exp.achievements.map((a) => (
                      <li key={a} className="flex gap-2 text-sm text-white/45">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-purple" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
