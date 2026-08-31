import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-brand-dark hover:opacity-80 transition font-heading tracking-tight">
              Global<span className="text-brand-blue">IT</span>Success
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8 font-sans font-medium text-sm">
            <Link to="/" className="text-slate-600 hover:text-brand-blue transition">Home</Link>
            <Link to="/certifications" className="text-slate-600 hover:text-brand-blue transition">Certifications</Link>
            <Link to="/training" className="text-slate-600 hover:text-brand-blue transition">Training</Link>
            <a href="https://wa.me/919205531284" className="bg-brand-blue text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition shadow-sm flex items-center font-heading">
              <i className="fab fa-whatsapp text-lg mr-2"></i> Contact Us
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-brand-dark hover:text-brand-blue focus:outline-none p-2"
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-white border-b border-slate-200 shadow-xl transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 overflow-hidden py-0'}`}>
        <div className="px-4 space-y-3 font-sans font-medium">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base text-slate-700 hover:text-brand-blue hover:bg-slate-50 transition">Home</Link>
          <Link to="/certifications" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base text-slate-700 hover:text-brand-blue hover:bg-slate-50 transition">Certifications</Link>
          <Link to="/training" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base text-slate-700 hover:text-brand-blue hover:bg-slate-50 transition">Training</Link>
          <div className="pt-2">
            <a href="https://wa.me/919205531284" className="block w-full text-center bg-brand-blue text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition shadow-sm font-heading font-bold">
              <i className="fab fa-whatsapp text-lg mr-2"></i> Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
