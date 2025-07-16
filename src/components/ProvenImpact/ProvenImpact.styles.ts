import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SectionContainer = styled.section`
  height: 100vh;
  width: 100%;
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

export const ImpactGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-md);
  padding: 0 var(--spacing-xl);
  height: 100%;

  @media (max-width: 1024px) {
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-rows: repeat(6, 1fr);
    grid-template-columns: 1fr;
  }
`;

export const ImpactCard = styled(motion.div)<{ $backgroundImage: string }>`
  position: relative;
  border-radius: var(--border-radius-md);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: var(--spacing-lg);
  color: var(--color-text);

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
    opacity: 0.3;
    z-index: -1;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0.3) 100%
    );
    z-index: -1;
  }

  &:nth-child(1) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  &:nth-child(2) {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }

  &:nth-child(3) {
    grid-column: 3 / 4;
    grid-row: 1 / 2;
  }

  &:nth-child(4) {
    grid-column: 4 / 5;
    grid-row: 1 / 2;
  }

  &:nth-child(5) {
    grid-column: 1 / 3;
    grid-row: 2 / 3;
  }

  &:nth-child(6) {
    grid-column: 3 / 5;
    grid-row: 2 / 3;
  }

  @media (max-width: 1024px) {
    &:nth-child(1),
    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4),
    &:nth-child(5),
    &:nth-child(6) {
      grid-column: auto;
      grid-row: auto;
    }
  }
`;

export const ImpactValue = styled.div`
  font-size: var(--font-size-5xl);
  font-weight: 700;
  color: var(--color-accent-primary);
  margin-bottom: var(--spacing-sm);

  @media (max-width: 768px) {
    font-size: var(--font-size-4xl);
  }
`;

export const ImpactTitle = styled.h3`
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-md);
  text-align: center;

  @media (max-width: 768px) {
    font-size: var(--font-size-lg);
  }
`;

export const ImpactDescription = styled.p`
  font-size: var(--font-size-md);
  text-align: center;
  max-width: 80%;
  color: var(--color-grey-light);

  @media (max-width: 768px) {
    font-size: var(--font-size-sm);
  }
`;
