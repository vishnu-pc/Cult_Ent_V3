import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

/**
 * GRADIENT ANIMATION for Submit Button
 * Creates a continuous left-to-right-to-left movement
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

export const SectionContainer = styled.section`
  min-height: 100vh;
  width: 100%;
  max-width: 100vw;
  /* Restore original background gradient */
  background: linear-gradient(135deg, #0f0120 0%, #000000 100%);
  /* background: blue; */
  display: flex;
  align-items: center;
  /* Use standardized section spacing */
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    flex-direction: column;
    min-height: auto;
  }
`;

/**
 * CSS Grid container implementing the A/B+C layout structure
 * Desktop: 2x2 grid where A spans both columns, B=40%, C=60%
 * Mobile: Single column where B is hidden, only A and C visible
 */
export const ContentWrapper = styled.div`
  width: 100%;

  /* CSS Grid Layout */
  display: grid;
  grid-template-columns: 2fr 3fr; /* 40% + 60% = 2:3 ratio */
  grid-template-rows: auto 1fr; /* Auto-height for title, remaining space for content */
  //gap: var(--spacing-3xl); /* Standardized gap */

  /* Grid areas for better semantic layout */
  grid-template-areas:
    'title title' /* A spans both columns */
    'image form'; /* B (image) + C (form) */

  @media (max-width: 768px) {
    /* Mobile: Single column layout, hide image */
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    grid-template-areas:
      'title' /* A - TitleSection */
      'form'; /* C - FormSection (B/ImageSection hidden) */
    //gap: var(--spacing-2xl);
  }
`;

/**
 * A - TitleSection: Spans full width at top
 */
export const TitleSection = styled.div`
  grid-area: title;
  /* Use standardized spacing */
  margin-bottom: var(--spacing-2xl);
  text-align: left;

  @media (max-width: 768px) {
    margin-bottom: var(--spacing-xl);
    text-align: left;
  }
`;

/**
 * B - ImageSection: 40% width, hidden on mobile
 */
export const ImageSection = styled.div`
  grid-area: image;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    /* Hide on mobile as per requirements */
    display: none;
  }
`;

/**
 * C - FormSection: 60% width, full width on mobile
 */
export const FormSection = styled.div`
  grid-area: form;
  width: 100%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const JumpingGirlImage = styled(motion.img)`
  width: 100%;
  height: auto;
  max-height: 73vh;
  object-fit: contain;

  @media (max-width: 768px) {
    max-height: 60vh;
    min-height: 400px;
  }
`;

export const ContactTitle = styled.h2`
  font-size: var(--font-size-xl);
  opacity: 0.5;
  letter-spacing: 0.16em;
  color: var(--color-text);
  margin-bottom: var(--spacing-sm);
  font-weight: 400;
  text-transform: uppercase;
  text-align: left;
`;

export const MainHeadline = styled.h1`
  font-size: var(--font-size-5xl);
  line-height: 1.19;
  font-weight: 700;
  letter-spacing: 0.42em;
  text-transform: uppercase;
  margin-bottom: var(--spacing-md);
  font-family: var(--font-primary);

  @media (max-width: 768px) {
    font-size: var(--font-size-4xl);
  }
`;

export const CutToTheText = styled.span`
  color: var(--color-text);
  font-weight: 700;
`;

export const ChaseText = styled.span`
  background: linear-gradient(90.88deg, rgb(62, 71, 239) 0%, #ff3278 100%);
  /* background: linear-gradient(90.88deg, #40b9eb 2.3%, #ff3278 49.42%); */
  background-size: 150% 150%;
  font-weight: 700;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientShift 6s ease infinite;
  background-clip: text;
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
`;

