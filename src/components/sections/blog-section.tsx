"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { blogPosts } from "@/data/content";
import { Badge } from "@/components/ui/badge";

export function BlogSection() {
  return (
    <section id="blog" className="relative section-padding">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 flex items-end justify-between gap-4"
        >
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-cyan">Blog</p>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-6xl">
              Notes on craft & <span className="text-gradient">shipping</span>
            </h2>
          </div>
          <Link href="/blog" className="hidden text-sm text-brand-cyan hover:underline md:inline-flex items-center gap-1">
            View all <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {blogPosts.slice(0, 8).map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -6 }}
            >
              <Link href={`/blog/${post.slug}`} className="group block overflow-hidden rounded-2xl glass" data-cursor="hover">
                <div className={`h-32 bg-gradient-to-br ${post.coverGradient}`} />
                <div className="p-5">
                  <div className="flex items-center justify-between gap-2">
                    <Badge>{post.category}</Badge>
                    <span className="text-[10px] text-white/35">{post.readTime}</span>
                  </div>
                  <h3 className="mt-3 font-display text-lg font-semibold text-white group-hover:text-brand-cyan transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-xs text-white/45 line-clamp-2">{post.excerpt}</p>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
