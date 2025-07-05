import { BeBetterSectionDivider } from '../ui/GradientDivider';
import type { BeBetterSectionProps } from './BeBetterSection.types';
import { STATS_DATA, FOOTER_LINKS } from './constants';
import CultLogo from '../../assets/images/Footer/cult_logo.png';
import {
  SectionContainer,
  HeroSection,
  HeroContent,
  HashtagText,
  MainHeading,
  HeroDescription,
  DescriptionText,
  CallToAction,
  FooterSection,
  FooterContent,
  CompanyInfo,
  LogoImage,
  CompanyTitle,
  CompanyDescription,
  StatsAndLinks,
  StatsGrid,
  StatItem,
  StatValue,
  StatLabel,
  FooterLinks,
  LeftLinks,
  FooterLink,
  SocialSection,
  SocialText,
  SocialIcon,
} from './BeBetterSection.styles';

export default function BeBetterSection({ className }: BeBetterSectionProps) {
  return (
    <SectionContainer className={className}>
      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <HashtagText>#BEBETTEREVERYDAY</HashtagText>
          <MainHeading>
            ISN'T
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;JUST A<br />
            &nbsp;&nbsp;&nbsp;&nbsp;HASHTAG
          </MainHeading>
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

      {/* Gradient Divider */}
      <BeBetterSectionDivider />

      {/* Footer Section */}
      <FooterSection>
        <FooterContent>
          {/* Company Info */}
          <CompanyInfo>
            <LogoImage src={CultLogo} alt='Cult Logo' />
            <CompanyTitle>
              India's largest fitness and wellness platform
            </CompanyTitle>
            <CompanyDescription>
              At cult we're transforming how organisations approach employee
              wellness and build a sustainable culture of well-being that will
              benefit them for years to come
            </CompanyDescription>
          </CompanyInfo>

          {/* Stats and Links */}
          <StatsAndLinks>
            <StatsGrid>
              {STATS_DATA.map((stat, index) => (
                <StatItem key={index}>
                  <StatValue $color={stat.color}>{stat.value}</StatValue>
                  <StatLabel $color={stat.color}>{stat.label}</StatLabel>
                </StatItem>
              ))}
            </StatsGrid>

            <FooterLinks>
              <LeftLinks>
                {FOOTER_LINKS.map((link, index) => (
                  <FooterLink key={index} href={link.href}>
                    {link.text}
                  </FooterLink>
                ))}
              </LeftLinks>

              <SocialSection>
                <SocialText>Stay connected</SocialText>
                <SocialIcon />
              </SocialSection>
            </FooterLinks>
          </StatsAndLinks>
        </FooterContent>
      </FooterSection>
    </SectionContainer>
  );
}
