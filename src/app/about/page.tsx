import type { Metadata } from "next";
import Contact from "../components/contact";
import Engagement from "../components/engagement";
import PageHeader from "../components/page-header";
import Reveal from "../components/reveal";
import TechMarquee from "../components/tech-marquee";
import WhyUs from "../components/why-us";
import { solutions } from "../data/solutions";

export const metadata: Metadata = {
  title: "About",
  description:
    "SoftDevGlobal builds powerful, scalable business applications for salons, workshops, trades, churches, clubs, finance and real estate.",
};

const values = [
  { k: "Mission", v: "Help businesses run smoother with software that streamlines their workflow and saves them time." },
  { k: "Vision", v: "Powerful business apps within reach of every business, from a single salon to a multi-branch workshop." },
  { k: "Approach", v: "Start from proven solutions, customise them properly, and stay close with real, local support." },
];

const stats = [
  { k: String(solutions.length), v: "Live business apps" },
  { k: "7", v: "Industries served" },
  { k: "24h", v: "Reply time" },
  { k: "Web + mobile", v: "Including iOS & Android" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "About" }]}
        eyebrow="About us"
        title={
          <>
            Software that helps businesses <span className="text-accent">run smoother</span>.
          </>
        }
        description="SoftDevGlobal designs, builds and supports powerful, scalable business applications, from online booking and workshop management to apps for churches, clubs, finance and real estate."
      />

      {/* story */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-extrabold text-fg sm:text-4xl">What we do</h2>
          </Reveal>
          <Reveal delay={100} className="space-y-5 text-lg leading-relaxed text-foreground/80">
            <p>
              We build business applications for the industries that keep communities running: salons
              and spas, mechanics and tradies, churches and clubs, lenders and real estate agents.
            </p>
            <p>
              Our approach is simple. Most businesses don&rsquo;t need software built from scratch; they
              need proven tools that fit the way they already work. So we build complete solutions like
              the BMS PRO platforms, then tailor each one to the business using it, with owner
              dashboards, booking engines and staff apps that work together.
            </p>
            <p>
              From our base in Lynbrook, Victoria, in Melbourne&rsquo;s south-east, we design, build and
              support web platforms and mobile apps for businesses across Australia and
              beyond.
            </p>
          </Reveal>
        </div>
      </section>

      {/* at a glance */}
      <section className="border-y border-line">
        <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-line lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.v} delay={i * 80} className="bg-background">
              <div className="h-full p-8 sm:p-10">
                <dt className="font-display text-3xl font-extrabold text-fg sm:text-4xl">{s.k}</dt>
                <dd className="mt-2 text-sm text-muted">{s.v}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </section>

      {/* mission / vision / approach */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-7xl gap-px bg-line md:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.k} delay={i * 100} className="bg-background">
              <div className="h-full p-8 sm:p-10">
                <span className="font-mono text-xs uppercase tracking-wider text-accent">0{i + 1} / {v.k}</span>
                <p className="mt-5 text-xl font-semibold leading-snug text-fg">{v.v}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <WhyUs />
      <TechMarquee />
      <Engagement />
      <Contact />
    </>
  );
}
