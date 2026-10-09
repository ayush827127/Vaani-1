"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/site';

const DEMO_MESSAGE = "Hi VAANI Team! I want a demo of the app.";

export default function WhatsAppDemoModal() {
  return (
    <motion.a
      href={buildWhatsAppUrl(DEMO_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 font-bold text-lg transition-transform hover:scale-105 group"
    >
      <MessageCircle className="w-6 h-6 animate-pulse" />
      <span className="hidden sm:inline">Book Demo</span>
    </motion.a>
  );
}
