"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rahul S.",
      cert: "AWS Solutions Architect",
      quote: "The personalized training helped me understand complex cloud concepts clearly. I passed my AWS exam on the first try with confidence!"
    },
    {
      name: "Priya M.",
      cert: "Microsoft Azure Administrator",
      quote: "Unlike recorded courses, my trainer focused exactly on my weak areas. The flexible payment option and mock exams were a game changer."
    },
    {
      name: "Amit K.",
      cert: "Salesforce Administrator",
      quote: "I had zero IT background. The structured modules and complete certification guidance gave me exactly what I needed to transition my career."
    }
  ];

  return (
    <section className="py-24 bg-bg-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-slate-800/50 mb-16 pt-12">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4">Student Success Stories</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">Hear from our students who successfully transformed their careers through our personalized training programs.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, rotateY: -30, scale: 0.8, x: -50 }}
              whileInView={{ opacity: 1, rotateY: 0, scale: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.2, duration: 0.8, type: "spring", bounce: 0.3 }}
              style={{ transformStyle: "preserve-3d", perspective: 1200 }}
              className="bg-bg-dark p-8 rounded-3xl shadow-[0_0_15px_rgba(0,0,0,0.5)] border border-slate-800/50 hover:shadow-[0_0_30px_rgba(0,0,0,0.7)] transition-all"
            >
              <div className="flex space-x-1 text-yellow-400 mb-6">
                {[...Array(5)].map((_, j) => <Star key={j} size={18} fill="currentColor" />)}
              </div>
              <p className="text-slate-300 italic leading-relaxed mb-6">"{t.quote}"</p>
              <div>
                <h4 className="font-bold text-white font-heading">{t.name}</h4>
                <p className="text-sm text-brand-blue font-medium">{t.cert}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
