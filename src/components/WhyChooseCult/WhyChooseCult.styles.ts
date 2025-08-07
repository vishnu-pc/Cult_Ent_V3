import styled from 'styled-components';

/**
 * Main container for the WhyChooseCult section
 */
export const WhyCultContainer = styled.div`
  /* Container for the entire WhyChooseCult section */
`;

/**
 * Section container for the expandable tiles
 */
export const SectionContainer = styled.section`
  height: 100%;
  width: 100%;
  max-width: 100vw;

  display: flex;
  flex-direction: column;
  /* Use standardized section spacing */
  /* padding: var(--section-padding-vertical) var(--section-padding-horizontal); */

  /* Responsive container padding */
  @media (max-width: 1024px) {
    /* padding: calc(var(--section-padding-vertical) * var(--spacing-scale-tablet))
      calc(var(--section-padding-horizontal) * var(--spacing-scale-tablet)); */
  }

  @media (max-width: 768px) {
    /* padding: calc(var(--section-padding-vertical) * var(--spacing-scale-mobile))
      calc(var(--section-padding-horizontal) * var(--spacing-scale-mobile)); */
  }

  @media (max-width: 640px) {
    /* padding: calc(
        var(--section-padding-vertical) * var(--spacing-scale-small-mobile)
      )
      calc(
        var(--section-padding-horizontal) * var(--spacing-scale-small-mobile)
      ); */
  }
`;

/**
 * Cult Advantage section with standardized spacing
 */
export const CultAdvantageSection = styled.section`
  width: 100%;
  overflow: hidden; // Prevents content from spilling outside section
  display: flex;
  align-items: center;
  justify-content: center;
  /* Use standardized section spacing */
  /* padding: var(--section-padding-vertical) var(--section-padding-horizontal); */
  padding-bottom: 0; /* No bottom padding for seamless flow */

  /* Responsive spacing */
  @media (max-width: 1024px) {
    /* padding: calc(var(--section-padding-vertical) * var(--spacing-scale-tablet))
      calc(var(--section-padding-horizontal) * var(--spacing-scale-tablet)); */
    /* padding-bottom: 0; */
  }

  @media (max-width: 768px) {
    /* padding: calc(var(--section-padding-vertical) * var(--spacing-scale-mobile))
      calc(var(--section-padding-horizontal) * var(--spacing-scale-mobile)); */
    /* padding-bottom: 0; */
    /* min-height: 50vh; */
  }

  @media (max-width: 640px) {
    /* padding: calc(
        var(--section-padding-vertical) * var(--spacing-scale-small-mobile)
      )
      calc(
        var(--section-padding-horizontal) * var(--spacing-scale-small-mobile)
      ); */
    /* padding-bottom: 0; */
  }
`;

/**
 * Container for cult advantage content with responsive layout
 */
export const CultAdvantageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* Use standardized spacing */
  /* gap: var(--spacing-4xl); */

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: left;
    align-items: flex-start;
    /* gap: var(--spacing-2xl); */
  }
`;

/**
 * Left content area
 */
export const LeftContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    align-items: flex-start;
  }
`;

/**
 * Top heading with standardized typography
 */
export const TopHeading = styled.h2`
  margin-bottom: calc(var(--spacing-3xl) * 1.2);
  font-size: var(--font-size-xl);
  opacity: 0.5;
  letter-spacing: 0.16em;
  color: var(--color-text);
  font-weight: 400;
  text-transform: uppercase;
  text-align: left;

  @media (max-width: 768px) {
    font-size: var(--font-size-title-mobile);
    text-align: left;
    margin-bottom: var(--spacing-3xl);
  }
`;

/**
 * Container for main heading elements
 */
export const MainHeadingContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  font-weight: 700;
  font-size: var(--font-size-6xl);
  /* line-height: 1.21; */
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: 0;

  @media (max-width: 768px) {
    align-items: flex-start;
  }
`;

/**
 * First line container for heading
 */
export const FirstLine = styled.div`
  display: flex;
  align-items: baseline;
  /* Use standardized spacing */
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-sm);
`;

/**
 * Container for layered CULT text effect
 */
export const CultLayersContainer = styled.div`
  position: relative;
  display: inline-block;
