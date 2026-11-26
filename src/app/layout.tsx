import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, Poppins } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";
import "./site.css";

const serif = DM_Serif_Display({ weight: "400", style: ["normal", "italic"], subsets: ["latin"], variable: "--font-serif" });
const sans = Poppins({ weight: ["300", "400", "500", "600"], subsets: ["latin"], variable: "--font-sans" });

const description =
  "BVK Law Chambers, Advocate Vinay Kumar: lawyer in Hyderabad and Medchal for civil, criminal, family, divorce and property cases before the courts across Telangana and the High Court of Telangana. Video consultations for NRIs in the USA and UK.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "BVK Law Chambers | Advocate & Lawyer in Hyderabad, Medchal | Telangana High Court",
    template: "%s | BVK Law Chambers",
  },
  description,
  applicationName: site.name,
  authors: [{ name: `Advocate ${site.advocate}` }],
  keywords: [
    "advocate in Hyderabad", "lawyer in Hyderabad", "advocate in Medchal", "lawyer in Medchal",
    "Telangana High Court advocate", "High Court of Telangana lawyer", "civil lawyer Hyderabad",
    "criminal lawyer Hyderabad", "bail lawyer Hyderabad", "family lawyer Hyderabad", "divorce lawyer Hyderabad",
    "property lawyer Hyderabad", "property dispute lawyer Telangana", "cheque bounce lawyer Hyderabad",
    "consumer court lawyer Hyderabad", "legal notice Hyderabad", "sale deed registration lawyer Telangana",
    "NRI lawyer Hyderabad", "NRI property lawyer Telangana", "power of attorney from USA", "power of attorney from UK",
    "succession certificate Hyderabad", "legal heir certificate Telangana", "BVK Law Chambers", "Advocate Vinay Kumar",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "BVK Law Chambers | Advocate in Hyderabad & Medchal, Telangana",
    description,
    type: "website",
    url: "/",
    siteName: site.name,
    locale: "en_IN",
    images: [{ url: "/vinay-kumar-high-court.jpg", width: 900, height: 1200, alt: `Advocate ${site.advocate} at the High Court of Telangana` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BVK Law Chambers | Advocate in Hyderabad & Medchal",
    description,
    images: ["/vinay-kumar-high-court.jpg"],
  },
  robots: { index: true, follow: true },
  formatDetection: { telephone: true, email: true, address: true },
};

export const viewport: Viewport = { colorScheme: "light", themeColor: "#33261f" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
