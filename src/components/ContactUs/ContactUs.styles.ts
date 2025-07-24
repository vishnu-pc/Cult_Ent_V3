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
  background: linear-gradient(135deg, #0f0120 0%, #000000 100%);
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: var(--spacing-2xl) var(--spacing-md);
    min-height: auto;
  }
`;

export const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-3xl);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: var(--spacing-2xl);
  }
`;

export const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);

  @media (max-width: 768px) {
    order: 1;
    width: 100%;
  }
`;

export const TitleSection = styled.div`
  margin-bottom: var(--spacing-lg);

  @media (max-width: 768px) {
    margin-bottom: var(--spacing-xl);
    text-align: center;
  }
`;

export const ImageSection = styled.div`
  margin-top: -150px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const JumpingGirlImage = styled(motion.img)`
  width: 100%;
  height: auto;
  max-height: 120vh;
  min-height: 1000px;
  object-fit: contain;

  @media (max-width: 768px) {
    max-height: 60vh;
    min-height: 400px;
  }
`;

export const FormSection = styled.div`
  flex: 1;
  max-width: 600px;

  @media (max-width: 768px) {
    order: 2;
    width: 100%;
    max-width: none;
  }
`;

export const ContactTitle = styled.h2`
  font-size: var(--font-size-lg);
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: var(--spacing-sm);
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

export const MainHeadline = styled.h1`
  font-size: var(--font-size-5xl);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: var(--spacing-lg);

  @media (max-width: 768px) {
    font-size: var(--font-size-4xl);
  }
`;

export const CutToTheText = styled.span`
  color: var(--color-text);
  font-weight: 700;
`;

export const ChaseText = styled.span`
  background: linear-gradient(90deg, #40b9eb 0%, #ff3278 100%);
  background-size: 120% 120%;
  font-weight: 700;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const Subtitle = styled.p`
  font-size: var(--font-size-xl);
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: var(--font-size-lg);
  }
`;

export const Form = styled.form`
  margin-top: 250px;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
`;

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
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
  padding: var(--spacing-md);
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: var(--border-radius-md);
  color: var(--color-text);
  font-size: var(--font-size-md);
  font-family: var(--font-primary);
  outline: none;
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
  padding: var(--spacing-md);
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: var(--border-radius-md);
  color: rgba(255, 255, 255, 0.6);
  font-size: var(--font-size-md);
  font-family: var(--font-primary);
  outline: none;
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
  padding: var(--spacing-md);
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: var(--border-radius-md);
  color: var(--color-text);
  font-size: var(--font-size-md);
  font-family: var(--font-primary);
  outline: none;
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
