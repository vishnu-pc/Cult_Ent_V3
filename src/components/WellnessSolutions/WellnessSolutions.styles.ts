import styled from 'styled-components';
import { motion } from 'framer-motion';

/**
 * The main container for the Wellness Solutions section.
 * Uses the animated gradient background and implements a 35/65 split layout.
 * MOBILE: Simplified to single-column layout with full-width content
 */
export const SectionContainer = styled.section`
  height: 110vh;
  width: 100%;
  max-width: 100vw;
  display: flex;
  /* background-color: red; */
  /* Background removed - inherited from CombinedWellnessSection */
  overflow: hidden;
  position: relative;

  @media (max-width: 768px) {
    /* MOBILE CHANGE: Single column layout since ImageContainer is hidden */
    flex-direction: column;
    /* MOBILE CHANGE: Maintain current height behavior - let content determine height */
    height: auto;
    min-height: 100vh;
    /* MOBILE CHANGE: Ensure no horizontal overflow */
    overflow-x: hidden;
    overflow-y: visible;
  }
`;

/**
 * Large background "05" element positioned in the top-left behind the image container.
 */
export const BackgroundNumber = styled.div`
  position: absolute;
  top: -1rem;
  left: -6rem;
  font-size: 17rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.13);
  letter-spacing: -0.12rem;
  z-index: 1;
  line-height: 1;
  pointer-events: none;
  user-select: none;

  @media (max-width: 768px) {
    font-size: 7rem;
    top: 5.5rem;
    left: -2.5rem;
    opacity: 0.3;
  }
`;

/**
 * Container for the image display and overlay text.
 * Takes up 35% of the width with fixed dimensions.
 * MOBILE: Hidden completely to allow ContentContainer to fill full width
 */
export const ImageContainer = styled.div`
  flex: 0 0 33%;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  z-index: 2;
  /* margin-left: 10%; */
  /* margin-top: 3vh; */
  /* margin-bottom: 1vh; */

  @media (max-width: 768px) {
    /* MOBILE CHANGE: Hide entire ImageContainer to optimize space usage */
    display: none;
  }
`;

/**
 * Container for the overlay text above the image.
 * This should be vertically aligned with the SectionTitle on the right.
 * MOBILE: When moved to ContentContainer, only shows on mobile devices
 */
export const OverlayTextContainer = styled.div`
  //padding: var(--spacing-xxs) var(--spacing-xxs);
  z-index: 3;
  height: auto;
  flex-shrink: 0;

  @media (max-width: 768px) {
    padding: var(--spacing-md) var(--spacing-xxs);
  }

  /* MOBILE CHANGE: Hide the mobile version on desktop screens to prevent duplication */
  &.mobile-overlay {
    display: none;

    @media (max-width: 768px) {
      /* MOBILE CHANGE: Show overlay text at top of ContentContainer on mobile */
      display: block;
      /* MOBILE CHANGE: Maintain top positioning as requested */
      margin-bottom: var(--spacing-xxs);
    }
  }
`;

/**
 * The "WELLNESS SOLUTIONS" text overlay.
 */
export const OverlayTitle = styled.h3`
  font-size: var(--font-size-xl);
  opacity: 0.5;
  letter-spacing: 0.16em;
  color: var(--color-text);
  margin-bottom: var(--spacing-sm);
  font-weight: 400;
  text-transform: uppercase;
  text-align: left;

  @media (max-width: 768px) {
    font-size: var(--font-size-title-mobile);
    margin-bottom: var(--spacing-xl);
  }
`;

/**
 * The "05 WAYS" text with animated gradient.
 */
export const OverlaySubtitle = styled.h2`
  font-size: 6.1vw;
  font-weight: 700;
  background: var(--gradient-animated-colour);
  letter-spacing: -0.04em;
  background-size: 400% 400%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientShift 21s ease infinite;
  margin-top: var(--spacing-xxs);
  margin-bottom: var(--spacing-xxs);

  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-5xl);
  }
`;

/**
 * The actual image display area.
 * This should be vertically aligned with the OptionsContainer on the right.
 */
export const ImageDisplayContainer = styled.div`
  flex: 1;
  position: relative;
  overflow: hidden;
  margin-top: -1rem;
`;

/**
 * The animated image component.
 * It uses a prop to set the background image URL.
 * The image covers the entire container and is centered.
 */
export const StyledImage = styled(motion.div)<{ $imageUrl: string }>`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.$imageUrl});
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
`;

/**
 * Container for the content (title and options).
 * Takes up 55% of the width and implements the two-part vertical structure.
 * MOBILE: Expands to full width when ImageContainer is hidden
 */
export const ContentContainer = styled.div`
  flex: 0 0 67%;
  display: flex;
  flex-direction: column;
  /* padding: var(--spacing-xxs); */
  margin-top: 3vh;
  /* margin-bottom: 1vh; */
  z-index: 2;

  @media (max-width: 768px) {
    /* MOBILE CHANGE: Expand to full width since ImageContainer is hidden */
    flex: 1;
    width: 100%;
    /* MOBILE CHANGE: Ensure content stays within viewport width */
    max-width: 100vw;
    /* MOBILE CHANGE: Add horizontal padding to prevent edge-to-edge content */
    /* padding: 0 var(--spacing-lg); */
    /* MOBILE CHANGE: Maintain natural height behavior as requested */
    /* height: auto; */
    margin-top: 0;
    padding-top: 0;
  }
`;

