"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { SITE } from '@/lib/site';

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start px-4 relative py-20 pb-32">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl z-10 w-full text-center mb-16 pt-16">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 text-slate-900 dark:text-white">Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-600 dark:from-blue-400 dark:to-blue-500">Touch.</span></h1>
        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
          Have questions about VAANI? We&apos;re here to help you revolutionize your retail business.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl w-full z-10 mb-20">

        {/* Email Card */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="rounded-[2.5rem] border border-slate-200 dark:border-white/5 flex flex-col items-center text-center relative overflow-hidden group shadow-lg h-full">
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-100 mix-blend-luminosity" style={{ backgroundImage: "url('/bg_images/bg_6.jpg')" }}></div>
          <div className="absolute inset-0 bg-white/70 dark:bg-[#050810]/70 group-hover:bg-white/60 dark:group-hover:bg-[#050810]/60 transition-colors"></div>

          <div className="relative z-10 p-10 flex flex-col items-center h-full w-full">
            <div className="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700/50 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 backdrop-blur-md shadow-sm group-hover:scale-110 transition-transform">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 drop-shadow-sm">Email Us</h3>
            <a href={`mailto:${SITE.email}`} className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors drop-shadow-sm text-lg">{SITE.email}</a>
          </div>
        </motion.div>

        {/* Phone Card */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="rounded-[2.5rem] border border-slate-200 dark:border-white/5 flex flex-col items-center text-center relative overflow-hidden group shadow-lg h-full">
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-100 mix-blend-luminosity" style={{ backgroundImage: "url('/bg_images/bg_7.jpg')" }}></div>
          <div className="absolute inset-0 bg-white/70 dark:bg-[#050810]/70 group-hover:bg-white/60 dark:group-hover:bg-[#050810]/60 transition-colors"></div>

          <div className="relative z-10 p-10 flex flex-col items-center h-full w-full">
            <div className="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700/50 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 backdrop-blur-md shadow-sm group-hover:scale-110 transition-transform">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 drop-shadow-sm">Call Us</h3>
            <a href={SITE.phoneHref} className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors drop-shadow-sm text-lg">{SITE.phoneDisplay}</a>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">Mon-Sat, 10:00 AM - 7:00 PM (IST)</p>
          </div>
        </motion.div>

        {/* Location Card */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="rounded-[2.5rem] border border-slate-200 dark:border-white/5 flex flex-col items-center text-center relative overflow-hidden group shadow-lg h-full">
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-100 mix-blend-luminosity" style={{ backgroundImage: "url('/bg_images/bodhgaya.jpg')" }}></div>
          <div className="absolute inset-0 bg-white/70 dark:bg-[#050810]/70 group-hover:bg-white/60 dark:group-hover:bg-[#050810]/60 transition-colors"></div>

          <div className="relative z-10 p-10 flex flex-col items-center h-full w-full">
            <div className="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700/50 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 backdrop-blur-md shadow-sm group-hover:scale-110 transition-transform">
              <MapPin className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 drop-shadow-sm">Headquarters</h3>
            <p className="text-slate-700 dark:text-slate-300 drop-shadow-sm text-lg leading-relaxed"><span className="font-bold text-blue-600 dark:text-blue-400">{SITE.address}</span><br/>Near Bodh Gaya.</p>
            <p className="relative z-10 text-[10px] text-slate-400 dark:text-slate-500 mt-4">Photo: Ken Weiland / Wikimedia Commons (CC BY-SA 2.0)</p>
          </div>
        </motion.div>
      </div>

    </div>
  );
}
