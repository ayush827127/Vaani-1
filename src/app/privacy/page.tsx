"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle } from 'lucide-react';
import { SITE } from '@/lib/site';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-20 px-4 relative">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10 pt-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-500 flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 text-slate-900 dark:text-white">Privacy Policy</h1>
          <p className="text-slate-600 dark:text-slate-400">Last updated: August 2026</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="rounded-[3rem] border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-[#050810]/50 backdrop-blur-xl p-8 md:p-16 shadow-2xl">
          <div className="prose prose-slate dark:prose-invert max-w-none prose-lg">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. Introduction</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">VAANI (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is a voice-first billing and retail operating system built for Indian shopkeepers, currently offered in private beta. This Privacy Policy explains what information we collect through our app and website, why we collect it, and the choices you have. By using VAANI, you agree to the practices described here.</p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. Information We Collect</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">We collect the following categories of information:</p>
            <ul className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed list-disc pl-6 space-y-2">
              <li><strong>Account &amp; business details:</strong> your name, store name, phone number, email, and address, provided when you sign up, request a demo, or contact us.</li>
              <li><strong>Voice input:</strong> the spoken billing commands you give the app (e.g. item names and quantities), processed to generate bills.</li>
              <li><strong>Business data:</strong> inventory, pricing, GST/HSN details, ledgers (bahikhata), and bills you create in the app.</li>
              <li><strong>Device &amp; usage data:</strong> basic technical information (device type, app version, crash logs) used to keep the app reliable.</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. Offline-First Storage &amp; Sync</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">VAANI is built offline-first: your inventory and ledger data is stored locally on your device using IndexedDB so that you can keep billing without an internet connection. When your device reconnects, this data syncs to our encrypted cloud servers so it is backed up and available across sessions.</p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">4. How We Use Voice Data</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">Voice commands are processed to convert speech into billing actions (matching items, quantities, and prices in your inventory). We do not sell your voice recordings or transcripts to third parties. Voice data may be used in de-identified, aggregate form to improve recognition accuracy for Indian languages and dialects.</p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">5. How We Share Information</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">We do not sell your personal or business data. We may share limited information with: (a) service providers who help us operate VAANI (cloud hosting, SMS/WhatsApp messaging for receipts and reminders), bound by confidentiality obligations; (b) a Chartered Accountant you explicitly invite to your workspace via the CA Portal; and (c) authorities, only where required by Indian law.</p>

            <div className="bg-blue-500/10 border border-blue-500/20 p-6 rounded-2xl my-8 flex gap-4">
              <CheckCircle className="w-8 h-8 text-blue-500 flex-shrink-0" />
              <p className="m-0 text-slate-700 dark:text-slate-300 font-medium leading-relaxed"><strong>Your Data is Yours:</strong> You can request an export of your ledger and inventory data, or request deletion of your account and associated data, at any time by contacting us at {SITE.email}.</p>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">6. Data Security</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">We use industry-standard encryption in transit and at rest for cloud-synced data, and take reasonable technical and organizational measures to protect your information. No system is 100% secure, and we encourage you to keep your device and account credentials secure.</p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">7. Data Retention</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">We retain your business data for as long as your account is active, or as needed to provide the service and comply with Indian tax and record-keeping laws. If you delete your account, we will delete or anonymize your personal data within a reasonable period, except where retention is required by law.</p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">8. Children&apos;s Privacy</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">VAANI is a business tool intended for retailers and is not directed at children. We do not knowingly collect personal information from individuals under 18.</p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">9. Changes to This Policy</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">As VAANI is in active development during our private beta, this policy may be updated from time to time. We will update the &quot;Last updated&quot; date above whenever we make changes, and material changes will be communicated to registered users.</p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">10. Contact Us</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-2 leading-relaxed">For any questions about this Privacy Policy or your data, contact:</p>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              <strong>{SITE.founderName}</strong>, Founder, VAANI<br />
              Email: <a href={`mailto:${SITE.email}`} className="text-blue-600 dark:text-blue-400">{SITE.email}</a><br />
              Phone: <a href={SITE.phoneHref} className="text-blue-600 dark:text-blue-400">{SITE.phoneDisplay}</a><br />
              Address: {SITE.address}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
