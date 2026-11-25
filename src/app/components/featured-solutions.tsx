import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { solutions } from "../data/solutions";
import Reveal from "./reveal";
import SectionHeading from "./section-heading";
import SolutionCard, { SolutionTile } from "./solution-card";

export default function FeaturedSolutions() {
  const flagship = solutions.filter((s) => s.flagship);
  const more = solutions.filter((s) => !s.flagship);

  return (
    <section id="solutions" className="py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            align="left"
            eyebrow="Business app solutions"
            title="Live apps, ready for your business"
            description="Explore our collection of powerful and scalable business applications designed to streamline your workflow. Every one is live, so you can try it today."
          />
          <Link href="/solutions" className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-fg">
            <span className="border-b border-primary pb-0.5">All {solutions.length} solutions</span>
            <FiArrowUpRight className="text-accent transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="mt-14 space-y-6">
          {flagship.map((s, i) => (
            <Reveal key={s.slug}>
              <SolutionCard solution={s} index={i} />
            </Reveal>
          ))}
        </div>

        <h3 className="mt-16 font-mono text-xs uppercase tracking-wider text-muted">More industry apps</h3>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {more.map((s, i) => (
            <Reveal as="li" key={s.slug} delay={(i % 5) * 70}>
              <SolutionTile solution={s} showSummary={false} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
