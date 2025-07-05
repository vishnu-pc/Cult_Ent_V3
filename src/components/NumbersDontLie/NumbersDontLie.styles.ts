import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SectionContainer = styled.section`
  min-height: 100vh;
  width: 100vw;
  background: #000000;
  position: relative;
  padding: var(--spacing-3xl) var(--spacing-xl);
  display: flex;
  flex-direction: column;
  align-items: center;
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
  margin-bottom: var(--spacing-3xl);
  text-align: left;

  @media (max-width: 768px) {
    margin-bottom: var(--spacing-2xl);
    text-align: center;
  }
`;

export const ProvenImpactText = styled.div`
  font-size: var(--font-size-sm);
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: var(--spacing-md);
  font-family:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
`;

export const MainHeadline = styled.h1`
  font-family:
    'Inter',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    'Roboto',
    sans-serif;
  font-weight: 700;
  font-size: 54px;
  line-height: 119%;
  letter-spacing: 0.42em;
  text-transform: uppercase;
  vertical-align: middle;
  margin-bottom: var(--spacing-lg);

  @media (max-width: 1024px) {
    font-size: 42px;
  }

  @media (max-width: 768px) {
    font-size: 32px;
    letter-spacing: 0.2em;
  }
`;

export const NumbersText = styled.span`
  background: linear-gradient(90deg, #22c55e 0%, #facc15 100%);
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
  font-family:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;

  @media (max-width: 768px) {
    font-size: var(--font-size-lg);
  }
`;

export const TilesContainer = styled.div`
  /* Translucent glass container with dotted border */
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 2px dashed rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  padding: 2px;
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
`;

export const TilesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 2px;
  min-height: 600px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    min-height: auto;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    min-height: auto;
  }
`;

export const Tile = styled(motion.div)<{
  $hasImage: boolean;
  $backgroundImage?: string;
  $position?: string;
}>`
  position: relative;
  background: ${props =>
    props.$hasImage && props.$backgroundImage
      ? `url(${props.$backgroundImage})`
      : 'rgba(255, 255, 255, 0.03)'};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: var(--spacing-lg);
  display: flex;
  flex-direction: column;
  justify-content: ${props => (props.$hasImage ? 'flex-end' : 'flex-start')};
  align-items: flex-start;
  text-align: left;
  overflow: hidden;
  border: 2px dashed rgba(255, 255, 255, 0.2);
  font-family:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;

  /* Apply grayscale filter to images */
  ${props =>
    props.$hasImage &&
    `
    filter: grayscale(100%);
  `}

  /* Round corners for corner tiles */
  ${props => {
    switch (props.$position) {
      case 'row1-col1':
        return 'border-top-left-radius: 14px;';
      case 'row1-col4':
        return 'border-top-right-radius: 14px;';
      case 'row2-col1':
        return 'border-bottom-left-radius: 14px;';
      case 'row2-col2-bottom':
        return 'border-bottom-right-radius: 14px;';
      default:
        return '';
    }
  }}
  
  /* Specific grid positioning based on layout */
  ${props => {
    switch (props.$position) {
      case 'row1-col1':
        return 'grid-column: 1; grid-row: 1;';
      case 'row1-col2':
        return 'grid-column: 2; grid-row: 1;';
      case 'row1-col3':
        return 'grid-column: 3; grid-row: 1;';
      case 'row1-col4':
        return 'grid-column: 4; grid-row: 1;';
      case 'row2-col1':
        return 'grid-column: 1; grid-row: 2;';
      case 'row2-col2-top':
        return 'grid-column: 2 / 5; grid-row: 2; display: grid; grid-template-rows: 1fr 1fr; gap: 2px;';
      case 'row2-col2-bottom':
        return 'grid-column: 2 / 5; grid-row: 2;';
      default:
        return '';
    }
  }}
  
  /* Dark overlay for image tiles */
  ${props =>
    props.$hasImage &&
    `
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(transparent 50%, rgba(0, 0, 0, 0.7));
      z-index: 1;
    }
  `}
  
  /* Content above overlay */
  > * {
    position: relative;
    z-index: 2;
  }

  @media (max-width: 1024px) {
    grid-column: auto !important;
    grid-row: auto !important;
    display: flex !important;
    grid-template-rows: none !important;
    border-radius: 8px !important;
  }

  @media (max-width: 640px) {
    padding: var(--spacing-md);
    min-height: 120px;
  }
`;

export const WideColumnContainer = styled.div`
  grid-column: 2 / 5;
  grid-row: 2;
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 2px;

  @media (max-width: 1024px) {
    grid-column: auto;
    grid-row: auto;
    display: block;
  }
`;

export const TileValue = styled.div`
  font-size: 4rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: var(--spacing-xs);
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 640px) {
    font-size: 2.5rem;
  }
`;

export const TileTitle = styled.h3`
  font-size: var(--font-size-lg);
  font-weight: 700;
  color: #ffffff;
  margin-bottom: var(--spacing-xs);
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: var(--font-size-md);
  }
`;

export const TileDescription = styled.p`
  font-size: var(--font-size-sm);
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.4;
  font-weight: 400;
  margin: 0;

  @media (max-width: 768px) {
    font-size: var(--font-size-xs);
  }
`;
