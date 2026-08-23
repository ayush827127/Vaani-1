"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      // Reset after 3 seconds
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start px-4 relative py-20 pb-32">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>
      
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl z-10 w-full text-center mb-16 pt-16">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 text-slate-900 dark:text-white">Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-600 dark:from-blue-400 dark:to-blue-500">Touch.</span></h1>
        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
          Have questions about VAANI? We're here to help you revolutionize your retail business.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl w-full z-10 mb-20">
        
        {/* Email Card */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="rounded-[2.5rem] border border-slate-200 dark:border-white/5 flex flex-col items-center text-center relative overflow-hidden group shadow-lg h-full">
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-100 mix-blend-luminosity" style={{ backgroundImage: "url('/bg_images/bg_6.jpg')" }}></div>
          <div className="absolute inset-0 bg-white/70 dark:bg-[#050810]/70 group-hover:bg-white/60 dark:group-hover:bg-[#050810]/60 transition-colors"></div>
          
          <div className="relative z-10 p-10 flex flex-col items-center h-full w-full">
            <div className="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700/50 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 backdrop-blur-md shadow-sm group-hover:scale-110 transition-transform">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 drop-shadow-sm">Email Us</h3>
            <a href="mailto:ayush385361@gmail.com" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors drop-shadow-sm text-lg">ayush385361@gmail.com</a>
          </div>
        </motion.div>
        
        {/* Phone Card */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="rounded-[2.5rem] border border-slate-200 dark:border-white/5 flex flex-col items-center text-center relative overflow-hidden group shadow-lg h-full">
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-100 mix-blend-luminosity" style={{ backgroundImage: "url('/bg_images/bg_7.jpg')" }}></div>
          <div className="absolute inset-0 bg-white/70 dark:bg-[#050810]/70 group-hover:bg-white/60 dark:group-hover:bg-[#050810]/60 transition-colors"></div>
          
          <div className="relative z-10 p-10 flex flex-col items-center h-full w-full">
            <div className="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700/50 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 backdrop-blur-md shadow-sm group-hover:scale-110 transition-transform">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 drop-shadow-sm">Call Us</h3>
            <p className="text-slate-700 dark:text-slate-300 drop-shadow-sm text-lg leading-relaxed">Available Mon-Sat<br/><span className="font-medium text-blue-600 dark:text-blue-400">10:00 AM - 7:00 PM (IST)</span></p>
          </div>
        </motion.div>
        
        {/* Location Card */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="rounded-[2.5rem] border border-slate-200 dark:border-white/5 flex flex-col items-center text-center relative overflow-hidden group shadow-lg h-full">
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-100 mix-blend-luminosity" style={{ backgroundImage: "url('/bg_images/bg_8.jpg')" }}></div>
          <div className="absolute inset-0 bg-white/70 dark:bg-[#050810]/70 group-hover:bg-white/60 dark:group-hover:bg-[#050810]/60 transition-colors"></div>
          
          <div className="relative z-10 p-10 flex flex-col items-center h-full w-full">
            <div className="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700/50 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 backdrop-blur-md shadow-sm group-hover:scale-110 transition-transform">
              <MapPin className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 drop-shadow-sm">Headquarters</h3>
            <p className="text-slate-700 dark:text-slate-300 drop-shadow-sm text-lg leading-relaxed"><span className="font-bold text-blue-600 dark:text-blue-400">Patna, Bihar</span><br/>Built for Bharat.</p>
          </div>
        </motion.div>
      </div>

      {/* Contact Form Section */}
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="max-w-4xl w-full z-10">
        <div className="rounded-[3rem] border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-[#050810]/50 backdrop-blur-xl p-10 md:p-16 shadow-2xl relative overflow-hidden">
          {/* Decorative blur */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="text-center mb-12 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Send us a Message</h2>
            <p className="text-slate-600 dark:text-slate-400">Fill out the form below and our team will get back to you within 24 hours.</p>
          </div>

          <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Full Name</label>
                <input required type="text" placeholder="Rajesh Kumar" className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-[#0a0f1c] border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-slate-900 dark:text-white transition-all shadow-sm" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Phone Number</label>
                <input required type="tel" placeholder="+91 98765 43210" className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-[#0a0f1c] border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-slate-900 dark:text-white transition-all shadow-sm" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Store Name</label>
              <input required type="text" placeholder="Kumar Provision Store" className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-[#0a0f1c] border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-slate-900 dark:text-white transition-all shadow-sm" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">How can we help?</label>
              <textarea required rows={4} placeholder="Tell us about your billing requirements..." className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-[#0a0f1c] border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-slate-900 dark:text-white transition-all shadow-sm resize-none"></textarea>
            </div>

            <button 
              type="submit" 
              disabled={formStatus !== 'idle'}
              className="w-full py-5 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-500 hover:to-blue-500 text-white font-bold text-lg shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:shadow-[0_0_40px_rgba(37,99,235,0.5)] transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {formStatus === 'idle' && (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
              {formStatus === 'submitting' && (
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Sending...
                </div>
              )}
              {formStatus === 'success' && (
                <>
                  <CheckCircle2 className="w-5 h-5 text-blue-300" />
                  Message Sent Successfully!
                </>
              )}
            </button>
          </form>
        </div>
      </motion.div>

    </div>
  );
}
