import styled, { keyframes } from 'styled-components';
import backgroundImage from '../../assets/images/Our_Clientele/Our_Clientele.jpg';
import type { StyledComponentProps, HeadingLineProps } from './Clientele.types';

// Animation for logo carousel
export const slideAnimation = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

// Animation for text fade in
export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ClienteleSection = styled.section`
  position: relative;
  height: 120vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
`;

export const ContentContainer = styled.div`
  position: relative;
  height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: var(--spacing-2xl);
  z-index: 2;
`;

export const SectionTitle = styled.h3<StyledComponentProps>`
  font-size: var(--font-size-xl);
  text-transform: uppercase;
  margin-bottom: var(--spacing-2xl);
  letter-spacing: 2px;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  animation: ${({ isVisible }) => (isVisible ? fadeIn : 'none')} 1.6s ease-out forwards;
`;

export const MainHeading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const HeadingLine = styled.h2<HeadingLineProps>`
  font-size: var(--font-size-5xl);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 4px;
  line-height: 1.2;
  opacity: 0;
  animation: ${({ isVisible }) => (isVisible ? fadeIn : 'none')} 1.6s ease-out forwards;
  animation-delay: ${({ delay }) => delay}s;
  
  @media (max-width: 768px) {
    font-size: var(--font-size-3xl);
  }
`;

export const StatText = styled.p<StyledComponentProps>`
  font-size: var(--font-size-xl);
  margin-top: var(--spacing-2xl);
  max-width: 800px;
  opacity: 0;
  animation: ${({ isVisible }) => (isVisible ? fadeIn : 'none')} 1.6s ease-out forwards;
  animation-delay: 1.6s;
  
  @media (max-width: 768px) {
    font-size: var(--font-size-lg);
  }
  
  strong {
    color: var(--color-text);
  }
`;

export const LogoCarouselContainer = styled.div`
  position: relative;
  height: 15%;
  width: 100%;
  overflow: visible;
  background-color: transparent;
  z-index: 2;
  display: flex;
  align-items: center;
`;

export const LogoSlider = styled.div`
  display: flex;
  width: fit-content;
  animation: ${slideAnimation} 30s linear infinite;
  height: 100%;
  align-items: center;
`;

export const LogoGroup = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const LogoImage = styled.img`
  height: 100%;
  //max-height: 800px;
  width: 150%;
  //min-width: 100vw;
  object-fit: fill;
`; 