import styled from 'styled-components';
import { motion } from 'framer-motion';

/**
 * The main container for the Wellness Solutions section.
 * Uses the animated gradient background and implements a 35/65 split layout.
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
    flex-direction: column;
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
    font-size: 12rem;
    top: -1rem;
    left: -1rem;
  }
`;

/**
 * Container for the image display and overlay text.
 * Takes up 35% of the width with fixed dimensions.
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
    height: 40vh;
    flex: none;
  }
`;

/**
 * Container for the overlay text above the image.
 * This should be vertically aligned with the SectionTitle on the right.
 */
export const OverlayTextContainer = styled.div`
  //padding: var(--spacing-xxs) var(--spacing-xxs);
  z-index: 3;
  height: auto;
  flex-shrink: 0;

  @media (max-width: 768px) {
    padding: var(--spacing-md) var(--spacing-xxs);
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
    font-size: var(--font-size-3xl);
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
    /* padding: var(--spacing-lg); */
    flex: none;
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
    font-size: var(--font-size-2xl);
  }
`;

/**
 * Container for the list of solution options.
 * This should be vertically aligned with the ImageDisplayContainer on the left.
 * Options should take up 80% of this container's vertical space.
 */
export const OptionsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3% var(--spacing-xxs);
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
  }
`;

/**
 * Container for the option number and title.
 */
export const OptionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-xl);
  /* margin-bottom: var(--spacing-sm); */
`;

/**
 * The option number (e.g., "#1", "#2").
 */
export const OptionNumber = styled.span`
  font-size: var(--font-size-3xl);
  font-weight: 700;
  color: var(--color-grey-darker);
  min-width: 3rem;
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
    font-size: var(--font-size-lg);
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
