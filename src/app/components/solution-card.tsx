import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import type { Solution } from "../data/solutions";

export function LiveBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/15 px-2.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
      Live
    </span>
  );
}

// Screenshot in a rounded frame. All product shots are 3:2.
export function Shot({ src, alt, sizes, priority }: { src: string; alt: string; sizes: string; priority?: boolean }) {
  return (
    <div className="relative aspect-[3/2] overflow-hidden rounded-xl border border-line bg-surface-2 shadow-2xl shadow-black/10 dark:shadow-black/40">
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
    </div>
  );
}

// Large horizontal card linking to a solution's page.
export default function SolutionCard({ solution, index = 0 }: { solution: Solution; index?: number }) {
  return (
    <Link
      href={`/solutions/${solution.slug}`}
      className="group grid overflow-hidden rounded-3xl border border-line bg-surface transition duration-300 hover:border-primary md:grid-cols-[1.1fr_1fr]"
    >
      {/* visual */}
      <div className="bg-dots relative flex items-center overflow-hidden border-b border-line bg-surface-2 px-6 pb-8 pt-16 sm:px-12 md:min-h-[440px] md:border-b-0 md:border-r">
        <span className="absolute left-5 top-5 z-10 rounded-full border border-line bg-background px-3 py-1 font-mono text-[11px] text-muted">
          {String(index + 1).padStart(2, "0")} / {solution.categories[solution.categories.length - 1]}
        </span>
        <div className="w-full transition duration-700 group-hover:scale-[1.03]">
          <Shot src={solution.image} alt={`${solution.name} screenshot`} sizes="(min-width: 768px) 45vw, 90vw" />
        </div>
      </div>

      {/* details */}
      <div className="flex flex-col p-6 sm:p-10">
        <div className="flex flex-wrap items-center gap-3">
          <LiveBadge />
          <span className="text-xs text-muted">{solution.categories.join(", ")}</span>
        </div>
        <h3 className="mt-5 text-3xl font-extrabold text-fg sm:text-4xl">{solution.name}</h3>
        <p className="desc mt-4 line-clamp-4">{solution.summary}</p>

        <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-line pt-6 text-sm">
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-wider text-muted">Modules</dt>
            <dd className="mt-2 space-y-1 text-foreground/90">
              {solution.modules.map((m) => (
                <p key={m.title}>{m.title}</p>
              ))}
            </dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-wider text-muted">Platforms</dt>
            <dd className="mt-2 text-foreground/90">{solution.platforms}</dd>
          </div>
        </dl>

        <span className="mt-auto inline-flex items-center gap-2 pt-10 text-sm font-semibold text-fg">
          <span className="border-b border-primary pb-0.5">View solution &amp; live preview</span>
          <FiArrowUpRight className="text-accent transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}

// Compact card used in grids.
export function SolutionTile({ solution, showSummary = true }: { solution: Solution; showSummary?: boolean }) {
  return (
    <Link
      href={`/solutions/${solution.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface transition duration-300 hover:-translate-y-1 hover:border-primary"
    >
      <div className="bg-dots border-b border-line bg-surface-2 p-4">
        <div className="transition duration-700 group-hover:scale-[1.03]">
          <Shot src={solution.image} alt={`${solution.name} screenshot`} sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw" />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="truncate text-xs text-muted">{solution.categories.join(", ")}</span>
          <LiveBadge />
        </div>
        <h3 className="mt-4 text-xl font-bold text-fg">{solution.name}</h3>
        {showSummary && <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">{solution.summary}</p>}
        <div className="mt-auto flex items-center justify-between pt-6">
          <span className="text-sm font-semibold text-fg">View details</span>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-fg transition group-hover:rotate-45 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
            <FiArrowUpRight />
          </span>
        </div>
      </div>
    </Link>
  );
}
