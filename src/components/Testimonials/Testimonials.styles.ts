import styled, { keyframes, css } from 'styled-components';
import { motion } from 'framer-motion';
import type { ResponsivePosition } from './Testimonials.types';

// Floating animations with different patterns
// Warner Brothers - Animation ID: 1
const float1 = keyframes`
  0%, 100% { transform: translateY(0px) translateX(0px); }
  25% { transform: translateY(-11.25px) translateX(3.75px); }
  50% { transform: translateY(-3.75px) translateX(-6px); }
  75% { transform: translateY(-15px) translateX(2.25px); }
`;

// Meesho - Animation ID: 2
const float2 = keyframes`
  0%, 100% { transform: translateY(0px) translateX(0px); }
  20% { transform: translateY(9px) translateX(-4.5px); }
  40% { transform: translateY(-6px) translateX(3px); }
  60% { transform: translateY(13.5px) translateX(-2.25px); }
  80% { transform: translateY(-9px) translateX(5.25px); }
`;

// Google - Animation ID: 3
const float3 = keyframes`
  0%, 100% { transform: translateY(0px) translateX(0px); }
  33% { transform: translateY(-18px) translateX(-4px); }
  66% { transform: translateY(10px) translateX(6px); }
`;

// Amazon - Animation ID: 4
const float4 = keyframes`
  0%, 100% { transform: translateY(0px) translateX(0px); }
  30% { transform: translateY(15px) translateX(8px); }
  60% { transform: translateY(-10px) translateX(-5px); }
  90% { transform: translateY(8px) translateX(-2px); }
`;

// Mobile-specific floating animations - more subtle for smaller screens
// Mobile Animation ID: 1 - Gentle vertical sway
const mobileFloat1 = keyframes`
  0%, 100% { transform: translateY(0px) translateX(0px); }
  50% { transform: translateY(-4px) translateX(1px); }
`;

// Mobile Animation ID: 2 - Soft circular motion
const mobileFloat2 = keyframes`
  0%, 100% { transform: translateY(0px) translateX(0px); }
  25% { transform: translateY(-2.5px) translateX(1.5px); }
  50% { transform: translateY(0px) translateX(2.5px); }
  75% { transform: translateY(2.5px) translateX(1.5px); }
`;

// Mobile Animation ID: 3 - Subtle diagonal drift
const mobileFloat3 = keyframes`
  0%, 100% { transform: translateY(0px) translateX(0px); }
  33% { transform: translateY(-3px) translateX(-1.5px); }
  66% { transform: translateY(2px) translateX(1px); }
`;

// Mobile Animation ID: 4 - Gentle pulse effect
const mobileFloat4 = keyframes`
  0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
  50% { transform: translateY(-2px) translateX(0.5px) scale(1.01); }
`;

/**
 * Helper function to generate responsive positioning styles
 */
const generateResponsivePositioning = (position: ResponsivePosition) => css`
  /* Desktop (Large Screen) - 1536px+ */
  @media (min-width: 1536px) {
    ${position.desktop?.top && `top: ${position.desktop.top};`}
    ${position.desktop?.left && `left: ${position.desktop.left};`}
    ${position.desktop?.right && `right: ${position.desktop.right};`}
    ${position.desktop?.bottom && `bottom: ${position.desktop.bottom};`}
  }

  /* Laptop - 1024px to 1535px */
  @media (min-width: 1024px) and (max-width: 1535px) {
    ${position.laptop?.top && `top: ${position.laptop.top};`}
    ${position.laptop?.left && `left: ${position.laptop.left};`}
    ${position.laptop?.right && `right: ${position.laptop.right};`}
    ${position.laptop?.bottom && `bottom: ${position.laptop.bottom};`}
  }

  /* Tablet - 768px to 1023px */
  @media (min-width: 768px) and (max-width: 1023px) {
    ${position.tablet?.top && `top: ${position.tablet.top};`}
    ${position.tablet?.left && `left: ${position.tablet.left};`}
    ${position.tablet?.right && `right: ${position.tablet.right};`}
    ${position.tablet?.bottom && `bottom: ${position.tablet.bottom};`}
  }

  /* Mobile - 481px to 767px */
  @media (min-width: 481px) and (max-width: 767px) {
    ${position.mobile?.top && `top: ${position.mobile.top};`}
    ${position.mobile?.left && `left: ${position.mobile.left};`}
    ${position.mobile?.right && `right: ${position.mobile.right};`}
    ${position.mobile?.bottom && `bottom: ${position.mobile.bottom};`}
  }

  /* Small Mobile - ≤480px */
  @media (max-width: 480px) {
    ${position.smallMobile?.top && `top: ${position.smallMobile.top};`}
    ${position.smallMobile?.left && `left: ${position.smallMobile.left};`}
    ${position.smallMobile?.right && `right: ${position.smallMobile.right};`}
    ${position.smallMobile?.bottom && `bottom: ${position.smallMobile.bottom};`}
  }
`;

