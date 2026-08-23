"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Kirana Store Owner, Patna",
    content: "VAANI completely changed how I run my shop. What used to take 3 minutes typing now takes 3 seconds of just talking. During peak hours, I serve double the customers without breaking a sweat.",
    img: "/bg_images/bg_37.jpg",
    bgImg: "/bg_images/bg_25.jpg",
    rating: 5
  },
  {
    name: "Priya Sharma",
    role: "Pharmacy Owner, Delhi",
    content: "Handling complex medicine names was a nightmare with traditional software. With VAANI, I just say 'Paracetamol 500mg' and it perfectly matches the inventory. No more typing errors!",
    img: "/bg_images/bg_38.jpg",
    bgImg: "/bg_images/bg_9.jpg",
    rating: 5
  },
  {
    name: "Amit Patel",
    role: "Hardware Shop, Ahmedabad",
    content: "I have over 5,000 obscure hardware items in my shop. VAANI's AI understands my heavy Gujarati accent flawlessly. My billing is 100% GST compliant now, and my CA is very happy.",
    img: "/bg_images/bg_39.jpg",
    bgImg: "/bg_images/bg_10.jpg",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden bg-white dark:bg-[#030712] border-t border-slate-200 dark:border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-sm font-bold text-blue-500 tracking-widest uppercase mb-3">Wall of Love</h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">Trusted by thousands of retailers.</h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <Tilt key={i} tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.02} transitionSpeed={2000} className="h-full">
              <motion.div 
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: i * 0.15 }}
                className="rounded-3xl border border-slate-200 dark:border-white/10 h-full flex flex-col shadow-lg transition-shadow relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-100" style={{ backgroundImage: 'url(' + item.bgImg + ')' }}></div>
                <div className="absolute inset-0 bg-white/80 dark:bg-[#050810]/80 group-hover:bg-white/70 dark:group-hover:bg-[#050810]/70 transition-colors"></div>

                <div className="relative z-10 p-8 flex flex-col h-full">
                  <div className="flex gap-1 mb-6">
                    {[...Array(item.rating)].map((_, j) => (
                      <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400 drop-shadow-sm" />
                    ))}
                  </div>
                  
                  <p className="text-slate-800 dark:text-slate-200 text-lg mb-8 flex-grow leading-relaxed italic drop-shadow-sm">
                    "{item.content}"
                  </p>
                  
                  <div className="flex items-center gap-4 mt-auto border-t border-slate-200 dark:border-white/10 pt-6">
                    <img src={item.img} alt={item.name} className="w-12 h-12 rounded-full object-cover shadow-md border-2 border-white dark:border-[#030712]" />
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-md drop-shadow-sm">{item.name}</h4>
                      <p className="text-blue-600 dark:text-blue-400 text-xs font-medium uppercase tracking-wide mt-1 drop-shadow-sm">{item.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}
