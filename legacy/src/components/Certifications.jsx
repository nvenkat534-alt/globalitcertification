import React from 'react';
import { Link } from 'react-router-dom';
import FadeIn from './FadeIn';

const Certifications = () => {
  const certs = [
    { name: 'AWS', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/amazonaws.svg', link: '/aws', isInternal: true },
    { name: 'Microsoft Azure', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoftazure.svg', link: '/microsoft', isInternal: true },
    { name: 'Google Cloud', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/googlecloud.svg', link: '/certifications/google-cloud', isInternal: true },
    { name: 'Cisco', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/cisco.svg', link: '/certifications/cisco', isInternal: true },
    { name: 'CompTIA', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/comptia.svg', link: '/certifications/comptia', isInternal: true },
    { name: 'Oracle', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/oracle.svg', link: '/certifications/oracle', isInternal: true },
    { name: 'Salesforce', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/salesforce.svg', link: '/certifications/salesforce', isInternal: true },
    { name: 'VMware', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/vmware.svg', link: '/certifications/vmware', isInternal: true },
    { name: 'Red Hat', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/redhat.svg', link: '/certifications/red-hat', isInternal: true },
    { name: 'IBM', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/ibm.svg', link: '/certifications/ibm', isInternal: true },
    { name: 'PMI', textLogo: 'PMI', isText: true, link: '/certifications/pmi', isInternal: true },
    { name: 'ISACA & Fortinet', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/fortinet.svg', link: '/certifications/isaca-fortinet', isInternal: true },
    { name: 'Palo Alto Networks', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/paloaltonetworks.svg', link: '/certifications/palo-alto', isInternal: true },
    { name: 'ITIL', textLogo: 'ITIL', isText: true, link: '/certifications/itil', isInternal: true },
    { name: 'AIGP', textLogo: 'AIGP', isText: true, link: '/certifications/aigp', isInternal: true },
    { name: 'Claude Certifications', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/anthropic.svg', link: '/certifications/claude', isInternal: true }
  ];

  return (
    <section id="certifications" className="py-24 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-dark mb-4 font-heading">Global Certifications</h2>
          <p className="text-lg text-slate-500 font-sans max-w-2xl mx-auto">Choose from top globally recognised certification providers to elevate your career to the next level.</p>
        </FadeIn>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {certs.map((cert, index) => {
            const content = (
              <>
                <div className="w-16 h-16 bg-brand-blue/5 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-brand-blue">
                  {cert.isText ? (
                    <span className="font-extrabold font-heading text-xl text-brand-blue transition-colors duration-300 group-hover:text-white tracking-wider">{cert.textLogo}</span>
                  ) : cert.isImage ? (
                    <img src={cert.iconUrl} alt={cert.name} className="w-8 h-8 object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert" />
                  ) : (
                    <div 
                      className="w-8 h-8 bg-brand-blue transition-colors duration-300 group-hover:bg-white"
                      style={{
                        maskImage: `url(${cert.iconUrl})`,
                        WebkitMaskImage: `url(${cert.iconUrl})`,
                        maskSize: 'contain',
                        WebkitMaskSize: 'contain',
                        maskRepeat: 'no-repeat',
                        WebkitMaskRepeat: 'no-repeat',
                        maskPosition: 'center',
                        WebkitMaskPosition: 'center'
                      }}
                    ></div>
                  )}
                </div>
                <span className="font-bold font-heading text-brand-dark text-lg transition-colors">{cert.name}</span>
                <span className="text-sm font-sans font-medium text-brand-blue mt-2 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">Explore &rarr;</span>
              </>
            );
            
            const classes = "group h-full bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center hover:shadow-xl hover:border-brand-blue/30 transition-all duration-300 text-center";

            return (
              <FadeIn key={index} delay={(index % 4) * 100}>
                {cert.isInternal ? (
                  <Link to={cert.link} className={classes}>
                    {content}
                  </Link>
                ) : (
                  <a href={cert.link} className={classes}>
                    {content}
                  </a>
                )}
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
