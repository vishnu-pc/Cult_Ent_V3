import styled from 'styled-components';

/**
 * MAIN CAROUSEL CONTAINER
 * Contains the entire carousel component with proper spacing and layout
 */
export const CarouselContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: var(--spacing-lg);

  /* Prevent horizontal overflow that affects global layout */
  overflow-x: hidden;
  max-width: 100%;

  @media (max-width: 768px) {
    padding: var(--spacing-md);
    /* Extra protection against mobile layout issues */
    max-width: 100vw;
    box-sizing: border-box;
    /* Absolutely prevent any horizontal overflow */
    overflow-x: hidden;
    contain: layout; /* CSS containment to prevent layout overflow */
  }
`;

/**
 * CAROUSEL VIEWPORT
 * Defines the visible area of the carousel with overflow hidden
 * Handles the horizontal scroll container for card navigation
 */
export const CarouselViewport = styled.div`
  width: 100%;
  /* max-width: 600px; */
  height: 47vh;
  position: relative;
  border-radius: var(--border-radius-lg);
  margin-bottom: var(--spacing-xl);
  margin-top: 0;
  padding-top: 0;

  /* Allow overflow for desktop to show protruding images */
  overflow: visible;

  /* Force hidden overflow on mobile to prevent layout issues */
  @media (max-width: 768px) {
    overflow: visible;
    max-width: 100vw; /* Prevent viewport expansion */
    height: 40vh;
  }
`;

/**
 * CAROUSEL TRACK
 * Container that slides horizontally to show different cards
 * Transform property is animated for smooth transitions
 */
export const CarouselTrack = styled.div<{ $currentIndex: number }>`
  display: flex;
  width: 330%; /* 5 cards × 100% each */
  height: 100%;
  transform: translateX(
    -${props => props.$currentIndex * 20}%
  ); /* 100% ÷ 5 cards = 20% per card */
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  /* Ensure track doesn't cause horizontal overflow */
  max-width: none;

  @media (max-width: 768px) {
    /* Mobile: Show only one card, no peeking to prevent overflow */
    width: 100%; /* Single card width */
    transform: translateX(0); /* No sliding needed */
  }
`;

/**
 * CATALOG CARD
 * Individual card container with glass morphism design
 * Handles hover/active animations and opacity states
 */
export const CatalogCard = styled.div<{
  $isActive: boolean;
  $isPeeking: boolean;
}>`
  /* Card layout and sizing */
  width: 20%; /* Each card takes 20% of track (100% ÷ 5 cards) */
  height: 100%;
  padding: var(--spacing-xl);
  position: relative;
  cursor: pointer;
  margin-right: var(--spacing-2xl);

  /* Allow image overflow for all cards on desktop, hidden on mobile */
  overflow: visible;

  /* Glass morphism background */
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--border-radius-lg);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  /* Opacity based on card state */
  opacity: ${props => {
    if (props.$isActive) return 1;
    if (props.$isPeeking) return 0.2;
    return 0;
  }};

  /* Make invisible cards non-interactive */
  pointer-events: ${props =>
    props.$isActive || props.$isPeeking ? 'auto' : 'none'};

  /* Smooth transitions for all state changes */
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  /* Hover animation - scale up */
  &:hover {
    transform: scale(1); // Was 1.1
    opacity: 1;
    border-color: rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.08);
    box-shadow:
      0 8px 32px rgba(0, 0, 0, 0.3),
      0 0 0 1px rgba(255, 255, 255, 0.1);
  }

  /* Active/click animation - scale down briefly */
  &:active {
    transform: scale(1); // Was 0.95
    transition-duration: 0.1s;
  }

  /* Ensure hover works with scale for active cards */
  &:hover:active {
    transform: scale(1); // Was 1.05
    /* Hover scale × active scale = 1.1 × 0.95 = 1.045 ≈ 1.05 */
  }

  /* Mobile responsiveness - prevent layout overflow */
  @media (max-width: 768px) {
    overflow: visible; /* Force hidden overflow on mobile to prevent layout issues */
    margin-right: 0; /* Remove margin on mobile to prevent overflow */
    width: 100%; /* Full width on mobile */

    /* Only show active card on mobile to prevent any horizontal overflow */
    display: ${props => (props.$isActive ? 'block' : 'none')};
  }
`;

/**
 * CATALOG IMAGE
 * Cover image that slightly overflows the card edges
 * Positioned to create visual depth and engagement
 */
export const CatalogImage = styled.img`
  width: calc(
    100% + var(--spacing-md)
  ); /* Overflow by medium spacing on each side */
  height: calc(105% + var(--spacing-6xl));
  object-fit: cover;
  border-radius: var(--border-radius-md);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;

  /* Ensure image doesn't interfere with download button clicks */
  pointer-events: none;

  /* Subtle shadow for depth */
  /* box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2); */
