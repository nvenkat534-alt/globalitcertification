"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function TrustBar() {
  const logos = [
    { name: "AWS", url: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/amazonaws.svg" },
    { name: "Microsoft", url: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoft.svg" },
    { name: "Salesforce", url: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/salesforce.svg" },
    { name: "Google Cloud", url: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/googlecloud.svg" },
    { name: "Cisco", url: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/cisco.svg" }
  ];

  return (
    <section className="bg-brand-dark py-12 border-y border-brand-blue/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-slate-400 font-sans text-sm font-semibold tracking-widest uppercase mb-8">
          Authorized Training & Vouchers For
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-20">
          {logos.map((logo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
            >
              <img src={logo.url} alt={logo.name} className="h-10 w-auto invert brightness-0" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
