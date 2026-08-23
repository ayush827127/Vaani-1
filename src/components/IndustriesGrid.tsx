"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Package, ShoppingBag, Pill, Gift, Shirt, Coffee, Plug, Store, Settings } from 'lucide-react';
import { SITE } from '@/lib/site';

export default function IndustriesGrid() {
  const industries = [
    {
      img: "/bg_images/industry_wholesale.jpg", title: "Wholesale & Distributors",
      icon: Package,
      keyFeature: "Bulk carton billing, multi-tier pricing, and customer credit (Udhaar) ledger.",
      highlight: "Instant GST tax invoice generation & CA export."
    },
    {
      img: "/bg_images/industry_sweets.jpg", title: "Sweet Shops & Bakeries",
      icon: ShoppingBag,
      keyFeature: "Weight-based pricing (grams/kg) and daily fresh batch stock tracking.",
      highlight: "Zero-delay queue clearance."
    },
    {
      img: "/bg_images/industry_medical.jpg", title: "Medical & Pharmacy",
      icon: Pill,
      keyFeature: "Batch number tracking, expiry date alerts, and quick medicine search.",
      highlight: "100% compliant prescription invoicing."
    },
    {
      img: "/bg_images/industry_toys.jpg", title: "Toy & Gift Shops",
      icon: Gift,
      keyFeature: "Barcode tagging for multi-variety gifts and dynamic UPI QR printouts.",
      highlight: "Instant thermal receipt printing directly from mobile."
    },
    {
      img: "/bg_images/industry_garments.jpg", title: "Garments & Footwear",
      icon: Shirt,
      keyFeature: "Size & color variation tracking with instant inventory deduction.",
      highlight: "Digital receipts sent directly to customer WhatsApp."
    },
    {
      img: "/bg_images/industry_cafe.jpg", title: "Beverages, Cafes & Food",
      icon: Coffee,
      keyFeature: "3-second rapid voice checkouts without touching the screen.",
      highlight: "Live margin and profit tracking per drink/snack."
    },
    {
      img: "/bg_images/industry_electronics.jpg", title: "Electronics & Hardware",
      icon: Plug,
      keyFeature: "Serial number tracking, warranty billing, and custom tax rates.",
      highlight: "Clean A4 GST invoice print and share."
    },
    {
      img: "/bg_images/industry_kirana.jpg", title: "Kirana & General Stores",
      icon: Store,
      keyFeature: "Voice billing in Hindi/English for fast evening rush checkouts.",
      highlight: "Barcode scanner + quick loose item quantity selector."
    }
  ];

  return (
    <section className="py-32 relative border-t border-slate-200 dark:border-white/5 overflow-hidden">
      {/* High-visibility background image */}
      <div className="absolute inset-0 bg-cover bg-center opacity-100 mix-blend-luminosity" style={{ backgroundImage: "url('/bg_images/bg_21.jpg')" }}></div>
      <div className="absolute inset-0 bg-white/70 dark:bg-[#050810]/80"></div>
      
      {/* Subtle purple tint */}
      <div className="absolute inset-0 bg-blue-900/5 mix-blend-screen pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-bold mb-6 tracking-widest uppercase">
            Versatile & Customizable 🏪
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white mb-6">
            One Smart App for Every <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-600 dark:from-blue-400 dark:to-blue-400">Shop & Wholesale Business</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Whether you run a fast-paced retail counter or a heavy wholesale distribution point, Vaani AI adapts perfectly to your workflow.
          </p>
        </motion.div>

        {/* 8-Card Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {industries.map((ind, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: i * 0.1 }}
              className="group  border border-slate-200 dark:border-slate-800 rounded-3xl p-6 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Subtle top border gradient */}
              
              {/* Card Background Image */}
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-100 mix-blend-luminosity" style={{ backgroundImage: 'url(' + ind.img + ')' }}></div>
              <div className="absolute inset-0 bg-white/80 dark:bg-[#050810]/80 group-hover:bg-white/70 dark:group-hover:bg-[#050810]/70 transition-colors"></div>

              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500/0 via-blue-500 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity z-20"></div>
              
              <div className="relative z-20 w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                <ind.icon className="w-7 h-7" />
              </div>
              
              <h3 className="relative z-20 text-xl font-black text-slate-900 dark:text-white mb-4 drop-shadow-sm">{ind.title}</h3>
              
              <div className="relative z-20 space-y-4">
                <div>
                  <p className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1 drop-shadow-sm">Key Feature</p>
                  <p className="text-slate-800 dark:text-slate-200 text-sm leading-relaxed font-medium drop-shadow-sm">{ind.keyFeature}</p>
                </div>
                <div>
                  <p className="text-xs font-black text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1 drop-shadow-sm">Highlight</p>
                  <p className="text-slate-900 dark:text-white text-sm font-bold drop-shadow-sm">{ind.highlight}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Request Callout */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="max-w-4xl mx-auto bg-gradient-to-r from-blue-500/5 to-blue-500/5 border border-blue-500/20 rounded-[2rem] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
        >
          <div>
            <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Don&apos;t see your business type?</h4>
            <p className="text-slate-600 dark:text-slate-400 text-lg">Vaani AI is 100% customizable for any custom inventory or retail setup.</p>
          </div>
          <a href={`mailto:${SITE.email}?subject=Custom Business Type - VAANI`} className="whitespace-nowrap bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-2 shadow-lg shadow-blue-500/30 transition-all hover:scale-105">
            Customize for My Business <Settings className="w-5 h-5 ml-2" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
