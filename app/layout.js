import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileBottomNavigation from "@/components/layout/MobileBottomNavigation";
import Preloader from "@/components/common/Preloader";
import ScrollToTop from "@/components/common/ScrollToTop";
import AnimationManager from "@/components/common/AnimationManager";
import MagicCursor from "@/components/common/MagicCursor";
import { siteConfig } from "@/data/siteData";

export const metadata = {
  metadataBase: new URL("https://paulhair.com"),
  title: {
    default: `${siteConfig.name} - ${siteConfig.fullName} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "PaulHair",
    "Hair Salon New York",
    "Haute Coiffure",
    "Balayage NYC",
    "Keratin Smoothing",
    "Precision Haircuts",
    "Bridal Hair Design",
    "Luxury Salon",
    "Head Spa",
  ],
  authors: [{ name: "PaulHair Haute Coiffure" }],
  icons: {
    icon: "/images/cropped-ph-favicon-img-1-192x192.png",
    shortcut: "/images/cropped-ph-favicon-img-1-32x32.png",
    apple: "/images/cropped-ph-favicon-img-1-180x180.png",
  },
  openGraph: {
    title: `${siteConfig.name} - ${siteConfig.fullName}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: siteConfig.fullName,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Albert+Sans:ital,wght@0,300..900;1,300..900&family=Kanit:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/all.css" />
        <link rel="stylesheet" href="/css/animate.css" />
      </head>
      <body>
        <Preloader />
        <MagicCursor />
        <AnimationManager />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileBottomNavigation />
        <ScrollToTop />
      </body>
    </html>
  );
}
