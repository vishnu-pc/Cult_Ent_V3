import {
  LogoLoaderDivider,
  BeBetterSectionDivider,
} from '../ui/GradientDivider';
import type { LogoLoaderProps } from './LogoLoader.types';
import {
  LoaderContainer,
  TopSection,
  TitleBlock,
  MainTitle,
  GradientText,
  RightColumn,
  Description,
  GuideBox,
  GuideLabel,
  GuideTitle,
  GuideFooter,
  CreatedBy,
  DownloadIcon,
  GifSection,
  LogoGif,
  HeroSection,
  HeroContent,
  HashtagText,
  HeroHeading,
  HeroDescription,
  DescriptionText,
  CallToAction,
} from './LogoLoader.styles';
import LastLogoGif from '../../assets/images/LastLogo/LastLogo.gif';

export default function LogoLoader({ className }: LogoLoaderProps) {
  return (
    <>
      <LogoLoaderDivider />
      <LoaderContainer className={className}>
        <TopSection>
          <TitleBlock>
            <MainTitle>
              BREAKING
              <br />
              POINT:
              <br />
              <GradientText>
                WORKPLACE
                <br />
                INSIGHTS
              </GradientText>
            </MainTitle>
          </TitleBlock>

          <RightColumn>
            <Description>
              A look into the workplace
              <br />
              wellness challenges that matter
              <br />
              most
            </Description>

            <GuideBox>
              <GuideLabel>YOUR GUIDE TO</GuideLabel>
              <GuideTitle>
                EMPLOYEE
                <br />
                HEALTH AND
                <br />
                WELLNESS
              </GuideTitle>
              <GuideFooter>
                <CreatedBy>Created by cult</CreatedBy>
                <DownloadIcon>
                  <svg viewBox='0 0 24 24' fill='currentColor'>
                    <path d='M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z' />
                  </svg>
                </DownloadIcon>
              </GuideFooter>
            </GuideBox>
          </RightColumn>
        </TopSection>

        <GifSection>
          <LogoGif
            src={LastLogoGif}
            alt='Cult Entertainment Logo'
            loading='eager'
          />
        </GifSection>

        {/* BeBetter Hero Section */}
        <HeroSection>
          <HeroContent>
            <HashtagText>#BEBETTEREVERYDAY</HashtagText>
            <HeroHeading>
              ISN'T
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;JUST A<br />
              &nbsp;&nbsp;&nbsp;&nbsp;HASHTAG
            </HeroHeading>
          </HeroContent>

          <HeroDescription>
            <DescriptionText>
              It's what happens when wellness becomes part of your company's DNA
              instead of just another checkbox.
            </DescriptionText>
            <CallToAction>
              Your competitors are figuring this out.
              <br />
              <strong>Are you?</strong>
            </CallToAction>
          </HeroDescription>
        </HeroSection>

        {/* BeBetter Section Divider */}
        <BeBetterSectionDivider />
      </LoaderContainer>
    </>
  );
}
