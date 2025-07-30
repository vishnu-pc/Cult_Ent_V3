import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { LandingBannerDivider } from '../ui/GradientDivider';
import {
  BannerContainer,
  MainContent,
  ContentContainer,
  Title,
  HighlightedWord,
  // SpecialLetterN,
  // SpecialLetterK,
  Subtitle,
  SubtitleBold,
  LogoContainer,
  LogoWrapper,
  StyledDynamicLogo,
  CTAButton,
  NewDemoButton,
  NewDemoButtonText,
} from './LandingBanner.styles';
import type { LandingBannerProps } from './LandingBanner.types';

/**
 * LANDING BANNER COMPONENT
 *
 * This component manages multiple animation states with priority-based system:
 * 1. Scroll-triggered animations (persistent, one-way activation)
 * 2. Hover animations (secondary priority, mobile-disabled)
 * 3. Background gradient animation (always running)
 * 4. Button animations (border color, hover/tap effects)
 *
 * STATE PRIORITY: Scroll takes precedence over hover for seamless transitions
 */
const LandingBanner: React.FC<LandingBannerProps> = () => {
  // STATE MANAGEMENT FOR ANIMATIONS
  const [scrollTriggered, setScrollTriggered] = useState(false); // One-way scroll activation
  const [hoverActive, setHoverActive] = useState(false); // Hover state for desktop
  const [isMobile, setIsMobile] = useState(false); // Mobile detection state
  const [showDemoButton, setShowDemoButton] = useState(false); // Demo button visibility state

  // COMMENTED OUT FOR FUTURE USE - PERSISTENT ACTIVATION
  // const [persistentActivation, setPersistentActivation] = useState(false);
  // This can be used later to maintain state across page reloads/navigation

  /**
   * MOBILE DETECTION LOGIC
   * Detects mobile devices based on project's standard breakpoint (768px)
   * Disables hover interactions on mobile devices
   */
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Project standard mobile breakpoint
    };

    // Set initial mobile state
    checkMobile();

    // Listen for window resize to update mobile state
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  /**
   * SCROLL DETECTION LOGIC WITH DEBOUNCING
   * - Threshold: 5px (modified from original 1px)
   * - One-time activation: Listener removed after first trigger
   * - Performance optimized: No excessive state updates
   */
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;

    // Only activate if crossing threshold for the first time
    if (scrollY > 5 && !scrollTriggered) {
      setScrollTriggered(true);
      // Remove listener after activation - no more updates needed
      window.removeEventListener('scroll', handleScroll);
    }
  }, [scrollTriggered]);

  useEffect(() => {
    // Set initial state based on current scroll position
    if (window.scrollY > 5) {
      setScrollTriggered(true);
      return; // Don't add listener if already scrolled
    }

    // Add scroll listener with passive flag for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup function to remove listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  /**
   * DEMO BUTTON SCROLL DETECTION
   * Shows demo button when user scrolls past the LandingBanner section
   * Uses Intersection Observer for better performance
   */
  useEffect(() => {
    const handleDemoButtonScroll = () => {
      // Get the LandingBanner section height (100vh)
      const viewportHeight = window.innerHeight;
      const scrollY = window.scrollY;

      // Show button when scrolled past the landing banner (100vh)
      if (scrollY > viewportHeight && !showDemoButton) {
        setShowDemoButton(true);
      } else if (scrollY <= viewportHeight && showDemoButton) {
        setShowDemoButton(false);
      }
    };

    // Set initial state
    handleDemoButtonScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleDemoButtonScroll, {
      passive: true,
    });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleDemoButtonScroll);
    };
  }, [showDemoButton]);

  /**
   * PRIORITY-BASED HIGHLIGHT STATE
   * Scroll takes priority over hover for seamless transitions
   * - If scroll is triggered: Always highlighted (hover state irrelevant)
   * - If no scroll: Hover can activate/deactivate freely
   * - Mobile: Only scroll triggers highlight (no hover)
   */
  const getHighlightState = (): boolean => {
    if (scrollTriggered) return true; // Scroll always wins
    if (isMobile) return false; // No hover on mobile
    return hoverActive; // Hover only when no scroll and not mobile
  };

  const isHighlighted = getHighlightState();

  /**
   * HOVER EVENT HANDLERS
   * Only active on desktop devices
   * Smooth transitions: 0.3s duration (tunable in styles)
   */
  const handleMouseEnter = () => {
    if (!isMobile) {
      setHoverActive(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setHoverActive(false);
    }
  };

  return (
    <>
      <LandingBannerDivider />
      <BannerContainer>
        <MainContent>
          <ContentContainer>
            <Title>
              {/* 
              HIGHLIGHTED WORD WITH PRIORITY-BASED ANIMATION
              - Receives isHighlighted prop from priority-based state
              - Hover handlers: Only active on desktop (mobile detection)
              - Smooth transitions: 0.3s duration (tunable in styles)
              - When highlighted: Shows animated gradient text
              - When not highlighted: Shows outlined transparent text
            */}
              <HighlightedWord
                isScrolled={isHighlighted}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                ENERGISE<br></br>
              </HighlightedWord>{' '}
              YOUR<br></br>
              WORKFORCE
            </Title>
            <Subtitle>
              Transform employee wellness from buzzword to business advantage
              with <SubtitleBold>cult for corporates.</SubtitleBold>
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
          - transition: Smooth 0.3s animation duration (tunable)
          - Hover handlers: Synced with text highlighting system
          - Mobile: Hover disabled, only scroll triggers animation
        */}
            <LogoWrapper
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.3 }, // Tunable: adjust hover animation speed
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/*
              DYNAMIC LOGO WITH PRIORITY-BASED HIGHLIGHT
              - forceHighlight prop: Passes priority-based highlight state
              - When true: Logo shows colored/animated state
              - When false: Logo shows outlined/static state
              - Synchronized with text gradient through priority system
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
      {/* Temporarily removed in order to change the design and add back later */}
      {/* <DemoButton whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }}>
        REQUEST DEMO &gt;&gt;
      </DemoButton> */}

      {/* NEW DEMO BUTTON - Vertical tab design with scroll-triggered visibility */}
      <AnimatePresence mode='wait'>
        {showDemoButton && (
          <NewDemoButton
            key='demo-button'
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 20,
              duration: 0.5,
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              // Navigate to contact section
              document
                .getElementById('contact-us')
                ?.scrollIntoView({ behavior: 'smooth' });
            }}
            tabIndex={0}
            role='button'
            aria-label='Request a demo - Navigate to contact section'
          >
            <NewDemoButtonText>REQUEST A DEMO</NewDemoButtonText>
          </NewDemoButton>
        )}
      </AnimatePresence>
    </>
  );
};

export default LandingBanner;
