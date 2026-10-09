"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle } from 'lucide-react';
import { SITE } from '@/lib/site';

const H = "text-2xl font-bold text-slate-900 dark:text-white mb-4";
const P = "text-slate-600 dark:text-slate-400 mb-8 leading-relaxed";
const UL = "text-slate-600 dark:text-slate-400 mb-8 leading-relaxed list-disc pl-6 space-y-2";

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
          <p className="text-slate-600 dark:text-slate-400">Last updated: October 2026</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="rounded-[3rem] border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-[#050810]/50 backdrop-blur-xl p-8 md:p-16 shadow-2xl">
          <div className="prose prose-slate dark:prose-invert max-w-none prose-lg">
            <h2 className={H}>1. Introduction</h2>
            <p className={P}>VAANI (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is an Android billing app for Indian shopkeepers, available on Google Play, together with this website. This Privacy Policy explains what information the app and website process, why, who receives it, and the choices you have.</p>

            <h2 className={H}>2. Information We Collect</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">Depending on the features you use, the app processes:</p>
            <ul className={UL}>
              <li><strong>Account details:</strong> your mobile number and owner name, used to sign in with an SMS one-time password (OTP).</li>
              <li><strong>Shop details:</strong> shop name, address, GSTIN, UPI ID, logo and tax settings.</li>
              <li><strong>Customer details you enter:</strong> names, phone numbers, email, addresses, balances and photos. If you use &quot;Pick from Contacts&quot;, the contact you select is copied into your customer list.</li>
              <li><strong>Business records:</strong> products, prices, stock, bills, payments and ledger (udhaar) entries.</li>
              <li><strong>Photos:</strong> images you add to products, customers or your shop logo.</li>
              <li><strong>Voice input:</strong> see section 4.</li>
              <li><strong>Subscription details:</strong> the plan you choose and the payment reference you submit. Payments are made through your own UPI app; we never receive your UPI PIN or bank credentials.</li>
              <li><strong>Technical logs:</strong> if our server hits an error, it may log the request details (including part of the data sent) so we can fix the problem.</li>
            </ul>
            <p className={P}>VAANI does not use advertising or third-party analytics SDKs, and does not collect your location.</p>

            <h2 className={H}>3. Local Storage &amp; Cloud Sync</h2>
            <p className={P}>Your data is stored on your phone in a local database so you can keep billing without internet. After you sign in, the app automatically copies your shop, customer, product, bill and payment data to our servers about once an hour and whenever you open the app, over an HTTPS connection. Images are uploaded to Cloudinary. Staff you invite to your shop can see the data their role allows.</p>

            <h2 className={H}>4. Microphone &amp; Voice Billing</h2>
            <p className={P}>When you use voice billing, the app asks for microphone permission and uses your phone&apos;s built-in speech recognition service to turn speech into text; that service may process audio on servers run by Google or your device maker under their own terms. VAANI does not save your audio. The recognised text, together with your product list and customer names and phone numbers, is sent to our server and then to an AI provider (Groq) to work out which items to add to the bill. You can create bills manually without using voice.</p>

            <h2 className={H}>5. Who Receives Your Information</h2>
            <p className={P}>We do not sell your personal or business data. We use these service providers to run VAANI, and they process data on our behalf: cloud hosting and database providers (our server and database), Cloudinary (image hosting), Groq (AI processing of voice text) and an SMS gateway (sending OTP messages to your mobile number). We may disclose information where required by Indian law.</p>

            <div className="bg-blue-500/10 border border-blue-500/20 p-6 rounded-2xl my-8 flex gap-4">
              <CheckCircle className="w-8 h-8 text-blue-500 flex-shrink-0" />
              <p className="m-0 text-slate-700 dark:text-slate-300 font-medium leading-relaxed"><strong>Your Data is Yours:</strong> You can ask us to access, correct, export or delete your account and associated data at any time by emailing {SITE.email}. Please include the mobile number registered with VAANI.</p>
            </div>

            <h2 className={H}>6. Data Security</h2>
            <p className={P}>Data sent between the app and our servers uses HTTPS, sign-in uses OTP verification and access tokens, and our servers apply access controls and rate limiting. No system is completely secure, so please keep your phone and sign-in details safe.</p>

            <h2 className={H}>7. Data Retention &amp; Deletion</h2>
            <p className={P}>We keep your business data while your account is active, or as needed to provide the service and meet legal obligations. To delete your account and data, email {SITE.email} from your registered contact details and we will process the request and confirm with you. Data stored only on your phone is removed when you uninstall the app or clear its storage.</p>

            <h2 className={H}>8. App Permissions</h2>
            <p className={P}>The app may ask for: microphone (voice billing), camera (barcode scanning and photos), contacts (only when you tap &quot;Pick from Contacts&quot;), Bluetooth / nearby devices (thermal printers), notifications, and internet access. You can change these in Android settings; some features will not work without them.</p>

            <h2 className={H}>9. Children&apos;s Privacy</h2>
            <p className={P}>VAANI is a business tool intended for retailers and is not directed at children. We do not knowingly collect personal information from individuals under 18.</p>

            <h2 className={H}>10. Changes to This Policy</h2>
            <p className={P}>We may update this policy from time to time. We will change the &quot;Last updated&quot; date above and, for material changes, tell you in the app or by SMS.</p>

            <h2 className={H}>11. Contact Us</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-2 leading-relaxed">For any questions about this Privacy Policy or your data, contact:</p>
            <p className={P}>
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
