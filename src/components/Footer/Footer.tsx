import type { StatData, FooterLinkData } from './Footer.types';
import CultLogo from '../../assets/images/Footer/cult_logo.png';
import {
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
} from './Footer.styles';

const STATS_DATA: StatData[] = [
  {
    value: '30+',
    label: 'Cities',
    color: 'gradient',
  },
  {
    value: '2K+',
    label: 'Facilities',
    color: 'gradient',
  },
  {
    value: '20MN',
    label: 'Users',
    color: 'gradient',
  },
  {
    value: '1.5K+',
    label: 'Corporates',
    color: 'gradient',
  },
];

const FOOTER_LINKS: FooterLinkData[] = [
  {
    text: 'Contact us',
    href: '#',
  },
];

export default function Footer() {
  return (
    <FooterSection>
      <FooterContent>
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
  );
}
