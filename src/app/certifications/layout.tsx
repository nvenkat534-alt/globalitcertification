import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IT Certification Catalog | Global Certs IT',
  description: 'Browse our complete catalog of globally recognised IT certifications including AWS, Microsoft Azure, Google Cloud, and Cisco. Get discounted exam vouchers.',
  keywords: ['IT Certifications', 'AWS Certification', 'Azure Certification', 'Exam Vouchers', 'Global Certs IT'],
  openGraph: {
    title: 'IT Certification Catalog | Global Certs IT',
    description: 'Browse our complete catalog of globally recognised IT certifications. Get discounted exam vouchers.',
  }
};

export default function CertificationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
