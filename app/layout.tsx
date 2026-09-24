import type { Metadata, Viewport } from "next";
import { Archivo, Hanken_Grotesk } from "next/font/google";
import { venue, week } from "@/lib/venue";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

const title = "Club Vault | Nightclub & Private Event Venue in Hollywood, FL";
const description =
  "Club Vault is a nightclub and private event venue at 2801 Greene St, Hollywood, FL. Weekly nights Tuesday–Sunday, table reservations, and full venue rentals since 2010. Call (954) 546-1942.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Club Vault",
    "Hollywood FL nightclub",
    "nightclub Hollywood Florida",
    "bottle service Hollywood FL",
    "private event venue Hollywood FL",
    "quinceañera venue Hollywood FL",
    "South Florida nightlife",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: venue.name,
    title,
    description,
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", title, description },
  formatDetection: { telephone: true },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0b0a08",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const dayUrl: Record<string, string> = {
  sun: "https://schema.org/Sunday",
  mon: "https://schema.org/Monday",
  tue: "https://schema.org/Tuesday",
  wed: "https://schema.org/Wednesday",
  thu: "https://schema.org/Thursday",
  fri: "https://schema.org/Friday",
  sat: "https://schema.org/Saturday",
};

const hhmm = (mins: number) => {
  const m = mins % 1440;
  return `${String(Math.floor(m / 60)).padStart(2, "0")}:${String(m % 60).padStart(2, "0")}`;
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NightClub",
  "@id": `${siteUrl}/#club`,
  name: venue.name,
  url: siteUrl,
  telephone: venue.phone.tel,
  email: venue.email,
  foundingDate: String(venue.since),
  image: `${siteUrl}/opengraph-image`,
  address: {
    "@type": "PostalAddress",
    streetAddress: venue.address.street,
    addressLocality: venue.address.city,
    addressRegion: venue.address.region,
    postalCode: venue.address.postalCode,
    addressCountry: venue.address.country,
  },
  geo: { "@type": "GeoCoordinates", latitude: venue.geo.lat, longitude: venue.geo.lng },
  hasMap: venue.mapsUrl,
  areaServed: "South Florida",
  openingHoursSpecification: week
    .filter((n) => n.open !== null && n.close !== null)
    .map((n) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: dayUrl[n.day],
      opens: hhmm(n.open!),
      closes: hhmm(n.close!),
    })),
  sameAs: venue.social.map((s) => s.href),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${hanken.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