/**
 * The main section header.
 * This should be vertically aligned with the OverlayTextContainer on the left.
 */
export const SectionTitle = styled.h2`
  font-size: var(--font-size-2xl);
  color: var(--color-text);
  font-weight: 400;
  line-height: 1.6;
  margin-bottom: 0;
  padding: var(--spacing-2xl) var(--spacing-xxs);
  flex-shrink: 0;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    font-size: var(--font-size-lg);
    padding: var(--spacing-xs) var(--spacing-xxs);
  }
`;

/**
 * Container for the list of solution options.
 * This should be vertically aligned with the ImageDisplayContainer on the left.
 * Options should take up 80% of this container's vertical space.
 * MOBILE: Maintains proportions but fills available space without image
 */
export const OptionsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3% var(--spacing-xxs);

  @media (max-width: 768px) {
    /* MOBILE CHANGE: Maintain current proportions as requested */
    flex: 1;
    /* MOBILE CHANGE: Ensure proper spacing in mobile layout */
    /* padding: var(--spacing-md) 0; */
    padding-top: 0;
    padding-bottom: 0;
    margin-top: var(--spacing-md);
    gap: var(--spacing-md);
  }
`;

/**
 * An individual option item in the list.
 * Changes background to gradient on hover based on the solution's background gradient.
 * Uses linear gradient for border-bottom with matching colors.
 * Spacing is calculated to distribute options evenly across 80% of the container height.
 */
export const OptionItem = styled(motion.div)<{
  $backgroundGradient: string;
  $borderGradient: string;
}>`
  cursor: pointer;
  transition: all var(--transition-normal);
  border-bottom: 2px solid;
  border-image: ${props => props.$borderGradient} 1;
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: var(--spacing-md) var(--spacing-xl);

  &:hover {
    background: ${props => props.$backgroundGradient};
    color: var(--color-black);
  }

  &:last-child {
    border-bottom: none;
    border-image: none;
  }

  @media (max-width: 768px) {
    padding: var(--spacing-md) var(--spacing-lg);
    &:last-child {
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    border-left: none; /* Removed solid red border - replaced with gradient pseudo-element */
    position: relative; /* Required for ::before pseudo-element positioning */

    /* MOBILE CHANGE: Gradient left border using pseudo-element to match $borderGradient */
    &::before {
      content: '';
      position: absolute;
      left: 1px; /* Account for the 1px border */
      top: 2px; /* Account for the 1px top border */
      bottom: 2px; /* Account for the 1px bottom border */
      width: 4px;
      background: ${props => props.$borderGradient};
      border-radius: 90px 0 0 90px;
      z-index: 2;
    }
  }
`;

/**
 * Container for the option number and title.
 */
export const OptionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; /* Changed: Space between content and arrow */
  gap: var(--spacing-xl);
  /* margin-bottom: var(--spacing-sm); */
`;

/**
 * Container for the left content (number + title)
 */
export const OptionHeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-xl);
  flex: 1; /* Takes up 80% of the space */
`;

/**
 * Container for the arrow - occupies right 20% of header, mobile only
 */
export const OptionArrowContainer = styled.div`
  width: 10%; /* Occupies right 10% of the header */
  display: flex;
  justify-content: flex-start; /* Left-aligned within the 10% space */
  align-items: center;

  /* MOBILE ONLY: Hide on desktop/tablet */
  display: none;

  @media (max-width: 768px) {
    display: flex; /* Show only on mobile */
  }
`;

/**
 * The arrow component - mobile only
 */
export const OptionArrow = styled.span`
  font-size: var(--font-size-2xl);
  font-weight: 700;
  color: var(--color-text);
  line-height: 1;

  /* Only visible on mobile */
  @media (max-width: 768px) {
    font-size: var(--font-size-4xl);
  }
`;

/**
 * The option number (e.g., "#1", "#2").
 */
export const OptionNumber = styled.span`
  font-size: var(--font-size-3xl);
  font-weight: 700;
  color: var(--color-grey-darker);
  min-width: 3rem;

  @media (max-width: 768px) {
    font-size: var(--font-size-4xl);
    // min-width: 3.5rem;
  }
`;

/**
 * Props for the OptionTitle component to handle conditional styling.
 */
export interface OptionTitleProps {
  $hasDescription?: boolean;
}

/**
 * The title of an option.
 * Becomes bold when the description is visible (on hover).
 */
export const OptionTitle = styled.h3<OptionTitleProps>`
  font-size: ${props =>
    props.$hasDescription ? 'var(--font-size-2xl)' : 'var(--font-size-3xl)'};
  font-weight: ${props => (props.$hasDescription ? '800' : '700')};
  letter-spacing: -0.03em;
  color: inherit;
  margin: 0;

  @media (max-width: 768px) {
    font-size: var(--font-size-xl);
  }
`;

/**
 * The description of an option.
 * This is an animated component that appears when an option is hovered.
 */
export const OptionDescription = styled(motion.p)`
  color: rgba(0, 0, 0);
  font-size: var(--font-size-xl);
  line-height: 1.5;
  /* margin-top: 8px; */
  overflow: hidden;
`;
