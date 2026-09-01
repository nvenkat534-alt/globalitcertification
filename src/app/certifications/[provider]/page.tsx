"use client";

import React from 'react';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import { Phone, CheckCircle2, Award } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import GlobalBrandSphere from '../../../components/GlobalBrandSphere';

import { providerData } from '../providerData';

export default function ProviderPage() {
  const params = useParams();
  const provider = params.provider;

  const data = providerData[provider as string];

  if (!data) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50">
      
      {/* Hero */}
      <div className="bg-brand-dark pt-32 pb-24 relative overflow-hidden">
        
        {/* 3D Background Element */}
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-30 pointer-events-auto z-0">
          <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <Environment preset="city" />
            <GlobalBrandSphere interactive={true} />
          </Canvas>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pointer-events-none mb-8">
          <div className="flex items-center space-x-2 text-sm font-sans font-medium text-slate-400 mb-8 pointer-events-auto">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <i className="fas fa-chevron-right text-[10px]"></i>
            <Link href="/certifications" className="hover:text-white transition">Certifications</Link>
            <i className="fas fa-chevron-right text-[10px]"></i>
            <span className="text-brand-sky">{data.name}</span>
          </div>
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-heading">
              {data.name}
            </h1>
            <p className="text-xl text-slate-300 font-sans leading-relaxed mb-8">
              {data.desc}
            </p>
            <div className="flex gap-4">
              <a href="https://wa.me/919205531284" className="bg-brand-blue text-white px-8 py-4 rounded-xl font-bold font-heading hover:bg-brand-sky transition shadow-lg flex items-center space-x-2">
                <Phone size={20} />
                <span>Talk to an Expert</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2 space-y-16">
            {/* Modules */}
            <div>
              <h2 className="text-3xl font-bold text-brand-dark mb-6 font-heading">What You Will Learn</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.modules.map((mod: string, i: number) => (
                  <div key={i} className="flex items-start space-x-3 bg-white p-4 rounded-xl border border-slate-200">
                    <CheckCircle2 className="text-brand-blue flex-shrink-0 mt-0.5" size={20} />
                    <span className="font-medium text-slate-700">{mod}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Careers */}
            <div>
              <h2 className="text-3xl font-bold text-brand-dark mb-6 font-heading">Career Opportunities</h2>
              <div className="flex flex-wrap gap-3">
                {data.careers.map((career: string, i: number) => (
                  <span key={i} className="bg-slate-200 text-slate-700 px-4 py-2 rounded-full font-semibold text-sm">
                    {career}
                  </span>
                ))}
              </div>
            </div>
            {/* Eligibility */}
            <div>
              <h2 className="text-3xl font-bold text-brand-dark mb-6 font-heading">Who Is This For?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.eligibility.map((el: string, i: number) => (
                  <div key={i} className="flex items-start space-x-3 bg-white p-4 rounded-xl border border-slate-200">
                    <CheckCircle2 className="text-brand-blue flex-shrink-0 mt-0.5" size={20} />
                    <span className="font-medium text-slate-700">{el}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 space-y-8">
            {/* Certifications / Pricing Card */}
            <div className="sticky top-24">
              {(() => {
                const hasPrices = data.vouchers && data.vouchers.some((v: any) => /\d/.test(v.discounted) && !v.discounted.toLowerCase().includes('whatsapp'));
                
                return (
                  <>
                    <h3 className="text-xl font-bold font-heading text-brand-dark mb-5 flex items-center">
                      <Award className="text-brand-blue mr-3" size={24} />
                      {hasPrices ? "Discounted Vouchers" : "Available Certifications"}
                    </h3>
                    <div className="border-t border-slate-200">
                      {data.vouchers.map((v: any, i: number) => {
                        return (
                          <div key={i} className="py-4 border-b border-slate-200 flex items-start group">
                            <div className="mt-0.5 mr-4 shrink-0 w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                              <CheckCircle2 size={16} />
                            </div>
                            <div className="flex flex-col justify-center flex-grow">
                              <h4 className="font-bold text-slate-800 text-[1.05rem] leading-snug group-hover:text-brand-blue transition-colors duration-300">{v.name}</h4>
                              
                              {hasPrices && (
                                <div className="mt-3 flex items-center justify-between bg-brand-blue/5 px-4 py-3 rounded-lg border border-brand-blue/20 shadow-sm">
                                  <div className="flex flex-col">
                                    <div className="flex items-center space-x-2 mb-1">
                                      <span className="text-slate-500 line-through decoration-red-500/70 text-xs font-semibold">{v.original}</span>
                                      <span className="bg-red-100 text-red-600 text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">Discounted</span>
                                    </div>
                                    <span className="text-brand-dark font-bold uppercase tracking-wider text-[11px]">Our Price</span>
                                  </div>
                                  <span className="text-xl font-extrabold text-brand-blue">{v.discounted}</span>
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    {hasPrices ? (
                      <a href="https://wa.me/919205531284" className="mt-6 flex items-center justify-center w-full bg-[#25D366] text-white py-4 rounded-xl font-bold hover:bg-[#20bd5a] transition-colors shadow-lg shadow-[#25D366]/20">
                        <i className="fab fa-whatsapp text-xl mr-2"></i> Get Discount on WhatsApp
                      </a>
                    ) : (
                      <a href="https://wa.me/919205531284" className="mt-6 flex items-center justify-center w-full bg-brand-blue text-white py-4 rounded-xl font-bold hover:bg-[#3f38b8] transition-colors shadow-lg shadow-brand-blue/20">
                        <i className="fab fa-whatsapp text-xl mr-2"></i> Inquire on WhatsApp
                      </a>
                    )}
                  </>
                );
              })()}
            </div>
          </div>

        </div>
      </div>

    </main>
  );
}
