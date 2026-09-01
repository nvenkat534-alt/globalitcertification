// @ts-nocheck
import React from 'react';
import Link from 'next/link';
import FadeIn from './FadeIn';

const Certifications = () => {
  const topCerts = [
    { name: 'AWS', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/amazonaws.svg', link: '/certifications/aws' },
    { name: 'Microsoft Azure', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoftazure.svg', link: '/certifications/microsoft' },
    { name: 'Google Cloud', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/googlecloud.svg', link: '/certifications/google-cloud' },
    { name: 'Cisco', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/cisco.svg', link: '/certifications/cisco' },
    { name: 'CompTIA', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/comptia.svg', link: '/certifications/comptia' },
    { name: 'Oracle', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/oracle.svg', link: '/certifications/oracle' },
    { name: 'Salesforce', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/salesforce.svg', link: '/certifications/salesforce' },
    { name: 'VMware', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/vmware.svg', link: '/certifications/vmware' },
    { name: 'IBM', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/ibm.svg', link: '/certifications/ibm' },
    { name: 'Red Hat', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/redhat.svg', link: '/certifications/red-hat' }
  ];

  return (
    <section id="certifications" className="pt-14 pb-10 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-10">
          <h2 className="text-4xl font-bold text-brand-dark mb-4 font-heading">
            Top <span className="text-brand-blue">Certifications</span> We Offer
          </h2>
          <p className="text-lg text-slate-500 font-sans max-w-2xl mx-auto">
            Advance your career with globally recognised certifications
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
          {topCerts.map((cert, index) => (
            <FadeIn key={index} delay={(index % 5) * 50}>
              <Link href={cert.link} className="group p-6 flex flex-col items-center text-center transition-transform hover:scale-105">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-colors ${cert.isMore ? 'bg-brand-blue text-white shadow-md shadow-brand-blue/30' : 'bg-slate-50 group-hover:bg-brand-blue/10'}`}>
                  {cert.iconUrl ? (
                    <img src={cert.iconUrl} alt={cert.name} className="w-8 h-8 object-contain opacity-70 group-hover:opacity-100 transition-opacity" style={!cert.isMore ? { filter: 'brightness(0) saturate(100%) invert(31%) sepia(87%) saturate(2891%) hue-rotate(233deg) brightness(98%) contrast(92%)' } : {}} />
                  ) : (
                    <i className={`${cert.icon} text-2xl ${cert.isMore ? 'text-white' : 'text-brand-blue'}`}></i>
                  )}
                </div>
                <h3 className="text-[15px] font-bold text-brand-dark font-heading group-hover:text-brand-blue transition-colors">{cert.name}</h3>
              </Link>
            </FadeIn>
          ))}
        </div>
        
        <div className="text-center mt-4">
          <Link href="/certifications" className="inline-flex items-center text-brand-blue font-bold font-sans hover:underline">
            View All Certification Paths <i className="fas fa-arrow-right ml-2 text-sm"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
