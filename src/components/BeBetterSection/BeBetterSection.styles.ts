import styled from 'styled-components';

export const SectionContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const HeroSection = styled.div`
  min-height: 60vh;
  padding: var(--spacing-3xl) var(--spacing-xl);
  background:
    linear-gradient(
      to bottom,
      #000000 0%,
      #000000 70%,
      rgba(255, 20, 147, 0.3) 95%,
      rgba(152, 5, 113, 0.5) 100%
    ),
    linear-gradient(
      to right,
      rgba(255, 20, 147, 0.2) 0%,
      #000000 20%,
      #000000 40%,
      rgba(0, 102, 255, 0.9) 100%
    );
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-3xl);

  @media (max-width: 768px) {
    flex-direction: column;
    padding: var(--spacing-2xl) var(--spacing-md);
    gap: var(--spacing-xl);
  }
`;

export const HeroContent = styled.div`
  flex: 1;
  max-width: 700px;
  text-align: left;
`;

export const HashtagText = styled.h1`
  font-size: var(--font-size-2xl);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: var(--spacing-sm);
  background: linear-gradient(90deg, #ff0000 0%, #ff8800 50%, #ffff00 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: var(--font-size-xl);
  }
`;

export const MainHeading = styled.h2`
  font-size: var(--font-size-6xl);
  font-weight: 800;
  line-height: 1.1;
  color: var(--color-text);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: var(--spacing-xl);

  @media (max-width: 768px) {
    font-size: var(--font-size-4xl);
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-3xl);
  }
`;

export const HeroDescription = styled.div`
  flex: 1;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
`;

export const DescriptionText = styled.p`
  font-size: var(--font-size-lg);
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: var(--spacing-md);

  @media (max-width: 768px) {
    font-size: var(--font-size-md);
  }
`;

export const CallToAction = styled.p`
  font-size: var(--font-size-lg);
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;

  strong {
    color: var(--color-text);
    font-weight: 700;
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-md);
  }
`;

export const FooterSection = styled.div`
  background: #000000;
  padding: var(--spacing-4xl) var(--spacing-xl);

  @media (max-width: 768px) {
    padding: var(--spacing-3xl) var(--spacing-md);
  }
`;

export const FooterContent = styled.div`
  max-width: 1400px;
  margin: 100px auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--spacing-3xl);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: var(--spacing-xl);
  }
`;

export const CompanyInfo = styled.div`
  flex: 1;
  max-width: 500px;
`;

export const LogoImage = styled.img`
  height: 80px;
  margin-bottom: var(--spacing-xl);

  @media (max-width: 768px) {
    height: 70px;
  }
`;

export const CompanyTitle = styled.h3`
  font-size: var(--font-size-2xl);
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: var(--spacing-lg);
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: var(--font-size-xl);
  }
`;

export const CompanyDescription = styled.p`
  font-size: var(--font-size-lg);
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: var(--font-size-md);
  }
`;

export const StatsAndLinks = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-2xl) var(--spacing-3xl);
  margin-bottom: var(--spacing-2xl);

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }
`;

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const StatValue = styled.div<{ $color: 'pink' | 'gradient' }>`
  font-size: var(--font-size-5xl);
  font-weight: 800;
  line-height: 1;
  margin-bottom: var(--spacing-sm);
  background: linear-gradient(90deg, #ff1493 0%, #ff8c00 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: var(--font-size-4xl);
  }
`;

export const StatLabel = styled.div<{ $color: 'pink' | 'gradient' }>`
  font-size: var(--font-size-lg);
  font-weight: 600;
  background: linear-gradient(90deg, #ff1493 0%, #ff8c00 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: var(--font-size-md);
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--spacing-lg);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

export const LeftLinks = styled.div`
  display: flex;
  gap: var(--spacing-lg);

  @media (max-width: 480px) {
    flex-direction: column;
    gap: var(--spacing-sm);
  }
`;

export const FooterLink = styled.a`
  font-size: var(--font-size-lg);
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color var(--transition-normal);

  &:hover {
    color: var(--color-text);
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-md);
  }
`;

export const SocialSection = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
`;

export const SocialText = styled.span`
  font-size: var(--font-size-lg);
  color: rgba(255, 255, 255, 0.8);

  @media (max-width: 768px) {
    font-size: var(--font-size-md);
  }
`;

export const SocialIcon = styled.div`
  width: 32px;
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background var(--transition-normal);

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }

  &::after {
    content: 'in';
    color: var(--color-text);
    font-size: var(--font-size-xs);
    font-weight: 600;
  }
`;
