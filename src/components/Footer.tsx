"use client";
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';
import { SITE } from '@/lib/site';

export function Footer() {
  return (
    <div className="bg-slate-50 dark:bg-black transition-colors duration-300">
      <footer className="border-t border-slate-200 dark:border-white/10 pt-24 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-100/50 dark:bg-blue-900/5 mix-blend-screen pointer-events-none transition-colors"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-slate-900 dark:text-slate-100 transition-colors">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
            <div className="col-span-2 lg:col-span-2">
              <Link href="/" className="inline-block mb-6 group">
                <img src="/app-icon.png" alt="VAANI Logo" width={64} height={64} className="h-16 w-16 rounded-2xl object-contain group-hover:scale-105 transition-all " />
              </Link>
              <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-sm transition-colors">Agentic AI designed for India&apos;s 6+ Crore retailers. Create bills just by speaking. Zero typing, zero training, maximum efficiency.</p>
              <div className="flex gap-4">
                <a href={`mailto:${SITE.email}`} className="w-10 h-10 rounded-full bg-slate-200 dark:bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors text-slate-600 dark:text-white"><Mail className="w-4 h-4" /></a>
                <a href={SITE.phoneHref} className="w-10 h-10 rounded-full bg-slate-200 dark:bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors text-slate-600 dark:text-white"><Phone className="w-4 h-4" /></a>
                <a href="/contact" className="w-10 h-10 rounded-full bg-slate-200 dark:bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors text-slate-600 dark:text-white"><MapPin className="w-4 h-4" /></a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-6 transition-colors">Product</h4>
              <ul className="space-y-4 text-slate-600 dark:text-slate-400 text-sm transition-colors">
                <li><Link href="/features" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Features</Link></li>
                <li><Link href="/pricing" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Pricing</Link></li>
                <li><Link href="/how-it-works" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">How it works</Link></li>
                <li><a href={SITE.playStoreUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-blue-600 dark:text-blue-500 font-semibold">Get it on Google Play</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-6 transition-colors">Company</h4>
              <ul className="space-y-4 text-slate-600 dark:text-slate-400 text-sm transition-colors">
                <li><Link href="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Our Story</Link></li>
                <li><Link href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-6 transition-colors">Legal</h4>
              <ul className="space-y-4 text-slate-600 dark:text-slate-400 text-sm transition-colors">
                <li><Link href="/privacy" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 transition-colors">
            <p className="text-slate-500 text-sm">© {new Date().getFullYear()} VAANI. Built for Bharat.</p>
            <p className="text-slate-500 text-sm italic">Built from Bihar — for India, for the world.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
