import CTA from "@/components/global/CTA";
import Navbar from "@/components/global/Navbar";
import Quote from "@/components/global/Quote";
import About from "@/components/homepage/About";
import HeroSec from "@/components/homepage/HeroSec";
import Services from "@/components/homepage/Services";
import Steps from "@/components/homepage/Steps";

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

// Comprehensive structured data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://arinomeventures.co.ke/#organization",
      name: "Arinome Ventures",
      url: "https://arinomeventures.co.ke",
      logo: {
        "@type": "ImageObject",
        url: "https://arinomeventures.co.ke/icon.png",
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
      areaServed: [
        {
          "@type": "Country",
          name: "Kenya"
        },
        {
          "@type": "City",
          name: "Nairobi"
        }
      ],
      serviceArea: {
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
      sameAs: [
        "https://www.facebook.com/arinomeventures",
        "https://www.twitter.com/arinomeventures",
        "https://www.linkedin.com/company/arinomeventures"
      ]
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
      "@id": "https://arinomeventures.co.ke/#webpage",
      url: "https://arinomeventures.co.ke",
      name: "Arinome Ventures | Office, Branding, ICT & Lifestyle Solutions in Kenya",
      isPartOf: {
        "@id": "https://arinomeventures.co.ke/#website"
      },
      about: {
        "@id": "https://arinomeventures.co.ke/#organization"
      },
      description: "Trusted partner for office supplies, branding, ICT, and lifestyle solutions in Kenya. Quality products and reliable services for institutions and businesses.",
      breadcrumb: {
        "@id": "https://arinomeventures.co.ke/#breadcrumb"
      },
      inLanguage: "en-KE"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://arinomeventures.co.ke/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://arinomeventures.co.ke"
        }
      ]
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
      serviceArea: {
        "@type": "Country",
        name: "Kenya"
      }
    },
    {
      "@type": "Service",
      "@id": "https://arinomeventures.co.ke/#services",
      name: "Business Solutions Services",
      description: "Comprehensive office supplies, branding, printing, ICT solutions, paint, food, and lifestyle products for businesses and institutions.",
      provider: {
        "@id": "https://arinomeventures.co.ke/#organization"
      },
      areaServed: {
        "@type": "Country",
        name: "Kenya"
      },
      serviceType: [
        "Office Supplies",
        "Branding Services",
        "Printing Services",
        "ICT Solutions",
        "Paint Supplies",
        "Food Supplies",
        "Lifestyle Products",
        "Corporate Solutions"
      ],
      audience: {
        "@type": "Audience",
        audienceType: ["Businesses", "Schools", "Institutions", "Corporations"]
      }
    },
    {
      "@type": "Product",
      name: "Office Supplies & Corporate Solutions",
      description: "Complete range of office products, branding materials, ICT equipment, paint, food supplies, and lifestyle essentials for businesses across Kenya.",
      brand: {
        "@type": "Brand",
        name: "Arinome Ventures"
      },
      manufacturer: {
        "@id": "https://arinomeventures.co.ke/#organization"
      },
      category: [
        "Office Supplies",
        "Branding Materials",
        "ICT Equipment",
        "Paint Supplies",
        "Corporate Solutions"
      ],
      audience: {
        "@type": "BusinessAudience",
        audienceType: "B2B"
      }
    }
  ]
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      
      <Navbar />
      <HeroSec />
      <About />
      <Services />
      <Steps />
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