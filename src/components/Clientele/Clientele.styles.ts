import styled, { keyframes } from 'styled-components';
import backgroundImage from '../../assets/images/Our_Clientele/Our_Clientele.jpg';
import type { StyledComponentProps, HeadingLineProps } from './Clientele.types';

// LOGO CAROUSEL ANIMATION
// Controls the horizontal sliding motion of corporate logos
// Animation resets after 2 logo sets pass, while 3rd set provides seamless continuation
export const slideAnimation = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-66.666%); // TUNABLE: Move exactly 2/3 of total width (2 out of 3 logo sets)
    // This ensures animation resets when 3rd set is perfectly positioned to continue
  }
`;

// TEXT FADE-IN ANIMATION
// Controls how text elements appear when triggered
// UNIFIED FADE-IN ANIMATION
// Animation for all text elements that fades in and slides up from below
// Final opacity values are controlled by individual component styles
export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(1.25rem); /* 20px - slides up from below */
  }
  to {
    opacity: 0.50;
    transform: translateY(0); /* Final position (no transform) */
  }
`;

export const blendInHeading = keyframes`
  from {
    opacity: 0;
    transform: translateY(1.25rem); /* 20px - slides up from below */
  }
  to {
    opacity: 1;
    transform: translateY(0); /* Final position (no transform) */
  }
`;

// GRADIENT MOVEMENT ANIMATION
// Controls the animated gradient background movement in active state
export const gradientShift = keyframes`
  0% {
    background-position: 0% 50%; // Starting position (left side)
  }
  50% {
    background-position: 100% 50%; // Middle position (right side)
  }
  100% {
    background-position: 0% 50%; // End position (back to left - creates loop)
  }
  // TUNABLE PARAMETERS:
  // - Change percentages to modify movement pattern
  // - Add more keyframes (25%, 75%) for complex movements
  // - Modify background-position values for different directions
`;

// MAIN SECTION CONTAINER
export const ClienteleSection = styled.section<{ isActive: boolean }>`
  position: relative;
  height: 100vh; // TUNABLE: Section height (100vh = full viewport height)
  // Alternative values: 80vh, 120vh, 800px
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-image: url(${backgroundImage}); // Base background image
  background-size: cover; // TUNABLE: cover, contain, or specific size (e.g., 150%)
  background-position: top; // TUNABLE: center, top, bottom, left, right
  overflow: hidden; // Prevents content from spilling outside section
  // CONTAINMENT: Prevent section from expanding beyond viewport
  max-width: 100vw; // Never exceed viewport width
  min-width: 0; // Allow shrinking if needed

  // GRAYSCALE EFFECT ON ENTIRE SECTION
  filter: ${({ isActive }) =>
    isActive ? 'none' : 'grayscale(1)'}; // TUNABLE: Grayscale when inactive
  transition: filter var(--transition-slow); /* Use standardized transition timing */
`;

