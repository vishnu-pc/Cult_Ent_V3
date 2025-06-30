import styled from 'styled-components';
import { motion } from 'framer-motion';



// Add to WhyChooseCult.styles.ts
export const ResultsSection = styled.div`
  padding: var(--spacing-xl) 0;
  text-align: center;
  background-color: var(--color-primary);
  color: var(--color-text-light);
`;

export const ResultsTitle = styled.h2`
  font-size: var(--font-size-3xl);
  margin-bottom: var(--spacing-md);
`;

export const ResultsSubtitle = styled.p`
  font-size: var(--font-size-lg);
  max-width: 800px;
  margin: 0 auto;
  opacity: 0.9;
`;




export const SectionContainer = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: var(--color-background);
  padding: var(--spacing-2xl) 0;
  overflow: hidden;
`;

export const SectionTitle = styled.h2`
  font-size: var(--font-size-4xl);
  text-align: center;
  margin-bottom: var(--spacing-xl);
  
  @media (max-width: 768px) {
    font-size: var(--font-size-3xl);
  }
`;

export const ReasonsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 80%;
  
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

export const ReasonColumn = styled(motion.div)<{ $backgroundImage: string; $isExpanded: boolean }>`
  position: relative;
  flex: ${props => props.$isExpanded ? 3 : 1};
  min-width: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: var(--spacing-lg);
  transition: flex 0.5s ease;
  cursor: pointer;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.$backgroundImage});
    background-size: cover;
    background-position: center;
    opacity: 0.4;
    z-index: -1;
    transition: opacity 0.3s ease;
  }
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 100%);
    z-index: -1;
  }
  
  &:hover:before {
    opacity: ${props => props.$isExpanded ? 0.6 : 0.5};
  }
  
  @media (max-width: 768px) {
    flex: 1;
    height: ${props => props.$isExpanded ? '250px' : '100px'};
    transition: height 0.5s ease;
  }
`;

export const ReasonTitle = styled.h3<{ $isExpanded: boolean }>`
  font-size: ${props => props.$isExpanded ? 'var(--font-size-2xl)' : 'var(--font-size-lg)'};
  margin-bottom: ${props => props.$isExpanded ? 'var(--spacing-md)' : '0'};
  color: var(--color-text);
  transition: all 0.3s ease;
  writing-mode: ${props => props.$isExpanded ? 'horizontal-tb' : 'vertical-rl'};
  transform: ${props => props.$isExpanded ? 'rotate(0)' : 'rotate(180deg)'};
  
  @media (max-width: 768px) {
    writing-mode: horizontal-tb;
    transform: rotate(0);
    font-size: ${props => props.$isExpanded ? 'var(--font-size-xl)' : 'var(--font-size-md)'};
  }
`;

export const ReasonDescription = styled(motion.p)`
  font-size: var(--font-size-md);
  color: var(--color-grey-light);
  max-width: 90%;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: var(--font-size-sm);
  }
`;
