"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Clock, TrendingUp } from 'lucide-react';

export default function ROICalculator() {
  const [billsPerDay, setBillsPerDay] = useState(150);
  const [manualTime, setManualTime] = useState(60);

  // Constants
  const VAANI_CHECKOUT_TIME = 5; // seconds
  const WORKING_DAYS_PER_MONTH = 30;
  const VALUE_PER_HOUR = 250; // Assume an hour of peak time is worth ₹250 in sales

  // Calculations
  const timeSavedPerBill = Math.max(0, manualTime - VAANI_CHECKOUT_TIME);
  const secondsSavedPerDay = billsPerDay * timeSavedPerBill;
  const hoursSavedPerMonth = (secondsSavedPerDay * WORKING_DAYS_PER_MONTH) / 3600;
  
  const estimatedRevenue = Math.round(hoursSavedPerMonth * VALUE_PER_HOUR);

  return (
    <section className="py-32 relative bg-white dark:bg-[#030712] border-t border-slate-200 dark:border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-blue-500/5 mix-blend-multiply pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-bold mb-6 tracking-widest uppercase">
            ROI Calculator
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-6">
            Calculate Your Time & Money Saved.
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            See exactly how much revenue you are losing to slow, manual billing queues every month.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-8 md:p-12 shadow-2xl flex flex-col md:flex-row gap-12">
            
            {/* Left: Controls */}
            <div className="w-full md:w-1/2 flex flex-col justify-center space-y-10">
              
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="font-bold text-slate-900 dark:text-white">Average Bills Per Day</label>
                  <span className="text-xl font-black text-blue-600 dark:text-blue-400">{billsPerDay}</span>
                </div>
                <input 
                  type="range" 
                  min="10" 
                  max="500" 
                  step="10"
                  value={billsPerDay} 
                  onChange={(e) => setBillsPerDay(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-2 font-medium">
                  <span>10</span>
                  <span>500</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="font-bold text-slate-900 dark:text-white">Current Checkout Time (Seconds)</label>
                  <span className="text-xl font-black text-blue-600 dark:text-blue-400">{manualTime}s</span>
                </div>
                <input 
                  type="range" 
                  min="30" 
                  max="120" 
                  step="5"
                  value={manualTime} 
                  onChange={(e) => setManualTime(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-2 font-medium">
                  <span>30s (Fast)</span>
                  <span>120s (Slow)</span>
                </div>
              </div>

            </div>

            {/* Right: Results Display */}
            <div className="w-full md:w-1/2 bg-slate-50 dark:bg-[#030712] border border-slate-200 dark:border-slate-800 rounded-3xl p-8 flex flex-col justify-between shadow-inner">
              
              <div className="space-y-8 mb-8">
                <div>
                  <div className="flex items-center gap-2 text-slate-500 mb-2 font-bold uppercase tracking-wider text-sm">
                    <Clock className="w-4 h-4 text-blue-500" /> Hours Saved per Month
                  </div>
                  <motion.div 
                    key={hoursSavedPerMonth}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white"
                  >
                    {hoursSavedPerMonth.toFixed(1)} <span className="text-xl text-slate-500">Hours</span>
                  </motion.div>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-slate-500 mb-2 font-bold uppercase tracking-wider text-sm">
                    <TrendingUp className="w-4 h-4 text-blue-500" /> Est. Extra Revenue
                  </div>
                  <motion.div 
                    key={estimatedRevenue}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-4xl lg:text-5xl font-black text-blue-600 dark:text-blue-500"
                  >
                    ₹{estimatedRevenue.toLocaleString('en-IN')} <span className="text-xl text-blue-600/50">/ mo</span>
                  </motion.div>
                </div>
              </div>

              <a href="/vaani.apk" download className="w-full bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-500/50 transition-all hover:scale-[1.02]">
                <Download className="w-5 h-5" /> Start Saving Time Today — Free
              </a>
              
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
