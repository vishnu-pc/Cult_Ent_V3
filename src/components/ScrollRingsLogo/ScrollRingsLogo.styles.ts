import styled from 'styled-components';

/**
 * SCROLL RINGS SECTION
 * Establishes the total scroll range for the sticky behavior
 *
 * 🎯 KEY CUSTOMIZATION POINT: Scroll Distance
 *
 * --ring-scroll-steps: Controls how much scrolling is needed to complete the animation
 * - Current: 2 = 200vh (user scrolls 2 full viewport heights)
 * - Increase for longer scroll experience (e.g., 3 = 300vh)
 * - Decrease for quicker animation (e.g., 1.5 = 150vh)
 *
 * WIDTH SETTINGS:
 * - width: 100vw = full viewport width
 * - margin-left: calc(-50vw + 50%) = breaks out of parent container
 *
 * TO MODIFY:
 * - Change --ring-scroll-steps to adjust scroll distance
 * - Remove width/margin-left if you want component to stay within parent container
 * - Add background-color if you want a different background during scroll
 */
export const ScrollRingsContainer = styled.div`
  /* 🎯 SCROLL DISTANCE CONTROL - MAIN CUSTOMIZATION POINT */
  --ring-scroll-steps: 1.5;
  height: calc(var(--ring-scroll-steps) * 100vh);
  position: relative;
  /* Remove overflow: hidden as it can interfere with sticky */

  /* 📐 FULL WIDTH BREAKOUT - Remove these if you want to stay in parent container */
  // width: 100vw;
  // margin-left: calc(-50vw + 50%);

  /* 📱 RESPONSIVE SCROLL DISTANCES - Adjust for different devices */
  @media (max-width: 768px) {
    --ring-scroll-steps: 1.5; /* Increased for tablets */
  }

  @media (max-width: 480px) {
    --ring-scroll-steps: 1.5; /* Increased for mobile */
  }
`;

/**
 * STICKY SVG WRAPPER
 * Uses CSS position: sticky to pin the SVG during scroll
 *
 * 📌 STICKY BEHAVIOR CONTROL:
 *
 * position: sticky + top: 0 = Elements sticks to top of viewport while container is in view
 *
 * TO MODIFY STICKY BEHAVIOR:
 * - top: 0 = stick to very top of viewport
 * - top: 20vh = stick 20% down from top of viewport
 * - Add bottom: 0 instead of top for bottom-sticky behavior
 *
 * LAYOUT CONTROLS:
 * - height: 100vh = wrapper takes full viewport height
 * - display: flex + justify-content/align-items = centers content
 *
 * TO MODIFY POSITIONING:
 * - Change justify-content for horizontal positioning (flex-start, flex-end, center)
 * - Change align-items for vertical positioning (flex-start, flex-end, center)
 * - Add padding to create space around the logo
 */
export const StickyWrapper = styled.div`
  /* 📌 CSS STICKY POSITIONING - Core behavior control */
  position: sticky;
  top: 0; /* MODIFY: Distance from top where element sticks */

  /* 📐 LAYOUT CONTROLS */
  width: 100%;
  height: 100vh; /* Full viewport height - keeps logo visible during entire scroll */
  display: flex;
  justify-content: center; /* MODIFY: Horizontal positioning (flex-start, center, flex-end) */
  align-items: center; /* MODIFY: Vertical positioning (flex-start, center, flex-end) */

  /* 🎨 VISUAL CONTROLS */
  z-index: var(--z-index-sticky); /* Stacking order */

  /* ⚡ PERFORMANCE OPTIMIZATION */
  will-change: transform; /* Hints to browser for GPU acceleration */

  /* 🔒 ISOLATION */
  isolation: isolate; /* Ensures no parent elements interfere */
`;

/**
 * SVG CONTAINER
 * Contains the SVG with responsive sizing
 *
 * 📏 SIZE CONTROLS:
 *
 * TO MODIFY LOGO SIZE:
 * - max-width: Controls maximum size of the logo
 *   - Current: 400px on desktop, 300px on tablet, 250px on mobile
 *   - Increase for larger logo, decrease for smaller
 * - width: 100% makes it responsive within max-width constraints
 *
 * RESPONSIVE BREAKPOINTS:
 * - 768px = tablet breakpoint
 * - 480px = mobile breakpoint
 * - Add more @media queries for additional breakpoints
 */
export const SVGContainer = styled.div`
  /* 📏 RESPONSIVE SIZING CONTROLS */
  width: 100%;
  max-width: 35vw; /* INCREASED: More space for logo + rings */
  /* border: 1px solid blue; */ /* REMOVED: Debug border */

  /* 🎯 CENTERING */
  display: flex;
  justify-content: center;
  align-items: center;

  /* 📱 RESPONSIVE SIZE ADJUSTMENTS */
  @media (max-width: 768px) {
    max-width: 400px; /* INCREASED: Logo size on tablets */
  }

  @media (max-width: 480px) {
    max-width: 350px; /* INCREASED: Logo size on mobile phones */
  }
`;

