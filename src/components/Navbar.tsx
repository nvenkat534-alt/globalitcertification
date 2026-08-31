"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Training', path: '/training' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <motion.nav 
      className={`fixed w-full z-[100] transition-colors duration-300 ${
        isScrolled || pathname !== '/' ? 'bg-white/95 backdrop-blur-lg shadow-sm border-b border-slate-200 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          <Link href="/" className="flex items-center space-x-2 group">

            <span className="font-heading font-extrabold text-2xl text-brand-dark tracking-tight">
              Global <span className="text-brand-blue">IT</span> Certifications
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.path}
                className={`font-sans text-sm font-semibold transition-colors ${
                  pathname === link.path ? 'text-brand-blue' : 'text-slate-600 hover:text-brand-blue'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a href="https://wa.me/919205531284" className="bg-brand-blue text-white px-5 py-2.5 rounded-full font-heading font-semibold text-sm hover:bg-blue-700 transition shadow-sm hover:shadow flex items-center">
              <i className="fab fa-whatsapp mr-2 text-lg"></i> Contact Expert
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-brand-dark hover:text-brand-blue p-2"
            >
              <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 shadow-lg absolute w-full left-0 mt-3">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-3 rounded-md font-sans font-medium ${
                  pathname === link.path ? 'bg-brand-blue/10 text-brand-blue' : 'text-slate-600 hover:bg-slate-50 hover:text-brand-blue'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="https://wa.me/919205531284" 
              className="block mt-4 px-3 py-3 bg-brand-blue text-white rounded-md font-heading font-semibold text-center"
            >
              <i className="fab fa-whatsapp mr-2"></i> Contact Expert
            </a>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
