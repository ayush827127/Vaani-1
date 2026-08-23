"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import { SITE } from '@/lib/site';

export default function PricingPage() {
  return (
    <div className="min-h-screen py-20 px-4 relative">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>
      
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto text-center mb-24 relative z-10 pt-16">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-5xl md:text-7xl font-black tracking-tighter mb-8 text-slate-900 dark:text-white">
          Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-600 dark:from-blue-400 dark:to-blue-500">Pricing.</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
          No hidden fees. Scale as you grow.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 pb-32">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          
          {/* Freemium */}
          <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2000} className="md:justify-self-end w-full max-w-sm h-full">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="h-full p-8 rounded-3xl border border-slate-200 dark:border-white/10 hover:border-blue-500/50 transition-colors text-center flex flex-col shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-50 dark:opacity-40" style={{ backgroundImage: "url('/bg_images/bg_15.jpg')" }}></div>
              <div className="absolute inset-0 bg-white/80 dark:bg-[#050810]/80 group-hover:bg-white/60 dark:group-hover:bg-[#050810]/60 transition-colors"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-xl font-bold text-slate-700 dark:text-slate-300 mb-2">Freemium</h3>
                <div className="text-5xl font-black mb-8 text-slate-900 dark:text-white">FREE</div>
                <ul className="text-slate-600 dark:text-slate-400 space-y-5 mb-10 text-left flex-grow">
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0"/> 50 voice bills / month</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0"/> Inventory tracking &amp; analytics</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0"/> WhatsApp sharing</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0"/> All other features included</li>
                </ul>
                <a href={SITE.apkUrl} target="_blank" rel="noopener noreferrer" className="mt-auto w-full py-4 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-900 dark:text-white font-bold transition-colors flex items-center justify-center">Start Free</a>
              </div>
            </motion.div>
          </Tilt>

          {/* Basic Plan */}
          <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.05} transitionSpeed={2000} glareEnable={true} glareMaxOpacity={0.15} glareColor="lightblue" className="w-full z-20 h-full">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="h-full p-10 rounded-3xl border-white dark:border-[#030712] border-blue-500 relative flex flex-col shadow-[0_0_50px_rgba(37,99,235,0.2)] overflow-hidden group">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-60" style={{ backgroundImage: "url('/bg_images/bg_3.jpg')" }}></div>
              <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-black/80 group-hover:from-blue-900/60 group-hover:to-black/60 transition-colors"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.5)] whitespace-nowrap">MOST POPULAR</div>
                <h3 className="text-xl font-bold text-blue-300 mb-2 text-center mt-2">Basic Plan</h3>
                <div className="text-6xl font-black mb-2 text-center text-white">₹99<span className="text-2xl text-slate-400 font-medium">/mo</span></div>
                <p className="text-sm text-slate-400 mb-8 text-center">Core revenue driver</p>
                <ul className="text-slate-200 space-y-5 mb-10 text-left flex-grow">
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0"/> Unlimited bills</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0"/> GST invoices</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0"/> Inventory tracking</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0"/> Smart Analytics</li>
                </ul>
                <a href={`mailto:${SITE.email}?subject=Upgrade to Basic Plan - VAANI`} className="mt-auto w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-colors shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center justify-center">Upgrade to Basic</a>
              </div>
            </motion.div>
          </Tilt>

          {/* Pro Plan */}
          <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2000} className="md:justify-self-start w-full max-w-sm h-full">
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="h-full p-8 rounded-3xl border border-slate-200 dark:border-white/10 hover:border-blue-500/50 transition-colors text-center flex flex-col shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-50 dark:opacity-40" style={{ backgroundImage: "url('/bg_images/bg_5.jpg')" }}></div>
              <div className="absolute inset-0 bg-white/80 dark:bg-[#050810]/80 group-hover:bg-white/60 dark:group-hover:bg-[#050810]/60 transition-colors"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-xl font-bold text-slate-700 dark:text-slate-300 mb-2">Pro Plan</h3>
                <div className="text-5xl font-black mb-2 text-slate-900 dark:text-white">₹199<span className="text-2xl text-slate-600 dark:text-slate-400 font-medium">/mo</span></div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-8">For expanding businesses</p>
                <ul className="text-slate-600 dark:text-slate-400 space-y-5 mb-10 text-left flex-grow">
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0"/> Everything in Basic</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0"/> Multi-store management</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0"/> Team access</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0"/> CA dashboard</li>
                </ul>
                <a href={`mailto:${SITE.email}?subject=Start Pro Plan - VAANI`} className="mt-auto w-full py-4 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-900 dark:text-white font-bold transition-colors flex items-center justify-center">Start Pro</a>
              </div>
            </motion.div>
          </Tilt>

        </div>
      </div>
    </div>
  );
}
