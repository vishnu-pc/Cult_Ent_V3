import React from 'react';
import type { NumbersDontLieProps } from './NumbersDontLie.types';
import { tilesData } from './constants';
import {
  SectionContainer,
  ContentWrapper,
  HeaderSection,
  ProvenImpactText,
  MainHeadline,
  NumbersText,
  DontLieText,
  Subheadline,
  TilesContainer,
  TilesGrid,
  Tile,
  WideColumnContainer,
  TileValue,
  TileTitle,
  TileDescription,
} from './NumbersDontLie.styles';

const NumbersDontLie: React.FC<NumbersDontLieProps> = ({ tiles = tilesData }) => {
  // Separate tiles for specific layout
  const regularTiles = tiles.filter(tile => 
    !tile.position?.includes('row2-col2')
  );
  
  const wideColumnTopTile = tiles.find(tile => 
    tile.position === 'row2-col2-top'
  );
  
  const wideColumnBottomTile = tiles.find(tile => 
    tile.position === 'row2-col2-bottom'
  );

  return (
    <SectionContainer>
      <ContentWrapper>
        <HeaderSection>
          <ProvenImpactText>Proven Impact</ProvenImpactText>
          <MainHeadline>
            <NumbersText>NUMBERS </NumbersText>
            <DontLieText>DON'T LIE</DontLieText>
          </MainHeadline>
          <Subheadline>Real Results from Real Companies</Subheadline>
        </HeaderSection>

        <TilesContainer>
          <TilesGrid>
            {/* Regular tiles (first 4 + row2-col1) */}
            {regularTiles.map((tile) => (
              <Tile
                key={tile.id}
                $hasImage={tile.hasImage}
                $backgroundImage={tile.backgroundImage}
                $position={tile.position}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: tile.id * 0.1,
                  ease: "easeOut"
                }}
              >
                {tile.value && (
                  <TileValue>
                    {tile.value}
                  </TileValue>
                )}
                {tile.title && (
                  <TileTitle>
                    {tile.title}
                  </TileTitle>
                )}
                <TileDescription>
                  {tile.description}
                </TileDescription>
              </Tile>
            ))}

            {/* Wide column container for row 2, columns 2-3 */}
            <WideColumnContainer>
              {/* Top section of wide column */}
              {wideColumnTopTile && (
                <Tile
                  key={wideColumnTopTile.id}
                  $hasImage={wideColumnTopTile.hasImage}
                  $backgroundImage={wideColumnTopTile.backgroundImage}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: wideColumnTopTile.id * 0.1,
                    ease: "easeOut"
                  }}
                >
                  {wideColumnTopTile.value && (
                    <TileValue>
                      {wideColumnTopTile.value}
                    </TileValue>
                  )}
                  {wideColumnTopTile.title && (
                    <TileTitle>
                      {wideColumnTopTile.title}
                    </TileTitle>
                  )}
                  <TileDescription>
                    {wideColumnTopTile.description}
                  </TileDescription>
                </Tile>
              )}

              {/* Bottom section of wide column */}
              {wideColumnBottomTile && (
                <Tile
                  key={wideColumnBottomTile.id}
                  $hasImage={wideColumnBottomTile.hasImage}
                  $backgroundImage={wideColumnBottomTile.backgroundImage}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: wideColumnBottomTile.id * 0.1,
                    ease: "easeOut"
                  }}
                >
                  {wideColumnBottomTile.value && (
                    <TileValue>
                      {wideColumnBottomTile.value}
                    </TileValue>
                  )}
                  {wideColumnBottomTile.title && (
                    <TileTitle>
                      {wideColumnBottomTile.title}
                    </TileTitle>
                  )}
                  <TileDescription>
                    {wideColumnBottomTile.description}
                  </TileDescription>
                </Tile>
              )}
            </WideColumnContainer>
          </TilesGrid>
        </TilesContainer>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default NumbersDontLie; 