// GRAYSCALE OVERLAY - INACTIVE STATE
// Creates the black overlay effect when section is not active
export const GrayscaleOverlay = styled.div<{ isActive: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  // BLACK OVERLAY FOR DARKENING
  background: rgba(0, 0, 0, 0.5); // TUNABLE: Overlay darkness (0.5 = 50% dark)
  // Adjust opacity to control darkness:
  // - 0.3 = Lighter overlay
  // - 0.7 = Darker overlay
  // Change color for different tints:
  // - rgba(128, 128, 128, 0.5) = Gray tint
  // - rgba(0, 0, 100, 0.3) = Blue tint

  // TRANSITION CONTROL
  opacity: ${({ isActive }) =>
    isActive ? 0.7 : 1}; // 30% when active, 100% when inactive
  transition: opacity var(--transition-slow); /* Use standardized slow transition */

  z-index: 1; // Layer above background, below text
  pointer-events: none; // Don't block user interactions
`;

// GRADIENT OVERLAY - ACTIVE STATE
// Creates the animated gradient effect when section becomes active
export const GradientOverlay = styled.div<{ isActive: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  // GRADIENT BACKGROUND
  background: var(
    --gradient-subtle-full
  ); // TUNABLE: Gradient type from variables.css
  // Available gradient options:
  // - var(--gradient-primary) = Yellow to Pink
  // - var(--gradient-secondary) = Pink to Blue
  // - var(--gradient-full) = Full spectrum (more intense)
  // - var(--gradient-subtle-full) = Subtle full spectrum (current)

  background-size: 200% 200%; // TUNABLE: Gradient size for animation
  // Larger values = more dramatic movement:
  // - 200% 200% = Moderate movement
  // - 400% 400% = Extreme movement
  // - 100% 100% = No movement (static gradient)

  // ANIMATION CONTROL
  animation: ${({ isActive }) => (isActive ? gradientShift : 'none')} 3s
    ease-in-out infinite;
  // TUNABLE PARAMETERS:
  // - 3s = Animation duration (2s = faster, 5s = slower)
  // - ease-in-out = Easing function (linear, ease, ease-in, ease-out)
  // - infinite = Loop count (1 = once, 3 = three times)

  // VISIBILITY CONTROL
  opacity: ${({ isActive }) =>
    isActive ? 0.9 : 0}; // TUNABLE: Active opacity (0.9 = 90% visible)
  // Adjust opacity for different intensities:
  // - 0.3 = Subtle gradient overlay
  // - 0.6 = Moderate gradient overlay
  // - 1.0 = Full intensity gradient overlay

  transition: opacity var(--transition-slow); /* Use standardized slow transition */
  z-index: 1; // Same layer as grayscale overlay
  pointer-events: none; // Don't block user interactions
`;

// CONTENT CONTAINER
// Holds all text content and positions it above overlays
export const ContentContainer = styled.div`
  position: relative;
  height: 87%; // TUNABLE: Content area height (85% leaves 15% for logo carousel)
  overflow: hidden; // Prevents content from spilling outside section
  width: 100%;
  margin: 0 auto; // TUNABLE: Center the container horizontally
  display: flex;
  flex-direction: column;
  justify-content: top; // TUNABLE: vertical alignment (flex-start, flex-end, center)
  align-items: center; // TUNABLE: horizontal alignment - center the text block
  //padding: var(--spacing-6xl); // TUNABLE: Content padding
  z-index: 2; // Above overlays (z-index: 1)

  /* Mobile-only: Move content to bottom with spacing above logo carousel */
  @media (max-width: 768px) {
    justify-content: flex-end; /* Align content to bottom */
  }
`;

// SECTION TITLE STYLING
export const SectionTitle = styled.h3<StyledComponentProps>`
  width: 100%;
  font-family: 'Inter', sans-serif; // TUNABLE: Font family - changed to Inter
  font-size: var(--font-size-xl); // TUNABLE: Title size
  font-weight: 400; // TUNABLE: Font weight (300=Light, 400=Regular, 500=Medium)
  letter-spacing: 0.16em;
  text-transform: uppercase;
  text-align: left;

  /* Standardized spacing */
  margin-bottom: var(--spacing-md);

  /* Animation control - starts hidden, animates to 80% opacity */
  opacity: 0;
  animation: ${({ isVisible }) => (isVisible ? fadeIn : 'none')} 1.6s ease-out
    forwards;
  // TUNABLE: Animation duration (1.6s) and easing

  @media (min-width: 1536px) {
    margin-bottom: var(--spacing-2xl);
  }

  /* Responsive animations using standard breakpoints */
  @media (max-width: 1668px) {
    animation: ${({ isVisible }) => (isVisible ? fadeIn : 'none')} 1.6s ease-out
      forwards;
  }

  @media (max-width: 480px) {
    animation: ${({ isVisible }) => (isVisible ? fadeIn : 'none')} 1.6s ease-out
      forwards;
  }

  /* Mobile-only: Position absolutely at top-left of section */
  @media (max-width: 768px) {
    font-size: var(--font-size-title-mobile);
    margin-bottom: 0; /* Remove margin */
  }
`;

// MAIN HEADING CONTAINER
export const MainHeading = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%; // Full width to allow individual line alignments
`;

// INDIVIDUAL HEADING LINES
export const HeadingLine = styled.h2<HeadingLineProps & { alignment?: string }>`
  font-family: var(--font-primary); /* Use standardized font family */
  font-size: var(--font-size-5xl);
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 0.4em; /* 33px - Wide letter spacing for dramatic effect */
  line-height: 193%; /* Better spacing between lines */

  /* Individual line alignment */
  text-align: ${({ alignment }) => alignment || 'left'};

  /* Staggered animation */
  opacity: 0;
  animation: ${({ isVisible }) => (isVisible ? blendInHeading : 'none')} 1.6s
    ease-out forwards;
  animation-delay: ${({ delay }) => delay}s; /* Individual line delays */

  @media (min-width: 1536px) {
    font-size: var(--font-size-6xl);
  }
  /* Responsive typography using standard breakpoints */
  @media (max-width: 768px) {
    font-size: var(--font-size-2xl); /* Mobile font size */
    letter-spacing: 0.2em;
    margin-bottom: var(--spacing-xxs);
  }
`;

// STATISTICS TEXT
export const StatText = styled.p<StyledComponentProps>`
  width: 100%;
  font-family: var(--font-primary); /* Use standardized font family */
  /* font-size: var(--font-size-2xl); */
  font-size: 4rem;
  font-weight: 400;
  text-align: center;
  letter-spacing: -0.003em;

  /* Standardized spacing */
  margin-top: var(--spacing-sm); /* 64px - consistent section spacing */

  /* Animation control - starts hidden, animates to 80% opacity */
  opacity: 0;
  animation: ${({ isVisible }) => (isVisible ? fadeIn : 'none')} 1.6s ease-out
    forwards;
  animation-delay: 3.8s; /* Delay before text appears */

  strong {
    color: var(--color-text); /* Emphasis color */
    font-weight: 700; /* Bold weight for emphasis */
  }

  @media (min-width: 1536px) {
    margin-top: var(--spacing-md);
    font-size: var(--font-size-3xl);
  }

  /* Responsive typography using standard breakpoints */
  @media (max-width: 768px) {
    font-size: var(--font-size-md); /* Mobile text size */
    text-align: justify;
    line-height: 200%;
  }
`;

// LOGO CAROUSEL CONTAINER - Simple edge-to-edge full width
export const LogoCarouselContainer = styled.div`
  position: absolute; /* Position absolutely to break out of section flow */
  bottom: var(--spacing-xl);
  left: 0; /* Start from left edge of viewport */
  height: 13%; /* TUNABLE: Carousel height */
  width: 100vw; /* Full viewport width - simple! */

  overflow: hidden; /* Hide overflow for smooth scrolling effect */
  background-color: transparent;
  z-index: 2; /* Above overlays */
  display: flex;
  align-items: center;
`;

// LOGO SLIDER ANIMATION
export const LogoSlider = styled.div`
  display: flex;
  width: fit-content;
  animation: ${slideAnimation} 60s linear infinite; // TUNABLE: Adjusted timing for 3-set seamless loop
  height: 100%;
  align-items: center;
  // CONTAINMENT: Ensure slider doesn't affect parent layout
  flex-shrink: 0; // Don't shrink the slider itself
  will-change: transform; // Optimize animation performance
`;

// LOGO GROUP CONTAINER
export const LogoGroup = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  flex-shrink: 0; /* Don't compress the logo group */
  min-width: max-content; /* Ensure group maintains its natural width */

  /* Standardized spacing between logos */
  gap: var(--spacing-4xl); /* 48px - consistent with other spacing */

  /* Responsive spacing using standard breakpoints */
  @media (max-width: 768px) {
    gap: var(--spacing-3xl); /* reduced spacing on mobile */
  }
`;

// INDIVIDUAL LOGO IMAGE STYLING
export const LogoImage = styled.img`
  height: 90%; /* 90% of parent container height */
  width: auto; /* Maintain aspect ratio */
  object-fit: contain; /* Preserve logo proportions without distortion */
  flex-shrink: 0; /* Prevent logos from shrinking */
  filter: brightness(1) contrast(1); /* Ensure logos are clearly visible */

  /* Responsive sizing using standard breakpoints */
  @media (max-width: 768px) {
    height: 70%; /* Smaller logos on mobile devices */
  }

  @media (max-width: 640px) {
    height: 50%; /* Even smaller on very small screens */
  }
`;

/*
TUNING GUIDE SUMMARY:

SCROLL TRIGGERS:
- Text Animation: threshold in useEffect (0.4 = 40% visible)
- Overlay Transition: threshold in useEffect (0.7 = 70% visible)

TRANSITION TIMING:
- Overlay fade: transition: opacity 0.8s ease
- Text animations: animation duration 1.6s
- Text delays: animation-delay values (1.0s, 1.5s, 2.3s, 2.8s)

VISUAL EFFECTS:
- Grayscale intensity: filter: grayscale(1)
- Gradient opacity: opacity when active (0.9)
- Gradient animation: 3s ease-in-out infinite
- Background size: 200% 200% for movement

COLORS:
- Grayscale overlay: rgba(0, 0, 0, 0.5)
- Gradient type: var(--gradient-subtle-full)
- Available gradients in variables.css

TYPOGRAPHY:
- Font family: 'Inter', sans-serif
- Section title: font-weight 300, left aligned, 80% opacity
- Heading lines: font-weight 400, letter-spacing 2.0625rem (33px), line-height 1.33
- StatText: 80% opacity, center aligned

SPACING & SIZING:
- Section height: 100vh
- Content padding: var(--spacing-2xl)
- Font sizes: var(--font-size-xl), var(--font-size-5xl)
- Logo carousel: 15% height, 20s animation, seamless infinite loop with 3 logo sets
- Logo height: 90% of carousel container (80% mobile, 70% small mobile)
- Logo spacing: 3rem gap (1.5rem on mobile) with overflow containment
- Max width: 1800px for heading and StatText
- StatText margin-top: var(--spacing-2xl)

ALIGNMENT:
- Section title: left aligned
- "GREAT COMPANIES": right aligned
- "DESERVE": left aligned
- "GREAT WELLNESS": left aligned
- "PROGRAMS": right aligned
- StatText: center aligned
*/
