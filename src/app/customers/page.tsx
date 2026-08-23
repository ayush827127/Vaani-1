"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Building2, TrendingUp, Users } from 'lucide-react';

const testimonials = [
  { name: "Rajesh K.", shop: "Rajesh Provision Store", quote: "Pehle bill banane mein 2 minute lagte the. Ab sirf 3 second.", stars: 5, img: "/bg_images/bg_1.jpg" },
  { name: "Priya S.", shop: "Priya Medicos", quote: "Dawai ka naam bolte hi GST lag ke bill ban jata hai. Magic!", stars: 5, img: "/bg_images/bg_9.jpg" },
  { name: "Amit P.", shop: "Patel Hardware", quote: "5000+ items hain meri dukaan mein. VAANI sab samajhta hai.", stars: 5, img: "/bg_images/bg_10.jpg" },
  { name: "Suresh M.", shop: "Suresh Traders", quote: "Offline bhi chalata hoon. Data sync automatic hai.", stars: 5, img: "/bg_images/bg_1.jpg" },
  { name: "Meena R.", shop: "Meena Boutique", quote: "Ab customers ki line nahi lagti. QR scan karke direct pay karte hain.", stars: 5, img: "/bg_images/bg_12.jpg" },
  { name: "Vikram S.", shop: "Vikram Electronics", quote: "Thermal printer connect karna itna easy kabhi nahi tha.", stars: 5, img: "/bg_images/bg_13.jpg" }
];

export default function CustomersPage() {
  return (
    <div className="min-h-screen py-20 px-4 relative">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>
      
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto text-center mb-24 relative z-10 pt-16">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm font-semibold mb-8">
          <Users className="w-4 h-4" /> Trusted by 50,00+ Retailers
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-5xl md:text-7xl font-black tracking-tighter mb-8 text-slate-900 dark:text-white">
          Real Stories.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-600 dark:from-blue-400 dark:to-blue-500">Real Impact.</span>
        </motion.h1>
      </div>

      {/* Featured Customer */}
      <div className="max-w-7xl mx-auto relative z-10 mb-20 px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="rounded-[3rem] overflow-hidden border-[4px] border-slate-200 dark:border-white/10 shadow-2xl relative h-[500px] flex items-end p-8 md:p-12 group">
           <img src="/bg_images/bg_14.jpg" alt="Featured Customer" className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700" />
           <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
           <div className="relative z-10 max-w-3xl">
             <Quote className="w-12 h-12 text-blue-400 mb-6" />
             <p className="text-2xl md:text-4xl font-bold text-white mb-6 leading-tight">"VAANI has completely transformed how I run my shop. I no longer worry about long lines during festival season."</p>
             <div>
               <h4 className="font-bold text-white text-xl">Vikram Singh</h4>
               <p className="text-blue-400">Singh General Store, Jaipur</p>
             </div>
           </div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 pb-32">
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="rounded-3xl border border-slate-200 dark:border-white/5 relative overflow-hidden group shadow-lg flex flex-col h-full">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-100 mix-blend-luminosity" style={{ backgroundImage: 'url(' + t.img + ')' }}></div>
              <div className="absolute inset-0 bg-white/80 dark:bg-[#050810]/80 group-hover:bg-white/70 dark:group-hover:bg-[#050810]/70 transition-colors"></div>
              <div className="relative z-10 p-8 flex flex-col h-full">
                <Quote className="w-10 h-10 text-blue-500/20 absolute top-8 right-8 drop-shadow-sm" />
                <div className="flex gap-1 mb-6">
                  {[...Array(t.stars)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-8 drop-shadow-sm flex-grow">
                  "{t.quote}"
                </p>
                <div className="mt-auto pt-6 border-t border-slate-200 dark:border-white/10">
                  <h4 className="font-bold text-slate-900 dark:text-white text-lg drop-shadow-sm">{t.name}</h4>
                  <p className="text-blue-600 dark:text-blue-400 text-sm drop-shadow-sm">{t.shop}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      
      {/* Massive CTA Section */}
      <div className="max-w-7xl mx-auto relative z-10 pb-20 px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-[3rem] overflow-hidden relative shadow-2xl">
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-110 opacity-40 mix-blend-luminosity" style={{ backgroundImage: "url('/bg_images/bg_30.jpg')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/90 to-blue-900/80"></div>
          
          <div className="relative z-10 p-12 md:p-24 text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">Join 50,000+ Retailers.</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed">
              Don't let your business get left behind in the digital age. Upgrade your shop to a smart voice-enabled store in under 5 minutes today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/vaani.apk" download className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-bold transition-all hover:bg-slate-50 hover:scale-105 shadow-xl hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
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
