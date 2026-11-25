import type { Metadata } from "next";
import { Suspense } from "react";
import { FiClock, FiFileText, FiMail, FiMapPin, FiMessageSquare, FiPhone, FiPlayCircle } from "react-icons/fi";
import Faq from "../components/faq";
import PageHeader from "../components/page-header";
import { site } from "../data/site";
import ContactForm from "./contact-form";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "We're here to help. Reach out to SoftDevGlobal with any questions or to start your next project.",
};

const nextSteps = [
  { icon: FiMessageSquare, title: `We reply ${site.replyTime}`, desc: "A real person on our team reads every message." },
  { icon: FiPlayCircle, title: "Free consultation & live demo", desc: "We learn how you work and show you the app in action." },
  { icon: FiFileText, title: "Clear quote", desc: "Scope, pricing and timeline in writing. No obligation." },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Contact" }]}
        eyebrow="Contact us"
        title="We're here to help"
        description="Reach out to us with any questions or to start your next project."
      />

      <section className="py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.5fr_1fr] lg:px-8">
          <Suspense fallback={<div className="min-h-[640px] rounded-3xl border border-line bg-surface" />}>
            <ContactForm />
          </Suspense>

          <aside className="space-y-6">
            <div className="dark relative overflow-hidden rounded-3xl bg-royal p-8">
              <span aria-hidden className="absolute -bottom-14 -right-14 h-40 w-40 rounded-full border-[24px] border-fg/10" />
              <p className="relative font-mono text-xs uppercase tracking-wider text-fg/65">Contact information</p>
              <ul className="relative mt-6 space-y-5">
                <li>
                  <a href={site.phoneHref} className="group flex items-center gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-fg/10 text-fg">
                      <FiPhone size={18} />
                    </span>
                    <span className="text-lg font-bold text-fg group-hover:underline">{site.phone}</span>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${site.email}`} className="group flex items-center gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-fg/10 text-fg">
                      <FiMail size={18} />
                    </span>
                    <span className="break-all text-lg font-bold text-fg group-hover:underline">{site.email}</span>
                  </a>
                </li>
                <li>
                  <a href={site.mapsHref} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-fg/10 text-fg">
                      <FiMapPin size={18} />
                    </span>
                    <span className="text-fg/85 group-hover:underline">
                      {site.address.street}, {site.address.locality}, {site.address.country}
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-line bg-surface p-8">
              <h2 className="flex items-center gap-2 font-bold text-fg">
                <FiClock className="text-accent" /> What happens next
              </h2>
              <ol className="mt-6 space-y-6">
                {nextSteps.map(({ icon: Icon, title, desc }, i) => (
                  <li key={title} className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface-2 text-accent">
                      <Icon size={18} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-fg">
                        <span className="mr-2 font-mono text-xs text-muted">0{i + 1}</span>
                        {title}
                      </p>
                      <p className="mt-1 text-sm text-muted">{desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </section>

      <Faq />
    </>
  );
}
