"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Props {
  text: string;
}

const Word = ({ children, progress, range }: { children: React.ReactNode, progress: any, range: number[] }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block mr-[0.25em] text-brand-dark">
      {children}
    </motion.span>
  );
};

export default function ScrollHighlightText({ text }: Props) {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.8", "start 0.2"]
  });

  const words = text.split(" ");

  return (
    <section className="bg-slate-50 py-32 overflow-hidden border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <p 
          ref={container} 
          className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold leading-snug text-center max-w-4xl"
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + (1 / words.length);
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </section>
  );
}
