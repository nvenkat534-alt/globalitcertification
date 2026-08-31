import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 border-b border-slate-800 pb-12">
          <div>
            <span className="text-2xl font-bold text-white mb-6 block font-heading tracking-tight">
              Global<span className="text-brand-sky">IT</span>Success
            </span>
            <p className="text-sm text-slate-400 font-sans leading-relaxed">
              Your trusted partner for globally recognised certification vouchers, training, and exam assistance. Empowering professionals worldwide.
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold font-heading mb-6 uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-3 text-sm font-sans">
              <li><a href="#certifications" className="hover:text-brand-sky transition">All Certifications</a></li>
              <li><a href="#aws" className="hover:text-brand-sky transition">AWS Pricing</a></li>
              <li><a href="#microsoft" className="hover:text-brand-sky transition">Microsoft Certifications</a></li>
              <li><a href="#training" className="hover:text-brand-sky transition">Pass-Focused Training</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold font-heading mb-6 uppercase tracking-wider text-sm">Contact Us</h3>
            <div className="space-y-4 font-sans text-sm">
              <a href="https://wa.me/919205531284" className="flex items-center text-slate-300 hover:text-whatsapp transition w-fit">
                <i className="fab fa-whatsapp text-xl w-8"></i> Chat on WhatsApp
              </a>
              <a href="https://wa.me/919205531284" className="flex items-center text-slate-300 hover:text-brand-sky transition w-fit">
                <i className="fas fa-info-circle text-xl w-8"></i> Get Certification Details
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-sm text-slate-500 font-sans flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Global IT Success. All rights reserved.</p>
          <p className="mt-4 md:mt-0 text-xs">All logos and trademarks belong to their respective owners.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
