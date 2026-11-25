import type { Metadata } from "next";
import Contact from "../components/contact";
import PageHeader from "../components/page-header";
import SolutionsGrid from "./solutions-grid";

export const metadata: Metadata = {
  title: "Business App Solutions",
  description:
    "Explore SoftDevGlobal's collection of powerful and scalable business applications designed to streamline your workflow.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Solutions" }]}
        eyebrow="Business app solutions"
        title={
          <>
            Apps that <span className="text-accent">streamline</span> your workflow
          </>
        }
        description="Explore our collection of powerful and scalable business applications designed to streamline your workflow. Every solution is live: open a preview, try the demo, then make it yours."
      />

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SolutionsGrid />
        </div>
      </section>

      <Contact />
    </>
  );
}
