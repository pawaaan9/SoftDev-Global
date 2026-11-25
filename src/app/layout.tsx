import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import LinesBackground from "./components/lines-bg";
import { site } from "./data/site";

// Inter and Poppins are the fonts softdev.global already uses.
const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});
const jetbrains = JetBrains_Mono({ variable: "--font-jetbrains", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "SoftDevGlobal | Business App Solutions",
    template: "%s | SoftDevGlobal",
  },
  description:
    "SoftDevGlobal builds powerful, scalable business apps: booking systems, workshop and trade management, and apps for salons, churches, clubs, finance and real estate.",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f7fb" },
    { media: "(prefers-color-scheme: dark)", color: "#050a14" },
  ],
};

// Runs before the first paint so the page never flashes the wrong theme: uses the visitor's
// saved choice, or their system setting if they haven't picked one. See components/theme-toggle.tsx.
const themeScript = `(function(){try{var s=localStorage.getItem("theme");var d=s?s==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;var r=document.documentElement;r.classList.toggle("dark",d);r.style.colorScheme=d?"dark":"light";}catch(e){}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Font variables live on <html> so the theme's --font-display / --font-mono
    // (defined on :root) can resolve them. suppressHydrationWarning: the theme script
    // adds the "dark" class to <html> before React loads.
    <html
      lang="en-AU"
      className={`${inter.variable} ${poppins.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <LinesBackground />
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
