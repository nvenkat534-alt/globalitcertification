import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import HowItWorks from '../components/HowItWorks';
import CenterpieceScroll from '../components/CenterpieceScroll';
import ScrollHighlightText from '../components/ScrollHighlightText';
import Certifications from '../components/Certifications';
import StatsCounter from '../components/StatsCounter';
import TestimonialsMarquee from '../components/TestimonialsMarquee';
import DiscountCoupon from '../components/DiscountCoupon';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TrustBar />
      <HowItWorks />
      
      <ScrollHighlightText text="Success is not a coincidence. It is the result of focused mentorship, rigorous practice, and an unyielding commitment to your career growth." />
      
      <CenterpieceScroll />
      <Certifications />
      <StatsCounter />
      
      <TestimonialsMarquee />
      
      <DiscountCoupon />
    </main>
  );
}
