import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Expert-Led IT Certification Training | Global Certs IT',
  description: 'Get personalized, expert-led training for top IT certifications. Pass your exams on the first attempt with targeted tutoring and comprehensive mock tests.',
  keywords: ['IT Training', 'Certification Prep', 'AWS Training', 'Azure Training', 'Exam Prep'],
  openGraph: {
    title: 'Expert-Led IT Certification Training | Global Certs IT',
    description: 'Get personalized, expert-led training for top IT certifications. Pass your exams on the first attempt.',
  }
};

export default function TrainingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
