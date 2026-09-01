import React from 'react';

const MicrosoftSection = () => {
  return (
    <section id="microsoft" className="py-20 bg-bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-blue/5 rounded-3xl p-8 md:p-12 border border-brand-blue/20 flex flex-col md:flex-row items-center relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue opacity-5 rounded-full blur-3xl -mr-20 -mt-20"></div>

          <div className="md:w-2/3 pr-0 md:pr-12 mb-8 md:mb-0 relative z-10">
            <h2 className="text-3xl font-bold text-white flex items-center mb-4 font-heading">
              <i className="fab fa-windows text-4xl text-brand-blue mr-4"></i> Microsoft Certifications
            </h2>
            <p className="text-xl text-slate-300 mb-6 font-medium font-sans">Looking for Microsoft Certification Exam Vouchers or Training?</p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center bg-bg-dark px-5 py-2.5 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.5)] border border-slate-800 font-heading font-bold text-sm text-white">
                <i className="fas fa-check-circle text-brand-blue mr-2"></i> Microsoft Fundamentals
              </div>
              <div className="flex items-center bg-bg-dark px-5 py-2.5 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.5)] border border-slate-800 font-heading font-bold text-sm text-white">
                <i className="fas fa-check-circle text-brand-blue mr-2"></i> Microsoft Associate
              </div>
              <div className="flex items-center bg-bg-dark px-5 py-2.5 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.5)] border border-slate-800 font-heading font-bold text-sm text-white">
                <i className="fas fa-check-circle text-brand-blue mr-2"></i> Microsoft Expert
              </div>
            </div>
            
            <p className="text-slate-400 mb-8 font-sans leading-relaxed">Text us on WhatsApp to get complete details and current pricing on all Microsoft certification paths including Azure, Microsoft 365, Dynamics 365, and Power Platform.</p>
            
            <a href="https://wa.me/9392828155" className="inline-flex bg-brand-blue text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition items-center font-heading">
              <i className="fab fa-whatsapp mr-2 text-xl"></i> WhatsApp Us for Details
            </a>
          </div>
          <div className="md:w-1/3 flex justify-center relative z-10">
            <i className="fab fa-microsoft text-[180px] text-brand-blue opacity-10"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MicrosoftSection;
