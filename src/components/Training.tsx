"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Training = () => {
  return (
    <section id="training" className="py-24 bg-bg-dark border-y border-slate-800 relative overflow-hidden">
      {/* Decorative background blob */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-brand-sky/10 rounded-full blur-[80px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: 15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring" }}
            style={{ perspective: 1000 }}
          >
            <div className="inline-block px-4 py-1.5 bg-brand-blue/10 rounded-full text-sm font-bold text-brand-blue mb-6 font-heading tracking-wide uppercase">
              100% Pass Focused
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight font-heading">
              Certification Training Designed to <span className="text-gradient">Help You Pass</span>
            </h2>
            
            <p className="text-slate-400 mb-8 text-lg font-sans leading-relaxed">
              We provide comprehensive preparation resources and expert guidance to ensure you are fully prepared for your certification exams, not just theoretical knowledge.
            </p>
            
            <ul className="space-y-5 mb-10">
              <li className="flex items-start bg-bg-dark p-4 rounded-xl border border-slate-800 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                <div className="bg-brand-blue/10 p-3 rounded-lg mr-4">
                  <i className="fas fa-book-open text-brand-blue text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold font-heading text-white text-lg">Structured training</h4>
                  <p className="text-slate-400 font-sans text-sm mt-1">Perfectly aligned with official exam objectives.</p>
                </div>
              </li>
              <li className="flex items-start bg-bg-dark p-4 rounded-xl border border-slate-800 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                <div className="bg-brand-blue/10 p-3 rounded-lg mr-4">
                  <i className="fas fa-laptop-code text-brand-blue text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold font-heading text-white text-lg">Mock Exams & Practice</h4>
                  <p className="text-slate-400 font-sans text-sm mt-1">Simulate the real test experience to maximize your score.</p>
                </div>
              </li>
              <li className="flex items-start bg-bg-dark p-4 rounded-xl border border-slate-800 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                <div className="bg-brand-blue/10 p-3 rounded-lg mr-4">
                  <i className="fas fa-user-check text-brand-blue text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold font-heading text-white text-lg">Expert Guidance</h4>
                  <p className="text-slate-400 font-sans text-sm mt-1">Complete exam assistance and certification roadmap planning.</p>
                </div>
              </li>
            </ul>
            
            <a href="https://wa.me/9392828155?text=Hello!%20Can%20i%20get%20more%20info%20on%20this%20global%20certifications%20%3F" className="inline-flex items-center bg-bg-dark text-white px-8 py-4 rounded-xl font-bold font-heading text-lg hover:bg-brand-blue transition">
              Talk to an Expert <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", delay: 0.2 }}
            style={{ perspective: 1000 }}
            className="relative"
          >
            {/* Image styling */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue to-brand-sky rounded-3xl transform rotate-3 opacity-20"></div>
            <Image 
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Training Session" 
              width={1000}
              height={600}
              className="rounded-3xl shadow-xl relative z-10 object-cover h-[600px] w-full" 
            />
            
            {/* Floating badge */}
            <div className="absolute -bottom-8 -left-8 bg-bg-dark p-6 rounded-2xl shadow-xl z-20 border border-slate-800 flex items-center">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mr-4">
                <i className="fas fa-award text-3xl text-brand-blue"></i>
              </div>
              <div>
                <p className="text-xs text-slate-400 font-sans font-bold uppercase tracking-wider">Success Rate</p>
                <p className="text-3xl font-bold font-heading text-white">100%</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Training;
