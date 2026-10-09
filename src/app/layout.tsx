import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ThemeProvider } from "../components/ThemeProvider";
import WhatsAppDemoModal from "../components/WhatsAppDemoModal";
import { SITE } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const TITLE = "Vaani AI Billing – Billing App for Shopkeepers in India";
const DESCRIPTION =
  "Vaani is an Android billing app for small businesses in India. Create bills by voice or manually, manage products and customers, track dues and share bills. Available on Google Play.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: TITLE, template: "%s | Vaani AI Billing" },
  description: DESCRIPTION,
  applicationName: SITE.name,
  keywords: ["billing app for shopkeepers", "voice billing app", "invoice management", "Vaani", "kirana billing app"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: TITLE,
    description: DESCRIPTION,
    url: SITE.url,
    locale: "en_IN",
    images: [{ url: "/new_logo.png", width: 676, height: 369, alt: "Vaani AI Billing logo" }],
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/new_logo.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1d4ed8",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: SITE.name,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Android",
  description: DESCRIPTION,
  url: SITE.url,
  downloadUrl: SITE.playStoreUrl,
  installUrl: SITE.playStoreUrl,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-slate-100 font-sans selection:bg-blue-500/30 overflow-x-hidden antialiased`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" disableTransitionOnChange>
          <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-slate-900 focus:shadow-lg">
            Skip to main content
          </a>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
          <Navigation />
          <div id="main-content" className="flex-grow flex flex-col relative pt-20">
            {children}
          </div>
          <Footer />
          <WhatsAppDemoModal />
        </ThemeProvider>
      </body>
    </html>
  );
}
