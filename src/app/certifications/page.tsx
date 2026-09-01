"use client";
import React from 'react';
import Link from 'next/link';
import BrandMarquee from '../../components/BrandMarquee';
import WhyCertify from '../../components/WhyCertify';

const CertificationsPage = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Hero Banner */}
      <div className="bg-slate-50 pt-56 pb-20 border-b border-slate-200 relative overflow-hidden flex items-center justify-center min-h-[75vh]">
        {/* Background grids/elements */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none z-0"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-sky/10 rounded-full blur-[100px] pointer-events-none z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-brand-dark mb-6 font-heading tracking-tight">
              The Global <span className="text-brand-blue">Certification</span> Catalog
            </h1>
            <p className="text-xl text-slate-500 font-sans leading-relaxed mb-6">
              Browse our complete catalog of globally recognised certifications. We provide heavily discounted exam vouchers and authorized training for the world's leading technology providers.
            </p>

            {/* Inline Stats Hook */}
            <div className="flex items-center justify-center gap-8 md:gap-16 pt-6 border-t border-slate-200/60 max-w-2xl mx-auto mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-blue mb-1 font-heading">50+</div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Instructors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-blue mb-1 font-heading">10k+</div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Careers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-blue mb-1 font-heading">98%</div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Pass Rate</div>
              </div>
            </div>

            {/* Integrated Authorized Training Logos */}
            <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
              <p className="text-center text-slate-400 font-sans text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
                Authorized Training & Vouchers For
              </p>
              <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
                {[
                  { name: "AWS", url: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/amazonaws.svg" },
                  { name: "Microsoft", url: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoft.svg" },
                  { name: "Salesforce", url: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/salesforce.svg" },
                  { name: "Google Cloud", url: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/googlecloud.svg" },
                  { name: "Cisco", url: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/cisco.svg" }
                ].map((provider, i) => (
                  <div
                    key={i}
                    className="opacity-40 hover:opacity-100 transition-all duration-300 flex items-center justify-center grayscale hover:grayscale-0"
                  >
                    <img 
                      src={provider.url} 
                      alt={provider.name} 
                      className="h-6 md:h-7 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
      
      <BrandMarquee />

      <section id="certifications" className="pt-8 pb-16 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-dark mb-4 font-heading">
              Browse by <span className="text-brand-blue">Provider</span>
            </h2>
            <p className="text-lg text-slate-500 font-sans max-w-2xl mx-auto">
              Select a technology provider to view all available certification paths and discounted vouchers.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {[
              { name: 'AWS', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/amazonaws.svg', link: '/certifications/aws' },
              { name: 'Microsoft Azure', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoftazure.svg', link: '/certifications/microsoft' },
              { name: 'Google Cloud', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/googlecloud.svg', link: '/certifications/google-cloud' },
              { name: 'Cisco', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/cisco.svg', link: '/certifications/cisco' },
              { name: 'CompTIA', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/comptia.svg', link: '/certifications/comptia' },
              { name: 'Oracle', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/oracle.svg', link: '/certifications/oracle' },
              { name: 'Salesforce', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/salesforce.svg', link: '/certifications/salesforce' },
              { name: 'VMware', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/vmware.svg', link: '/certifications/vmware' },
              { name: 'Red Hat', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/redhat.svg', link: '/certifications/red-hat' },
              { name: 'IBM', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/ibm.svg', link: '/certifications/ibm' },
              { name: 'PMI', iconUrl: '', icon: 'fas fa-project-diagram', link: '/certifications/pmi' },
              { name: 'ISACA & Fortinet', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/fortinet.svg', link: '/certifications/isaca-fortinet' },
              { name: 'Palo Alto Networks', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/paloaltonetworks.svg', link: '/certifications/palo-alto' },
              { name: 'ITIL', iconUrl: '', icon: 'fas fa-cogs', link: '/certifications/itil' },
              { name: 'AIGP', iconUrl: '', icon: 'fas fa-robot', link: '/certifications/aigp' },
              { name: 'Claude Certifications', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/anthropic.svg', link: '/certifications/claude' }
            ].map((cert, index) => (
              <Link href={cert.link} key={index} className="group p-6 flex flex-col items-center text-center transition-transform hover:-translate-y-1 bg-slate-50 hover:bg-white border border-transparent hover:border-slate-200 hover:shadow-md rounded-2xl duration-300">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-colors bg-white shadow-sm group-hover:bg-brand-blue/10`}>
                  {cert.iconUrl ? (
                    <img src={cert.iconUrl} alt={cert.name} className="w-8 h-8 object-contain opacity-70 group-hover:opacity-100 transition-opacity" style={{ filter: 'brightness(0) saturate(100%) invert(31%) sepia(87%) saturate(2891%) hue-rotate(233deg) brightness(98%) contrast(92%)' }} />
                  ) : (
                    <i className={`${cert.icon} text-2xl text-brand-blue`}></i>
                  )}
                </div>
                <h3 className="text-[15px] font-bold text-brand-dark font-heading group-hover:text-brand-blue transition-colors">{cert.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <WhyCertify />
      
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
