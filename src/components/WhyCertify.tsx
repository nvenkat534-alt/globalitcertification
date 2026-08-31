"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Briefcase, Star, Zap, CheckSquare } from 'lucide-react';

const WhyCertify = () => {
  return (
    <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand-sky font-bold tracking-wider uppercase text-sm mb-2 block">Why Certification Matters</span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">Don't Let Others Get Ahead of You.</h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">Technology is changing quickly, and professionals are continuously upgrading their skills. Here is why you need to get certified.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: <Star size={24} />, title: "Stand Out From Candidates", desc: "Certification helps demonstrate your knowledge and commitment to professional growth." },
            { icon: <Briefcase size={24} />, title: "Increase Interview Calls", desc: "Relevant skills and certifications can strengthen your profile and improve visibility with employers." },
            { icon: <Zap size={24} />, title: "Stay Competitive", desc: "Upgrade your skills and stay relevant in today's rapidly changing technology industry." },
            { icon: <TrendingUp size={24} />, title: "Improve Career Opportunities", desc: "Develop in-demand skills that can help you pursue new roles and career opportunities." },
            { icon: <CheckSquare size={24} />, title: "Strengthen Your Resume", desc: "Show employers that you have invested in developing relevant professional skills." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, rotateX: 45, y: 50, z: -100 }}
              whileInView={{ opacity: 1, rotateX: 0, y: 0, z: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.8, type: "spring" }}
              style={{ transformStyle: "preserve-3d", perspective: 1000 }}
              className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-white/15 transition-all"
            >
              <div className="w-12 h-12 bg-brand-sky text-brand-dark rounded-xl flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 font-heading">{item.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-br from-brand-blue to-brand-sky p-6 rounded-2xl flex flex-col justify-center items-center text-center shadow-xl shadow-brand-blue/20"
          >
            <h3 className="text-2xl font-bold mb-4 font-heading">Ready to upgrade?</h3>
            <a href="https://wa.me/919205531284" className="bg-white text-brand-dark px-6 py-3 rounded-xl font-bold w-full hover:bg-slate-100 transition-colors">
              Book Free Consultation
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyCertify;
