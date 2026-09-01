import Hero from '../components/Hero';
import StatsCounter from '../components/StatsCounter';
import Certifications from '../components/Certifications';
import WhyChooseUs from '../components/WhyChooseUs';
import TestimonialsMarquee from '../components/TestimonialsMarquee';
import DiscountCoupon from '../components/DiscountCoupon';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Certifications />
      <StatsCounter />
      <WhyChooseUs />
      <TestimonialsMarquee />
      <DiscountCoupon />
    </main>
  );
}
