"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './ThemeToggle';
import { PlayStoreButton } from './PlayStoreButton';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Features', path: '/features' },
  { name: 'How It Works', path: '/how-it-works' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' }
];

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setIsMenuOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isMenuOpen]);

  return (
    <>
      <header className="fixed w-full top-0 z-50 border-b border-slate-200 dark:border-white/10 bg-white/90 dark:bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center" aria-label="Vaani AI Billing home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/new_logo.png" alt="Vaani" width={676} height={369} className="h-12 w-auto object-contain mix-blend-multiply dark:invert dark:opacity-90" />
            </Link>

            <nav aria-label="Main" className="hidden lg:flex items-center gap-8 h-full">
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  aria-current={pathname === item.path ? 'page' : undefined}
                  className={`text-sm font-medium py-2 transition-colors hover:text-blue-700 dark:hover:text-blue-300 ${pathname === item.path ? 'text-blue-700 dark:text-blue-300' : 'text-slate-700 dark:text-slate-300'}`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <ThemeToggle />
              <PlayStoreButton label="Get the app" className="hidden sm:inline-flex !py-2.5 !px-5 text-sm rounded-full" />
              <button
                type="button"
                onClick={() => setIsMenuOpen((v) => !v)}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                className="lg:hidden p-2.5 rounded-full bg-slate-200 dark:bg-white/5 border border-slate-300 dark:border-white/10 hover:bg-slate-300 dark:hover:bg-white/10 transition-colors text-slate-800 dark:text-slate-200"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <>
          <div onClick={() => setIsMenuOpen(false)} aria-hidden="true" className="fixed inset-0 bg-black/50 z-[55] lg:hidden" />
          <div id="mobile-menu" className="fixed top-[88px] left-4 right-4 z-[56] lg:hidden rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0a0f1c] shadow-2xl overflow-y-auto max-h-[calc(100vh-104px)]">
            <nav aria-label="Mobile" className="flex flex-col p-4">
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={pathname === item.path ? 'page' : undefined}
                  className={`px-4 py-3.5 rounded-2xl text-base font-semibold transition-colors ${pathname === item.path ? 'bg-blue-500/10 text-blue-700 dark:text-blue-300' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5'}`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="p-4 pt-0">
              <PlayStoreButton className="w-full" />
            </div>
          </div>
        </>
      )}
    </>
  );
}
