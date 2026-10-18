"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-black/40">
      <div className="pointer-events-none absolute inset-0 bg-mesh-gradient opacity-40" />
      <div className="container-tight relative section-padding !py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="font-display text-2xl font-bold">
              <span className="text-gradient">JIDEX</span> CODER
            </Link>
            <p className="mt-4 max-w-xs text-sm text-white/50">
              Building premium digital products for ambitious brands — websites, apps, AI, and everything in between.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { href: SITE.github, Icon: Github },
                { href: SITE.linkedin, Icon: Linkedin },
                { href: `https://twitter.com/jidexcoder`, Icon: Twitter },
                { href: `mailto:${SITE.email}`, Icon: Mail },
              ].map(({ href, Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition hover:border-brand-purple/50 hover:text-white hover:shadow-neon"
                  data-cursor="hover"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white/40">
              Navigate
            </h4>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.slice(0, 6).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white/40">
              Services
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              <li>Website Development</li>
              <li>Mobile Apps</li>
              <li>AI Automation</li>
              <li>SaaS Products</li>
              <li>UI/UX Design</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white/40">
              Newsletter
            </h4>
            <p className="mt-4 text-sm text-white/50">Insights on AI, product craft, and shipping faster.</p>
            <form
              className="mt-4 flex flex-col gap-2"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <Input type="email" placeholder="you@company.com" required />
              <Button type="submit" size="sm">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <motion.div
          className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-sm text-white/40 md:flex-row"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p className="text-gradient text-xs font-medium">Crafted with obsession · Built for impact</p>
        </motion.div>
      </div>
    </footer>
  );
}