export const SectionContainer = styled.section`
  min-height: 130vh;
  width: 100%;
  max-width: 100vw;
  background: #000000;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  /* Add bottom padding to accommodate protruding logos */
  // padding-bottom: 50px;
  /* Use standardized section spacing */
  /* padding: var(--section-padding-vertical) var(--section-padding-horizontal); */

  @media (min-width: 769px) and (max-width: 1535px) {
    min-height: 170vh;
  }

  @media (max-width: 768px) {
    min-height: 260vw;
    align-items: flex-start; /* MODIFIED: Align content to top on mobile */
    padding-top: var(
      --spacing-5xl
    ); /* ADDED: Some spacing from top for overlay title */
    //padding-bottom: 40px; /* Smaller padding for mobile */
    /* min-height: 100vh; */
    /* Use responsive spacing */
    /* padding: calc(var(--section-padding-vertical) * var(--spacing-scale-mobile))
      calc(var(--section-padding-horizontal) * var(--spacing-scale-mobile)); */
  }

  /* Aspect ratio and dimension-based responsive design */

  @media (max-width: 420px) {
    min-height: 305vw;
  }

  @media (max-width: 400px) {
    min-height: 320vw;
  }

  @media (max-width: 380px) {
    min-height: 350vw;
  }
`;

/**
 * The "TESTIMONIALS" text overlay.
 */
export const OverlayTitle = styled.h3`
  font-size: var(--font-size-xl);
  opacity: 0.5;
  letter-spacing: 0.16em;
  color: var(--color-text);
  // margin-bottom: var(--spacing-sm);
  font-weight: 400;
  text-transform: uppercase;
  text-align: left;
  position: absolute;
  top: var(--spacing-3xl);
  left: var(
    --section-padding-horizontal
  ); /* MODIFIED: Moved further left using smaller spacing */

  @media (max-width: 768px) {
    font-size: var(--font-size-title-mobile);
    position: absolute;
    top: var(--spacing-3xl);
    left: var(--section-padding-horizontal);
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  width: 100%;
  /* max-width: 1200px; */
  /* margin: 0 auto; */
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TestimonialCard = styled(motion.div)<{
  $animationType: number;
  $responsivePosition: ResponsivePosition;
}>`
  z-index: 13;
  position: absolute;
  overflow: visible; /* Allow logo to extend outside card */

  /* Apply responsive positioning */
  ${props => generateResponsivePositioning(props.$responsivePosition)}

  /* Default sizing and styling */
  /* width: 570px; */
  width: 31vw;
  /* Use standardized spacing */
  padding: var(--spacing-lg);
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  /* Use standardized border radius */
  border-radius: var(--border-radius-md);
  color: var(--color-text);
  box-shadow:
    0 0.75rem 2.5rem rgba(0, 0, 0, 0.4),
    /* 12px 40px converted to rem */ 0 0.25rem 0.75rem rgba(255, 255, 255, 0.1)
      inset; /* 4px 12px converted to rem */

  /* Desktop/Tablet floating animations */
  animation: ${props => {
      switch (props.$animationType) {
        case 1:
          return float1;
        case 2:
          return float2;
        case 3:
          return float3;
        case 4:
          return float4;
        default:
          return float1;
      }
    }}
    10s ease-in-out infinite;

  /* Mobile-specific animations for screens <768px */
  @media (max-width: 768px) {
    animation: ${props => {
        switch (props.$animationType) {
          case 1:
            return mobileFloat1;
          case 2:
            return mobileFloat2;
          case 3:
            return mobileFloat3;
          case 4:
            return mobileFloat4;
          default:
            return mobileFloat1;
        }
      }}
      8s ease-in-out infinite; /* Slightly faster duration for mobile */
  }

  /* Responsive sizing adjustments */
  @media (min-width: 1024px) and (max-width: 1535px) {
    /* width: 40vw; */
    /* padding: var(--spacing-md); */
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    /* width: 50vw; */
    /* padding: var(--spacing-md); */
  }

  @media (min-width: 481px) and (max-width: 767px) {
    /* width: 190px; */
    /* padding: var(--spacing-sm); */
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const TestimonialText = styled.p`
  font-size: var(--font-size-lg);
  line-height: 1.6;
  /* color: rgba(255, 255, 255, 0.9); */
  /* Use standardized spacing */
  margin-bottom: var(--spacing-xs);
  font-weight: 400;
  font-family: var(--font-primary);
  margin-top: 0;

  @media (max-width: 1024px) {
    font-size: var(--font-size-md);
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-sm);
    margin-bottom: var(--spacing-xs);
  }
`;

export const CompanySection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  margin-bottom: var(--spacing-xxs);
`;

export const CompanyName = styled.div`
  font-size: var(--font-size-md);
  font-weight: 400;
  letter-spacing: 0.2em;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  font-family: var(--font-primary);
`;

export const CompanyLogo = styled.img`
  width: 70px;
  height: 70px;
  /* background: #000000; */
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(20px);
  border-radius: 50%;

  object-fit: contain;
  padding: 6px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  flex-shrink: 0;

  /* Position the logo to extend 50% outside the card */
  position: relative;
  transform: translateY(80%); /* Move down by 50% of logo height (25px) */
  z-index: 15; /* Ensure logo stays above other elements */

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    padding: 3px;
    transform: translateY(
      90%
    ); /* Move down by 50% of mobile logo height (20px) */
  }
