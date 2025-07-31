import styled from 'styled-components';
import { motion } from 'framer-motion';
import LeftIcon from '../../assets/images/OurImpact/left-icon.png';
import EllipseBackground from '../../assets/images/OurImpact/Ellipse-1.png';

export const SectionContainer = styled.section`
  min-height: 100vh;
  width: 100%;
  max-width: 100vw;
  background:
    linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.4) 10%,
      rgba(0, 0, 0, 0.7) 30%,
      #000000 65%,
      #000000 100%
    ),
    linear-gradient(
      to right,
      rgba(255, 221, 0, 0.6) 0%,
      /* yellow */ rgba(0, 255, 102, 0.4) 25%,
      /* green */ rgba(0, 102, 255, 0.4) 50% /* blue */
    );
  /* padding: var(--spacing-3xl) var(--spacing-xl); */
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    /* padding: var(--spacing-2xl) var(--spacing-md); */
  }
`;

export const ContentWrapper = styled.div`
  /* max-width: 1400px; */
  margin: 0 auto;
  width: 100%;
`;

export const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-xl);
  gap: 20%;

  @media (max-width: 768px) {
    flex-direction: column;
    /* gap: var(--spacing-xl); */
    align-items: flex-start;
  }
`;

export const TitleSection = styled.div`
  flex: 1;
`;

export const Subheading = styled.div`
  font-size: var(--font-size-xl);
  opacity: 0.5;
  letter-spacing: 0.16em;
  color: var(--color-text);
  font-weight: 400;
  text-transform: uppercase;
  text-align: left;
  margin-bottom: var(--spacing-md);

  @media (max-width: 768px) {
    font-size: var(--font-size-title-mobile);
    margin-bottom: var(--spacing-xl);
  }
`;

export const MainTitle = styled.h1`
  font-size: var(--font-size-6xl);
  line-height: 1.19;
  color: var(--color-text);
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.42rem;

  @media (max-width: 768px) {
    font-size: var(--font-size-5xl);
    margin-bottom: var(--spacing-md);
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-4xl);
  }
`;

export const GradientText = styled.span`
  background: linear-gradient(90deg, #a8d840 0%, #6bd6e4 50%, #4285f4 100%);
  background-size: 150% 150%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradient 7s ease infinite;

  @keyframes gradient {
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

export const DescriptionSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    align-items: flex-start;
  }
`;

export const Description = styled.p`
  font-size: var(--font-size-3xl);
  font-weight: 400;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  /* max-width: 400px; */

  @media (max-width: 768px) {
    font-size: var(--font-size-md);
    // margin-bottom: var(--spacing-xxs);
  }
`;

export const VideoCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-2xl);
  margin-bottom: var(--spacing-2xl);

  @media (max-width: 1200px) {
    display: flex;
    overflow: hidden;
    position: relative;
    width: 100%;
    margin-bottom: var(--spacing-xl);
    justify-content: center;
  }
`;

/* Remove the complex MobileCarouselWrapper - not needed */

export const VideoCard = styled(motion.div)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: var(--spacing-lg);
  overflow: hidden;
  transition: all var(--transition-normal);

  &:hover {
    border-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  }

  /* Mobile styling - single card takes full width */
  @media (max-width: 1200px) {
    width: 100%;
    max-width: 90vw; /* Prevent card from being too wide */
    margin: 0 auto;
  }
`;

export const ThumbnailContainer = styled.div`
  position: relative;
  width: 100%;
  max-height: 25vw;
  border-radius: var(--border-radius-md);
  overflow: hidden;
  margin-bottom: var(--spacing-lg);
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform var(--transition-normal);
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

export const IframeContainer = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  border-radius: var(--border-radius-md);
  overflow: hidden;
  margin-bottom: var(--spacing-lg);
  cursor: pointer;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: var(--border-radius-md);
  }
`;

export const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-normal);

  &:hover {
    border-color: rgba(255, 255, 255, 1);
    transform: translate(-50%, -50%) scale(1.1);
  }

  &::after {
    content: '';
    width: 0;
    height: 0;
    border-left: 16px solid rgba(255, 255, 255, 0.9);
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    margin-left: 4px;
  }
`;

export const CardContent = styled.div`
  color: var(--color-text);
`;

export const CardTitle = styled.h3`
  font-size: var(--font-size-md);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.37rem;
  line-height: 1.6;
  margin-bottom: var(--spacing-xs);
  color: var(--color-text);
`;

export const CardSubtitle = styled.div`
  /* font-size: var(--font-size-sm); */
  /* color: rgba(255, 255, 255, 0.7); */
  margin-bottom: var(--spacing-sm);

  font-size: var(--font-size-md);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.37rem;
  line-height: 1.6;
  color: var(--color-text);
`;

export const CardDescription = styled.p`
  font-size: var(--font-size-md);
  font-weight: 400;
  line-height: 2;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.5;
`;

export const NavigationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--spacing-md);

  @media (max-width: 1200px) {
    margin-top: var(--spacing-lg);
    padding: 0 var(--spacing-lg);
  }
`;

export const NavigationButton = styled(motion.button)<{
  $disabled?: boolean;
  $isNext?: boolean;
}>`
  width: 50px;
  height: 50px;
  background: url(${EllipseBackground}) center/contain no-repeat;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-normal);
  opacity: ${props => (props.$disabled ? 0.3 : 1)};
  pointer-events: ${props => (props.$disabled ? 'none' : 'auto')};
  position: relative;

  &::before {
    content: '';
    width: 24px;
    height: 24px;
    background: url(${LeftIcon}) center/cover no-repeat;
    transform: ${props => (props.$isNext ? 'scaleX(-1)' : 'scaleX(1)')};
  }

  &:hover:not(:disabled) {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  &:focus {
    outline: none; /* Remove default browser focus outline */
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
