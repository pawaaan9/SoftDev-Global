import { FiCheck } from "react-icons/fi";
import Button from "./button";
import Reveal from "./reveal";
import SectionHeading from "./section-heading";

const models = [
  {
    name: "Ready-made solution",
    best: "Best for salons, workshops, trades, churches and clubs",
    points: ["Start from a proven, live app", "Customised to your brand and services", "Launch fast on web and mobile"],
    featured: true,
  },
  {
    name: "Custom build",
    best: "Best for unique workflows and new ideas",
    points: ["Designed around how you work", "Web, mobile and integrations", "Built by the team behind BMS PRO"],
    featured: false,
  },
  {
    name: "Hosting & support",
    best: "Best for live apps that need care",
    points: ["Reliable cloud hosting and backups", "Security updates and fixes", "New features as you grow"],
    featured: false,
  },
];

export default function Engagement() {
  return (
    <section id="engagement" className="py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Ways to work together"
          title="Choose the path that fits"
          description="Start with what you need today. You can always add features, staff apps or new locations as you grow."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {models.map((m, i) => (
            <Reveal key={m.name} delay={i * 100}>
              <div
                className={`flex h-full flex-col rounded-3xl border p-8 ${
                  m.featured ? "border-royal bg-royal" : "border-line bg-surface"
                }`}
              >
                {m.featured && (
                  <span className="mb-5 w-fit rounded-full bg-primary px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-ink">
                    Most popular
                  </span>
                )}
                <h3 className="text-2xl font-bold text-white">{m.name}</h3>
                <p className={`mt-2 text-sm ${m.featured ? "text-white/75" : "text-muted"}`}>{m.best}</p>
                <ul className="mt-8 space-y-3.5">
                  {m.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm">
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          m.featured ? "bg-white text-royal" : "bg-surface-2 text-accent"
                        }`}
                      >
                        <FiCheck size={12} />
                      </span>
                      <span className={m.featured ? "text-white" : "text-foreground/85"}>{p}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-10">
                  <Button href="/contact" variant={m.featured ? "light" : "secondary"} arrow className="w-full">
                    Get a quote
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
