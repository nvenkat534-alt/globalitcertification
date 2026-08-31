"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const steps = [
  { num: "1", title: "Enroll", desc: "Select your certification and get your discounted exam voucher instantly." },
  { num: "2", title: "Learn", desc: "Access premium personalized mentorship tailored to your exact learning style." },
  { num: "3", title: "Assess", desc: "Simulate the real exam environment with rigorous mock tests." },
  { num: "4", title: "Get Certified", desc: "Pass your exam with confidence and accelerate your career." }
];

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);

  return (
    <section ref={containerRef} className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-brand-dark tracking-tight">The Proven Path to Certification</h2>
        </div>

        <div className="relative">
          {/* Connecting Line SVGs */}
          <div className="absolute top-1/2 left-0 w-full hidden md:block -translate-y-1/2 -z-10">
            <svg width="100%" height="4" className="overflow-visible">
              <line x1="0" y1="2" x2="100%" y2="2" stroke="#e2e8f0" strokeWidth="4" strokeDasharray="8 8" />
              <motion.line 
                x1="0" y1="2" x2="100%" y2="2" 
                stroke="#818cf8" strokeWidth="4" 
                style={{ pathLength }} 
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, rotateY: 90, scale: 0.8 }}
                whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.2, type: "spring", bounce: 0.4 }}
                style={{ perspective: 1000 }}
                className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-xl relative group hover:border-brand-blue/30 transition-colors"
              >
                <div className="w-16 h-16 bg-brand-dark rounded-2xl flex items-center justify-center text-white text-2xl font-bold font-heading mb-6 group-hover:bg-brand-blue transition-colors shadow-lg shadow-brand-blue/20">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-brand-dark font-heading mb-3">{step.title}</h3>
                <p className="text-slate-600 font-sans leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
