"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import BrandMarquee from '../../components/BrandMarquee';
import SocialProof from '../../components/SocialProof';

function TimelineNode({ item, index, isLast, progress }: { item: { icon: string; title: string; desc: string }, index: number, isLast: boolean, progress: ReturnType<typeof useScroll>['scrollYProgress'] }) {
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
    inLine = [0.66, 0.999, 1];
    outLine = [0, 1, 1];
  }

  const opacity = useTransform(progress, inOpacity, outOpacity);
  const scale = useTransform(progress, inScale, outScale);
  const lineScaleY = useTransform(progress, inLine, outLine);
  const nodeBorderColor = useTransform(progress, inColor, outBorderColor);
  const iconColor = useTransform(progress, inColor, outIconColor);
  const shadow = useTransform(progress, inShadow, outShadow);

  return (
    <div className={`relative pl-8 md:pl-10 ${!isLast ? 'pb-8 md:pb-16' : 'pb-2 md:pb-4'}`}>
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-slate-200"></div>
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-1 bg-brand-blue origin-top"
        style={{ scaleY: lineScaleY }}
      />
      <motion.div
        className="absolute -left-[18px] md:-left-[22px] top-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-bg-dark border-4 flex items-center justify-center z-10"
        style={{ borderColor: nodeBorderColor, boxShadow: shadow }}
      >
        <motion.i
          className={`fas ${item.icon} text-[10px] md:text-sm`}
          style={{ color: iconColor }}
        />
      </motion.div>
      <motion.div style={{ opacity, scale, originX: 0 }}>
        <h3 className="font-bold font-heading text-xl md:text-2xl mb-1 md:mb-3 text-white pt-1">
          {item.title}
        </h3>
        <p className="text-slate-400 text-[15px] md:text-lg leading-snug md:leading-relaxed">{item.desc}</p>
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
    <div className="bg-bg-dark min-h-screen pb-20">

      {/* Hero Banner */}
      <div className="bg-bg-dark pt-56 pb-20 border-b border-slate-800 relative overflow-hidden flex items-center justify-center min-h-[75vh]">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none z-0"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-sky/10 rounded-full blur-[100px] pointer-events-none z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-heading tracking-tight">
              Expert-Led IT <span className="text-brand-blue">Training</span>
            </h1>
            <p className="text-xl text-slate-400 font-sans leading-relaxed mb-6">
              No generic videos. No crowded classes. Just you and a senior industry expert dedicated to getting you certified on your first attempt.
            </p>

            <div className="flex items-center justify-center gap-8 md:gap-16 pt-6 border-t border-slate-800/60 max-w-2xl mx-auto mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-blue mb-1 font-heading">50+</div>
                <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Instructors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-blue mb-1 font-heading">10k+</div>
                <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Careers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-blue mb-1 font-heading">98%</div>
                <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Pass Rate</div>
              </div>
            </div>

            <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
              <p className="text-center text-slate-400 font-sans text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
                Authorized Training & Vouchers For
              </p>
              <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
                {[
                  { name: "AWS", url: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
                  { name: "Microsoft", url: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg" },
                  { name: "Salesforce", url: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" },
                  { name: "Google Cloud", url: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" },
                  { name: "Cisco", url: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" }
                ].map((provider, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center transition-all duration-300"
                  >
                    <img
                      src={provider.url}
                      alt={provider.name}
                      className="h-6 md:h-7 w-auto object-contain brightness-0 invert opacity-40 hover:opacity-100 hover:brightness-100 hover:invert-0 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <BrandMarquee />

      {/* Interactive Split Layout (Scroll-locked timeline sequence) */}
      <div ref={container} className="relative h-[200vh] bg-bg-dark">
        <div className="sticky top-0 h-[100dvh] w-full flex items-center justify-center overflow-hidden py-10 md:py-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-24 mt-8 md:mt-0">

              <div className="w-full md:w-1/2">
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-heading font-bold text-white mb-4 tracking-tight">
                  Zero Distractions. <br className="hidden md:block" />
                  <span className="text-brand-blue">Total Focus.</span>
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-slate-400 font-sans leading-relaxed mb-6">
                  Our flagship personalized mentorship program pairs you directly with certified professionals who live and breathe the tech you are learning. They don&apos;t just teach the syllabus—they teach the industry.
                </p>
                <a
                  href="https://wa.me/9392828155"
                  className="inline-flex items-center space-x-3 bg-bg-dark text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold hover:bg-brand-blue transition-colors shadow-xl text-sm md:text-base"
                >
                  <span>Match with a Mentor</span>
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>

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

      {/* Elegant Interactive Steps (Hover Reveal) */}
      <div className="py-32 bg-bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">The Pathway to Passing</h2>
            <p className="text-xl text-slate-400">A radically simplified, highly aggressive approach to exam prep.</p>
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
                className="group relative bg-bg-dark rounded-[2rem] p-10 overflow-hidden hover:bg-bg-dark transition-colors duration-500 cursor-default"
              >
                <div className="text-7xl font-bold font-heading text-slate-200 group-hover:text-brand-blue/30 transition-colors duration-500 mb-6">
                  {step.num}
                </div>
                <h3 className="text-2xl font-bold font-heading text-white group-hover:text-white transition-colors duration-500 mb-4 relative z-10">
                  {step.title}
                </h3>
                <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-500 relative z-10 leading-relaxed">
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
