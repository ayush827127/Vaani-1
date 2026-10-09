import React from 'react';
import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';
import { SITE } from '@/lib/site';

const linkClass = "hover:text-blue-700 dark:hover:text-blue-300 hover:underline transition-colors";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-white/10 bg-white dark:bg-black pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-900 dark:text-slate-100">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-2">
            <Link href="/" className="inline-block mb-4" aria-label="Vaani AI Billing home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/new_logo.png" alt="Vaani" width={676} height={369} className="h-14 w-auto object-contain mix-blend-multiply dark:invert dark:opacity-90" />
            </Link>
            <p className="text-slate-700 dark:text-slate-300 max-w-sm">
              A billing app for shopkeepers in India. Create bills by voice or manually, manage products and track customer dues.
            </p>
            <div className="mt-5 flex gap-3">
              <a href={`mailto:${SITE.email}`} aria-label="Email Vaani" className="w-11 h-11 rounded-full bg-slate-200 dark:bg-white/10 flex items-center justify-center hover:bg-blue-700 hover:text-white transition-colors"><Mail className="w-5 h-5" aria-hidden="true" /></a>
              <a href={SITE.phoneHref} aria-label="Call Vaani" className="w-11 h-11 rounded-full bg-slate-200 dark:bg-white/10 flex items-center justify-center hover:bg-blue-700 hover:text-white transition-colors"><Phone className="w-5 h-5" aria-hidden="true" /></a>
            </div>
          </div>

          <nav aria-label="Product">
            <h2 className="font-bold mb-4">Product</h2>
            <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
              <li><Link href="/features" className={linkClass}>Features</Link></li>
              <li><Link href="/how-it-works" className={linkClass}>How it works</Link></li>
              <li>
                <a href={SITE.playStoreUrl} target="_blank" rel="noopener noreferrer" className={`${linkClass} font-semibold text-blue-700 dark:text-blue-300`}>
                  Google Play<span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            </ul>
          </nav>

          <nav aria-label="Company and legal">
            <h2 className="font-bold mb-4">Company</h2>
            <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
              <li><Link href="/about" className={linkClass}>About</Link></li>
              <li><Link href="/contact" className={linkClass}>Contact &amp; support</Link></li>
              <li><Link href="/privacy" className={linkClass}>Privacy Policy</Link></li>
              <li><Link href="/terms" className={linkClass}>Terms of Service</Link></li>
            </ul>
          </nav>
        </div>

        <div className="pt-6 border-t border-slate-200 dark:border-white/10 text-sm text-slate-600 dark:text-slate-400">
          © {new Date().getFullYear()} Vaani. Made in {SITE.addressShort}.
        </div>
      </div>
    </footer>
  );
}
