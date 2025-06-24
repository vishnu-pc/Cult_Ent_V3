import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import type { WellnessSolutionsProps } from './WellnessSolutions.types';
import { solutions } from './constants';
import {
  ContentContainer,
  ImageContainer,
  OptionDescription,
  OptionItem,
  OptionsContainer,
  OptionTitle,
  SectionContainer,
  SectionTitle,
  StyledImage,
} from './WellnessSolutions.styles';

/**
 * WellnessSolutions is a feature section that showcases different wellness solutions.
 * It consists of an image gallery and a list of selectable options, where selecting
 * an option updates the displayed image and reveals more details.
 *
 * @param {WellnessSolutionsProps} props - The props for the component.
 * @returns {JSX.Element} The rendered WellnessSolutions component.
 */
const WellnessSolutions: React.FC<WellnessSolutionsProps> = () => {
  // State to keep track of the currently active (clicked) solution. Defaults to the first solution.
  const [activeOption, setActiveOption] = useState<number>(1);
  // State to keep track of the currently hovered solution. Null if no option is hovered.
  const [hoveredOption, setHoveredOption] = useState<number | null>(null);

  /**
   * Handles the click event on a solution option.
   * Updates the activeOption state with the ID of the clicked solution.
   *
   * @param {number} id - The ID of the solution that was clicked.
   */
  const handleOptionClick = (id: number) => {
    setActiveOption(id);
  };

  /**
   * Handles the mouse enter event on a solution option.
   * Updates the hoveredOption state with the ID of the hovered solution.
   *
   * @param {number} id - The ID of the solution that was hovered.
   */
  const handleMouseEnter = (id: number) => {
    setHoveredOption(id);
  };

  /**
   * Handles the mouse leave event on a solution option.
   * Resets the hoveredOption state to null.
   */
  const handleMouseLeave = () => {
    setHoveredOption(null);
  };

  // Determine which solution to display. Prioritize the hovered option,
  // otherwise, fall back to the active (clicked) option.
  const displaySolutionId = hoveredOption ?? activeOption;
  const displaySolution =
    solutions.find((solution) => solution.id === displaySolutionId) ||
    solutions[0];

  return (
    <SectionContainer>
      {/* The left side of the section, displaying the image for the active solution. */}
      <ImageContainer>
        {/* AnimatePresence is used to gracefully animate the exit and entry of the image. */}
        <AnimatePresence mode="wait">
          <StyledImage
            key={displaySolution.id} // The key is crucial for AnimatePresence to detect changes.
            $imageUrl={displaySolution.imageUrl}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
      </ImageContainer>

      {/* The right side of the section, displaying the title and the list of solutions. */}
      <ContentContainer>
        <SectionTitle>Wellness Solutions</SectionTitle>
        <OptionsContainer>
          {/* Maps over the solutions array to render each solution as a clickable option. */}
          {solutions.map((solution) => {
            // Determine if the description for this option should be visible.
            // It shows for a hovered item, or for the active item when nothing is hovered.
            const showDescription =
              hoveredOption === solution.id ||
              (activeOption === solution.id && hoveredOption === null);

            return (
              <OptionItem
                key={solution.id}
                $isActive={activeOption === solution.id}
                onClick={() => handleOptionClick(solution.id)}
                onMouseEnter={() => handleMouseEnter(solution.id)}
                onMouseLeave={handleMouseLeave}
                whileHover={{ x: 5 }} // A subtle hover animation for better UX.
              >
                <OptionTitle
                  $isActive={activeOption === solution.id}
                  $hasDescription={showDescription}
                >
                  {solution.title}
                </OptionTitle>

                {/* AnimatePresence manages the mounting and unmounting of the description. */}
                <AnimatePresence>
                  {showDescription && (
                    <OptionDescription
                      initial={{ opacity: 0, height: 0 }} // Starts invisible and with no height.
                      animate={{ opacity: 1, height: 'auto' }} // Fades in and expands height.
                      exit={{ opacity: 0, height: 0 }} // Fades out and collapses height.
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
  );
};

export default WellnessSolutions; 