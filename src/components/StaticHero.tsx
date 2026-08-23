"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Download, Mic, Store, BarChart, Settings, QrCode, CheckCircle } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import { SITE } from '@/lib/site';

export default function StaticHero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[90vh] flex items-center z-20">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full">
        
        {/* Left Column: Hero Content */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="flex flex-col items-start text-left z-30">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6C5CE7]/10 border border-[#6C5CE7]/30 text-[#6C5CE7] dark:text-[#8d7ff7] text-sm font-semibold mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(108,92,231,0.15)]">
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
            <a href={SITE.apkUrl} target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-xl bg-[#6C5CE7] hover:bg-[#5a4cdb] text-white font-bold text-lg transition-all shadow-[0_0_30px_rgba(108,92,231,0.4)] hover:shadow-[0_0_40px_rgba(108,92,231,0.6)] hover:-translate-y-1 w-full sm:w-auto flex items-center justify-center gap-2">
              <Download className="w-5 h-5" /> Download VAANI App
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
            Piloted with real shopkeepers across Bihar
          </div>
        </motion.div>
        
        {/* Right Column: 3D App Showcase */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }} className="relative w-full h-[600px] flex items-center justify-center z-20 perspective-[2000px]">
          
          {/* Subtle Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#6C5CE7]/30 rounded-full blur-[100px] pointer-events-none" />

          {/* Floating Elements (Parallax) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute top-10 -left-6 md:-left-12 bg-white/90 dark:bg-[#1a1f2e]/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-slate-200 dark:border-white/10 flex items-center gap-3 z-40 animate-float-slow"
          >
            <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400"><Sparkles className="w-4 h-4"/></div>
            <p className="font-bold text-slate-900 dark:text-white text-sm">✨ Voice Command:<br/><span className="text-xs text-slate-500 font-medium">&apos;2 pcs Pepsi&apos; added</span></p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.5, duration: 0.8 }}
            className="absolute bottom-20 -right-4 md:-right-12 bg-white/90 dark:bg-[#1a1f2e]/90 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-slate-200 dark:border-white/10 flex items-center gap-3 z-40 animate-float"
          >
            <div className="w-10 h-10 bg-white rounded-lg p-1 shadow-inner border border-slate-100 dark:border-slate-800">
               <div className="w-full h-full bg-[url('https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg')] bg-cover opacity-80 mix-blend-multiply"></div>
            </div>
            <div>
              <p className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-1"><CheckCircle className="w-3 h-3 text-blue-500"/> Invoice Generated</p>
              <p className="text-xs text-slate-500 font-medium">₹150.00 via UPI</p>
            </div>
          </motion.div>

          {/* 3D Phone Mockup */}
          <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05} transitionSpeed={2500} className="w-[300px] h-[600px] transform-gpu preserve-3d relative z-30">
            <div className="w-full h-full bg-[#0a0f1c] dark:bg-[#050505] rounded-[2.5rem] p-2.5 shadow-[0_20px_50px_rgba(108,92,231,0.3)] border-[4px] border-slate-200 dark:border-[#151b2b] ring-1 ring-white/20 relative">
              
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-slate-900 dark:bg-black rounded-b-2xl z-50 flex items-center justify-center">
                 <div className="w-2 h-2 rounded-full bg-[#111] border border-white/10 ml-4"></div>
              </div>

              <div className="w-full h-full bg-slate-50 dark:bg-[#0a0f1c] rounded-[2rem] overflow-hidden relative flex flex-col pt-10">
                {/* Top Bar */}
                <div className="px-5 pb-4 flex justify-between items-center bg-white dark:bg-[#0f1524] shadow-sm">
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Dashboard</p>
                    <h4 className="font-black text-slate-900 dark:text-white text-lg">Vaani Store</h4>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6C5CE7] to-blue-600 flex items-center justify-center text-white font-bold shadow-md">VS</div>
                </div>

                {/* Sales Card */}
                <div className="p-4">
                  <div className="w-full rounded-2xl bg-gradient-to-br from-[#6C5CE7] to-blue-600 p-5 shadow-lg shadow-[#6C5CE7]/30 mb-5 relative overflow-hidden">
                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                    <p className="text-blue-100 text-xs font-medium mb-1">Today&apos;s Sales</p>
                    <h2 className="text-white text-3xl font-black mb-3">₹150.00</h2>
                    <div className="flex gap-6 border-t border-white/20 pt-3">
                      <div><p className="text-blue-200 text-[10px] uppercase font-bold mb-0.5">Orders</p><p className="text-white font-bold text-sm">12</p></div>
                      <div><p className="text-blue-200 text-[10px] uppercase font-bold mb-0.5">UPI</p><p className="text-white font-bold text-sm">₹150</p></div>
                    </div>
                  </div>

                  <h3 className="font-bold text-sm text-slate-800 dark:text-white mb-3">Current Cart</h3>
                  
                  {/* Interactive Cart Section */}
                  <div className="space-y-3">
                    <div className="bg-white dark:bg-[#151b2b] p-3 rounded-2xl flex items-center gap-3 shadow-sm border border-slate-100 dark:border-white/5">
                      <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-lg">🥤</div>
                      <div className="flex-grow"><h4 className="text-slate-900 dark:text-white font-bold text-sm">Pepsi 500ml</h4><p className="text-slate-500 text-[10px] font-medium">₹40 / pc</p></div>
                      <div className="flex items-center gap-2 bg-slate-50 dark:bg-[#0a0f1c] rounded-lg p-1 border border-slate-100 dark:border-white/5">
                        <button className="w-5 h-5 flex items-center justify-center text-slate-400 hover:text-slate-900 dark:hover:text-white">-</button>
                        <span className="text-slate-900 dark:text-white font-bold text-xs w-3 text-center">2</span>
                        <button className="w-5 h-5 flex items-center justify-center text-slate-400 hover:text-slate-900 dark:hover:text-white">+</button>
                      </div>
                    </div>
                    
                    <div className="bg-white dark:bg-[#151b2b] p-3 rounded-2xl flex items-center gap-3 shadow-sm border border-slate-100 dark:border-white/5">
                      <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-lg">💧</div>
                      <div className="flex-grow"><h4 className="text-slate-900 dark:text-white font-bold text-sm">Water Bottle</h4><p className="text-slate-500 text-[10px] font-medium">₹20 / pc</p></div>
                      <div className="flex items-center gap-2 bg-slate-50 dark:bg-[#0a0f1c] rounded-lg p-1 border border-slate-100 dark:border-white/5">
                        <button className="w-5 h-5 flex items-center justify-center text-slate-400 hover:text-slate-900 dark:hover:text-white">-</button>
                        <span className="text-slate-900 dark:text-white font-bold text-xs w-3 text-center">3</span>
                        <button className="w-5 h-5 flex items-center justify-center text-slate-400 hover:text-slate-900 dark:hover:text-white">+</button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Bar */}
                <div className="absolute bottom-0 left-0 w-full bg-white dark:bg-[#151b2b] border-t border-slate-200 dark:border-white/5 px-6 py-4 flex justify-between items-center pb-6 z-40 shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
                  <Store className="w-5 h-5 text-[#6C5CE7]" />
                  <BarChart className="w-5 h-5 text-slate-300 dark:text-slate-600" />
                  
                  {/* Floating Glowing Mic Button */}
                  <div className="absolute left-1/2 -translate-x-1/2 -top-6 group cursor-pointer">
                    <div className="w-14 h-14 rounded-full bg-[#6C5CE7] flex items-center justify-center shadow-[0_10px_20px_rgba(108,92,231,0.5)] border-[4px] border-slate-50 dark:border-[#0a0f1c] relative z-20 group-hover:scale-105 transition-transform">
                       <Mic className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-[#6C5CE7] rounded-full animate-ping opacity-20 pointer-events-none"></div>
                  </div>

                  <QrCode className="w-5 h-5 text-slate-300 dark:text-slate-600" />
                  <Settings className="w-5 h-5 text-slate-300 dark:text-slate-600" />
                </div>
              </div>
            </div>
          </Tilt>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
