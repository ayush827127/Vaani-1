"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Sparkles, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './ThemeToggle';
import { SITE } from '@/lib/site';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Features', path: '/features' },
  { name: 'How It Works', path: '/how-it-works' },
  { name: 'Customers', path: '/customers' },
  { name: 'About', path: '/about' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Contact', path: '/contact' }
];

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="fixed top-0 w-full h-10 bg-gradient-to-r from-blue-600 to-blue-600 flex items-center justify-center text-xs md:text-sm font-semibold z-[60]">
        <span className="flex items-center gap-2 text-white">
          <Sparkles className="w-4 h-4" /> VAANI is now available on Google Play. <a href={SITE.playStoreUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-blue-200 transition-colors">Download now &rarr;</a>
        </span>
      </div>

      {/* Professional Full-Width Sticky Navbar */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed w-full top-10 z-50 border-b border-slate-200 dark:border-white/10 bg-white/70 dark:bg-black/60 backdrop-blur-xl supports-[backdrop-filter]:bg-white/50 dark:supports-[backdrop-filter]:bg-black/40 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <img src="/app-icon.png" alt="VAANI Logo" width={48} height={48} className="h-12 w-12 rounded-xl object-contain group-hover:scale-105 transition-all" />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8 h-full">
              {NAV_LINKS.map((item) => (
                <Link key={item.name} href={item.path} className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors relative group py-2">
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
                </Link>
              ))}
            </nav>

            {/* Call to Action */}
            <div className="flex items-center gap-3 sm:gap-4">
              <ThemeToggle />
              <a href={SITE.playStoreUrl} target="_blank" rel="noopener noreferrer" className="group relative px-4 sm:px-6 py-2.5 rounded-full bg-blue-600 dark:bg-white text-white dark:text-black font-semibold text-sm hover:scale-105 transition-all flex items-center gap-2 shadow-lg hover:shadow-blue-500/30 dark:shadow-[0_0_20px_rgba(255,255,255,0.1)] dark:hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]">
                <Download className="w-4 h-4 text-white dark:text-black" />
                <span className="hidden sm:inline">Get on Google Play</span>
              </a>
              <button
                type="button"
                onClick={() => setIsMenuOpen((v) => !v)}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
                className="lg:hidden p-2 rounded-full bg-slate-200 dark:bg-white/5 border border-slate-300 dark:border-white/10 hover:bg-slate-300 dark:hover:bg-white/10 transition-colors flex items-center justify-center text-slate-800 dark:text-slate-200"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[55] lg:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
              className="fixed top-[128px] left-4 right-4 z-[56] lg:hidden rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0a0f1c] shadow-2xl overflow-hidden max-h-[calc(100vh-152px)] overflow-y-auto"
            >
              <nav className="flex flex-col p-4">
                {NAV_LINKS.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-4 py-3.5 rounded-2xl text-base font-semibold transition-colors ${pathname === item.path ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5'}`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              <div className="p-4 pt-0">
                <a
                  href={SITE.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-6 py-3.5 rounded-2xl bg-blue-600 text-white font-semibold text-base flex items-center justify-center gap-2 shadow-lg"
                >
                  <Download className="w-4 h-4" />
                  <span>Get on Google Play</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
