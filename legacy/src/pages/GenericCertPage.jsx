import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { certData } from '../data/certData';
import FadeIn from '../components/FadeIn';

const GenericCertPage = () => {
  const { id } = useParams();
  const data = certData[id];

  if (!data) {
    return <Navigate to="/certifications" replace />;
  }

  return (
    <div className="pt-8 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex items-center space-x-2 text-sm font-sans font-medium text-slate-500 mb-8">
          <Link to="/" className="hover:text-brand-blue transition">Home</Link>
          <i className="fas fa-chevron-right text-[10px]"></i>
          <Link to="/certifications" className="hover:text-brand-blue transition">Certifications</Link>
          <i className="fas fa-chevron-right text-[10px]"></i>
          <span className="text-brand-blue">{data.title}</span>
        </div>
      </div>

      <FadeIn className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6 font-heading flex justify-center items-center">
          {data.isText ? (
            <div className="h-12 w-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mr-4">
              <span className="font-extrabold font-heading text-lg text-brand-blue tracking-wider">{data.textLogo}</span>
            </div>
          ) : data.isImage ? (
            <img src={data.iconUrl} alt={data.title} className="h-12 w-12 object-contain mr-4" />
          ) : (
            <div 
              className="h-12 w-12 bg-brand-blue mr-4"
              style={{
                maskImage: `url(${data.iconUrl})`,
                WebkitMaskImage: `url(${data.iconUrl})`,
                maskSize: 'contain',
                WebkitMaskSize: 'contain',
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
                maskPosition: 'center',
                WebkitMaskPosition: 'center'
              }}
            ></div>
          )}
          {data.title}
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto font-sans leading-relaxed">
          {data.description}
        </p>
      </FadeIn>

      {/* Specific Exams Section */}
      {data.popularExams && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <h2 className="text-3xl font-bold text-brand-dark mb-8 text-center font-heading">Popular {data.title.split(' ')[0]} Certification Paths</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.popularExams.map((exam, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
                <span className="inline-block bg-brand-blue/10 text-brand-blue text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 font-sans">
                  {exam.level}
                </span>
                <h3 className="text-xl font-bold font-heading text-brand-dark mb-4">{exam.name}</h3>
                <a href="https://wa.me/919205531284" className="text-brand-blue font-bold font-sans hover:underline flex items-center">
                  Get Pricing & Details <i className="fas fa-arrow-right ml-2 text-sm"></i>
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 lg:p-16 flex flex-col justify-center bg-slate-50">
              <h2 className="text-3xl font-bold mb-8 text-brand-dark font-heading">Why Choose Our Training?</h2>
              <ul className="space-y-8">
                {data.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center shrink-0">
                      <i className="fas fa-check text-brand-blue text-xl"></i>
                    </div>
                    <div className="ml-5 flex items-center h-12">
                      <h3 className="font-bold text-lg text-brand-dark font-heading">{feature}</h3>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-brand-blue p-10 lg:p-16 text-white flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-10 mix-blend-overlay">
                {data.isText ? (
                  <div className="w-[300px] h-[300px] flex items-center justify-center">
                    <span className="text-[150px] font-extrabold font-heading text-white select-none">{data.textLogo}</span>
                  </div>
                ) : data.isImage ? (
                  <img src={data.iconUrl} alt={data.title} className="w-[300px] h-[300px] object-contain filter grayscale invert" />
                ) : (
                  <div 
                    className="w-[300px] h-[300px] bg-white"
                    style={{
                      maskImage: `url(${data.iconUrl})`,
                      WebkitMaskImage: `url(${data.iconUrl})`,
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
              <h2 className="text-3xl font-bold mb-4 relative z-10 font-heading">Ready to get certified?</h2>
              <p className="text-blue-100 mb-10 text-lg relative z-10 font-sans">
                Get a personalized roadmap from our experts and claim your highly discounted {data.title.split(' ')[0]} exam voucher today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 relative z-10">
                <a href="https://wa.me/919205531284" className="bg-white text-brand-blue px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition shadow-xl text-center flex-1 font-heading">
                  <i className="fab fa-whatsapp mr-2 text-whatsapp"></i> Buy Voucher
                </a>
                <a href="https://wa.me/919205531284" className="bg-brand-dark text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition shadow-xl text-center flex-1 font-heading">
                   Request Training
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenericCertPage;
