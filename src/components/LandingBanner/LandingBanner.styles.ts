import styled, { keyframes, css } from 'styled-components';
import { motion } from 'framer-motion';
import DynamicLogo from '../DynamicLogo';
import CultMobileBackground from '../../assets/images/Banner/Cult-Mobile-Background.png';

/**
 * BACKGROUND GRADIENT ANIMATION
 * This keyframe animation moves the gradient background across the banner
 * - 0%: Gradient starts at left side (0% position)
 * - 50%: Gradient moves to right side (100% position)
 * - 100%: Gradient returns to left side (0% position)
 * This creates a continuous left-to-right-to-left movement
 */
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

/**
 * TEXT GRADIENT ANIMATION
 * Similar to background animation but applied to text
 * Used for the "ENERGISE" word highlighting effect
 * Creates a moving rainbow effect across the text
 */
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

/**
 * BUTTON BORDER ANIMATION
 * Animates the demo button border color
 * Cycles between yellow and pink using CSS variables
 * Creates a pulsing border effect to draw attention
 */
export const buttonBorderAnimation = keyframes`
  0% {
    border-color: var(--color-yellow);
  }
  50% {
    border-color: var(--color-pink);
  }
  100% {
    border-color: var(--color-yellow);
  }
`;

/**
 * BANNER CONTAINER - Main section with animated gradient background
 *
 * GRADIENT EXPLANATION:
 * - linear-gradient(15deg, ...): The 15deg sets the angle of the gradient
 *   - 0deg = left to right
 *   - 90deg = bottom to top
 *   - 15deg = slight diagonal (mostly horizontal with slight upward tilt)
 *
 * - Colors: #000000, #FDD914, #ED3A79, #00B4FF, #000000
 *   - Starts with black, goes through yellow, pink, blue, ends with black
 *   - Starting and ending with black creates smooth loop transitions
 *
 * - background-size: 600% 600%: Makes gradient much larger than container
 *   - This allows the animation to "slide" the gradient across the element
 *   - Larger percentages = more subtle movement, smaller = more dramatic
 *
 * - animation: 15s ease infinite:
 *   - 15s = full cycle duration
 *   - ease = smooth acceleration/deceleration
 *   - infinite = never stops
 */
export const BannerContainer = styled.section.attrs({
  className: 'hero-section',
})`
  /* Layout styling - spacing handled by .hero-section class in global.css */

  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;

  /* SUBTLE GRADIENT (OLD Background): Using CSS variables for consistency */
  /* background: var(--gradient-animated-subtle);
  background-size: 600% 600%;
  animation: ${gradientAnimation} 15s ease infinite;
  overflow: hidden; */

  /* NEW BLACK BASE BACKGROUND & ANIMATED GRADIENT OVERLAY*/
  background: black;
  overflow: hidden;

  /* MOBILE BACKGROUND IMAGE - Absolute positioning for full screen coverage */
  &::after {
    @media (max-width: 768px) {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 150vh; /* Increased height to allow vertical positioning */
      background-image: url(${CultMobileBackground});
      background-size: cover;
      background-position: 51.2% top; /* Move image left and higher - shows upper left portion */
      background-repeat: no-repeat;
      opacity: 0.05; /* 50% opacity as requested */
      z-index: 1; /* Below gradient overlay (z-index: 3) but above base background */
      pointer-events: none; /* Ensures content remains interactive */
      /* Move container up to show upper part of image */
      transform: translateY(-46vh);
    }

    /* Aspect ratio and dimension-based responsive design */

    @media (max-height: 1100px) {
      transform: translateY(-45.5vh);
    }

    @media (max-height: 900px) {
      transform: translateY(-47vh);
    }

    @media (max-height: 800px) {
      transform: translateY(-50vh);
    }

    @media (max-height: 700px) {
      transform: translateY(-48vh);
    }

    @media (max-height: 675px) {
      transform: translateY(-49.75vh);
    }

    /* Tablets Portrait (Wide and tall) */
    /* @media (min-width: 600px) and (min-height: 800px) {
      transform: translateY(-44vh);
    } */
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--gradient-animated-subtle);
    background-size: 600% 600%;
    animation: ${gradientAnimation} 15s ease infinite;
    z-index: 3;
    pointer-events: none;
  }

  /* All responsive spacing handled by .hero-section class in global.css */
`;

