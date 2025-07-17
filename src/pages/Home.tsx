import React from 'react';
import styled from 'styled-components';
import LandingBanner from '../components/LandingBanner/LandingBanner';
import Clientele from '../components/Clientele/Clientele';
import CombinedWellnessSection from '../components/CombinedWellnessSection/CombinedWellnessSection';
// import WellnessSolutions from '../components/WellnessSolutions/WellnessSolutions';
// import NumbersDontLie from '../components/NumbersDontLie/NumbersDontLie';
// import WhyChooseCult from '../components/WhyChooseCult/WhyChooseCult';
import ContactUs from '../components/ContactUs/ContactUs';
import Testimonials from '../components/Testimonials/Testimonials';
import OurImpact from '../components/OurImpact/OurImpact';
import LogoLoader from '../components/LogoLoader/LogoLoader';
import BeBetterSection from '../components/BeBetterSection/BeBetterSection';
// import ProvenImpact from '../components/ProvenImpact/ProvenImpact';

const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
`;

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <LandingBanner />
      <Clientele />
      <CombinedWellnessSection />
      {/* <ProvenImpact /> */}
      {/* <WellnessSolutions />
      <NumbersDontLie />
      <WhyChooseCult /> */}
      <ContactUs />
      <Testimonials />
      <OurImpact />
      <LogoLoader />
      <BeBetterSection />
      {/* <Hashtag /> */}
    </HomeContainer>
  );
};

export default Home;
