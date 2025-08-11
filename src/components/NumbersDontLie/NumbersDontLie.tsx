import React from 'react';
import type { NumbersDontLieProps } from './NumbersDontLie.types';
import { tableData } from './constants';
import {
  SectionContainer,
  ContentWrapper,
  HeaderSection,
  ProvenImpactText,
  MainHeadline,
  NumbersText,
  DontLieText,
  Subheadline,
  GridContainer,
  GridCell,
  CellValue,
  CellTitle,
  CellDescription,
} from './NumbersDontLie.styles';

/**
 * NumbersDontLie Component
 *
 * A simplified, static section displaying impact metrics in a CSS Grid layout.
 * Features:
 * - CSS Grid structure with named areas for precise layout control
 * - Animated gradient background
 * - Support for background images with greyscale overlay
 * - 7 cells arranged using grid areas A-G
 * - Selective dotted borders between adjacent cells
 * - 20px rounded corners on the grid container
 * - Responsive design with different layouts for desktop and mobile
 * - Fixed height with proportional content scaling
 */
const NumbersDontLie: React.FC<NumbersDontLieProps> = ({
  tableData: customTableData = tableData,
}) => {
  /**
   * Renders a grid cell with appropriate content and styling
   * @param cellData - The data for the cell
   * @returns JSX element for the grid cell
   */
  const renderCell = (cellData: (typeof customTableData)[0]) => {
    const hasBackgroundImage = !!cellData.backgroundImage;

    return (
      <GridCell
        key={cellData.id}
        $gridArea={cellData.gridArea}
        $hasBackgroundImage={hasBackgroundImage}
        $backgroundImage={cellData.backgroundImage}
        $backgroundImageSet={cellData.backgroundImageSet}
      >
        {/* Large percentage value (e.g., "70%", "40%") */}
        {cellData.value && <CellValue>{cellData.value}</CellValue>}

        {/* Bold title text */}
        {cellData.title && <CellTitle>{cellData.title}</CellTitle>}

        {/* Description text - always present */}
        <CellDescription>{cellData.description}</CellDescription>
      </GridCell>
    );
  };

  return (
    <SectionContainer>
      <ContentWrapper>
        {/* Header section - preserved original styling */}
        <HeaderSection>
          <ProvenImpactText>Proven Impact</ProvenImpactText>
          <MainHeadline>
            <NumbersText>NUMBERS </NumbersText>
            <DontLieText>Don't lie</DontLieText>
          </MainHeadline>
          <Subheadline>Real Results from Real Companies</Subheadline>
        </HeaderSection>

        {/* Grid section - CSS Grid layout with named areas */}
        <GridContainer>
          {customTableData.map(cellData => renderCell(cellData))}
        </GridContainer>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default NumbersDontLie;
