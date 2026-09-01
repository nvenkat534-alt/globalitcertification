"use client";
import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-bg-dark pb-20">
      {/* Hero */}
      <div className="bg-bg-dark pt-32 pb-24 border-b border-brand-blue/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-heading">
            Contact <span className="text-brand-sky">Us</span>
          </h1>
          <p className="text-xl text-slate-400 font-sans max-w-2xl mx-auto leading-relaxed">
            Have questions about certifications, training, or exam vouchers? We're here to help you accelerate your tech career.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Contact Information */}
          <div className="space-y-8 lg:pr-8 pt-4">
            <h2 className="text-3xl lg:text-4xl font-bold font-heading text-white tracking-tight">Get In Touch</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Reach out to our experts directly for the fastest response and best deals on exam vouchers.
            </p>
            
            <div className="space-y-8 mt-10">
              <a href="https://wa.me/9392828155" className="flex items-start group">
                <div className="mt-1 mr-5 text-[#25D366]">
                  <i className="fab fa-whatsapp text-3xl transition-transform group-hover:scale-110"></i>
                </div>
                <div>
                  <span className="block font-bold text-xl text-white group-hover:text-[#25D366] transition-colors">WhatsApp</span>
                  <span className="text-slate-400 text-lg">+91 93928 28155</span>
                </div>
              </a>

              <a href="mailto:contact@globalcertification.com" className="flex items-start group">
                <div className="mt-1 mr-5 text-brand-blue">
                  <Mail size={32} className="transition-transform group-hover:scale-110" />
                </div>
                <div>
                  <span className="block font-bold text-xl text-white group-hover:text-brand-blue transition-colors">Email</span>
                  <span className="text-slate-400 text-lg">contact@globalcertification.com</span>
                </div>
              </a>

              <a href="https://instagram.com/global_certification" target="_blank" rel="noopener noreferrer" className="flex items-start group">
                <div className="mt-1 mr-5 text-[#E1306C]">
                  <i className="fab fa-instagram text-3xl transition-transform group-hover:scale-110"></i>
                </div>
                <div>
                  <span className="block font-bold text-xl text-white group-hover:text-[#E1306C] transition-colors">Instagram</span>
                  <span className="text-slate-400 text-lg">@global_certification</span>
                </div>
              </a>
              
              <div className="flex items-start">
                <div className="mt-1 mr-5 text-brand-blue">
                  <MapPin size={32} />
                </div>
                <div>
                  <span className="block font-bold text-xl text-white">Location</span>
                  <span className="text-slate-400 text-lg">Benz Circle, Vijayawada</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-bg-dark rounded-3xl p-8 lg:p-10 border border-slate-800 shadow-xl">
            <h3 className="text-2xl font-bold font-heading text-white mb-8">Send us a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-300 mb-2">Your Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 bg-bg-dark rounded-xl border border-slate-800 focus:bg-bg-dark focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-300 mb-2">Email Address</label>
                  <input type="email" id="email" className="w-full px-4 py-3 bg-bg-dark rounded-xl border border-slate-800 focus:bg-bg-dark focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition" placeholder="john@example.com" />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-slate-300 mb-2">Subject</label>
                <input type="text" id="subject" className="w-full px-4 py-3 bg-bg-dark rounded-xl border border-slate-800 focus:bg-bg-dark focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition" placeholder="Exam Voucher Inquiry" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-300 mb-2">Message</label>
                <textarea id="message" rows={5} className="w-full px-4 py-3 bg-bg-dark rounded-xl border border-slate-800 focus:bg-bg-dark focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition resize-none" placeholder="How can we help you?"></textarea>
              </div>
              
              <button type="button" className="w-full bg-bg-dark text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-blue transition-colors shadow-[0_0_30px_rgba(0,0,0,0.7)] flex items-center justify-center space-x-2">
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </main>
  );
}
