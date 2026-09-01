"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Search, Phone, UserCircle, BookOpenCheck, Award } from 'lucide-react';

const Journey = () => {
  const steps = [
    { icon: <Search size={28} />, title: "Choose Your Certification", desc: "Select AWS, Azure, Salesforce, or another suitable certification." },
    { icon: <Phone size={28} />, title: "Talk to Our Expert", desc: "Understand the eligibility, learning path, and career opportunities." },
    { icon: <UserCircle size={28} />, title: "Start personalized Training", desc: "Receive personalized training based on your current knowledge." },
    { icon: <BookOpenCheck size={28} />, title: "Practice & Prepare", desc: "Complete practical learning, assessments, and exam preparation." },
    { icon: <Award size={28} />, title: "Get Certification Ready", desc: "Receive guidance to confidently approach your examination." },
  ];

  return (
    <section className="py-24 bg-bg-dark relative z-20 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4">Your Journey to Certification</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">A simple step-by-step process designed to take you from a beginner to a certified professional.</p>
        </div>

        <div className="relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 bg-bg-dark border-4 border-slate-800/50 rounded-full flex items-center justify-center text-brand-blue mb-6 shadow-[0_0_20px_rgba(0,0,0,0.6)] group-hover:border-brand-blue group-hover:scale-110 transition-all duration-300">
                  {step.icon}
                </div>
                <div className="bg-brand-blue/10 text-brand-blue text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
                  Step {i + 1}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 font-heading">{step.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
