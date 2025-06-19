import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface WhyChooseCultProps {}

interface Reason {
  id: number;
  title: string;
  description: string;
  backgroundImage: string;
}

const reasons: Reason[] = [
  {
    id: 1,
    title: 'Holistic Approach',
    description: 'We address all aspects of wellbeing - physical, mental, emotional, and social - creating a truly comprehensive wellness experience.',
    backgroundImage: 'holistic-bg.jpg',
  },
  {
    id: 2,
    title: 'Personalized Solutions',
    description: 'Every organization is unique. Our solutions are tailored to your specific needs, culture, and goals for maximum impact.',
    backgroundImage: 'personalized-bg.jpg',
  },
  {
    id: 3,
    title: 'Measurable Results',
    description: 'Our data-driven approach provides clear metrics and analytics to track progress and demonstrate ROI on your wellness investment.',
    backgroundImage: 'results-bg.jpg',
  },
  {
    id: 4,
    title: 'Seamless Integration',
    description: 'Our programs integrate smoothly with your existing systems and workflows, minimizing disruption while maximizing engagement.',
    backgroundImage: 'integration-bg.jpg',
  },
  {
    id: 5,
    title: 'Continuous Innovation',
    description: 'We constantly evolve our offerings based on the latest research, technology, and feedback to deliver cutting-edge wellness solutions.',
    backgroundImage: 'innovation-bg.jpg',
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

const SectionTitle = styled.h2`
  font-size: var(--font-size-4xl);
  text-align: center;
  margin-bottom: var(--spacing-xl);
  
  @media (max-width: 768px) {
    font-size: var(--font-size-3xl);
  }
`;

const ReasonsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 80%;
  
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const ReasonColumn = styled(motion.div)<{ $backgroundImage: string; $isExpanded: boolean }>`
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

const ReasonTitle = styled.h3<{ $isExpanded: boolean }>`
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

const ReasonDescription = styled(motion.p)`
  font-size: var(--font-size-md);
  color: var(--color-grey-light);
  max-width: 90%;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: var(--font-size-sm);
  }
`;

const WhyChooseCult: React.FC<WhyChooseCultProps> = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  
  const handleColumnClick = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };
  
  return (
    <SectionContainer>
      <SectionTitle>Why Choose Cult for Corporates</SectionTitle>
      <ReasonsContainer>
        {reasons.map((reason) => {
          const isExpanded = expandedId === reason.id;
          
          return (
            <ReasonColumn 
              key={reason.id}
              $backgroundImage={reason.backgroundImage}
              $isExpanded={isExpanded}
              onClick={() => handleColumnClick(reason.id)}
              whileHover={{ 
                scale: isExpanded ? 1 : 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <ReasonTitle $isExpanded={isExpanded}>
                {reason.title}
              </ReasonTitle>
              
              {isExpanded && (
                <ReasonDescription
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  {reason.description}
                </ReasonDescription>
              )}
            </ReasonColumn>
          );
        })}
      </ReasonsContainer>
    </SectionContainer>
  );
};

export default WhyChooseCult; 