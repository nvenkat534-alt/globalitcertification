"use client";
import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;
    
    let text = `Hello! I'm ${name}.\n`;
    if (email) text += `My email is ${email}.\n`;
    if (subject) text += `I'm contacting you regarding: ${subject}\n`;
    text += `\n${message}`;
    
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/9392828155?text=${encodedText}`, '_blank');
  };

  return (
    <main className="min-h-screen bg-bg-dark pb-20">
      {/* Hero */}
      <div className="bg-bg-dark pt-32 pb-24 border-b border-brand-blue/30 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-brand-blue rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-heading">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-sky">Us</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto font-sans">
            Have questions about our certifications or need help getting started? We're here for you.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <div className="bg-bg-dark rounded-3xl p-8 lg:p-10 border border-slate-800 shadow-xl flex flex-col justify-center">
            <h2 className="text-3xl font-bold font-heading text-white mb-8">Get in Touch</h2>
            <div className="space-y-8">
              
              <div className="flex items-start group">
                <div className="mt-1 mr-5 text-brand-blue">
                  <Phone size={32} />
                </div>
                <div>
                  <span className="block font-bold text-xl text-white">Call Us</span>
                  <a href="tel:+919392828155" className="text-slate-400 text-lg hover:text-brand-blue transition">+91 93928 28155</a>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="mt-1 mr-5 text-brand-blue">
                  <Mail size={32} />
                </div>
                <div>
                  <span className="block font-bold text-xl text-white">Email Us</span>
                  <a href="mailto:nvenkat534@gmail.com" className="text-slate-400 text-lg hover:text-brand-blue transition">nvenkat534@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="mt-1 mr-5 text-brand-blue">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </div>
                <div>
                  <span className="block font-bold text-xl text-white">Instagram</span>
                  <a href="https://instagram.com/global_certification_" className="text-slate-400 text-lg hover:text-brand-blue transition">@global_certification_</a>
                </div>
              </div>

              <div className="flex items-start group">
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
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-300 mb-2">Your Name</label>
                  <input type="text" id="name" name="name" className="w-full px-4 py-3 bg-bg-dark rounded-xl border border-slate-800 focus:bg-bg-dark focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition" placeholder="John Doe" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-300 mb-2">Email Address</label>
                  <input type="email" id="email" name="email" className="w-full px-4 py-3 bg-bg-dark rounded-xl border border-slate-800 focus:bg-bg-dark focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition" placeholder="john@example.com" />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-slate-300 mb-2">Subject</label>
                <input type="text" id="subject" name="subject" className="w-full px-4 py-3 bg-bg-dark rounded-xl border border-slate-800 focus:bg-bg-dark focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition" placeholder="Exam Voucher Inquiry" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-300 mb-2">Message</label>
                <textarea id="message" name="message" rows={5} className="w-full px-4 py-3 bg-bg-dark rounded-xl border border-slate-800 focus:bg-bg-dark focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition resize-none" placeholder="How can we help you?" required></textarea>
              </div>
              
              <button type="submit" className="w-full bg-whatsapp text-white px-8 py-4 rounded-xl font-bold hover:bg-green-600 transition-colors shadow-[0_0_30px_rgba(0,0,0,0.7)] flex items-center justify-center space-x-2">
                <span>Send via WhatsApp</span>
                <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </main>
  );
}