`;

/**
 * Individual CULT layer with responsive positioning
 */
export const CultLayer = styled.span<{ $opacity: number; $zIndex: number }>`
  position: absolute;
  /* Convert hardcoded pixel values to responsive rem equivalents */
  top: ${props => {
    if (props.$zIndex === 1) return '-8.125rem'; /* -130px converted to rem */
    if (props.$zIndex === 2) return '-6.25rem'; /* -100px converted to rem */
    return '-4.375rem'; /* -70px converted to rem */
  }};
  left: 0;
  /* font-size: var(--font-size-6xl); */
  font-weight: 700;
  text-transform: uppercase;
  /* background: linear-gradient(90.79deg, #FDD914 0.68%, #FF3278 102.18%); */

  background: ${props =>
    props.$zIndex === 3
      ? '#ff8c00'
      : 'linear-gradient(0deg, #000000 0%, #000000 45%, #ff8c00 70%, #ff8c00 100%)'};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  opacity: ${props => props.$opacity};
  z-index: ${props => props.$zIndex};

  ${props =>
    (props.$zIndex === 1 || props.$zIndex === 2) &&
    `
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      height: 50%;
      background: linear-gradient(to bottom, transparent 0%, var(--color-background) 100%);
      z-index: 1;
      pointer-events: none;
    }
  `}

  @media (max-width: 768px) {
    font-size: var(--font-size-5xl);
    /* Responsive positioning for mobile */
    top: ${props => {
      if (props.$zIndex === 1) return '-6.5rem';
      if (props.$zIndex === 2) return '-5rem';
      return '-3.5rem';
    }};
  }
`;

/**
 * Main heading line 1 with standardized typography
 */
export const MainHeadingLine1 = styled.h1`
  line-height: 1.1;
  margin: 0;
  font-family: var(--font-primary);

  @media (max-width: 768px) {
    font-size: var(--font-size-5xl);
  }
`;

/**
 * Main heading line 2 with standardized typography
 */
export const MainHeadingLine2 = styled.h1`
  line-height: 1.1;
  margin: 0;
  font-family: var(--font-primary);

  @media (max-width: 768px) {
    font-size: var(--font-size-5xl);
  }
`;

/**
 * Right content area with responsive sizing
 */
export const RightContent = styled.div`
  /* Use standardized spacing instead of hardcoded pixels */
  margin-top: var(--spacing-4xl);
  /* 
   * FLEX PARAMETER BREAKDOWN: flex: 0 0 38.25rem;
   * 
   * flex-grow: 0      = Don't grow to fill extra space (stays fixed width)
   * flex-shrink: 0    = Don't shrink below basis width (maintains minimum width)  
   * flex-basis: 38.25rem = Base width of 38.25rem (612px at 16px font size)
   * 
   * TUNING GUIDE FOR LAYOUT BALANCE:
   * 25rem = 400px | More space for left content (70% left / 30% right)
   * 30rem = 480px | Balanced layout (65% left / 35% right)
   * 38.25rem = 612px | CURRENT - Slightly right-heavy (55% left / 45% right)
   * 45rem = 720px | Right-heavy layout (45% left / 55% right)
   * flex: 1 = Responsive width (fills remaining space)
   */
  flex: 0 0 38.25rem; /* Fixed width to maintain layout balance */
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: flex-end; /* Align content to the right */
  margin-right: var(--spacing-xl);

  @media (max-width: 768px) {
    flex: none;
    text-align: left;
    margin-top: var(--spacing-xl);
    justify-content: flex-start; /* Reset to left alignment on mobile */
    margin-right: 0; /* Remove right margin on mobile */
  }
`;

/**
 * Right content text with standardized typography
 */
export const RightText = styled.p`
  font-size: var(--font-size-xl);
  color: var(--color-text);
  line-height: 1.6;
  font-weight: 400;
  font-family: var(--font-primary);
  margin: 0;

  @media (max-width: 768px) {
    font-size: var(--font-size-xl);
    opacity: 0.8;
  }
`;
