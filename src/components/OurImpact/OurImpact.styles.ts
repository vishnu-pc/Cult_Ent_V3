import styled from 'styled-components';
import { motion } from 'framer-motion';
import LeftIcon from '../../assets/images/OurImpact/left-icon.png';
import EllipseBackground from '../../assets/images/OurImpact/Ellipse-1.png';

export const SectionContainer = styled.section`
 min-height: 100vh;
  width: 100%;
  background: 
    linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.4) 30%,
      rgba(0, 0, 0, 0.7) 50%,
      #000000 65%,
      #000000 100%
    ),
    linear-gradient(
      to right,
      rgba(255, 221, 0, 0.6) 0%,     /* yellow */
      rgba(0, 255, 102, 0.4) 35%,    /* green */
      rgba(0, 102, 255, 0.4) 70%     /* blue */
    );
  padding: var(--spacing-3xl) var(--spacing-xl);
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    padding: var(--spacing-2xl) var(--spacing-md);
  }
`;

export const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
`;

export const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--spacing-3xl);
  gap: var(--spacing-2xl);
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: var(--spacing-xl);
  }
`;

export const TitleSection = styled.div`
  flex: 1;
`;

export const Subheading = styled.div`
  font-size: var(--font-size-sm);
  font-weight: 600;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin-bottom: var(--spacing-md);
`;

export const MainTitle = styled.h1`
  font-size: var(--font-size-6xl);
  font-weight: 800;
  line-height: 1.1;
  color: var(--color-text);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  
  @media (max-width: 768px) {
    font-size: var(--font-size-5xl);
  }
  
  @media (max-width: 480px) {
    font-size: var(--font-size-4xl);
  }
`;

export const GradientText = styled.span`
  background: linear-gradient(90deg, #a8d840 0%, #6bd6e4 50%, #4285f4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
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
  font-size: var(--font-size-xl);
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  max-width: 400px;
  
  @media (max-width: 768px) {
    font-size: var(--font-size-lg);
  }
`;

export const VideoCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-3xl);
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }
`;

export const VideoCard = styled(motion.div)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: var(--spacing-lg);
  overflow: hidden;
  transition: all var(--transition-normal);
  width: 400px;
  height: 450px;
  
  &:hover {
    border-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  }
`;

export const ThumbnailContainer = styled.div`
  position: relative;
  width: 100%;
  height: 240px;
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
  letter-spacing: 0.1em;
  margin-bottom: var(--spacing-xs);
  color: var(--color-text);
`;

export const CardSubtitle = styled.div`
  font-size: var(--font-size-sm);
  font-weight: 700;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: var(--spacing-sm);
`;

export const CardDescription = styled.p`
  font-size: var(--font-size-sm);
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.5;
`;

export const NavigationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--spacing-md);
`;

export const NavigationButton = styled(motion.button)<{ $disabled?: boolean; $isNext?: boolean }>`
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
  opacity: ${props => props.$disabled ? 0.3 : 1};
  pointer-events: ${props => props.$disabled ? 'none' : 'auto'};
  position: relative;
  
  &::before {
    content: '';
    width: 24px;
    height: 24px;
    background: url(${LeftIcon}) center/cover no-repeat;
    transform: ${props => props.$isNext ? 'scaleX(-1)' : 'scaleX(1)'};
  }
  
  &:hover:not(:disabled) {
    transform: scale(1.05);
  }
  
  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`; 