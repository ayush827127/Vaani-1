import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ThemeProvider } from "../components/ThemeProvider";
import WhatsAppDemoModal from "../components/WhatsAppDemoModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VAANI | Voice AI Billing for Retailers",
  description: "Agentic AI designed for India's 6+ Crore retailers. Create bills just by speaking. Zero typing, zero training, maximum efficiency.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-slate-100 font-sans selection:bg-blue-500/30 overflow-x-hidden antialiased transition-colors duration-300`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navigation />
          <div className="flex-grow flex flex-col relative pt-[120px]">
            {children}
          </div>
          <Footer />
          <WhatsAppDemoModal />
        </ThemeProvider>
      </body>
    </html>
  );
}
