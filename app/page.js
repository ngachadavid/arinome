import CTA from "@/components/global/CTA";
import Navbar from "@/components/global/Navbar";
import Quote from "@/components/global/Quote";
import About from "@/components/homepage/About";
import Hero from "@/components/homepage/Hero";
import HeroSec from "@/components/homepage/HeroSec";
import Services from "@/components/homepage/Services";


export const metadata = {
  title: "Arinome Ventures",
  description:
    "We supply office products, branding and printing, ICT solutions, paint, food, and lifestyle essentials in Nairobi and across Kenya.",
  keywords: [
    "office supplies Kenya",
    "branding Kenya",
    "printing services Kenya",
    "ICT solutions Kenya",
    "paint supplies Kenya",
    "corporate solutions Kenya",
  ],
  authors: [{ name: "Arinome Ventures" }],
  creator: "Arinome Ventures",
  publisher: "Arinome Ventures",
  metadataBase: new URL("https://arinomeventures.co.ke"),
  alternates: {
    canonical: "https://arinomeventures.co.ke",
  },
  openGraph: {
    title:
      "Arinome Ventures | Office, Branding, ICT & Lifestyle Solutions in Kenya",
    description:
      "Trusted partner for office supplies, branding, ICT, and lifestyle solutions in Kenya. Quality products and reliable services for institutions and businesses.",
    url: "https://arinomeventures.co.ke",
    siteName: "Arinome Ventures",
    images: [
      {
        url: "https://arinomeventures.co.ke/homepage/hero.webp",
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
    title:
      "Arinome Ventures | Office, Branding, ICT & Lifestyle Solutions in Kenya",
    description:
      "Arinome Ventures delivers office, branding, ICT, paint, food, and lifestyle products across Kenya. Trusted by businesses and schools.",
    images: ["https://arinomeventures.co.ke/homepage/hero.webp"],
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
