import React, { useState, useEffect, useRef, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import type { ExpandableTilesProps } from './ExpandableTiles.types';
import {
  Container,
  StickyWrapper,
  TilesContainer,
  Tile,
  TileContent,
  TileTitle,
  TileDescription,
} from './ExpandableTiles.styles';

const ExpandableTiles: React.FC<ExpandableTilesProps> = ({ tiles }) => {
  const [expandedId, setExpandedId] = useState<number>(tiles[0]?.id || 1);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Check if mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Calculate which tile should be expanded based on scroll progress
  const calculateExpandedTile = useCallback(
    (progress: number) => {
      const tileCount = tiles.length;
      const progressPerTile = 1 / tileCount;

      for (let i = 0; i < tileCount; i++) {
        const tileStartProgress = i * progressPerTile;
        const tileEndProgress = (i + 1) * progressPerTile;

        if (progress >= tileStartProgress && progress < tileEndProgress) {
          return tiles[i].id;
        }
      }

      // If we're at the very end, show the last tile
      return tiles[tileCount - 1].id;
    },
    [tiles]
  );

  // Calculate scroll progress for mobile sticky behavior
  const calculateScrollProgress = useCallback(() => {
    if (!containerRef.current || !isMobile) return;

    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const containerHeight = container.offsetHeight;
    const viewportHeight = window.innerHeight;

    // Calculate how much we've scrolled into this container
    const scrollableDistance = containerHeight - viewportHeight;
    const scrolled = Math.max(0, -rect.top);

    // Calculate progress (0 to 1) through the scrollable area
    const rawProgress =
      scrollableDistance > 0 ? scrolled / scrollableDistance : 0;
    const progress = Math.max(0, Math.min(1, rawProgress));

    // Update expanded tile based on scroll progress
    const newExpandedId = calculateExpandedTile(progress);
    setExpandedId(newExpandedId);

    // Debug log (remove in production)
    console.log('Scroll Debug:', {
      scrolled,
      scrollableDistance,
      progress,
      newExpandedId,
      rectTop: rect.top,
    });
  }, [isMobile, calculateExpandedTile]);

  // Scroll listener for mobile
  useEffect(() => {
    if (!isMobile) return;

    calculateScrollProgress();

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          calculateScrollProgress();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', calculateScrollProgress, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', calculateScrollProgress);
    };
  }, [isMobile, calculateScrollProgress]);

  const handleTileHover = (id: number) => {
    // Only handle hover on desktop
    if (!isMobile) {
      setExpandedId(id);
    }
  };

  const handleTileLeave = () => {
    // Only handle leave on desktop
    if (!isMobile) {
      // Keep the last hovered tile expanded (do nothing - maintain current state)
      // The expandedId will remain as the last tile that was hovered
    }
  };

  return (
    <Container ref={containerRef}>
      <StickyWrapper>
        <TilesContainer onMouseLeave={handleTileLeave}>
          {tiles.map(tile => {
            const isExpanded = expandedId === tile.id;
            const isGrayscale = !isExpanded;

            return (
              <Tile
                key={tile.id}
                $backgroundImage={tile.image}
                $backgroundImageSet={tile.imageSet}
                $isExpanded={isExpanded}
                $isGrayscale={isGrayscale}
                $backgroundPosition={tile.backgroundPosition}
                onMouseEnter={() => handleTileHover(tile.id)}
                onTouchStart={() => handleTileHover(tile.id)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: tile.id * 0.1,
                  ease: 'easeOut',
                }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                whileTap={{
                  scale: 0.98,
                  transition: { duration: 0.1 },
                }}
              >
                <AnimatePresence mode='wait'>
                  {isExpanded && (
                    <TileContent
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{
                        duration: 0.3,
                        delay: 0.1,
                        ease: 'easeOut',
                      }}
                    >
                      <TileTitle
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: 0.2,
                          ease: 'easeOut',
                        }}
                      >
                        {tile.title}
                      </TileTitle>
                      <TileDescription
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: 0.3,
                          ease: 'easeOut',
                        }}
                      >
                        {tile.description}
                      </TileDescription>
                    </TileContent>
                  )}
                </AnimatePresence>
              </Tile>
            );
          })}
        </TilesContainer>
      </StickyWrapper>
    </Container>
  );
};

export default ExpandableTiles;
