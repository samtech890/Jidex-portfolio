"use client";

import { useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MusicToggle() {
  const [on, setOn] = useState(false);

  return (
    <Button
      variant="secondary"
      size="icon"
      className="fixed bottom-6 right-6 z-40 h-12 w-12 rounded-full shadow-neon"
      onClick={() => setOn((v) => !v)}
      aria-label={on ? "Mute ambient music" : "Play ambient music"}
      title="Ambient music toggle (placeholder)"
    >
      {on ? <Volume2 className="h-4 w-4 text-brand-cyan" /> : <VolumeX className="h-4 w-4" />}
    </Button>
  );
}
