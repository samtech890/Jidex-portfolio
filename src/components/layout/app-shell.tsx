"use client";

import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/effects/scroll-progress";
import { NoiseOverlay, BackgroundBlobs } from "@/components/effects/atmosphere";
import { ThemeProvider } from "@/components/providers/theme-provider";

const CommandPalette = dynamic(() => import("@/components/extras/command-palette").then((module) => module.CommandPalette), { ssr: false });
const PortfolioChatbot = dynamic(() => import("@/components/extras/portfolio-chatbot").then((module) => module.PortfolioChatbot), { ssr: false });

/** Lean shell — no Lenis, no custom cursor, no music toggle (major lag sources). */
export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [cmdOpen, setCmdOpen] = useState(false);
  const [chatReady, setChatReady] = useState(false);
  const isDemo = pathname?.startsWith("/demos");

  useEffect(() => {
    if (typeof window.requestIdleCallback === "function") {
      const idleId = window.requestIdleCallback(() => setChatReady(true), { timeout: 2500 });
      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = setTimeout(() => setChatReady(true), 1200);
    return () => clearTimeout(timeoutId);
  }, []);

  if (isDemo) {
    return <ThemeProvider>{children}</ThemeProvider>;
  }

  return (
    <ThemeProvider>
      <ScrollProgress />
      <NoiseOverlay />
      <BackgroundBlobs />
      <Navbar onOpenCommand={() => setCmdOpen(true)} />
      <main className="relative z-10">{children}</main>
      <Footer />
      {cmdOpen && <CommandPalette open={cmdOpen} onOpenChange={setCmdOpen} />}
      {chatReady && <PortfolioChatbot />}
    </ThemeProvider>
  );
}
