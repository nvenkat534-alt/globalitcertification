import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AWSPage from './pages/AWS';
import MicrosoftPage from './pages/Microsoft';
import GenericCertPage from './pages/GenericCertPage';
import CertificationsPage from './pages/CertificationsPage';
import TrainingPage from './pages/TrainingPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="font-sans text-brand-dark antialiased bg-slate-50 flex flex-col min-h-screen overflow-x-hidden">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aws" element={<AWSPage />} />
            <Route path="/microsoft" element={<MicrosoftPage />} />
            <Route path="/certifications" element={<CertificationsPage />} />
            <Route path="/certifications/:id" element={<GenericCertPage />} />
            <Route path="/training" element={<TrainingPage />} />
          </Routes>
        </main>
        
        <Footer />
        
        {/* Floating WhatsApp Button */}
        <a href="https://wa.me/919205531284" className="fixed bottom-6 right-6 bg-whatsapp text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition z-50 flex items-center justify-center">
          <i className="fab fa-whatsapp text-3xl"></i>
        </a>
      </div>
    </Router>
  );
}

export default App;
