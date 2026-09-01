"use client";

import React from 'react';
import { motion } from 'framer-motion';

const WhyCertify = () => {
  return (
    <section className="bg-bg-dark py-16 md:py-20 text-slate-900 relative overflow-hidden border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 md:mb-20 text-center max-w-4xl mx-auto flex flex-col items-center">
          <span className="inline-block px-4 py-2 bg-brand-blue/10 rounded-full text-xs font-bold text-brand-blue mb-6 uppercase tracking-widest border border-brand-blue/20">
            Why Certification Matters
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-heading text-white leading-[0.95] tracking-tight mb-6">
            Don&apos;t Let Others Get <span className="text-brand-blue">Ahead</span> of You.
          </h2>
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed font-sans max-w-3xl mx-auto">
            Technology is changing quickly, and professionals are continuously upgrading their skills. A certification isn&apos;t just a piece of paper—it&apos;s proof that you belong at the top of the industry.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {[
            { title: "Stand Out From Candidates", desc: "When recruiters filter through hundreds of resumes, certifications act as an instant trust signal. It demonstrates verifiable knowledge and a deep commitment to your professional growth.", num: "01" },
            { title: "Increase Interview Calls", desc: "Relevant skills and certifications directly strengthen your profile on LinkedIn and hiring platforms. You will bypass automated filters and dramatically improve visibility with top employers.", num: "02" },
            { title: "Stay Competitive", desc: "The technology industry changes rapidly. Upgrading your skills ensures you aren't left behind while peers who master the latest cloud and AI tools take the best positions.", num: "03" },
            { title: "Improve Career Opportunities", desc: "Develop in-demand, specialized skills that qualify you for internal promotions, significant salary bumps, and entirely new, high-paying career trajectories.", num: "04" },
            { title: "Strengthen Your Resume", desc: "Show employers that you don't just talk about learning—you actively invest your own time and resources into mastering the tools they rely on.", num: "05" },
          ].map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group flex flex-col items-center text-center w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] bg-bg-dark border border-slate-800 p-8 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:border-brand-blue/40 hover:shadow-[0_0_20px_rgba(91,108,255,0.15)] transition-all duration-300"
            >
              <div className="text-5xl md:text-6xl font-bold font-heading text-slate-800 group-hover:text-brand-blue/30 transition-colors duration-300 mb-6 leading-none">
                {item.num}
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold mb-4 font-heading text-white group-hover:text-brand-blue transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-[15px] leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyCertify;
