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
    <div className="w-full bg-white pt-16 md:pt-20 pb-8 md:pb-10 relative z-20 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="px-2 md:px-6 relative overflow-hidden"
        >
          <div className="absolute top-0 right-1/2 w-64 h-64 bg-brand-sky/10 rounded-full blur-[80px] pointer-events-none"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200 relative z-10 pt-2 md:pt-6">
            <div className="flex flex-col items-center py-4 md:py-0">
              <h3 className="text-4xl md:text-5xl font-bold text-brand-blue mb-2 font-heading tracking-tight">
                <Counter to={50} />+
              </h3>
              <p className="text-slate-500 font-sans text-sm font-bold uppercase tracking-wider">Certified Instructors</p>
            </div>
            
            <div className="flex flex-col items-center py-4 md:py-0">
              <h3 className="text-4xl md:text-5xl font-bold text-brand-blue mb-2 font-heading tracking-tight">
                <Counter to={10} />k+
              </h3>
              <p className="text-slate-500 font-sans text-sm font-bold uppercase tracking-wider">Careers Advanced</p>
            </div>
            
            <div className="flex flex-col items-center py-4 md:py-0">
              <h3 className="text-4xl md:text-5xl font-bold text-brand-blue mb-2 font-heading tracking-tight">
                <Counter to={98} />%
              </h3>
              <p className="text-slate-500 font-sans text-sm font-bold uppercase tracking-wider">First-Attempt Pass Rate</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
