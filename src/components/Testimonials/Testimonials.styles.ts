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
  min-height: 110vh;
  width: 100%;
  max-width: 100vw;
  background: #000000;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  /* Use standardized section spacing */
  /* padding: var(--section-padding-vertical) var(--section-padding-horizontal); */

  @media (min-width: 769px) and (max-width: 1535px) {
    min-height: 150vh;
  }

  @media (max-width: 768px) {
    min-height: 210vh;
    /* min-height: 100vh; */
    /* Use responsive spacing */
    /* padding: calc(var(--section-padding-vertical) * var(--spacing-scale-mobile))
      calc(var(--section-padding-horizontal) * var(--spacing-scale-mobile)); */
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

  /* Floating animations remain the same for all screen sizes */
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
  margin-bottom: var(--spacing-sm);
  font-weight: 400;
  font-family: var(--font-primary);
  margin-top: 0;

  @media (max-width: 1024px) {
    font-size: var(--font-size-md);
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-sm);
    margin-bottom: var(--spacing-lg);
  }
`;

export const CompanySection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
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
  width: 50px;
  height: 50px;
  /* background: #000000; */
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(20px);
  border-radius: 50%;

  object-fit: contain;
  padding: 6px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  flex-shrink: 0;

  @media (max-width: 768p) {
    width: 40px;
    height: 40px;
    padding: 0px;
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
    width: 800px;
    height: 800px;
    transform: translate(-50%, -50%);
    background: radial-gradient(
      circle at center,
      rgba(255, 50, 120, 0.4) 0%,
      rgba(255, 50, 120, 0.2) 30%,
      rgba(255, 50, 120, 0.1) 50%,
      transparent 70%
    );
    z-index: -1;
  }

  @media (max-width: 1024px) {
    &::before {
      width: 600px;
      height: 600px;
    }
  }

  @media (max-width: 768px) {
    &::before {
      width: 400px;
      height: 400px;
    }
  }

  @media (max-width: 480px) {
    &::before {
      width: 300px;
      height: 300px;
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