export const Subtitle = styled.p`
  font-size: var(--font-size-2xl);
  color: rgba(255, 255, 255, 0.9);
  line-height: 2;
  font-family: var(--font-primary);
  font-weight: 400;
  margin: 0; /* Remove default margin */

  @media (max-width: 768px) {
    font-size: var(--font-size-lg);
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  /* Use standardized spacing */
  gap: var(--spacing-lg);
`;

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* Use standardized spacing */
  gap: var(--spacing-lg);

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FullWidthFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 1 / -1;
`;

export const Input = styled.input`
  /* Use standardized spacing */
  padding: var(--spacing-md);
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.3);
  /* Use standardized border radius */
  border-radius: var(--border-radius-xxs);
  color: var(--color-text);
  font-size: var(--font-size-md);
  font-family: var(--font-primary);
  outline: none;
  /* Use standardized transitions */
  transition: all var(--transition-normal);

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  &:focus {
    border-color: #b96aff;
    box-shadow: 0 0 0 1px #b96aff;
  }

  &:hover {
    border-color: rgba(255, 255, 255, 0.5);
  }
`;

export const Select = styled.select`
  /* Use standardized spacing */
  padding: var(--spacing-md);
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.3);
  /* Use standardized border radius */
  border-radius: var(--border-radius-xxs);
  color: rgba(255, 255, 255, 0.6);
  font-size: var(--font-size-md);
  font-family: var(--font-primary);
  outline: none;
  /* Use standardized transitions */
  transition: all var(--transition-normal);
  cursor: pointer;

  &:focus {
    border-color: #b96aff;
    box-shadow: 0 0 0 1px #b96aff;
  }

  &:hover {
    border-color: rgba(255, 255, 255, 0.5);
  }

  option {
    background-color: #0f0120;
    color: var(--color-text);
  }
`;

export const TextArea = styled.textarea`
  /* Use standardized spacing */
  padding: var(--spacing-md);
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.3);
  /* Use standardized border radius */
  border-radius: var(--border-radius-xxs);
  color: var(--color-text);
  font-size: var(--font-size-md);
  font-family: var(--font-primary);
  outline: none;
  /* Use standardized transitions */
  transition: all var(--transition-normal);
  min-height: 120px;
  resize: vertical;

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  &:focus {
    border-color: #b96aff;
    box-shadow: 0 0 0 1px #b96aff;
  }

  &:hover {
    border-color: rgba(255, 255, 255, 0.5);
  }
`;

export const RecaptchaContainer = styled.div`
  display: flex;
  align-items: center;
  /* Use standardized spacing */
  gap: var(--spacing-md);
  margin: var(--spacing-lg) 0;
`;

export const RecaptchaCheckbox = styled.input`
  width: 20px;
  height: 20px;
  accent-color: #b96aff;
`;

export const RecaptchaText = styled.span`
  color: rgba(255, 255, 255, 0.8);
  font-size: var(--font-size-sm);
  font-family: var(--font-primary);
`;

export const SubmitButton = styled(motion.button)`
  width: 100%;

  /* Button Dimensions */
  padding: 16px 48px;
  border-radius: 12px;
  border: none;
  cursor: pointer;

  /* Typography */
  font-size: 18px;
  font-weight: 700;
  color: var(--color-pink);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: var(--font-primary);

  /* Default State - White background with pink text */
  background: white;

  /* Shadow Effects */
  box-shadow:
    0 4px 16px rgba(237, 58, 121, 0.2),
    0 2px 8px rgba(0, 0, 0, 0.1);

  /* Smooth Transitions */
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

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

  /* Disabled State */
  &:disabled {
    background-color: rgba(255, 255, 255, 0.3);
    color: rgba(255, 255, 255, 0.5);
    cursor: not-allowed;
    transform: none;

    &:hover {
      transform: none;
      box-shadow:
        0 4px 16px rgba(237, 58, 121, 0.2),
        0 2px 8px rgba(0, 0, 0, 0.1);
      animation: none;
      background: rgba(255, 255, 255, 0.3);
      color: rgba(255, 255, 255, 0.5);
    }
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    padding: 14px 36px;
    font-size: 16px;
  }

  @media (max-width: 480px) {
    padding: 12px 28px;
    font-size: 14px;
    letter-spacing: 0.5px;
  }
`;
