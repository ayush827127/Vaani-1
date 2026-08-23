"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { ChevronLeft, ChevronRight, QrCode, Printer, Send, ArrowRight, Check, CheckCircle, Mail, Settings, AlertTriangle, BarChart, ShieldCheck, Mic, Languages, BookOpen, Bot } from 'lucide-react';
import StaticHero from '@/components/StaticHero';
import VoiceSimulator from '@/components/VoiceSimulator';
import IndustriesGrid from '@/components/IndustriesGrid';
import Testimonials from '@/components/Testimonials';
import { SITE, buildWhatsAppUrl } from '@/lib/site';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const slider = document.getElementById('real-users-slider');
    if (!slider) return;
    
    let animationId: number;
    let isHovered = false;

    // Listeners for hover state
    const handleMouseEnter = () => isHovered = true;
    const handleMouseLeave = () => isHovered = false;
    
    slider.addEventListener('mouseenter', handleMouseEnter);
    slider.addEventListener('mouseleave', handleMouseLeave);

    const smoothAutoScroll = () => {
      if (!isHovered) {
        slider.scrollLeft += 1;
        // If we reach the end, instantly reset to the beginning to create an infinite loop
        if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth - 1) {
          slider.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(smoothAutoScroll);
    };

    // Start the scroll loop
    animationId = requestAnimationFrame(smoothAutoScroll);

    return () => {
      cancelAnimationFrame(animationId);
      slider.removeEventListener('mouseenter', handleMouseEnter);
      slider.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#050810] transition-colors duration-300">

        <StaticHero />

        {/* Scrollable Image Slider Section */}
        <section className="py-24 bg-white dark:bg-[#030712] relative overflow-hidden">
          <div className="text-center mb-12 relative z-10">
            <h2 className="text-sm font-bold text-blue-500 tracking-widest uppercase mb-3">Real Users</h2>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Empowering shops across India</h3>
          </div>
          
          <div className="relative w-full">
            <div 
              id="real-users-slider"
              className="flex gap-6 px-4 md:px-8 pb-8 overflow-x-auto hide-scrollbar"
            >
              {[
                "/bg_images/bg_1.jpg",
                "/bg_images/bg_25.jpg",
                "/bg_images/bg_3.jpg",
                "/bg_images/bg_4.jpg",
                "/bg_images/bg_27.jpg",
                "/bg_images/bg_6.jpg",
                "/bg_images/bg_28.jpg",
                "/bg_images/bg_13.jpg",
                "/bg_images/bg_29.jpg"
              ].map((src, i) => (
                <div key={i} className="w-[300px] md:w-[450px] h-[300px] shrink-0 rounded-3xl overflow-hidden relative shadow-lg hover:shadow-xl transition-all duration-300">
                  <img src={src} alt="Shop in India" className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Challenge */}
        <section className="py-32 relative border-t border-slate-200 dark:border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-sm font-bold text-blue-500 tracking-widest uppercase mb-3">The Challenge</h2>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">Why traditional apps fail.</h3>
            </motion.div>
            
            <div className="relative">
              {/* Left Button */}
              <button
                onClick={() => {
                  document.getElementById('challenge-slider')?.scrollBy({ left: -400, behavior: 'smooth' });
                }}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-20 w-12 h-12 rounded-full bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/10 shadow-xl flex items-center justify-center text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Right Button */}
              <button
                onClick={() => {
                  document.getElementById('challenge-slider')?.scrollBy({ left: 400, behavior: 'smooth' });
                }}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-20 w-12 h-12 rounded-full bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/10 shadow-xl flex items-center justify-center text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div id="challenge-slider" className="flex gap-6 overflow-x-auto pb-8 snap-x px-4 w-full" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                <style dangerouslySetInnerHTML={{__html: `#challenge-slider::-webkit-scrollbar { display: none; }`}} />
                
                {[
                  { title: "Digital Literacy Gap", desc: "Complex interfaces force typing. 90% prefer voice over manual entry.", icon: AlertTriangle, bgImg: "/bg_images/bg_4.jpg" },
                  { title: "Slow Manual Billing", desc: "Manual billing takes 3-5 mins, causing long queues at peak hours.", icon: BarChart, bgImg: "/bg_images/bg_2.jpg" },
                  { title: "No Smart Options", desc: "Apps focus on accounting, neglecting the actual billing experience.", icon: Settings, bgImg: "/bg_images/bg_3.jpg" },
                  { title: "Compliance Hell", desc: "Lack of easy GST tools leads to extreme risk of penalties.", icon: ShieldCheck, bgImg: "/bg_images/bg_1.jpg" }
                ].map((item, i) => (
                  <Tilt key={i} tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.02} transitionSpeed={2000} className="shrink-0 w-[300px] md:w-[350px] snap-center h-[400px]">
                    <motion.div 
                        initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7, delay: i * 0.1 }}
                        className="rounded-[2rem] border border-slate-200 dark:border-white/5 h-full backdrop-blur-sm group relative overflow-hidden shadow-lg"
                    >
                      <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-100 mix-blend-luminosity" style={{ backgroundImage: 'url(' + item.bgImg + ')' }}></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/20 group-hover:from-black/80 transition-colors duration-500"></div>

                      <div className="relative z-10 p-8 flex flex-col h-full justify-end">
                        <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-500 shadow-xl absolute top-6 right-6">
                          <item.icon className="w-6 h-6 drop-shadow-md" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-white drop-shadow-md">{item.title}</h3>
                        <p className="text-white/80 text-sm leading-relaxed drop-shadow-sm">{item.desc}</p>
                      </div>
                    </motion.div>
                  </Tilt>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Voice Simulator Widget */}
        <VoiceSimulator />

        {/* How Vaani AI Works (3-Step Bento Grid) */}
        <section className="py-32 relative bg-slate-50/50 dark:bg-[#050810]/50 border-y border-slate-200 dark:border-white/5 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-bold mb-6 tracking-widest uppercase shadow-sm">
                Effortless Workflow
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white">
                From Voice to Printed Bill <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-600 dark:from-blue-400 dark:to-blue-400">in Under 3 Seconds</span>
              </h2>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-6 auto-rows-[400px]">
              
              {/* Card 1 (Speak) - Spans 2 columns */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="md:col-span-2 rounded-[2.5rem] border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/40 p-8 lg:p-12 relative overflow-hidden group shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent dark:from-blue-900/10 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3">1. Just Speak Naturally</h3>
                    <p className="text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
                      Our bilingual Agentic AI perfectly understands Indian retail terms, slang, and mixed languages. No need to tap buttons or search menus.
                    </p>
                  </div>
                  
                  {/* Visual */}
                  <div className="mt-8 relative">
                    <div className="flex gap-2 items-center mb-6 pl-4">
                      <div className="w-1.5 h-6 bg-blue-500 rounded-full animate-[pulse_1s_ease-in-out_infinite]"></div>
                      <div className="w-1.5 h-10 bg-blue-400 rounded-full animate-[pulse_1.2s_ease-in-out_infinite]"></div>
                      <div className="w-1.5 h-14 bg-blue-500 rounded-full animate-[pulse_0.8s_ease-in-out_infinite]"></div>
                      <div className="w-1.5 h-8 bg-blue-500 rounded-full animate-[pulse_1.5s_ease-in-out_infinite]"></div>
                      <div className="w-1.5 h-12 bg-blue-400 rounded-full animate-[pulse_1.1s_ease-in-out_infinite]"></div>
                    </div>
                    
                    <div className="bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6 rounded-2xl rounded-tl-none w-fit shadow-md">
                      <p className="text-lg font-medium text-slate-800 dark:text-slate-200">&quot;दो पीस पेप्सी और 3 बोतल पानी&quot;</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Card 2 (Auto-Calculate) - Spans 1 column */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="md:col-span-1 rounded-[2.5rem] border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/40 p-8 relative overflow-hidden group shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 transition-all">
                <div className="absolute inset-0 bg-gradient-to-bl from-blue-50 to-transparent dark:from-blue-900/10 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3">2. Auto-Calculate</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                      Live cart breakdown, automatic SGST/CGST addition, and instant inventory stock deduction.
                    </p>
                  </div>
                  
                  {/* Visual */}
                  <div className="mt-auto bg-slate-50 dark:bg-[#030712] border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-inner">
                    <div className="flex justify-between items-center mb-3 text-sm font-medium">
                      <span className="text-slate-700 dark:text-slate-300">Pepsi x 2</span>
                      <span className="text-slate-900 dark:text-white">₹80</span>
                    </div>
                    <div className="flex justify-between items-center mb-4 text-sm font-medium">
                      <span className="text-slate-700 dark:text-slate-300">Clear Water x 3</span>
                      <span className="text-slate-900 dark:text-white">₹70</span>
                    </div>
                    <div className="h-px w-full bg-slate-200 dark:bg-slate-800 mb-4"></div>
                    <div className="flex justify-between items-center font-black">
                      <span className="text-slate-900 dark:text-white text-lg">Total</span>
                      <span className="text-blue-600 dark:text-blue-400 text-xl">₹150</span>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Card 3 (Collect & Print) - Spans 3 columns */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="md:col-span-3 rounded-[2.5rem] border border-slate-200 dark:border-white/10 bg-slate-900 p-8 lg:p-12 relative overflow-hidden group shadow-2xl hover:shadow-[0_0_40px_rgba(37,99,235,0.2)] transition-all flex flex-col md:flex-row gap-8 items-center justify-between">
                <div className="absolute inset-0 bg-[url('/bg_images/bg_12.jpg')] opacity-20 mix-blend-luminosity group-hover:scale-105 transition-transform duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/50"></div>
                
                <div className="relative z-10 md:w-1/2">
                  <h3 className="text-3xl font-black text-white mb-4">3. Collect & Print</h3>
                  <p className="text-slate-300 leading-relaxed mb-8 text-lg">
                    Generate the final receipt with a dynamic UPI QR code. Print directly to your ESC/POS thermal printer via Bluetooth, or share a professional PDF instantly on WhatsApp.
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <div className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold flex items-center gap-2 backdrop-blur-md">
                      <QrCode className="w-4 h-4 text-blue-400" /> Dynamic UPI QR
                    </div>
                    <div className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold flex items-center gap-2 backdrop-blur-md">
                      <Printer className="w-4 h-4 text-blue-400" /> ESC/POS Ready
                    </div>
                  </div>
                </div>
                
                <div className="relative z-10 md:w-5/12 w-full flex justify-end">
                  {/* Receipt UI Mockup */}
                  <div className="bg-white rounded-xl w-full max-w-sm p-6 shadow-2xl rotate-3 group-hover:rotate-0 transition-transform duration-500 border-t-8 border-t-blue-500 relative">
                    <div className="text-center mb-6">
                      <h4 className="text-xl font-black text-slate-900 uppercase">Vaani Retail</h4>
                      <p className="text-xs text-slate-500">GSTIN: 27AADCB2230M1Z2</p>
                    </div>
                    
                    {/* Invoice Line Items */}
                    <div className="text-left mb-6 space-y-2 border-y border-dashed border-slate-200 py-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600">Pepsi 500ml x2</span>
                        <span className="text-slate-900 font-semibold">₹80</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600">Clear Water 1L x3</span>
                        <span className="text-slate-900 font-semibold">₹70</span>
                      </div>
                      <div className="flex justify-between text-sm font-black pt-2 mt-2 border-t border-slate-200">
                        <span className="text-slate-900">Total</span>
                        <span className="text-blue-600">₹150</span>
                      </div>
                    </div>

                    <a href={buildWhatsAppUrl("Hi VAANI Team! I want a demo of the app.")} target="_blank" rel="noopener noreferrer" className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 shadow-lg transition-colors">
                      <Send className="w-4 h-4" /> Share on WhatsApp
                    </a>
                  </div>
                </div>
                
              </motion.div>
              
            </div>
          </div>
        </section>

        {/* Deep-Dive Core Features (2x2 Grid) */}
        <section className="py-32 relative border-t border-slate-200 dark:border-white/5 bg-slate-50/30 dark:bg-black/10 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-bold mb-6 tracking-widest uppercase shadow-sm">
                Powerful Capabilities
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">Deep-Dive Core Features.</h2>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {[
                { 
                  icon: Mic, 
                  title: "AI Voice Commander", 
                  desc: "Zero typing required. Works flawlessly in Hindi, English, and Hinglish even in extremely noisy shop environments.",
                  gradient: "from-blue-500 to-blue-600",
                  bgImage: "/bg_images/bg_7.jpg"
                },
                { 
                  icon: QrCode, 
                  title: "Instant Invoicing & Dynamic UPI", 
                  desc: "Generates ready-to-pay QR codes directly on invoices, supporting Cash, UPI, Card, and Udhaar (Credit) ledger tracking.",
                  gradient: "from-blue-500 to-blue-600",
                  bgImage: "/bg_images/bg_3.jpg"
                },
                { 
                  icon: BarChart, 
                  title: "Smart Inventory & Margin Analytics", 
                  desc: "Real-time profit indicators per item (e.g., ₹20 profit / 50% margin), low-stock badges, and instant category filters.",
                  gradient: "from-blue-500 to-blue-600",
                  bgImage: "/bg_images/bg_12.jpg"
                },
                { 
                  icon: Printer, 
                  title: "Cloud Sync & Printer Ecosystem", 
                  desc: "Automatic offline caching with background cloud sync. Direct support for network/Bluetooth thermal printers (58mm/80mm) and A4 PDF export.",
                  gradient: "from-blue-500 to-blue-600",
                  bgImage: "/bg_images/bg_32.jpg"
                }
              ].map((feature, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                  {/* Subtle Border Gradient Wrapper */}
                  <div className={`p-[2px] rounded-[2.5rem] bg-gradient-to-br ${feature.gradient} group hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 h-full`}>
                    <div className="rounded-[calc(2.5rem-2px)] bg-white dark:bg-slate-900 h-full p-8 md:p-10 relative overflow-hidden flex flex-col justify-between z-10 group-hover:bg-opacity-95 dark:group-hover:bg-opacity-90 transition-all">
                      
                      {/* Background Image Overlay */}
                      <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-100 mix-blend-luminosity" style={{ backgroundImage: 'url(' + feature.bgImage + ')' }}></div>
                      <div className="absolute inset-0 bg-white/90 dark:bg-[#0f172a]/90 group-hover:bg-white/80 dark:group-hover:bg-[#0f172a]/80 transition-colors"></div>

                      <div className="relative z-20">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-8 text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                          <feature.icon className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 drop-shadow-sm">{feature.title}</h3>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed drop-shadow-sm text-lg">{feature.desc}</p>
                      </div>
                      
                      {/* Floating Decorative Icon */}
                      <div className="absolute -bottom-8 -right-8 opacity-5 group-hover:opacity-10 group-hover:-rotate-12 transition-all duration-500 z-10 pointer-events-none">
                        <feature.icon className="w-48 h-48 text-slate-900 dark:text-white" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <a href="/features" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                Explore All 15+ Features <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <IndustriesGrid />

        {/* The Innovation Edge */}
        <section className="py-32 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-10 leading-tight text-slate-900 dark:text-white">
                  The Innovation Edge <br/>
                  <span className="text-blue-600 dark:text-blue-500">Unfair Advantage</span>
                </h2>
                <ul className="space-y-6 mb-12">
                  {[
                    "Agentic AI instantly matches raw voice to inventory SKUs.",
                    "Cloud-synced offline mode. Never stop billing.",
                    "Direct POS and thermal printer integration out-of-the-box."
                  ].map((text, i) => (
                    <motion.li key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + (i * 0.1) }} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center shrink-0 mt-1">
                        <Check className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">{text}</p>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="grid grid-cols-2 gap-4">
                 {[
                   { n: "Voice Billing", i: Mic, img: "/bg_images/bg_27.jpg" }, 
                   { n: "Multi Language", i: Languages, img: "/bg_images/bg_28.jpg" },
                   { n: "Dynamic QR", i: QrCode, img: "/bg_images/bg_29.jpg" },
                   { n: "Bookkeeping", i: BookOpen, img: "/bg_images/bg_30.jpg" },
                   { n: "Thermal Printer", i: Printer, img: "/bg_images/bg_31.jpg" },
                   { n: "Digital Employee", i: Bot, img: "/bg_images/bg_32.jpg" }
                 ].map((feature, i) => (
                   <Tilt key={i} tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05} className="h-full">
                     <div className="relative overflow-hidden rounded-3xl border border-slate-200 dark:border-white/5 h-full aspect-square group">
                       <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-100 mix-blend-luminosity" style={{ backgroundImage: 'url(' + feature.img + ')' }}></div>
                       <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/60 to-white/20 dark:from-[#030712]/90 dark:via-[#030712]/60 dark:to-[#030712]/20 group-hover:from-white/80 dark:group-hover:from-[#030712]/80 transition-colors"></div>
                       
                       <div className="relative z-10 p-6 flex flex-col items-center justify-center text-center gap-4 h-full">
                         <div className="w-12 h-12 bg-white/50 dark:bg-white/10 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 backdrop-blur-md shadow-sm border border-slate-200 dark:border-white/10">
                           <feature.i className="w-6 h-6" />
                         </div>
                         <span className="font-semibold text-slate-900 dark:text-white/90 text-sm leading-tight drop-shadow-sm">{feature.n}</span>
                       </div>
                     </div>
                   </Tilt>
                 ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Customer Success */}
        <Testimonials />

        {/* Founder Story */}
        <section id="about" className="py-32 relative border-t border-slate-200 dark:border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-blue-600/30 rounded-3xl blur-3xl"></div>
                <img src="/shopkeeper.jpg" alt="Shop owner using VAANI" className="rounded-3xl relative z-10 border border-slate-200 dark:border-white/10 opacity-80" />
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="text-sm font-bold text-blue-500 tracking-widest uppercase mb-3">Our Story</h2>
                <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-slate-900 dark:text-white">Built from a real, everyday struggle.</h3>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  &quot;I ran my father&apos;s shop from the beginning and personally faced the billing problem every single day. The long queues, typing errors, and the compliance headaches were a constant nightmare.&quot;
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                  Combining my CA/CS compliance expertise with a deep background in AI/ML, VAANI was born to finally give India&apos;s shopkeepers a tool that works exactly how they think—through voice.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-slate-800 border border-slate-200 dark:border-white/10 flex items-center justify-center font-bold text-xl text-blue-400">AG</div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-lg">Ayush Gupta</h4>
                    <p className="text-blue-500 text-sm">Founder & CEO, VAANI</p>
                  </div>
                </div>
                <p className="mt-6 text-sm italic text-slate-500 dark:text-slate-400">&quot;Built from Bihar — for India, for the world.&quot;</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-32 relative border-t border-slate-200 dark:border-white/5">
          <div className="absolute inset-0 bg-[url('/bg_images/bg_33.jpg')] bg-cover bg-center opacity-5 dark:opacity-10 pointer-events-none mix-blend-luminosity"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-24">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white">Transparent Pricing</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">No hidden fees. Scale as you grow.</p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
              <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2000} className="md:justify-self-end w-full max-w-sm h-full">
                <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="h-full p-8 rounded-3xl border border-slate-200 dark:border-white/10 hover:border-blue-500/50 transition-colors text-center flex flex-col shadow-2xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-100 mix-blend-luminosity" style={{ backgroundImage: "url('/bg_images/bg_15.jpg')" }}></div>
                  <div className="absolute inset-0 bg-white/80 dark:bg-[#050810]/80 group-hover:bg-white/60 dark:group-hover:bg-[#050810]/60 transition-colors"></div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <h3 className="text-xl font-bold text-slate-700 dark:text-slate-300 mb-2">Freemium</h3>
                    <div className="text-5xl font-black mb-8 text-slate-900 dark:text-white">FREE</div>
                    <ul className="text-slate-600 dark:text-slate-400 space-y-5 mb-10 text-left">
                      <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-blue-500"/> 50 voice bills / month</li>
                      <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-blue-500"/> Inventory tracking &amp; analytics</li>
                      <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-blue-500"/> WhatsApp sharing</li>
                      <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-blue-500"/> All other features included</li>
                    </ul>
                    <a href={SITE.apkUrl} target="_blank" rel="noopener noreferrer" className="mt-auto w-full py-4 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-900 dark:text-white font-bold transition-colors flex items-center justify-center">Start Free</a>
                  </div>
                </motion.div>
              </Tilt>

              <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.05} transitionSpeed={2000} glareEnable={true} glareMaxOpacity={0.15} glareColor="lightblue" className="w-full z-20 h-full">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="h-full p-10 rounded-3xl border-white dark:border-[#030712] border-blue-500 relative flex flex-col shadow-[0_0_50px_rgba(37,99,235,0.2)] overflow-hidden group">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-60" style={{ backgroundImage: "url('/bg_images/bg_3.jpg')" }}></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-black/80 group-hover:from-blue-900/60 group-hover:to-black/60 transition-colors"></div>

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.5)] whitespace-nowrap">MOST POPULAR</div>
                    <h3 className="text-xl font-bold text-blue-300 mb-2 text-center mt-2">Basic Plan</h3>
                    <div className="text-6xl font-black mb-2 text-center text-white">₹99<span className="text-2xl text-slate-400 font-medium">/mo</span></div>
                    <p className="text-sm text-slate-400 mb-8 text-center">Core revenue driver</p>
                    <ul className="text-slate-200 space-y-5 mb-10 text-left">
                      <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-blue-400"/> Unlimited bills</li>
                      <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-blue-400"/> GST invoices</li>
                      <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-blue-400"/> Inventory tracking</li>
                      <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-blue-400"/> Smart Analytics</li>
                    </ul>
                    <a href={`mailto:${SITE.email}?subject=Upgrade to Basic Plan - VAANI`} className="mt-auto w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-colors shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center justify-center">Upgrade to Basic</a>
                  </div>
                </motion.div>
              </Tilt>

              <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2000} className="md:justify-self-start w-full max-w-sm h-full">
                <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="h-full p-8 rounded-3xl border border-slate-200 dark:border-white/10 hover:border-blue-500/50 transition-colors text-center flex flex-col shadow-2xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-100 mix-blend-luminosity" style={{ backgroundImage: "url('/bg_images/bg_5.jpg')" }}></div>
                  <div className="absolute inset-0 bg-white/80 dark:bg-[#050810]/80 group-hover:bg-white/60 dark:group-hover:bg-[#050810]/60 transition-colors"></div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <h3 className="text-xl font-bold text-slate-700 dark:text-slate-300 mb-2">Pro Plan</h3>
                    <div className="text-5xl font-black mb-2 text-slate-900 dark:text-white">₹199<span className="text-2xl text-slate-600 dark:text-slate-400 font-medium">/mo</span></div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-8">For expanding businesses</p>
                    <ul className="text-slate-600 dark:text-slate-400 space-y-5 mb-10 text-left">
                      <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-blue-500"/> Everything in Basic</li>
                      <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-blue-500"/> Multi-store management</li>
                      <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-blue-500"/> Team access</li>
                      <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-blue-500"/> CA dashboard</li>
                    </ul>
                    <a href={`mailto:${SITE.email}?subject=Start Pro Plan - VAANI`} className="mt-auto w-full py-4 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-900 dark:text-white font-bold transition-colors flex items-center justify-center">Start Pro</a>
                  </div>
                </motion.div>
              </Tilt>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-32 relative border-t border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-black/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white">Frequently Asked Questions</h2>
            </motion.div>
            <div className="space-y-4">
              {[
                { q: "Do I need an internet connection?", a: "VAANI has a robust offline mode. You can generate bills without the internet, and everything syncs automatically once you are back online." },
                { q: "Which languages are supported?", a: "We support over 10 Indian regional languages including Hindi, English, Marathi, Gujarati, Tamil, Telugu, and more." },
                { q: "Does it work with my thermal printer?", a: "Yes! VAANI connects seamlessly with standard bluetooth or USB thermal printers for instant receipt generation." },
                { q: "Is my data secure?", a: "Absolutely. All your business data is encrypted and backed up securely in the cloud. Only you have access to your financials." }
              ].map((faq, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-2xl bg-white/[0.02] border border-slate-200 dark:border-white/5 hover:bg-white/[0.04] transition-colors overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full text-left p-6 flex justify-between items-center gap-4 cursor-pointer group"
                  >
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white">{faq.q}</h4>
                    <span className={`text-blue-500 transition-transform duration-300 shrink-0 ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
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
                        <p className="text-slate-600 dark:text-slate-400 text-sm px-6 pb-6">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Investor & Early Access CTA */}
        <section className="py-32 relative bg-gradient-to-b from-transparent to-blue-900/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] bg-gradient-to-tr from-blue-600/10 to-blue-600/10 border border-blue-500/20 shadow-[0_0_100px_rgba(37,99,235,0.15)] relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-6 text-slate-900 dark:text-white">Join the Retail Revolution.</h2>
                <p className="text-lg md:text-xl text-slate-700 dark:text-blue-200 mb-10 max-w-2xl mx-auto">We are rapidly scaling across India and currently opening our early access program and engaging with strategic investors.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a href={`mailto:${SITE.email}?subject=Investor Inquiry - VAANI`} className="px-8 py-4 rounded-full bg-white text-blue-900 font-bold hover:scale-105 transition-transform flex items-center justify-center gap-2 border border-slate-200 dark:border-transparent">
                    <Mail className="w-5 h-5" /> Investor Inquiry
                  </a>
                  <a href={buildWhatsAppUrl("Hi VAANI Team! I want early access to the app.")} target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold hover:scale-105 transition-transform flex items-center justify-center gap-2">
                    Request Early Access <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

    </main>
  );
}
