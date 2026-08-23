"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, Smartphone, Zap } from 'lucide-react';

export default function VoiceSimulator() {
  const [isListening, setIsListening] = useState(false);
  const [activePrompt, setActivePrompt] = useState<number | null>(null);
  const [transcriptText, setTranscriptText] = useState("");
  const [cart, setCart] = useState<{name: string, qty: number, price: number}[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showProcessedBadge, setShowProcessedBadge] = useState(false);

  const prompts = [
    { 
      id: 1, 
      text: "2 pcs Pepsi & 1 Clear Water", 
      result: [
        { name: "Pepsi 500ml", qty: 2, price: 40 },
        { name: "Clear Water 1L", qty: 1, price: 20 }
      ]
    },
    { 
      id: 2, 
      text: "दो पैकेट बिस्किट और 3 पानी", 
      result: [
        { name: "Parle-G Biscuit", qty: 2, price: 10 },
        { name: "Clear Water 1L", qty: 3, price: 20 }
      ]
    },
    { 
      id: 3, 
      text: "Clear Cart", 
      result: [] 
    }
  ];

  const handlePromptClick = (promptId: number) => {
    const prompt = prompts.find(p => p.id === promptId);
    if (!prompt) return;

    setActivePrompt(promptId);
    setIsListening(true);
    setTranscriptText("");
    setCart([]);
    setShowProcessedBadge(false);

    // Typewriter effect
    let i = 0;
    const interval = setInterval(() => {
      setTranscriptText(prompt.text.slice(0, i));
      i++;
      if (i > prompt.text.length) {
        clearInterval(interval);
        setIsListening(false);
        setIsProcessing(true);
        
        setTimeout(() => {
          setIsProcessing(false);
          setCart(prompt.result);
          if (prompt.result.length > 0) {
            setShowProcessedBadge(true);
          }
        }, 400);
      }
    }, 50);
  };

  const total = cart.reduce((acc, item) => acc + (item.qty * item.price), 0);

  return (
    <section className="py-32 relative bg-slate-900 dark:bg-[#030712] border-t border-slate-800 dark:border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-blue-900/10 mix-blend-screen pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-sm font-bold mb-6 tracking-widest uppercase">
            Live AI Playground
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6">
            Try the Voice Engine Now.
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Click a prompt below to see how VAANI's Agentic AI instantly parses natural language into a structured cart.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
          
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            <h3 className="text-white font-semibold mb-2">Test Prompts:</h3>
            {prompts.map((p) => (
              <button 
                key={p.id}
                onClick={() => handlePromptClick(p.id)}
                className={`text-left p-4 rounded-xl border transition-all ${activePrompt === p.id ? 'bg-blue-600/20 border-blue-500 text-white' : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700 hover:border-slate-500'}`}
              >
                "{p.text}"
              </button>
            ))}
            
            <button className="mt-4 flex items-center justify-center gap-2 p-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all shadow-lg hover:shadow-blue-500/50">
              <Mic className="w-5 h-5" /> Try Your Microphone
            </button>
          </div>

          <div className="w-full lg:w-2/3 bg-slate-950 border-4 border-slate-800 rounded-[2rem] p-6 lg:p-10 shadow-2xl relative overflow-hidden h-[500px] flex flex-col">
            
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-slate-500" />
                <span className="text-slate-400 font-medium">VAANI POS Terminal</span>
              </div>
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${isListening ? 'bg-red-500 animate-pulse' : 'bg-slate-600'}`}></div>
                <span className="text-slate-500 text-sm">{isListening ? 'Listening...' : 'Idle'}</span>
              </div>
            </div>

            <div className="mb-8 min-h-[80px]">
              {isListening && (
                <div className="flex gap-1 items-center mb-4 h-8 justify-center">
                  {[...Array(20)].map((_, i) => (
                    <motion.div 
                      key={i}
                      animate={{ height: [8, Math.random() * 24 + 8, 8] }}
                      transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.05 }}
                      className="w-1.5 bg-blue-500 rounded-full"
                    />
                  ))}
                </div>
              )}
              {transcriptText && (
                <div className="text-center">
                  <p className="text-2xl font-light text-white">"{transcriptText}"</p>
                </div>
              )}
            </div>

            {isProcessing && (
              <div className="flex-grow flex flex-col items-center justify-center">
                <div className="w-12 h-12 border-4 border-slate-700 border-t-blue-500 rounded-full animate-spin mb-4"></div>
                <p className="text-blue-400 font-mono text-sm">Agentic AI extracting SKUs...</p>
              </div>
            )}

            <AnimatePresence>
              {cart.length > 0 && !isProcessing && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-2xl p-6 text-slate-900 shadow-xl flex-grow flex flex-col"
                >
                  <div className="flex justify-between items-center mb-4 border-b border-slate-100 pb-2">
                    <span className="font-bold text-slate-400 uppercase text-xs tracking-wider">Item</span>
                    <span className="font-bold text-slate-400 uppercase text-xs tracking-wider">Total</span>
                  </div>
                  
                  <div className="flex-grow space-y-4">
                    {cart.map((item, i) => (
                      <div key={i} className="flex justify-between items-center font-medium">
                        <div className="flex items-center gap-3">
                          <span className="w-6 h-6 rounded-md bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">{item.qty}</span>
                          <span>{item.name}</span>
                        </div>
                        <span>₹{item.qty * item.price}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-slate-200 pt-4 mt-4 flex justify-between items-center font-black text-xl text-blue-600">
                    <span>Total Bill</span>
                    <span>₹{total}</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            <AnimatePresence>
              {showProcessedBadge && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute bottom-6 right-6 bg-[#030712]/80 backdrop-blur-md border border-blue-500/30 text-blue-400 px-4 py-2 rounded-full text-xs font-mono flex items-center gap-2"
                >
                  <Zap className="w-3 h-3" /> Processed in 0.4 seconds
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>
      </div>
    </section>
  );
}
