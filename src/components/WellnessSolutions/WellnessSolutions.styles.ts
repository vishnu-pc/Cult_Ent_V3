import styled from 'styled-components';
import { motion } from 'framer-motion';

/**
 * The main container for the Wellness Solutions section.
 * It takes up the full viewport height and width, and uses flexbox for layout.
 * On smaller screens (max-width: 768px), it switches to a column layout.
 */
export const SectionContainer = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  background-color: var(--color-background);
  overflow: hidden;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

/**
 * Container for the image display.
 * It's a flex item that takes up half the width of the section.
 * On smaller screens, it takes a fixed height.
 */
export const ImageContainer = styled.div`
  flex: 1;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    height: 40vh;
  }
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
 * It's a flex item that takes up the other half of the section.
 * Uses flexbox to center its content vertically.
 */
export const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: var(--spacing-2xl);
  
  @media (max-width: 768px) {
    padding: var(--spacing-lg);
  }
`;

/**
 * The main title of the section.
 */
export const SectionTitle = styled.h2`
  font-size: var(--font-size-3xl);
  margin-bottom: var(--spacing-xl);
  
  @media (max-width: 768px) {
    font-size: var(--font-size-2xl);
    margin-bottom: var(--spacing-lg);
  }
`;

/**
 * Container for the list of solution options.
 */
export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
`;

/**
 * An individual option item in the list.
 * It changes background and border color when active.
 * It has a hover effect for better user experience.
 */
export const OptionItem = styled(motion.div)<{ $isActive: boolean }>`
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--border-radius-md);
  cursor: pointer;
  background-color: ${props => props.$isActive ? 'rgba(255, 77, 77, 0.1)' : 'transparent'};
  border-left: 4px solid ${props => props.$isActive ? 'var(--color-accent-primary)' : 'transparent'};
  transition: all var(--transition-normal);
  
  &:hover {
    background-color: rgba(255, 77, 77, 0.05);
  }
`;

/**
 * Props for the OptionTitle component to handle conditional styling.
 */
export interface OptionTitleProps {
  $isActive?: boolean;
  $hasDescription?: boolean;
}

/**
 * The title of an option.
 * Its color changes when the option is active.
 * The bottom margin adjusts based on whether the description is visible.
 */
export const OptionTitle = styled.h3<OptionTitleProps>`
  font-size: var(--font-size-lg);
  margin-bottom: ${props => props.$hasDescription ? 'var(--spacing-sm)' : '0'};
  color: ${props => props.$isActive ? 'var(--color-accent-primary)' : 'var(--color-text)'};
`;

/**
 * The description of an option.
 * This is an animated component that appears when an option is active.
 */
export const OptionDescription = styled(motion.p)`
  font-size: var(--font-size-md);
  color: var(--color-grey);
  line-height: 1.6;
`; 