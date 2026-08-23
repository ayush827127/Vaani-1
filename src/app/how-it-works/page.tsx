"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen py-20 px-4 relative">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>
      
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-24 relative z-10 pt-16">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-5xl md:text-7xl font-black tracking-tighter mb-8">
          How it <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-600 dark:from-blue-400 dark:to-blue-500">Works.</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          From a natural spoken sentence to a fully compliant GST printout in under 3 seconds.
        </motion.p>
      </div>

      <div className="max-w-5xl mx-auto relative z-10 pb-32">
        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-12 md:before:mx-auto before:-translate-x-px md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:via-blue-500 before:to-transparent">
          
          {[
            { step: "01", title: "Speak Naturally", desc: "Tap the mic icon and say what you're selling. '2 kilo aashirvaad aata aur ek dettol sabun.' You don't need to speak robotic commands; our NLP engine understands natural Indian phrasing across 10+ regional languages. It perfectly handles mixed language queries and slang.", img: "/bg_images/bg_7.jpg" },
            { step: "02", title: "AI Processing", desc: "VAANI instantly maps your spoken words to your exact inventory database. It automatically fetches the correct price, applies the specific HSN code, calculates the exact CGST/SGST, and simultaneously deducts the items from your live stock count—all in under 500 milliseconds.", img: "/bg_images/bg_3.jpg" },
            { step: "03", title: "Review & Payment", desc: "The itemized bill is generated instantly on screen for verification. A Dynamic UPI QR code automatically appears on the customer-facing display for the exact total amount, making payment collection 100% error-free and immediately reconciled in your ledger.", img: "/bg_images/bg_15.jpg" },
            { step: "04", title: "Print & Share", desc: "Click print. Using native Web Bluetooth protocols, VAANI sends the exact ESC/POS raw commands directly to any standard 58mm or 80mm thermal receipt printer without installing any complicated drivers. Alternatively, blast a professional PDF invoice directly to the customer's WhatsApp in one click.", img: "/bg_images/bg_16.jpg" }
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5, delay: i * 0.1 }} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-24 h-24 rounded-full border-4 border-[#030712] bg-blue-600 font-bold text-2xl text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 flex-shrink-0 relative z-10">
                {item.step}
              </div>
              <div className="w-[calc(100%-7rem)] md:w-[calc(50%-4rem)] rounded-3xl border border-slate-200 dark:border-white/5 transition-all shadow-lg group-hover:shadow-blue-500/20 relative overflow-hidden group/card">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover/card:scale-110 opacity-100 mix-blend-luminosity" style={{ backgroundImage: 'url(' + item.img + ')' }}></div>
                <div className="absolute inset-0 bg-white/70 dark:bg-[#050810]/70 group-hover/card:bg-white/60 dark:group-hover/card:bg-[#050810]/60 transition-colors"></div>
                <div className="relative z-10 p-8">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 drop-shadow-sm">{item.title}</h3>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed drop-shadow-sm">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      
        
        {/* Seamless Integrations Section */}
        <div className="max-w-7xl mx-auto relative z-10 pt-8 pb-8 px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">Plugs into your ecosystem.</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">VAANI doesn't force you to change how you do business. It perfectly integrates with the tools you already use.</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-10 rounded-[3rem] border border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-transparent">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <span className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-black text-xl">W</span> WhatsApp Native
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Send professional PDF bills, digital ledger (bahikhata) reminders, and festive offers directly to your customers' WhatsApp. No need to download files and attach them manually—VAANI uses official WhatsApp API triggers to do it in one tap.
              </p>
              <ul className="space-y-2 font-medium text-blue-700 dark:text-blue-400">
                <li>✓ 1-Click PDF Invoices</li>
                <li>✓ Automated Payment Reminders</li>
                <li>✓ Digital Business Cards</li>
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-10 rounded-[3rem] border border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-transparent">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <span className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-black text-xl">CA</span> CA Portal Access
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Stop emailing Excel sheets at the end of every month. Invite your Chartered Accountant to your VAANI workspace with read-only access. They can directly export your GSTR-1, GSTR-2, and GSTR-3B ready files with zero back-and-forth.
              </p>
              <ul className="space-y-2 font-medium text-blue-700 dark:text-blue-400">
                <li>✓ Secure CA Login</li>
                <li>✓ Tally ERP XML Export</li>
                <li>✓ Auto-reconciled GST ledgers</li>
              </ul>
            </motion.div>
          </div>
        </div>

{/* Under the Hood Section */}
        <div className="max-w-7xl mx-auto relative z-10 pt-8 pb-16 px-4">
          <div className="border-t border-slate-200 dark:border-white/10 pt-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
              <h2 className="text-sm font-bold text-blue-500 tracking-widest uppercase mb-3">Architecture</h2>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">Under the Hood</h3>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "NLP Engine", tech: "Agentic AI", desc: "Our proprietary NLP model is trained on thousands of hours of Indian retail audio. It understands slang, regional accents, and mixed-language queries, mapping them directly to standardized SKUs using fuzzy logic matching." },
                { title: "Local Storage", tech: "IndexedDB", desc: "To guarantee 100% offline capability, all inventory data, customer ledgers, and generated bills are stored in the browser's IndexedDB. Background sync workers push data to our PostgreSQL servers when online." },
                { title: "Hardware Comms", tech: "Web Bluetooth API", desc: "We bypassed the need for native Android/iOS apps by utilizing the Web Bluetooth API. VAANI securely connects to POS printers and sends raw ESC/POS byte commands directly from the browser." }
              ].map((tech, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-10 rounded-[2.5rem] border border-slate-200 dark:border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors"></div>
                  <div className="text-sm font-bold text-blue-600 dark:text-blue-400 mb-2 uppercase tracking-wider">{tech.tech}</div>
                  <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{tech.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{tech.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
</div>
    </div>
  );
}
