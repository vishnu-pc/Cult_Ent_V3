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
  const [isMobile, setIsMobile] = useState(false);
  const [isRewinding, setIsRewinding] = useState(false);
  const [isAutoTransitioning, setIsAutoTransitioning] = useState(false);
  const iframeRefs = useRef<{ [key: number]: HTMLIFrameElement | null }>({});
  const autoTransitionRef = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined
  );

  // Check if mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1200);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Show 3 videos on desktop, 1 on mobile
  const videosPerPage = isMobile ? 1 : VIDEOS_PER_PAGE;
  const currentVideos = videos.slice(
    currentStartIndex,
    currentStartIndex + videosPerPage
  );
  const totalVideos = videos.length;
  const canGoNext = currentStartIndex + videosPerPage < totalVideos;
  const canGoPrev = currentStartIndex > 0;

  const handlePrevPage = useCallback(() => {
    if (canGoPrev) {
      const stepSize = isMobile ? 1 : 1; // Move by 1 in both cases
      setCurrentStartIndex(prev => Math.max(0, prev - stepSize));
    }
  }, [canGoPrev, isMobile]);

  const handleNextPage = useCallback(() => {
    if (canGoNext) {
      const stepSize = isMobile ? 1 : 1; // Move by 1 in both cases
      setCurrentStartIndex(prev =>
        Math.min(totalVideos - videosPerPage, prev + stepSize)
      );
    }
  }, [canGoNext, isMobile, totalVideos, videosPerPage]);

  const handleIframeHover = useCallback(
    (videoId: number, isHovering: boolean) => {
      // Don't respond to hover events during auto-transition
      if (isAutoTransitioning) return;

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
    [isAutoTransitioning]
  );

  const handleContainerHover = useCallback(
    (hovering: boolean) => {
      // Don't respond to hover events during auto-transition
      if (isAutoTransitioning) return;

      setIsHovering(hovering);
    },
    [isAutoTransitioning]
  );

  // Auto-transition logic
  useEffect(() => {
    const startAutoTransition = () => {
      if (autoTransitionRef.current) {
        clearTimeout(autoTransitionRef.current);
      }

      autoTransitionRef.current = setTimeout(() => {
        // Only auto-transition if no videos are playing and user is not hovering
        if (playingVideos.size === 0 && !isHovering) {
          setIsAutoTransitioning(true); // Disable hover interactions during transition

          if (canGoNext) {
            handleNextPage();
            // Re-enable hover after transition completes
            setTimeout(() => setIsAutoTransitioning(false), 500);
          } else {
            // Fast rewind animation when reaching the end
            setIsRewinding(true);

            // Create a fast sequence of backwards transitions
            const rewindSpeed = 10; // milliseconds between steps

            let step = 0;
            const rewindInterval = setInterval(() => {
              step++;
              const newIndex = currentStartIndex - step;

              if (newIndex <= 0) {
                setCurrentStartIndex(0);
                setIsRewinding(false);
                setIsAutoTransitioning(false); // Re-enable hover after rewind
                clearInterval(rewindInterval);
              } else {
                setCurrentStartIndex(newIndex);
              }
            }, rewindSpeed);
          }
        }
        startAutoTransition(); // Restart the timer
      }, 15000); // 5 seconds
    };

    startAutoTransition();

    return () => {
      if (autoTransitionRef.current) {
        clearTimeout(autoTransitionRef.current);
      }
    };
  }, [
    canGoNext,
    handleNextPage,
    isHovering,
    playingVideos.size,
    currentStartIndex,
  ]);

  const cardVariants = {
    hidden: { opacity: 0, x: 100 }, // Start from right (positive x)
    visible: { opacity: 1, x: 0 }, // Move to center (x: 0)
    rewind: {
      opacity: 0.7,
      scale: 0.95,
      x: -50,
      transition: { duration: 0.1 },
    }, // Move left during rewind
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
                IN <GradientText>MOTION</GradientText>
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
                animate={isRewinding ? 'rewind' : 'visible'}
                variants={cardVariants}
                whileHover={isAutoTransitioning ? {} : { scale: 1.02 }} // Disable hover during auto-transition
                transition={{
                  duration: isRewinding ? 0.1 : 0.3,
                  ease: 'easeOut',
                }}
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
