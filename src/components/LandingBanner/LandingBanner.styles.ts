import styled, { keyframes, css } from 'styled-components';
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

// Gradient text animation for highlighted word
export const gradientTextAnimation = keyframes`
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
  background: rgb(0, 0, 0);
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
  //background: rgb(58, 11, 11);

  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: var(--spacing-2xl);
  }
`;

export const Title = styled.h1`
  font-size: var(--font-size-xxl);
  margin-bottom: var(--spacing-lg);
  font-family: 'Inter', sans-serif;
  font-weight: 900;
  color: transparent;
  -webkit-text-stroke: 1.5px var(--color-text);
  text-stroke: 1.5px var(--color-text);
  
  @media (max-width: 768px) {
    font-size: var(--font-size-4xl);
  }
`;

export const HighlightedWord = styled.span<{ isScrolled: boolean }>`
  font-family: 'Inter', sans-serif;
  font-weight: 900;
  cursor: pointer;
  
  ${props => props.isScrolled && css`
    color: transparent;
    background: linear-gradient(to right, #FDD914, #40B9EB, #FF3278);
    background-size: 200% auto;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-stroke: 0;
    text-stroke: 0;
    animation: ${gradientTextAnimation} 11s ease infinite;
  `}
  
  ${props => !props.isScrolled && css`
    color: transparent;
    -webkit-text-stroke: 1.5px var(--color-text);
    text-stroke: 1.5px var(--color-text);
  `}
  
  transition: all 0.3s ease;
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
  //background: rgb(60, 37, 162);
  
  @media (max-width: 768px) {
    margin-top: var(--spacing-xl);
  }
`;

export const LogoWrapper = styled(motion.div)`
  width: 500px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--spacing-xl);
  
  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;

export const StyledDynamicLogo = styled(DynamicLogo)`
  width: 100%;
  height: 100%;
`;

export const DemoButton = styled(motion.button)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: var(--color-grey-dark);
  color: var(--color-text);
  font-size: var(--font-size-sm);
  font-weight: 600;
  cursor: pointer;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: var(--z-index-floating);
  
  &:hover {
    background: var(--color-accent-primary);
  }
  
  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    font-size: var(--font-size-xs);
    bottom: 1.5rem;
    right: 1.5rem;
  }
`; 