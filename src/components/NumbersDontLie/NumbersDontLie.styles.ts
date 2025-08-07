import styled, { keyframes } from 'styled-components';

/**
 * Gradient animation for NumbersText
 */
export const gradientShift = keyframes`
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
 * Main section container with animated gradient background
 */
export const SectionContainer = styled.section`
  width: 100%;
  max-width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  /* animation: gradientShift 8s ease infinite; */
  /* padding: var(--spacing-3xl) 0; */
  position: relative;
  overflow: hidden;
`;

/**
 * Content wrapper with max-width and centered alignment
 */
export const ContentWrapper = styled.div`
  max-width: 100vw;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  /* padding: 0 var(--spacing-xl); */
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    /* padding: 0 var(--container-padding-tablet); */
  }

  @media (max-width: 768px) {
    /* padding: 0 var(--container-padding-mobile); */
  }

  @media (max-width: 640px) {
    /* padding: 0 var(--container-padding-small); */
  }
`;

export const HeaderSection = styled.div`
  /* margin-bottom: var(--spacing-md); */
  text-align: left;
  flex-shrink: 0; /* Prevent header from shrinking */

  @media (max-width: 768px) {
    /* margin-bottom: var(--spacing-2xl); */
    text-align: center;
  }
`;

export const ProvenImpactText = styled.div`
  font-size: var(--font-size-xl);
  opacity: 0.5;
  letter-spacing: 0.16em;
  color: var(--color-text);
  margin-bottom: var(--spacing-sm);
  font-weight: 400;
  text-transform: uppercase;
  text-align: left;

  @media (max-width: 768px) {
    font-size: var(--font-size-title-mobile);
    margin-bottom: var(--spacing-xl);
  }
`;

export const MainHeadline = styled.h1`
  font-family: var(--font-primary);
  font-style: normal;
  font-weight: 700;
  font-size: 3.75vw;
  line-height: 119%;
  letter-spacing: 0.42em;
  text-transform: uppercase;
  vertical-align: middle;
  /* Standardized spacing */
  margin-bottom: var(--spacing-sm);

  @media (max-width: 1024px) {
    /* Convert hardcoded rem to closest global variable */
    font-size: var(
      --font-size-4xl
    ); /* 2.25rem (36px) - closest to 2.625rem (42px) */
  }

  @media (max-width: 768px) {
    /* Convert hardcoded rem to exact global variable match */
    text-align: left;
    font-size: var(--font-size-5xl);
    letter-spacing: 0.2em;
  }
