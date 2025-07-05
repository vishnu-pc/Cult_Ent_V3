import { useState, useCallback } from 'react';
import { OurImpactDivider } from '../ui/GradientDivider';
import type { OurImpactProps } from './OurImpact.types';
import { DEFAULT_VIDEOS, VIDEOS_PER_PAGE } from './constants';
import {
  SectionContainer,
  ContentWrapper,
  HeaderSection,
  TitleSection,
  Subheading,
  MainTitle,
  GradientText,
  DescriptionSection,
  Description,
  VideoCardsContainer,
  VideoCard,
  ThumbnailContainer,
  PlayButton,
  CardContent,
  CardTitle,
  CardSubtitle,
  CardDescription,
  NavigationContainer,
  NavigationButton,
} from './OurImpact.styles';

export default function OurImpact({ videos = DEFAULT_VIDEOS }: OurImpactProps) {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(videos.length / VIDEOS_PER_PAGE);
  const currentVideos = videos.slice(
    currentPage * VIDEOS_PER_PAGE,
    (currentPage + 1) * VIDEOS_PER_PAGE
  );

  const handlePrevPage = useCallback(() => {
    setCurrentPage(prev => Math.max(0, prev - 1));
  }, []);

  const handleNextPage = useCallback(() => {
    setCurrentPage(prev => Math.min(totalPages - 1, prev + 1));
  }, [totalPages]);

  const handleVideoClick = useCallback((videoUrl: string) => {
    // Placeholder functionality - could open modal, navigate to video, etc.
    console.log('Opening video:', videoUrl);
    window.open(videoUrl, '_blank');
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <OurImpactDivider />
      <SectionContainer>
        <ContentWrapper>
          <HeaderSection>
            <TitleSection>
              <Subheading>OUR IMPACT</Subheading>
              <MainTitle>
                WELLNESS
                <br />
                IN <GradientText>M O T I O N</GradientText>
              </MainTitle>
            </TitleSection>
            <DescriptionSection>
              <Description>
                This is what happens when
                <br />
                wellness becomes part of your
                <br />
                company's DNA
              </Description>
            </DescriptionSection>
          </HeaderSection>

          <VideoCardsContainer>
            {currentVideos.map((video, index) => (
              <VideoCard
                key={video.id}
                custom={index}
                initial='hidden'
                animate='visible'
                variants={cardVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <ThumbnailContainer
                  onClick={() => handleVideoClick(video.videoUrl)}
                >
                  <img src={video.thumbnail} alt={`${video.title} thumbnail`} />
                  <PlayButton />
                </ThumbnailContainer>
                <CardContent>
                  <CardTitle>{video.title}</CardTitle>
                  <CardSubtitle>{video.subtitle}</CardSubtitle>
                  <CardDescription>{video.description}</CardDescription>
                </CardContent>
              </VideoCard>
            ))}
          </VideoCardsContainer>

          <NavigationContainer>
            <NavigationButton
              $disabled={currentPage === 0}
              $isNext={false}
              onClick={handlePrevPage}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
            <NavigationButton
              $disabled={currentPage >= totalPages - 1}
              $isNext={true}
              onClick={handleNextPage}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
          </NavigationContainer>
        </ContentWrapper>
      </SectionContainer>
    </>
  );
}