export const MainContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  flex: 1;

  /* Standardized spacing using new spacing variables */
  margin-bottom: var(
    --spacing-2xl
  ); /* 48px base - consistent with section spacing */

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    text-align: left;
    margin-bottom: var(--spacing-xl); /* Reduced for mobile */
  }
`;

export const ContentContainer = styled.div`
  max-width: 50%;
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 2;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: var(
      --spacing-3xl
    ); /* Increased spacing between content and logo on mobile */
    order: 2; /* Places ContentContainer second on mobile (after LogoContainer) */
  }
`;

/**
 * TITLE STYLING
 * Uses transparent color with text-stroke to create outlined text effect
 * This allows the background gradient to show through while maintaining readability
 */
export const Title = styled.h1`
  font-family: 'Inter', sans-serif;
  font-size: var(--font-size-xxl);
  font-weight: 900;

  /* Standardized spacing using new spacing scale */
  margin-bottom: var(--spacing-xl); /* 32px - increased for better hierarchy */

  color: black;
  paint-order: stroke fill;
  position: relative;
  z-index: 1;

  -webkit-text-stroke: 3px var(--color-text);
  text-stroke: 3px var(--color-text);

  @media (max-width: 768px) {
    font-size: calc(var(--font-size-5xl) * 1.05);
    margin-bottom: var(--spacing-lg); /* Reduced for mobile */
  }

  @media (max-width: 768px) and (min-width: 380px) {
    font-size: calc(var(--font-size-5xl) * 1.2);
    margin-bottom: var(--spacing-xl); /* Reduced for mobile */
  }

  @media (max-width: 380px) {
    font-size: calc(var(--font-size-5xl) * 1.1);
    margin-bottom: var(--spacing-sm); /* Reduced for mobile */
  }
`;

/**
 * HIGHLIGHTED WORD - "ENERGISE" with conditional animation
 *
 * ANIMATION STATES:
 * 1. Default (not scrolled/hovered): Transparent text with white outline
 * 2. Active (scrolled/hovered): Filled with animated gradient
 *
 * GRADIENT TEXT TECHNIQUE:
 * - background: Creates the gradient colors
 * - background-size: 200% auto: Makes gradient twice as wide for animation
 * - -webkit-background-clip: text: Clips gradient to text shape only
 * - color: transparent: Makes original text invisible so gradient shows
 * - -webkit-text-stroke: 0: Removes outline when gradient is active
 */
export const HighlightedWord = styled.span<{ isScrolled: boolean }>`
  font-family: 'Inter', sans-serif;
  position: relative;
  z-index: 1;
  font-weight: 900;
  cursor: pointer;

  /* ACTIVE STATE: Animated gradient text using CSS variables */
  ${props =>
    props.isScrolled &&
    css`
      color: transparent;
      background: var(--gradient-full);
      background-size: 200% auto; /* Double width for animation */
      -webkit-background-clip: text; /* Clip gradient to text shape */
      background-clip: text; /* Standard property */
      -webkit-text-stroke: 0; /* Remove outline */
      text-stroke: 0; /* Remove outline */
      animation: ${gradientTextAnimation} 17s ease infinite;
    `}

  /* DEFAULT STATE: Outlined transparent text */
  ${props =>
    !props.isScrolled &&
    css`
      color: black;
      paint-order: stroke fill;
      -webkit-text-stroke: 3px var(--color-text);
      text-stroke: 3px var(--color-text);
    `}
  
  /* SMOOTH TRANSITION: When switching between states */
  transition: all 0.3s ease; /* Tunable: adjust text highlight transition speed */
