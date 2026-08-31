"use client";
import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';

const Counter = ({ from = 0, to, duration = 2 }: { from?: number, to: number, duration?: number }) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, { duration, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, count, to, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

export default function StatsCounter() {
  return (
    <div className="w-full bg-slate-50 py-16 relative z-20 border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-white rounded-[2rem] shadow-2xl border border-slate-100 p-12 relative overflow-hidden"
        >
          {/* Decorative glow */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-sky/20 rounded-full blur-[80px]"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100 relative z-10">
            <div>
              <h3 className="text-5xl md:text-7xl font-bold text-brand-blue mb-4 font-heading tracking-tighter">
                <Counter to={50} />+
              </h3>
              <p className="text-slate-500 font-sans font-bold uppercase tracking-widest text-sm">Certified Instructors</p>
            </div>
            <div>
              <h3 className="text-5xl md:text-7xl font-bold text-brand-blue mb-4 font-heading tracking-tighter">
                <Counter to={10} />k+
              </h3>
              <p className="text-slate-500 font-sans font-bold uppercase tracking-widest text-sm">Careers Advanced</p>
            </div>
            <div>
              <h3 className="text-5xl md:text-7xl font-bold text-brand-blue mb-4 font-heading tracking-tighter">
                <Counter to={98} />%
              </h3>
              <p className="text-slate-500 font-sans font-bold uppercase tracking-widest text-sm">First-Attempt Pass Rate</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
