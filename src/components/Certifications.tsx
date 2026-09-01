// @ts-nocheck
import React from 'react';
import Link from 'next/link';
import FadeIn from './FadeIn';

const Certifications = () => {
  const topCerts = [
    { name: 'AWS', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg', link: '/certifications/aws' },
    { name: 'Microsoft Azure', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg', link: '/certifications/microsoft' },
    { name: 'Google Cloud', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg', link: '/certifications/google-cloud', isLarge: true },
    { name: 'Cisco', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg', link: '/certifications/cisco' },
    { name: 'CompTIA', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/comptia.svg', link: '/certifications/comptia' },
    { name: 'Oracle', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg', link: '/certifications/oracle' },
    { name: 'Salesforce', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg', link: '/certifications/salesforce' },
    { name: 'VMware', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Vmware.svg', link: '/certifications/vmware' },
    { name: 'IBM', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg', link: '/certifications/ibm' }
  ];

  return (
    <section id="certifications" className="pt-14 pb-10 bg-[#020b16] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-10">
          <h2 className="text-4xl font-bold text-white mb-4 font-heading">
            Top <span className="text-[#5b6cff]">Certifications</span> We Offer
          </h2>
          <p className="text-lg text-slate-400 font-sans max-w-2xl mx-auto">
            Advance your career with globally recognised certifications
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
          {topCerts.map((cert, index) => (
            <FadeIn key={index} delay={(index % 5) * 50}>
              <Link href={cert.link} className="group flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-1">
                <div className="w-24 h-24 rounded-2xl bg-white shadow-[0_0_25px_rgba(16,24,40,0.18)] border border-slate-200/80 flex items-center justify-center mb-4 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(91,108,255,0.25)] group-hover:border-[#5b6cff]/40">
                  {cert.iconUrl ? (
                    <img src={cert.iconUrl} alt={cert.name} className={`object-contain transition-transform duration-300 group-hover:scale-105 ${cert.isLarge ? 'w-16 h-16' : 'w-12 h-12'}`} />
                  ) : (
                    <i className={`${cert.icon} text-2xl text-[#5b6cff]`}></i>
                  )}
                </div>
                <h3 className="text-[15px] font-bold text-white font-heading group-hover:text-[#5b6cff] transition-colors">{cert.name}</h3>
              </Link>
            </FadeIn>
          ))}
          <FadeIn delay={450}>
            <Link href="/certifications" className="group flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-1">
              <div className="w-24 h-24 rounded-2xl bg-white shadow-[0_0_25px_rgba(16,24,40,0.18)] border border-slate-200/80 flex items-center justify-center mb-4 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(91,108,255,0.25)] group-hover:border-[#5b6cff]/40">
                <i className="fas fa-arrow-right text-2xl text-[#5b6cff]"></i>
              </div>
              <h3 className="text-[15px] font-bold text-white font-heading group-hover:text-[#5b6cff] transition-colors">More</h3>
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
