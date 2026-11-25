const row1 = ["Book", "Manage", "Automate", "Launch", "Grow"];
const row2 = ["Salons", "Workshops", "Trades", "Churches", "Clubs", "Real estate", "Finance"];

function Row({ words, reverse }: { words: string[]; reverse?: boolean }) {
  // Several copies so the -50% translate loops seamlessly.
  const items = [...words, ...words, ...words, ...words];
  return (
    <div className="overflow-hidden">
      <ul className={`flex w-max items-center gap-10 pr-10 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
        {items.map((w, i) => (
          <li key={i} aria-hidden={i >= words.length} className="flex items-center gap-10">
            <span
              className={`whitespace-nowrap font-display text-5xl font-extrabold uppercase tracking-tight sm:text-7xl ${
                i % 2 === 0 ? "text-white" : "text-outline"
              }`}
            >
              {w}
            </span>
            <span className="text-3xl text-primary sm:text-5xl">✦</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Big two-row scrolling word band, used as a visual break between sections.
export default function TextBand() {
  return (
    <section aria-label="Book, manage, automate, launch, grow" className="space-y-4 border-y border-line py-10">
      <Row words={row1} />
      <Row words={row2} reverse />
    </section>
  );
}
