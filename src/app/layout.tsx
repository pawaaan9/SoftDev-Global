import type { Metadata } from "next";
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Font variables live on <html> so the theme's --font-display / --font-mono
    // (defined on :root) can resolve them.
    <html lang="en-AU" className={`${inter.variable} ${poppins.variable} ${jetbrains.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <LinesBackground />
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
