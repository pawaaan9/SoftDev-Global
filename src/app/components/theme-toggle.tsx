"use client";

import { useEffect } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

function applyTheme(dark: boolean) {
  const root = document.documentElement;
  root.classList.toggle("dark", dark);
  root.style.colorScheme = dark ? "dark" : "light";
}

// Sun/moon button that switches between light and dark mode and remembers the choice.
// The icons swap with CSS (dark:), so the right icon shows from the first paint.
export default function ThemeToggle({ className = "" }: { className?: string }) {
  // Follow the system theme until the visitor picks one themselves.
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e: MediaQueryListEvent) => {
      try {
        if (localStorage.getItem("theme")) return;
      } catch {
        /* storage unavailable: just follow the system */
      }
      applyTheme(e.matches);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const toggle = () => {
    const dark = !document.documentElement.classList.contains("dark");
    applyTheme(dark);
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {
      /* storage unavailable: the choice lasts until the page reloads */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Switch between light and dark mode"
      title="Switch light / dark mode"
      className={`flex h-11 w-11 items-center justify-center rounded-full bg-fg/[0.06] text-fg transition hover:bg-fg/10 hover:text-accent ${className}`}
    >
      <FiMoon size={17} className="dark:hidden" />
      <FiSun size={17} className="hidden dark:block" />
    </button>
  );
}
