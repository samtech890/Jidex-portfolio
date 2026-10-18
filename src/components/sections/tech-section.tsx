"use client";

import { motion } from "framer-motion";
import { techStack } from "@/data/content";

export function TechSection() {
  const row1 = techStack.slice(0, 15);
  const row2 = techStack.slice(15);

  return (
    <section id="tech" className="relative overflow-hidden section-padding">
      <div className="container-tight mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-brand-cyan">Tech Stack</p>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-6xl">
            Tools I use to build the <span className="text-gradient">impossible</span>
          </h2>
        </motion.div>
      </div>

      <div className="space-y-6">
        {[row1, row2].map((row, rowIndex) => (
          <div key={rowIndex} className="relative flex overflow-hidden">
            <motion.div
              className="flex shrink-0 gap-4"
              animate={{ x: rowIndex === 0 ? ["0%", "-50%"] : ["-50%", "0%"] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
              {[...row, ...row].map((tech, i) => (
                <div
                  key={`${tech.name}-${i}`}
                  className="glass flex min-w-[160px] items-center gap-3 rounded-2xl px-5 py-4"
                  data-cursor="hover"
                >
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold"
                    style={{
                      background: `${tech.color}22`,
                      color:
                        tech.color === "#FFFFFF" || tech.color === "#000020"
                          ? "#06B6D4"
                          : tech.color,
                      border: `1px solid ${tech.color}33`,
                    }}
                  >
                    {tech.name.slice(0, 2)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{tech.name}</p>
                    <p className="text-[10px] uppercase tracking-wider text-white/35">{tech.category}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
