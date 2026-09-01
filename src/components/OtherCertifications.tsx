import React from 'react';

const OtherCertifications = () => {
  return (
    <section className="py-24 bg-bg-dark border-y border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">Discount Coupons Available for Global Certifications</h2>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-10 font-sans">We also promote certification opportunities and offer discount vouchers for a wide range of global technology providers.</p>
        
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto mb-12">
          {['Google Cloud', 'Cisco', 'CompTIA', 'Oracle', 'Salesforce', 'VMware', 'IBM', 'PMI (PMP, ACP)', 'ISACA', 'ITIL', 'Fortinet', 'AIGP', 'Claude Certifications'].map((tag) => (
            <span key={tag} className="px-5 py-2 text-white font-medium font-sans hover:text-brand-blue transition cursor-pointer">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="p-10 max-w-3xl mx-auto">
          <p className="text-white font-bold font-heading text-lg mb-6">Contact us on WhatsApp to check availability, pricing and offers for these certifications.</p>
          <a href="https://wa.me/9392828155?text=Hello!%20Can%20i%20get%20more%20info%20on%20this%20global%20certifications%20%3F" className="inline-block bg-brand-blue text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition font-heading">
            <i className="fab fa-whatsapp mr-2"></i> Get a Quote on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default OtherCertifications;
