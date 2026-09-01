"use client";
import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  { rating: 5, cert: "AWS Solutions Architect Professional", role: "Cloud Architect", text: "The personalized mentorship was a game changer. I cleared my AWS Solutions Architect Professional on the first try and landed a senior role within a month." },
  { rating: 4.5, cert: "Microsoft Azure Administrator", role: "DevOps Engineer", text: "Global IT completely demystified Azure for me. The hands-on practice exams were exactly like the real thing. Highly recommended!" },
  { rating: 3.5, cert: "Salesforce Administrator", role: "Salesforce Administrator", text: "I was struggling with self-study for months. Getting personalized guidance helped me focus on exactly what I needed to pass the admin cert." },
  { rating: 5, cert: "AWS Security Specialty", role: "Security Consultant", text: "Their exam vouchers are genuinely the best price on the market, but the true value is in their expert trainers. Brilliant experience." },
  { rating: 4, cert: "Microsoft Azure Fundamentals", role: "Cloud Support Specialist", text: "I transition from a non-tech background to a Cloud role in just 8 weeks thanks to their structured learning paths and constant support." },
  { rating: 4.5, cert: "AWS SysOps Administrator", role: "IT Infrastructure Lead", text: "We now send all our junior engineers through Global IT's certification tracks. The pass rate is incredible." }
];

const StarRating = ({ rating }: { rating: number }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<i key={i} className="fas fa-star text-amber-400"></i>);
    } else if (rating >= i - 0.5) {
      stars.push(<i key={i} className="fas fa-star-half-alt text-amber-400"></i>);
    } else {
      stars.push(<i key={i} className="far fa-star text-amber-400 opacity-30"></i>);
    }
  }
  return <div className="flex space-x-1 mb-6 text-sm">{stars}</div>;
};

export default function TestimonialsMarquee() {
  // Duplicate array for seamless infinite scrolling
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="bg-bg-dark pt-4 pb-24 overflow-hidden border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold font-heading text-white tracking-tight mb-4">
          Success Stories
        </h2>
        <p className="text-slate-400 font-sans text-lg">Don't just take our word for it.</p>
      </div>

      {/* Marquee Container */}
      <div className="relative flex group py-4">
        
        {/* Left/Right Fade Gradients */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#020617] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#020617] to-transparent z-10 pointer-events-none"></div>

        <motion.div 
          className="flex gap-8 px-4 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        >
          {duplicatedTestimonials.map((testimonial, i) => (
            <div 
              key={i} 
              className="w-80 md:w-96 shrink-0 p-8 flex flex-col justify-between hover:scale-105 transition-transform"
            >
              <div>
                <StarRating rating={testimonial.rating} />
                <p className="text-slate-300 font-sans leading-relaxed text-lg mb-8">
                  "{testimonial.text}"
                </p>
              </div>
              <div>
                <h4 className="text-white font-bold font-heading text-lg">Anonymous</h4>
                <p className="text-brand-blue text-sm font-sans font-semibold mb-1">{testimonial.cert}</p>
                <p className="text-slate-400 text-xs font-sans font-medium uppercase tracking-wider">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
