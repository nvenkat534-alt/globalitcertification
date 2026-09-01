"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Banner1 = () => {
  const certCards = [
    { name: "aws", subtitle: "Certified", img: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
    { name: "Microsoft Azure", subtitle: "Certified", img: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg" },
    { name: "CISCO", subtitle: "Certified", img: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" },
    { name: "PMI PMP", subtitle: "Certified", img: "" },
    { name: "ISACA", subtitle: "Certified", img: "" },
    { name: "+ More", subtitle: "Top Brands", img: "" }
  ];

  const marqueeLogos = [
    { name: "AWS", img: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
    { name: "Microsoft", img: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg" },
    { name: "Salesforce", img: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" },
    { name: "Google Cloud", img: "https://www.google.com/favicon.ico" },
    { name: "Cisco", img: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center gap-4 pt-4 pb-0 px-3 sm:px-6 lg:px-12 relative z-10 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-7 mt-0 lg:mt-0">
        
        {/* Left Column */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left relative z-20">
          <div className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 border border-brand-blue/40 rounded-full text-[8px] sm:text-[10px] font-bold text-slate-300 mb-2 sm:mb-4 tracking-widest uppercase bg-brand-blue/30">
            THE GLOBAL STANDARD IN IT CERTIFICATIONS
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight sm:leading-[0.96] font-heading text-white tracking-tight">
            Get Certified.<br />
            In Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5b6cff] to-[#5b6cff]">First Attempt.</span>
          </h1>
          
          <div className="flex items-center space-x-2 text-sm sm:text-base text-slate-300 mb-3 sm:mb-5 font-medium">
            <div className="w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-brand-blue flex items-center justify-center flex-shrink-0">
              <i className="fas fa-check text-white text-[8px] sm:text-[10px]"></i>
            </div>
            <p className="text-sm sm:text-base">Learn from Experts. Practice Smart. Pass with Confidence.</p>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-5 w-full max-w-lg">
            <div className="flex items-center space-x-2 text-xs sm:text-sm">
              <i className="fas fa-globe text-brand-sky text-base sm:text-lg w-4 sm:w-5"></i>
              <div className="flex flex-col">
                <span className="font-bold text-white text-[11px] sm:text-xs">Globally Recognised</span>
                <span className="text-[9px] sm:text-[10px] text-slate-400">Top Vendor Certifications</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <i className="fas fa-chalkboard-teacher text-brand-sky text-lg w-5"></i>
              <div className="flex flex-col">
                <span className="font-bold text-white text-xs">Expert-Led Training</span>
                <span className="text-[10px] text-slate-400">Hands-on & Practical</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <i className="fas fa-ticket-alt text-brand-sky text-lg w-5"></i>
              <div className="flex flex-col">
                <span className="font-bold text-white text-xs">Exam Vouchers</span>
                <span className="text-[10px] text-slate-400">Included</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <i className="fas fa-shield-alt text-brand-sky text-lg w-5"></i>
              <div className="flex flex-col">
                <span className="font-bold text-white text-xs">Success Guarantee</span>
                <span className="text-[10px] text-slate-400">Pay After You Pass</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 w-full sm:w-auto">
            <a href="/certifications" className="bg-[#5b6cff] text-white px-4 sm:px-7 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-heading font-semibold text-sm sm:text-base hover:bg-[#5b6cff] transition flex items-center justify-center">
              Explore Certifications <i className="fas fa-arrow-right ml-2 text-xs sm:text-sm"></i>
            </a>
            <a href="#" className="bg-transparent text-white border border-white/20 px-4 sm:px-7 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-heading font-semibold text-sm sm:text-base hover:bg-white/5 transition flex items-center justify-center">
              <i className="fas fa-play mr-2 text-xs sm:text-sm"></i> <span className="hidden sm:inline">Watch How It Works</span><span className="sm:hidden">How It Works</span>
            </a>
          </div>
        </div>

        {/* Right Column - Cards */}
        <div className="w-full lg:w-1/2 relative z-20 flex justify-center lg:justify-end px-2 sm:px-0">
          <div className="grid grid-cols-2 gap-2 sm:gap-3 max-w-[460px] w-full">
            {certCards.map((card, i) => (
              <div key={i} className="group relative rounded-lg sm:rounded-xl overflow-hidden bg-[#0A1128]/80 border border-brand-blue/30 backdrop-blur-md p-2 sm:p-4 flex flex-col items-center justify-center aspect-[5/3] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(91,108,255,0.35)] cursor-pointer hover:border-brand-sky/50">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {card.img ? (
                  <div className="h-10 w-full mb-1.5 flex items-center justify-center relative z-10">
                    <img src={card.img} alt={card.name} className="max-h-full max-w-[80%] object-contain transition-all duration-300" onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }} />
                    <span className="hidden text-sm font-bold text-white text-center">{card.name}</span>
                  </div>
                ) : (
                  <div className="h-10 w-full mb-1.5 flex items-center justify-center relative z-10">
                    <span className="text-lg font-bold text-brand-sky">{card.name}</span>
                  </div>
                )}
                <span className="text-[11px] font-medium text-slate-300 relative z-10">{card.subtitle}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee Section */}
      <div className="w-full flex flex-col items-center relative z-20 pt-0 pb-0 px-3 sm:px-0">
        <p className="text-center text-slate-300 font-sans text-[7px] sm:text-[9px] font-bold tracking-[0.16em] uppercase mb-4 sm:mb-6">
          Trusted by professionals from top companies
        </p>

        <div className="w-full overflow-hidden bg-transparent">
          <div className="animate-marquee flex w-max items-center gap-6 sm:gap-12 md:gap-16 lg:gap-20 whitespace-nowrap py-1">
            {[...marqueeLogos, ...marqueeLogos, ...marqueeLogos].map((company, index) => (
              <div key={`${company.name}-${index}`} className="flex items-center justify-center shrink-0 opacity-80">
                <img
                  src={company.img}
                  alt={company.name}
                  className="h-5 sm:h-6 md:h-7 lg:h-8 w-auto object-contain brightness-0 invert opacity-60 transition-opacity duration-300 hover:opacity-100"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <span className="hidden text-sm font-bold text-slate-300">{company.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

const Banner2 = () => {
  const companyLogos = [
    { name: "AWS", url: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
    { name: "Microsoft", url: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg" },
    { name: "Salesforce", url: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" },
    { name: "Google Cloud", url: "https://www.google.com/favicon.ico" },
    { name: "Cisco", url: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" }
  ];
  const marqueeLogos = [...companyLogos, ...companyLogos, ...companyLogos, ...companyLogos];

  return (
    <div className="w-full h-full flex flex-col justify-center pt-32 pb-12 overflow-hidden relative">
      {/* Marquee Background (Poping) */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-20 pointer-events-none flex flex-col justify-around -rotate-6 scale-125">
        {[...Array(5)].map((_, rowIndex) => (
          <div key={rowIndex} className="relative flex overflow-hidden py-4">
            <div className="animate-marquee whitespace-nowrap flex items-center">
              {marqueeLogos.map((company, index) => (
                <div key={index} className="mx-8 md:mx-16 flex items-center justify-center min-w-[150px] md:min-w-[250px]">
                  <img 
                    src={company.url} 
                    alt={company.name} 
                    className="h-20 md:h-32 w-auto object-contain drop-shadow-[0_0_15px_rgba(91,108,255,0.3)]"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <span className="hidden text-5xl md:text-7xl font-bold font-heading text-slate-700 tracking-tight">
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
                    className="h-20 md:h-32 w-auto object-contain drop-shadow-[0_0_15px_rgba(91,108,255,0.3)]"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <span className="hidden text-5xl md:text-7xl font-bold font-heading text-slate-700 tracking-tight">
                    {company.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mb-4">
        <div className="flex flex-col items-center justify-center w-full mt-4 lg:mt-0 max-w-4xl mx-auto text-center">
          
          <div className="inline-block px-4 py-1.5 bg-brand-blue/30 border border-brand-blue/40 rounded-full text-[10px] font-bold text-brand-sky mb-4 font-heading tracking-widest uppercase shadow-[0_0_15px_rgba(91,108,255,0.3)]">
            The Global Standard in IT Certifications
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight font-heading text-white tracking-tight drop-shadow-lg">
            Get Certified.<br />
            In Your <span className="text-brand-sky">First Attempt.</span>
          </h1>
          
          <div className="flex items-center justify-center space-x-2 text-base md:text-lg text-slate-300 mb-6 font-semibold">
            <i className="fas fa-check-circle text-[#25D366]"></i>
            <p>Learn from Experts. Practice Smart. Pass with Confidence.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6 w-full max-w-3xl mx-auto">
            <div className="flex flex-col items-center text-center py-2.5 px-2 bg-bg-dark backdrop-blur-sm border border-slate-700/50 rounded-lg">
              <i className="fas fa-globe text-lg text-brand-sky mb-1.5"></i>
              <span className="text-[11px] font-bold text-white mb-0.5">Globally Recognised</span>
              <span className="text-[9px] text-slate-400">Top Vendor Certifications</span>
            </div>
            <div className="flex flex-col items-center text-center py-2.5 px-2 bg-bg-dark backdrop-blur-sm border border-slate-700/50 rounded-lg">
              <i className="fas fa-chalkboard-teacher text-lg text-brand-sky mb-1.5"></i>
              <span className="text-[11px] font-bold text-white mb-0.5">Expert-Led Training</span>
              <span className="text-[9px] text-slate-400">Hands-on & Practical</span>
            </div>
            <div className="flex flex-col items-center text-center py-2.5 px-2 bg-bg-dark backdrop-blur-sm border border-slate-700/50 rounded-lg">
              <i className="fas fa-ticket-alt text-lg text-brand-sky mb-1.5"></i>
              <span className="text-[11px] font-bold text-white mb-0.5">Exam Vouchers</span>
              <span className="text-[9px] text-slate-400">Included</span>
            </div>
            <div className="flex flex-col items-center text-center py-2.5 px-2 bg-bg-dark backdrop-blur-sm border border-slate-700/50 rounded-lg">
              <i className="fas fa-shield-alt text-lg text-brand-sky mb-1.5"></i>
              <span className="text-[11px] font-bold text-white mb-0.5">Success Guarantee</span>
              <span className="text-[9px] text-slate-400">Assistance Included</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-3 justify-center">
            <a href="/certifications" className="bg-brand-blue text-white px-8 py-3 rounded-xl font-heading font-semibold text-base hover:bg-blue-600 transition flex items-center justify-center w-full sm:w-auto relative z-30">
              Explore Certifications <i className="fas fa-arrow-right ml-2"></i>
            </a>
            <a href="https://wa.me/9392828155" className="bg-slate-800 text-white border-2 border-slate-700 px-8 py-3 rounded-xl font-heading font-semibold text-base hover:bg-slate-700 transition flex items-center justify-center w-full sm:w-auto relative z-30 shadow-sm">
              <i className="fab fa-whatsapp mr-2 text-[#25D366] text-xl"></i> Chat with an Expert
            </a>
          </div>

        </div>
      </div>

    </div>
  );
};

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const showSlide = (index: number) => setCurrentSlide(index);
  const nextSlide = () => setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? 1 : 0));

  return (
    <section className="bg-bg-dark overflow-hidden relative flex flex-col min-h-screen pt-8">
      {/* Global Background Elements */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-brand-blue/20 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-brand-sky/10 rounded-full blur-[150px] pointer-events-none z-0"></div>

      <div className="flex-grow grid grid-cols-1 grid-rows-1 w-full relative pb-0">
          <motion.div 
            initial={false}
            animate={{ 
              opacity: currentSlide === 0 ? 1 : 0, 
              x: currentSlide === 0 ? '0%' : '-10%',
              pointerEvents: currentSlide === 0 ? 'auto' : 'none'
            }} 
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="col-start-1 row-start-1 w-full h-full flex flex-col"
            aria-hidden={currentSlide !== 0}
          >
            <Banner1 />
          </motion.div>

          <motion.div 
            initial={false}
            animate={{ 
              opacity: currentSlide === 1 ? 1 : 0, 
              x: currentSlide === 1 ? '0%' : '10%',
              pointerEvents: currentSlide === 1 ? 'auto' : 'none'
            }} 
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="col-start-1 row-start-1 w-full h-full flex flex-col"
            aria-hidden={currentSlide !== 1}
          >
            <Banner2 />
          </motion.div>
      </div>

      {/* Manual Slide Controls */}
      <div className="pointer-events-none absolute inset-0 z-50 hidden sm:block">
        <div className="relative mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10">
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous slide"
            className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-slate-900/80 text-white transition hover:border-brand-blue hover:text-brand-blue"
          >
            <i className="fas fa-chevron-left text-sm"></i>
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next slide"
            className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-slate-900/80 text-white transition hover:border-brand-blue hover:text-brand-blue"
          >
            <i className="fas fa-chevron-right text-sm"></i>
          </button>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-3 z-50">
        <button
          type="button"
          onClick={() => showSlide(0)}
          className={`w-12 h-1.5 rounded-full transition-all duration-300 ${currentSlide === 0 ? 'bg-brand-sky' : 'bg-white/20 hover:bg-white/40'}`}
          aria-label="Go to slide 1"
        />
        <button
          type="button"
          onClick={() => showSlide(1)}
          className={`w-12 h-1.5 rounded-full transition-all duration-300 ${currentSlide === 1 ? 'bg-brand-sky' : 'bg-white/20 hover:bg-white/40'}`}
          aria-label="Go to slide 2"
        />
      </div>
    </section>
  );
};

export default Hero;
