import React from 'react';
import Hero from '../components/Hero';
import Certifications from '../components/Certifications';
import Training from '../components/Training';
import DiscountCoupon from '../components/DiscountCoupon';

const Home = () => {
  return (
    <>
      <Hero />
      <Certifications />
      <Training />
      <DiscountCoupon />
    </>
  );
};

export default Home;
