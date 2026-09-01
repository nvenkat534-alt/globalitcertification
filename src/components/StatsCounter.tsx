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
    <div className="w-full bg-[#020b16] pt-10 pb-10 relative z-20 border-t border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 text-center relative z-10">
            <div className="flex flex-col items-center justify-center py-4 md:py-0 md:px-8 md:border-r md:border-slate-700/80">
              <h3 className="text-5xl md:text-6xl font-bold text-brand-blue mb-3 font-heading tracking-tight leading-none">
                <Counter to={50} />+
              </h3>
              <p className="text-white font-sans text-base md:text-lg font-bold uppercase tracking-[0.08em]">Certified Instructors</p>
            </div>
            
            <div className="flex flex-col items-center justify-center py-4 md:py-0 md:px-8 md:border-r md:border-slate-700/80">
              <h3 className="text-5xl md:text-6xl font-bold text-brand-blue mb-3 font-heading tracking-tight leading-none">
                <Counter to={10} />k+
              </h3>
              <p className="text-white font-sans text-base md:text-lg font-bold uppercase tracking-[0.08em]">Careers Advanced</p>
            </div>
            
            <div className="flex flex-col items-center justify-center py-4 md:py-0 md:px-8">
              <h3 className="text-5xl md:text-6xl font-bold text-brand-blue mb-3 font-heading tracking-tight leading-none">
                <Counter to={100} />%
              </h3>
              <p className="text-white font-sans text-base md:text-lg font-bold uppercase tracking-[0.08em]">First-Attempt Pass Rate</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