`;

/**
 * SPECIAL LETTER N - Uses different font specifically for individual letters
 * Inherits all styling from parent HighlightedWord but overrides font-family only
 */
export const SpecialLetterN = styled.span`
  font-family: 'Arial', 'Helvetica', sans-serif;
  letter-spacing: -0.03em;

  /* transform: scaleX(1.1);
  display: inline-block;
  transform-origin: center;
  background: inherit;
  background-size: 1000% 1000%; */
`;

export const SpecialLetterK = styled.span`
  font-family: 'Arial', 'Helvetica', sans-serif;
  letter-spacing: 0.02em;
`;

export const Subtitle = styled.p`
  font-size: var(--font-size-2xl);
  line-height: 200%;
  letter-spacing: -0.003em;
  color: var(--color-grey-light);
  max-width: 80%;

  /* Standardized spacing - removed bottom margin for better CTA button spacing */
  margin-bottom: var(--spacing-xxs); /* 8px - minimal spacing before CTA */

  @media (max-width: 1536px) {
    font-size: var(--font-size-xl);
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-xl);
    max-width: 100%;
    margin-bottom: var(--spacing-md);
    line-height: 175%; /* Tighter line spacing between subtitle lines */
  }
`;

export const SubtitleBold = styled.span`
  font-weight: 900;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 11;
  margin-right: -1.5rem;

  @media (max-width: 768px) {
    margin-top: var(--spacing-5xl);
    margin-bottom: var(
      --spacing-3xl
    ); /* Significantly more spacing between logo and title */
    margin-right: 0; /* Reset margin for mobile */
    order: 1; /* Places LogoContainer first on mobile (before ContentContainer) */
  }

  /* Aspect ratio and dimension-based responsive design */

  /* Narrow Tall Phones (Portrait) - Limited width, lots of height */
  @media (max-width: 414px) and (min-height: 800px) {
    margin-top: var(--spacing-5xl); /* 128px - Use available height */
    margin-bottom: var(--spacing-4xl); /* 96px */
  }

  /* Very Narrow Tall Phones - Ultra portrait */
  @media (max-width: 375px) and (min-height: 900px) {
    margin-top: var(--spacing-6xl); /* 192px - Maximum use of height */
    margin-bottom: var(--spacing-3xl); /* 64px */
  }

  /* Wide Short Phones/Tablets (Landscape) - Lots of width, limited height */
  @media (min-width: 600px) and (max-height: 500px) {
    margin-top: var(--spacing-lg); /* 24px - Conserve height */
    margin-bottom: var(--spacing-sm); /* 8px */
  }

  /* Standard Phones (Balanced dimensions) */
  @media (min-width: 375px) and (max-width: 599px) and (min-height: 600px) and (max-height: 899px) {
    margin-top: var(--spacing-4xl); /* 64px - Balanced spacing */
    margin-bottom: var(--spacing-xl); /* 48px */
  }

  /* Small Phones (Limited both width and height) */
  @media (max-width: 374px) and (max-height: 799px) {
    margin-top: var(--spacing-2xl); /* 48px - Compact spacing */
    margin-bottom: var(--spacing-lg); /* 24px */
  }

  /* Tablets Portrait (Wide and tall) */
  @media (min-width: 600px) and (min-height: 800px) {
    margin-top: var(--spacing-4xl); /* 96px - Good use of space */
    margin-bottom: var(--spacing-xxs); /* 48px */
  }
`;

/**
 * LOGO WRAPPER - Uses Framer Motion for hover animations
 *
 * FRAMER MOTION ANIMATIONS:
 * - whileHover: Defines animation state when element is hovered
 * - scale: 1.1: Increases size by 10% on hover
 * - transition: { duration: 0.3 }: Animation takes 0.3 seconds
 *
 * This creates a smooth scale-up effect when hovering over the logo
 */
export const LogoWrapper = styled(motion.div)`
  width: 37vw;
  height: 37vw;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    /* Use standardized spacing approach - maintain proportions */
    width: calc(
      81vw
    ); /* Slightly larger for mobile - responsive width based on viewport */
    height: calc(81vw); /* Maintain square aspect ratio */

    @media (min-width: 600px) and (max-height: 500px) {
      width: 0px;
      height: 0px;
      margin-bottom: var(--spacing-2xl);
    }
  }
