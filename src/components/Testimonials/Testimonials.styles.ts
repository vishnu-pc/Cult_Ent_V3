import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

// Floating animations with different patterns
const float1 = keyframes`
  0%, 100% { transform: translateY(0px) translateX(0px); }
  25% { transform: translateY(-15px) translateX(5px); }
  50% { transform: translateY(-5px) translateX(-8px); }
  75% { transform: translateY(-20px) translateX(3px); }
`;

const float2 = keyframes`
  0%, 100% { transform: translateY(0px) translateX(0px); }
  20% { transform: translateY(12px) translateX(-6px); }
  40% { transform: translateY(-8px) translateX(4px); }
  60% { transform: translateY(18px) translateX(-3px); }
  80% { transform: translateY(-12px) translateX(7px); }
`;

const float3 = keyframes`
  0%, 100% { transform: translateY(0px) translateX(0px); }
  33% { transform: translateY(-18px) translateX(-4px); }
  66% { transform: translateY(10px) translateX(6px); }
`;

const float4 = keyframes`
  0%, 100% { transform: translateY(0px) translateX(0px); }
  30% { transform: translateY(15px) translateX(8px); }
  60% { transform: translateY(-10px) translateX(-5px); }
  90% { transform: translateY(8px) translateX(-2px); }
`;

export const SectionContainer = styled.section`
  min-height: 120vh;
  width: 100vw;
  background: #000000;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-3xl) var(--spacing-2xl);
  
  @media (max-width: 768px) {
    min-height: 100vh;
    padding: var(--spacing-2xl) var(--spacing-md);
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1400px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TestimonialCard = styled(motion.div)<{ $animationType: number }>`
  z-index: 13;
  position: absolute;
  width: 380px;
padding: 1rem;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--border-radius-lg);
  color: var(--color-text);
  box-shadow: 
    0 12px 40px rgba(0, 0, 0, 0.4),
    0 4px 12px rgba(255, 255, 255, 0.1) inset;
  
  animation: ${props => {
    switch (props.$animationType) {
      case 1: return float1;
      case 2: return float2;
      case 3: return float3;
      case 4: return float4;
      default: return float1;
    }
  }} 10s ease-in-out infinite;
  
  @media (max-width: 1024px) {
    width: 320px;
    padding: var(--spacing-xl);
  }
  
  @media (max-width: 768px) {
    width: 280px;
    padding: var(--spacing-lg);
  }
  
  @media (max-width: 480px) {
    width: 260px;
    position: relative;
    margin-bottom: var(--spacing-lg);
    animation: none;
  }
`;

export const TestimonialText = styled.p`
  font-size: var(--font-size-lg);
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: var(--spacing-xl);
  font-weight: 400;
  
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
  font-size: var(--font-size-xs);
  font-weight: 600;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

export const CompanyLogo = styled.div`
  width: 50px;
  height: 50px;
  background: #000000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-md);
  font-weight: 700;
  color: var(--color-text);
  border: 1px solid rgba(255, 255, 255, 0.2);
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: var(--font-size-sm);
  }
`;

export const CentralTextSection = styled.div`
  position: relative;
  margin-left: -7vw;
  z-index: 10;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-lg);
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: var(--spacing-md);
  }
`;

export const QuoteSymbol = styled.img`
  height: calc(var(--font-size-6xl) * 2.2); /* Height of approximately 2 lines of text */
  width: auto;
  flex-shrink: 0;
  margin-top: -10rem;
  object-fit: contain;
  
  @media (max-width: 1024px) {
    height: calc(var(--font-size-5xl) * 2.2);
  }
  
  @media (max-width: 768px) {
    height: calc(var(--font-size-4xl) * 2.2);
    margin-top: -0.5rem;
  }
  
  @media (max-width: 480px) {
    height: calc(var(--font-size-3xl) * 2.2);
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
    background: radial-gradient(circle at center, rgba(255, 50, 120, 0.4) 0%, rgba(255, 50, 120, 0.2) 30%, rgba(255, 50, 120, 0.1) 50%, transparent 70%);
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
  font-size: var(--font-size-6xl);
  font-weight: 800;
  line-height: 1.1;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  margin-bottom: var(--spacing-sm);
  
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
  background: linear-gradient(90deg, #FDD914 0%, #FF3278 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const MobileTestimonialContainer = styled.div`
  display: none;
  
  @media (max-width: 480px) {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: var(--spacing-md);
    overflow-y: auto;
    z-index: 5;
  }
`; 