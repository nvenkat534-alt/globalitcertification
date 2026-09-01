import React from 'react';
import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-dark relative overflow-hidden text-slate-300 pt-12 md:pt-20 pb-8 md:pb-10 border-t border-brand-blue/30">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-brand-blue rounded-full blur-[120px] opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-16">
          
          {/* Brand & Intro */}
          <div className="space-y-4 md:space-y-6">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold text-white block font-heading tracking-tight">
                Global <span className="text-brand-sky">IT</span> Certifications
              </span>
            </Link>
            <p className="text-sm text-slate-400 font-sans leading-relaxed">
              Your trusted partner for globally recognised certification vouchers, personalized training, and guaranteed exam success. Empowering professionals worldwide.
            </p>
            
            {/* Social Icons */}
            <div className="flex space-x-4 pt-2">
              <a href="https://instagram.com/global_certification" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#E1306C] hover:text-white transition-all shadow-lg hover:-translate-y-1">
                <i className="fab fa-instagram text-lg"></i>
              </a>
              <a href="https://wa.me/919205531284" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#25D366] hover:text-white transition-all shadow-lg hover:-translate-y-1">
                <i className="fab fa-whatsapp text-lg"></i>
              </a>
              <a href="mailto:contact@globalcertification.com" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-brand-blue hover:text-white transition-all shadow-lg hover:-translate-y-1">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold font-heading mb-6 uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-3 md:space-y-4 text-sm font-sans">
              <li>
                <Link href="/" className="text-slate-400 hover:text-brand-sky transition inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/certifications" className="text-slate-400 hover:text-brand-sky transition inline-block">
                  All Certifications
                </Link>
              </li>
              <li>
                <Link href="/training" className="text-slate-400 hover:text-brand-sky transition inline-block">
                  Personalized Training
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-brand-sky transition inline-block">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-slate-400 hover:text-brand-sky transition inline-block">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Top Providers */}
          <div>
            <h3 className="text-white font-bold font-heading mb-6 uppercase tracking-wider text-sm">Top Providers</h3>
            <ul className="space-y-3 md:space-y-4 text-sm font-sans">
              <li>
                <Link href="/certifications/aws" className="text-slate-400 hover:text-brand-sky transition inline-block">
                  Amazon Web Services (AWS)
                </Link>
              </li>
              <li>
                <Link href="/certifications/microsoft" className="text-slate-400 hover:text-brand-sky transition inline-block">
                  Microsoft Azure
                </Link>
              </li>
              <li>
                <Link href="/certifications/salesforce" className="text-slate-400 hover:text-brand-sky transition inline-block">
                  Salesforce
                </Link>
              </li>
              <li>
                <Link href="/certifications/google-cloud" className="text-slate-400 hover:text-brand-sky transition inline-block">
                  Google Cloud
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white font-bold font-heading mb-6 uppercase tracking-wider text-sm">Get in Touch</h3>
            <ul className="space-y-4 md:space-y-5 text-sm font-sans">
              <li className="flex items-start">
                <Phone className="text-brand-sky mt-1 mr-4 flex-shrink-0" size={18} />
                <div>
                  <span className="block font-semibold text-slate-300">WhatsApp / Phone</span>
                  <a href="https://wa.me/919205531284" className="text-slate-400 hover:text-white transition">+91 92055 31284</a>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="text-brand-sky mt-1 mr-4 flex-shrink-0" size={18} />
                <div>
                  <span className="block font-semibold text-slate-300">Email</span>
                  <a href="mailto:contact@globalcertification.com" className="text-slate-400 hover:text-white transition">contact@globalcertification.com</a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="text-brand-sky mt-1 mr-4 flex-shrink-0" size={18} />
                <div>
                  <span className="block font-semibold text-slate-300">Location</span>
                  <span className="text-slate-400 leading-relaxed">Benz Circle, Vijayawada<br/>Andhra Pradesh, India</span>
                </div>
              </li>
            </ul>
          </div>
          
        </div>
        
        {/* Copyright Bar */}
        <div className="border-t border-slate-800 pt-8 mt-12 text-center md:text-left text-sm text-slate-500 font-sans flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Global IT Certifications. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6 text-xs">
            <Link href="/privacy" className="hover:text-slate-300 transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-300 transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