`;

export const StyledDynamicLogo = styled(DynamicLogo)`
  width: 100%;
  height: 100%;
`;

/**
 * DEMO BUTTON - Fixed position with multiple animations
 *
 * POSITION: Fixed to bottom-right corner, stays visible while scrolling
 *
 * ANIMATIONS:
 * 1. Border Color Animation: Uses buttonBorderAnimation keyframe (8s cycle)
 * 2. Hover Scale: Framer Motion whileHover scales to 1.2x
 * 3. Tap Scale: Framer Motion whileTap scales to 0.95x (pressed effect)
 *
 * VISUAL EFFECTS:
 * - Circular button (border-radius: 50%)
 * - Drop shadow and box shadow for depth
 * - Gradient background
 * - High z-index to stay above other elements
 */
export const DemoButton = styled(motion.button)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid;
  cursor: pointer;
  z-index: 1000;

  /* Glass Morphism Background */
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.15) 0%,
    rgba(255, 255, 255, 0.05) 50%,
    rgba(255, 255, 255, 0.02) 100%
  );
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);

  /* Text Styling */
  color: white;
  font-size: 15px;
  font-weight: 700;
  text-align: center;
  line-height: 1;
  padding: 4px;

  /* Multi-layered Glass Shadows */
  box-shadow: 
    /* Outer glow */
    0 0 30px rgba(255, 255, 255, 0.1),
    /* Main shadow */ 0 8px 32px rgba(0, 0, 0, 0.3),
    /* Inner highlight */ inset 0 2px 4px rgba(255, 255, 255, 0.1),
    /* Inner shadow */ inset 0 -2px 4px rgba(0, 0, 0, 0.1);

  /* Animated Border */
  animation: ${buttonBorderAnimation} 3s ease-in-out infinite;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); /* Tunable: adjust demo button transition speed */

  /* Hover State - Enhanced Glass Effect */
  &:hover {
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.25) 0%,
      rgba(255, 255, 255, 0.15) 50%,
      rgba(255, 255, 255, 0.08) 100%
    );

    box-shadow: 
      /* Enhanced outer glow */
      0 0 40px rgba(255, 255, 255, 0.2),
      /* Lifted shadow */ 0 12px 40px rgba(0, 0, 0, 0.4),
      /* Brighter inner highlight */ inset 0 3px 6px rgba(255, 255, 255, 0.15),
      /* Inner shadow */ inset 0 -3px 6px rgba(0, 0, 0, 0.1);

    transform: translateY(-2px);
  }

  /* Active/Focus State */
  &:active,
  &:focus {
    outline: none;
    box-shadow:
      0 0 50px rgba(255, 255, 255, 0.3),
      0 6px 25px rgba(0, 0, 0, 0.3),
      inset 0 2px 4px rgba(255, 255, 255, 0.2),
      inset 0 -2px 4px rgba(0, 0, 0, 0.15);
  }

  @keyframes borderColorCycle {
    0%,
    100% {
      border-color: #ffff00;
    }
    50% {
      border-color: #ff69b4;
    }
  }

  /* Responsive Design - Using standardized spacing */
  @media (max-width: 768px) {
    bottom: var(--spacing-md); /* 16px */
    right: var(--spacing-md); /* 16px */
    width: 85px;
    height: 85px;
    font-size: 13px;
    padding: var(--spacing-xs); /* 4px */
  }

  @media (max-width: 640px) {
    bottom: var(--spacing-sm); /* 8px */
    right: var(--spacing-sm); /* 8px */
    width: 75px;
    height: 75px;
    font-size: 12px;
    padding: var(--spacing-xs); /* 4px */
  }
`;

