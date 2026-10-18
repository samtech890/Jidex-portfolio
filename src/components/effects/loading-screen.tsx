"use client";

import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("jidex-loaded");
    const delay = seen ? 0 : 400;
    const t = setTimeout(() => {
      setDone(true);
      sessionStorage.setItem("jidex-loaded", "1");
    }, delay);
    return () => clearTimeout(t);
  }, []);

  if (done) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-black">
      <div className="flex flex-col items-center gap-3">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-brand-purple/40 border-t-brand-cyan" />
        <p className="font-display text-lg font-bold text-gradient">JIDEX CODER</p>
      </div>
    </div>
  );
}
