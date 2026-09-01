"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Do I need previous IT experience?",
      a: "Not necessarily. We offer beginner-to-advanced tracks. Our personalized training ensures that we start from your current knowledge level, whether you are a fresher or an experienced professional."
    },
    {
      q: "Do you provide personalized training?",
      a: "Yes! personalized training is our specialty. You get a dedicated trainer to focus on your weak areas and teach at your preferred pace."
    },
    {
      q: "What payment options are available?",
      a: "We offer flexible payment options, including 'Pay With Confidence' models for eligible learners upon successful completion. Contact our experts to see which plans you qualify for."
    },
    {
      q: "Will I receive exam preparation guidance?",
      a: "Absolutely. We provide complete certification exam guidance, including mock exams, module-by-module strategy, and confidence-building sessions right before you take the test."
    },
    {
      q: "Can I choose my preferred training schedule?",
      a: "Yes. Because our training is personalized, you can set a flexible schedule that works around your job, college, or other commitments."
    }
  ];

  return (
    <section className="py-24 bg-bg-dark relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-slate-400">Everything you need to know about our certification and training programs.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border-b border-slate-800 overflow-hidden"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-6 text-left hover:text-brand-blue transition-colors"
              >
                <span className="font-bold text-white font-heading text-lg pr-8">{faq.q}</span>
                <ChevronDown 
                  className={`flex-shrink-0 text-brand-blue transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} 
                  size={24} 
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="bg-bg-dark px-6 pb-6 pt-2"
                  >
                    <p className="text-slate-400 leading-relaxed pt-4 border-t border-slate-800/50">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
