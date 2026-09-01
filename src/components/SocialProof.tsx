"use client";
import React from 'react';
import { motion } from 'framer-motion';

const SocialProof = () => {
  const logos = [
    { name: 'Google', icon: 'fab fa-google' },
    { name: 'Amazon', icon: 'fab fa-amazon' },
    { name: 'Microsoft', icon: 'fab fa-microsoft' },
    { name: 'Slack', icon: 'fab fa-slack' },
    { name: 'Salesforce', icon: 'fab fa-salesforce' },
    { name: 'Apple', icon: 'fab fa-apple' },
    { name: 'Meta', icon: 'fab fa-meta' },
  ];

  // Double the array for seamless infinite loop
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="bg-bg-dark border-y border-slate-800 py-16 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
        <p className="text-sm font-bold tracking-widest text-slate-400 uppercase font-sans">Our alumni advance their careers at top companies</p>
      </div>
      
      {/* Marquee Container */}
      <div className="relative flex group py-4">
        
        {/* Gradients */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#020617] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#020617] to-transparent z-10 pointer-events-none"></div>

        <motion.div 
          className="flex items-center w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div key={index} className="mx-12 flex items-center justify-center text-slate-300 hover:text-brand-blue transition-colors duration-300">
              <i className={`${logo.icon} text-5xl`}></i>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SocialProof;
