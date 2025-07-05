import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface ProvenImpactProps {}

interface ImpactItem {
  id: number;
  title: string;
  value: string;
  description: string;
  backgroundImage: string;
}

const impactData: ImpactItem[] = [
  {
    id: 1,
    title: 'Employee Engagement',
    value: '78%',
    description:
      'Increase in employee engagement scores after implementing CULT wellness programs',
    backgroundImage: 'engagement-bg.jpg',
  },
  {
    id: 2,
    title: 'Productivity',
    value: '32%',
    description:
      'Boost in productivity metrics across participating organizations',
    backgroundImage: 'productivity-bg.jpg',
  },
  {
    id: 3,
    title: 'Retention',
    value: '45%',
    description:
      'Improvement in employee retention rates for companies with CULT wellness solutions',
    backgroundImage: 'retention-bg.jpg',
  },
  {
    id: 4,
    title: 'Healthcare Costs',
    value: '28%',
    description:
      'Reduction in healthcare costs for employers implementing comprehensive wellness programs',
    backgroundImage: 'healthcare-bg.jpg',
  },
  {
    id: 5,
    title: 'Work Satisfaction',
    value: '92%',
    description:
      'Of employees report higher job satisfaction after participating in CULT programs',
    backgroundImage: 'satisfaction-bg.jpg',
  },
  {
    id: 6,
    title: 'ROI',
    value: '3.27x',
    description:
      'Average return on investment for companies implementing CULT wellness solutions',
    backgroundImage: 'roi-bg.jpg',
  },
];

const SectionContainer = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--color-background);
  padding: var(--spacing-2xl) 0;
  overflow: hidden;
`;

const SectionTitle = styled.h2`
  font-size: var(--font-size-4xl);
  text-align: center;
  margin-bottom: var(--spacing-xl);

  @media (max-width: 768px) {
    font-size: var(--font-size-3xl);
  }
`;

const ImpactGrid = styled.div`
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

const ImpactCard = styled(motion.div)<{ $backgroundImage: string }>`
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

const ImpactValue = styled.div`
  font-size: var(--font-size-5xl);
  font-weight: 700;
  color: var(--color-accent-primary);
  margin-bottom: var(--spacing-sm);

  @media (max-width: 768px) {
    font-size: var(--font-size-4xl);
  }
`;

const ImpactTitle = styled.h3`
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-md);
  text-align: center;

  @media (max-width: 768px) {
    font-size: var(--font-size-lg);
  }
`;

const ImpactDescription = styled.p`
  font-size: var(--font-size-md);
  text-align: center;
  max-width: 80%;
  color: var(--color-grey-light);

  @media (max-width: 768px) {
    font-size: var(--font-size-sm);
  }
`;

const ProvenImpact: React.FC<ProvenImpactProps> = () => {
  return (
    <SectionContainer>
      <SectionTitle>Proven Impact</SectionTitle>
      <ImpactGrid>
        {impactData.map(item => (
          <ImpactCard
            key={item.id}
            $backgroundImage={item.backgroundImage}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 },
            }}
          >
            <ImpactValue>{item.value}</ImpactValue>
            <ImpactTitle>{item.title}</ImpactTitle>
            <ImpactDescription>{item.description}</ImpactDescription>
          </ImpactCard>
        ))}
      </ImpactGrid>
    </SectionContainer>
  );
};

export default ProvenImpact;