`;

/**
 * DOWNLOAD BUTTON
 * Circular download button positioned in bottom-right corner
 * Only this element triggers the PDF download
 */
export const DownloadButton = styled.button`
  /* Positioning */
  position: absolute;
  bottom: var(--spacing-md);
  right: var(--spacing-md);
  z-index: 2; /* Above the image */

  /* Circular button styling */
  width: 3rem; /* 48px */
  height: 3rem; /* 48px */
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.3);
  padding: 0;

  /* Glass morphism background */
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  /* Button content and cursor */
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  /* Smooth transitions */
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  /* Hover state */
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.5);
    transform: scale(1.1);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
  }

  /* Active state */
  &:active {
    transform: scale(0.9);
    transition-duration: 0.1s;
  }

  /* Focus state for accessibility */
  &:focus {
    outline: none;
    box-shadow:
      0 4px 16px rgba(0, 0, 0, 0.3),
      0 0 0 2px var(--color-accent-primary);
  }
`;

/**
 * DOWNLOAD ICON
 * SVG icon inside the download button
 * Sized and colored for visibility
 */
export const DownloadIcon = styled.svg`
  width: 100%;
  height: 100%;
  fill: #ffffff;
  transition: fill 0.2s ease;

  /* Icon animation on button hover */
  ${DownloadButton}:hover & {
    fill: var(--color-accent-primary);
  }
`;

/**
 * NAVIGATION CONTROLS
 * Container for previous/next arrow buttons
 * Positioned below the carousel viewport
 */
export const NavigationControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-lg);
  margin-top: var(--spacing-md);
`;

/**
 * NAVIGATION BUTTON
 * Previous/Next arrow buttons with consistent styling
 * Disabled state for boundary conditions
 */
export const NavigationButton = styled.button<{ $disabled?: boolean }>`
  /* Button sizing and layout */
  width: 3rem; /* 40px */
  height: 3rem; /* 40px */
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0;

  /* Glass morphism background */
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  /* Button content */
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${props => (props.$disabled ? 'not-allowed' : 'pointer')};

  /* Opacity based on disabled state */
  opacity: ${props => (props.$disabled ? 0.3 : 1)};

  /* Smooth transitions */
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  /* Hover state (only when not disabled) */
  &:hover {
    ${props =>
      !props.$disabled &&
      `
      background: rgba(255, 255, 255, 0.1);
      border-color: rgba(255, 255, 255, 0.4);
      transform: scale(1.1);
    `}
  }

  /* Active state (only when not disabled) */
  &:active {
    ${props =>
      !props.$disabled &&
      `
      transform: scale(0.9);
      transition-duration: 0.1s;
    `}
  }

  /* Focus state for accessibility */
  &:focus {
    outline: none;
    ${props =>
      !props.$disabled &&
      `
      box-shadow: 0 0 0 2px var(--color-accent-primary);
    `}
  }
`;

/**
 * NAVIGATION ICON
 * Arrow icons inside navigation buttons
 * Rotated for left/right direction
 */
export const NavigationIcon = styled.svg<{ $direction: 'left' | 'right' }>`
  width: 100%;
  height: 100%;
  fill: #ffffff;
  transition: fill 0.2s ease;

  /* Rotate icon based on direction */
  transform: ${props =>
    props.$direction === 'left' ? 'rotate(180deg)' : 'rotate(0deg)'};

  /* Icon color change on button hover */
  ${NavigationButton}:hover & {
    fill: var(--color-accent-primary);
  }
`;

/**
 * RESPONSIVE STYLES - Individual component responsive behavior
 */

// Add responsive styles to individual components
export const ResponsiveCarouselContainer = styled(CarouselContainer)`
  @media (max-width: 768px) {
    padding: var(--spacing-md);
  }
`;

export const ResponsiveCarouselViewport = styled(CarouselViewport)`
  @media (max-width: 768px) {
    height: 350px;
    max-width: 500px;
  }

  @media (max-width: 640px) {
    height: 300px;
    max-width: 400px;
  }
`;

export const ResponsiveCatalogCard = styled(CatalogCard)`
  @media (max-width: 768px) {
    padding: var(--spacing-lg);
  }

  @media (max-width: 640px) {
    padding: var(--spacing-md);
  }
`;

export const ResponsiveDownloadButton = styled(DownloadButton)`
  @media (max-width: 768px) {
    width: 2.5rem;
    height: 2.5rem;
  }

  @media (max-width: 640px) {
    width: 2rem;
    height: 2rem;
    bottom: var(--spacing-sm);
    right: var(--spacing-sm);
  }
`;

export const ResponsiveNavigationButton = styled(NavigationButton)`
  @media (max-width: 640px) {
    width: 2rem;
    height: 2rem;
  }
`;
