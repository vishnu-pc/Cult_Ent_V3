import React, { useState, useEffect, useRef, useCallback } from 'react';
import type { ScrollRingsLogoProps } from './ScrollRingsLogo.types';
import {
  ScrollRingsContainer,
  StickyWrapper,
  SVGContainer,
  AnimatedSVG,
  ConcentricRing,
  LogoGroup,
  // ScrollProgressIndicator,
} from './ScrollRingsLogo.styles';

/**
 * SCROLL RINGS LOGO COMPONENT
 *
 * CUSTOMIZATION GUIDE:
 *
 * RING COUNT & TIMING:
 * - To change number of rings: Update visibleRings array size (currently 5 rings)
 * - To change ring appearance timing: Modify thresholds in updateRingVisibility()
 *   Currently: 20%, 40%, 60%, 80%, 100% - change these percentages as needed
 *
 * SCROLL BEHAVIOR:
 * - Scroll distance: Modify --ring-scroll-steps in ScrollRingsLogo.styles.ts
 *   Currently 2 = 200vh scroll distance (increase for longer scroll, decrease for shorter)
 * - Sticky behavior: Controlled by position: sticky in StickyWrapper
 *
 * ANIMATION PERFORMANCE:
 * - Throttling: requestAnimationFrame in handleScroll (already optimized)
 * - Intersection thresholds: [0, 0.1, 0.25, 0.5, 0.75, 0.9, 1] - adjust for sensitivity
 *
 * VISUAL CUSTOMIZATION:
 * - Ring spacing: baseRadius + radiusIncrement in generateRings()
 * - Ring colors: stroke property in ConcentricRing styled component
 * - Animation easing: cubic-bezier values in styles
 *
 * Features:
 * - CSS position: sticky for smooth pinning behavior
 * - Intersection Observer for scroll progress tracking
 * - 5 rings appear at 20%, 40%, 60%, 80%, 100% scroll progress
 * - Automatic pin release when scrolled past section height
 * - Respects prefers-reduced-motion preference
 * - Responsive design with proper scaling
 */
