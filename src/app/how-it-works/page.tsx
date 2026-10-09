import type { Metadata } from 'next';
import { PlayStoreButton } from '@/components/PlayStoreButton';

export const metadata: Metadata = {
  title: "How It Works – Create a Bill in Vaani",
  description: "See how to set up products, create a bill by voice or manually, and share or print it with the Vaani billing app for shopkeepers.",
  alternates: { canonical: "/how-it-works" },
};

const STEPS = [
  { title: "Install Vaani from Google Play", desc: "Download the app on your Android phone and open it." },
  { title: "Add your products", desc: "Enter the items you sell and their prices so they are ready for billing. You can also keep customer details here." },
  { title: "Create a bill", desc: "Speak the items and quantities, or enter them manually. Check the bill before you finish." },
  { title: "Share or print", desc: "Send the bill to your customer as a PDF or image, or print it on a compatible thermal printer." },
  { title: "Track dues", desc: "If a customer pays later, keep a record of what they owe and note payments as they come in." },
];

export default function HowItWorksPage() {
  return (
    <main className="px-4 sm:px-6 lg:px-8 py-14 md:py-20 max-w-3xl mx-auto w-full">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">How it works</h1>
      <p className="mt-4 text-lg text-slate-700 dark:text-slate-300">From installing the app to handing over a bill.</p>

      <ol className="mt-10 space-y-4">
        {STEPS.map((s, i) => (
          <li key={s.title} className="flex gap-4 rounded-2xl border border-slate-200 dark:border-white/10 p-5 bg-white dark:bg-white/[0.03]">
            <span className="shrink-0 w-9 h-9 rounded-full bg-blue-700 text-white font-bold flex items-center justify-center" aria-hidden="true">{i + 1}</span>
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">{s.title}</h2>
              <p className="mt-1 text-slate-700 dark:text-slate-300 leading-relaxed">{s.desc}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-12">
        <PlayStoreButton />
      </div>
    </main>
  );
}
