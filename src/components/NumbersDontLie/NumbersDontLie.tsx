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
  TilesGrid,
  Tile,
  TileValue,
  TileTitle,
  TileDescription,
} from './NumbersDontLie.styles';

const NumbersDontLie: React.FC<NumbersDontLieProps> = ({ tiles = tilesData }) => {
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

        <TilesGrid>
          {tiles.map((tile) => (
            <Tile
              key={tile.id}
              $hasImage={tile.hasImage}
              $backgroundImage={tile.backgroundImage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: tile.id * 0.1,
                ease: "easeOut"
              }}
              whileHover={{
                scale: 1.03,
                boxShadow: tile.hasImage 
                  ? "0 20px 40px rgba(253, 217, 20, 0.2), 0 0 0 1px var(--gradient-full)"
                  : "0 20px 40px rgba(255, 255, 255, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.2)",
                transition: { duration: 0.3 }
              }}
              whileTap={{
                scale: 0.98,
                transition: { duration: 0.1 }
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
        </TilesGrid>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default NumbersDontLie; 