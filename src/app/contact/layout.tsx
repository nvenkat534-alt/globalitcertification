import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Global Certs IT',
  description: 'Get in touch with Global Certs IT for inquiries about IT certifications, exam vouchers, and personalized training programs.',
  keywords: ['Contact', 'Global Certs IT', 'Support', 'IT Certification Help'],
  openGraph: {
    title: 'Contact Us | Global Certs IT',
    description: 'Get in touch with Global Certs IT for inquiries about IT certifications, exam vouchers, and personalized training programs.',
  }
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
