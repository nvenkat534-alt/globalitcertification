import React from 'react';
import { Link } from 'react-router-dom';
import AWSSection from '../components/AWSSection';

const AWSPage = () => {
  return (
    <div className="pt-8 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex items-center space-x-2 text-sm font-sans font-medium text-slate-500 mb-8">
          <Link to="/" className="hover:text-brand-blue transition">Home</Link>
          <i className="fas fa-chevron-right text-[10px]"></i>
          <Link to="/certifications" className="hover:text-brand-blue transition">Certifications</Link>
          <i className="fas fa-chevron-right text-[10px]"></i>
          <span className="text-brand-blue">AWS Certification</span>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6 font-heading">
          <i className="fab fa-aws text-brand-blue mr-4"></i>
          AWS Certification & Training
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto font-sans leading-relaxed">
          Accelerate your cloud career with our comprehensive AWS training programs and discounted certification vouchers. Whether you are starting with Cloud Practitioner or aiming for a Specialty, we've got you covered.
        </p>
      </div>

      <AWSSection />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 lg:p-16 flex flex-col justify-center bg-slate-50">
              <h2 className="text-3xl font-bold mb-8 text-brand-dark font-heading">Why Choose Our AWS Training?</h2>
              <ul className="space-y-8">
                <li className="flex items-start">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center shrink-0">
                    <i className="fas fa-check text-brand-blue text-xl"></i>
                  </div>
                  <div className="ml-5">
                    <h3 className="font-bold text-lg text-brand-dark font-heading">Official Curriculum</h3>
                    <p className="text-slate-500 mt-1 font-sans">Learn from AWS-approved material and get hands-on experience with real-world labs.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center shrink-0">
                    <i className="fas fa-check text-brand-blue text-xl"></i>
                  </div>
                  <div className="ml-5">
                    <h3 className="font-bold text-lg text-brand-dark font-heading">Expert Instructors</h3>
                    <p className="text-slate-500 mt-1 font-sans">Our trainers are AWS Certified professionals with years of industry experience.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center shrink-0">
                    <i className="fas fa-check text-brand-blue text-xl"></i>
                  </div>
                  <div className="ml-5">
                    <h3 className="font-bold text-lg text-brand-dark font-heading">Exam Pass Guarantee</h3>
                    <p className="text-slate-500 mt-1 font-sans">Get pass-focused training that ensures you're ready for the actual exam day.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-brand-blue p-10 lg:p-16 text-white flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-10 mix-blend-overlay">
                <i className="fab fa-aws text-[250px]"></i>
              </div>
              <h2 className="text-3xl font-bold mb-4 relative z-10 font-heading">Ready to start your AWS Journey?</h2>
              <p className="text-blue-100 mb-10 text-lg relative z-10 font-sans">
                Get a personalized roadmap from our certification experts and claim your discount voucher today.
              </p>
              <a href="https://wa.me/919205531284" className="inline-block bg-white text-brand-blue px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition shadow-xl text-center w-full sm:w-auto relative z-10 font-heading">
                <i className="fab fa-whatsapp mr-2 text-whatsapp"></i> Consult an AWS Expert
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AWSPage;
