import React, { useState, useEffect, useRef } from 'react';
import { ClienteleDivider } from '../ui/GradientDivider';
import { duplicatedLogos } from './constants';
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
  LogoImage,
  GrayscaleOverlay,
  GradientOverlay,
} from './Clientele.styles';

const Clientele: React.FC<ClienteleProps> = () => {
  // STATE MANAGEMENT FOR ANIMATIONS
  const [isVisible, setIsVisible] = useState(false); // Controls text fade-in animations
  const [isActive, setIsActive] = useState(false); // Controls overlay transition (grayscale → gradient)
  const sectionRef = useRef<HTMLElement>(null);

  // TEXT ANIMATION OBSERVER - Controls when text elements fade in
  useEffect(() => {
    const currentSection = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the section is 50% visible, trigger text animations
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once triggered (one-time animation)
        }
      },
      {
        root: null, // Use viewport as root
        rootMargin: '0px', // No margin adjustment
        threshold: 0.5, // TUNABLE: Text animation trigger point (0.5 = 50% visible)
        // Adjust this value to control when text starts animating:
        // - 0.3 = Text animates when 30% visible (earlier)
        // - 0.7 = Text animates when 70% visible (later)
      }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  // OVERLAY TRANSITION OBSERVER - Controls grayscale → gradient transition
  // Separate observer for overlay transition at 70% visibility
  useEffect(() => {
    const currentSection = sectionRef.current;

    const overlayObserver = new IntersectionObserver(
      ([entry]) => {
        // When 70% of the section is visible, activate gradient overlay
        setIsActive(entry.isIntersecting);
        // NOTE: This toggles both ways - gradient appears when scrolling down,
        // grayscale returns when scrolling back up
      },
      {
        root: null, // Use viewport as root
        rootMargin: '0px', // No margin adjustment
        threshold: 0.5, // TUNABLE: Overlay transition trigger point (0.7 = 70% visible)
        // Adjust this value to control when overlay transitions:
        // - 0.3 = Transitions when 30% visible (earlier transition)
        // - 0.5 = Transitions when 50% visible (middle transition)
        // - 0.8 = Transitions when 80% visible (later transition)
      }
    );

    if (currentSection) {
      overlayObserver.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        overlayObserver.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <>
      <ClienteleDivider />
      <ClienteleSection id='clientele' ref={sectionRef} isActive={isActive}>
        {/* GRAYSCALE OVERLAY - INACTIVE STATE */}
        {/* This overlay creates the black and white effect when section is not active */}
        <GrayscaleOverlay isActive={isActive} />

        {/* GRADIENT OVERLAY - ACTIVE STATE */}
        {/* This overlay creates the animated gradient effect when section becomes active */}
        <GradientOverlay isActive={isActive} />

        {/* SECTION TITLE - Positioned outside ContentContainer for mobile layout */}
        <SectionTitle isVisible={isVisible}>OUR CLIENTELE</SectionTitle>

        <ContentContainer>
          <MainHeading>
            {/* TEXT ANIMATIONS - Each line has individual delay for staggered effect */}
            <HeadingLine isVisible={isVisible} delay={1.0} alignment='right'>
              GREAT COMPANIES
            </HeadingLine>
            <HeadingLine isVisible={isVisible} delay={1.5} alignment='left'>
              DESERVE
            </HeadingLine>
            <HeadingLine isVisible={isVisible} delay={2.3} alignment='left'>
              GREAT WELLNESS
            </HeadingLine>
            <HeadingLine isVisible={isVisible} delay={2.8} alignment='right'>
              PROGRAMS
            </HeadingLine>
          </MainHeading>

          <StatText isVisible={isVisible}>
            1500+ companies across industries that prioritized their most
            valuable asset: <strong>Their People</strong>
          </StatText>
        </ContentContainer>

        <LogoCarouselContainer>
          <LogoSlider>
            <LogoGroup>
              {duplicatedLogos.map((logo, index) => (
                <LogoImage
                  key={`${logo.id}-${index}`}
                  src={logo.src}
                  alt={logo.alt}
                />
              ))}
            </LogoGroup>
          </LogoSlider>
        </LogoCarouselContainer>
      </ClienteleSection>
    </>
  );
};

export default Clientele;
