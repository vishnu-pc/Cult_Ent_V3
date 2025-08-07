import styled from 'styled-components';

export const FooterSection = styled.div`
  background: #000000;
  padding-top: var(--section-padding-vertical);
  padding-bottom: var(--section-padding-vertical);
  padding-left: var(--section-padding-horizontal);
  padding-right: var(--section-padding-horizontal);
  width: 100%;
  max-width: 100vw;
  position: relative;
  box-sizing: border-box;
`;

export const FooterContent = styled.div`
  /* max-width: 1400px; */
  /* margin: 100px auto; */
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--spacing-6xl);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: var(--spacing-xl);
  }
`;

export const CompanyInfo = styled.div`
  flex: 1;
  /* max-width: 80vw; */
  padding: 0;
  margin: 0;
`;

export const LogoImage = styled.img`
  height: var(--nav-height-desktop);
  margin-bottom: var(--spacing-xl);

  @media (max-width: 1024px) {
    height: var(--nav-height-tablet);
  }

  @media (max-width: 768px) {
    height: var(--nav-height-mobile);
  }

  @media (max-width: 640px) {
    height: var(--nav-height-small-mobile);
  }
`;

export const CompanyTitle = styled.h3`
  font-family: var(--font-primary);
  font-size: var(
    --font-size-2xl
  ); /* Increased from 2xl to 3xl for better hierarchy */
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: var(--spacing-lg);
  line-height: 1.6;
  letter-spacing: 0.02em; /* Subtle letter spacing for better readability */

  @media (max-width: 1024px) {
    font-size: var(--font-size-2xl); /* Tablet scaling */
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-xl); /* Mobile scaling */
  }

  @media (max-width: 640px) {
    font-size: var(--font-size-lg); /* Small mobile scaling */
  }
`;

export const CompanyDescription = styled.p`
  font-family: var(--font-primary);
  font-size: var(--font-size-xl); /* 18px - Standard paragraph size */
  font-weight: 300;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin: 0; /* Reset default margin */

  @media (max-width: 1024px) {
    font-size: var(--font-size-md); /* Tablet scaling */
    text-align: justify;
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-md); /* Mobile scaling */
  }

  @media (max-width: 640px) {
    font-size: var(--font-size-sm); /* Small mobile scaling */
  }
`;

export const StatsAndLinks = styled.div`
  padding: 0;
  margin: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3xl);
  align-items: flex-end; /* Right-align the entire stats section */

  @media (max-width: 768px) {
    align-items: stretch; /* Full width alignment on mobile */
    width: 100%; /* Ensure full width on mobile */
  }
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Always maintain 2 columns */
  grid-template-rows: repeat(2, 1fr); /* Explicitly define 2 rows */
  gap: var(--spacing-xl);
  width: 100%; /* Ensure grid takes full width of parent */
  justify-items: end; /* Right-align grid items within their cells */

  @media (max-width: 768px) {
    //justify-items: end; /* Maintain right alignment on tablet */
    //gap: var(--spacing-lg); /* Slightly reduced gap for tablet */
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr); /* Keep 2x2 structure on mobile */
    grid-template-rows: repeat(2, 1fr); /* Keep 2x2 structure on mobile */
    gap: var(--spacing-xl); /* Compact spacing for mobile */
    justify-items: stretch; /* Full width alignment for mobile grid items */
    width: 100vw; /* Force full viewport width on mobile */
    margin-left: calc(
      -1 * var(--section-padding-horizontal)
    ); /* Compensate for section padding */
    margin-right: calc(
      -1 * var(--section-padding-horizontal)
    ); /* Compensate for section padding */
    padding-left: var(
      --section-padding-horizontal
    ); /* Restore internal padding */
    padding-right: var(
      --section-padding-horizontal
    ); /* Restore internal padding */
  }

  @media (max-width: 360px) {
    gap: var(--spacing-md); /* Extra compact spacing for very small screens */
  }
`;

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end; /* Right-align content within each stat item */
  text-align: right; /* Right-align text content */
  justify-content: center; /* Center content vertically within grid cell */

  @media (max-width: 768px) {
    align-items: flex-end; /* Maintain right alignment on tablet */
    text-align: right; /* Maintain right alignment on tablet */
  }

  @media (max-width: 480px) {
    align-items: center; /* Center align content in full-width mobile cells */
    text-align: center; /* Center align text in full-width mobile cells */
    padding: var(--spacing-sm); /* Add balanced padding for full-width cells */
  }

  @media (max-width: 360px) {
    align-items: flex-end; /* Maintain structure even on very small screens */
    text-align: right; /* Maintain structure even on very small screens */
  }
