import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Global Certification Training & Exam Vouchers",
  description: "Get Certified. Stand Ahead of Your Competition. Advance your IT career with personalized training, complete certification guidance, and expert support for AWS, Microsoft Azure, and Salesforce.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className="font-sans antialiased bg-slate-50 text-slate-900">
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
          
          {/* Floating WhatsApp Widget */}
          <a 
            href="https://wa.me/919205531284" 
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-[100] bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-md hover:scale-110 hover:bg-[#20bd5a] transition-all duration-300 group"
          >
            <i className="fab fa-whatsapp text-3xl"></i>
            {/* Tooltip */}
            <span className="absolute right-full mr-4 bg-white text-slate-800 text-sm font-semibold px-3 py-2 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap hidden sm:block border border-slate-100">
              Chat with us!
            </span>
          </a>
        </SmoothScroll>
      </body>
    </html>
  );
}
