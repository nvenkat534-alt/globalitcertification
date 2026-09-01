import React from 'react';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-bg-dark pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold font-heading text-white mb-4">Terms and Conditions</h1>
          <p className="text-slate-400 mb-10 pb-6 border-b border-slate-800">Last Updated: {new Date().toLocaleDateString()}</p>
          
          <div className="space-y-8 text-slate-400 font-sans leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p>
                Welcome to Global Cer SIT. By accessing our website and using our services, you agree to comply with and be bound by the following terms and conditions. If you disagree with any part of these terms, please do not use our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Exam Vouchers</h2>
              <p>
                All certification exam vouchers purchased through Global Cer SIT are subject to the policies of the respective vendors (AWS, Microsoft, Salesforce, etc.). Vouchers are non-transferable and non-refundable once issued. The validity period of each voucher is set by the vendor and cannot be extended by us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Personalized Training</h2>
              <p>
                Our personalized training schedules are flexible. However, students are expected to provide at least 24 hours of notice for any session cancellations or rescheduling. Repeated no-shows may result in the forfeiture of training hours.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Payment Terms</h2>
              <p>
                Payments for vouchers and training programs must be made in full before the commencement of services, unless a specific "Pay With Confidence" or installment agreement has been executed in writing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Intellectual Property</h2>
              <p>
                The content, layout, design, data, databases and graphics on this website are protected by intellectual property laws. You may not reproduce, download, transmit or retransmit any part of this website without our prior written consent.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Limitation of Liability</h2>
              <p>
                Global IT Certifications is not liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to, or use of, the site or our services. Passing an exam ultimately depends on the candidate's effort and preparation.
              </p>
            </section>
          </div>
      </div>
    </main>
  );
}
