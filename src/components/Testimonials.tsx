"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

function initialsOf(name: string) {
  return name.split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase();
}

const testimonials = [
  {
    name: "Manoj Kumar",
    role: "Toy Shop Owner",
    content: "We've been trying out the early version of VAANI in our shop and billing has genuinely never been this fast. It's not even fully launched yet and it's already useful — I want it in production as soon as possible, and I'm ready to pay for it the day it's available.",
    bgImg: "/bg_images/bg_25.jpg",
    rating: 5
  },
  {
    name: "Sambhu Kumar",
    role: "Kirana Store Owner",
    content: "I was one of the first to test VAANI, and it already understands my voice better than I expected for something still in testing. It's helping me during rush hours right now. Please launch it soon — I don't want to go back to typing every bill.",
    bgImg: "/bg_images/bg_9.jpg",
    rating: 5
  },
  {
    name: "Zafar Alam",
    role: "Gift Shop Owner",
    content: "Honestly, I was skeptical about a voice billing app. But after using the early version in my shop for a few weeks, I don't want to stop. It's still early days, but it already saves me real time every day — happy to pay once it's fully live.",
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
          <h2 className="text-sm font-bold text-blue-500 tracking-widest uppercase mb-3">Early Access Feedback</h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">What our first pilot users are saying.</h3>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">VAANI is still in private beta and not yet on the Play Store. A handful of real shopkeepers have been trialling it in their stores — here&apos;s what they told us.</p>
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
                    &quot;{item.content}&quot;
                  </p>

                  <div className="flex items-center gap-4 mt-auto border-t border-slate-200 dark:border-white/10 pt-6">
                    <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shadow-md border-2 border-white dark:border-[#030712]">
                      {initialsOf(item.name)}
                    </div>
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
