import Intro from '@/components/about/Intro'
import Leadership from '@/components/about/Leadership'
import Results from '@/components/about/Results'
import Values from '@/components/about/Values'
import CTA from '@/components/global/CTA'
import Navigation from '@/components/global/Navigation'
import AboutHero from '@/components/about/AboutHero'
import React from 'react'
import Quote from '@/components/global/Quote'

export const metadata = {
  title: "About Us",
  description:
    "Learn about our values, and leadership by Teresia Kithome and Wanjiru Kinyanjui. Trusted office, branding, ICT, and lifestyle solutions in Kenya.",
  keywords: [
    "Arinome Ventures",
    "About Arinome Ventures",
    "Arinome leadership",
    "Teresia Wangare Kithome",
    "Wanjiru Kinyanjui",
    "office supplies Kenya",
    "branding and printing Kenya",
    "ICT solutions Kenya",
    "corporate solutions Kenya",
  ],
  authors: [{ name: "Arinome Ventures" }],
  creator: "Arinome Ventures",
  publisher: "Arinome Ventures",
  metadataBase: new URL("https://arinomeventures.co.ke"),
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | Arinome Ventures",
    description:
      "Meet Arinome Ventures’ leadership — Teresia Wangare Kithome and Wanjiru Kinyanjui — and explore our values and commitment to delivering trusted solutions across Kenya.",
    url: "https://arinomeventures.co.ke/about",
    siteName: "Arinome Ventures",
    images: [
      {
        url: "/homepage/nairobi.webp",
        width: 1200,
        height: 630,
        alt: "Arinome Ventures - About Us",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Arinome Ventures",
    description:
      "Learn about Arinome Ventures’ values and leadership, including Teresia Wangare Kithome and Wanjiru Kinyanjui. Delivering trusted office, branding, ICT, and lifestyle solutions in Kenya.",
    images: ["/homepage/nairobi.webp"],
  },
};


export default function page() {
  return (
    <>
      <Navigation />
      <AboutHero />
      <Intro />
      <Results />
      <Values />
      <Leadership />
      <Quote
        image="/homepage/hero.webp"
        text="Arinome delivered exceptional solutions by enhancing our online store system and providing high-quality printed materials. We continue to work with them, as they remain a reliable partner."
        name="Isaac Okoth"
        title="Founder, Creative Agency Inc."
      />
      <CTA />
    </>
  )
}
