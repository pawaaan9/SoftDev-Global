import Link from "next/link";
import type { IconType } from "react-icons";
import { FiBriefcase, FiDollarSign, FiHome, FiScissors } from "react-icons/fi";
import { LuCar, LuChurch, LuTrophy, LuWrench } from "react-icons/lu";
import Reveal from "./reveal";
import SectionHeading from "./section-heading";

const industries: { name: string; desc: string; icon: IconType; href: string }[] = [
  { name: "Beauty & Personal Care", desc: "Salons, spas, barbers and wellness", icon: FiScissors, href: "/solutions/bms-pro-pink" },
  { name: "Automotive", desc: "Mechanics, service centres and repairs", icon: LuCar, href: "/solutions/bms-pro-mechanic" },
  { name: "Trades & Field Service", desc: "Contractors, electricians and plumbers", icon: LuWrench, href: "/solutions/bms-pro-trade" },
  { name: "Finance", desc: "Lenders, brokers and financial services", icon: FiDollarSign, href: "/solutions/finance-app" },
  { name: "Churches & Religious", desc: "Congregations, ministries and missions", icon: LuChurch, href: "/solutions/church-app" },
  { name: "Sports & Community Clubs", desc: "Members, activities and events", icon: LuTrophy, href: "/solutions/club-app" },
  { name: "Real Estate & Property", desc: "Agencies, listings and buyers", icon: FiHome, href: "/solutions/real-estate-app" },
  { name: "Small & Growing Businesses", desc: "Custom apps built around you", icon: FiBriefcase, href: "/contact" },
];

export default function Industries() {
  return (
    <section id="industries" className="py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Industries"
          title="Built for the way your industry works"
          description="Each solution is shaped around how businesses in your sector really operate, so it feels familiar from day one."
        />

        <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line sm:mt-14 lg:grid-cols-4">
          {industries.map(({ name, desc, icon: Icon, href }, i) => (
            <Reveal key={name} delay={(i % 4) * 70} className="bg-background">
              <Link href={href} className="group block h-full p-5 transition-colors duration-300 hover:bg-royal sm:p-7">
                <Icon size={24} className="text-accent transition group-hover:text-white" />
                <h3 className="mt-5 text-sm font-bold text-fg transition group-hover:text-white sm:mt-6 sm:text-base">{name}</h3>
                <p className="mt-1.5 text-xs text-muted transition group-hover:text-white/75 sm:text-sm">{desc}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
