"use client";

import { useState } from "react";
import { SolutionTile } from "../components/solution-card";
import { categories, solutions } from "../data/solutions";

// Category filter bar plus the grid of solutions, as on softdev.global.
export default function SolutionsGrid() {
  const [active, setActive] = useState("All");
  const shown = active === "All" ? solutions : solutions.filter((s) => s.categories.includes(active));

  const chip = (on: boolean) =>
    `inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition ${
      on ? "border-primary bg-primary text-ink" : "border-line text-muted hover:border-accent/50 hover:text-white"
    }`;

  return (
    <>
      <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
        {["All", ...categories].map((c) => {
          const count = c === "All" ? solutions.length : solutions.filter((s) => s.categories.includes(c)).length;
          return (
            <button key={c} type="button" onClick={() => setActive(c)} aria-pressed={active === c} className={chip(active === c)}>
              {c}
              <span className={`font-mono text-[11px] ${active === c ? "text-ink/60" : "text-muted/70"}`}>{count}</span>
            </button>
          );
        })}
      </div>

      <p className="mt-8 font-mono text-xs uppercase tracking-wider text-muted" aria-live="polite">
        Showing {shown.length} of {solutions.length} solutions
      </p>

      <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((s, i) => (
          <li key={s.slug} className="animate-float-in" style={{ animationDelay: `${i * 50}ms` }}>
            <SolutionTile solution={s} />
          </li>
        ))}
      </ul>
    </>
  );
}
