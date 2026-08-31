"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Target, BookOpen, Clock, ShieldCheck, HelpCircle, Trophy } from 'lucide-react';

const Features = () => {
  return (
    <section className="py-24 bg-white relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section 1: personalized Training */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <span className="text-brand-blue font-bold tracking-wider uppercase text-sm mb-2 block">personalized Training</span>
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-brand-dark mb-4">Your Learning. Your Pace. <span className="text-brand-sky">Your Success.</span></h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">Unlike traditional classroom training, learners receive personalized attention based on their knowledge level and learning requirements.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Clock />, title: "Learn at your own pace", desc: "No need to rush or wait. Move through the modules as fast or as slow as you need." },
              { icon: <Target />, title: "Focus on weak areas", desc: "Spend more time on complex topics and skip over what you already know." },
              { icon: <HelpCircle />, title: "Ask questions freely", desc: "Enjoy an uninterrupted personalized environment where no question is too basic." },
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40, rotateY: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.15, duration: 0.7, ease: "easeOut" }}
                style={{ transformStyle: "preserve-3d", perspective: 1000 }}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg hover:border-brand-blue/20 transition-all group"
              >
                <div className="w-14 h-14 bg-brand-blue/10 text-brand-blue rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3 font-heading">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 2: Complete Certification Guidance */}
        <div className="bg-brand-dark rounded-3xl p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue opacity-20 blur-[100px] rounded-full pointer-events-none -mr-40 -mt-40"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <span className="text-brand-sky font-bold tracking-wider uppercase text-sm mb-2 block">Your Success Is Our Priority</span>
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">Complete Certification Exam Guidance</h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                We don't just provide training. We help students understand the complete certification journey. Get complete guidance and personalized support throughout your preparation.
              </p>
              <ul className="space-y-4">
                {[
                  "Understanding the certification syllabus",
                  "Module-by-module preparation & strategy",
                  "Practice questions and mock assessments",
                  "Identifying weak areas & revision support",
                  "Confidence-building before the exam"
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start space-x-3 text-slate-200"
                  >
                    <ShieldCheck className="text-brand-sky flex-shrink-0 mt-1" size={20} />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-brand-sky text-brand-dark rounded-full mb-6">
                  <Trophy size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 font-heading">Learn First. Pay With Confidence.</h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                  We believe students should feel confident about the value they receive. Eligible learners can benefit from flexible payment options designed around successful completion.
                </p>
                <div className="bg-brand-blue/20 border border-brand-blue/30 p-4 rounded-xl">
                  <p className="text-brand-sky font-medium text-sm text-center">Comprehensive Support Until You Are Fully Prepared</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;
