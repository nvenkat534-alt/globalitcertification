"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';

import GlobalBrandSphere from './GlobalBrandSphere';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity1 = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="bg-slate-50 pt-32 pb-32 overflow-hidden relative border-b border-slate-200 min-h-[90vh] flex items-center">


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center relative min-h-[600px]">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{ y: y1, opacity: opacity1 }}
            className="lg:w-2/3 text-left relative z-20 py-10 pointer-events-none"
          >
            <div className="inline-block px-4 py-2 bg-brand-blue/10 rounded-full text-sm font-bold text-brand-blue mb-8 font-heading tracking-widest uppercase">
              The Global Standard
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight font-heading text-brand-dark tracking-tight">
              Learn. <span className="text-brand-blue">Certify.</span><br />
              <span className="text-brand-sky">Accelerate.</span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-sans max-w-lg pointer-events-auto">
              Supercharge your resume and unlock new career opportunities. Globally recognised certification vouchers, structured training, and expert exam assistance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pointer-events-auto">
              <a href="/certifications" className="bg-brand-blue text-white px-8 py-4 rounded-xl font-heading font-semibold text-lg hover:bg-brand-sky transition shadow-lg shadow-brand-blue/30 flex items-center justify-center w-fit">
                Get Certified <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:w-[110%] w-full h-[350px] lg:h-[900px] -mt-8 lg:mt-0 relative lg:absolute lg:-right-[38%] lg:top-[65%] lg:-translate-y-1/2 z-10 pointer-events-auto"
          >
            <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 6], fov: 45 }}>
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
              <Environment preset="city" />
              <GlobalBrandSphere interactive />
            </Canvas>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
