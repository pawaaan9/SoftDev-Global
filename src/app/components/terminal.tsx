"use client";

import { useEffect, useState } from "react";

type Line = { text: string; tone?: "cmd" | "ok" | "muted" | "accent" };

const script: Line[] = [
  { text: "$ softdev new your-business", tone: "cmd" },
  { text: "› pick a solution ........ BMS PRO", tone: "muted" },
  { text: "› brand & customise ...... done", tone: "muted" },
  { text: "› staff & services ....... done", tone: "muted" },
  { text: "$ softdev launch --web --mobile", tone: "cmd" },
  { text: "✓ smart booking engine online", tone: "ok" },
  { text: "✓ staff app on Play Store & App Store", tone: "ok" },
  { text: "$ softdev deploy --prod", tone: "cmd" },
  { text: "✓ live at https://your-business.com.au", tone: "accent" },
];

const toneClass = {
  cmd: "text-white",
  ok: "text-emerald-400",
  muted: "text-muted",
  accent: "text-accent",
};

// A terminal that "runs" the launch process line by line, then loops.
export default function Terminal() {
  const [count, setCount] = useState(script.length);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setCount(0);
    let i = 0;
    const id = setInterval(() => {
      i = i >= script.length + 4 ? 0 : i + 1; // hold the finished output briefly, then restart
      setCount(Math.min(i, script.length));
    }, 650);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl shadow-black/50">
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 hidden font-mono text-xs text-muted sm:inline">~/softdevglobal — zsh</span>
      </div>
      <div className="h-[300px] px-5 py-5 font-mono text-[12.5px] leading-7 sm:text-[13px]">
        {script.slice(0, count).map((l, i) => (
          <p key={i} className={toneClass[l.tone ?? "muted"]}>
            {l.text}
          </p>
        ))}
        <span className="animate-blink inline-block h-4 w-2 translate-y-0.5 bg-primary" />
      </div>
    </div>
  );
}
