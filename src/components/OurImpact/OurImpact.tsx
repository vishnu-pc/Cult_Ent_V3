import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface OurImpactProps {}

interface ImpactData {
  category: string;
  value: number;
  label: string;
  color: string;
}

const impactData: ImpactData[] = [
  {
    category: 'Physical Health',
    value: 78,
    label: '78% improvement in physical fitness metrics',
    color: 'var(--color-accent-primary)',
  },
  {
    category: 'Mental Wellbeing',
    value: 65,
    label: '65% reduction in reported stress levels',
    color: 'var(--color-accent-secondary)',
  },
  {
    category: 'Team Cohesion',
    value: 82,
    label: '82% increase in team collaboration scores',
    color: 'var(--color-accent-tertiary)',
  },
  {
    category: 'Productivity',
    value: 45,
    label: '45% boost in overall productivity',
    color: '#9945FF',
  },
  {
    category: 'Retention',
    value: 37,
    label: '37% improvement in employee retention',
    color: '#FF45A4',
  },
];

const SectionContainer = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: var(--color-background);
  padding: var(--spacing-2xl) 0;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 var(--spacing-xl);
`;

const SectionTitle = styled.h2`
  font-size: var(--font-size-4xl);
  text-align: center;
  margin-bottom: var(--spacing-xl);
  
  @media (max-width: 768px) {
    font-size: var(--font-size-3xl);
  }
`;

const SectionDescription = styled.p`
  font-size: var(--font-size-lg);
  color: var(--color-grey-light);
  text-align: center;
  max-width: 800px;
  margin: 0 auto var(--spacing-2xl);
  
  @media (max-width: 768px) {
    font-size: var(--font-size-md);
  }
`;

const ChartsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--spacing-xl);
  margin-top: var(--spacing-xl);
`;

const BarChartContainer = styled.div`
  flex: 1;
  min-width: 300px;
  max-width: 600px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  
  @media (max-width: 768px) {
    min-width: 100%;
  }
`;

const BarContainer = styled.div`
  display: flex;
  align-items: flex-end;
  height: 300px;
  width: 100%;
  gap: var(--spacing-md);
`;

const BarGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BarLabel = styled.div`
  font-size: var(--font-size-sm);
  color: var(--color-grey);
  margin-top: var(--spacing-sm);
  text-align: center;
`;

const Bar = styled(motion.div)<{ $color: string; $height: number }>`
  width: 40px;
  height: ${props => props.$height}%;
  background-color: ${props => props.$color};
  border-radius: var(--border-radius-sm) var(--border-radius-sm) 0 0;
  position: relative;
  
  &:before {
    content: '${props => props.$height}%';
    position: absolute;
    top: -25px;
    left: 50%;
    transform: translateX(-50%);
    color: ${props => props.$color};
    font-weight: 600;
  }
`;

const ImpactStatsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--spacing-lg);
  margin-top: var(--spacing-2xl);
`;

const StatCard = styled(motion.div)<{ $color: string }>`
  background-color: rgba(255, 255, 255, 0.05);
  border-left: 4px solid ${props => props.$color};
  border-radius: var(--border-radius-md);
  padding: var(--spacing-lg);
  min-width: 250px;
  flex: 1;
  
  @media (max-width: 768px) {
    min-width: 100%;
  }
`;

const StatValue = styled.div<{ $color: string }>`
  font-size: var(--font-size-3xl);
  font-weight: 700;
  color: ${props => props.$color};
  margin-bottom: var(--spacing-xs);
`;

const StatLabel = styled.div`
  font-size: var(--font-size-md);
  color: var(--color-text);
`;

const OurImpact: React.FC<OurImpactProps> = () => {
  return (
    <SectionContainer>
      <ContentWrapper>
        <SectionTitle>Our Impact</SectionTitle>
        <SectionDescription>
          Through our comprehensive wellness solutions, we've helped organizations across industries
          achieve measurable improvements in employee wellbeing, engagement, and performance.
        </SectionDescription>
        
        <ChartsContainer>
          <BarChartContainer>
            <BarContainer>
              {impactData.map((item, index) => (
                <BarGroup key={index}>
                  <Bar
                    $color={item.color}
                    $height={item.value}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${item.value}%` }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  />
                  <BarLabel>{item.category}</BarLabel>
                </BarGroup>
              ))}
            </BarContainer>
          </BarChartContainer>
        </ChartsContainer>
        
        <ImpactStatsContainer>
          {impactData.map((item, index) => (
            <StatCard
              key={index}
              $color={item.color}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <StatValue $color={item.color}>{item.value}%</StatValue>
              <StatLabel>{item.label}</StatLabel>
            </StatCard>
          ))}
        </ImpactStatsContainer>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default OurImpact; 