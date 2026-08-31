import React from 'react';

const SocialProof = () => {
  const logos = [
    { name: 'Google', icon: 'fab fa-google' },
    { name: 'Amazon', icon: 'fab fa-amazon' },
    { name: 'Microsoft', icon: 'fab fa-microsoft' },
    { name: 'IBM', icon: 'fab fa-ibm' },
    { name: 'Salesforce', icon: 'fab fa-salesforce' },
    { name: 'Apple', icon: 'fab fa-apple' },
    { name: 'Meta', icon: 'fab fa-meta' },
  ];

  // Double the array to create a seamless infinite loop
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="bg-slate-50 border-y border-slate-200 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
        <p className="text-sm font-bold tracking-widest text-slate-400 uppercase font-sans">Our alumni advance their careers at top companies</p>
      </div>
      
      {/* Marquee Container */}
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {duplicatedLogos.map((logo, index) => (
            <div key={index} className="mx-12 flex items-center justify-center text-slate-300 hover:text-brand-blue transition-colors duration-300">
              <i className={`${logo.icon} text-5xl`}></i>
            </div>
          ))}
        </div>
      </div>
      
      {/* Inline styles for animation since Tailwind doesn't have marquee built-in by default */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />
    </div>
  );
};

export default SocialProof;
