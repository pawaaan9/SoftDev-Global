import Link from "next/link";

// The SoftDevGlobal mark: the wizard hat inside an open ring, redrawn as SVG from the
// original logo. The ring and hat use currentColor; the hat band is SoftDev azure.
// Keep in sync with src/app/icon.svg.
export function LogoMark({ className = "h-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={`w-auto ${className}`} aria-hidden>
      <path
        d="M5.59 26.39A27 27 0 0 1 58.41 26.39M58.41 37.61A27 27 0 0 1 5.59 37.61"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <path
        fill="currentColor"
        d="M20 43.5C22 34 26 24 31 17C33 14 36 12 39 12.5L48 19L41.5 18.5C41 27 42.5 36 44 43.5Q32 45.5 20 43.5Z"
      />
      <path className="fill-primary" d="M21.3 37.6Q32 40.2 42.9 37.4L43.6 41.4Q32 43.8 20.6 41.6Z" />
      <path fill="currentColor" d="M11 42Q32 54 53 42Q32 46.5 11 42Z" />
    </svg>
  );
}

export default function Logo({ size = "md" }: { size?: "md" | "lg" }) {
  const large = size === "lg";
  return (
    <Link href="/" aria-label="SoftDevGlobal home" className="group inline-flex shrink-0 items-center gap-3 text-fg">
      <LogoMark className={`${large ? "h-11" : "h-9"} transition duration-300 group-hover:-rotate-6`} />
      <span aria-hidden className={`${large ? "h-9" : "h-8"} w-px bg-line`} />
      <span className="flex flex-col leading-none">
        <span className={`${large ? "text-xl" : "text-[17px]"} font-display font-bold tracking-[0.06em]`}>SOFTDEV</span>
        <span className={`${large ? "mt-1.5 text-[10px]" : "mt-1 text-[9px]"} font-semibold tracking-[0.42em] text-accent`}>
          GLOBAL
        </span>
      </span>
    </Link>
  );
}
