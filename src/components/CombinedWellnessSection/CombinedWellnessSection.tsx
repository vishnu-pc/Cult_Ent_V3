import React from 'react';
import { WellnessSolutionsDivider } from '../ui/GradientDivider';
import WellnessSolutions from '../WellnessSolutions/WellnessSolutions';
import NumbersDontLie from '../NumbersDontLie/NumbersDontLie';
import WhyChooseCult from '../WhyChooseCult/WhyChooseCult';
import { CombinedSectionContainer } from './CombinedWellnessSection.styles';

/**
 * CombinedWellnessSection Component
 *
 * A unified wrapper that combines three wellness-related sections:
 * 1. WellnessSolutions - Interactive wellness solutions with image gallery
 * 2. NumbersDontLie - Impact metrics and statistics
 * 3. WhyChooseCult - Advantages and expandable tiles
 *
 * Features:
 * - Shared animated gradient background across all three sections
 * - Seamless vertical stacking with no dividers
 * - Maintains individual component behaviors and responsiveness
 * - Continuous visual flow between sections
 */
const CombinedWellnessSection: React.FC = () => {
  return (
    <>
      <WellnessSolutionsDivider />
      <CombinedSectionContainer>
        <WellnessSolutions />
        <NumbersDontLie />
        <WhyChooseCult />
      </CombinedSectionContainer>
    </>
  );
};

export default CombinedWellnessSection;
