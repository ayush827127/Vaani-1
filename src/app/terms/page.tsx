"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, CheckCircle } from 'lucide-react';
import { SITE } from '@/lib/site';

export default function TermsPage() {
  return (
    <div className="min-h-screen py-20 px-4 relative">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10 pt-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-500 flex items-center justify-center mx-auto mb-6">
            <FileText className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 text-slate-900 dark:text-white">Terms &amp; Conditions</h1>
          <p className="text-slate-600 dark:text-slate-400">Last updated: August 2026</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="rounded-[3rem] border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-[#050810]/50 backdrop-blur-xl p-8 md:p-16 shadow-2xl">
          <div className="prose prose-slate dark:prose-invert max-w-none prose-lg">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. Acceptance of Terms</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">These Terms &amp; Conditions (&quot;Terms&quot;) govern your access to and use of VAANI, a voice-first billing and retail operating system for Indian retailers. By downloading, installing, or using VAANI, you agree to be bound by these Terms. If you do not agree, please do not use the service.</p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. Private Beta</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">VAANI is currently offered as a private beta. Features, pricing, and availability may change without notice, and the service is provided on an &quot;as is&quot; and &quot;as available&quot; basis during this period. We will make reasonable efforts to notify users of significant changes.</p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. Eligibility &amp; Accounts</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">VAANI is intended for use by retailers, shop owners, and businesses operating in India who are at least 18 years old. You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account.</p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">4. Subscription Plans &amp; Payment</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">VAANI offers a free Freemium tier and paid Basic and Pro plans as described on our Pricing page. By subscribing to a paid plan, you agree that:</p>
            <ul className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed list-disc pl-6 space-y-2">
              <li>Subscription fees are billed in advance on a recurring monthly basis until cancelled.</li>
              <li>Prices are listed in Indian Rupees (₹) and are subject to change with prior notice; continued use after a price change constitutes acceptance of the new price.</li>
              <li>You may cancel your subscription at any time; cancellation takes effect at the end of the current billing cycle, and fees already paid for the current cycle are non-refundable except where required by law.</li>
              <li>Free-tier limits (e.g. bills per month) may change as the product evolves.</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">5. Your Data</h2>
            <div className="bg-blue-500/10 border border-blue-500/20 p-6 rounded-2xl my-6 flex gap-4">
              <CheckCircle className="w-8 h-8 text-blue-500 flex-shrink-0" />
              <p className="m-0 text-slate-700 dark:text-slate-300 font-medium leading-relaxed"><strong>Your business data belongs to you.</strong> Inventory, ledgers, and bills you create remain yours. You can export your data at any time via the CA Portal or by contacting us. See our <a href="/privacy" className="text-blue-600 dark:text-blue-400">Privacy Policy</a> for details on how we collect, store, and protect your data.</p>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">6. Acceptable Use</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">You agree not to:</p>
            <ul className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed list-disc pl-6 space-y-2">
              <li>Reverse engineer, decompile, or attempt to extract the source code of the VAANI app.</li>
              <li>Circumvent or interfere with the Web Bluetooth printer integration or other technical safeguards.</li>
              <li>Use VAANI to bill for illegal goods or services, or to facilitate tax evasion or other unlawful retail activity under Indian law.</li>
              <li>Resell, sublicense, or provide access to VAANI to third parties without our written consent.</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">7. Intellectual Property</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">The VAANI app, website, branding, and underlying technology (including our voice-recognition and NLP models) are owned by us and protected by applicable intellectual property laws. These Terms do not grant you any ownership rights in VAANI, only a limited, non-exclusive, non-transferable license to use the app for your business.</p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">8. Third-Party Services</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">VAANI integrates with third-party services such as UPI payment rails, WhatsApp, and Bluetooth thermal printers. We are not responsible for the availability or performance of these third-party services, which are governed by their own terms.</p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">9. Disclaimers &amp; Limitation of Liability</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">VAANI is provided &quot;as is&quot; without warranties of any kind, express or implied. While we aim for high accuracy in voice recognition and GST/HSN calculations, you remain responsible for verifying bills and tax filings before relying on them. To the maximum extent permitted by law, we are not liable for indirect, incidental, or consequential damages arising from your use of VAANI.</p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">10. Termination</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">You may stop using VAANI and close your account at any time. We may suspend or terminate access if you violate these Terms, and will make reasonable efforts to allow you to export your data beforehand except in cases of serious or repeated violations.</p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">11. Governing Law &amp; Disputes</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">These Terms are governed by the laws of India. Any disputes arising from these Terms or your use of VAANI will be subject to the exclusive jurisdiction of the courts in Gaya, Bihar.</p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">12. Changes to These Terms</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">We may update these Terms as VAANI evolves out of private beta. We will update the &quot;Last updated&quot; date above, and will notify registered users of material changes.</p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">13. Contact Us</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-2 leading-relaxed">For any questions about these Terms, contact:</p>
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
