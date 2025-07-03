import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import type { WellnessSolutionsProps } from './WellnessSolutions.types';
import { solutions } from './constants';
import {
  BackgroundNumber,
  ContentContainer,
  ImageContainer,
  ImageDisplayContainer,
  OptionDescription,
  OptionHeader,
  OptionItem,
  OptionNumber,
  OptionsContainer,
  OptionTitle,
  OverlaySubtitle,
  OverlayTextContainer,
  OverlayTitle,
  SectionContainer,
  SectionTitle,
  StyledImage,
  GradientDivider,
} from './WellnessSolutions.styles';

/**
 * WellnessSolutions is a feature section that showcases different wellness solutions.
 * It features a 35/65 layout with an image gallery on the left and interactive options on the right.
 * The component includes overlay text, animated gradients, and dynamic hover effects.
 *
 * @param {WellnessSolutionsProps} props - The props for the component.
 * @returns {JSX.Element} The rendered WellnessSolutions component.
 */
const WellnessSolutions: React.FC<WellnessSolutionsProps> = () => {
  // State to keep track of the last hovered solution. Defaults to the first solution.
  const [lastHoveredOption, setLastHoveredOption] = useState<number>(1);
  // State to keep track of the currently hovered solution. Null if no option is hovered.
  const [hoveredOption, setHoveredOption] = useState<number | null>(null);

  /**
   * Handles the mouse enter event on a solution option.
   * Updates the hoveredOption state and tracks the last hovered option.
   *
   * @param {number} id - The ID of the solution that was hovered.
   */
  const handleMouseEnter = (id: number) => {
    setHoveredOption(id);
    setLastHoveredOption(id);
  };

  /**
   * Handles the mouse leave event on a solution option.
   * Resets the hoveredOption state to null.
   */
  const handleMouseLeave = () => {
    setHoveredOption(null);
  };

  // The image to display is either the currently hovered option or the last hovered option
  const displaySolution =
    solutions.find((solution) => solution.id === lastHoveredOption) ||
    solutions[0];

  return (
    <>
    <GradientDivider />
    <SectionContainer>
      {/* Large background "05" element positioned behind the image container */}
      <BackgroundNumber>05</BackgroundNumber>
      
      {/* The left side of the section, displaying overlay text and the image */}
      <ImageContainer>
        {/* Overlay text container with "WELLNESS SOLUTIONS" and "05 WAYS" */}
        <OverlayTextContainer>
          <OverlayTitle>Wellness Solutions</OverlayTitle>
          <OverlaySubtitle>05 WAYS</OverlaySubtitle>
        </OverlayTextContainer>
        
        {/* The image display area */}
        <ImageDisplayContainer>
          {/* AnimatePresence is used to gracefully animate the exit and entry of the image */}
          <AnimatePresence mode="wait">
            <StyledImage
              key={displaySolution.id} // The key is crucial for AnimatePresence to detect changes
              $imageUrl={displaySolution.imageUrl}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
        </ImageDisplayContainer>
      </ImageContainer>
      
      {/* The right side of the section, displaying the title and the list of solutions */}
      <ContentContainer>
        <SectionTitle>We're crushing the corporate wellness game in India.</SectionTitle>
        <OptionsContainer>
          {/* Maps over the solutions array to render each solution as a hoverable option */}
          {solutions.map((solution) => {
            // Description is only visible when actively hovering over this specific option
            const showDescription = hoveredOption === solution.id;

            return (
              <OptionItem
                key={solution.id}
                $hoverColor={solution.hoverColor}
                onMouseEnter={() => handleMouseEnter(solution.id)}
                onMouseLeave={handleMouseLeave}
                // whileHover={{ x: 5 }} // A subtle hover animation for better UX (disabled for now)
              >
                <OptionHeader>
                  <OptionNumber>#{solution.id}</OptionNumber>
                  <OptionTitle $hasDescription={showDescription}>
                    {solution.title}
                  </OptionTitle>
                </OptionHeader>

                {/* AnimatePresence manages the mounting and unmounting of the description */}
                <AnimatePresence>
                  {showDescription && (
                    <OptionDescription
                      initial={{ opacity: 0, height: 0 }} // Starts invisible and with no height
                      animate={{ opacity: 1, height: 'auto' }} // Fades in and expands height
                      exit={{ opacity: 0, height: 0 }} // Fades out and collapses height
                      transition={{ duration: 0.3 }}
                    >
                      {solution.description}
                    </OptionDescription>
                  )}
                </AnimatePresence>
              </OptionItem>
            );
          })}
        </OptionsContainer>
      </ContentContainer>
    </SectionContainer>
    </>
  );
};

export default WellnessSolutions; 