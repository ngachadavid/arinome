import CTA from "@/components/global/CTA";
import Navbar from "@/components/global/Navbar";
import Quote from "@/components/global/Quote";
import About from "@/components/homepage/About";
import Hero from "@/components/homepage/Hero";
import HeroSec from "@/components/homepage/HeroSec";
import Intro from "@/components/homepage/Intro";
import Services from "@/components/homepage/Services";
import Image from "next/image";

export default function Home() {
  return (
    <>
   {/* <Hero /> */}
   <Navbar />
   <HeroSec />
   {/* <Intro /> */}
   <About />
   <Services />
   <Quote />
   <CTA />
   </>
  );
}
