import type { Metadata, Viewport } from "next";
import { ScrollRevealProvider } from "@/components/ui/ScrollRevealProvider";
import "animate.css";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FFFFFF",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://Tatvadhan.com"),
  title: {
    default: "Tatvadhan Jaipur | The Wedding Chapter",
    template: "%s | Tatvadhan Jaipur",
  },
  description:
    "Tatvadhan — Rooted in tradition. Made for today. Bespoke Indian bridal & ceremonial couture by Vinayak Agarwal in Jaipur.",
  keywords: [
    "Tatvadhan",
    "Jaipur Couture",
    "Indian Bridal Wear",
    "Sherwani",
    "Zardozi",
    "Luxury Couture",
    "Vinayak Agarwal",
  ],
  authors: [{ name: "Vinayak Agarwal" }],
  creator: "Tatvadhan Jaipur",
  icons: {
    icon: "/images/image_01.png",
    shortcut: "/images/image_01.png",
    apple: "/images/image_01.png",
  },
  openGraph: {
    title: "Tatvadhan Jaipur | The Wedding Chapter",
    description: "Tatvadhan — Rooted in tradition. Made for today.",
    url: "https://Tatvadhan.com",
    siteName: "Tatvadhan Jaipur",
    images: [
      {
        url: "/images/image_18.webp",
        width: 1200,
        height: 630,
        alt: "Tatvadhan Jaipur Couture Campaign",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/fonts/Nourd-Regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Nourd-Bold.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alata&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased text-[#101010] selection:bg-[#E8C35A] selection:text-black relative min-h-screen">
        {/* Global Royal Damask Wallpaper Background across all pages */}
        <div
          className="pointer-events-none fixed inset-0 z-0 select-none overflow-hidden"
          aria-hidden="true"
        >
          {/* High-quality small-scale repeating damask pattern */}
          <div
            className="absolute inset-0 bg-[url('/images/damask_seamless_hd.webp')] bg-repeat bg-[length:260px_auto]"
          />
          {/* Light Color Transparency Layer */}
          <div className="absolute inset-0 bg-[#faf6f0]/72 backdrop-blur-[0.2px]" />
        </div>

        <div className="relative z-10 min-h-screen flex flex-col">
          <ScrollRevealProvider />
          {children}
        </div>
      </body>
    </html>
  );
}
