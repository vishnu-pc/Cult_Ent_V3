// Updated WhyChooseCult component
import React, { useState } from 'react';
import type { WhyChooseCultProps } from './WhyChooseCult.types';
import { reasons } from './constants';
import ExpandableTiles from '../ExpandableTiles';
import type { TileData } from '../ExpandableTiles';
import {
  SectionContainer,
  SectionTitle,
  ReasonsContainer,
  ReasonColumn,
  ReasonTitle,
  ReasonDescription,
  ResultsSection,
  ResultsTitle,
  ResultsSubtitle,
} from './WhyChooseCult.styles';

const WhyChooseCult: React.FC<WhyChooseCultProps> = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  
  const handleColumnClick = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Sample data for the ExpandableTiles component
  const sampleTiles: TileData[] = [
    {
      id: 1,
      image: '/src/assets/images/WhyChooseCult/WhyChooseCult-1.jpg',
      title: 'Results You Can See, ROI You Can Measure',
      description: 'Analytics-powered wellness with metrics that directly impact your performance indicators..'
    },
    {
      id: 2,
      image: '/src/assets/images/WhyChooseCult/WhyChooseCult-2.jpg',
      title: 'Mental Wellness',
      description: 'Mindfulness and stress management programs to enhance mental clarity and emotional resilience in the workplace.'
    },
    {
      id: 3,
      image: '/src/assets/images/WhyChooseCult/WhyChooseCult-3.jpg',
      title: 'Nutrition Guidance',
      description: 'Expert nutritional counseling and meal planning to fuel productivity and maintain optimal health throughout the workday.'
    },
    {
      id: 4,
      image: '/src/assets/images/WhyChooseCult/WhyChooseCult-4.jpg',
      title: 'Team Building',
      description: 'Engaging group activities and challenges that strengthen team bonds while promoting healthy lifestyle choices.'
    },
    {
      id: 5,
      image: '/src/assets/images/WhyChooseCult/WhyChooseCult-5.jpg',
      title: 'Recovery & Rest',
      description: 'Specialized recovery programs and sleep optimization techniques to ensure peak performance and prevent burnout.'
    }
  ];
  
  return (
    <>
      {/* New Results Section */}
      <ResultsSection>
        <ResultsTitle>Results You Can See, ROI You Can Measure</ResultsTitle>
        <ResultsSubtitle>
          Analytics-powered wellness with metrics that directly impact your performance indicators.
        </ResultsSubtitle>
      </ResultsSection>

      {/* New Expandable Tiles Component */}
      <SectionContainer>
        {/* <SectionTitle>Our Wellness Solutions</SectionTitle> */}
        <ExpandableTiles tiles={sampleTiles} />
      </SectionContainer>
    </>
  );
};

export default WhyChooseCult;