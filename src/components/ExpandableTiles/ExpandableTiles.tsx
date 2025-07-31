import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import type { ExpandableTilesProps } from './ExpandableTiles.types';
import {
  ComponentWrapper,
  TilesContainer,
  Tile,
  TileContent,
  TileTitle,
  TileDescription,
} from './ExpandableTiles.styles';

const ExpandableTiles: React.FC<ExpandableTilesProps> = ({ tiles }) => {
  const [expandedId, setExpandedId] = useState<number>(tiles[0]?.id || 1);

  const handleTileHover = (id: number) => {
    setExpandedId(id);
  };

  const handleTileLeave = () => {
    // Keep the last hovered tile expanded (do nothing - maintain current state)
    // The expandedId will remain as the last tile that was hovered
  };

  return (
    <ComponentWrapper>
      <TilesContainer onMouseLeave={handleTileLeave}>
        {tiles.map(tile => {
          const isExpanded = expandedId === tile.id;
          const isGrayscale = !isExpanded;

          return (
            <Tile
              key={tile.id}
              $backgroundImage={tile.image}
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
    </ComponentWrapper>
  );
};

export default ExpandableTiles;
