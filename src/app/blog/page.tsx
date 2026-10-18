import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/content";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Blog",
  description: "Essays on AI, React, Next.js, mobile development, design systems, and developer productivity by JIDEX CODER.",
};

export default function BlogPage() {
  return (
    <div className="pt-28">
      <div className="container-tight section-padding">
        <p className="text-sm uppercase tracking-[0.3em] text-brand-cyan">Blog</p>
        <h1 className="mt-3 font-display text-4xl font-bold md:text-6xl">
          Writing on <span className="text-gradient">craft & code</span>
        </h1>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group overflow-hidden rounded-2xl glass transition hover:-translate-y-1"
            >
              <div className={`h-36 bg-gradient-to-br ${post.coverGradient}`} />
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <Badge>{post.category}</Badge>
                  <span className="text-[10px] text-white/35">{post.readTime}</span>
                </div>
                <h2 className="mt-3 font-display text-xl font-semibold group-hover:text-brand-cyan transition-colors">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm text-white/45">{post.excerpt}</p>
                <p className="mt-4 text-xs text-white/30">{post.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