`;

export const NumbersText = styled.span`
  background: linear-gradient(90deg, #facc15 0%, #22c55e 50%, #40b9eb 100%);
  /* background: linear-gradient(90.77deg, #fdd914 -18.43%, #40b9eb 79.71%); */
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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

export const DontLieText = styled.span`
  color: var(--color-text);
`;

export const Subheadline = styled.p`
  font-size: var(--font-size-xl);
  color: rgba(255, 255, 255, 0.8);
  font-weight: 400;
  font-family: var(--font-primary);
  margin-bottom: var(--spacing-xl);

  @media (max-width: 768px) {
    text-align: left;
    font-size: var(--font-size-xl);
  }
`;

/**
 * Grid container with flexible height to fill remaining space
 */
export const GridContainer = styled.div`
  display: grid;
  width: 100%;
  /* Fix: Make grid fill remaining space in ContentWrapper */
  flex: 1;
  min-height: 0; /* Allow grid to shrink if needed */
  gap: 0;
  /* Use standardized border variable */
  border: var(--border-grid-dotted-thin);
  border-radius: var(--border-radius-lg); /* Use standardized border radius */
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
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
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
  /* Use standardized padding */
  padding: var(--spacing-lg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: var(--color-text);
  font-family: var(--font-primary);
  background-color: rgba(255, 255, 255, 0.04);
  /* backdrop-filter: blur(10px); */

  /* Background image with overlay */
  ${props =>
    props.$hasBackgroundImage &&
    props.$backgroundImage &&
    `
    background-image: url(${props.$backgroundImage});
    // background-size: cover;
    background-size: ${props.$gridArea === 'A' ? 'cover' : 'cover'};
    background-position: ${props.$gridArea === 'A' ? 'center -40%' : 'center center'};
    background-repeat: no-repeat;
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

  /* Hide background image for grid area A (Wellness1) on mobile */
  @media (max-width: 768px) {
    ${props =>
      props.$gridArea === 'A' &&
      props.$hasBackgroundImage &&
      `
      background-image: none;
      filter: none;
      
      &::before {
        display: none;
      }
      
      > * {
        z-index: auto;
      }
    `}
  }

  /* Selective borders - using standardized border variables */

  /* Desktop borders and alignment */
  @media (min-width: 769px) {
    /* Right borders for A, B, C */
    ${props =>
      ['A', 'B', 'C'].includes(props.$gridArea) &&
      `
      border-right: var(--border-grid-dotted-thin);
    `}

    /* Bottom borders for A, B, C, D */
    ${props =>
      ['A', 'B', 'C', 'D'].includes(props.$gridArea) &&
      `
      border-bottom: var(--border-grid-dotted-thin);
    `}
    
    /* Right border for E */
    ${props =>
      props.$gridArea === 'E' &&
      `
      border-right: var(--border-grid-dotted-thin);
    `}
    
    /* Bottom border for F */
    ${props =>
      props.$gridArea === 'F' &&
      `
      border-bottom: var(--border-grid-dotted-thin);
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
    /* Use standardized mobile padding */
    //padding: var(--spacing-md);

    /* Right border for A - enhanced for mobile visibility */
    ${props =>
      props.$gridArea === 'A' &&
      `
      border-right: 1px dotted rgba(255, 255, 255, 0.3);
    `}

    /* Bottom borders for A, E, F, B, C, D - enhanced for mobile visibility */
    ${props =>
      ['A', 'E', 'F', 'B', 'C', 'D'].includes(props.$gridArea) &&
      `
      border-bottom: 1px dotted rgba(255, 255, 255, 0.3);
    `}
    
    /* Right borders for F (spanning multiple rows) - enhanced for mobile visibility */
    ${props =>
      props.$gridArea === 'F' &&
      `
      border-right: 1px dotted rgba(255, 255, 255, 0.3);
    `}

    /* Top borders for mobile layout to separate rows - enhanced for mobile visibility */
    /* F needs top border to separate from A */
    ${props =>
      props.$gridArea === 'F' &&
      `
      border-top: 1px dotted rgba(255, 255, 255, 0.3);
    `}

    /* B needs top border to separate from E */
    ${props =>
      props.$gridArea === 'B' &&
      `
      border-top: 1px dotted rgba(255, 255, 255, 0.3);
    `}

    /* C needs top border to separate from previous row */
    ${props =>
      props.$gridArea === 'C' &&
      `
      border-top: 1px dotted rgba(255, 255, 255, 0.3);
    `}

    /* D needs top border to separate from previous row */
    ${props =>
      props.$gridArea === 'D' &&
      `
      border-top: 1px dotted rgba(255, 255, 255, 0.3);
    `}

    /* G needs top border to separate from F */
    ${props =>
      props.$gridArea === 'G' &&
      `
      border-top: 1px dotted rgba(255, 255, 255, 0.3);
    `}
  }
`;

/**
 * Large percentage value display
 */
export const CellValue = styled.div`
  font-size: var(--font-size-6xl);
  font-weight: 900;
  letter-spacing: -0.05em;
  color: var(--color-text);
  /* Use standardized spacing */
  margin-bottom: var(--spacing-sm);
  line-height: 1;

  @media (max-width: 768px) {
    font-size: var(--font-size-3xl);
  }
`;

/**
 * Bold title text
 */
export const CellTitle = styled.h3`
  font-size: var(--font-size-2xl);
  font-weight: 900;
  color: var(--color-text);
  /* Use standardized spacing */
  margin-bottom: var(--spacing-sm);
  line-height: 1.1;
  letter-spacing: -0.03em;

  @media (max-width: 768px) {
    font-size: var(--font-size-lg);
  }
`;

/**
 * Description text
 */
export const CellDescription = styled.p`
  font-size: var(--font-size-lg);
  color: var(--color-text);
  opacity: 0.9;
  line-height: 1.6;
  margin: 0;

  @media (max-width: 768px) {
    font-size: var(--font-size-sm);
  }
`;
