import { useState, useCallback, useRef, useEffect } from 'react';
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
  IframeContainer,
  CardContent,
  CardTitle,
  CardSubtitle,
  CardDescription,
  NavigationContainer,
  NavigationButton,
} from './OurImpact.styles';

const OurImpact: React.FC<OurImpactProps> = ({ videos = DEFAULT_VIDEOS }) => {
  const [currentStartIndex, setCurrentStartIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [playingVideos, setPlayingVideos] = useState(() => new Set<number>());
  const iframeRefs = useRef<{ [key: number]: HTMLIFrameElement | null }>({});
  const autoTransitionRef = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined
  );

  // Show 3 videos at a time, scroll by 1
  const currentVideos = videos.slice(
    currentStartIndex,
    currentStartIndex + VIDEOS_PER_PAGE
  );
  const totalVideos = videos.length;
  const canGoNext = currentStartIndex + VIDEOS_PER_PAGE < totalVideos;
  const canGoPrev = currentStartIndex > 0;

  const handlePrevPage = useCallback(() => {
    if (canGoPrev) {
      setCurrentStartIndex(prev => Math.max(0, prev - 1));
    }
  }, [canGoPrev]);

  const handleNextPage = useCallback(() => {
    if (canGoNext) {
      setCurrentStartIndex(prev =>
        Math.min(totalVideos - VIDEOS_PER_PAGE, prev + 1)
      );
    }
  }, [canGoNext, totalVideos]);

  const handleIframeHover = useCallback(
    (videoId: number, isHovering: boolean) => {
      const iframe = iframeRefs.current[videoId];
      if (iframe && iframe.contentWindow) {
        try {
          const command = isHovering ? 'playVideo' : 'pauseVideo';
          iframe.contentWindow.postMessage(
            `{"event":"command","func":"${command}","args":""}`,
            '*'
          );

          // Track playing videos for auto-transition logic
          setPlayingVideos(prev => {
            const newSet = new Set(prev);
            if (isHovering) {
              newSet.add(videoId);
            } else {
              newSet.delete(videoId);
            }
            return newSet;
          });
        } catch {
          console.log('YouTube API not ready or not available');
        }
      }
    },
    []
  );

  const handleContainerHover = useCallback((hovering: boolean) => {
    setIsHovering(hovering);
  }, []);

  // Auto-transition logic
  useEffect(() => {
    const startAutoTransition = () => {
      if (autoTransitionRef.current) {
        clearTimeout(autoTransitionRef.current);
      }

      autoTransitionRef.current = setTimeout(() => {
        // Only auto-transition if no videos are playing and user is not hovering
        if (playingVideos.size === 0 && !isHovering) {
          if (canGoNext) {
            handleNextPage();
          } else {
            // Loop back to start when reaching the end
            setCurrentStartIndex(0);
          }
        }
        startAutoTransition(); // Restart the timer
      }, 5000); // 15 seconds
    };

    startAutoTransition();

    return () => {
      if (autoTransitionRef.current) {
        clearTimeout(autoTransitionRef.current);
      }
    };
  }, [canGoNext, handleNextPage, isHovering, playingVideos.size]);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <OurImpactDivider />
      <SectionContainer id='our-impact'>
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

          <VideoCardsContainer
            onMouseEnter={() => handleContainerHover(true)}
            onMouseLeave={() => handleContainerHover(false)}
          >
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
                <IframeContainer
                  onMouseEnter={() => handleIframeHover(video.id, true)}
                  onMouseLeave={() => handleIframeHover(video.id, false)}
                >
                  <iframe
                    ref={el => {
                      iframeRefs.current[video.id] = el;
                    }}
                    src={`${video.videoUrl}?enablejsapi=1&mute=1&controls=1`}
                    title={`${video.title} video`}
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    referrerPolicy='strict-origin-when-cross-origin'
                    allowFullScreen
                  />
                </IframeContainer>
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
              $disabled={!canGoPrev}
              $isNext={false}
              onClick={handlePrevPage}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
            <NavigationButton
              $disabled={!canGoNext}
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
};

export default OurImpact;
