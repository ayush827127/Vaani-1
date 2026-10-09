"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { SITE } from '@/lib/site';
import { SCREENS } from '@/lib/screens';

export default function StaticHero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[90vh] flex items-center z-20">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full">

        {/* Left Column: Hero Content */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="flex flex-col items-start text-left z-30">

          <div className="max-w-full inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6C5CE7]/10 border border-[#6C5CE7]/30 text-[#6C5CE7] dark:text-[#8d7ff7] text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(108,92,231,0.15)]">
            <b>India&apos;s #1 Voice Billing App 🇮🇳</b>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6 leading-[1.1] text-slate-900 dark:text-white">
            Aapki Boli, Aapki Dukan,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C5CE7] to-blue-600">Vaani bnaye bill aasan</span>
          </h1>

          <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-lg mb-10 font-medium leading-relaxed">
            Empowering India&apos;s 60+ Million Kiranas. Turn your voice into professional GST invoices instantly. Zero tech skills required.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10 w-full sm:w-auto">
            <a href={SITE.playStoreUrl} target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-xl bg-[#6C5CE7] hover:bg-[#5a4cdb] text-white font-bold text-lg transition-all shadow-[0_0_30px_rgba(108,92,231,0.4)] hover:shadow-[0_0_40px_rgba(108,92,231,0.6)] hover:-translate-y-1 w-full sm:w-auto flex items-center justify-center gap-2">
              <Download className="w-5 h-5" /> Download on Google Play
            </a>
            <a href="/how-it-works" className="px-8 py-4 rounded-xl bg-transparent border-2 border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 text-slate-900 dark:text-white font-bold text-lg transition-all hover:bg-slate-50 dark:hover:bg-white/5 w-full sm:w-auto flex items-center justify-center gap-2">
              See How It Works
            </a>
          </div>

          <div className="flex items-center gap-4 text-sm font-medium text-slate-500 dark:text-slate-400">
            <div className="flex -space-x-3">
              <div className="w-8 h-8 rounded-full border-2 border-slate-50 dark:border-[#030712] bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold">MK</div>
              <div className="w-8 h-8 rounded-full border-2 border-slate-50 dark:border-[#030712] bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold">SK</div>
              <div className="w-8 h-8 rounded-full border-2 border-slate-50 dark:border-[#030712] bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold">ZA</div>
            </div>
            Piloted with real shopkeepers across Bihar · Now live on Google Play
          </div>
        </motion.div>

        {/* Right Column: real app showcase */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative w-full z-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#6C5CE7]/30 rounded-full blur-[100px] pointer-events-none" />
          <Image
            src={SCREENS.banner.src}
            alt={SCREENS.banner.alt}
            width={SCREENS.banner.width}
            height={SCREENS.banner.height}
            priority
            sizes="(min-width: 1024px) 560px, 100vw"
            className="relative w-full h-auto rounded-3xl shadow-[0_20px_50px_rgba(108,92,231,0.3)] border border-slate-200 dark:border-white/10"
          />
        </motion.div>
      </div>
    </section>
  );
}
