import React, { Suspense } from 'react';
import styled from 'styled-components';
import LandingBanner from '../components/LandingBanner/LandingBanner';

// Lazy load heavy components for better performance
const Clientele = React.lazy(() => import('../components/Clientele/Clientele'));
const CombinedWellnessSection = React.lazy(() => import('../components/CombinedWellnessSection/CombinedWellnessSection'));
const ContactUs = React.lazy(() => import('../components/ContactUs/ContactUs'));
const Testimonials = React.lazy(() => import('../components/Testimonials/Testimonials'));
const OurImpact = React.lazy(() => import('../components/OurImpact/OurImpact'));
const LogoLoader = React.lazy(() => import('../components/LogoLoader/LogoLoader'));

// Loading fallback component
const LoadingFallback = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  color: var(--color-text);
  font-size: var(--font-size-md);
`;

const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
`;

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <LandingBanner />
      <Suspense fallback={<LoadingFallback>Loading...</LoadingFallback>}>
        <Clientele />
      </Suspense>
      <Suspense fallback={<LoadingFallback>Loading...</LoadingFallback>}>
        <CombinedWellnessSection />
      </Suspense>
      {/* <WellnessSolutions />
      <NumbersDontLie />
      <WhyChooseCult /> */}
      <Suspense fallback={<LoadingFallback>Loading...</LoadingFallback>}>
        <ContactUs />
      </Suspense>
      <Suspense fallback={<LoadingFallback>Loading...</LoadingFallback>}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<LoadingFallback>Loading...</LoadingFallback>}>
        <OurImpact />
      </Suspense>
      <Suspense fallback={<LoadingFallback>Loading...</LoadingFallback>}>
        <LogoLoader />
      </Suspense>
    </HomeContainer>
  );
};

export default Home;
