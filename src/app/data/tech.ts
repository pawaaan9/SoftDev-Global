import type { IconType } from "react-icons";
import {
  SiAndroid,
  SiApple,
  SiCloudflare,
  SiExpo,
  SiFigma,
  SiFirebase,
  SiFlutter,
  SiGithubactions,
  SiGooglecalendar,
  SiGooglecloud,
  SiGooglemaps,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiWhatsapp,
} from "react-icons/si";

export type Tech = {
  name: string;
  icon: IconType;
  color: string; // brand color for the icon
};

export type TechGroup = {
  title: string;
  description: string;
  items: Tech[];
};

// Edit this list to match the technologies the team actually works with.
export const techGroups: TechGroup[] = [
  {
    title: "Frontend",
    description: "Fast, responsive interfaces",
    items: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    ],
  },
  {
    title: "Mobile",
    description: "Apps for iOS and Android",
    items: [
      { name: "React Native", icon: SiReact, color: "#61DAFB" },
      { name: "Flutter", icon: SiFlutter, color: "#02569B" },
      { name: "Expo", icon: SiExpo, color: "#FFFFFF" },
      { name: "Android", icon: SiAndroid, color: "#3DDC84" },
      { name: "iOS", icon: SiApple, color: "#FFFFFF" },
    ],
  },
  {
    title: "Backend & Data",
    description: "Secure APIs and real-time data",
    items: [
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    ],
  },
  {
    title: "Cloud & Hosting",
    description: "Reliable, scalable infrastructure",
    items: [
      { name: "Google Cloud", icon: SiGooglecloud, color: "#4285F4" },
      { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
      { name: "Cloudflare", icon: SiCloudflare, color: "#F38020" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
    ],
  },
  {
    title: "Integrations",
    description: "Connect the tools you already use",
    items: [
      { name: "Stripe", icon: SiStripe, color: "#635BFF" },
      { name: "Google Calendar", icon: SiGooglecalendar, color: "#4285F4" },
      { name: "Google Maps", icon: SiGooglemaps, color: "#34A853" },
      { name: "WhatsApp", icon: SiWhatsapp, color: "#25D366" },
    ],
  },
];

// Flat, de-duplicated list for the scrolling logo strip.
export const allTech: Tech[] = techGroups
  .flatMap((g) => g.items)
  .filter((t, i, arr) => arr.findIndex((x) => x.name === t.name) === i);

export function findTech(name: string): Tech | undefined {
  return allTech.find((t) => t.name === name);
}
