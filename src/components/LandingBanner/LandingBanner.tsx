import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

interface LandingBannerProps {}

// Animation for background color change
const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const BannerContainer = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--spacing-2xl);
  background: linear-gradient(270deg, #121212, #1a1a1a, #242424);
  background-size: 600% 600%;
  animation: ${gradientAnimation} 15s ease infinite;
  overflow: hidden;
  
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: var(--spacing-xl);
  }
`;

const ContentContainer = styled.div`
  max-width: 50%;
  
  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: var(--spacing-2xl);
  }
`;

const Title = styled.h1`
  font-size: var(--font-size-5xl);
  margin-bottom: var(--spacing-md);
  
  @media (max-width: 768px) {
    font-size: var(--font-size-4xl);
  }
`;

const Subtitle = styled.p`
  font-size: var(--font-size-xl);
  color: var(--color-grey-light);
  margin-bottom: var(--spacing-xl);
  max-width: 80%;
  
  @media (max-width: 768px) {
    font-size: var(--font-size-lg);
    max-width: 100%;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (max-width: 768px) {
    margin-top: var(--spacing-xl);
  }
`;

const LogoWrapper = styled(motion.div)`
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--spacing-xl);
  
  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

const Logo = styled.div`
  font-size: 4rem;
  font-weight: 700;
  color: var(--color-text);
  background: linear-gradient(45deg, var(--color-accent-primary), var(--color-accent-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const DemoButton = styled(motion.button)`
  background: var(--color-accent-primary);
  color: var(--color-text);
  padding: var(--spacing-md) var(--spacing-xl);
  border-radius: var(--border-radius-full);
  font-size: var(--font-size-md);
  font-weight: 600;
  cursor: pointer;
  border: none;
  outline: none;
  
  &:hover {
    background: var(--color-accent-secondary);
  }
`;

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
            rotate: 5,
            transition: { duration: 0.3 }
          }}
        >
          <Logo>CULT</Logo>
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