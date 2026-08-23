"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Mic, Cpu, QrCode, Printer, ArrowRight, Brain, Database, Bluetooth } from 'lucide-react';

const steps = [
  {
    step: "01", title: "Speak Naturally", icon: Mic, img: "/bg_images/bg_7.jpg",
    desc: "Tap the mic icon and say what you're selling. '2 kilo aashirvaad aata aur ek dettol sabun.' You don't need to speak robotic commands; our NLP engine understands natural Indian phrasing across 10+ regional languages. It perfectly handles mixed language queries and slang.",
    badge: "bg-blue-500/10 border-blue-500/20 text-blue-600 dark:text-blue-400",
    glow: "hover:shadow-blue-500/20 hover:border-blue-500/30",
    number: "text-blue-500/[0.08] dark:text-blue-400/10",
    dot: "bg-blue-500 text-blue-500"
  },
  {
    step: "02", title: "AI Processing", icon: Cpu, img: "/bg_images/bg_3.jpg",
    desc: "VAANI instantly maps your spoken words to your exact inventory database. It automatically fetches the correct price, applies the specific HSN code, calculates the exact CGST/SGST, and simultaneously deducts the items from your live stock count—all in under 500 milliseconds.",
    badge: "bg-violet-500/10 border-violet-500/20 text-violet-600 dark:text-violet-400",
    glow: "hover:shadow-violet-500/20 hover:border-violet-500/30",
    number: "text-violet-500/[0.08] dark:text-violet-400/10",
    dot: "bg-violet-500 text-violet-500"
  },
  {
    step: "03", title: "Review & Payment", icon: QrCode, img: "/bg_images/bg_15.jpg",
    desc: "The itemized bill is generated instantly on screen for verification. A Dynamic UPI QR code automatically appears on the customer-facing display for the exact total amount, making payment collection 100% error-free and immediately reconciled in your ledger.",
    badge: "bg-cyan-500/10 border-cyan-500/20 text-cyan-600 dark:text-cyan-400",
    glow: "hover:shadow-cyan-500/20 hover:border-cyan-500/30",
    number: "text-cyan-500/[0.08] dark:text-cyan-400/10",
    dot: "bg-cyan-500 text-cyan-500"
  },
  {
    step: "04", title: "Print & Share", icon: Printer, img: "/bg_images/bg_16.jpg",
    desc: "Click print. Using native Web Bluetooth protocols, VAANI sends the exact ESC/POS raw commands directly to any standard 58mm or 80mm thermal receipt printer without installing any complicated drivers. Alternatively, blast a professional PDF invoice directly to the customer's WhatsApp in one click.",
    badge: "bg-amber-500/10 border-amber-500/20 text-amber-600 dark:text-amber-400",
    glow: "hover:shadow-amber-500/20 hover:border-amber-500/30",
    number: "text-amber-500/[0.08] dark:text-amber-400/10",
    dot: "bg-amber-500 text-amber-500"
  }
];

