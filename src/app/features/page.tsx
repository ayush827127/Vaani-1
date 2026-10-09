"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, Zap, ShieldCheck, Printer, Smartphone, BookOpen, Bot, Globe, Cloud } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import AppGallery from '@/components/AppGallery';
import { SCREENS } from '@/lib/screens';

const features = [
  { icon: Mic, title: "Voice-First Billing", desc: "Speak naturally in Hindi, English, or regional languages. '2 kilo aata, 1 litre tel' is instantly converted into a structured GST bill.", img: "/bg_images/bg_7.jpg", tag: "Most Used" },
  { icon: Smartphone, title: "Dynamic QR Payments", desc: "Auto-generate UPI QR codes on the customer's bill display for the exact amount. Zero manual entry errors, instant settlement directly to your bank.", img: "/bg_images/bg_3.jpg", tag: "Zero Fee" },
  { icon: BookOpen, title: "Smart Bahikhata", desc: "Automated digital ledger. Track udhaar (credit), send automated 1-click WhatsApp payment reminders, and reconcile payments with zero friction.", img: "/bg_images/bg_15.jpg", tag: "Included" },
  { icon: Printer, title: "Thermal Print Integration", desc: "Native Web Bluetooth support connects directly to 58mm/80mm ESC/POS thermal printers without installing drivers. Print receipts in under 1 second.", img: "/bg_images/bg_16.jpg", tag: "Pro Feature" },
  { icon: Bot, title: "Digital Store Employee", desc: "An AI assistant that monitors your stock levels, suggests re-orders based on seasonal trends, and alerts you of dead stock automatically.", img: "/bg_images/bg_17.jpg", tag: "Pro Feature" },
  { icon: Globe, title: "10+ Regional Languages", desc: "Built for Bharat. Switch the entire interface and voice recognition engine to Marathi, Gujarati, Tamil, Telugu, Kannada, Bengali and more.", img: "/bg_images/bg_18.jpg", tag: "Included" },
  { icon: Zap, title: "Offline-First Sync", desc: "Internet down? Keep billing. VAANI stores everything in local IndexedDB and silently syncs to the cloud the second you're back online.", img: "/bg_images/bg_19.jpg", tag: "Critical" },
  { icon: ShieldCheck, title: "1-Click GST & HSN", desc: "Stop memorizing HSN codes. Just speak the item name and our database automatically applies the correct GST slab for perfect compliance.", img: "/bg_images/bg_20.jpg", tag: "Pro Feature" },
  { icon: Cloud, title: "Cloud Backup", desc: "Your financial data is encrypted and backed up to our secure enterprise-grade PostgreSQL servers every minute. Never lose a single ledger entry.", img: "/bg_images/bg_21.jpg", tag: "Included" }
];

const comparison = [
  { feature: "Input Method", traditional: "Manual Keyboard / Barcode", vaani: "100% Natural Voice" },
  { feature: "Training Required", traditional: "3-5 Days", vaani: "Zero (Speak natively)" },
  { feature: "Hardware Cost", traditional: "₹35,000+ (PC + Scanner)", vaani: "₹0 (Use your smartphone)" },
  { feature: "Regional Languages", traditional: "English Only", vaani: "10+ Indian Languages" },
  { feature: "Offline Capabilities", traditional: "Stops working / Data loss", vaani: "Flawless Offline Sync" }
];

export default function FeaturesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen py-20 px-4 relative">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center mb-32 relative z-10 pt-16">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="max-w-full inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm font-semibold mb-8">
          <Zap className="w-4 h-4" /> Everything you need to scale
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-5xl md:text-7xl font-black tracking-tighter mb-8">
          Platform <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-600 dark:from-blue-400 dark:to-blue-500">Features.</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
          VAANI isn&apos;t just a billing app. It&apos;s a complete autonomous retail operating system designed specifically for the unique challenges of Indian shopkeepers.
        </motion.p>
      </div>

      
      {/* Offline Feature Highlight */}
      <div className="max-w-7xl mx-auto relative z-10 pb-20 px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="flex flex-col">
            <div className="max-w-full inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-6 w-fit">
              <Zap className="w-4 h-4" /> 100% Offline Capable
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">No Internet? No Problem.</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              We know that internet connectivity can be unreliable in many parts of India. That&apos;s why VAANI is built with an offline-first architecture.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              You can continue to scan items, speak to the AI, generate bills, and print receipts without skipping a beat. The moment your phone connects to the internet, all your data silently syncs to the cloud.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative rounded-[3rem] overflow-hidden border-[4px] border-slate-200 dark:border-white/10 shadow-2xl h-[400px] lg:h-[500px] group">
             <img src="/offline.jpg" alt="Offline Capabilities" className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          </motion.div>
        </div>
      </div>
      
