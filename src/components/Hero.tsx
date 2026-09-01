"use client";
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, animate, useInView } from 'framer-motion';

const Counter = ({ from = 0, to, duration = 2 }: { from?: number, to: number, duration?: number }) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, { duration, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, count, to, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity1 = useTransform(scrollY, [0, 500], [1, 0]);

  const companyLogos = [
    { name: "AWS", url: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/amazonaws.svg" },
    { name: "Microsoft Azure", url: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoftazure.svg" },
    { name: "Google Cloud", url: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/googlecloud.svg" },
    { name: "Cisco", url: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/cisco.svg" },
    { name: "CompTIA", url: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/comptia.svg" },
    { name: "Oracle", url: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/oracle.svg" },
    { name: "Salesforce", url: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/salesforce.svg" },
    { name: "VMware", url: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/vmware.svg" },
    { name: "Red Hat", url: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/redhat.svg" },
    { name: "IBM", url: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/ibm.svg" },
    { name: "PMI", url: "https://invalid.url/fallback.svg" },
    { name: "ISACA & Fortinet", url: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/fortinet.svg" },
    { name: "Palo Alto Networks", url: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/paloaltonetworks.svg" },
    { name: "ITIL", url: "https://invalid.url/fallback.svg" },
    { name: "AIGP", url: "https://invalid.url/fallback.svg" },
    { name: "Claude Certifications", url: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/anthropic.svg" }
  ];
  const marqueeLogos = [...companyLogos, ...companyLogos];

  return (
    <section className="bg-slate-50 pt-32 pb-0 overflow-hidden relative border-b border-slate-200 flex flex-col min-h-screen">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none z-0"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-sky/10 rounded-full blur-[100px] pointer-events-none z-0"></div>

      {/* Marquee Background */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-[0.05] pointer-events-none flex flex-col justify-around -rotate-6 scale-125">
        {[...Array(5)].map((_, rowIndex) => (
          <div key={rowIndex} className="relative flex overflow-hidden py-4">
            <div className="animate-marquee whitespace-nowrap flex items-center">
              {marqueeLogos.map((company, index) => (
                <div key={index} className="mx-8 md:mx-16 flex items-center justify-center min-w-[150px] md:min-w-[250px]">
                  <img 
                    src={company.url} 
                    alt={company.name} 
                    className="h-20 md:h-32 w-auto object-contain grayscale"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <span className="hidden text-5xl md:text-7xl font-bold font-heading text-slate-800 tracking-tight">
                    {company.name}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center py-4">
              {marqueeLogos.map((company, index) => (
                <div key={index} className="mx-8 md:mx-16 flex items-center justify-center min-w-[150px] md:min-w-[250px]">
                  <img 
                    src={company.url} 
                    alt={company.name} 
                    className="h-20 md:h-32 w-auto object-contain grayscale"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <span className="hidden text-5xl md:text-7xl font-bold font-heading text-slate-800 tracking-tight">
                    {company.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col flex-grow justify-center pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mb-8">
          <div className="flex flex-col items-center justify-center w-full mt-4 lg:mt-0 max-w-4xl mx-auto">
            
            <motion.div 
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              style={{ y: y1, opacity: opacity1 }}
              className="w-full text-center relative z-20 flex flex-col items-center"
            >
              <div className="inline-block px-4 py-2 bg-brand-blue/10 border border-brand-blue/20 rounded-full text-xs font-bold text-brand-blue mb-6 font-heading tracking-widest uppercase">
                The Global Standard in IT Certifications
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight font-heading text-brand-dark tracking-tight">
                Get Certified.<br />
                In Your <span className="text-brand-blue">First Attempt.</span>
              </h1>
              
              <div className="flex items-center justify-center space-x-2 text-lg md:text-xl text-slate-700 mb-6 font-semibold">
                <i className="fas fa-check-circle text-[#25D366]"></i>
                <p>Learn from Experts. Practice Smart. Pass with Confidence.</p>
              </div>

              {/* Feature Icons Grid (from image) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6 w-full">
                <div className="flex flex-col items-center text-center p-3 hover:bg-brand-blue/5 rounded-xl transition-colors cursor-default">
                  <div className="mb-2">
                    <i className="fas fa-globe text-2xl text-brand-blue"></i>
                  </div>
                  <span className="text-xs font-bold text-slate-800">Globally Recognised</span>
                  <span className="text-[10px] text-slate-500">Top Vendor Certifications</span>
                </div>
                <div className="flex flex-col items-center text-center p-3 hover:bg-brand-blue/5 rounded-xl transition-colors cursor-default">
                  <div className="mb-2">
                    <i className="fas fa-chalkboard-teacher text-2xl text-brand-blue"></i>
                  </div>
                  <span className="text-xs font-bold text-slate-800">Expert-Led Training</span>
                  <span className="text-[10px] text-slate-500">Hands-on & Practical</span>
                </div>
                <div className="flex flex-col items-center text-center p-3 hover:bg-brand-blue/5 rounded-xl transition-colors cursor-default">
                  <div className="mb-2">
                    <i className="fas fa-ticket-alt text-2xl text-brand-blue"></i>
                  </div>
                  <span className="text-xs font-bold text-slate-800">Exam Vouchers</span>
                  <span className="text-[10px] text-slate-500">Included</span>
                </div>
                <div className="flex flex-col items-center text-center p-3 hover:bg-brand-blue/5 rounded-xl transition-colors cursor-default">
                  <div className="mb-2">
                    <i className="fas fa-shield-alt text-2xl text-brand-blue"></i>
                  </div>
                  <span className="text-xs font-bold text-slate-800">Success Guarantee</span>
                  <span className="text-[10px] text-slate-500">Assistance Included</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
                <a href="/certifications" className="bg-brand-blue text-white px-10 py-4 rounded-xl font-heading font-semibold text-lg hover:bg-blue-700 transition shadow-sm flex items-center justify-center w-full sm:w-auto relative z-30">
                  Explore Certifications <i className="fas fa-arrow-right ml-2"></i>
                </a>
                <a href="https://wa.me/919205531284" className="bg-white text-brand-dark border-2 border-slate-200 px-10 py-4 rounded-xl font-heading font-semibold text-lg hover:bg-slate-50 hover:border-slate-300 transition flex items-center justify-center w-full sm:w-auto relative z-30 shadow-sm">
                  <i className="fab fa-whatsapp mr-2 text-[#25D366] text-xl"></i> Chat with an Expert
                </a>
              </div>

              {/* Integrated Authorized Training Logos - Reduced Gap, No BG/Border */}
              <div className="mt-8 w-full max-w-3xl flex flex-col items-center">
                <p className="text-center text-slate-400 font-sans text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
                  Authorized Training & Vouchers For
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                  {[
                    { name: "AWS", url: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/amazonaws.svg" },
                    { name: "Microsoft", url: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoft.svg" },
                    { name: "Salesforce", url: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/salesforce.svg" },
                    { name: "Google Cloud", url: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/googlecloud.svg" },
                    { name: "Cisco", url: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/cisco.svg" }
                  ].map((provider, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + (i * 0.1), duration: 0.5 }}
                      className="opacity-60 hover:opacity-100 transition-all duration-300 flex items-center justify-center grayscale hover:grayscale-0"
                    >
                      <img 
                        src={provider.url} 
                        alt={provider.name} 
                        className="h-8 md:h-10 w-auto object-contain"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>

            </motion.div>

          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;
