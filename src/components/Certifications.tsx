// @ts-nocheck
import React from 'react';
import Link from 'next/link';
import FadeIn from './FadeIn';

const Certifications = () => {
  const topCerts = [
    { name: 'AWS', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg', link: '/certifications/aws' },
    { name: 'Microsoft Azure', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg', link: '/certifications/microsoft' },
    { name: 'Google Cloud', iconUrl: 'https://www.google.com/favicon.ico', link: '/certifications/google-cloud', isLarge: true },
    { name: 'Cisco', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg', link: '/certifications/cisco' },
    { name: 'CompTIA', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/comptia.svg', link: '/certifications/comptia' },
    { name: 'Oracle', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg', link: '/certifications/oracle' },
    { name: 'Salesforce', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg', link: '/certifications/salesforce' },
    { name: 'VMware', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Vmware.svg', link: '/certifications/vmware' },
    { name: 'IBM', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg', link: '/certifications/ibm' }
  ];

  return (
    <section id="certifications" className="pt-8 sm:pt-12 lg:pt-14 pb-6 sm:pb-8 lg:pb-10 bg-[#020b16] relative z-10">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-6 sm:mb-8 lg:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 lg:mb-4 font-heading">
            Top <span className="text-brand-blue">Certifications</span> We Offer
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-400 font-sans max-w-2xl mx-auto">
            Advance your career with globally recognised certifications
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
          {topCerts.map((cert, index) => (
            <FadeIn key={index} delay={(index % 5) * 50}>
              <Link href={cert.link} className="group flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-1">
                <div className="w-20 sm:w-24 h-20 sm:h-24 rounded-xl sm:rounded-2xl bg-white shadow-[0_0_25px_rgba(16,24,40,0.18)] border border-slate-200/80 flex items-center justify-center mb-2 sm:mb-4 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(91,108,255,0.25)] group-hover:border-brand-blue/40">
                  {cert.iconUrl ? (
                    <img src={cert.iconUrl} alt={cert.name} className={`object-contain transition-transform duration-300 group-hover:scale-105 ${cert.isLarge ? 'w-14 sm:w-16 h-14 sm:h-16' : 'w-10 sm:w-12 h-10 sm:h-12'}`} />
                  ) : (
                    <i className={`${cert.icon} text-lg sm:text-2xl text-brand-blue`}></i>
                  )}
                </div>
                <h3 className="text-[12px] sm:text-[15px] font-bold text-white font-heading group-hover:text-brand-blue transition-colors line-clamp-2 px-0.5">{cert.name}</h3>
              </Link>
            </FadeIn>
          ))}
          <FadeIn delay={450}>
            <Link href="/certifications" className="group flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-1">
              <div className="w-20 sm:w-24 h-20 sm:h-24 rounded-xl sm:rounded-2xl bg-white shadow-[0_0_25px_rgba(16,24,40,0.18)] border border-slate-200/80 flex items-center justify-center mb-2 sm:mb-4 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(91,108,255,0.25)] group-hover:border-brand-blue/40">
                <i className="fas fa-arrow-right text-lg sm:text-2xl text-brand-blue"></i>
              </div>
              <h3 className="text-[12px] sm:text-[15px] font-bold text-white font-heading group-hover:text-brand-blue transition-colors">More</h3>
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
