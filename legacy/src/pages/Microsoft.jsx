import React from 'react';
import { Link } from 'react-router-dom';
import MicrosoftSection from '../components/MicrosoftSection';

const MicrosoftPage = () => {
  return (
    <div className="pt-8 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex items-center space-x-2 text-sm font-sans font-medium text-slate-500 mb-8">
          <Link to="/" className="hover:text-brand-blue transition">Home</Link>
          <i className="fas fa-chevron-right text-[10px]"></i>
          <Link to="/certifications" className="hover:text-brand-blue transition">Certifications</Link>
          <i className="fas fa-chevron-right text-[10px]"></i>
          <span className="text-brand-blue">Microsoft Azure Certification</span>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6 font-heading">
          <i className="fab fa-windows text-brand-blue mr-4"></i>
          Microsoft Azure Certification
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto font-sans leading-relaxed">
          Unlock your potential with Microsoft certifications. Whether you're focusing on Azure, Microsoft 365, or Dynamics 365, our tailored training programs ensure you get certified on your first attempt.
        </p>
      </div>

      <MicrosoftSection />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl hover:border-brand-blue/30 transition-all duration-300">
            <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center mb-6">
              <i className="fas fa-cloud text-2xl text-brand-blue"></i>
            </div>
            <h3 className="text-xl font-bold mb-3 font-heading text-brand-dark">Azure Cloud</h3>
            <p className="text-slate-500 mb-8 font-sans">Master cloud computing with Azure Fundamentals, Administrator, and Solutions Architect paths.</p>
            <a href="https://wa.me/919205531284" className="text-brand-blue font-bold font-heading hover:underline flex items-center">View Azure Details <i className="fas fa-arrow-right ml-2 text-sm"></i></a>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl hover:border-brand-blue/30 transition-all duration-300">
            <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center mb-6">
              <i className="fas fa-users text-2xl text-brand-blue"></i>
            </div>
            <h3 className="text-xl font-bold mb-3 font-heading text-brand-dark">Microsoft 365</h3>
            <p className="text-slate-500 mb-8 font-sans">Empower modern workplaces with M365 Fundamentals, Enterprise Administrator, and Security certs.</p>
            <a href="https://wa.me/919205531284" className="text-brand-blue font-bold font-heading hover:underline flex items-center">View M365 Details <i className="fas fa-arrow-right ml-2 text-sm"></i></a>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl hover:border-brand-blue/30 transition-all duration-300">
            <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center mb-6">
              <i className="fas fa-database text-2xl text-brand-blue"></i>
            </div>
            <h3 className="text-xl font-bold mb-3 font-heading text-brand-dark">Data & AI</h3>
            <p className="text-slate-500 mb-8 font-sans">Dive into Azure Data Fundamentals, Power BI Data Analyst, and Azure AI Engineer certifications.</p>
            <a href="https://wa.me/919205531284" className="text-brand-blue font-bold font-heading hover:underline flex items-center">View Data & AI Details <i className="fas fa-arrow-right ml-2 text-sm"></i></a>
          </div>
        </div>

        <div className="mt-16 bg-brand-dark rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden border border-slate-800">
          <div className="absolute inset-0 bg-brand-blue opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading relative z-10">Need help choosing your Microsoft path?</h2>
          <p className="text-slate-400 mb-10 max-w-2xl mx-auto font-sans relative z-10">There are over 50 Microsoft certifications available. Our career advisors can help you choose the exact right one for your career goals.</p>
          <a href="https://wa.me/919205531284" className="inline-block bg-brand-blue text-white px-10 py-4 rounded-xl font-bold font-heading hover:bg-blue-600 transition shadow-lg relative z-10">
            Chat with an Advisor
          </a>
        </div>
      </div>
    </div>
  );
};

export default MicrosoftPage;