const ScrollRingsLogo: React.FC<ScrollRingsLogoProps> = ({ className }) => {
  // STATE MANAGEMENT
  // 📊 SCROLL PROGRESS: 0 to 1 representing how far through the scroll section we are
  // TO MODIFY: This drives all animations - you rarely need to change this directly
  // 0 to 1
  const [scrollProgress, setScrollProgress] = useState(0);

  // 🎯 RING VISIBILITY: Controls which rings are currently shown
  // TO MODIFY: Change array size to add/remove rings (currently 5 rings)
  // Each boolean represents one ring's visibility state
  const [visibleRings, setVisibleRings] = useState<boolean[]>([
    false, // Ring 1 - outermost
    false, // Ring 2
    false, // Ring 3
    false, // Ring 4
    false, // Ring 5 - innermost
  ]);

  // ♿ ACCESSIBILITY: Respects user's motion preferences
  // TO MODIFY: You typically don't need to change this - it's for accessibility
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // REFS
  // 📍 CONTAINER REF: References the main scroll container for height calculations
  // TO MODIFY: Don't change this - it's essential for scroll calculations
  const containerRef = useRef<HTMLDivElement>(null);

  // 📌 STICKY REF: References the sticky wrapper (optional, for future enhancements)
  // TO MODIFY: Currently unused but available for advanced sticky behavior modifications
  const stickyRef = useRef<HTMLDivElement>(null);

  /**
   * DETECT REDUCED MOTION PREFERENCE
   * Check if user prefers reduced motion for accessibility
   */
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    // If reduced motion is preferred, show all rings immediately
    if (mediaQuery.matches) {
      setVisibleRings([true, true, true, true, true]);
      setScrollProgress(1);
    }

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
      if (e.matches) {
        setVisibleRings([true, true, true, true, true]);
        setScrollProgress(1);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  /**
   * UPDATE RING VISIBILITY
   * Shows rings based on scroll progress thresholds
   *
   * 🎯 KEY CUSTOMIZATION POINT: Ring Timing
   * TO MODIFY RING APPEARANCE TIMING:
   * - Change the progress thresholds (0.2, 0.4, 0.6, 0.8, 1.0)
   * - Example: For faster appearance, use [0.1, 0.2, 0.3, 0.4, 0.5]
   * - Example: For all at once, use [0.2, 0.2, 0.2, 0.2, 0.2]
   * - Example: For reverse order, use [1.0, 0.8, 0.6, 0.4, 0.2]
   *
   * TO ADD MORE RINGS:
   * 1. Add more boolean values to visibleRings state array
   * 2. Add corresponding thresholds here (e.g., progress >= 0.1 for 6th ring)
   */
  const updateRingVisibility = useCallback(
    (progress: number) => {
      if (prefersReducedMotion) {
        // Show all rings immediately if reduced motion is preferred
        setVisibleRings([true, true, true, true, true]);
        return;
      }

      // 🎯 RING TIMING THRESHOLDS - MODIFY THESE TO CHANGE WHEN RINGS APPEAR
      const newVisibleRings = [
        progress >= 0.1, // Ring 1 appears at 15% scroll progress
        progress >= 0.25, // Ring 2 appears at 30% scroll progress
        progress >= 0.45, // Ring 3 appears at 45% scroll progress
        progress >= 0.65, // Ring 4 appears at 60% scroll progress
        progress >= 0.8, // Ring 5 appears at 75% scroll progress
      ];

      setVisibleRings(newVisibleRings);
    },
    [prefersReducedMotion]
  );

  /**
   * CALCULATE SCROLL PROGRESS
   * Uses Intersection Observer and scroll position to determine progress
   *
   * 📏 SCROLL CALCULATION LOGIC:
   * - scrollableDistance = total container height - viewport height
   * - progress = how far scrolled / scrollableDistance
   *
   * TO MODIFY SCROLL SENSITIVITY:
   * - The calculation is automatic based on container height
   * - To change scroll distance, modify --ring-scroll-steps in styles
   * - To change calculation method, modify the progress formula below
   */
  const calculateScrollProgress = useCallback(() => {
    if (!containerRef.current || prefersReducedMotion) return;

    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const containerHeight = container.offsetHeight;
    const viewportHeight = window.innerHeight;

    // 📐 SCROLL MATH: Calculate how much of the container has been scrolled through
    const scrollableDistance = containerHeight - viewportHeight;
    const scrolled = -rect.top; // How far the top of container is above viewport

    // 📊 PROGRESS CALCULATION (0 to 1)
    // FIXED: Ensure we reach exactly 1.0 when fully scrolled through
    const rawProgress = scrolled / scrollableDistance;
    const progress = Math.max(0, Math.min(1, rawProgress));

    setScrollProgress(progress);
    updateRingVisibility(progress);
  }, [updateRingVisibility, prefersReducedMotion]);

  /**
   * SCROLL LISTENER SETUP
   * Monitor scroll position for progress calculation
   *
   * ⚡ PERFORMANCE OPTIMIZATION:
   * - Uses requestAnimationFrame for smooth 60fps updates
   * - Throttles scroll events to prevent excessive calculations
   *
   * TO MODIFY PERFORMANCE:
   * - Remove requestAnimationFrame for immediate updates (may cause jank)
   * - Add debouncing with setTimeout for less frequent updates
   * - Adjust passive: true for different scroll behavior
   */
  useEffect(() => {
    if (prefersReducedMotion) return;

    // Initial calculation on mount
    calculateScrollProgress();

    // 🎯 SCROLL EVENT HANDLER with throttling for performance
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        // Use requestAnimationFrame to sync with browser's repaint cycle
        requestAnimationFrame(() => {
          calculateScrollProgress();
          ticking = false;
        });
        ticking = true;
      }
    };

    // 📱 EVENT LISTENERS
    // passive: true = improves scroll performance by telling browser we won't preventDefault
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', calculateScrollProgress, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', calculateScrollProgress);
    };
  }, [calculateScrollProgress, prefersReducedMotion]);

  /**
   * INTERSECTION OBSERVER SETUP
   * Additional monitoring for section visibility
   *
   * 🔍 VISIBILITY DETECTION:
   * - Monitors when the scroll section enters/exits viewport
   * - Multiple thresholds for granular visibility detection
   *
   * TO MODIFY INTERSECTION SENSITIVITY:
   * - threshold array: [0, 0.1, 0.25, 0.5, 0.75, 0.9, 1]
   *   - 0 = any part visible, 1 = completely visible
   *   - Add more values for more granular detection
   * - rootMargin: '0px' - change to expand/shrink detection area
   *   - Example: '-100px' starts detection 100px before entering viewport
   */
  useEffect(() => {
    if (!containerRef.current || prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Section is visible, ensure progress calculation is active
            calculateScrollProgress();
          }
        });
      },
      {
        root: null, // Use viewport as root
        rootMargin: '0px', // No margin - triggers exactly at viewport edge
        // 🎯 INTERSECTION THRESHOLDS - MODIFY FOR DIFFERENT SENSITIVITY
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 0.9, 1], // Multiple trigger points
      }
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [calculateScrollProgress, prefersReducedMotion]);

  /**
   * RING GENERATION
   * Creates the 5 concentric rings with calculated radii
   *
   * 🎯 KEY VISUAL CUSTOMIZATION POINT:
   *
   * RING POSITIONING:
   * - centerX, centerY: Ring center coordinates (should match logo center)
   * - baseRadius: Distance from center to first ring (avoid logo overlap)
   * - radiusIncrement: Space between each ring
   *
   * TO MODIFY RING LAYOUT:
   * - baseRadius: Increase to move rings further from logo, decrease to bring closer
   * - radiusIncrement: Increase for more spacing between rings, decrease for tighter spacing
   * - centerX/centerY: Adjust if logo position changes in SVG
   *
   * TO ADD MORE RINGS:
   * 1. Update visibleRings state array size
   * 2. Add corresponding thresholds in updateRingVisibility()
   * 3. This function will automatically generate the additional rings
   *
   * CURRENT SETTINGS:
   * - 5 rings total
   * - Starting at radius 140px from center
   * - 30px spacing between rings
   * - Final ring at radius 260px (140 + 4*30)
   */
  const generateRings = () => {
    // 📍 SVG CENTER COORDINATES - modify if SVG dimensions change
    const centerX = 189.5; // Half of SVG width (379/2)
    const centerY = 214.5; // Half of SVG height (429/2)

    // 🎯 RING SPACING CONTROLS - MODIFY THESE FOR DIFFERENT LAYOUTS
    const baseRadius = 80; // Distance from center to innermost ring (increase to avoid logo overlap)
    const radiusIncrement = 27; // Space between rings (increase for wider spacing)

    return visibleRings.map((isVisible, index) => (
      <ConcentricRing
        key={`ring-${index + 1}`}
        id={`ring-${index + 1}`}
        cx={centerX}
        cy={centerY}
        r={baseRadius + index * radiusIncrement} // Ring radius calculation
        $isVisible={isVisible}
        $ringIndex={index} // Used for staggered animation timing
      />
    ));
  };

  return (
    <ScrollRingsContainer
      ref={containerRef}
      className={className}
      role='region'
      aria-label='Scroll-driven logo animation section'
    >
      <StickyWrapper ref={stickyRef}>
        <SVGContainer>
          <AnimatedSVG
            width='379'
            height='429'
            viewBox='0 0 379 429'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            role='img'
            aria-label='Cult Entertainment Logo with Animated Rings'
          >
            {/* CONCENTRIC RINGS - Behind the logo */}
            <g id='concentric-rings'>{generateRings()}</g>

            {/* ORIGINAL LOGO CONTENT */}
            <LogoGroup id='cult-logo'>
              {/* Original logo paths from Cult_Colour_Logo.svg */}
              <path
                d='M366.482 196.553H12.0815C5.42139 196.553 0 201.99 0 208.634V225.799C0 232.459 5.43747 237.881 12.0815 237.881H366.482C373.142 237.881 378.579 232.443 378.579 225.799V208.634C378.579 201.974 373.142 196.553 366.482 196.553Z'
                fill='white'
              />
              <path
                d='M213.461 265.518C211.177 262.831 207.831 261.303 204.275 261.303H173.597C170.042 261.303 166.744 262.831 164.412 265.518L71.1704 373.639C69.0951 376.085 68.0655 379.222 68.2746 382.423C68.532 385.624 69.996 388.568 72.4412 390.708L85.4879 401.888C87.6758 403.771 90.4588 404.784 93.3545 404.784C96.9098 404.784 100.208 403.256 102.54 400.569L181.77 308.696C183.555 306.62 186.145 305.446 188.88 305.446C191.615 305.446 194.205 306.669 195.991 308.696L275.316 400.988C277.601 403.674 280.947 405.202 284.502 405.202C287.398 405.202 290.197 404.189 292.369 402.258L305.415 391.078C307.861 388.938 309.325 386.043 309.582 382.793C309.839 379.592 308.826 376.439 306.686 374.009L213.381 265.421L213.429 265.518H213.461Z'
                fill='white'
              />
              <path
                d='M195.335 358.984H182.529C177.558 358.984 173.488 363.038 173.488 368.025V419.52C173.488 424.491 177.558 428.561 182.529 428.561H195.335C200.306 428.561 204.376 424.507 204.376 419.52V368.025C204.376 363.038 200.306 358.984 195.335 358.984Z'
                fill='white'
              />
              <path
                d='M182.436 47.0228H195.386C200.357 47.0228 204.427 42.9527 204.427 37.9818V9.04098C204.427 4.07005 200.357 0 195.386 0H182.436C177.465 0 173.395 4.07005 173.395 9.04098V37.9979C173.395 42.9688 177.465 47.0389 182.436 47.0389V47.0228Z'
                fill='#FF3278'
              />
              <path
                d='M107.658 275.992L100.548 265.423C97.7484 261.256 92.1661 260.146 87.9996 262.929L30.665 301.329C26.4984 304.128 25.3883 309.759 28.1714 313.877L35.282 324.447C38.0811 328.613 43.6634 329.675 47.8299 326.94L105.165 288.54C109.331 285.741 110.441 280.11 107.658 275.992Z'
                fill='#40B9EB'
              />
              <path
                d='M277.651 162.271C280.45 166.437 286.033 167.499 290.199 164.764L347.534 126.364C351.7 123.565 352.826 117.983 350.027 113.816L342.917 103.247C340.118 99.0804 334.535 97.9704 330.369 100.753L273.034 139.154C268.867 141.953 267.757 147.583 270.541 151.701L277.651 162.271Z'
                fill='white'
              />
              <path
                d='M347.902 301.795L290.567 263.395C286.401 260.596 280.77 261.722 278.019 265.889L270.909 276.458C268.11 280.625 269.236 286.207 273.402 289.006L330.737 327.406C334.904 330.205 340.486 329.079 343.285 324.913L350.396 314.343C353.179 310.177 352.069 304.546 347.902 301.795Z'
                fill='#FDD914'
              />
              <path
                d='M30.92 126.572L88.2547 164.973C92.4213 167.772 98.0035 166.646 100.803 162.479L107.913 151.91C110.712 147.743 109.586 142.113 105.42 139.362L48.0851 100.962C43.9185 98.1625 38.3363 99.2886 35.5371 103.455L28.4266 114.024C25.6274 118.191 26.7535 123.822 30.92 126.572Z'
                fill='white'
              />
              <path
                d='M188.922 99.643C201.47 99.643 211.621 109.794 211.621 122.342C211.621 134.89 201.47 145.041 188.922 145.041C176.374 145.041 166.223 134.89 166.223 122.342C166.223 109.794 176.374 99.643 188.922 99.643ZM188.922 177.553C219.391 177.553 244.133 152.827 244.133 122.342C244.133 91.8568 219.407 67.1309 188.922 67.1309C158.437 67.1309 133.711 91.8729 133.711 122.342C133.711 152.811 158.453 177.553 188.922 177.553Z'
                fill='white'
              />
            </LogoGroup>
          </AnimatedSVG>
        </SVGContainer>
      </StickyWrapper>

      {/* OPTIONAL: Scroll Progress Indicator */}
      {/* READY TO UNCOMMENT: Remove the comment below to enable scroll progress indicator */}
      {/* <ScrollProgressIndicator
        $progress={scrollProgress}
        aria-label={`Scroll progress: ${Math.round(scrollProgress * 100)}%`}
      /> */}

      {/* Keep scrollProgress variable active (remove this line when uncommenting above) */}
      {scrollProgress && null}
    </ScrollRingsContainer>
  );
};

export default ScrollRingsLogo;
