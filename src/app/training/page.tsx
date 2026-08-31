"use client";
import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import GlobalBrandSphere from '../../components/GlobalBrandSphere';
import ScrollHighlightText from '../../components/ScrollHighlightText';
import SocialProof from '../../components/SocialProof';

function TimelineNode({ item, index, isLast, progress }: { item: any, index: number, isLast: boolean, progress: any }) {
  let inOpacity, outOpacity, inScale, outScale, inColor, outBorderColor, outIconColor, inShadow, outShadow, inLine, outLine;

  if (index === 0) {
    inOpacity = [0, 0.33, 0.43];
    outOpacity = [1, 1, 0.4];
    
    inScale = [0, 0.33, 0.43];
    outScale = [1.05, 1.05, 1];
    
    inColor = [0, 0.1];
    outBorderColor = ["#4f46e5", "#4f46e5"];
    outIconColor = ["#4f46e5", "#4f46e5"];
    
    inShadow = [0, 0.33, 0.43];
    outShadow = [
      "0px 0px 20px rgba(37,99,235,0.4)",
      "0px 0px 20px rgba(37,99,235,0.4)",
      "0px 0px 0px rgba(37,99,235,0)"
    ];
    
    inLine = [0, 0.33];
    outLine = [0, 1];
  } else if (index === 1) {
    inOpacity = [0.23, 0.33, 0.66, 0.76];
    outOpacity = [0.4, 1, 1, 0.4];
    
    inScale = [0.23, 0.33, 0.66, 0.76];
    outScale = [1, 1.05, 1.05, 1];
    
    inColor = [0.28, 0.43];
    outBorderColor = ["#e2e8f0", "#4f46e5"];
    outIconColor = ["#94a3b8", "#4f46e5"];
    
    inShadow = [0.33, 0.43, 0.66, 0.76];
    outShadow = [
      "0px 0px 0px rgba(37,99,235,0)",
      "0px 0px 20px rgba(37,99,235,0.4)",
      "0px 0px 20px rgba(37,99,235,0.4)",
      "0px 0px 0px rgba(37,99,235,0)"
    ];
    
    inLine = [0.33, 0.66];
    outLine = [0, 1];
  } else {
    inOpacity = [0.56, 0.66, 1];
    outOpacity = [0.4, 1, 1];
    
    inScale = [0.56, 0.66, 1];
    outScale = [1, 1.05, 1.05];
    
    inColor = [0.61, 0.76];
    outBorderColor = ["#e2e8f0", "#4f46e5"];
    outIconColor = ["#94a3b8", "#4f46e5"];
    
    inShadow = [0.66, 0.76, 1];
    outShadow = [
      "0px 0px 0px rgba(37,99,235,0)",
      "0px 0px 20px rgba(37,99,235,0.4)",
      "0px 0px 20px rgba(37,99,235,0.4)"
    ];
    
    inLine = [0.66, 0.999, 1]; // ending slightly before 1 to ensure strict increase if needed, but 1 is fine.
    outLine = [0, 1, 1];
  }

  const opacity = useTransform(progress, inOpacity, outOpacity);
  const scale = useTransform(progress, inScale, outScale);
  const lineScaleY = useTransform(progress, inLine, outLine);
  const nodeBorderColor = useTransform(progress, inColor, outBorderColor);
  const iconColor = useTransform(progress, inColor, outIconColor);
  const shadow = useTransform(progress, inShadow, outShadow);

  return (
    <div className={`relative pl-10 ${!isLast ? 'pb-16' : 'pb-4'}`}>
      {/* The background gray track */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-slate-200"></div>
      
      {/* The foreground animated blue track */}
      <motion.div 
        className="absolute left-0 top-0 bottom-0 w-1 bg-brand-blue origin-top"
        style={{ scaleY: lineScaleY }}
      />
      
      {/* Glowing Node */}
      <motion.div 
        className="absolute -left-[22px] top-0 w-10 h-10 rounded-full bg-white border-4 flex items-center justify-center z-10"
        style={{ borderColor: nodeBorderColor, boxShadow: shadow }}
      >
        <motion.i 
          className={`fas ${item.icon} text-sm`} 
          style={{ color: iconColor }}
        />
      </motion.div>
      
      {/* Content */}
      <motion.div style={{ opacity, scale, originX: 0 }}>
        <h3 className="font-bold font-heading text-2xl mb-3 text-brand-dark pt-1">
          {item.title}
        </h3>
        <p className="text-slate-500 text-lg leading-relaxed">{item.desc}</p>
      </motion.div>
    </div>
  );
}

export default function TrainingPage() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  });

  return (
    <div className="min-h-screen bg-white">
      
      {/* 1. Immersive Hero */}
      <div className="bg-brand-dark pt-40 pb-32 relative overflow-hidden h-[90vh] flex flex-col justify-center border-b border-brand-blue/30">
        <div className="absolute top-0 right-0 w-full h-full opacity-40 pointer-events-auto z-0">
          <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <Environment preset="city" />
            <GlobalBrandSphere interactive={true} />
          </Canvas>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-brand-sky/30 bg-brand-sky/10 text-brand-sky text-sm font-bold tracking-widest uppercase mb-6">
              Elite IT Training
            </div>
            <h1 className="text-6xl md:text-8xl font-bold font-heading text-white leading-[1.1] tracking-tighter mb-8">
              Learn from the <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-sky to-blue-400">Masters.</span>
            </h1>
            <p className="text-xl md:text-2xl font-sans text-slate-300 max-w-2xl font-light">
              No generic videos. No crowded classes. Just you and a senior industry expert dedicated to getting you certified.
            </p>
          </motion.div>
        </div>
      </div>

      {/* 2. Scroll Highlight Typography */}
      <ScrollHighlightText text="We discard the traditional classroom model. Our personalized mentorship adapts entirely to your learning speed, exposing your blind spots, and guaranteeing absolute confidence on exam day." />

      {/* 3. Interactive Split Layout (Scroll-locked timeline sequence) */}
      <div ref={container} className="relative h-[200vh] bg-slate-50">
        {/* Sticky inner container */}
        <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
              
              {/* Left text */}
              <div className="w-full md:w-1/2">
                <h2 className="text-4xl md:text-6xl font-heading font-bold text-brand-dark mb-6 tracking-tight">
                  Zero Distractions. <br/>
                  <span className="text-brand-blue">Total Focus.</span>
                </h2>
                <p className="text-xl text-slate-500 font-sans leading-relaxed mb-8">
                  Our flagship personalized mentorship program pairs you directly with certified professionals who live and breathe the tech you are learning. They don't just teach the syllabus—they teach the industry.
                </p>
                <a 
                  href="https://wa.me/919205531284"
                  className="inline-flex items-center space-x-3 bg-brand-dark text-white px-8 py-4 rounded-full font-bold hover:bg-brand-blue transition-colors shadow-xl"
                >
                  <span>Match with a Mentor</span>
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>

              {/* Right visuals - Scroll-driven Timeline List */}
              <div className="w-full md:w-1/2 flex flex-col pl-4 md:pl-10">
                {[
                  { 
                    icon: "fa-crosshairs", 
                    title: "Targeted Weaknesses", 
                    desc: "We identify exactly where you struggle with a diagnostic test and focus exclusively on fixing it without wasting time on what you already know." 
                  },
                  { 
                    icon: "fa-calendar-alt", 
                    title: "Your Schedule", 
                    desc: "You pick the days. You pick the hours. The mentor adapts the pacing entirely to your life, whether you want to cram or spread it out." 
                  },
                  { 
                    icon: "fa-comments", 
                    title: "Real-time Feedback", 
                    desc: "Never get stuck on a difficult concept. Ask questions live and get immediate, expert clarification instead of waiting for a forum reply." 
                  }
                ].map((item, i, arr) => (
                  <TimelineNode 
                    key={i} 
                    item={item} 
                    index={i} 
                    isLast={i === arr.length - 1} 
                    progress={scrollYProgress} 
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Elegant Interactive Steps (Hover Reveal) */}
      <div className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-dark mb-6">The Pathway to Passing</h2>
            <p className="text-xl text-slate-500">A radically simplified, highly aggressive approach to exam prep.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Diagnostic Mock", desc: "Before we teach a single concept, you take a full-length mock exam to expose your baseline." },
              { num: "02", title: "Surgical Tutoring", desc: "We map your incorrect answers to the syllabus and spend our personalized hours exclusively on those domains." },
              { num: "03", title: "Final Validation", desc: "You pass two consecutive mock exams at 90%+. Then, we hand you your discounted voucher." }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group relative bg-slate-50 rounded-[2rem] p-10 overflow-hidden hover:bg-brand-dark transition-colors duration-500 cursor-default"
              >
                <div className="text-7xl font-bold font-heading text-slate-200 group-hover:text-brand-blue/30 transition-colors duration-500 mb-6">
                  {step.num}
                </div>
                <h3 className="text-2xl font-bold font-heading text-brand-dark group-hover:text-white transition-colors duration-500 mb-4 relative z-10">
                  {step.title}
                </h3>
                <p className="text-slate-500 group-hover:text-slate-300 transition-colors duration-500 relative z-10 leading-relaxed">
                  {step.desc}
                </p>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-blue rounded-full blur-[60px] opacity-0 group-hover:opacity-40 transition-opacity duration-700"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <SocialProof />
    </div>
  );
}
