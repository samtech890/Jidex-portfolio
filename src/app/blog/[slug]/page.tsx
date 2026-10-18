import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { blogPosts, getBlogPost } from "@/data/content";
import { Badge } from "@/components/ui/badge";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Article" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <article className="pt-28">
      <div className={`bg-gradient-to-br ${post.coverGradient}`}>
        <div className="container-tight section-padding !pb-16">
          <Link href="/blog" className="mb-8 inline-flex items-center gap-2 text-sm text-white/50 hover:text-white">
            <ArrowLeft className="h-4 w-4" /> All articles
          </Link>
          <Badge>{post.category}</Badge>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold md:text-6xl">{post.title}</h1>
          <p className="mt-4 text-white/50">
            {post.date} · {post.readTime} read
          </p>
        </div>
      </div>

      <div className="container-tight section-padding prose prose-invert max-w-3xl">
        <p className="text-lg text-white/70">{post.excerpt}</p>
        <div className="mt-8 space-y-4 text-white/55">
          <p>
            This is a featured article placeholder for <strong className="text-white">{post.title}</strong>.
            In production, replace this with MDX content covering deep technical insights, visuals, and code samples.
          </p>
          <p>
            JIDEX CODER writes about shipping premium products — from Next.js architecture and motion design to AI
            agent workflows and mobile performance. Each piece is designed to be practical, opinionated, and immediately usable.
          </p>
          <h2 className="font-display text-2xl font-bold text-white pt-6">Key takeaways</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Prioritize perceived performance as much as raw metrics.</li>
            <li>Design systems should encode motion and interaction, not just color.</li>
            <li>AI features need trust UX — confidence, citations, and human override.</li>
            <li>Ship in slices; polish the moments users feel most.</li>
          </ul>
          <h2 className="font-display text-2xl font-bold text-white pt-6">Closing</h2>
          <p>
            Want help applying these ideas to your product?{" "}
            <Link href="/#contact" className="text-brand-cyan hover:underline">
              Let&apos;s talk
            </Link>
            .
          </p>
        </div>
      </div>
    </article>
  );
}
