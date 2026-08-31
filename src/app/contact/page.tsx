"use client";
import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      {/* Hero */}
      <div className="bg-brand-dark pt-32 pb-24 border-b border-brand-blue/30 relative overflow-hidden">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold font-heading text-brand-dark">Get In Touch</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Reach out to our experts directly on WhatsApp for the fastest response and best deals on exam vouchers.
            </p>
            
            <div className="space-y-6 mt-8">
              <a href="https://wa.me/919205531284" className="flex items-center p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-[#25D366] hover:shadow-md transition-all group">
                <div className="w-14 h-14 bg-[#25D366]/10 rounded-xl flex items-center justify-center mr-6 group-hover:bg-[#25D366] transition-colors">
                  <i className="fab fa-whatsapp text-2xl text-[#25D366] group-hover:text-white transition-colors"></i>
                </div>
                <div>
                  <span className="block font-bold text-brand-dark text-lg">WhatsApp</span>
                  <span className="text-slate-500">+91 92055 31284</span>
                </div>
              </a>

              <a href="mailto:contact@globalcertification.com" className="flex items-center p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-brand-blue hover:shadow-md transition-all group">
                <div className="w-14 h-14 bg-brand-blue/10 rounded-xl flex items-center justify-center mr-6 group-hover:bg-brand-blue transition-colors">
                  <Mail className="text-brand-blue group-hover:text-white transition-colors" size={24} />
                </div>
                <div>
                  <span className="block font-bold text-brand-dark text-lg">Email</span>
                  <span className="text-slate-500">contact@globalcertification.com</span>
                </div>
              </a>

              <a href="https://instagram.com/global_certification" target="_blank" rel="noopener noreferrer" className="flex items-center p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-[#E1306C] hover:shadow-md transition-all group">
                <div className="w-14 h-14 bg-[#E1306C]/10 rounded-xl flex items-center justify-center mr-6 group-hover:bg-[#E1306C] transition-colors">
                  <i className="fab fa-instagram text-2xl text-[#E1306C] group-hover:text-white transition-colors"></i>
                </div>
                <div>
                  <span className="block font-bold text-brand-dark text-lg">Instagram</span>
                  <span className="text-slate-500">@global_certification</span>
                </div>
              </a>
              
              <div className="flex items-center p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-brand-sky hover:shadow-md transition-all group">
                <div className="w-14 h-14 bg-brand-blue/10 rounded-xl flex items-center justify-center mr-6 group-hover:bg-brand-sky transition-colors">
                  <MapPin className="text-brand-blue group-hover:text-white transition-colors" size={24} />
                </div>
                <div>
                  <span className="block font-bold text-brand-dark text-lg">Location</span>
                  <span className="text-slate-500">Benz Circle, Vijayawada</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl">
            <h3 className="text-2xl font-bold font-heading text-brand-dark mb-6">Send us a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">Your Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition" placeholder="john@example.com" />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">Subject</label>
                <input type="text" id="subject" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition" placeholder="Exam Voucher Inquiry" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition resize-none" placeholder="How can we help you?"></textarea>
              </div>
              
              <button type="button" className="w-full bg-brand-dark text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-blue transition-colors shadow-lg flex items-center justify-center space-x-2">
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
