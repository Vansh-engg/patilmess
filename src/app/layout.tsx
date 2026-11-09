import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#a82e11",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://patilmess.in"),
  title: "Patil Mess Tiffin Service | Authentic Ghar Ka Khana Delivered in Thane West",
  description:
    "Delicious, authentic homestyle Indian tiffin service in Shastri Nagar, Thane West. Pure vegetarian, less oil, zero soda, piping hot phulkas with pure desi ghee, and freshly prepared daily meals. Direct WhatsApp ordering: +91 9172674260 / 9769539150.",
  keywords: [
    "Patil Mess Thane",
    "Tiffin service Thane West",
    "Shastri Nagar Thane dabba service",
    "Homemade food delivery Thane",
    "Ghar ka khana Thane",
    "Pure veg tiffin service Thane",
    "Monthly tiffin subscription Thane",
    "Panch Pakhadi tiffin delivery",
    "Naupada tiffin service"
  ],
  authors: [{ name: "Patil Mess Tiffin Service" }],
  openGraph: {
    title: "Patil Mess Tiffin Service - Ghar Ka Swad Delivered with Love in Thane West",
    description:
      "Freshly prepared homestyle Indian meals delivered hot to your doorstep in Shastri Nagar & Thane West. Pure Desi Ghee Phulkas, Daily Dal & Sabzi, Real Home Taste.",
    url: "https://patilmess.in",
    siteName: "Patil Mess Tiffin Service",
    images: [
      {
        url: "/images/hero-thali.jpg",
        width: 1200,
        height: 675,
        alt: "Patil Mess Authentic Indian Thali & Tiffin Dabba",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/images/brand-logo.jpg",
    apple: "/images/brand-logo.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
