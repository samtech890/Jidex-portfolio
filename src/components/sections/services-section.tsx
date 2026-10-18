"use client";

import { motion } from "framer-motion";
import {
  Bug,
  Building2,
  ChartColumn,
  Database,
  Gauge,
  Globe,
  Layout,
  MessageSquare,
  Palette,
  RefreshCw,
  Rocket,
  Search,
  Server,
  Shield,
  Smartphone,
  Sparkles,
  Bot,
  Zap,
} from "lucide-react";
import { services } from "@/data/content";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  globe: Globe,
  layout: Layout,
  building: Building2,
  sparkles: Sparkles,
  bot: Bot,
  chart: ChartColumn,
  smartphone: Smartphone,
  shield: Shield,
  server: Server,
  zap: Zap,
  message: MessageSquare,
  database: Database,
  palette: Palette,
  refresh: RefreshCw,
  gauge: Gauge,
  bug: Bug,
  search: Search,
  rocket: Rocket,
};

export function ServicesSection() {
  return (
    <section id="services" className="relative section-padding">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 max-w-2xl"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-brand-cyan">Services</p>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-6xl">
            Everything you need to <span className="text-gradient">ship premium</span>
          </h2>
          <p className="mt-4 text-white/50">
            End-to-end product craft — from first sketch to production deploy.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Sparkles;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 8) * 0.05 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group glass relative overflow-hidden rounded-2xl p-5"
                data-cursor="hover"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/0 via-transparent to-brand-cyan/0 opacity-0 transition-opacity duration-500 group-hover:from-brand-purple/10 group-hover:to-brand-cyan/10 group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-brand-cyan transition group-hover:border-brand-purple/40 group-hover:shadow-neon">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="text-[10px] uppercase tracking-widest text-white/35">{service.category}</p>
                  <h3 className="mt-1 font-display text-lg font-semibold text-white">{service.title}</h3>
                  <p className="mt-2 text-sm text-white/45">{service.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
