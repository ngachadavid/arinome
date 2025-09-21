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
      "Meet Arinome Ventures' leadership — Teresia Wangare Kithome and Wanjiru Kinyanjui — and explore our values and commitment to delivering trusted solutions across Kenya.",
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
      "Learn about Arinome Ventures' values and leadership, including Teresia Wangare Kithome and Wanjiru Kinyanjui. Delivering trusted office, branding, ICT, and lifestyle solutions in Kenya.",
    images: ["/homepage/nairobi.webp"],
  },
};

// Comprehensive structured data for About page
const aboutStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://arinomeventures.co.ke/#organization",
      name: "Arinome Ventures",
      url: "https://arinomeventures.co.ke",
      logo: {
        "@type": "ImageObject",
        url: "https://arinomeventures.co.ke/logo.svg",
        width: 200,
        height: 60
      },
      image: {
        "@type": "ImageObject",
        url: "https://arinomeventures.co.ke/homepage/nairobi.webp",
        width: 1200,
        height: 630
      },
      description: "We supply office products, branding and printing, ICT solutions, paint, food, and lifestyle essentials in Nairobi and across Kenya.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nairobi",
        addressCountry: "Kenya",
        addressRegion: "Nairobi County"
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -1.327295,
        longitude: 36.850602
      },
      founder: [
        {
          "@id": "https://arinomeventures.co.ke/#teresia-kithome"
        },
        {
          "@id": "https://arinomeventures.co.ke/#wanjiru-kinyanjui"
        }
      ],
      employee: [
        {
          "@id": "https://arinomeventures.co.ke/#teresia-kithome"
        },
        {
          "@id": "https://arinomeventures.co.ke/#wanjiru-kinyanjui"
        }
      ],
      foundingDate: "2023",
      areaServed: {
        "@type": "Country",
        name: "Kenya"
      },
      knowsAbout: [
        "Office Supplies",
        "Branding Services",
        "Printing Services",
        "ICT Solutions",
        "Paint Supplies",
        "Corporate Solutions",
        "Food Supplies",
        "Lifestyle Products"
      ],
      values: [
        "Quality Excellence",
        "Customer Satisfaction",
        "Reliability",
        "Innovation",
        "Integrity",
        "Professional Service"
      ]
    },
    {
      "@type": "Person",
      "@id": "https://arinomeventures.co.ke/#teresia-kithome",
      name: "Teresia Wangare Kithome",
      givenName: "Teresia",
      familyName: "Kithome",
      additionalName: "Wangare",
      jobTitle: "Co-Founder",
      worksFor: {
        "@id": "https://arinomeventures.co.ke/#organization"
      },
      nationality: {
        "@type": "Country",
        name: "Kenya"
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nairobi",
        addressCountry: "Kenya"
      },
      knowsAbout: [
        "Business Leadership",
        "Corporate Solutions",
        "Office Supplies Management",
        "Strategic Planning"
      ],
      alumniOf: {
        "@type": "Organization",
        name: "Moi University" 
      }
    },
    {
      "@type": "Person",
      "@id": "https://arinomeventures.co.ke/#wanjiru-kinyanjui",
      name: "Wanjiru Kinyanjui",
      givenName: "Wanjiru",
      familyName: "Kinyanjui",
      jobTitle: "Co-Founder",
      worksFor: {
        "@id": "https://arinomeventures.co.ke/#organization"
      },
      nationality: {
        "@type": "Country",
        name: "Kenya"
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nairobi",
        addressCountry: "Kenya"
      },
      knowsAbout: [
        "Business Operations",
        "ICT Solutions",
        "Branding and Printing",
        "Customer Relations"
      ],
      alumniOf: {
        "@type": "Organization",
        name: "University of Nairobi" 
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://arinomeventures.co.ke/#website",
      url: "https://arinomeventures.co.ke",
      name: "Arinome Ventures",
      description: "Office, Branding, ICT & Lifestyle Solutions in Kenya",
      publisher: {
        "@id": "https://arinomeventures.co.ke/#organization"
      },
      inLanguage: "en-KE"
    },
    {
      "@type": "WebPage",
      "@id": "https://arinomeventures.co.ke/about#webpage",
      url: "https://arinomeventures.co.ke/about",
      name: "About Us | Arinome Ventures",
      isPartOf: {
        "@id": "https://arinomeventures.co.ke/#website"
      },
      about: {
        "@id": "https://arinomeventures.co.ke/#organization"
      },
      description: "Meet Arinome Ventures' leadership — Teresia Wangare Kithome and Wanjiru Kinyanjui — and explore our values and commitment to delivering trusted solutions across Kenya.",
      breadcrumb: {
        "@id": "https://arinomeventures.co.ke/about#breadcrumb"
      },
      inLanguage: "en-KE",
      mainEntity: {
        "@id": "https://arinomeventures.co.ke/#organization"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://arinomeventures.co.ke/about#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://arinomeventures.co.ke"
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "About Us",
          item: "https://arinomeventures.co.ke/about"
        }
      ]
    },
    {
      "@type": "AboutPage",
      "@id": "https://arinomeventures.co.ke/about#aboutpage",
      url: "https://arinomeventures.co.ke/about",
      name: "About Arinome Ventures",
      description: "Learn about our company values, leadership team, and commitment to providing quality office supplies, branding, ICT, and lifestyle solutions across Kenya.",
      about: {
        "@id": "https://arinomeventures.co.ke/#organization"
      },
      mainEntity: {
        "@id": "https://arinomeventures.co.ke/#organization"
      }
    },
    {
      "@type": "OrganizationRole",
      roleName: "Co-Founder",
      member: {
        "@id": "https://arinomeventures.co.ke/#teresia-kithome"
      },
      memberOf: {
        "@id": "https://arinomeventures.co.ke/#organization"
      },
      startDate: "2020"
    },
    {
      "@type": "OrganizationRole",
      roleName: "Co-Founder",
      member: {
        "@id": "https://arinomeventures.co.ke/#wanjiru-kinyanjui"
      },
      memberOf: {
        "@id": "https://arinomeventures.co.ke/#organization"
      },
      startDate: "2020"
    }
  ]
};

export default function page() {
  return (
    <>
      {/* Structured Data for About Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutStructuredData),
        }}
      />
      
      <Navigation />
      <AboutHero />
      <Intro />
      <Results />
      <Values />
      <Leadership />
      <Quote
        image="/homepage/josh.jpg"
        text="Arinome delivered exceptional solutions by enhancing our online store system and providing high-quality printed materials. We continue to work with them, as they remain a reliable partner."
        name="Isaac Okoth"
        title="Founder, Creative Agency Inc."
      />
      <CTA />
    </>
  )
}