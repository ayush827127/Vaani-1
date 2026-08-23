"use client";
import React from 'react';
import Testimonials from '@/components/Testimonials';
import { motion } from 'framer-motion';
import { Target, Users, Lightbulb, TrendingUp, Zap } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20 px-4 relative">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>
      
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto text-center mb-32 relative z-10 pt-16">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-5xl md:text-7xl font-black tracking-tighter mb-8">
          Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-600 dark:from-blue-400 dark:to-blue-500">Bharat.</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed">
          VAANI was born from a real, everyday struggle. Our founder, Ayush Gupta, ran his father&apos;s shop and personally faced the billing problem every single day. The long queues, typing errors, and compliance headaches were a constant nightmare.
        </motion.p>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mt-10 text-2xl md:text-3xl font-bold italic text-blue-600 dark:text-blue-400">
          &quot;Built from Bihar, for India.&quot;
        </motion.p>
      </div>

      {/* Founder Story Block with Image */}
      <div className="max-w-7xl mx-auto relative z-10 pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="relative rounded-[3rem] overflow-hidden border-[4px] border-slate-200 dark:border-white/10 shadow-2xl aspect-square lg:aspect-auto lg:h-[500px] group">
             <img src="/shopkeeper.jpg" alt="Shopkeeper using tech" className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex flex-col">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">Born in a real Kirana store.</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              Our founder, Ayush Gupta, grew up managing his father&apos;s local retail shop. He saw firsthand the daily chaos of unorganized inventory, handwritten ledgers, and the immense pressure of long checkout queues during peak hours.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              Traditional ERP systems were too complex. Touchscreen billing apps were too slow. The only thing that worked was simply speaking to the customer. That&apos;s when the idea for VAANI was born: What if the software could listen and do the work automatically?
            </p>
          </motion.div>
        </div>
      </div>
  
      {/* Mission & Vision Grid */}
      <div className="max-w-7xl mx-auto relative z-10 pb-32">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="rounded-[2.5rem] border border-blue-500/20 relative overflow-hidden group shadow-2xl">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-100 mix-blend-luminosity" style={{ backgroundImage: "url('/bg_images/bg_1.jpg')" }}></div>
            <div className="absolute inset-0 bg-white/80 dark:bg-[#050810]/80"></div>
            <div className="relative z-10 p-10 h-full flex flex-col">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-8 backdrop-blur-md shadow-sm border border-blue-500/30">
                <Target className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Our Mission</h2>
              <p className="text-lg text-slate-700 dark:text-blue-100/80 leading-relaxed drop-shadow-sm">
                To empower India&apos;s 6+ Crore unorganized retail MSMEs with cutting-edge Agentic AI, making digital billing, inventory management, and financial compliance as easy as speaking. We believe that world-class enterprise software shouldn&apos;t be restricted to massive supermarket chains with giant IT budgets. We are democratizing AI so the local shopkeeper can run their business just as efficiently as a global conglomerate, using only their voice.
              </p>
            </div>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="rounded-[2.5rem] border border-blue-500/20 relative overflow-hidden group shadow-2xl">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-100 mix-blend-luminosity" style={{ backgroundImage: "url('/bg_images/bg_2.jpg')" }}></div>
            <div className="absolute inset-0 bg-white/80 dark:bg-[#050810]/80"></div>
            <div className="relative z-10 p-10 h-full flex flex-col">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-8 backdrop-blur-md shadow-sm border border-blue-500/30">
                <Lightbulb className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Our Vision</h2>
              <p className="text-lg text-slate-700 dark:text-blue-100/80 leading-relaxed drop-shadow-sm">
                To become the autonomous operating system for every local kirana, medical store, and hardware shop in India, bridging the digital divide with voice-first technology. Within the next decade, we envision a retail landscape where no shopkeeper ever has to manually type an item, write a physical ledger entry, or guess their stock levels ever again. VAANI will be the invisible, intelligent partner powering local commerce across Bharat.
              </p>
            </div>
          </motion.div>

        </div>
  
        {/* Core Values */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">What Drives Us</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Zero Friction", desc: "Technology should adapt to the user, not the other way around. Voice is the ultimate zero-friction UI. We refuse to build complex menus or dashboards that require hours of training. If you can speak, you can use VAANI.", icon: Zap, img: "/bg_images/bg_3.jpg" },
            { title: "Local First", desc: "India is extremely diverse. We build for local regional languages, spotty offline network environments, and native hardware like budget Android phones and cheap thermal printers. We don't assume you have a Macbook and 5G.", icon: Users, img: "/bg_images/bg_4.jpg" },
            { title: "Empowerment", desc: "We don't just sell software; we actively upgrade the local shopkeeper's capability to compete with massive modern supermarkets and rapid-delivery apps. We give them the data and tools to win.", icon: TrendingUp, img: "/bg_images/bg_5.jpg" }
          ].map((val, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 + (i * 0.1) }} className="rounded-3xl border border-slate-200 dark:border-white/5 text-center relative overflow-hidden group shadow-lg">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-100 mix-blend-luminosity" style={{ backgroundImage: 'url(' + val.img + ')' }}></div>
              <div className="absolute inset-0 bg-white/80 dark:bg-[#050810]/80 group-hover:bg-white/70 dark:group-hover:bg-[#050810]/70 transition-colors"></div>
              
              <div className="relative z-10 p-8 h-full flex flex-col items-center">
                <div className="w-14 h-14 mx-auto rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 backdrop-blur-md shadow-sm border border-slate-200 dark:border-white/10">
                  <val.icon className="w-6 h-6 drop-shadow-sm" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 drop-shadow-sm">{val.title}</h3>
                <p className="text-slate-700 dark:text-slate-300 drop-shadow-sm">{val.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Testimonials />
    </div>
  );
}