`;

export const CentralTextSection = styled.div`
  position: relative;
  z-index: 10;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: center;
  /* Use standardized spacing */
  gap: var(--spacing-2xl);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: var(--spacing-md);
    align-items: flex-start;
    justify-content: center;
  }
`;

export const QuoteSymbol = styled.img`
  height: calc(var(--font-size-5xl) * 3.2);
  /* Font size and Height of approximately 2 lines of text */
  width: auto;
  flex-shrink: 0;
  margin-top: -8rem;
  object-fit: contain;

  @media (max-width: 1535px) {
    height: calc(var(--font-size-4xl) * 3.2);
    margin-top: -11rem;
  }

  @media (max-width: 1024px) {
    /* height: calc(var(--font-size-4xl) * 3.2); */
  }

  @media (max-width: 768px) {
    height: calc(var(--font-size-4xl) * 2);
    margin-top: -0.5rem;
  }

  @media (max-width: 480px) {
    height: calc(var(--font-size-3xl) * 2);
    margin-top: 0;
  }
`;

export const TextBlock = styled.div`
  position: relative;

  /* Circular background gradient behind text */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1100px;
    height: 1100px;
    transform: translate(-50%, -50%);
    background: radial-gradient(
      circle at center,
      rgba(255, 50, 120, 0.3) 0%,
      rgba(255, 50, 120, 0.2) 30%,
      rgba(255, 50, 120, 0.1) 50%,
      transparent 70%
    );
    filter: blur(20px);
    z-index: -1;
  }

  @media (max-width: 1024px) {
    &::before {
      width: 900px;
      height: 900px;
    }
  }

  @media (max-width: 768px) {
    &::before {
      width: 700px;
      height: 700px;
    }
  }

  @media (max-width: 480px) {
    &::before {
      // width: 300px;
      // height: 300px;
    }
  }
`;

export const TextLine = styled.div`
  font-size: var(--font-size-5xl);
  font-weight: 700;
  line-height: 1.6;
  text-transform: uppercase;
  letter-spacing: 0.48em;
  /* Use standardized spacing */
  margin-bottom: var(--spacing-sm);
  font-family: var(--font-primary);

  @media (max-width: 1024px) {
    font-size: var(--font-size-5xl);
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-4xl);
    margin-bottom: var(--spacing-xs);
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-3xl);
  }
`;

export const WhiteText = styled.span`
  color: var(--color-text);
`;

export const GradientText = styled.span`
  background: linear-gradient(90deg, #fdd914 0%, #ff3278 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;