/**
 * ANIMATED SVG
 * The main SVG containing logo and rings
 *
 * 🎨 SVG OPTIMIZATION:
 *
 * RENDERING QUALITY:
 * - shape-rendering: geometricPrecision = crisp, clean lines
 * - Alternative: crispEdges for even sharper edges
 * - Alternative: optimizeSpeed for better performance
 *
 * RESPONSIVE BEHAVIOR:
 * - width: 100% + height: auto = maintains aspect ratio
 * - max-height: 60vh on mobile = prevents logo from being too tall
 *
 * TO MODIFY:
 * - Remove max-height if you want unrestricted height on mobile
 * - Add padding to create space around the entire SVG
 * - Change shape-rendering for different visual quality vs performance trade-offs
 */
export const AnimatedSVG = styled.svg`
  /* 📐 RESPONSIVE SIZING */
  width: 100%;
  height: auto; /* CHANGED: Back to auto for proper aspect ratio */
  display: block;
  /* padding: var(--spacing-4xl); */
  /* border: 1px solid red; */ /* REMOVED: Debug border */

  /* 🎨 RENDERING QUALITY CONTROL */
  shape-rendering: geometricPrecision; /* MODIFY: crispEdges for sharper, optimizeSpeed for performance */

  /* 📱 MOBILE HEIGHT RESTRICTION */
  @media (max-width: 768px) {
    max-height: 70vh; /* INCREASED: Allow more height on mobile */
  }
`;

/**
 * CONCENTRIC RING
 * Individual ring element with animation states
 *
 * 🎯 KEY VISUAL CUSTOMIZATION POINT:
 *
 * RING APPEARANCE:
 * - stroke: Ring color (currently white)
 * - stroke-width: Ring thickness (2px desktop, 1.5px tablet, 1px mobile)
 * - fill: none = hollow rings (change to color for filled rings)
 *
 * ANIMATION BEHAVIOR:
 * - opacity: 0→1 fade in effect
 * - transform: scale(0.8→1) growing effect
 * - transition-delay: Staggered timing based on ring index
 *
 * TO MODIFY RING APPEARANCE:
 * - Change stroke to any color (e.g., '#FF3278', 'var(--color-accent)')
 * - Increase stroke-width for thicker rings
 * - Add stroke-dasharray for dashed rings (e.g., '10,5')
 * - Change fill to color for solid rings instead of outlines
 *
 * TO MODIFY ANIMATIONS:
 * - Change scale values for different entrance effects
 * - Modify transition duration (0.6s) for faster/slower animations
 * - Adjust cubic-bezier for different easing curves
 * - Change transition-delay multiplier (0.1s) for different stagger timing
 */
export const ConcentricRing = styled.circle<{
  $isVisible: boolean;
  $ringIndex: number;
}>`
  /* 🎨 RING VISUAL STYLING - MAIN CUSTOMIZATION AREA */
  fill: none; /* MODIFY: Change to color for filled rings */
  stroke: white; /* MODIFY: Ring color - change to any CSS color */
  stroke-width: 2; /* MODIFY: Ring thickness */
  /* stroke-dasharray: 10,5; */ /* UNCOMMENT: For dashed rings */

  /* 🎭 ANIMATION STATES */
  opacity: ${props => (props.$isVisible ? 1 : 0)};
  transform-origin: center;
  transform: ${props =>
    props.$isVisible
      ? 'scale(1)'
      : 'scale(0.8)'}; /* MODIFY: Scale values for entrance effect */

  /* ⏱️ ANIMATION TIMING CONTROLS */
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1); /* MODIFY: Duration and easing */
  transition-delay: ${props =>
    props.$ringIndex * 0.1}s; /* MODIFY: Stagger timing (0.1s between rings) */

  /* ♿ ACCESSIBILITY: Respect reduced motion preference */
  @media (prefers-reduced-motion: reduce) {
    transition: none;
    opacity: 1;
    transform: scale(1);
  }

  /* 📱 RESPONSIVE STROKE WIDTH */
  @media (max-width: 768px) {
    stroke-width: 1.5; /* MODIFY: Ring thickness on tablets */
  }

  @media (max-width: 480px) {
    stroke-width: 1; /* MODIFY: Ring thickness on mobile */
  }
`;

