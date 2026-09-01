"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

const FloatingWhatsApp = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltip after 5 seconds
    const timer = setTimeout(() => setShowTooltip(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {showTooltip && (
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="bg-bg-dark text-slate-200 p-4 rounded-2xl shadow-xl mb-4 max-w-[250px] relative border border-slate-800/50"
          >
            <button 
              onClick={() => setShowTooltip(false)} 
              className="absolute top-2 right-2 text-slate-400 hover:text-slate-400"
            >
              <X size={14} />
            </button>
            <p className="text-sm font-medium pr-4 font-sans">Need help choosing a certification? Chat with our experts.</p>
            {/* Triangle pointer */}
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-bg-dark border-b border-r border-slate-800/50 transform rotate-45"></div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <a 
        href="https://wa.me/9392828155?text=Hello!%20Can%20i%20get%20more%20info%20on%20this%20global%20certifications%20%3F" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-16 h-16 bg-whatsapp text-white rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 relative group">
        <span className="absolute inset-0 rounded-full bg-whatsapp animate-ping opacity-25"></span>
        <MessageCircle size={32} />
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
