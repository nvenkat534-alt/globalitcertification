import React from 'react';

const DiscountCoupon = () => {
  return (
    <section className="py-20 bg-brand-blue relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 font-heading text-white">Discount Coupons Available for Global Certifications</h2>
        <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto font-sans">Get exclusive discounts on globally recognised certification exams. Save big on your certification journey.</p>
        
        <div className="bg-white/10 backdrop-blur-md py-4 px-8 rounded-2xl inline-block border border-white/20 mb-10">
          <p className="text-lg font-medium text-white font-sans">
            AWS | Azure | Google Cloud | Microsoft | Cisco | CompTIA | Oracle & More
          </p>
        </div>
        
        <div>
          <a href="https://wa.me/919205531284" className="inline-block bg-white text-brand-blue px-10 py-4 rounded-xl font-bold text-xl hover:bg-slate-50 transition shadow-xl transform hover:-translate-y-1 font-heading">
            <i className="fas fa-tag mr-2"></i> Get Discount on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default DiscountCoupon;
