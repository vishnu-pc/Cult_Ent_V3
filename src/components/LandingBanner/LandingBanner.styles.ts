import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import DynamicLogo from '../DynamicLogo';

// Animation for background color change
export const gradientAnimation = keyframes`
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

export const BannerContainer = styled.section`
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

export const ContentContainer = styled.div`
  max-width: 50%;
  
  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: var(--spacing-2xl);
  }
`;

export const Title = styled.h1`
  font-size: var(--font-size-5xl);
  margin-bottom: var(--spacing-md);
  
  @media (max-width: 768px) {
    font-size: var(--font-size-4xl);
  }
`;

export const Subtitle = styled.p`
  font-size: var(--font-size-xl);
  color: var(--color-grey-light);
  margin-bottom: var(--spacing-xl);
  max-width: 80%;
  
  @media (max-width: 768px) {
    font-size: var(--font-size-lg);
    max-width: 100%;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (max-width: 768px) {
    margin-top: var(--spacing-xl);
  }
`;

export const LogoWrapper = styled(motion.div)`
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

export const StyledDynamicLogo = styled(DynamicLogo)`
  width: 100%;
  height: 100%;
`;

export const DemoButton = styled(motion.button)`
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