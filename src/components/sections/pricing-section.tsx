"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { pricingPlans } from "@/data/content";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function PricingSection() {
  return (
    <section id="pricing" className="relative section-padding">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 mx-auto max-w-2xl text-center"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-brand-cyan">Pricing</p>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-6xl">
            Transparent investment in <span className="text-gradient">excellence</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className={cn(
                "relative overflow-hidden rounded-3xl p-8",
                plan.highlighted
                  ? "border border-brand-purple/50 bg-gradient-to-b from-brand-purple/20 to-black/60 shadow-neon"
                  : "glass"
              )}
            >
              {plan.highlighted && (
                <span className="absolute right-4 top-4 rounded-full bg-brand-cyan/20 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-brand-cyan">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-2xl font-bold">{plan.name}</h3>
              <p className="mt-2 text-sm text-white/45">{plan.description}</p>
              <div className="mt-6">
                <span className="font-display text-4xl font-bold text-white">{plan.price}</span>
                <span className="ml-2 text-sm text-white/40">{plan.period}</span>
              </div>
              <ul className="mt-8 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-white/60">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-cyan" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-8 w-full" variant={plan.highlighted ? "default" : "secondary"}>
                <Link href="/#contact">{plan.cta}</Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
