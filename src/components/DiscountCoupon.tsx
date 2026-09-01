"use client";
import React from 'react';
import { motion } from 'framer-motion';

const DiscountCoupon = () => {
  return (
    <section className="py-24 bg-bg-dark relative border-y border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto text-center md:text-left">
          
          <div className="inline-block px-4 py-2 bg-brand-blue/10 rounded-full text-sm font-bold text-brand-blue mb-6 font-heading tracking-widest uppercase">
            Limited Time Offers
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading text-white leading-tight">
            Unlock Massive Savings on <br className="hidden md:block" />
            <span className="text-brand-blue">Global Certifications</span>
          </h2>
          
          <p className="text-xl text-slate-400 mb-10 font-sans leading-relaxed">
            Don't pay full price for your IT certifications. We offer exclusive discounted vouchers for AWS, Azure, Google Cloud, Salesforce, Cisco, and more.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
              <span className="bg-slate-800 text-slate-400 text-sm font-semibold px-4 py-2 rounded-lg">AWS</span>
              <span className="bg-slate-800 text-slate-400 text-sm font-semibold px-4 py-2 rounded-lg">Azure</span>
              <span className="bg-slate-800 text-slate-400 text-sm font-semibold px-4 py-2 rounded-lg">GCP</span>
              <span className="bg-slate-800 text-slate-400 text-sm font-semibold px-4 py-2 rounded-lg">Salesforce</span>
              <span className="bg-brand-sky/10 text-brand-sky text-sm font-semibold px-4 py-2 rounded-lg">+ Many More</span>
            </div>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a href="https://wa.me/9392828155?text=Hello!%20Can%20i%20get%20more%20info%20on%20this%20global%20certifications%20%3F" className="inline-flex items-center bg-brand-blue text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-brand-sky transition-colors">
                <i className="fab fa-whatsapp text-xl mr-2"></i>
                Claim Discount
                <i className="fas fa-arrow-right ml-2 text-xs"></i>
              </a>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default DiscountCoupon;
