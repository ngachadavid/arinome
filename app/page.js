import CTA from "@/components/global/CTA";
import Navbar from "@/components/global/Navbar";
import Quote from "@/components/global/Quote";
import About from "@/components/homepage/About";
import Hero from "@/components/homepage/Hero";
import HeroSec from "@/components/homepage/HeroSec";
import Services from "@/components/homepage/Services";

export default function Home() {
  return (
    <>
      {/* <Hero /> */}
      <Navbar />
      <HeroSec />
      <About />
      <Services />
      <Quote
        image="/homepage/hero.webp"
        text="Working with Arinome has transformed how we manage our school operations. From our office essentials to specialized supplies, their efficiency and professionalism have helped our school run smoothly. I can always count on them to provide quality solutions on time."
        name="Ted Murega"
        title="Operations Manager, Oldonyo Sabuk Primary School"
      />
      <CTA />
    </>
  );
}
