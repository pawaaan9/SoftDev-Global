import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiArrowUpRight, FiCheck, FiExternalLink, FiKey, FiPlay } from "react-icons/fi";
import Button from "@/app/components/button";
import Contact from "@/app/components/contact";
import PageHeader from "@/app/components/page-header";
import Reveal from "@/app/components/reveal";
import { LiveBadge, Shot } from "@/app/components/solution-card";
import { findSolutionBySlug, solutions, type Module } from "@/app/data/solutions";

type ParamsPromise = Promise<{ slug: string }>; // Next.js 15 passes params as a Promise

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: ParamsPromise }): Promise<Metadata> {
  const { slug } = await params;
  const solution = findSolutionBySlug(slug);
  if (!solution) return {};
  return { title: solution.title, description: solution.summary };
}

export default async function SolutionPage({ params }: { params: ParamsPromise }) {
  const { slug } = await params;
  const solution = findSolutionBySlug(slug);
  if (!solution) return notFound();

  const index = solutions.findIndex((s) => s.slug === solution.slug);
  const next = solutions[(index + 1) % solutions.length];
  const preview = solution.modules.find((m) => m.previewUrl)?.previewUrl;
  const quoteHref = `/contact?solution=${solution.slug}`;

  return (
    <>
      <PageHeader
        crumbs={[{ href: "/solutions", label: "Solutions" }, { label: solution.name }]}
        eyebrow={`Solution · ${solution.categories.join(", ")}`}
        title={solution.title}
        description={solution.summary}
      >
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href={quoteHref} arrow>
            Contact us for a quote
          </Button>
          {preview && (
            <Button href={preview} external variant="secondary">
              Live preview <FiExternalLink />
            </Button>
          )}
          <Button href="/solutions" variant="secondary">
            <FiArrowLeft /> All solutions
          </Button>
        </div>
      </PageHeader>

      {/* solution facts */}
      <section className="border-b border-line">
        <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-line lg:grid-cols-4">
          <Fact label="Industry" value={solution.categories.join(", ")} />
          <Fact label="Platforms" value={solution.platforms} />
          <Fact label="Modules" value={`${solution.modules.length} included`} />
          <Fact label="Status" value={<LiveBadge />} />
        </dl>
      </section>

      {/* hero visual */}
      <section className="py-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="bg-dots rounded-3xl border border-line bg-surface p-4 sm:p-12 lg:px-32">
              <div className="relative aspect-[3/2] overflow-hidden rounded-2xl border border-line shadow-2xl shadow-black/10 dark:shadow-black/50">
                <Image src={solution.image} alt={`${solution.title} screenshot`} fill priority sizes="(min-width: 1024px) 70vw, 95vw" className="object-cover" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* overview / modules / features */}
      <section className="py-10 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[260px_1fr] lg:px-8">
          <aside className="hidden lg:sticky lg:top-32 lg:block lg:self-start">
            <p className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              On this page
            </p>
            <ul className="mt-6 space-y-2 border-l border-line font-mono text-xs">
              {[
                ["overview", "Overview"],
                ["modules", "Modules & live previews"],
                ["key-features", "Key features"],
              ].map(([id, label]) => (
                <li key={id}>
                  <a href={`#${id}`} className="-ml-px block border-l border-transparent py-1 pl-4 text-muted transition hover:border-primary hover:text-fg">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <Link
              href={quoteHref}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-hover"
            >
              Get a quote <FiArrowUpRight />
            </Link>
          </aside>

          <div className="space-y-14 sm:space-y-20">
            <Reveal>
              <div id="overview" className="scroll-mt-32">
                <h2 className="text-3xl font-extrabold text-fg">Overview</h2>
                <p className="mt-5 max-w-3xl text-lg leading-relaxed text-foreground/80">{solution.intro}</p>
              </div>
            </Reveal>

            <div id="modules" className="scroll-mt-32">
              <h2 className="text-3xl font-extrabold text-fg">Modules &amp; live previews</h2>
              <p className="mt-3 max-w-2xl text-muted">
                Click &ldquo;Live preview&rdquo; to see how each part of the system works. Use the demo login where one is shown.
              </p>
              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {solution.modules.map((m, i) => (
                  <Reveal key={m.title} delay={(i % 2) * 90}>
                    <ModuleCard module={m} index={i} name={solution.name} />
                  </Reveal>
                ))}
              </div>
            </div>

            <div id="key-features" className="scroll-mt-32">
              <h2 className="text-3xl font-extrabold text-fg">Key features</h2>
              <div className="mt-8 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
                {solution.features.map((f) => (
                  <div key={f.title} className="bg-background p-7">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-2 text-accent">
                      <FiCheck size={14} />
                    </span>
                    <h3 className="mt-5 font-bold text-fg">{f.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* quote */}
      <section className="border-y border-line py-16 sm:py-24">
        <Reveal className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <span className="font-mono text-6xl leading-none text-accent">&ldquo;</span>
          <p className="mt-2 font-display text-2xl font-extrabold leading-tight text-fg sm:text-5xl">{solution.quote}</p>
          <p className="mt-6 font-mono text-xs uppercase tracking-wider text-muted">{solution.name}</p>
        </Reveal>
      </section>

      {/* next solution */}
      <section className="py-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href={`/solutions/${next.slug}`} className="group flex items-center justify-between gap-6 rounded-3xl border border-line bg-surface p-6 transition hover:border-primary sm:p-8">
            <div className="flex items-center gap-6">
              <div className="relative hidden aspect-[3/2] w-36 overflow-hidden rounded-xl border border-line sm:block">
                <Image src={next.image} alt="" fill sizes="144px" className="object-cover" />
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-muted">Next solution</p>
                <p className="mt-2 text-2xl font-extrabold text-fg sm:text-3xl">{next.name}</p>
              </div>
            </div>
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-line text-fg transition group-hover:rotate-45 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
              <FiArrowUpRight size={22} />
            </span>
          </Link>
        </div>
      </section>

      <Contact />
    </>
  );
}

function ModuleCard({ module: m, index, name }: { module: Module; index: number; name: string }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface">
      <div className="bg-dots border-b border-line bg-surface-2 p-4 sm:p-5">
        <Shot src={m.image} alt={`${name} ${m.title}`} sizes="(min-width: 1024px) 35vw, (min-width: 768px) 45vw, 90vw" />
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <span className="font-mono text-xs text-muted">{String(index + 1).padStart(2, "0")}</span>
        <h3 className="mt-2 text-xl font-bold text-fg">{m.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{m.desc}</p>
        {m.note && <p className="mt-3 text-sm leading-relaxed text-foreground/85">{m.note}</p>}

        {m.demo && (
          <div className="mt-5 rounded-xl border border-line bg-background px-4 py-3 font-mono text-xs">
            <p className="flex items-center gap-2 uppercase tracking-wider text-accent">
              <FiKey /> Demo login
            </p>
            <p className="mt-2 break-all text-muted">
              Email: <span className="select-all text-fg">{m.demo.email}</span>
            </p>
            <p className="mt-0.5 break-all text-muted">
              Password: <span className="select-all text-fg">{m.demo.password}</span>
            </p>
          </div>
        )}

        {(m.previewUrl || m.videoUrl) && (
          <div className="mt-auto flex flex-wrap gap-2 pt-6">
            {m.previewUrl && (
              <a
                href={m.previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-hover"
              >
                Live preview <FiExternalLink />
              </a>
            )}
            {m.videoUrl && (
              <a
                href={m.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2.5 text-sm font-semibold text-fg transition hover:border-accent/50 hover:bg-fg/5"
              >
                <FiPlay /> Watch video
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function Fact({ label, value, className = "" }: { label: string; value: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-background px-4 py-5 sm:px-6 sm:py-6 lg:px-8 ${className}`}>
      <dt className="font-mono text-[11px] uppercase tracking-wider text-muted">{label}</dt>
      <dd className="mt-2 text-sm font-medium text-fg">{value}</dd>
    </div>
  );
}
