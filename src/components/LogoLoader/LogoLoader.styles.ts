import styled from 'styled-components';

export const LoaderContainer = styled.section`
  width: 100%;
  max-width: 100vw;
  // min-height: 100vh;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  // padding: var(--spacing-xl);
  box-sizing: border-box;
  /* Remove top and bottom padding to allow TopSection and HeroSection to be flush */
  padding-top: 0;
  padding-bottom: 0;

  @media (max-width: 768px) {
    // padding: var(--spacing-lg);
    padding-top: 0;
    padding-bottom: 0;
  }

  @media (max-width: 480px) {
    // padding: var(--spacing-md);
    padding-top: 0;
    padding-bottom: 0;
  }
`;

export const TopSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-3xl);

  /* Full width - override any container padding, same as HeroSection */
  width: 100vw;
  margin-left: calc(-50vw + 50%); /* Break out of container */

  /* Apply the same gradient background as HeroSection */
  background:
    linear-gradient(
      to top,
      #000000 0%,
      #000000 3%,
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

  /* Add padding for content spacing - match global section padding */
  padding: var(--spacing-3xl) var(--section-padding-horizontal);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
    text-align: center;
    padding: var(--spacing-2xl) var(--section-padding-horizontal);
  }
`;

/**
 * The "LITRATURE" text overlay.
 */
export const OverlayTitle = styled.h3`
  font-size: var(--font-size-xl);
  opacity: 0.5;
  letter-spacing: 0.16em;
  color: var(--color-text);
  // margin-bottom: var(--spacing-sm);
  font-weight: 400;
  text-transform: uppercase;
  text-align: left;
  position: absolute;
  top: var(--spacing-3xl);
  left: var(--default-padding-horizontal);

  @media (max-width: 768px) {
    font-size: var(--font-size-title-mobile);
    position: absolute;
    top: var(--spacing-3xl);
    left: var(--default-padding-horizontal);
  }
`;

export const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    margin-top: var(--spacing-3xl);
    text-align: left; /* Override parent's center alignment for mobile */
  }
`;

export const MainTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  line-height: 119%;
  letter-spacing: 0.48em;
  color: white;
  text-transform: uppercase;
  // margin: 0;

  @media (max-width: 768px) {
    font-size: clamp(1.6rem, 8vw, 1.9rem);
  }
`;

export const GradientText = styled.span`
  background: linear-gradient(90deg, #4285f4 0%, #8e44ad 50%, #e91e63 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--spacing-xl);
`;

export const Description = styled.p`
  font-size: var(--font-size-xl);
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  // margin: 0;

  @media (max-width: 768px) {
    font-size: var(--font-size-lg);
    text-align: justify; /* Maintain justification on mobile */
  }
`;

export const GuideBox = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-xl);
  position: relative;
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    padding: var(--spacing-lg);
  }
`;

export const GuideLabel = styled.div`
  font-size: var(--font-size-sm);
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  // margin-bottom: var(--spacing-xs);
`;

export const GuideTitle = styled.h2`
  font-size: var(--font-size-xl);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  // margin: 0 0 var(--spacing-lg) 0;
  background: linear-gradient(90deg, #8e44ad 0%, #e91e63 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: var(--font-size-lg);
  }
`;

export const GuideFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  // margin-top: var(--spacing-lg);
`;

export const CreatedBy = styled.span`
  font-size: var(--font-size-sm);
  color: rgba(255, 255, 255, 0.5);
`;

export const DownloadIcon = styled.div`
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transition-normal);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.4);
    transform: scale(1.05);
  }

  svg {
    width: 20px;
    height: 20px;
    fill: rgba(255, 255, 255, 0.8);
  }
`;

export const GifSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  // padding: var(--spacing-3xl) 0;

  @media (max-width: 768px) {
    // padding: var(--spacing-2xl) 0;
  }
`;

export const LogoGif = styled.img`
  width: 100%;
  height: auto;
  // max-width: 600px;
  object-fit: contain;
  display: block;

  @media (max-width: 768px) {
    max-width: 400px;
  }

  @media (max-width: 480px) {
    max-width: 300px;
  }
`;

// BeBetter Hero Section Styles - Full width at bottom
export const HeroSection = styled.div`
  /* Full width - override any container padding */
  width: 100vw;
  background: red;
  margin-left: calc(-50vw + 50%); /* Break out of container */

  /* Remove any global section padding */
  padding: var(--spacing-3xl) var(--section-padding-horizontal);

  /* Keep the gradient background */
  background:
    linear-gradient(
      to bottom,
      #000000 0%,
      #000000 3%,
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

  /* Layout and alignment */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-3xl);

  /* Positioning at bottom */
  margin-top: auto;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: var(--spacing-2xl) var(--section-padding-horizontal);
    gap: var(--spacing-xl);
  }
`;

export const HeroContent = styled.div`
  flex: 1;
  // max-width: 700px;
  text-align: left;
`;

export const HashtagText = styled.h1`
  font-size: var(--font-size-2xl);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.17em;
  // margin-bottom: var(--spacing-sm);
  background: linear-gradient(90deg, #ff3278 -17.4%, #ffdb17 71.96%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: var(--font-size-3xl);
    text-align: left;
  }
`;

export const HeroHeading = styled.h2`
  font-size: var(--font-size-6xl);
  font-weight: 800;
  line-height: 1.1;
  color: var(--color-text);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  // margin-bottom: var(--spacing-xl);

  @media (max-width: 768px) {
    font-size: var(--font-size-4xl);
    text-align: left; /* Align text to the left */
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-4xl);
    text-align: left; /* Align text to the left */
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
  font-size: var(--font-size-xl);
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  // margin-bottom: var(--spacing-md);

  @media (max-width: 768px) {
    font-size: var(--font-size-md);
    text-align: justify; /* Justify text across full width */
  }
`;

export const CallToAction = styled.p`
  font-size: var(--font-size-xl);
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;

  strong {
    color: var(--color-text);
    font-weight: 700;
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-md);
    text-align: justify; /* Justify text across full width */
  }
`;
