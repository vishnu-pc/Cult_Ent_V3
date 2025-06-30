import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SectionContainer = styled.section`
  min-height: 100vh;
  width: 100vw;
  background: linear-gradient(135deg, #000000 0%, #1a0033 100%);
  position: relative;
  padding: var(--spacing-3xl) var(--spacing-xl);
  display: flex;
  flex-direction: column;
  
  /* Purple tint in bottom right */
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 40%;
    height: 40%;
    background: radial-gradient(circle at center, rgba(138, 43, 226, 0.15) 0%, transparent 70%);
    pointer-events: none;
  }

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
  margin-bottom: var(--spacing-3xl);
  
  @media (max-width: 768px) {
    margin-bottom: var(--spacing-2xl);
  }
`;

export const ProvenImpactText = styled.div`
  font-size: var(--font-size-sm);
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: var(--spacing-md);
`;

export const MainHeadline = styled.h1`
  font-size: var(--font-size-6xl);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: var(--spacing-lg);
  
  @media (max-width: 1024px) {
    font-size: var(--font-size-5xl);
  }
  
  @media (max-width: 768px) {
    font-size: var(--font-size-4xl);
  }
`;

export const NumbersText = styled.span`
  background: var(--gradient-tertiary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const DontLieText = styled.span`
  color: var(--color-text);
`;

export const Subheadline = styled.p`
  font-size: var(--font-size-xl);
  color: rgba(255, 255, 255, 0.8);
  font-weight: 400;
  
  @media (max-width: 768px) {
    font-size: var(--font-size-lg);
  }
`;

export const TilesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 2px;
  min-height: 500px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    min-height: 800px;
  }
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(7, 1fr);
    min-height: 1200px;
  }
`;

export const Tile = styled(motion.div)<{ 
  $hasImage: boolean; 
  $backgroundImage?: string;
  $isWide?: boolean;
}>`
  position: relative;
  background: ${props => props.$hasImage && props.$backgroundImage 
    ? `url(${props.$backgroundImage})` 
    : 'rgba(0, 0, 0, 0.4)'
  };
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: var(--spacing-xl);
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.$hasImage ? 'flex-end' : 'center'};
  align-items: ${props => props.$hasImage ? 'flex-start' : 'flex-start'};
  text-align: left;
  cursor: pointer;
  overflow: hidden;
  border: none;
  
  /* Grid positioning for specific layout */
  &:nth-child(1) {
    grid-column: 1;
    grid-row: 1;
  }
  
  &:nth-child(2) {
    grid-column: 2;
    grid-row: 1;
  }
  
  &:nth-child(3) {
    grid-column: 3;
    grid-row: 1;
  }
  
  &:nth-child(4) {
    grid-column: 4;
    grid-row: 1;
  }
  
  &:nth-child(5) {
    grid-column: 1;
    grid-row: 2;
  }
  
  &:nth-child(6) {
    grid-column: 2 / 4;
    grid-row: 2;
  }
  
  &:nth-child(7) {
    grid-column: 4;
    grid-row: 2;
  }
  
  /* Dark overlay for image tiles */
  ${props => props.$hasImage && `
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(transparent 50%, rgba(0, 0, 0, 0.8));
      z-index: 1;
    }
  `}
  
  /* Content above overlay */
  > * {
    position: relative;
    z-index: 2;
  }
  
  @media (max-width: 1024px) {
    &:nth-child(1), &:nth-child(2), &:nth-child(3), &:nth-child(4), &:nth-child(5), &:nth-child(6), &:nth-child(7) {
      grid-column: auto;
      grid-row: auto;
    }
  }
  
  @media (max-width: 640px) {
    padding: var(--spacing-lg);
    min-height: 140px;
  }
`;

export const TileValue = styled.div`
  font-size: 4rem;
  font-weight: 800;
  color: var(--color-accent-primary);
  margin-bottom: var(--spacing-xs);
  line-height: 1;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const TileTitle = styled.h3`
  font-size: var(--font-size-2xl);
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: var(--spacing-xs);
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: var(--font-size-xl);
  }
`;

export const TileDescription = styled.p`
  font-size: var(--font-size-md);
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.4;
  font-weight: 400;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: var(--font-size-sm);
  }
`; 