const architecture = [
  {
    title: "NLP Engine", tech: "Agentic AI", icon: Brain, img: "/bg_images/bg_18.jpg",
    desc: "Our proprietary NLP model is trained on thousands of hours of Indian retail audio. It understands slang, regional accents, and mixed-language queries, mapping them directly to standardized SKUs using fuzzy logic matching.",
    badge: "bg-blue-500/10 border-blue-500/20 text-blue-600 dark:text-blue-400", glow: "bg-blue-500/10 group-hover:bg-blue-500/20"
  },
  {
    title: "Local Storage", tech: "IndexedDB", icon: Database, img: "/bg_images/bg_19.jpg",
    desc: "To guarantee 100% offline capability, all inventory data, customer ledgers, and generated bills are stored in the browser's IndexedDB. Background sync workers push data to our PostgreSQL servers when online.",
    badge: "bg-violet-500/10 border-violet-500/20 text-violet-600 dark:text-violet-400", glow: "bg-violet-500/10 group-hover:bg-violet-500/20"
  },
  {
    title: "Hardware Comms", tech: "Web Bluetooth API", icon: Bluetooth, img: "/bg_images/bg_20.jpg",
    desc: "We bypassed the need for native Android/iOS apps by utilizing the Web Bluetooth API. VAANI securely connects to POS printers and sends raw ESC/POS byte commands directly from the browser.",
    badge: "bg-cyan-500/10 border-cyan-500/20 text-cyan-600 dark:text-cyan-400", glow: "bg-cyan-500/10 group-hover:bg-cyan-500/20"
  }
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-20 relative z-10 pt-16">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative text-5xl md:text-7xl font-black tracking-tighter mb-8">
          How it <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-600 dark:from-blue-400 dark:to-blue-500">Works.</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="relative text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          From a natural spoken sentence to a fully compliant GST printout in under 3 seconds.
        </motion.p>
      </div>

      {/* Step Flow */}
      <div className="max-w-7xl mx-auto relative z-10 pb-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, i) => (
            <div key={i} className="relative">
              <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} scale={1.03} transitionSpeed={1500} className="h-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`relative rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/40 shadow-lg hover:shadow-xl ${item.glow} transition-all p-8 flex flex-col h-full overflow-hidden group`}
                >
                  <span className={`absolute -bottom-6 -right-2 text-8xl font-black select-none pointer-events-none ${item.number}`}>{item.step}</span>

                  <div className="relative z-10 flex items-start justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform ${item.badge}`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div className="w-14 h-14 rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-sm shrink-0">
                      <div className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500" style={{ backgroundImage: `url(${item.img})` }}></div>
                    </div>
                  </div>
                  <h3 className="relative z-10 text-lg font-bold text-slate-900 dark:text-white mb-3">{item.title}</h3>
                  <p className="relative z-10 text-slate-600 dark:text-slate-300 leading-relaxed text-sm">{item.desc}</p>
                </motion.div>
              </Tilt>

              {i < steps.length - 1 && (
                <motion.div
                  animate={{ opacity: [0.35, 1, 0.35] }}
                  transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.3 }}
                  className={`hidden lg:flex absolute top-1/2 -right-[1.9rem] -translate-y-1/2 z-20 w-8 h-8 items-center justify-center rounded-full bg-slate-50 dark:bg-[#030712] ${item.dot.split(' ')[1]}`}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Seamless Integrations Section */}
        <div className="pb-8 px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">Plugs into your ecosystem.</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">VAANI doesn&apos;t force you to change how you do business. It perfectly integrates with the tools you already use.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2000} className="h-full">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-[2px] rounded-[3rem] bg-gradient-to-br from-blue-500 to-blue-600 shadow-xl h-full group">
                <div className="rounded-[calc(3rem-2px)] bg-white dark:bg-slate-900 p-10 h-full relative overflow-hidden">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="relative z-10 text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                      <span className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-black text-xl">W</span> WhatsApp Native
                    </h3>
                    <div className="w-16 h-16 rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-sm shrink-0 group-hover:scale-105 transition-transform duration-500">
                      <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/bg_images/bg_28.jpg')" }}></div>
                    </div>
                  </div>
                  <p className="relative z-10 text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    Send professional PDF bills, digital ledger (bahikhata) reminders, and festive offers directly to your customers&apos; WhatsApp. No need to download files and attach them manually—VAANI uses official WhatsApp API triggers to do it in one tap.
                  </p>
                  <ul className="relative z-10 space-y-2 font-medium text-blue-700 dark:text-blue-400">
                    <li>✓ 1-Click PDF Invoices</li>
                    <li>✓ Automated Payment Reminders</li>
                    <li>✓ Digital Business Cards</li>
                  </ul>
                </div>
              </motion.div>
            </Tilt>

            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2000} className="h-full">
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-[2px] rounded-[3rem] bg-gradient-to-br from-blue-500 to-blue-600 shadow-xl h-full group">
                <div className="rounded-[calc(3rem-2px)] bg-white dark:bg-slate-900 p-10 h-full relative overflow-hidden">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="relative z-10 text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                      <span className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-black text-xl">CA</span> CA Portal Access
                    </h3>
                    <div className="w-16 h-16 rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-sm shrink-0 group-hover:scale-105 transition-transform duration-500">
                      <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/bg_images/bg_29.jpg')" }}></div>
                    </div>
                  </div>
                  <p className="relative z-10 text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    Stop emailing Excel sheets at the end of every month. Invite your Chartered Accountant to your VAANI workspace with read-only access. They can directly export your GSTR-1, GSTR-2, and GSTR-3B ready files with zero back-and-forth.
                  </p>
                  <ul className="relative z-10 space-y-2 font-medium text-blue-700 dark:text-blue-400">
                    <li>✓ Secure CA Login</li>
                    <li>✓ Tally ERP XML Export</li>
                    <li>✓ Auto-reconciled GST ledgers</li>
                  </ul>
                </div>
              </motion.div>
            </Tilt>
          </div>
        </div>

        {/* Under the Hood Section */}
        <div className="pt-24 pb-16 px-4">
          <div className="border-t border-slate-200 dark:border-white/10 pt-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
              <h2 className="text-sm font-bold text-blue-500 tracking-widest uppercase mb-3">Architecture</h2>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">Under the Hood</h3>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {architecture.map((tech, i) => (
                <Tilt key={i} tiltMaxAngleX={6} tiltMaxAngleY={6} scale={1.02} transitionSpeed={2000} className="h-full">
                  <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-10 rounded-[2.5rem] border border-slate-200 dark:border-white/5 bg-white dark:bg-white/[0.02] shadow-lg hover:shadow-xl hover:border-blue-500/30 dark:hover:bg-white/[0.04] transition-all relative overflow-hidden group h-full">
                    <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl transition-colors ${tech.glow}`}></div>
                    <div className="relative z-10 flex items-start justify-between mb-6">
                      <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform ${tech.badge}`}>
                        <tech.icon className="w-7 h-7" />
                      </div>
                      <div className="w-14 h-14 rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-sm shrink-0 group-hover:scale-105 transition-transform duration-500">
                        <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${tech.img})` }}></div>
                      </div>
                    </div>
                    <div className="relative z-10 text-sm font-bold text-blue-600 dark:text-blue-400 mb-2 uppercase tracking-wider">{tech.tech}</div>
                    <h4 className="relative z-10 text-2xl font-bold text-slate-900 dark:text-white mb-4">{tech.title}</h4>
                    <p className="relative z-10 text-slate-600 dark:text-slate-400 leading-relaxed">{tech.desc}</p>
                  </motion.div>
                </Tilt>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