/**
 * NEW DEMO BUTTON - Vertical tab design with camera notch shape
 *
 * DESIGN FEATURES:
 * - Fixed position on right edge, vertically centered
 * - Apple liquid glass background design
 * - Camera notch shape (rounded left corners, flush right edge)
 * - Vertical text orientation with logo at top
 * - Hover and active state animations
 */
export const NewDemoButton = styled(motion.div)`
  /* Fixed positioning - right edge, vertically centered */
  position: fixed;
  top: 50%;
  right: 0;
  z-index: 1000;

  /* Use margin to center instead of transform to avoid conflicts */
  margin-top: -6rem; /* Half of height (12rem / 2) to center vertically */

  /* Dimensions and shape */
  width: 3rem; /* 48px */
  height: 12rem; /* 128px */

  /* Camera notch shape - rounded left corners only */
  border-radius: var(--border-radius-lg) 0 0 var(--border-radius-lg);

  /* Padding - adjusted for 3rem width */
  padding: var(--spacing-md) var(--spacing-xs) var(--spacing-md)
    var(--spacing-xs);

  /* Default background - glass morphism */
  background: var(--color-grey-nav);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);

  /* Drop shadow */
  box-shadow:
    -4px 0 16px rgba(0, 0, 0, 0.1),
    -2px 0 8px rgba(0, 0, 0, 0.05),
    inset 1px 0 2px rgba(255, 255, 255, 0.1);

  /* Layout - vertical column */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);

  /* Remove browser default focus styles */
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;

  /* Cursor and transitions */
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  /* Hover state - only scale, no position change */
  &:hover {
    transform: scale(1.1);
    background: var(--gradient-secondary);
    box-shadow:
      -6px 0 24px rgba(0, 0, 0, 0.15),
      -4px 0 12px rgba(0, 0, 0, 0.08),
      inset 1px 0 3px rgba(255, 255, 255, 0.15);
  }

  /* Active state - only scale, no position change */
  &:active {
    transform: scale(0.9);
    transition-duration: 0.1s;
  }

  /* Focus state - custom styling without browser defaults */
  &:focus,
  &:focus-visible {
    outline: none;
    box-shadow:
      -4px 0 16px rgba(0, 0, 0, 0.1),
      -2px 0 8px rgba(0, 0, 0, 0.05),
      inset 1px 0 2px rgba(255, 255, 255, 0.1),
      0 0 0 2px var(--color-accent-primary);
  }

  /* Remove any default browser focus/active styles */
  &:focus:not(:focus-visible) {
    outline: none;
    box-shadow:
      -4px 0 16px rgba(0, 0, 0, 0.1),
      -2px 0 8px rgba(0, 0, 0, 0.05),
      inset 1px 0 2px rgba(255, 255, 255, 0.1);
  }

  /* Responsive behavior for mobile (≤768px) */
  @media (max-width: 768px) {
    transform: scale(0.8);
    width: 2rem; /* Changed from 2.4rem to 2rem */
    height: 9.6rem; /* 12rem * 0.8 = 9.6rem - keeping height unchanged */
    margin-top: -4.8rem; /* Half of scaled height (9.6rem / 2) */
    padding: var(--spacing-sm) var(--spacing-xs) var(--spacing-sm)
      var(--spacing-xs);

    &:hover {
      transform: scale(0.88); /* 0.8 * 1.1 = 0.88 */
    }

    &:active {
      transform: scale(0.72); /* 0.8 * 0.9 = 0.72 */
    }
  }
`;

/**
 * NEW DEMO BUTTON LOGO - PNG logo at the top of the vertical tab
 */
export const NewDemoButtonLogo = styled.img`
  width: 1rem; /* 32px */
  height: 1rem; /* 32px */
  object-fit: contain;
  filter: brightness(0) invert(1); /* Make logo white for visibility */

  /* Responsive scaling */
  @media (max-width: 768px) {
    width: 1.6rem; /* 32px * 0.8 = 25.6px */
    height: 1.6rem; /* 32px * 0.8 = 25.6px */
  }
`;

