import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BookOpen, FileText, Mic, Package, Printer, Share2, WifiOff } from 'lucide-react';
import { PlayStoreButton } from '@/components/PlayStoreButton';
import { SCREENSHOTS, SITE } from '@/lib/site';

const FEATURES = [
  { icon: Mic, title: "Voice billing", desc: "Say the items and quantities and let Vaani add them to the bill. Prefer typing? Create the bill manually." },
  { icon: Package, title: "Products & inventory", desc: "Keep your product list with prices in one place so bills take fewer taps." },
  { icon: BookOpen, title: "Customer records & dues", desc: "Keep customer details and track what each customer owes and has paid." },
  { icon: WifiOff, title: "Saved on your device", desc: "Bills are saved locally on your phone, so you can keep working offline." },
  { icon: Share2, title: "Share bills", desc: "Send a bill to your customer as a PDF or an image." },
  { icon: Printer, title: "Thermal printing", desc: "Print receipts on compatible thermal printers." },
];

const STEPS = [
  { title: "Add your products", desc: "Set up the items you sell and their prices." },
  { title: "Create the bill", desc: "Speak the items or enter them by hand, then pick the customer." },
  { title: "Share or print", desc: "Send the bill as a PDF or image, or print it, and note any dues." },
];

const FAQS = [
  { q: "Where can I download Vaani?", a: "Vaani is available on Google Play for Android phones. Use the Download on Google Play button on this page." },
  { q: "Can I create bills without using my voice?", a: "Yes. You can create invoices manually as well as by voice." },
  { q: "Do I need an internet connection?", a: "Bills are saved locally on your device so you can keep working offline. Some features may still need internet access." },
  { q: "Can I print bills?", a: "Vaani supports compatible thermal printers. Printer support can vary, so test your printer after installing." },
  { q: "How do I get help?", a: "Use the Contact page to email, call or message us on WhatsApp." },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24 max-w-7xl mx-auto w-full">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-blue-700 dark:text-blue-300 mb-4">Billing app for shopkeepers · Android</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-slate-900 dark:text-white">
            Smarter Billing for Everyday Business
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
            Create bills, manage products and keep customer records organized with Vaani.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <PlayStoreButton className="sm:text-lg sm:px-8 sm:py-4" />
            <Link
              href="/features"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-slate-300 dark:border-white/20 px-6 py-3.5 font-bold text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-colors sm:text-lg sm:px-8 sm:py-4"
            >
              Explore Features <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">Available now on Google Play for Android.</p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-white dark:bg-[#050810] border-y border-slate-200 dark:border-white/10 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Everything for the billing counter</h2>
          <p className="mt-3 text-lg text-slate-700 dark:text-slate-300 max-w-2xl">Built for small shops that need to bill quickly and keep track of customers.</p>
          <ul className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map(({ icon: Icon, title, desc }) => (
              <li key={title} className="rounded-2xl border border-slate-200 dark:border-white/10 p-6 bg-slate-50 dark:bg-white/[0.03]">
                <div className="w-11 h-11 rounded-xl bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{title}</h3>
                <p className="mt-2 text-slate-700 dark:text-slate-300 leading-relaxed">{desc}</p>
              </li>
            ))}
          </ul>
          <Link href="/features" className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-700 dark:text-blue-300 hover:underline">
            See all features <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Real screenshots — renders only when real images are listed in SCREENSHOTS */}
      {SCREENSHOTS.length > 0 && (
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">See the app</h2>
            <ul className="mt-8 flex gap-5 overflow-x-auto pb-4">
              {SCREENSHOTS.map((s) => (
                <li key={s.src} className="shrink-0">
                  <Image src={s.src} alt={s.alt} width={s.width} height={s.height} className="h-[480px] w-auto rounded-2xl border border-slate-200 dark:border-white/10" />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* How it works */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Three steps to your first bill</h2>
          <ol className="mt-10 grid md:grid-cols-3 gap-5">
            {STEPS.map((s, i) => (
              <li key={s.title} className="rounded-2xl border border-slate-200 dark:border-white/10 p-6 bg-white dark:bg-white/[0.03]">
                <span className="w-9 h-9 rounded-full bg-blue-700 text-white font-bold flex items-center justify-center mb-4" aria-hidden="true">{i + 1}</span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{s.title}</h3>
                <p className="mt-2 text-slate-700 dark:text-slate-300">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white dark:bg-[#050810] border-y border-slate-200 dark:border-white/10 py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Frequently asked questions</h2>
          <div className="mt-8 space-y-3">
            {FAQS.map((f) => (
              <details key={f.q} className="group rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] p-5">
                <summary className="cursor-pointer list-none flex justify-between items-center gap-4 font-semibold text-slate-900 dark:text-white">
                  {f.q}
                  <span aria-hidden="true" className="text-blue-700 dark:text-blue-300 text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-slate-700 dark:text-slate-300 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-3xl mx-auto text-center rounded-3xl bg-blue-700 text-white p-8 md:p-12">
          <FileText className="w-10 h-10 mx-auto mb-4 opacity-90" aria-hidden="true" />
          <h2 className="text-3xl font-bold tracking-tight">Get Vaani on your phone</h2>
          <p className="mt-3 text-blue-100 text-lg">Download from Google Play and create your first bill today.</p>
          <a
            href={SITE.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-white text-blue-800 font-bold px-8 py-4 text-lg hover:bg-blue-50 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Download on Google Play
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </section>
    </main>
  );
}
