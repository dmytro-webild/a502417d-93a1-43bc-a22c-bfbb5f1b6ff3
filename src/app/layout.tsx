import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Open_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'Jeffrey Landscaping | 5-Star Lawn Care & Landscaping in DMV',
  description: 'Jeffrey Landscaping: Your 5-star rated, trusted local choice for lawn mowing, yard cleanups, mulching, and general landscaping services in the Maryland/DMV area. Get a free quote!',
  keywords: ["landscaping, lawn care, lawn mowing, yard cleanup, mulching, garden beds, DMV, Maryland, 5-star, trusted, reliable, homeowners, free quote"],
  openGraph: {
    "title": "Jeffrey Landscaping | Premier Lawn Care & Landscaping Services",
    "description": "Jeffrey Landscaping: Your 5-star rated, trusted local choice for lawn mowing, yard cleanups, mulching, and general landscaping services in the Maryland/DMV area. Get a free quote!",
    "url": "https://jeffreylandscaping.com",
    "siteName": "Jeffrey Landscaping",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/natural-grass-close-up_23-2148858214.jpg",
        "alt": "Perfectly manicured green lawn of a residential home"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Jeffrey Landscaping | Premier Lawn Care & Landscaping Services",
    "description": "Jeffrey Landscaping: Your 5-star rated, trusted local choice for lawn mowing, yard cleanups, mulching, and general landscaping services in the Maryland/DMV area. Get a free quote!",
    "images": [
      "http://img.b2bpic.net/free-photo/natural-grass-close-up_23-2148858214.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${openSans.variable} antialiased`}>
          
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
