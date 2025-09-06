import CTA from "@/components/global/CTA";
import Navbar from "@/components/global/Navbar";
import Quote from "@/components/global/Quote";
import About from "@/components/homepage/About";
import Hero from "@/components/homepage/Hero";
import HeroSec from "@/components/homepage/HeroSec";
import Services from "@/components/homepage/Services";

// app/page.tsx or app/page.js

export const metadata = {
  title: "Arinome Ventures",
  description:
    "Arinome Ventures is a trusted supplier of office supplies, branding and printing services, ICT solutions, paint and finishing products, and lifestyle essentials across Kenya. Delivering quality and reliability for businesses, schools, and institutions.",
  keywords: [
    "Arinome Ventures",
    "office supplies Kenya",
    "branding and printing Kenya",
    "ICT solutions Kenya",
    "paint and finishing supplies Kenya",
    "food and beverages supplies Kenya",
    "corporate solutions Kenya",
  ],
  authors: [{ name: "Arinome Ventures" }],
  creator: "Arinome Ventures",
  publisher: "Arinome Ventures",
  metadataBase: new URL("https://arinomeventures.co.ke"),
  openGraph: {
    title: "Arinome Ventures | Office, Branding, ICT & Lifestyle Solutions in Kenya",
    description:
      "Your trusted partner for office, branding, ICT, and lifestyle solutions in Kenya. From supplies to specialized services, Arinome Ventures delivers quality and reliability.",
    url: "https://arinomeventures.co.ke",
    siteName: "Arinome Ventures",
    images: [
      {
        url: "/homepage/hero.webp",
        width: 1200,
        height: 630,
        alt: "Arinome Ventures - Office, Branding, ICT & Lifestyle Solutions",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arinome Ventures | Office, Branding, ICT & Lifestyle Solutions in Kenya",
    description:
      "Arinome Ventures supplies office, branding, ICT, paint, food, and lifestyle products across Kenya. Trusted by businesses, schools, and organizations.",
    images: ["/homepage/hero.webp"],
  },
};


export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSec />
      <About />
      <Services />
      <Quote
        image="/homepage/teddy.webp"
        text="Working with Arinome has transformed how we manage our school operations. From our office essentials to specialized supplies, their efficiency and professionalism have helped our school run smoothly. I can always count on them to provide quality solutions on time."
        name="Ted Murega"
        title="Operations Manager, Oldonyo Sabuk Primary School"
      />
      <CTA />
    </>
  );
}
