import { FiGitBranch, FiMapPin, FiPlayCircle, FiSliders, FiSmartphone, FiZap } from "react-icons/fi";
import Reveal from "./reveal";
import SectionHeading from "./section-heading";

export default function WhyUs() {
  return (
    <section id="why-us" className="py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why SoftDevGlobal"
          title="Business software that fits the way you work"
          description="We build apps that busy owners and their teams actually enjoy using. These principles shape everything we make."
        />

        {/* bento grid */}
        <div className="mt-14 grid auto-rows-[minmax(200px,auto)] gap-4 md:grid-cols-6">
          <Reveal className="md:col-span-4 md:row-span-2">
            <div className="dark relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-royal p-8 sm:p-10">
              <span aria-hidden className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full border-[40px] border-fg/10" />
              <span aria-hidden className="absolute -bottom-6 right-20 h-24 w-24 rounded-full border-[14px] border-fg/10" />
              <FiZap size={30} className="text-fg" />
              <div className="relative mt-16 max-w-xl">
                <h3 className="text-3xl font-extrabold text-fg sm:text-4xl">Proven, ready to launch</h3>
                <p className="mt-4 text-base leading-relaxed text-fg/80">
                  Our apps are already live and running real businesses. Start from a proven solution,
                  make it yours, and launch sooner, without the cost and risk of building from scratch.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal className="md:col-span-2" delay={80}>
            <Card icon={<FiPlayCircle size={22} />} title="Try before you buy" desc="Live previews, demo logins and videos for every solution." />
          </Reveal>
          <Reveal className="md:col-span-2" delay={160}>
            <Card icon={<FiSliders size={22} />} title="Fully customisable" desc="Your brand, services and workflow, not a one-size-fits-all template." />
          </Reveal>
          <Reveal className="md:col-span-2">
            <Card icon={<FiSmartphone size={22} />} title="Web + mobile" desc="Owner dashboards, booking engines and staff apps that work together." />
          </Reveal>
          <Reveal className="md:col-span-2" delay={80}>
            <Card icon={<FiGitBranch size={22} />} title="Built to scale" desc="From a single chair to multi-branch businesses with owner and branch views." />
          </Reveal>
          <Reveal className="md:col-span-2" delay={160}>
            <Card icon={<FiMapPin size={22} />} title="Local support" desc="A Melbourne team that replies within 24 hours." />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Card({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="group flex h-full flex-col justify-between rounded-3xl border border-line bg-surface p-7 transition hover:border-accent/40">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface-2 text-accent transition group-hover:bg-primary group-hover:text-white">
        {icon}
      </span>
      <div className="mt-8">
        <h3 className="text-lg font-bold text-fg">{title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted">{desc}</p>
      </div>
    </div>
  );
}
