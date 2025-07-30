import React, { useState, useCallback } from 'react';
import type { PDFCatalogCarouselProps } from './PDFCatalogCarousel.types';
import { catalogItems } from './constants';
import {
  CarouselContainer,
  CarouselViewport,
  CarouselTrack,
  CatalogCard,
  CatalogImage,
  DownloadButton,
  DownloadIcon,
  NavigationControls,
  NavigationButton,
  NavigationIcon,
} from './PDFCatalogCarousel.styles';

/**
 * PDF CATALOG CAROUSEL COMPONENT
 *
 * A horizontal "peek-and-slide" carousel displaying PDF catalog cards.
 * Features:
 * - One card fully visible (100% opacity), next card peeking (50% opacity)
 * - Smooth hover animations (scale 1.1x)
 * - Click animations (scale down briefly)
 * - Download buttons in bottom-right corner of each card
 * - Previous/Next navigation controls
 * - Responsive design for mobile/tablet
 */
const PDFCatalogCarousel: React.FC<PDFCatalogCarouselProps> = ({
  className,
}) => {
  // STATE MANAGEMENT
  const [currentIndex, setCurrentIndex] = useState(0); // Currently active card index

  /**
   * NAVIGATION HANDLERS
   * Handle previous/next navigation with boundary checks
   */

  // Navigate to previous catalog item
  const handlePrevious = useCallback(() => {
    setCurrentIndex(prevIndex => Math.max(0, prevIndex - 1));
  }, []);

  // Navigate to next catalog item
  const handleNext = useCallback(() => {
    setCurrentIndex(prevIndex =>
      Math.min(catalogItems.length - 1, prevIndex + 1)
    );
  }, []);

  /**
   * DOWNLOAD HANDLER
   * Triggers PDF download for the specified catalog item
   * Uses browser's built-in download functionality
   */
  const handleDownload = useCallback((pdfUrl: string, title: string) => {
    // Prevent event from bubbling to card click handler
    const handleDownloadClick = (event: React.MouseEvent) => {
      event.stopPropagation();

      // Create temporary anchor element for download
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = `${title.replace(/\s+/g, '-').toLowerCase()}.pdf`;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';

      // Trigger download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    return handleDownloadClick;
  }, []);

  /**
   * CARD STATE HELPERS
   * Determine the visual state of each card based on current index
   */
  const getCardState = useCallback(
    (index: number) => {
      return {
        isActive: index === currentIndex,
        isPeeking: index === currentIndex + 1,
      };
    },
    [currentIndex]
  );

  /**
   * KEYBOARD NAVIGATION
   * Handle keyboard controls for accessibility
   */
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          handlePrevious();
          break;
        case 'ArrowRight':
          event.preventDefault();
          handleNext();
          break;
        default:
          break;
      }
    },
    [handlePrevious, handleNext]
  );

  // BOUNDARY CONDITIONS for navigation buttons
  const isAtStart = currentIndex === 0;
  const isAtEnd = currentIndex === catalogItems.length - 1;

  return (
    <CarouselContainer
      className={className}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role='region'
      aria-label='PDF Catalog Carousel'
    >
      {/* MAIN CAROUSEL VIEWPORT */}
      <CarouselViewport>
        <CarouselTrack $currentIndex={currentIndex}>
          {catalogItems.map((item, index) => {
            const { isActive, isPeeking } = getCardState(index);

            return (
              <CatalogCard
                key={item.id}
                $isActive={isActive}
                $isPeeking={isPeeking}
                role='article'
                aria-label={`Catalog ${index + 1}: ${item.title}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => {
                  // Click handler: If clicking on peeking card, make it active
                  if (isPeeking) {
                    setCurrentIndex(index);
                  }
                }}
              >
                {/* CATALOG COVER IMAGE */}
                <CatalogImage
                  src={item.imageSrc}
                  alt={item.altText}
                  loading='lazy'
                />

                {/* DOWNLOAD BUTTON - Only visible for active and peeking cards */}
                {(isActive || isPeeking) && (
                  <DownloadButton
                    onClick={handleDownload(item.pdfUrl, item.title)}
                    aria-label={`Download ${item.title} PDF`}
                    tabIndex={isActive ? 0 : -1}
                  >
                    <DownloadIcon viewBox='0 0 24 24' aria-hidden='true'>
                      {/* Download arrow icon - arrow pointing down into circle */}
                      <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 8V6h2v4h3l-4 4-4-4h3z' />
                    </DownloadIcon>
                  </DownloadButton>
                )}
              </CatalogCard>
            );
          })}
        </CarouselTrack>
      </CarouselViewport>

      {/* NAVIGATION CONTROLS */}
      <NavigationControls>
        {/* PREVIOUS BUTTON */}
        <NavigationButton
          $disabled={isAtStart}
          onClick={handlePrevious}
          aria-label='Previous catalog'
          disabled={isAtStart}
        >
          <NavigationIcon
            $direction='left'
            viewBox='0 0 24 24'
            aria-hidden='true'
          >
            {/* Right arrow icon (rotated to left in CSS) */}
            <path d='M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z' />
          </NavigationIcon>
        </NavigationButton>

        {/* NEXT BUTTON */}
        <NavigationButton
          $disabled={isAtEnd}
          onClick={handleNext}
          aria-label='Next catalog'
          disabled={isAtEnd}
        >
          <NavigationIcon
            $direction='right'
            viewBox='0 0 24 24'
            aria-hidden='true'
          >
            {/* Right arrow icon */}
            <path d='M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z' />
          </NavigationIcon>
        </NavigationButton>
      </NavigationControls>
    </CarouselContainer>
  );
};

export default PDFCatalogCarousel;
