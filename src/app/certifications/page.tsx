"use client";
import React from 'react';
import Link from 'next/link';
import Certifications from '../../components/Certifications';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import GlobalBrandSphere from '../../components/GlobalBrandSphere';
import ScrollHighlightText from '../../components/ScrollHighlightText';

const CertificationsPage = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Hero Banner */}
      <div className="bg-brand-dark pt-32 pb-24 border-b border-brand-blue/30 relative overflow-hidden">
        {/* Background grids/elements */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 z-0"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue rounded-full blur-[120px] opacity-20 -mr-20 -mt-20 z-0"></div>
        
        {/* 3D Background Element */}
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-30 pointer-events-auto z-0">
          <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <Environment preset="city" />
            <GlobalBrandSphere interactive={true} />
          </Canvas>
        </div>
        

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-heading">
              The Global <span className="text-brand-sky">Certification</span> Catalog
            </h1>
            <p className="text-xl text-slate-400 font-sans leading-relaxed mb-8">
              Browse our complete catalog of globally recognised certifications. We provide heavily discounted exam vouchers and authorized training for the world's leading technology providers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#certifications" className="bg-brand-blue text-white px-8 py-4 rounded-xl font-bold font-heading hover:bg-brand-sky transition shadow-lg inline-flex items-center justify-center">
                View All Providers <i className="fas fa-arrow-down ml-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <ScrollHighlightText text="Choose from our globally recognized certification paths. Equip yourself with the credentials that top tech companies demand." />

      <Certifications />
      
      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-dark font-heading">Frequently Asked Questions</h2>
        </div>
        
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-brand-dark font-heading text-lg mb-2">How do the discounted vouchers work?</h3>
            <p className="text-slate-600 font-sans">As authorized partners, we purchase certification vouchers in high volume directly from the providers. We pass these bulk discounts directly to you. Once purchased, you receive an official code to redeem on the provider's testing portal (like Pearson VUE).</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-brand-dark font-heading text-lg mb-2">Are these certifications valid globally?</h3>
            <p className="text-slate-600 font-sans">Yes! Every certification voucher we provide is 100% official and the resulting credential is valid worldwide, exactly as if you paid full price directly through the vendor.</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-brand-dark font-heading text-lg mb-2">Can I just buy the voucher without training?</h3>
            <p className="text-slate-600 font-sans">Absolutely. While we highly recommend our pass-focused training programs to ensure your success, you are free to purchase exam vouchers independently at our discounted rates.</p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-slate-500 font-sans mb-6">Have more questions about specific certifications?</p>
          <a href="https://wa.me/919205531284" className="inline-block bg-brand-dark text-white px-8 py-4 rounded-xl font-bold font-heading hover:bg-brand-blue transition shadow-md">
            Ask us on WhatsApp
          </a>
        </div>
      </div>
      
    </div>
  );
};

export default CertificationsPage;
