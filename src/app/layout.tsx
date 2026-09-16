import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "./career.css";
import "./experience.css";
import "./finder-landing.css";
import "./global-catalogue.css";
import "./career-hub.css";
import "./resume-builder.css";
import "./enquiry.css";
import "./certification-updates.css";
import CampaignTracking from "@/components/CampaignTracking";
import WhatsAppConcierge from "@/components/experience/WhatsAppConcierge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://www.globalcertsit.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Global IT Certifications | PMP, AWS, Azure & AI | Global Certs IT",
    template: "%s | Global Certs IT",
  },
  description:
    "Find current global certifications by role, experience and platform. Compare AWS, Microsoft, Google Cloud, data, AI and PMP pathways with personal certification guidance.",
  keywords: [
    "IT Certification",
    "AWS Certification",
    "Microsoft Azure Certification",
    "Salesforce Certification",
    "Exam Vouchers",
    "IT Training",
    "Global Certs IT",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Global Certs IT",
    title: "Global IT Certifications | PMP, AWS, Azure & AI | Global Certs IT",
    description:
      "Explore global IT certifications, PMP, AWS, Microsoft and AI. Get personal certification guidance, exam details and voucher enquiries on WhatsApp.",
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
    title: "Global IT Certifications | PMP, AWS, Azure & AI | Global Certs IT",
    description:
      "PMP, cloud, AI and data certifications. Get exam details and personal guidance on WhatsApp.",
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
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-CR0XC9N914"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CR0XC9N914');
          `}
        </Script>
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MJF8PDV8');
          `}
        </Script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Global Certs IT",
              url: baseUrl,
              logo: `${baseUrl}/logo.png`, // Add the correct path to your logo
              description:
                "Global IT certification guidance, exam information and voucher enquiries for PMP, AWS, Microsoft, Google Cloud and AI.",
              sameAs: [
                // Add social media links here
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased bg-bg-dark text-white">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MJF8PDV8"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <SmoothScroll>
          <Navbar />
          <div id="main-content">{children}</div>
          <Footer />

          <WhatsAppConcierge />
        </SmoothScroll>
        <CampaignTracking />
      </body>
    </html>
  );
}
