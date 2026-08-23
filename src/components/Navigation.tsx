"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Download, Sparkles, ChevronDown, 
  Box, Settings, Lock, Activity, 
  Store, HeartPulse, HardHat, 
  Info, Star, Briefcase, Mail, 
  BookOpen, HelpCircle, Code 
} from 'lucide-react';
import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';


export function Navigation() {
  return (
    <>
      {/* Top Announcement Bar */}
      <div className="fixed top-0 w-full h-10 bg-gradient-to-r from-blue-600 to-blue-600 flex items-center justify-center text-xs md:text-sm font-semibold z-[60]">
        <span className="flex items-center gap-2 text-white">
          <Sparkles className="w-4 h-4" /> VAANI is currently in Private Beta. <a href="mailto:ayush385361@gmail.com" className="underline underline-offset-2 hover:text-blue-200 transition-colors">Request Early Access &rarr;</a>
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
              <img src="/new_logo.jpg" alt="VAANI Logo" className="h-12 w-auto object-contain mix-blend-multiply dark:invert dark:opacity-90 group-hover:scale-105 transition-all" />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8 h-full">
              {[
                { name: 'Home', path: '/' },
                { name: 'Features', path: '/features' },
                { name: 'How It Works', path: '/how-it-works' },
                { name: 'Customers', path: '/customers' },
                { name: 'About', path: '/about' },
                { name: 'Pricing', path: '/pricing' },
                { name: 'Contact', path: '/contact' }
              ].map((item) => (
                <Link key={item.name} href={item.path} className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors relative group py-2">
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
                </Link>
              ))}
            </nav>

            {/* Call to Action */}
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <a href="/vaani.apk" download className="group relative px-6 py-2.5 rounded-full bg-blue-600 dark:bg-white text-white dark:text-black font-semibold text-sm hover:scale-105 transition-all flex items-center gap-2 shadow-lg hover:shadow-blue-500/30 dark:shadow-[0_0_20px_rgba(255,255,255,0.1)] dark:hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]">
                <Download className="w-4 h-4 text-white dark:text-black" />
                <span>Get APK</span>
              </a>
            </div>
          </div>
        </div>
      </motion.header>
    </>
  );
}
