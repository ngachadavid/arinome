import { Merriweather } from "next/font/google";
import "./globals.css";
import Footer from "@/components/global/Footer";

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  metadataBase: new URL("https://arinomeventures.co.ke"),
  title: {
    default: "Arinome Ventures",
    template: "%s | Arinome Ventures",
  },
  description:
    "Arinome Ventures supplies office products, branding and printing, ICT solutions, paint, food, and lifestyle essentials across Kenya. Reliable partner for businesses, schools, and institutions.",
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
  alternates: {
    canonical: "https://arinomeventures.co.ke",
  },
  icons: {
  icon: '/icon.png', 
  apple: '/apple-touch-icon.png', 
},
  manifest: '/site.webmanifest',
  openGraph: {
    title: "Arinome Ventures",
    description:
      "Trusted partner for office, branding, ICT, and lifestyle solutions in Kenya. Quality products and reliable services for institutions and businesses.",
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
    title: "Arinome Ventures",
    description:
      "Arinome Ventures delivers office, branding, ICT, paint, food, and lifestyle products across Kenya. Trusted by businesses and schools.",
    images: ["https://arinomeventures.co.ke/homepage/hero.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${merriweather.variable} antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}