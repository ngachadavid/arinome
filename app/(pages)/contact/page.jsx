import ContactHero from '@/components/contact/ContactHero'
import White from '@/components/contact/White'
import Navigation from '@/components/global/Navigation'
import React from 'react'

export const metadata = {
  title: "Contact Us ",
  description:
    "Get in touch with Arinome Ventures for inquiries, partnerships, and service requests. Use our contact form or reach us directly for solutions across Kenya.",
  keywords: [
    "Arinome Ventures contact",
    "contact Arinome",
    "office supplies Kenya contact",
    "branding and printing Kenya contact",
    "ICT solutions Kenya contact",
    "corporate solutions Kenya contact",
    "Arinome customer support",
    "Arinome inquiries",
  ],
  authors: [{ name: "Arinome Ventures" }],
  creator: "Arinome Ventures",
  publisher: "Arinome Ventures",
  metadataBase: new URL("https://arinomeventures.co.ke"),
  openGraph: {
    title: "Contact Us | Arinome Ventures",
    description:
      "Have a question or need a service? Contact Arinome Ventures today. We’re here to support your office, branding, ICT, and lifestyle needs across Kenya.",
    url: "https://arinomeventures.co.ke/contact",
    siteName: "Arinome Ventures",
    images: [
      {
        url: "/homepage/hero.webp", 
        width: 1200,
        height: 630,
        alt: "Contact Arinome Ventures",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Arinome Ventures",
    description:
      "Reach out to Arinome Ventures for inquiries, service requests, and partnerships. Your trusted office, branding, ICT, and lifestyle partner in Kenya.",
    images: ["/homepage/hero.webp"],
  },
};


export default function page() {
  return (
    <>
    <Navigation />
    <ContactHero />
    <White />
    </>
  )
}
