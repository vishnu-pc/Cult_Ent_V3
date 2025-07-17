import styled from 'styled-components';

/**
 * Main section container with animated gradient background
 */
export const SectionContainer = styled.section`
  animation: gradientShift 8s ease infinite;
  padding: var(--spacing-3xl) 0;
  position: relative;
  overflow: hidden;
`;

/**
 * Content wrapper with max-width and centered alignment
 */
export const ContentWrapper = styled.div`
  max-width: 80vw;
  margin: 0 auto;
  padding: 0 var(--spacing-xl);

  @media (max-width: 768px) {
    padding: 0 var(--spacing-lg);
  }
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
  font-family: var(--font-primary);
`;

export const MainHeadline = styled.h1`
  font-family: var(--font-primary);
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
  font-family: var(--font-primary);

  @media (max-width: 768px) {
    font-size: var(--font-size-lg);
  }
`;

/**
 * Grid container with fixed height and responsive layout
 */
export const GridContainer = styled.div`
  display: grid;
  width: 100%;
  height: 600px;
  gap: 0;
  border: 1px dotted rgba(255, 255, 255, 0.7);
  border-radius: 20px;
  overflow: hidden;

  /* Desktop Layout */
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 0.5fr 0.5fr;
  grid-template-areas:
    'A B C D'
    'E F F F'
    'E G G G';

  /* Mobile Layout */
  @media (max-width: 768px) {
    height: 800px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 3fr 1fr 1fr 1fr;
    grid-template-areas:
      'A E'
      'F B'
      'F C'
      'F D'
      'G G';
  }
`;

/**
 * Individual grid cell with selective borders and background image support
 */
export const GridCell = styled.div<{
  $gridArea: string;
  $hasBackgroundImage?: boolean;
  $backgroundImage?: string;
}>`
  grid-area: ${props => props.$gridArea};
  position: relative;
  padding: var(--spacing-lg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: var(--color-text);
  font-family: var(--font-primary);
  background-color: rgba(0, 0, 0, 0.3);

  /* Background image with overlay */
  ${props =>
    props.$hasBackgroundImage &&
    props.$backgroundImage &&
    `
    background-image: url(${props.$backgroundImage});
    background-size: cover;
    // background-position: center;
    background-position: ${props.$gridArea === 'A' ? 'center bottom' : 'center center'};
    filter: grayscale(100%);
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      z-index: 1;
    }
    
    > * {
      position: relative;
      z-index: 2;
    }
  `}

  /* Selective borders - only between adjacent cells */
  
  /* Desktop borders and alignment */
  @media (min-width: 769px) {
    /* Right borders for A, B, C */
    ${props =>
      ['A', 'B', 'C'].includes(props.$gridArea) &&
      `
      border-right: 1px dotted rgba(255, 255, 255, 0.7);
    `}

    /* Bottom borders for A, B, C, D */
    ${props =>
      ['A', 'B', 'C', 'D'].includes(props.$gridArea) &&
      `
      border-bottom: 1px dotted rgba(255, 255, 255, 0.7);
    `}
    
    /* Right border for E */
    ${props =>
      props.$gridArea === 'E' &&
      `
      border-right: 1px dotted rgba(255, 255, 255, 0.7);
    `}
    
    /* Bottom border for F */
    ${props =>
      props.$gridArea === 'F' &&
      `
      border-bottom: 1px dotted rgba(255, 255, 255, 0.7);
    `}

    /* Desktop text alignment */
    /* A: Top Left */
    ${props =>
      props.$gridArea === 'A' &&
      `
      justify-content: flex-start;
      align-items: flex-start;
    `}

    /* B: Top Center */
    ${props =>
      props.$gridArea === 'B' &&
      `
      justify-content: flex-start;
      align-items: flex-start;
    `}

    /* C: Top Center */
    ${props =>
      props.$gridArea === 'C' &&
      `
      justify-content: flex-start;
      align-items: flex-start;
    `}

    /* D: Top Right */
    ${props =>
      props.$gridArea === 'D' &&
      `
      justify-content: flex-start;
      align-items: flex-start;
    `}

    /* E: Bottom Left */
    ${props =>
      props.$gridArea === 'E' &&
      `
      justify-content: flex-end;
      align-items: flex-start;
    `}

    /* F: Top Left */
    ${props =>
      props.$gridArea === 'F' &&
      `
      justify-content: flex-start;
      align-items: flex-start;
    `}

    /* G: Bottom Left */
    ${props =>
      props.$gridArea === 'G' &&
      `
      justify-content: flex-end;
      align-items: flex-start;
    `}
  }

  /* Mobile borders */
  @media (max-width: 768px) {
    /* Right border for A */
    ${props =>
      props.$gridArea === 'A' &&
      `
      border-right: 1px dotted rgba(255, 255, 255, 0.7);
    `}

    /* Bottom borders for A, E, F */
    ${props =>
      ['A', 'E', 'F'].includes(props.$gridArea) &&
      `
      border-bottom: 1px dotted rgba(255, 255, 255, 0.7);
    `}
    
    /* Right borders for F (spanning multiple rows) */
    ${props =>
      props.$gridArea === 'F' &&
      `
      border-right: 1px dotted rgba(255, 255, 255, 0.7);
    `}
    
    /* Bottom borders for B, C */
    ${props =>
      ['B', 'C'].includes(props.$gridArea) &&
      `
      border-bottom: 1px dotted rgba(255, 255, 255, 0.7);
    `}
  }

  @media (max-width: 768px) {
    padding: var(--spacing-md);
  }
`;

/**
 * Large percentage value display
 */
export const CellValue = styled.div`
  font-size: var(--font-size-5xl);
  font-weight: 900;
  color: var(--color-text);
  margin-bottom: var(--spacing-sm);
  line-height: 1;

  @media (max-width: 768px) {
    font-size: var(--font-size-4xl);
  }
`;

/**
 * Bold title text
 */
export const CellTitle = styled.h3`
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: var(--spacing-sm);
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: var(--font-size-lg);
  }
`;

/**
 * Description text
 */
export const CellDescription = styled.p`
  font-size: var(--font-size-md);
  color: var(--color-text);
  opacity: 0.9;
  line-height: 1.4;
  margin: 0;

  @media (max-width: 768px) {
    font-size: var(--font-size-sm);
  }
`;
