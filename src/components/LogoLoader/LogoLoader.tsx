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
import PDFCatalogCarousel from '../PDFCatalogCarousel';

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
            <Description>
              A look into the workplace wellness challenges that matter most
            </Description>
          </TitleBlock>

          <RightColumn>
            <PDFCatalogCarousel />
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
      </LoaderContainer>
      <BeBetterSectionDivider />
    </>
  );
}
