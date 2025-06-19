import React, { useState, useEffect } from 'react';
import {
  BannerContainer,
  ContentContainer,
  Title,
  HighlightedWord,
  Subtitle,
  LogoContainer,
  LogoWrapper,
  StyledDynamicLogo,
  DemoButton
} from './LandingBanner.styles';
import type { LandingBannerProps } from './LandingBanner.types';

const LandingBanner: React.FC<LandingBannerProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      // Check if user has scrolled more than 1px
      const scrolled = window.scrollY > 1;
      setIsScrolled(scrolled);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <BannerContainer>
      <ContentContainer>
        <Title>
          <HighlightedWord isScrolled={isScrolled}>ENERGISE</HighlightedWord> YOUR WORKFORCE
        </Title>
        <Subtitle>
          Transform employee wellness from buzzword to business advantage with <b>cult for corporates.</b>
        </Subtitle>
      </ContentContainer>
      
      <LogoContainer>
        <LogoWrapper 
          whileHover={{ 
            scale: 1.1,
            transition: { duration: 0.3 }
          }}
        >
          <StyledDynamicLogo />
        </LogoWrapper>
        
        <DemoButton 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Request a Demo
        </DemoButton>
      </LogoContainer>
    </BannerContainer>
  );
};

export default LandingBanner; 