/**
 * NEW DEMO BUTTON TEXT - Vertical text label
 */
export const NewDemoButtonText = styled.span`
  /* Normal text orientation with 90-degree rotation */
  transform: rotate(270deg);
  transform-origin: center;
  white-space: nowrap;

  /* Typography */
  font-family: 'Inter', sans-serif;
  font-size: var(--font-size-sm); /* 12px */
  font-weight: 700;
  color: var(--color-text);
  text-transform: uppercase;
  line-height: 1;
  letter-spacing: 0.05rem;

  /* Ensure text is centered and readable */
  text-align: center;
  display: inline-block;

  /* Responsive scaling */
  @media (max-width: 768px) {
    font-size: calc(var(--font-size-xs) * 0.9); /* Slightly smaller on mobile */
    letter-spacing: 0.03rem;
  }
`;

/**
 * CTA BUTTON - Bottom section call-to-action button
 *
 * DESIGN FEATURES:
 * - Rectangular button with rounded corners
 * - Gradient background matching brand colors
 * - Hover animations with scale and glow effects
 * - Positioned at bottom of banner section
 */
export const CTAButton = styled(motion.button)`
  /* Standardized spacing using new spacing scale */
  margin-top: var(--spacing-xl); /* 48px - increased for better hierarchy */
  align-self: center;
  width: 100%;
  z-index: 11;

  /* Button Dimensions - Using standardized spacing */
  padding: var(--spacing-md) var(--spacing-2xl); /* 16px 48px */
  border-radius: var(--spacing-sm); /* 8px for subtle rounding */
  cursor: pointer;

  /* Typography */
  font-size: 18px;
  font-weight: 700;
  color: var(--color-pink);
  text-transform: uppercase;
  letter-spacing: 1px;

  /* Default State - White background with red text */
  background: white;

  /* Shadow Effects */
  box-shadow:
    0 4px 16px rgba(237, 58, 121, 0.2),
    0 2px 8px rgba(0, 0, 0, 0.1);

  /* Smooth Transitions */
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); /* Tunable: adjust CTA button transition speed */

  /* Hover State - Gradient background with white text */
  &:hover {
    transform: scale(1.05);
    color: white;
    background: linear-gradient(
      135deg,
      var(--color-pink) 0%,
      var(--color-blue) 50%,
      var(--color-yellow) 100%
    );
    background-size: 200% 200%;
    animation: ${gradientAnimation} 8s ease infinite;
    border-color: transparent;
    box-shadow:
      0 12px 48px rgba(237, 58, 121, 0.4),
      0 8px 24px rgba(0, 180, 255, 0.3),
      inset 0 2px 4px rgba(255, 255, 255, 0.2);
  }

  /* Active State - Gradient background with white text */
  &:active {
    transform: scale(1.02);
    color: white;
    background: linear-gradient(
      135deg,
      var(--color-pink) 0%,
      var(--color-blue) 50%,
      var(--color-yellow) 100%
    );
    background-size: 200% 200%;
    animation: ${gradientAnimation} 8s ease infinite;
    border-color: transparent;
  }

  /* Focus State for Accessibility */
  &:focus {
    outline: none;
    box-shadow:
      0 4px 16px rgba(237, 58, 121, 0.2),
      0 2px 8px rgba(0, 0, 0, 0.1),
      0 0 0 3px rgba(237, 58, 121, 0.3);
  }

  /* Responsive Design - Using standardized spacing */
  /* @media (max-width: 768px) {
    width: 100%;
    padding: var(--spacing-lg) var(--spacing-xl);
    font-size: var(--font-size-lg);
    margin-top: var(--spacing-xl);
    text-align: center;
  } */

  @media (max-width: 768px) {
    width: 100%;
    padding: var(--spacing-md) var(--spacing-lg);
    font-size: var(--font-size-md);
    margin-top: var(--spacing-lg);
  }
`;
