import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

interface WellnessSolutionsProps {}

// Solution data
interface Solution {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const solutions: Solution[] = [
  {
    id: 1,
    title: 'Premium Fitness Access',
    description: 'Provide your employees with unlimited access to premium fitness centers, classes, and personalized workout plans to promote physical wellbeing.',
    imageUrl: 'fitness-placeholder.jpg',
  },
  {
    id: 2,
    title: 'Dynamic Employee Engagement',
    description: 'Boost morale and team cohesion with interactive challenges, team-building activities, and wellness competitions tailored to your company culture.',
    imageUrl: 'engagement-placeholder.jpg',
  },
  {
    id: 3,
    title: 'Comprehensive All-Round Wellness',
    description: 'Address all aspects of wellbeing with holistic programs covering physical fitness, mental health, nutrition, and work-life balance.',
    imageUrl: 'wellness-placeholder.jpg',
  },
  {
    id: 4,
    title: 'Flexible On-Campus Solutions',
    description: 'Transform your workplace with on-site fitness centers, wellness rooms, and health-focused amenities designed for your specific space and needs.',
    imageUrl: 'campus-placeholder.jpg',
  },
  {
    id: 5,
    title: 'Thoughtful Corporate Gifting',
    description: 'Show appreciation with curated wellness packages, fitness equipment, and health-focused gifts that demonstrate your commitment to employee wellbeing.',
    imageUrl: 'gifting-placeholder.jpg',
  },
];

const SectionContainer = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  background-color: var(--color-background);
  overflow: hidden;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    height: 40vh;
  }
`;

const StyledImage = styled(motion.div)<{ $imageUrl: string }>`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.$imageUrl});
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
`;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: var(--spacing-2xl);
  
  @media (max-width: 768px) {
    padding: var(--spacing-lg);
  }
`;

const SectionTitle = styled.h2`
  font-size: var(--font-size-3xl);
  margin-bottom: var(--spacing-xl);
  
  @media (max-width: 768px) {
    font-size: var(--font-size-2xl);
    margin-bottom: var(--spacing-lg);
  }
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
`;

const OptionItem = styled(motion.div)<{ $isActive: boolean }>`
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--border-radius-md);
  cursor: pointer;
  background-color: ${props => props.$isActive ? 'rgba(255, 77, 77, 0.1)' : 'transparent'};
  border-left: 4px solid ${props => props.$isActive ? 'var(--color-accent-primary)' : 'transparent'};
  transition: all var(--transition-normal);
  
  &:hover {
    background-color: rgba(255, 77, 77, 0.05);
  }
`;

interface OptionTitleProps {
  $isActive?: boolean;
  $hasDescription?: boolean;
}

const OptionTitle = styled.h3<OptionTitleProps>`
  font-size: var(--font-size-lg);
  margin-bottom: ${props => props.$hasDescription ? 'var(--spacing-sm)' : '0'};
  color: ${props => props.$isActive ? 'var(--color-accent-primary)' : 'var(--color-text)'};
`;

const OptionDescription = styled(motion.p)`
  font-size: var(--font-size-md);
  color: var(--color-grey);
  line-height: 1.6;
`;

const WellnessSolutions: React.FC<WellnessSolutionsProps> = () => {
  const [activeOption, setActiveOption] = useState<number>(1);
  
  const handleOptionClick = (id: number) => {
    setActiveOption(id);
  };
  
  const activeSolution = solutions.find(solution => solution.id === activeOption) || solutions[0];
  
  return (
    <SectionContainer>
      <ImageContainer>
        <AnimatePresence mode="wait">
          <StyledImage
            key={activeSolution.id}
            $imageUrl={activeSolution.imageUrl}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
      </ImageContainer>
      
      <ContentContainer>
        <SectionTitle>Wellness Solutions</SectionTitle>
        <OptionsContainer>
          {solutions.map((solution) => (
            <OptionItem
              key={solution.id}
              $isActive={activeOption === solution.id}
              onClick={() => handleOptionClick(solution.id)}
              whileHover={{ x: 5 }}
            >
              <OptionTitle 
                $isActive={activeOption === solution.id}
                $hasDescription={activeOption === solution.id}
              >
                {solution.title}
              </OptionTitle>
              
              <AnimatePresence>
                {activeOption === solution.id && (
                  <OptionDescription
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {solution.description}
                  </OptionDescription>
                )}
              </AnimatePresence>
            </OptionItem>
          ))}
        </OptionsContainer>
      </ContentContainer>
    </SectionContainer>
  );
};

export default WellnessSolutions; 