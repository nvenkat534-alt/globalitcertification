import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://globalcertsit.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Global Certs IT | Certification Training & Exam Vouchers",
    template: "%s | Global Certs IT",
  },
  description: "Get Certified. Stand Ahead of Your Competition. Advance your IT career with personalized training, complete certification guidance, and expert support for AWS, Microsoft Azure, and Salesforce.",
  keywords: ["IT Certification", "AWS Certification", "Microsoft Azure Certification", "Salesforce Certification", "Exam Vouchers", "IT Training", "Global Certs IT"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Global Certs IT",
    title: "Global Certs IT | Certification Training & Exam Vouchers",
    description: "Advance your IT career with personalized training, complete certification guidance, and expert support for top IT certifications.",
    images: [
      {
        url: `${baseUrl}/og-image.jpg`, // You can add a default og-image later
        width: 1200,
        height: 630,
        alt: "Global Certs IT",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Certs IT | Certification Training & Exam Vouchers",
    description: "Advance your IT career with personalized training and expert support.",
    images: [`${baseUrl}/og-image.jpg`],
  },
  alternates: {
    canonical: baseUrl,
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Global Certs IT",
              "url": baseUrl,
              "logo": `${baseUrl}/logo.png`, // Add the correct path to your logo
              "description": "Get Certified. Advance your IT career with personalized training, complete certification guidance, and expert support for AWS, Microsoft Azure, and Salesforce.",
              "sameAs": [
                // Add social media links here
              ]
            })
          }}
        />
      </head>
      <body className="font-sans antialiased bg-bg-dark text-white">
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
          
          {/* Floating WhatsApp Widget */}
          <a 
            href="https://wa.me/9392828155?text=Hello!%20Can%20i%20get%20more%20info%20on%20this%20global%20certifications%20%3F" 
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-[100] bg-whatsapp text-white w-14 h-14 rounded-full flex items-center justify-center shadow-md hover:scale-110 hover:bg-whatsapp-dark transition-all duration-300 group"
          >
            <i className="fab fa-whatsapp text-3xl"></i>
            {/* Tooltip */}
            <span className="absolute right-full mr-4 bg-slate-900 text-white text-sm font-semibold px-3 py-2 rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.6)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap hidden sm:block border border-slate-800">
              Chat with us!
            </span>
          </a>
        </SmoothScroll>
      </body>
    </html>
  );
}
