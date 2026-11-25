import Link from "next/link";
import { FiArrowUp, FiArrowUpRight, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { navLinks } from "../data/nav";
import { services } from "../data/services";
import { site } from "../data/site";
import { solutions } from "../data/solutions";
import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden border-t border-line pt-14 text-sm text-muted sm:pt-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-10 px-4 sm:px-6 md:gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:px-8">
        <div className="col-span-2 lg:col-span-1">
          <Logo size="lg" />
          <p className="mt-5 max-w-xs leading-relaxed">{site.tagline}</p>
          <ul className="mt-6 space-y-2.5">
            <li>
              <a href={site.phoneHref} className="inline-flex items-center gap-2.5 text-fg transition hover:text-accent">
                <FiPhone className="text-accent" /> {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2.5 text-fg transition hover:text-accent">
                <FiMail className="text-accent" /> {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-start gap-2.5 transition hover:text-fg"
              >
                <FiMapPin className="mt-0.5 shrink-0 text-accent" />
                {site.address.street}, {site.address.locality}, {site.address.country}
              </a>
            </li>
          </ul>
        </div>

        <FooterCol title="Solutions">
          {solutions.map((s) => (
            <FooterLink key={s.slug} href={`/solutions/${s.slug}`}>{s.name}</FooterLink>
          ))}
        </FooterCol>

        <FooterCol title="Services">
          {services.map((s) => (
            <FooterLink key={s.slug} href={`/services/${s.slug}`}>{s.title}</FooterLink>
          ))}
        </FooterCol>

        <FooterCol title="Company">
          {navLinks.map((l) => (
            <FooterLink key={l.href} href={l.href}>{l.label}</FooterLink>
          ))}
          <FooterLink href="/contact">Contact</FooterLink>
          <li className="pt-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 font-semibold text-fg transition hover:border-primary hover:bg-primary hover:text-white"
            >
              Get a quote <FiArrowUpRight className="transition group-hover:rotate-45" />
            </Link>
          </li>
        </FooterCol>
      </div>

      {/* oversized outlined wordmark */}
      <div aria-hidden className="mx-auto mt-14 max-w-7xl select-none px-4 sm:mt-20 sm:px-6 lg:px-8">
        <svg viewBox="0 0 1000 150" className="block h-auto w-full">
          <text
            x="0"
            y="128"
            textLength="1000"
            lengthAdjust="spacingAndGlyphs"
            className="fill-transparent font-display font-extrabold uppercase"
            style={{ fontSize: 160, stroke: "var(--outline)", strokeWidth: 1.2 }}
          >
            SoftDevGlobal
          </text>
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-3 border-t border-line py-6 text-xs sm:flex-row">
          <p>&copy; {new Date().getFullYear()} {site.name}. All Rights Reserved.</p>
          <a href="#" className="group inline-flex items-center gap-2 transition hover:text-fg">
            Back to top
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-line transition group-hover:border-primary group-hover:bg-primary group-hover:text-white">
              <FiArrowUp />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-mono text-xs uppercase tracking-wider text-fg">{title}</h3>
      <ul className="mt-5 space-y-3">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="transition hover:text-fg">
        {children}
      </Link>
    </li>
  );
}
