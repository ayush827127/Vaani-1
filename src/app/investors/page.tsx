"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Target, PieChart, ChevronRight } from 'lucide-react';
import { SITE } from '@/lib/site';

export default function InvestorsPage() {
  return (
    <div className="min-h-screen py-20 px-4 relative">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>
      
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto text-center mb-24 relative z-10 pt-16">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="max-w-full inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-600 dark:text-blue-300 text-sm font-semibold mb-8 backdrop-blur-md">
          <TrendingUp className="w-4 h-4" /> Seed Round Currently Open
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-5xl md:text-7xl font-black tracking-tighter mb-8 text-slate-900 dark:text-white">
          Invest in the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-600 dark:from-blue-400 dark:to-blue-500">Retail Revolution.</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
          India&apos;s 60+ Million unorganized MSME retailers process over $800B annually in cash and UPI. We are building the voice-first autonomous AI infrastructure to bring them entirely into the digital economy.
        </motion.p>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="mt-8 text-xl md:text-2xl font-bold italic text-blue-600 dark:text-blue-400">
          &quot;Built from Bihar — for India, for the world.&quot;
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 pb-32">
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            { title: "Total Addressable Market", stat: "$800B+", desc: "Annual Unorganized Retail Volume", icon: PieChart, img: "/bg_images/bg_3.jpg" },
            { title: "Target Audience", stat: "60M+", desc: "Kiranas & Local MSMEs in India", icon: Target, img: "/bg_images/bg_2.jpg" },
            { title: "Current Stage", stat: "Private Beta", desc: "Actively piloting with real shopkeepers ahead of public launch", icon: TrendingUp, img: "/bg_images/bg_5.jpg" }
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="rounded-[2.5rem] border border-slate-200 dark:border-white/5 relative overflow-hidden group shadow-lg flex flex-col h-full">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-100 mix-blend-luminosity" style={{ backgroundImage: 'url(' + item.img + ')' }}></div>
              <div className="absolute inset-0 bg-white/80 dark:bg-[#050810]/80 group-hover:bg-white/70 dark:group-hover:bg-[#050810]/70 transition-colors"></div>
              
              <div className="relative z-10 p-10 flex flex-col h-full items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6 backdrop-blur-md shadow-sm border border-blue-200 dark:border-blue-700/50 group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 drop-shadow-sm" />
                </div>
                <p className="text-slate-700 dark:text-slate-300 font-bold mb-2 drop-shadow-sm uppercase tracking-wider text-sm">{item.title}</p>
                <h3 className="text-5xl font-black text-slate-900 dark:text-white mb-4 drop-shadow-sm">{item.stat}</h3>
                {item.desc && <p className="text-slate-600 dark:text-slate-400 font-medium drop-shadow-sm">{item.desc}</p>}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pitch Deck CTA */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-10 md:p-16 rounded-[3rem] bg-gradient-to-tr from-blue-600 to-blue-700 border border-blue-500 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Request our Pitch Deck</h2>
            <p className="text-xl text-blue-100 max-w-xl">
              We are actively raising a Seed round to expand our engineering team and execute our aggressive pan-India go-to-market strategy.
            </p>
          </div>
          
          <div className="relative z-10 flex-shrink-0">
            <a href={`mailto:${SITE.email}?subject=Investor Inquiry - VAANI`} className="bg-white text-blue-600 px-8 py-5 rounded-2xl font-black text-lg transition-all hover:bg-slate-50 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] flex items-center justify-center gap-3">
              Contact Founders <ChevronRight className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      
        {/* Investment Highlights */}
        <div className="mt-32 mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">Why Invest in VAANI?</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">We are building the definitive digital infrastructure for the next billion users.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Purpose-Built Voice NLP", desc: "Our AI model is designed and trained specifically for Indian retail dialects and mixed-language queries (Hinglish, Marathish), not adapted from a generic model — and it's being validated directly with real shopkeepers during our private beta.", icon: "🧠" },
              { title: "Zero Hardware Cost", desc: "Unlike traditional POS companies that require ₹35,000+ hardware setups, VAANI runs flawlessly on the shopkeeper's existing ₹8,000 Android smartphone.", icon: "📱" },
              { title: "Massive Uncapped TAM", desc: "India has over 60 Million unorganized retailers processing $800B+ annually. We aim to be among the first platforms to successfully bridge their digital literacy gap.", icon: "📈" },
              { title: "Built for Retention by Design", desc: "A recurring-revenue SaaS model where switching costs rise over time: once a shopkeeper digitizes their ledger and inventory with VAANI, going back to pen-and-paper becomes genuinely painful.", icon: "💰" }
            ].map((highlight, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-8 rounded-[2rem] bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 shadow-lg hover:shadow-xl dark:hover:bg-white/[0.04] transition-all flex gap-6">
                <div className="text-4xl">{highlight.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{highlight.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{highlight.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="mt-20 mb-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-6">Our Journey So Far</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">We&apos;re early — VAANI is pre-launch and not yet on the Play Store. Here&apos;s where we honestly stand today.</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:via-blue-500 before:to-transparent">
              {[
                { date: "The Problem", title: "Lived, Not Researched", desc: "Our founder personally ran his father's kirana shop and faced the daily pain of manual billing, typing errors, and GST compliance headaches firsthand." },
                { date: "Building VAANI", title: "CA/CS Expertise Meets AI/ML", desc: "Combined compliance expertise with an AI/ML background to build a voice-first, offline-capable billing engine from the ground up." },
                { date: "Right Now", title: "Private Beta", desc: "Actively piloting with real shopkeepers — a toy shop, a kirana store, and a gift shop owner — who are already asking for the app to launch and are willing to pay for it." },
                { date: "What's Next", title: "Public Launch", desc: "Preparing to bring VAANI to the Play Store and onboard India's first wave of voice-billing retailers." }
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-50 dark:border-[#030712] bg-blue-600 text-white shadow-[0_0_10px_rgba(37,99,235,0.4)] md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shrink-0 relative z-10"></div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl border border-slate-200 dark:border-white/5 bg-white dark:bg-white/[0.02] hover:bg-slate-50 dark:hover:bg-white/[0.04] transition-colors shadow-lg">
                    <span className="text-sm font-bold text-blue-600 dark:text-blue-400 mb-2 block">{item.date}</span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
</div>
    </div>
  );
}
