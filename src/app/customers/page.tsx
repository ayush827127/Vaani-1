"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Sparkles } from 'lucide-react';
import { SITE } from '@/lib/site';

function initialsOf(name: string) {
  return name.split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase();
}

const testimonials = [
  {
    name: "Manoj Kumar",
    role: "Toy Shop Owner",
    quote: "We've been trying out the early version of VAANI in our shop and billing has genuinely never been this fast. I want it in production as soon as possible, and I'm ready to pay for it the day it's available.",
    stars: 5
  },
  {
    name: "Sambhu Kumar",
    role: "Kirana Store Owner",
    quote: "I was one of the first to test VAANI, and it already understands my voice better than I expected for something still in testing. Please launch it soon — I don't want to go back to typing every bill.",
    stars: 5
  },
  {
    name: "Zafar Alam",
    role: "Gift Shop Owner",
    quote: "Honestly, I was skeptical about a voice billing app. But after using the early version in my shop for a few weeks, I don't want to stop. Happy to pay once it's fully live.",
    stars: 5
  }
];

export default function CustomersPage() {
  return (
    <div className="min-h-screen py-20 px-4 relative">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>

      {/* Hero Section */}
      <div className="max-w-5xl mx-auto text-center mb-20 relative z-10 pt-16">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-600 dark:text-blue-300 text-sm font-semibold mb-8">
          <Sparkles className="w-4 h-4" /> Currently in Private Beta
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-5xl md:text-7xl font-black tracking-tighter mb-8 text-slate-900 dark:text-white">
          Real Stories.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-600 dark:from-blue-400 dark:to-blue-500">Real Impact.</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          VAANI isn&apos;t on the Play Store yet. A handful of real shopkeepers have been trialling it in their stores — here&apos;s what they told us.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 pb-32">
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="rounded-3xl border border-slate-200 dark:border-white/5 relative overflow-hidden group shadow-lg flex flex-col h-full bg-white dark:bg-[#050810]">
              <div className="relative z-10 p-8 flex flex-col h-full">
                <Quote className="w-10 h-10 text-blue-500/20 absolute top-8 right-8" />
                <div className="flex gap-1 mb-6">
                  {[...Array(t.stars)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-8 flex-grow">
                  &quot;{t.quote}&quot;
                </p>
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-200 dark:border-white/10">
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shadow-md shrink-0">
                    {initialsOf(t.name)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-lg">{t.name}</h4>
                    <p className="text-blue-600 dark:text-blue-400 text-sm">{t.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="max-w-7xl mx-auto relative z-10 pt-20 px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-[3rem] overflow-hidden relative shadow-2xl">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-110 opacity-40 mix-blend-luminosity" style={{ backgroundImage: "url('/bg_images/bg_30.jpg')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/90 to-blue-900/80"></div>

            <div className="relative z-10 p-12 md:p-24 text-center">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6">Be Among Our First Retailers.</h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed">
                We&apos;re onboarding a small group of shopkeepers during our private beta. Get early access and help shape the app before it launches.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={SITE.apkUrl} target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-bold transition-all hover:bg-slate-50 hover:scale-105 shadow-xl hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                  Download Free App
                </a>
                <a href="/pricing" className="bg-blue-800/50 border border-blue-400/30 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all hover:bg-blue-800/70 hover:scale-105">
                  View Pricing Plans
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
