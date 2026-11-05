"use client";

import { useState } from "react";
import { concept } from "@/lib/site";

export function ConceptRibbon() {
  const [open, setOpen] = useState(true);
  if (!concept.on || !open) return null;
  return (
    <div role="region" aria-label="Concept notice" className="bg-ink text-paper text-sm">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-4 py-1 md:px-8">
        <p>{concept.credit}</p>
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Dismiss concept notice"
          className="min-h-11 px-2 underline underline-offset-4"
        >
          Dismiss
        </button>
      </div>
    </div>
  );
}
