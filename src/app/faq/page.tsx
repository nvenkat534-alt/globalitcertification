import React from 'react';
import FAQComponent from '@/components/FAQ';
import Link from 'next/link';

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-20">
      <FAQComponent />
      
      {/* Contact CTA */}
      <section className="py-20 bg-brand-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-6">Still have questions?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Our experts are online and ready to help you map out your certification journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/919205531284" className="bg-[#25D366] text-white px-8 py-4 rounded-full font-bold hover:bg-[#20bd5a] transition shadow-lg shadow-[#25D366]/30 flex items-center justify-center">
              <i className="fab fa-whatsapp mr-2 text-xl"></i> Chat on WhatsApp
            </a>
            <Link href="/contact" className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/20 transition flex items-center justify-center">
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
