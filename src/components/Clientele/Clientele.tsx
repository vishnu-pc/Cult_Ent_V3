import React, { useState, useEffect, useRef } from 'react';
import { ClienteleDivider } from '../ui/GradientDivider';
import corporateLogos from '../../assets/icons/Corporate_Logos.png';
import type { ClienteleProps } from './Clientele.types';
import {
  ClienteleSection,
  ContentContainer,
  SectionTitle,
  MainHeading,
  HeadingLine,
  StatText,
  LogoCarouselContainer,
  LogoSlider,
  LogoGroup,
  LogoImage
} from './Clientele.styles';

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
    <>
    <ClienteleDivider />
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
    </>
  );
};

export default Clientele; 