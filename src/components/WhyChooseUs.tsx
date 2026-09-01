"use client";
import React from 'react';
import FadeIn from './FadeIn';

const WhyChooseUs = () => {
  const features = [
    {
      title: "Pay After You Pass",
      desc: "We believe in your success. Pay only when you pass your exam.",
      icon: "fas fa-shield-alt text-[#4F46E5]",
      bg: "bg-[#4F46E5]/10"
    },
    {
      title: "First Attempt Focus",
      desc: "Our proven method and practice tests ensure you succeed the first time.",
      icon: "fas fa-bullseye text-[#FF7E67]",
      bg: "bg-[#FF7E67]/10"
    },
    {
      title: "Expert Instructors",
      desc: "Learn from certified industry experts with real-world experience.",
      icon: "fas fa-users text-[#0089D6]",
      bg: "bg-[#0089D6]/10"
    },
    {
      title: "End-to-End Support",
      desc: "From training to certification, we support you at every step of the journey.",
      icon: "fas fa-headset text-[#9D4EDD]",
      bg: "bg-[#9D4EDD]/10"
    }
  ];

  return (
    <section className="py-20 bg-bg-dark border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          
          {/* Left Text */}
          <div className="lg:w-5/12 text-center lg:text-left">
            <div className="inline-block px-4 py-2 bg-brand-blue/10 rounded-full text-xs font-bold text-brand-blue mb-6 uppercase tracking-widest border border-brand-blue/20">
              OUR PROMISE
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading leading-tight tracking-tight">
              Why Choose <br className="hidden lg:block"/>
              <span className="text-brand-blue">GlobalIT</span> Certifications?
            </h2>
            <p className="text-lg text-slate-400 font-sans leading-relaxed">
              We're committed to your success with the best training, support, and guarantees in the industry. Your career growth is our absolute priority.
            </p>
          </div>

          {/* Right Points List */}
          <div className="lg:w-7/12 flex flex-col gap-8 w-full mt-8 lg:mt-0 lg:pl-10">
            {features.map((feature, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="flex gap-5 items-start group cursor-default">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center mt-1 group-hover:bg-brand-blue transition-colors duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] border border-brand-blue/20">
                    <i className="fas fa-check text-brand-blue text-sm group-hover:text-white transition-colors duration-300"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-[22px] mb-2 font-heading group-hover:text-brand-blue transition-colors duration-300">{feature.title}</h3>
                    <p className="text-slate-400 text-[17px] leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