{/* Feature Grid */}
      <div className="max-w-7xl mx-auto relative z-10 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="h-full">
              <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} className="h-full">
                <div className="rounded-[2rem] border border-slate-200 dark:border-white/5 hover:border-blue-500/30 transition-all h-full group relative overflow-hidden shadow-lg">
                  
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-100 mix-blend-luminosity" style={{ backgroundImage: 'url(' + feature.img + ')' }}></div>
                  <div className="absolute inset-0 bg-white/70 dark:bg-[#050810]/70 group-hover:bg-white/60 dark:group-hover:bg-[#050810]/60 transition-colors"></div>
                  
                  <div className="absolute top-4 right-4 z-20">
                    <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-700/50 backdrop-blur-md">
                      {feature.tag}
                    </span>
                  </div>

                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    <feature.icon className="w-32 h-32 text-blue-500 transform rotate-12" />
                  </div>
                  
                  <div className="relative z-10 p-8 flex flex-col h-full">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-500/20 border border-blue-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform backdrop-blur-sm">
                      <feature.icon className="w-6 h-6 text-blue-600 dark:text-blue-400 drop-shadow-sm" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 drop-shadow-sm">{feature.title}</h3>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed drop-shadow-sm flex-grow">{feature.desc}</p>
                  </div>

                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      
        
        <AppGallery eyebrow="Feature Screens" title="Products, sharing, reports and AI Manager" screens={[SCREENS.products, SCREENS.share, SCREENS.reports, SCREENS.aiManager, SCREENS.offline]} />

        {/* Metrics & ROI Section */}
        <div className="max-w-7xl mx-auto relative z-10 pt-20 pb-16 px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">Proven ROI for Retailers</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">We don&apos;t just provide software; we provide measurable growth and massive time savings for your business.</p>
          </motion.div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { stat: "3 Hours", label: "Saved Daily", desc: "No more staying late to manually calculate daily sales and ledger entries." },
              { stat: "100%", label: "GST Compliance", desc: "Zero manual errors in tax filing. HSN codes applied perfectly every time." },
              { stat: "4x", label: "Faster Billing", desc: "Clear peak-hour queues instantly. Speak the bill 400% faster than typing." },
              { stat: "₹0", label: "Hardware Costs", desc: "No expensive barcode scanners or desktop PCs required. Just your phone." }
            ].map((metric, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-8 rounded-[2rem] border border-blue-500/20 bg-blue-500/5 text-center group hover:bg-blue-500/10 transition-colors">
                <div className="text-4xl lg:text-5xl font-black text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform">{metric.stat}</div>
                <div className="text-lg font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-wider">{metric.label}</div>
                <p className="text-sm text-slate-600 dark:text-slate-400">{metric.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

{/* Comparison Section */}
        <div className="max-w-7xl mx-auto relative z-10 pt-20 pb-16 px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">VAANI vs Traditional POS</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">Why thousands of retailers are throwing away their clunky billing machines.</p>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-[3rem] border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-[#050810]/50 backdrop-blur-xl overflow-hidden shadow-2xl">
            {/* Desktop/tablet table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-white/10">
                    <th className="p-8 text-xl font-bold text-slate-900 dark:text-white">Feature</th>
                    <th className="p-8 text-xl font-bold text-slate-500 bg-slate-50 dark:bg-white/5">Traditional POS</th>
                    <th className="p-8 text-xl font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20">VAANI AI</th>
                  </tr>
                </thead>
                <tbody className="text-lg">
                  {comparison.map((row, i) => (
                    <tr key={i} className={i < comparison.length - 1 ? "border-b border-slate-200 dark:border-white/5" : ""}>
                      <td className="p-8 font-semibold text-slate-800 dark:text-slate-200">{row.feature}</td>
                      <td className="p-8 text-slate-500 bg-slate-50 dark:bg-white/5">{row.traditional}</td>
                      <td className="p-8 text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/10 font-bold">{row.vaani}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile stacked cards */}
            <div className="md:hidden divide-y divide-slate-200 dark:divide-white/5">
              {comparison.map((row, i) => (
                <div key={i} className="p-6">
                  <div className="text-sm font-bold text-slate-900 dark:text-white mb-3">{row.feature}</div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wide text-slate-400 shrink-0 pt-0.5">Traditional</span>
                    <span className="text-sm text-slate-500 text-right">{row.traditional}</span>
                  </div>
                  <div className="flex items-start justify-between gap-3 bg-blue-50 dark:bg-blue-900/10 rounded-xl px-3 py-2">
                    <span className="text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400 shrink-0 pt-0.5">VAANI AI</span>
                    <span className="text-sm text-blue-700 dark:text-blue-300 font-bold text-right">{row.vaani}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto relative z-10 pt-20 pb-16 px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-6">Frequently Asked Questions</h2>
          </motion.div>
          
          <div className="space-y-6">
            {[
              { q: "Does VAANI understand mixed languages (Hinglish)?", a: "Yes! Our NLP model is specifically trained on Indian retail dialects. You can say 'Do kilo aata and one dettol soap' and it will perfectly map to your inventory." },
              { q: "Do I need to buy a special printer?", a: "No. VAANI connects directly to any standard 58mm or 80mm ESC/POS thermal printer via Bluetooth. No drivers or messy cables required." },
              { q: "What happens if my internet disconnects?", a: "Nothing changes! You can continue billing, printing, and taking payments. VAANI stores everything locally and silently syncs to the cloud the moment your connection returns." },
              { q: "How does the Dynamic QR work?", a: "When you generate a bill, a unique UPI QR code appears on the screen for the exact total amount. When the customer pays, it automatically reconciles in your ledger." }
            ].map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-[2rem] bg-white/[0.02] border border-slate-200 dark:border-white/5 hover:bg-white/[0.04] transition-colors overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left p-8 flex justify-between items-center gap-4 cursor-pointer group"
                >
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{faq.q}</h3>
                  <span className={`text-blue-500 text-2xl leading-none transition-transform duration-300 shrink-0 ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed px-8 pb-8">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
</div>
    </div>
  );
}
