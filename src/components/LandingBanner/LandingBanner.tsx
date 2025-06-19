import React from 'react';
import {
  BannerContainer,
  ContentContainer,
  Title,
  Subtitle,
  LogoContainer,
  LogoWrapper,
  StyledDynamicLogo,
  DemoButton
} from './LandingBanner.styles';
import type { LandingBannerProps } from './LandingBanner.types';

const LandingBanner: React.FC<LandingBannerProps> = () => {
  return (
    <BannerContainer>
      <ContentContainer>
        <Title>Energise Your Workforce</Title>
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