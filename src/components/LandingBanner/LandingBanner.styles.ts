import styled, { keyframes, css } from 'styled-components';
import { motion } from 'framer-motion';
import DynamicLogo from '../DynamicLogo';

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
 * Cycles between yellow (#FDD914) and pink (#FF3278)
 * Creates a pulsing border effect to draw attention
 */
export const buttonBorderAnimation = keyframes`
  0% {
    border-color: #FDD914;
  }
  50% {
    border-color: #FF3278;
  }
  100% {
    border-color: #FDD914;
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
export const BannerContainer = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--spacing-2xl);
  
  /* SUBTLE GRADIENT: Making it darker and more transparent to match black theme */
  background: linear-gradient(15deg, 
    rgba(0, 0, 0, 1),           /* Pure black - fully opaque */
    rgba(253, 217, 20, 0.15),   /* Yellow with 15% opacity - very subtle */
    rgba(237, 58, 121, 0.1),    /* Pink with 10% opacity - barely visible */
    rgba(0, 180, 255, 0.12),    /* Blue with 12% opacity - subtle hint */
    rgba(0, 0, 0, 1)            /* Pure black - fully opaque */
  );
  background-size: 600% 600%;
  animation: ${gradientAnimation} 15s ease infinite;
  overflow: hidden;
  
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: var(--spacing-xl);
  }
`;

export const ContentContainer = styled.div`
  max-width: 50%;
  //background: rgb(58, 11, 11);

  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: var(--spacing-2xl);
  }
`;

/**
 * TITLE STYLING
 * Uses transparent color with text-stroke to create outlined text effect
 * This allows the background gradient to show through while maintaining readability
 */
export const Title = styled.h1`
  font-size: var(--font-size-xxl);
  margin-bottom: var(--spacing-lg);
  font-family: 'Inter', sans-serif;
  font-weight: 900;
  color: transparent;                           /* Makes text transparent */
  -webkit-text-stroke: 1.5px var(--color-text); /* Creates white outline */
  text-stroke: 1.5px var(--color-text);         /* Fallback for non-webkit browsers */
  
  @media (max-width: 768px) {
    font-size: var(--font-size-4xl);
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
  font-weight: 900;
  cursor: pointer;
  
  /* ACTIVE STATE: Animated gradient text */
  ${props => props.isScrolled && css`
    color: transparent;
    background: linear-gradient(to right, #FDD914, #40B9EB, #FF3278);
    background-size: 200% auto;                /* Double width for animation */
    -webkit-background-clip: text;             /* Clip gradient to text shape */
    background-clip: text;                     /* Standard property */
    -webkit-text-stroke: 0;                   /* Remove outline */
    text-stroke: 0;                           /* Remove outline */
    animation: ${gradientTextAnimation} 11s ease infinite;
  `}
  
  /* DEFAULT STATE: Outlined transparent text */
  ${props => !props.isScrolled && css`
    color: transparent;
    -webkit-text-stroke: 1.5px var(--color-text);
    text-stroke: 1.5px var(--color-text);
  `}
  
  /* SMOOTH TRANSITION: When switching between states */
  transition: all 0.3s ease;
`;

export const Subtitle = styled.p`
  font-size: var(--font-size-xl);
  color: var(--color-grey-light);
  margin-bottom: var(--spacing-xl);
  max-width: 80%;
  
  @media (max-width: 768px) {
    font-size: var(--font-size-lg);
    max-width: 100%;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  //background: rgb(60, 37, 162);
  
  @media (max-width: 768px) {
    margin-top: var(--spacing-xl);
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
  width: 500px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--spacing-xl);
  
  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
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
  bottom: 2rem;
  right: 2rem;
  width: 97px;
  height: 97px;
  border-radius: 50%;
  background: linear-gradient(217deg, var(--color-grey-dark) 12.09%, var(--color-grey-dark) 95.46%);
  color: var(--color-text);
  font-size: var(--font-size-sm);
  font-weight: 700;
  cursor: pointer;
  border: 0.93px solid;
  border-color: #FDD914;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  filter: drop-shadow(0px 3.7px 18.6px rgba(254, 162, 54, 0.23));
  box-shadow: 4px 4px 8px rgba(254, 162, 54, 0.23);
  z-index: var(--z-index-floating);
  
  /* BORDER ANIMATION: Cycles between yellow and pink */
  animation: ${buttonBorderAnimation} 8s ease infinite;
  
  &:hover {
    background: linear-gradient(217deg, var(--color-grey-dark) 12.09%, var(--color-grey-dark) 95.46%);
    border-color: #FF3278;
  }
  
  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    font-size: var(--font-size-xs);
    bottom: 1.5rem;
    right: 1.5rem;
  }
`; 