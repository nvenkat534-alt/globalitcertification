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

  const darkHeroPages = ['/contact'];
  const isDarkHero = darkHeroPages.includes(pathname) || pathname.startsWith('/certifications/');

  const useWhiteText = !isScrolled && isDarkHero && !mobileMenuOpen;

  return (
    <motion.nav 
      className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
        isScrolled 
          ? 'bg-bg-dark/95 backdrop-blur-lg shadow-[0_0_15px_rgba(0,0,0,0.5)] border-b border-slate-800 py-2 sm:py-3' 
          : 'bg-transparent py-3 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          <Link href="/" className="flex items-center space-x-1.5 sm:space-x-2 group">
            <span className={`font-heading font-extrabold text-base sm:text-xl md:text-2xl tracking-tight transition-colors ${
              useWhiteText ? 'text-white' : 'text-white'
            }`}>
              Global <span className="text-brand-blue">IT</span> Certifications</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.path}
                className={`font-sans text-sm font-semibold transition-colors ${
                  pathname === link.path 
                    ? 'text-brand-blue' 
                    : useWhiteText
                      ? 'text-slate-300 hover:text-white'
                      : 'text-slate-400 hover:text-brand-blue'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a href="https://wa.me/9392828155" className="bg-brand-blue text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-heading font-semibold text-xs sm:text-sm hover:bg-blue-700 transition flex items-center">
              <i className="fab fa-whatsapp mr-1.5 sm:mr-2 text-sm sm:text-lg"></i> <span className="hidden sm:inline">Contact Expert</span><span className="sm:hidden">Contact</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2.5 transition-colors ${
                useWhiteText ? 'text-white hover:text-brand-sky' : 'text-white hover:text-brand-blue'
              }`}
            >
              <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl sm:text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-bg-dark border-b border-slate-800 absolute w-full left-0 mt-2 sm:mt-3">
          <div className="px-3 sm:px-4 pt-2 pb-4 sm:pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 sm:py-3 rounded-md font-sans font-medium text-sm ${
                  pathname === link.path ? 'bg-brand-blue/10 text-brand-blue' : 'text-slate-400 hover:bg-bg-dark hover:text-brand-blue'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="https://wa.me/9392828155" 
              className="block mt-3 sm:mt-4 px-3 py-2.5 sm:py-3 bg-brand-blue text-white rounded-md font-heading font-semibold text-center text-sm"
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
