import { FiArrowDown, FiCalendar, FiZap } from "react-icons/fi";
import { solutions } from "../data/solutions";
import Button from "./button";
import Terminal from "./terminal";
import TypedWords from "./typed-words";

// Keep each word short enough to fit one line on a phone (the typed word doesn't wrap).
const words = ["booking systems", "workshop apps", "trade job apps", "church apps", "club apps", "finance apps"];

const highlights = [
  { k: `${solutions.length} live apps`, v: "Ready to customise" },
  { k: "Web + mobile", v: "Owner, staff & client" },
  { k: "24-hour reply", v: "Real local support" },
];

// Rotating circular label drawn with an SVG text path.
function SpinningBadge() {
  return (
    <div className="absolute -left-14 -top-14 hidden h-32 w-32 items-center justify-center rounded-full border border-line bg-background xl:flex">
      <svg viewBox="0 0 100 100" className="animate-spin-slow absolute inset-0 h-full w-full">
        <defs>
          <path id="badge-circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
        </defs>
        <text className="fill-muted font-mono text-[8.5px] uppercase tracking-[0.2em]">
          <textPath href="#badge-circle">Book · Manage · Automate · Grow ·</textPath>
        </text>
      </svg>
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-ink">
        <FiArrowDown />
      </span>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-[calc(100svh-74px)] items-center overflow-hidden">
      <div aria-hidden className="bg-grid absolute inset-0 -z-10" />

      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Business app solutions
            </span>

            <h1 className="heading-hero mt-5 font-extrabold text-white">
              We design &amp; build
              <br />
              <TypedWords words={words} />
              <br />
              <span className="text-outline">that scale.</span>
            </h1>

            <p className="desc mt-6 max-w-xl">
              Powerful, scalable business applications designed to streamline your workflow. Start
              from a proven app that&rsquo;s already live, make it yours, and launch on web and mobile
              with a Melbourne team behind you.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/solutions" arrow>
                Explore solutions
              </Button>
              <Button href="/contact" variant="secondary">
                Contact us for a quote
              </Button>
            </div>

            <dl className="mt-10 grid max-w-lg grid-cols-3 divide-x divide-line border-y border-line">
              {highlights.map((h) => (
                <div key={h.k} className="px-4 py-4 first:pl-0">
                  <dt className="text-sm font-bold text-white">{h.k}</dt>
                  <dd className="mt-1 text-xs text-muted">{h.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <SpinningBadge />
            <Terminal />

            <div className="animate-float absolute -bottom-7 left-3 flex items-center gap-3 rounded-xl border border-line bg-surface-2 px-4 py-3 shadow-xl shadow-black/40 sm:-left-8">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-400/15 text-emerald-400">
                <FiCalendar size={18} />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">New booking confirmed</p>
                <p className="text-xs text-muted">Reminder sent to client</p>
              </div>
            </div>

            <div className="sm-float-delayed absolute right-3 top-2 flex items-center gap-1.5 rounded-lg bg-primary px-2.5 py-1 sm:-right-6 sm:-top-5 sm:gap-2 sm:rounded-xl sm:px-3.5 sm:py-2 sm:shadow-xl sm:shadow-black/40">
              <FiZap className="text-ink" size={13} />
              <span className="text-[11px] font-semibold text-ink sm:text-xs">Live previews available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
