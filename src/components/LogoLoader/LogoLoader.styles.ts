import styled from 'styled-components';

export const LoaderContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  padding: var(--spacing-xl);
  box-sizing: border-box;
  
  @media (max-width: 768px) {
    padding: var(--spacing-lg);
  }
  
  @media (max-width: 480px) {
    padding: var(--spacing-md);
  }
`;

export const TopSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-3xl);
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: var(--spacing-3xl) 0;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
    text-align: center;
  }
`;

export const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MainTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  line-height: 1.1;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: clamp(2rem, 8vw, 3rem);
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
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: var(--font-size-lg);
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
  margin-bottom: var(--spacing-xs);
`;

export const GuideTitle = styled.h2`
  font-size: var(--font-size-xl);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0 0 var(--spacing-lg) 0;
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
  margin-top: var(--spacing-lg);
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
  padding: var(--spacing-3xl) 0;
  
  @media (max-width: 768px) {
    padding: var(--spacing-2xl) 0;
  }
`;

export const LogoGif = styled.img`
  width: 100%;
  height: auto;
  max-width: 600px;
  object-fit: contain;
  display: block;
  
  @media (max-width: 768px) {
    max-width: 400px;
  }
  
  @media (max-width: 480px) {
    max-width: 300px;
  }
`;

export const GradientDivider = styled.div`
  width: 100%;
  height: 3px;
  background: linear-gradient(
    to right,
    #0066ff 0%,    /* blue left */
    #ffff00 100%   /* yellow right */
  );
`; 