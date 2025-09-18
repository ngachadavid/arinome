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
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | Arinome Ventures",
    description:
      "Have a question or need a service? Contact Arinome Ventures today. We're here to support your office, branding, ICT, and lifestyle needs across Kenya.",
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

// Comprehensive structured data for Contact page
const contactStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://arinomeventures.co.ke/#organization",
      name: "Arinome Ventures",
      url: "https://arinomeventures.co.ke",
      logo: {
        "@type": "ImageObject",
        url: "https://arinomeventures.co.ke/logo.png",
        width: 200,
        height: 60
      },
      image: {
        "@type": "ImageObject",
        url: "https://arinomeventures.co.ke/homepage/hero.webp",
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
      telephone: "+254 715 259 657",
      email: "info@arinomeventures.co.ke",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+254 715 259 657",
          contactType: "customer service",
          areaServed: "Kenya",
          availableLanguage: ["English", "Swahili"],
          hoursAvailable: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday", 
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
              ],
              opens: "08:00",
              closes: "17:00"
            }
          ]
        },
        {
          "@type": "ContactPoint",
          email: "info@arinomeventures.co.ke",
          contactType: "customer service",
          areaServed: "Kenya",
          availableLanguage: ["English", "Swahili"]
        },
        {
          "@type": "ContactPoint",
          contactType: "sales",
          areaServed: "Kenya",
          availableLanguage: ["English", "Swahili"],
          hoursAvailable: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday", 
                "Thursday",
                "Friday",
                "Saturday"
              ],
              opens: "08:00",
              closes: "17:00"
            }
          ]
        }
      ],
      areaServed: {
        "@type": "Country",
        name: "Kenya"
      },
      serviceArea: {
        "@type": "Country",
        name: "Kenya"
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://arinomeventures.co.ke/#localbusiness",
      name: "Arinome Ventures",
      image: "https://arinomeventures.co.ke/homepage/hero.webp",
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
      url: "https://arinomeventures.co.ke",
      telephone: "+254 715 259 657",
      email: "info@arinomeventures.co.ke",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          opens: "08:00",
          closes: "17:00"
        }
      ],
      priceRange: "$$",
      serviceArea: {
        "@type": "Country",
        name: "Kenya"
      },
      hasMap: "https://maps.google.com/?q=-1.327295,36.850602"
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
      "@id": "https://arinomeventures.co.ke/contact#webpage",
      url: "https://arinomeventures.co.ke/contact",
      name: "Contact Us | Arinome Ventures",
      isPartOf: {
        "@id": "https://arinomeventures.co.ke/#website"
      },
      about: {
        "@id": "https://arinomeventures.co.ke/#organization"
      },
      description: "Have a question or need a service? Contact Arinome Ventures today. We're here to support your office, branding, ICT, and lifestyle needs across Kenya.",
      breadcrumb: {
        "@id": "https://arinomeventures.co.ke/contact#breadcrumb"
      },
      inLanguage: "en-KE",
      mainEntity: {
        "@id": "https://arinomeventures.co.ke/#organization"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://arinomeventures.co.ke/contact#breadcrumb",
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
          name: "Contact Us",
          item: "https://arinomeventures.co.ke/contact"
        }
      ]
    },
    {
      "@type": "ContactPage",
      "@id": "https://arinomeventures.co.ke/contact#contactpage",
      url: "https://arinomeventures.co.ke/contact",
      name: "Contact Arinome Ventures",
      description: "Get in touch with Arinome Ventures for inquiries, partnerships, and service requests. Use our contact form or reach us directly for solutions across Kenya.",
      about: {
        "@id": "https://arinomeventures.co.ke/#organization"
      },
      mainEntity: {
        "@id": "https://arinomeventures.co.ke/#organization"
      }
    },
    {
      "@type": "Place",
      "@id": "https://arinomeventures.co.ke/#place",
      name: "Arinome Ventures Office",
      description: "Arinome Ventures office location in Nairobi, Kenya",
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
      hasMap: "https://maps.google.com/?q=-1.327295,36.850602",
      containedInPlace: {
        "@type": "City",
        name: "Nairobi"
      }
    },
    {
      "@type": "Map",
      "@id": "https://arinomeventures.co.ke/contact#map",
      name: "Arinome Ventures Location Map",
      description: "Interactive map showing Arinome Ventures office location in Nairobi",
      about: {
        "@id": "https://arinomeventures.co.ke/#place"
      },
      url: "https://maps.google.com/?q=-1.327295,36.850602"
    }
  ]
};

export default function page() {
  return (
    <>
      {/* Structured Data for Contact Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactStructuredData),
        }}
      />
      
      <Navigation />
      <ContactHero />
      <White />
    </>
  )
}