`;

export const StatValue = styled.div<{ $color: 'pink' | 'gradient' }>`
  font-family: var(--font-primary);
  font-size: var(
    --font-size-5xl
  ); /* Increased from 5xl to 6xl for better visual impact */
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.03em;
  margin-bottom: var(--spacing-sm);
  background: linear-gradient(84.15deg, #ff3278 22.2%, #fdd914 70.63%);
  background-size: 250% 250%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 1024px) {
    font-size: var(--font-size-5xl); /* Tablet scaling */
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-4xl); /* Tablet scaling */
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-3xl); /* Mobile 2x2 grid scaling */
    margin-bottom: var(--spacing-xs); /* Reduced margin for tighter grid */
  }

  @media (max-width: 360px) {
    font-size: var(--font-size-2xl); /* Very small mobile scaling */
  }
`;

export const StatLabel = styled.div<{ $color: 'pink' | 'gradient' }>`
  font-family: var(--font-primary);
  font-size: var(
    --font-size-lg
  ); /* Increased from lg to xl for better readability */
  font-weight: 300;
  background: #ffffffff;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: var(--spacing-md);
  text-transform: uppercase;
  letter-spacing: 0.03em; /* Added letter spacing for stat labels */

  @media (max-width: 1024px) {
    font-size: var(--font-size-lg); /* Tablet scaling */
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-md); /* Tablet scaling */
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-sm); /* Mobile 2x2 grid scaling */
    margin-bottom: var(--spacing-xs); /* Reduced margin for tighter grid */
    letter-spacing: 0.03em; /* Slightly reduced letter spacing for mobile */
  }

  @media (max-width: 360px) {
    font-size: var(--font-size-xs); /* Very small mobile scaling */
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border-top: 1px solid rgba(255, 255, 255, 0.1); */
`;

export const LeftLinks = styled.div`
  display: flex;
  gap: var(--spacing-sm); /* Standard spacing between links */
  justify-content: flex-end; /* Right-align the links */

  @media (max-width: 768px) {
    gap: var(--spacing-sm); /* Reduced gap for mobile */
    justify-content: flex-end; /* Maintain right alignment on tablet */
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: var(--spacing-sm); /* Compact vertical spacing */
    align-items: center; /* Center align on mobile */
  }
`;

export const FooterLink = styled.a`
  font-family: var(--font-primary);
  font-size: var(--font-size-lg); /* 18px - Standard link size */
  font-weight: 300; /* Medium weight for better clickability indication */
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  text-decoration: none;
  transition: color var(--transition-normal);
  cursor: pointer;

  &:hover {
    color: var(--color-text);
  }

  &:focus {
    outline: none;
    color: var(--color-accent-primary);
  }

  @media (max-width: 1024px) {
    font-size: var(--font-size-md); /* Tablet scaling */
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-md); /* Mobile scaling */
  }

  @media (max-width: 640px) {
    font-size: var(--font-size-sm); /* Small mobile scaling */
  }
`;

export const SocialSection = styled.div`
  display: flex;
  align-items: center;
  margin-left: var(--spacing-xl);
  gap: var(--spacing-lg); /* Standard spacing between social text and icon */
`;

export const SocialText = styled.span`
  font-family: var(--font-primary);
  font-size: var(--font-size-lg);
  font-weight: 300;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);

  @media (max-width: 768px) {
    font-size: var(--font-size-md);
  }

  @media (max-width: 640px) {
    font-size: var(--font-size-sm);
  }
`;

export const SocialIcon = styled.div`
  width: var(--spacing-2xl); /* 3rem / 48px - Using standardized spacing */
  height: var(--spacing-2xl); /* 3rem / 48px - Using standardized spacing */
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background var(--transition-normal);

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.05); /* Subtle hover animation */
  }

  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.4);
    box-shadow: 0 0 0 2px var(--color-accent-primary);
  }

  &::after {
    content: 'in';
    color: var(--color-text);
    font-size: var(
      --font-size-sm
    ); /* Increased from xs to sm for better visibility */
    font-weight: 600;
    font-family: var(--font-primary);
  }

  @media (max-width: 768px) {
    width: var(--spacing-xl); /* Smaller on mobile */
    height: var(--spacing-xl);

    &::after {
      font-size: var(--font-size-xs);
    }
  }
`;
