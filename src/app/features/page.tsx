import type { Metadata } from 'next';
import { BookOpen, FileText, Mic, Package, Printer, Share2, WifiOff } from 'lucide-react';
import { PlayStoreButton } from '@/components/PlayStoreButton';

export const metadata: Metadata = {
  title: "Features – Voice Billing & Invoice Management",
  description: "Vaani features: voice and manual billing, product management, customer dues, offline-friendly local storage, PDF/image sharing and thermal printing.",
  alternates: { canonical: "/features" },
};

const FEATURES = [
  { icon: Mic, title: "Voice billing", desc: "Speak the items and quantities to add them to a bill, so you spend less time tapping at a busy counter." },
  { icon: FileText, title: "Manual invoice creation", desc: "Create an invoice by hand whenever you prefer. Voice and manual billing both work in the same app." },
  { icon: Package, title: "Product and inventory management", desc: "Maintain your list of products and prices and reuse them on every bill." },
  { icon: BookOpen, title: "Customer ledger and payments", desc: "Keep customer records and track dues and payments in one place." },
  { icon: WifiOff, title: "Local, offline-friendly storage", desc: "Bills are saved locally on your device so you can keep billing without a connection." },
  { icon: Share2, title: "Share as PDF or image", desc: "Send a finished bill to your customer as a PDF or an image." },
  { icon: Printer, title: "Thermal printing", desc: "Print receipts on compatible thermal printers. Support depends on your printer model." },
];

export default function FeaturesPage() {
  return (
    <main className="px-4 sm:px-6 lg:px-8 py-14 md:py-20 max-w-7xl mx-auto w-full">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">Features</h1>
      <p className="mt-4 text-lg text-slate-700 dark:text-slate-300 max-w-2xl">
        Vaani is a practical billing tool for small businesses in India. Here is what you can do with it.
      </p>

      <ul className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {FEATURES.map(({ icon: Icon, title, desc }) => (
          <li key={title} className="rounded-2xl border border-slate-200 dark:border-white/10 p-6 bg-white dark:bg-white/[0.03]">
            <div className="w-11 h-11 rounded-xl bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 flex items-center justify-center mb-4">
              <Icon className="w-5 h-5" aria-hidden="true" />
            </div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">{title}</h2>
            <p className="mt-2 text-slate-700 dark:text-slate-300 leading-relaxed">{desc}</p>
          </li>
        ))}
      </ul>

      <div className="mt-14 rounded-3xl bg-slate-100 dark:bg-white/[0.04] p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-lg font-semibold text-slate-900 dark:text-white">Ready to try it? Vaani is on Google Play.</p>
        <PlayStoreButton />
      </div>
    </main>
  );
}
