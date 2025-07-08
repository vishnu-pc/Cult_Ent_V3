import React, { useState, useEffect } from 'react';
import { LandingBannerDivider } from '../ui/GradientDivider';
import {
  BannerContainer,
  MainContent,
  ContentContainer,
  Title,
  HighlightedWord,
  Subtitle,
  LogoContainer,
  LogoWrapper,
  StyledDynamicLogo,
  DemoButton,
  CTAButton,
} from './LandingBanner.styles';
import type { LandingBannerProps } from './LandingBanner.types';

/**
 * LANDING BANNER COMPONENT
 *
 * This component manages multiple animation states:
 * 1. Scroll-triggered animations (text gradient, logo animation)
 * 2. Hover animations (logo scale, text highlight)
 * 3. Background gradient animation (always running)
 * 4. Button animations (border color, hover/tap effects)
 */
const LandingBanner: React.FC<LandingBannerProps> = () => {
  // STATE MANAGEMENT FOR ANIMATIONS
  const [isScrolled, setIsScrolled] = useState(false); // Tracks if user has scrolled
  const [isHovered, setIsHovered] = useState(false); // Tracks hover state on logo/text

  /**
   * SCROLL DETECTION LOGIC
   * Sets up event listener to detect when user scrolls
   * Once triggered, the effect persists (doesn't reset when scrolling back to top)
   */
  useEffect(() => {
    // Set initial state based on current scroll position
    setIsScrolled(window.scrollY > 0);

    const handleScroll = () => {
      // Detect any scroll movement (Not in Use)
      //setIsScrolled(window.scrollY > 0);

      // PERSISTENT ACTIVATION: Once activated, don't turn it off when scrolling back to top
      // This ensures the gradient effect stays active after first scroll
      if (window.scrollY > 0) {
        setIsScrolled(true);
      }
    };

    // Add scroll listener with passive flag for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup function to remove listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  /**
   * COMBINED ANIMATION STATE
   * Combines scroll and hover states to trigger animations
   * Either scrolling OR hovering will activate the gradient effects
   */
  const isHighlighted = isScrolled || isHovered;

  return (
    <>
      <LandingBannerDivider />
      <BannerContainer>
        <MainContent>
          <ContentContainer>
            <Title>
              {/* 
              HIGHLIGHTED WORD WITH HOVER DETECTION
              - Receives isScrolled prop to determine animation state
              - onMouseEnter/Leave: Updates hover state for immediate feedback
              - When highlighted: Shows animated gradient text
              - When not highlighted: Shows outlined transparent text
            */}
              <HighlightedWord
                isScrolled={isHighlighted}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                ENERGISE
              </HighlightedWord>{' '}
              YOUR WORKFORCE
            </Title>
            <Subtitle>
              Transform employee wellness from buzzword to business advantage
              with <b>cult for corporates.</b>
            </Subtitle>

            {/* 
              CTA BUTTON - Positioned at the base of ContentContainer
              - Horizontally aligned to the left of the content
              - Gradient background with hover animations
              - Framer Motion animations for smooth interactions
            */}
            <CTAButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                // Handle CTA button click - can be connected to form or contact section
                document
                  .getElementById('contact-section')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Request A Demo
            </CTAButton>
          </ContentContainer>

          <LogoContainer>
            {/*
          LOGO WRAPPER WITH FRAMER MOTION ANIMATIONS
          - whileHover: Scales logo to 1.1x on hover (10% larger)
          - transition: Smooth 0.3s animation duration
          - onMouseEnter/Leave: Syncs hover state with text highlighting
          - This creates coordinated hover effects between logo and text
        */}
            <LogoWrapper
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 },
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/*
              DYNAMIC LOGO WITH FORCED HIGHLIGHT
              - forceHighlight prop: Passes combined scroll/hover state
              - When true: Logo shows colored/animated state
              - When false: Logo shows outlined/static state
              - This synchronizes logo animation with text gradient
            */}
              <StyledDynamicLogo forceHighlight={isHighlighted} />
            </LogoWrapper>
          </LogoContainer>
        </MainContent>
      </BannerContainer>

      {/* 
        FIXED GLASS DEMO BUTTON
        - Apple-inspired liquid glass design with round shape
        - position: fixed keeps it visible while scrolling
        - whileHover: Scales to 1.2x with enhanced glass effect
        - whileTap: Scales to 0.95x when clicked for tactile feedback
        - Glass morphism: backdrop-filter blur with multi-layered shadows
        - Animated border: Color cycles between yellow and pink
        - z-index: High value to stay above other content
      */}
      <DemoButton whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }}>
        REQUEST DEMO &gt;&gt;
      </DemoButton>
    </>
  );
};

export default LandingBanner;
