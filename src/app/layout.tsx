import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, Poppins } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";
import "./site.css";

const serif = DM_Serif_Display({ weight: "400", style: ["normal", "italic"], subsets: ["latin"], variable: "--font-serif" });
const sans = Poppins({ weight: ["300", "400", "500", "600"], subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "BVK Law Chambers | Advocate in Hyderabad for clients in India, USA & UK",
  description:
    "BVK Law Chambers, Advocate Vinay Kumar, Hyderabad. Civil, criminal, family and property matters, and remote legal help for NRIs in the USA and UK with property, inheritance and power of attorney in Telangana.",
  keywords: [
    "advocate in Hyderabad", "lawyer Hyderabad", "NRI lawyer Hyderabad", "NRI property lawyer Telangana",
    "power of attorney from USA", "power of attorney from UK", "succession certificate Hyderabad",
    "divorce lawyer Hyderabad", "bail lawyer Hyderabad",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "BVK Law Chambers, Advocates, Hyderabad",
    description: "Chambers of Advocate Vinay Kumar. Hyderabad courts and remote help for NRIs in the USA and UK.",
    type: "website",
    url: "/",
    images: ["/vinay-kumar-high-court.jpg"],
  },
};

export const viewport: Viewport = { colorScheme: "light", themeColor: "#33261f" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
