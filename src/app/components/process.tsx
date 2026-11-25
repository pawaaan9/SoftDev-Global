import Reveal from "./reveal";
import SectionHeading from "./section-heading";
import Button from "./button";

const steps = [
  {
    title: "Talk to us",
    time: "Free consultation",
    desc: "Tell us how your business runs today. We listen, then recommend a ready-made solution or a custom build, with a clear quote.",
    points: ["Free consultation", "Live demo", "Clear quote"],
  },
  {
    title: "Customise",
    time: "Your brand",
    desc: "We tailor the app to you: your logo and colours, services, staff, branches and the workflow your team already knows.",
    points: ["Branding", "Services & staff", "Workflow setup"],
  },
  {
    title: "Launch",
    time: "Web + mobile",
    desc: "Your booking engine, dashboards and staff apps go live on the web, Google Play and the App Store, with your team trained and ready.",
    points: ["Go-live", "Staff onboarding", "App store release"],
  },
  {
    title: "Grow",
    time: "Ongoing",
    desc: "Hosting, updates and support that keep everything running, plus new features as your business grows.",
    points: ["Hosting & updates", "Local support", "New features"],
  },
];

export default function Process() {
  return (
    <section id="process" className="py-16 sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_1.35fr] lg:px-8">
        {/* sticky intro on desktop */}
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            align="left"
            eyebrow="How we work"
            title="From first call to live app, simply"
            description="No jargon, no surprises. You always know what's happening, what it costs and when you'll go live."
          />
          <Button href="/contact" arrow className="mt-8">
            Book a free consultation
          </Button>
        </div>

        <ol className="relative space-y-4 sm:border-l sm:border-line sm:pl-12">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.title} className="relative">
              <span className="absolute -left-[65px] top-7 hidden h-8 w-8 items-center justify-center rounded-full border border-primary bg-background font-mono text-xs font-semibold text-accent sm:flex">
                {i + 1}
              </span>
              <div className="rounded-2xl border border-line bg-surface p-6 transition hover:border-accent/40 sm:p-7">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary font-mono text-xs font-semibold text-accent sm:hidden">
                      {i + 1}
                    </span>
                    <h3 className="text-2xl font-bold text-fg">{s.title}</h3>
                  </div>
                  <span className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-muted">{s.time}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">{s.desc}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {s.points.map((p) => (
                    <li key={p} className="rounded-md bg-surface-2 px-2.5 py-1 text-xs text-foreground/80">
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