/**
 * LOGO GROUP
 * Container for the logo paths
 *
 * 🎭 LOGO ENTRANCE ANIMATION:
 *
 * CURRENT BEHAVIOR:
 * - Fades in from 0 to 1 opacity
 * - Grows from 90% to 100% scale
 * - 1 second duration with smooth easing
 *
 * TO MODIFY LOGO ENTRANCE:
 * - Change animation duration (1s)
 * - Modify scale values (0.9 to 1) for different size effect
 * - Change cubic-bezier for different easing
 * - Add rotation: transform: scale(0.9) rotate(-10deg) for spinning entrance
 * - Add translation: transform: scale(0.9) translateY(20px) for sliding entrance
 *
 * TO DISABLE LOGO ANIMATION:
 * - Set animation: none
 */
export const LogoGroup = styled.g`
  /* 👁️ ALWAYS VISIBLE */
  opacity: 1;

  /* � LOGO SCALING - Make logo smaller relative to rings */
  transform: scale(
    0.2
  ); /* ADDED: Scale down logo to 60% to fit with larger rings */
  transform-origin: center;

  /* � ENTRANCE ANIMATION - MODIFY FOR DIFFERENT EFFECTS */
  animation: logoFadeIn 1s cubic-bezier(0.4, 0, 0.2, 1); /* MODIFY: Duration and easing */

  @keyframes logoFadeIn {
    from {
      opacity: 0;
      transform: scale(
        // 0.54
      ); /* MODIFIED: 0.6 * 0.9 = start at 54% for animation */
      /* transform: scale(0.9) rotate(-10deg); */ /* ALTERNATIVE: Add rotation */
      /* transform: scale(0.9) translateY(20px); */ /* ALTERNATIVE: Add sliding */
    }
    to {
      opacity: 1;
      // transform: scale(0.6);
      /* MODIFIED: End at 60% scale */
      /* transform: scale(1) rotate(0deg); */ /* ALTERNATIVE: End rotation */
      /* transform: scale(1) translateY(0px); */ /* ALTERNATIVE: End sliding */
    }
  }

  /* ♿ ACCESSIBILITY: Respect reduced motion */
  @media (prefers-reduced-motion: reduce) {
    animation: none; /* Disables animation for users who prefer reduced motion */
    transform: scale(0.6); /* Ensure scaled logo even without animation */
  }
`;

/**
 * SCROLL PROGRESS INDICATOR (Optional)
 * Visual indicator of scroll progress
 *
 * 🎯 PROGRESS INDICATOR CUSTOMIZATION:
 *
 * POSITIONING:
 * - bottom/right: Controls where indicator appears
 * - Currently: bottom-right corner with spacing
 *
 * VISUAL STYLING:
 * - width/height: Size of the circular indicator
 * - border-radius: 50% makes it circular
 * - background: Semi-transparent backdrop
 * - backdrop-filter: Blur effect behind indicator
 *
 * PROGRESS VISUALIZATION:
 * - conic-gradient: Creates the circular progress fill
 * - Color controlled by var(--color-accent-primary)
 * - Progress angle: props.$progress * 360deg
 *
 * TO MODIFY:
 * - Change position (top: 20px, left: 20px for top-left)
 * - Adjust size (width/height)
 * - Change colors in conic-gradient
 * - Modify blur amount in backdrop-filter
 * - Add text inside indicator showing percentage
 *
 * TO DISABLE:
 * - Remove the component from the TSX file
 */
export const ScrollProgressIndicator = styled.div<{ $progress: number }>`
  /* 📍 POSITIONING CONTROLS */
  position: fixed;
  bottom: var(--spacing-xl); /* MODIFY: Distance from bottom */
  right: var(--spacing-xl); /* MODIFY: Distance from right */
  /* ALTERNATIVE POSITIONS:
  top: var(--spacing-xl);
  left: var(--spacing-xl); */

  /* 📏 SIZE CONTROLS */
  width: 60px; /* MODIFY: Indicator size */
  height: 60px; /* MODIFY: Indicator size */
  border-radius: 50%; /* Makes it circular */

  /* 🎨 VISUAL STYLING */
  background: rgba(255, 255, 255, 0.1); /* MODIFY: Background opacity/color */
  border: 2px solid rgba(255, 255, 255, 0.2); /* MODIFY: Border color/thickness */
  backdrop-filter: blur(10px); /* MODIFY: Blur amount behind indicator */
  -webkit-backdrop-filter: blur(10px);
  z-index: var(--z-index-floating);

  /* 📊 PROGRESS CIRCLE VISUALIZATION */
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80%; /* MODIFY: Progress circle size relative to container */
    height: 80%;
    border-radius: 50%;
    /* 🎯 PROGRESS GRADIENT - MAIN VISUAL EFFECT */
    background: conic-gradient(
      var(--color-accent-primary) ${props => props.$progress * 360}deg,
      /* MODIFY: Progress color */ transparent
        ${props => props.$progress * 360}deg /* Transparent remainder */
    );
    transform: translate(-50%, -50%);
  }

  /* 📱 RESPONSIVE BEHAVIOR */
  @media (max-width: 768px) {
    // display: none;
  }
`;
