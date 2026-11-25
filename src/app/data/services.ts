import type { IconType } from "react-icons";
import { FiCalendar, FiCloud, FiCode, FiLayers, FiPackage, FiSmartphone } from "react-icons/fi";

export type Service = {
  slug: string;
  title: string;
  short: string; // one line, used in cards and the nav menu
  icon: IconType;
  intro: string; // paragraph at the top of the service page
  capabilities: { title: string; desc: string }[];
  deliverables: string[];
  tech: string[]; // names matching data/tech.ts
  related: string[]; // solution slugs from data/solutions.ts
};

export const services: Service[] = [
  {
    slug: "business-management-systems",
    title: "Business Management Systems",
    short: "All-in-one platforms that run bookings, jobs, staff and invoicing.",
    icon: FiLayers,
    intro:
      "Our BMS PRO platforms bring the whole business into one system: owner dashboards, branch admin, bookings, staff, invoicing and reporting. We tailor them to your industry, or build one around the way you already work.",
    capabilities: [
      { title: "Owner dashboards", desc: "See every branch, booking, job and invoice in one place, in real time." },
      { title: "Multi-branch admin", desc: "Give each location its own admin view while you keep the full picture." },
      { title: "Jobs, quotes & invoices", desc: "From first enquiry to paid invoice without double entry or paperwork." },
      { title: "Inventory & staff", desc: "Track stock, rosters and team activity alongside your daily operations." },
    ],
    deliverables: ["Owner dashboard", "Branch admin portal", "Role-based access", "Invoicing & reports", "Staff mobile app", "Training & support"],
    tech: ["Next.js", "React", "TypeScript", "Firebase", "Google Cloud", "Stripe"],
    related: ["bms-pro-pink", "bms-pro-trade", "bms-pro-mechanic"],
  },
  {
    slug: "booking-systems",
    title: "Online Booking Systems",
    short: "Smart booking engines that fill your calendar and cut no-shows.",
    icon: FiCalendar,
    intro:
      "Let customers book you any time, on any device. Our smart booking engines handle services, staff availability, reminders and client records, so your calendar fills up while admin drops away.",
    capabilities: [
      { title: "Smart booking engine", desc: "A branded booking page where clients pick a service, staff member and time." },
      { title: "Staff & services", desc: "Manage rosters, service menus, durations and pricing from one dashboard." },
      { title: "Reminders & follow-ups", desc: "Automated messages that reduce no-shows and bring clients back." },
      { title: "Client records", desc: "Booking history and client details at your team's fingertips." },
    ],
    deliverables: ["Online booking page", "Staff & service setup", "Automated reminders", "Client database", "Admin dashboard", "Go-live support"],
    tech: ["Next.js", "React", "Firebase", "Google Calendar", "Stripe"],
    related: ["bms-pro-pink", "salon-app", "bms-pro-mechanic"],
  },
  {
    slug: "ready-made-apps",
    title: "Ready-made App Solutions",
    short: "Proven apps for your industry, customised to your brand.",
    icon: FiPackage,
    intro:
      "Why start from a blank page? Our church, club, salon, finance and real estate apps are already live. Each one is fully customisable, so you launch sooner with your own name, colours and content.",
    capabilities: [
      { title: "Try before you commit", desc: "Every solution has a live preview, and many have demo videos." },
      { title: "Your brand, your content", desc: "Colours, logo, layouts and content tailored to your organisation." },
      { title: "Member & admin views", desc: "A customer-facing app plus a dashboard for your team." },
      { title: "Extend when ready", desc: "Add features as you grow, built by the team that made the app." },
    ],
    deliverables: ["Branded app", "Admin dashboard", "Content setup", "Domain & hosting", "Team onboarding", "Ongoing updates"],
    tech: ["React", "Next.js", "Firebase", "Tailwind CSS"],
    related: ["church-app", "club-app", "salon-app", "finance-app", "real-estate-app"],
  },
  {
    slug: "mobile-apps",
    title: "Mobile App Development",
    short: "iOS and Android apps for your customers and your staff.",
    icon: FiSmartphone,
    intro:
      "From staff apps that keep field teams in sync to customer apps that put your business in their pocket, we design and ship mobile apps to the Google Play Store and Apple App Store.",
    capabilities: [
      { title: "Staff mobile apps", desc: "Jobs, schedules, inspections and updates for teams on the go." },
      { title: "Customer apps", desc: "Booking, membership and account features with your branding." },
      { title: "Notifications", desc: "Push notifications that keep staff and customers up to date." },
      { title: "Store launch", desc: "Google Play and App Store submission, review and release." },
    ],
    deliverables: ["iOS & Android apps", "Backend & sync", "Push notifications", "Store listings", "Release management", "Updates & support"],
    tech: ["React Native", "Flutter", "Firebase", "Android", "iOS"],
    related: ["bms-pro-trade", "bms-pro-mechanic"],
  },
  {
    slug: "web-development",
    title: "Web Development",
    short: "Fast, secure websites, portals and web apps built to scale.",
    icon: FiCode,
    intro:
      "We build fast, responsive web applications and websites on a modern stack: customer portals, admin dashboards and marketing sites that are easy to manage and ready to grow with you.",
    capabilities: [
      { title: "Web applications", desc: "Dashboards, portals and platforms with clean, maintainable code." },
      { title: "Business websites", desc: "Responsive sites that load fast and turn visitors into customers." },
      { title: "Payments & integrations", desc: "Online payments, calendars, maps and the tools you already use." },
      { title: "UI/UX design", desc: "Clear user flows and polished interfaces that match your brand." },
    ],
    deliverables: ["Responsive web app", "Admin panel", "UI design", "Integrations", "SEO basics", "Hosting & deployment"],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Figma"],
    related: ["finance-app", "real-estate-app"],
  },
  {
    slug: "cloud-support",
    title: "Cloud, Hosting & Support",
    short: "Reliable hosting, security updates and support after launch.",
    icon: FiCloud,
    intro:
      "Launch is only the beginning. We host, monitor and maintain your apps on reliable cloud infrastructure, and keep improving them with updates, fixes and new features.",
    capabilities: [
      { title: "Cloud hosting", desc: "Secure, scalable hosting on Google Cloud and Firebase." },
      { title: "Backups & security", desc: "Regular backups, access control and security updates." },
      { title: "Monitoring", desc: "We keep an eye on performance and uptime so you don't have to." },
      { title: "Ongoing support", desc: "Fixes, small improvements and new features as your business grows." },
    ],
    deliverables: ["Cloud setup", "Domain & SSL", "Backups", "Monitoring", "Security updates", "Support plan"],
    tech: ["Google Cloud", "Firebase", "Vercel", "Cloudflare", "GitHub Actions"],
    related: ["bms-pro-pink", "bms-pro-trade", "bms-pro-mechanic"],
  },
];

export function findServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
