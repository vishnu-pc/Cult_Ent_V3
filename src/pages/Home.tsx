import React from 'react';
import styled from 'styled-components';
import LandingBanner from '../components/LandingBanner/LandingBanner';
import Clientele from '../components/Clientele/Clientele';
import WellnessSolutions from '../components/WellnessSolutions/WellnessSolutions';
import ProvenImpact from '../components/ProvenImpact/ProvenImpact';
import WhyChooseCult from '../components/WhyChooseCult/WhyChooseCult';
import ContactUs from '../components/ContactUs/ContactUs';
import Testimonials from '../components/Testimonials/Testimonials';
import OurImpact from '../components/OurImpact/OurImpact';
import Hashtag from '../components/Hashtag/Hashtag';

interface HomeProps {}

const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
`;

const Home: React.FC<HomeProps> = () => {
  return (
    <HomeContainer>
      <LandingBanner />
      <Clientele />
      <WellnessSolutions />
      <ProvenImpact />
      <WhyChooseCult />
      <ContactUs />
      <Testimonials />
      <OurImpact />
      <Hashtag />
    </HomeContainer>
  );
};

export default Home; 