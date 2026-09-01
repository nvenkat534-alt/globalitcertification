import React from 'react';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold font-heading text-brand-dark mb-4">Privacy Policy</h1>
          <p className="text-slate-500 mb-10 pb-6 border-b border-slate-200">Last Updated: {new Date().toLocaleDateString()}</p>
          
          <div className="space-y-8 text-slate-600 font-sans leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">1. Information We Collect</h2>
              <p>
                We may collect personal information such as your name, email address, phone number, and location when you voluntarily submit it to us through our contact forms, WhatsApp chats, or voucher purchase requests. We also collect non-personal data such as browser type, operating system, and web pages visited to help manage our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">2. How We Use Your Information</h2>
              <p>
                The information we collect is used to:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Provide you with information, products, or services that you request from us.</li>
                <li>Process transactions and deliver exam vouchers.</li>
                <li>Schedule personalized training sessions.</li>
                <li>Improve our website and customer service.</li>
                <li>Send periodic emails regarding your order or other products and services.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">3. Data Protection</h2>
              <p>
                We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">4. Third-Party Disclosure</h2>
              <p>
                We do not sell, trade, or otherwise transfer your Personally Identifiable Information to outside parties unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">5. Contacting Us</h2>
              <p>
                If there are any questions regarding this privacy policy, you may contact us using the information on our Contact Us page.
              </p>
            </section>
          </div>
      </div>
    </main>
  );
}
