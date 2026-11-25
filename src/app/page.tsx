import Hero from "./components/hero";
import TechMarquee from "./components/tech-marquee";
import FeaturedSolutions from "./components/featured-solutions";
import Services from "./components/services";
import TextBand from "./components/text-band";
import Process from "./components/process";
import WhyUs from "./components/why-us";
import Industries from "./components/industries";
import TechStack from "./components/tech-stack";
import Engagement from "./components/engagement";
import Faq from "./components/faq";
import Contact from "./components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <FeaturedSolutions />
      <Services />
      <TextBand />
      <Process />
      <WhyUs />
      <Industries />
      <TechStack />
      <Engagement />
      <Faq />
      <Contact />
    </>
  );
}
