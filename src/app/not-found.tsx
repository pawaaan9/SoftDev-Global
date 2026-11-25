import Button from "./components/button";

export default function NotFound() {
  return (
    <section className="relative isolate flex flex-1 items-center overflow-hidden py-24">
      <div aria-hidden className="bg-grid absolute inset-0 -z-10" />
      <div className="mx-auto max-w-2xl px-4 text-center">
        <p className="heading-display text-outline font-display font-extrabold">404</p>
        <h1 className="mt-4 text-3xl font-extrabold text-fg sm:text-4xl">This page has gone missing</h1>
        <p className="desc mt-4">The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/" arrow>
            Back to home
          </Button>
          <Button href="/solutions" variant="secondary">
            Browse solutions
          </Button>
        </div>
      </div>
    </section>
  );
}
