// Updated WhyChooseCult component
import type { WhyChooseCultProps } from './WhyChooseCult.types';
import ExpandableTiles from '../ExpandableTiles';
import { whyChooseCultTiles } from './constants';
import {
  CultAdvantageSection,
  CultAdvantageContainer,
  LeftContent,
  TopHeading,
  MainHeadingContainer,
  FirstLine,
  CultLayersContainer,
  CultLayer,
  MainHeadingLine1,
  MainHeadingLine2,
  RightContent,
  RightText,
  SectionContainer,
  WhyCultContainer,
} from './WhyChooseCult.styles';

const WhyChooseCult: React.FC<WhyChooseCultProps> = () => {
  return (
    <>
      <WhyCultContainer>
        {/* New Cult Advantage Section */}
        <CultAdvantageSection id='why-choose-cult'>
          <CultAdvantageContainer>
            <LeftContent>
              <TopHeading>Why Choose Cult For Corporates</TopHeading>
              <MainHeadingContainer>
                <FirstLine>
                  <MainHeadingLine1>THE</MainHeadingLine1>
                  <CultLayersContainer>
                    <CultLayer $opacity={1} $zIndex={3}>
                      CULT
                    </CultLayer>
                    <CultLayer $opacity={0.4} $zIndex={2}>
                      CULT
                    </CultLayer>
                    <CultLayer $opacity={0.2} $zIndex={1}>
                      CULT
                    </CultLayer>
                  </CultLayersContainer>
                </FirstLine>
                <MainHeadingLine2>ADVANTAGE</MainHeadingLine2>
              </MainHeadingContainer>
            </LeftContent>
            <RightContent>
              <RightText>
                Our employee wellness programs
                <br />
                meets your business sense.
              </RightText>
            </RightContent>
          </CultAdvantageContainer>
        </CultAdvantageSection>

        {/* Existing Results Section */}

        {/* Existing Expandable Tiles Component */}
        <SectionContainer>
          <ExpandableTiles tiles={whyChooseCultTiles} />
        </SectionContainer>
      </WhyCultContainer>
    </>
  );
};

export default WhyChooseCult;
