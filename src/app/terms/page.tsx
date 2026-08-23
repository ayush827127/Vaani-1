"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, FileText, CheckCircle } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="min-h-screen py-20 px-4 relative">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto relative z-10 pt-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-500 flex items-center justify-center mx-auto mb-6">
            <FileText className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 text-slate-900 dark:text-white">Terms & Conditions</h1>
          <p className="text-slate-600 dark:text-slate-400">Last updated: August 2026</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="rounded-[3rem] border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-[#050810]/50 backdrop-blur-xl p-8 md:p-16 shadow-2xl">
          <div className="prose prose-slate dark:prose-invert max-w-none prose-lg">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. Introduction</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">Welcome to VAANI. This document governs your use of our voice-first retail operating system. We are committed to protecting your data and ensuring complete transparency in how your business information is handled.</p>
            
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. Data Collection & Offline Sync</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">VAANI operates on an offline-first architecture using IndexedDB. Your inventory and ledger data is stored locally on your device. When connected to the internet, it securely syncs to our encrypted PostgreSQL cloud servers.</p>
            
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. Voice Data Processing</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">Your voice commands are processed via our proprietary NLP engine. We do not sell your voice data to third parties. It is strictly used to improve billing accuracy for your specific account.</p>
            
            <div className="bg-blue-500/10 border border-blue-500/20 p-6 rounded-2xl my-8 flex gap-4">
              <CheckCircle className="w-8 h-8 text-blue-500 flex-shrink-0" />
              <p className="m-0 text-slate-700 dark:text-slate-300 font-medium leading-relaxed"><strong>Your Data is Yours:</strong> You can export your entire ledger and inventory database at any time via the CA Portal or Settings menu in standard formats (CSV, XML).</p>
            </div>
            
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">4. Usage Restrictions</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">You agree not to reverse engineer the VAANI APK, bypass the Web Bluetooth thermal printer constraints, or use the platform for any illegal retail operations outside the scope of Indian law.</p>
            
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">5. Contact Us</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">For any legal inquiries regarding this terms & conditions, please contact our legal team at <strong>legal@vaani.ai</strong> or visit our headquarters in Patna, Bihar.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
