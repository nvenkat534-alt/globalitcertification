import React from 'react';

const Hero = () => {
  return (
    <section className="bg-slate-50 pt-24 pb-32 overflow-hidden relative border-b border-slate-200">
      {/* Unified Brand Background Elements */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[600px] h-[600px] bg-brand-blue opacity-10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-[500px] h-[500px] bg-brand-sky opacity-10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <div className="lg:w-1/2 text-left">
            <div className="inline-block px-4 py-2 bg-brand-blue/10 rounded-full text-sm font-bold text-brand-blue mb-6 font-heading tracking-wide">
              GLOBAL IT CERTIFICATION PARTNER
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight font-heading text-brand-dark">
              Get <span className="text-gradient">Certified.</span><br />
              Get Recognised.
            </h1>
            
            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-sans">
              Supercharge your resume and unlock new career opportunities. We provide globally recognised certification vouchers, structured training, and expert exam assistance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#certifications" className="bg-brand-blue text-white px-8 py-4 rounded-xl font-heading font-semibold text-lg hover:bg-blue-700 transition shadow-lg flex items-center justify-center">
                Explore Certifications <i className="fas fa-arrow-right ml-2"></i>
              </a>
              <a href="https://wa.me/919205531284" className="bg-white text-brand-dark border border-slate-200 px-8 py-4 rounded-xl font-heading font-semibold text-lg hover:border-brand-blue hover:text-brand-blue transition flex items-center justify-center shadow-sm">
                <i className="fab fa-whatsapp mr-2 text-whatsapp text-xl"></i> Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 w-full mt-12 lg:mt-0">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm transform transition hover:-translate-y-1 hover:shadow-md hover:border-brand-blue/30">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-5">
                  <i className="fas fa-tags text-2xl text-brand-blue"></i>
                </div>
                <h3 className="text-lg font-bold mb-2 font-heading text-brand-dark">Discounted Vouchers</h3>
                <p className="text-slate-500 font-sans text-sm">Save big on official certification exam fees.</p>
              </div>
              
              <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm transform transition hover:-translate-y-1 hover:shadow-md hover:border-brand-blue/30">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-5">
                  <i className="fas fa-chalkboard-teacher text-2xl text-brand-blue"></i>
                </div>
                <h3 className="text-lg font-bold mb-2 font-heading text-brand-dark">Focused Training</h3>
                <p className="text-slate-500 font-sans text-sm">Structured material designed for success.</p>
              </div>
              
              <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm transform transition hover:-translate-y-1 hover:shadow-md hover:border-brand-blue/30">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-5">
                  <i className="fas fa-user-tie text-2xl text-brand-blue"></i>
                </div>
                <h3 className="text-lg font-bold mb-2 font-heading text-brand-dark">Expert Guidance</h3>
                <p className="text-slate-500 font-sans text-sm">Complete assistance for your journey.</p>
              </div>
              
              <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm transform transition hover:-translate-y-1 hover:shadow-md hover:border-brand-blue/30">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-5">
                  <i className="fas fa-globe text-2xl text-brand-blue"></i>
                </div>
                <h3 className="text-lg font-bold mb-2 font-heading text-brand-dark">Globally Valid</h3>
                <p className="text-slate-500 font-sans text-sm">Certifications recognized worldwide.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
