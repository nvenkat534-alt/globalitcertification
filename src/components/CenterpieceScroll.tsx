"use client";
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import { motion, useScroll, useTransform } from 'framer-motion';
import * as THREE from 'three';

import GlobalBrandSphere from './GlobalBrandSphere';

export default function CenterpieceScroll() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  });

  // Mathematically pin the Canvas to the viewport by translating it down exactly as we scroll
  // Total scroll distance is 200vh (300vh container - 100vh viewport)
  const canvasY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <section ref={container} className="relative w-full bg-slate-800 border-y border-slate-800">
      
      {/* 100vh absolute wrapper that translates down to fake sticky positioning */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div style={{ y: canvasY }} className="w-full h-screen overflow-hidden">
          <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
            <Environment preset="city" />
            <GlobalBrandSphere scrollYProgress={scrollYProgress} />
          </Canvas>
        </motion.div>
      </div>

      {/* Normal Flow HTML Overlay */}
      <div className="relative z-10 w-full">
        
        {/* Section 1 */}
        <div className="h-screen flex items-center px-4 sm:px-[10vw]">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="max-w-md bg-bg-dark/90 backdrop-blur-xl p-8 rounded-3xl border border-white shadow-2xl pointer-events-auto"
          >
            <h2 className="text-brand-blue font-bold font-heading uppercase tracking-widest text-sm mb-2">The Standard</h2>
            <p className="text-4xl font-bold font-heading text-white leading-tight">Globally Recognized Credential</p>
          </motion.div>
        </div>
        
        {/* Section 2 */}
        <div className="h-screen flex items-center justify-end px-4 sm:px-[10vw]">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="max-w-md bg-bg-dark/90 backdrop-blur-xl p-8 rounded-3xl border border-white shadow-2xl pointer-events-auto"
          >
            <h2 className="text-brand-blue font-bold font-heading uppercase tracking-widest text-sm mb-2">The Process</h2>
            <p className="text-4xl font-bold font-heading text-white leading-tight">Rigorous Exam Simulation</p>
          </motion.div>
        </div>
        
        {/* Section 3 */}
        <div className="h-screen flex items-center px-4 sm:px-[10vw]">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="max-w-md bg-bg-dark/90 backdrop-blur-xl p-8 rounded-3xl border border-white shadow-2xl pointer-events-auto"
          >
            <h2 className="text-whatsapp font-bold font-heading uppercase tracking-widest text-sm mb-2">The Result</h2>
            <p className="text-4xl font-bold font-heading text-white leading-tight">Your Career <br/>Accelerated.</p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
