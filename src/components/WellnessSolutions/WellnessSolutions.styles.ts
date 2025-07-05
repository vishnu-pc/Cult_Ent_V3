import styled from 'styled-components';
import { motion } from 'framer-motion';

/**
 * The main container for the Wellness Solutions section.
 * Uses the animated gradient background and implements a 35/65 split layout.
 */
export const SectionContainer = styled.section`
  height: 110vh;
  width: 100%;
  display: flex;
  background: var(--gradient-animated-subtle);
  background-size: 400% 400%;
  animation: gradientShift 8s ease infinite;
  overflow: hidden;
  position: relative;
  
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

/**
 * Large background "05" element positioned in the top-left behind the image container.
 */
export const BackgroundNumber = styled.div`
  position: absolute;
  top: -2rem;
  left: -5rem;
  font-size: 20rem;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.03);
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
  flex: 0 0 30%;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  z-index: 2;
  margin-left: 10%;
  margin-top: 3vh;
  margin-bottom: 1vh;
  
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
  padding: var(--spacing-xxs) var(--spacing-xxs);
  z-index: 3;
  height: auto;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    padding: var(--spacing-lg);
  }
`;

/**
 * The "WELLNESS SOLUTIONS" text overlay.
 */
export const OverlayTitle = styled.h3`
  font-size: var(--font-size-lg);
  letter-spacing: 0.2em;
  color: var(--color-text);
  margin-bottom: var(--spacing-xxs);
  font-weight: 400;
  text-transform: uppercase;
`;

/**
 * The "05 WAYS" text with animated gradient.
 */
export const OverlaySubtitle = styled.h2`
  font-size: var(--font-size-7xl);
  font-weight: 900;
  background: var(--gradient-animated-colour);
  background-size: 400% 400%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientShift 21s ease infinite;
  margin-bottom: var(--spacing-xxs);
  
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
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
  flex: 0 0 55%;
  display: flex;
  flex-direction: column;
  padding: var(--spacing-xxs);
  margin-top: 3vh;
  margin-bottom: 1vh;
  z-index: 2;
  
  @media (max-width: 768px) {
    padding: var(--spacing-lg);
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
  font-weight: 300;
  line-height: 1.2;
  margin: 0;
  padding: var(--spacing-lg) var(--spacing-xxs);
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
  padding: 10% var(--spacing-xxs);
`;

/**
 * An individual option item in the list.
 * Changes background color on hover based on the solution's hover color.
 * Spacing is calculated to distribute options evenly across 80% of the container height.
 */
export const OptionItem = styled(motion.div)<{ $hoverColor: string }>`
  cursor: pointer;
  transition: all var(--transition-normal);
  border-bottom: 2px solid ${props => props.$hoverColor};
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: var(--spacing-md) var(--spacing-xl);
  
  &:hover {
    background-color: ${props => props.$hoverColor};
    color: var(--color-black);
  }
  
  &:last-child {
    border-bottom: none;
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
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-sm);
`;

/**
 * The option number (e.g., "#1", "#2").
 */
export const OptionNumber = styled.span`
  font-size: var(--font-size-xl);
  font-weight: 600;
  color: var(--color-grey);
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
  font-size: var(--font-size-2xl);
  font-weight: ${props => props.$hasDescription ? '700' : '600'};
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
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  line-height: 1.5;
  margin-top: 8px;
  overflow: hidden;
`; 