"use client";
import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import ScrollHighlightText from '../../../../components/ScrollHighlightText';
import { certificationDetails } from '../../certificationDetails';
import { CheckCircle2, Clock, FileText, DollarSign, Info } from 'lucide-react';

export default function CertificationPage() {
  const params = useParams();
  const provider = params.provider as string;
  const cert = params.cert as string;

  // Format the name nicely from the slug
  const formattedProvider = provider.charAt(0).toUpperCase() + provider.slice(1);
  const formattedCert = cert.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  const details = certificationDetails[cert];
  
  const displayName = details?.name || `${formattedCert} Certification`;
  const description = details?.description || `Master the skills required to pass the ${formattedCert} exam on your first attempt. Get personalized training and discounted exam vouchers.`;

  return (
    <main className="min-h-screen bg-bg-dark">
      
      {/* Hero */}
      <div className="bg-bg-dark pt-32 pb-24 relative overflow-hidden">

        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pointer-events-none mb-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold font-heading text-white mb-6 leading-tight">
              {displayName}
            </h1>
            <p className="text-xl text-slate-300 font-sans leading-relaxed mb-8">
              {description}
            </p>
            <div className="flex flex-wrap gap-4 pointer-events-auto">
              <a href="https://wa.me/9392828155?text=Hello!%20Can%20i%20get%20more%20info%20on%20this%20global%20certifications%20%3F" className="bg-whatsapp text-white px-8 py-4 rounded-xl font-bold font-sans hover:bg-green-600 transition shadow-[0_0_30px_rgba(0,0,0,0.7)] shadow-green-900/20 flex items-center">
                <i className="fab fa-whatsapp text-xl mr-2"></i> Chat for Best Price
              </a>
            </div>
          </div>
        </div>
      </div>

      <ScrollHighlightText text={`Prepare for the ${displayName} with our rigorously tested curriculum, designed to simulate the actual exam environment and ensure your absolute success.`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {details ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 font-heading">Curriculum</h2>
                <div className="space-y-4">
                  {details.curriculum.map((item: any, i: number) => (
                    <div key={i} className="flex items-start space-x-4 bg-bg-dark p-6 rounded-2xl border border-slate-800 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                      <div className="bg-brand-blue/10 p-3 rounded-lg text-brand-blue mt-1">
                        <CheckCircle2 size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-bg-dark p-8 rounded-3xl border border-slate-800 shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-6 font-heading border-b pb-4">Exam Details</h3>
                <ul className="space-y-6">
                  <li className="flex items-start space-x-4">
                    <Clock className="text-brand-blue mt-1" size={24} />
                    <div>
                      <span className="block font-bold text-white">Duration</span>
                      <span className="text-slate-400">{details.examDetails.duration}</span>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4">
                    <FileText className="text-brand-blue mt-1" size={24} />
                    <div>
                      <span className="block font-bold text-white">Format</span>
                      <span className="text-slate-400">{details.examDetails.format}</span>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4">
                    <DollarSign className="text-brand-blue mt-1" size={24} />
                    <div>
                      <span className="block font-bold text-white">Cost</span>
                      <span className="text-slate-400">{details.examDetails.cost}</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-bg-dark p-8 rounded-3xl text-white shadow-xl">
                <div className="flex items-center space-x-3 mb-4">
                  <Info className="text-brand-sky" size={28} />
                  <h3 className="text-xl font-bold font-heading">Prerequisites</h3>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  {details.prerequisites}
                </p>
                <a href="https://wa.me/9392828155?text=Hello!%20Can%20i%20get%20more%20info%20on%20this%20global%20certifications%20%3F" className="mt-8 inline-block w-full text-center bg-brand-blue text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-sky transition">
                  Request Full Syllabus
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-bg-dark p-12 rounded-3xl border border-slate-800 shadow-xl text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Curriculum & Details</h2>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">This dedicated certification page is dynamic and will feature the complete syllabus, exam blueprint, and prerequisites for {displayName}.</p>
            <a href="https://wa.me/9392828155?text=Hello!%20Can%20i%20get%20more%20info%20on%20this%20global%20certifications%20%3F" className="inline-block bg-whatsapp text-white px-8 py-4 rounded-xl font-bold hover:bg-green-600 transition">
              Request Full Syllabus
            </a>
          </div>
        )}
      </div>
    </main>
  );
}

