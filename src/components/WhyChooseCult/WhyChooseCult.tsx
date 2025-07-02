// Updated WhyChooseCult component
import type { WhyChooseCultProps } from './WhyChooseCult.types';
import ExpandableTiles from '../ExpandableTiles';
import type { TileData } from '../ExpandableTiles';
import WhyChooseCult1 from '../../assets/images/WhyChooseCult/WhyChooseCult-1.jpg';
import WhyChooseCult2 from '../../assets/images/WhyChooseCult/WhyChooseCult-2.jpg';
import WhyChooseCult3 from '../../assets/images/WhyChooseCult/WhyChooseCult-3.jpg';
import WhyChooseCult4 from '../../assets/images/WhyChooseCult/WhyChooseCult-4.jpg';
import WhyChooseCult5 from '../../assets/images/WhyChooseCult/WhyChooseCult-5.jpg';
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
  ResultsSection,
  ResultsTitle,
  ResultsSubtitle,
} from './WhyChooseCult.styles';

const WhyChooseCult: React.FC<WhyChooseCultProps> = () => {

  // Sample data for the ExpandableTiles component
  const sampleTiles: TileData[] = [
    {
      id: 1,
      image: WhyChooseCult1,
      title: 'Results You Can See, ROI You Can Measure',
      description: 'Analytics-powered wellness with metrics that directly impact your performance indicators..'
    },
    {
      id: 2,
      image: WhyChooseCult2,
      title: 'Mental Wellness',
      description: 'Mindfulness and stress management programs to enhance mental clarity and emotional resilience in the workplace.'
    },
    {
      id: 3,
      image: WhyChooseCult3,
      title: 'Nutrition Guidance',
      description: 'Expert nutritional counseling and meal planning to fuel productivity and maintain optimal health throughout the workday.'
    },
    {
      id: 4,
      image: WhyChooseCult4,
      title: 'Team Building',
      description: 'Engaging group activities and challenges that strengthen team bonds while promoting healthy lifestyle choices.'
    },
    {
      id: 5,
      image: WhyChooseCult5,
      title: 'Recovery & Rest',
      description: 'Specialized recovery programs and sleep optimization techniques to ensure peak performance and prevent burnout.'
    }
  ];
  
  return (
    <>
      {/* New Cult Advantage Section */}
      <CultAdvantageSection>
        <CultAdvantageContainer>
          <LeftContent>
            <TopHeading>Why Choose Cult For Corporates</TopHeading>
            <MainHeadingContainer>
              <FirstLine>
                <MainHeadingLine1>THE</MainHeadingLine1>
                <CultLayersContainer>
                  <CultLayer $opacity={1} $zIndex={3}>CULT</CultLayer>
                  <CultLayer $opacity={0.4} $zIndex={2}>CULT</CultLayer>
                  <CultLayer $opacity={0.2} $zIndex={1}>CULT</CultLayer>
                </CultLayersContainer>
              </FirstLine>
              <MainHeadingLine2>ADVANTAGE</MainHeadingLine2>
            </MainHeadingContainer>
          </LeftContent>
          <RightContent>
            <RightText>
              Our employee wellness programs<br />
              meets your business sense.
            </RightText>
          </RightContent>
        </CultAdvantageContainer>
      </CultAdvantageSection>

      {/* Existing Results Section */}
  

      {/* Existing Expandable Tiles Component */}
      <SectionContainer>
        <ExpandableTiles tiles={sampleTiles} />
      </SectionContainer>
    </>
  );
};

export default WhyChooseCult;