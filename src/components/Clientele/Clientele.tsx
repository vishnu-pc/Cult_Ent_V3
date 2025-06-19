import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import backgroundImage from '../../assets/images/Our_Clientele/Our_Clientele.jpg';
import corporateLogos from '../../assets/icons/Corporate_Logos.png';

interface ClienteleProps {}

// Animation for logo carousel
const slideAnimation = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

// Animation for text fade in
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ClienteleSection = styled.section`
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

const ContentContainer = styled.div`
  position: relative;
  height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: var(--spacing-2xl);
  z-index: 2;
`;

const SectionTitle = styled.h3<{ isVisible: boolean }>`
  font-size: var(--font-size-xl);
  text-transform: uppercase;
  margin-bottom: var(--spacing-2xl);
  letter-spacing: 2px;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  animation: ${({ isVisible }) => (isVisible ? fadeIn : 'none')} 1.6s ease-out forwards;
`;

const MainHeading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const HeadingLine = styled.h2<{ isVisible: boolean; delay: number }>`
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

const StatText = styled.p<{ isVisible: boolean }>`
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

const LogoCarouselContainer = styled.div`
  position: relative;
  height: 15%;
  width: 100%;
  overflow: hidden;
  background-color: transparent;
  z-index: 2;
`;

const LogoSlider = styled.div`
  display: flex;
  width: fit-content;
  animation: ${slideAnimation} 30s linear infinite;
`;

const LogoGroup = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  height: 200px;
  object-fit: contain;
`;

const Clientele: React.FC<ClienteleProps> = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the section is 50% visible, trigger animations
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <ClienteleSection ref={sectionRef}>
      <ContentContainer>
        <SectionTitle isVisible={isVisible}>OUR CLIENTELE</SectionTitle>
        <MainHeading>
          <HeadingLine isVisible={isVisible} delay={0.9}>GREAT COMPANIES</HeadingLine>
          <HeadingLine isVisible={isVisible} delay={1.2}>DESERVE</HeadingLine>
          <HeadingLine isVisible={isVisible} delay={1.6}>GREAT WELLNESS</HeadingLine>
          <HeadingLine isVisible={isVisible} delay={2.3}>PROGRAMS</HeadingLine>
        </MainHeading>
        
        <StatText isVisible={isVisible}>
          1500+ companies across industries that prioritized their most valuable asset: <strong>Their People</strong>
        </StatText>
      </ContentContainer>
      
      <LogoCarouselContainer>
        <LogoSlider>
          <LogoGroup>
            <LogoImage src={corporateLogos} alt="Corporate Partners" />
            <LogoImage src={corporateLogos} alt="Corporate Partners" />
          </LogoGroup>
        </LogoSlider>
      </LogoCarouselContainer>
    </ClienteleSection>
  );
};

export default Clientele; 