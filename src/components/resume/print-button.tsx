"use client";

import { Download } from "lucide-react";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-purple to-brand-cyan px-4 py-2.5 text-sm font-semibold text-white shadow-lg"
    >
      <Download className="h-4 w-4" /> Save as PDF / Print
    </button>
  );
}
