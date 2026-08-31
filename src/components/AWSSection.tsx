import React from 'react';

const AWSSection = () => {
  return (
    <section id="aws" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-brand-dark flex items-center mb-2 font-heading">
              <i className="fab fa-aws text-brand-blue mr-3 text-4xl"></i> AWS Certifications
            </h2>
            <p className="text-lg text-slate-500 font-sans">Exclusive discounted pricing on Amazon Web Services exams.</p>
          </div>
          <a href="https://wa.me/919205531284" className="mt-6 md:mt-0 bg-white border border-brand-blue text-brand-blue px-6 py-3 rounded-xl font-bold hover:bg-brand-blue hover:text-white transition flex items-center shadow-sm font-heading">
            Check Exam Voucher Price <i className="fab fa-whatsapp ml-2 text-xl"></i>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Foundational */}
          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden relative hover:shadow-md transition">
            <div className="h-2 bg-slate-300"></div>
            <div className="p-8">
              <span className="bg-slate-100 text-slate-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider font-sans">Foundational Level</span>
              <h3 className="text-2xl font-bold mt-5 mb-2 font-heading text-brand-dark">AWS Cloud Practitioner</h3>
              <p className="text-slate-500 mb-6 text-sm font-sans">Validate your overall understanding of the AWS Cloud.</p>
              
              <div className="mb-4">
                <p className="text-sm text-slate-400 line-through mb-1 font-sans">Actual exam fee: ~$100 + taxes</p>
                <div className="flex items-end">
                  <span className="text-3xl font-bold text-brand-blue font-heading">₹6,000</span>
                </div>
              </div>
              <a href="https://wa.me/919205531284" className="block w-full text-center bg-brand-blue/5 hover:bg-brand-blue hover:text-white text-brand-blue border border-brand-blue/20 font-bold py-3 rounded-xl transition mt-8 font-heading">
                Get This Voucher
              </a>
            </div>
          </div>

          {/* Associate */}
          <div className="bg-white rounded-3xl shadow-lg border-2 border-brand-blue overflow-hidden relative transform md:-translate-y-4">
            <div className="absolute top-0 inset-x-0 h-2 bg-brand-blue"></div>
            <div className="absolute top-0 right-0 bg-brand-blue text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl font-sans uppercase tracking-widest">POPULAR</div>
            <div className="p-8">
              <span className="bg-brand-sky/10 text-brand-blue text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider font-sans">Associate Level</span>
              <h3 className="text-2xl font-bold mt-5 mb-2 font-heading text-brand-dark">AWS Solutions Architect</h3>
              <p className="text-slate-500 mb-6 text-sm font-sans">Showcase your knowledge and skills on AWS technology.</p>
              
              <div className="mb-4">
                <p className="text-sm text-slate-400 line-through mb-1 font-sans">Actual exam fee: ~$150 + taxes</p>
                <div className="flex items-end">
                  <span className="text-4xl font-bold text-brand-blue font-heading">₹9,000</span>
                </div>
              </div>
              <a href="https://wa.me/919205531284" className="block w-full text-center bg-brand-blue text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition mt-8 shadow-md font-heading">
                Get This Voucher
              </a>
            </div>
          </div>

          {/* Professional */}
          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden relative hover:shadow-md transition">
            <div className="h-2 bg-brand-dark"></div>
            <div className="p-8">
              <span className="bg-slate-100 text-brand-dark text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider font-sans">Professional</span>
              <h3 className="text-2xl font-bold mt-5 mb-2 font-heading text-brand-dark">AWS Professional</h3>
              <p className="text-slate-500 mb-6 text-sm font-sans">Validate advanced skills and experience designing on AWS.</p>
              
              <div className="mb-4">
                <p className="text-sm text-slate-400 line-through mb-1 font-sans">Actual exam fee: ~$300 + taxes</p>
                <div className="flex items-end">
                  <span className="text-3xl font-bold text-brand-blue font-heading">₹22,000</span>
                </div>
              </div>
              <a href="https://wa.me/919205531284" className="block w-full text-center bg-brand-blue/5 hover:bg-brand-blue hover:text-white text-brand-blue border border-brand-blue/20 font-bold py-3 rounded-xl transition mt-8 font-heading">
                Get This Voucher
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AWSSection;
