"use client";
import React from 'react';
import { motion } from 'framer-motion';

const DiscountCoupon = () => {
  return (
    <section className="py-20 bg-brand-blue relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10" style={{ perspective: 1000 }}>
        <motion.h2 
          initial={{ opacity: 0, rotateX: 30, y: 30 }}
          whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-3xl md:text-5xl font-bold mb-6 font-heading text-white"
        >
          Discount Coupons Available for Global Certifications
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto font-sans"
        >
          Get exclusive discounts on globally recognised certification exams. Save big on your certification journey.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
          whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          className="bg-white/10 backdrop-blur-md py-4 px-4 md:px-8 rounded-2xl inline-block border border-white/20 mb-10 w-full md:w-auto"
        >
          <p className="text-base md:text-lg font-medium text-white font-sans leading-relaxed">
            AWS | Azure | Google Cloud | Microsoft | Cisco | CompTIA | Oracle & More
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <a href="https://wa.me/919205531284" className="inline-block bg-white text-brand-blue px-10 py-4 rounded-xl font-bold text-xl hover:bg-slate-50 transition shadow-xl transform hover:-translate-y-1 font-heading">
            <i className="fas fa-tag mr-2"></i> Get Discount on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default DiscountCoupon;
