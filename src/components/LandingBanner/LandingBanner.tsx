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
  const [isHovered, setIsHovered] = useState(false);
  
  // Add scroll event listener
  useEffect(() => {
    // Set initial state based on current scroll position
    setIsScrolled(window.scrollY > 0);
    
    const handleScroll = () => {
      // Detect any scroll movement (Not in Use)
      //setIsScrolled(window.scrollY > 0);
      // Once activated, don't turn it off when scrolling back to top
      if (window.scrollY > 0) {
        setIsScrolled(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Combined state for both scroll and hover effects
  const isHighlighted = isScrolled || isHovered;
  
  return (
    <>
      <BannerContainer>
        <ContentContainer>
          <Title>
            <HighlightedWord 
              isScrolled={isHighlighted}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              ENERGISE
            </HighlightedWord> YOUR WORKFORCE
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
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <StyledDynamicLogo forceHighlight={isHighlighted} />
          </LogoWrapper>
        </LogoContainer>
      </BannerContainer>
      
      {/* Fixed demo button that stays visible while scrolling */}
      <DemoButton 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Demo
      </DemoButton>
    </>
  );
};

export default LandingBanner; 