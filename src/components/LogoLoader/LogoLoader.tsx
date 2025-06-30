import React from 'react';
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
  LogoGif
} from './LogoLoader.styles';
import LastLogoGif from '../../assets/images/LastLogo/LastLogo.gif';

export default function LogoLoader({ className }: LogoLoaderProps) {
  return (
    <LoaderContainer className={className}>
      <TopSection>
        <TitleBlock>
          <MainTitle>
            BREAKING<br />
            POINT:<br />
            <GradientText>WORKPLACE<br />
            INSIGHTS</GradientText>
          </MainTitle>
        </TitleBlock>
        
        <RightColumn>
          <Description>
            A look into the workplace<br />
            wellness challenges that matter<br />
            most
          </Description>
          
          <GuideBox>
            <GuideLabel>YOUR GUIDE TO</GuideLabel>
            <GuideTitle>
              EMPLOYEE<br />
              HEALTH AND<br />
              WELLNESS
            </GuideTitle>
            <GuideFooter>
              <CreatedBy>Created by cult</CreatedBy>
              <DownloadIcon>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                </svg>
              </DownloadIcon>
            </GuideFooter>
          </GuideBox>
        </RightColumn>
      </TopSection>
      
      <GifSection>
        <LogoGif
          src={LastLogoGif}
          alt="Cult Entertainment Logo"
          loading="eager"
        />
      </GifSection>
    </LoaderContainer>
  );
} 