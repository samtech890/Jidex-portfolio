"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import { FileText, FolderKanban, Home, Mail, Search, Sparkles, Wrench } from "lucide-react";
import { projects } from "@/data/projects";
import { blogPosts } from "@/data/content";

export function CommandPalette({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, onOpenChange]);

  if (!mounted) return null;

  const go = (href: string) => {
    onOpenChange(false);
    router.push(href);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[95] flex items-start justify-center bg-black/70 px-4 pt-[15vh] backdrop-blur-sm">
      <button className="absolute inset-0 cursor-default" aria-label="Close" onClick={() => onOpenChange(false)} />
      <Command className="relative z-10 w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-neon">
        <div className="flex items-center gap-2 border-b border-white/10 px-4">
          <Search className="h-4 w-4 text-white/40" />
          <Command.Input
            placeholder="Search pages, projects, articles..."
            className="h-12 w-full bg-transparent text-sm text-white outline-none placeholder:text-white/30"
          />
          <kbd className="rounded border border-white/10 px-1.5 py-0.5 text-[10px] text-white/40">ESC</kbd>
        </div>
        <Command.List className="max-h-80 overflow-y-auto p-2" data-lenis-prevent>
          <Command.Empty className="py-6 text-center text-sm text-white/40">No results found.</Command.Empty>

          <Command.Group heading="Navigate" className="px-2 py-1 text-[10px] uppercase tracking-wider text-white/30">
            {[
              { label: "Home", href: "/#home", icon: Home },
              { label: "Projects", href: "/#projects", icon: FolderKanban },
              { label: "Services", href: "/#services", icon: Wrench },
              { label: "Contact", href: "/#contact", icon: Mail },
              { label: "Blog", href: "/blog", icon: FileText },
            ].map((item) => (
              <Command.Item
                key={item.href}
                value={item.label}
                onSelect={() => go(item.href)}
                className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-white/70 aria-selected:bg-white/5 aria-selected:text-white"
              >
                <item.icon className="h-4 w-4 text-brand-cyan" />
                {item.label}
              </Command.Item>
            ))}
          </Command.Group>

          <Command.Group heading="Projects" className="mt-2 px-2 py-1 text-[10px] uppercase tracking-wider text-white/30">
            {projects.map((p) => (
              <Command.Item
                key={p.slug}
                value={p.title}
                onSelect={() => go(`/projects/${p.slug}`)}
                className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-white/70 aria-selected:bg-white/5 aria-selected:text-white"
              >
                <Sparkles className="h-4 w-4 text-brand-purple" />
                {p.title}
              </Command.Item>
            ))}
          </Command.Group>

          <Command.Group heading="Articles" className="mt-2 px-2 py-1 text-[10px] uppercase tracking-wider text-white/30">
            {blogPosts.map((p) => (
              <Command.Item
                key={p.slug}
                value={p.title}
                onSelect={() => go(`/blog/${p.slug}`)}
                className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-white/70 aria-selected:bg-white/5 aria-selected:text-white"
              >
                <FileText className="h-4 w-4 text-brand-blue" />
                {p.title}
              </Command.Item>
            ))}
          </Command.Group>
        </Command.List>
      </Command>
    </div>
  );
}
